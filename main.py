import customtkinter as ctk
import subprocess
import threading

# --- Configuration ---
ctk.set_appearance_mode("Dark")  # Modes: "System", "Dark", "Light"
ctk.set_default_color_theme("blue")  # Themes: "blue", "green", "dark-blue"

class GitGUI(ctk.CTk):
    def __init__(self):
        super().__init__()

        # Window setup
        self.title("Git Command Center")
        self.geometry("600x650")
        self.grid_columnconfigure(0, weight=1)
        self.grid_columnconfigure(1, weight=1)

        # Title Label
        self.label = ctk.CTkLabel(self, text="Git Automator", font=("Roboto Medium", 24))
        self.label.grid(row=0, column=0, columnspan=2, pady=20)

        # Input Field (For Commit Messages or Branch Names)
        self.input_entry = ctk.CTkEntry(self, placeholder_text="Enter Commit Msg / Branch Name here...")
        self.input_entry.grid(row=1, column=0, columnspan=2, padx=20, pady=(0, 20), sticky="ew")

        # --- SECTION 1: The "Daily Driver" Stack ---
        self.lbl_daily = ctk.CTkLabel(self, text="Daily Workflow", text_color="gray")
        self.lbl_daily.grid(row=2, column=0, columnspan=2, sticky="w", padx=20)

        # Button: Quick Push
        self.btn_push = ctk.CTkButton(self, text="1. Add + Commit + Push", fg_color="#2CC985", hover_color="#229A66",
                                      command=lambda: self.run_sequence(self.seq_quick_push))
        self.btn_push.grid(row=3, column=0, columnspan=2, padx=20, pady=5, sticky="ew")

        # Button: Pull
        self.btn_pull = ctk.CTkButton(self, text="2. Pull (Sync)", command=lambda: self.run_sequence(self.seq_pull))
        self.btn_pull.grid(row=4, column=0, columnspan=2, padx=20, pady=5, sticky="ew")

        # --- SECTION 2: The "Undo / Fix" Stack ---
        self.lbl_fix = ctk.CTkLabel(self, text="Time Travel & Fixes", text_color="gray")
        self.lbl_fix.grid(row=5, column=0, columnspan=2, sticky="w", padx=20, pady=(15, 0))

        # Button: Undo Last Commit (Soft)
        self.btn_soft = ctk.CTkButton(self, text="Undo Last Commit (Keep Files)", fg_color="#E58F28", hover_color="#D6821F",
                                      command=lambda: self.run_sequence(self.seq_undo_soft))
        self.btn_soft.grid(row=6, column=0, padx=20, pady=5, sticky="ew")

        # Button: Discard Changes (Hard)
        self.btn_hard = ctk.CTkButton(self, text="Discard Local Changes", fg_color="#C92C2C", hover_color="#9A2222",
                                      command=lambda: self.run_sequence(self.seq_discard_changes))
        self.btn_hard.grid(row=6, column=1, padx=20, pady=5, sticky="ew")

        # --- SECTION 3: Utility Stack ---
        self.lbl_util = ctk.CTkLabel(self, text="Utilities", text_color="gray")
        self.lbl_util.grid(row=7, column=0, columnspan=2, sticky="w", padx=20, pady=(15, 0))

        # Button: Status
        self.btn_status = ctk.CTkButton(self, text="Check Status", command=lambda: self.run_sequence(self.seq_status))
        self.btn_status.grid(row=8, column=0, padx=20, pady=5, sticky="ew")

        # Button: New Branch
        self.btn_branch = ctk.CTkButton(self, text="Create New Branch", command=lambda: self.run_sequence(self.seq_new_branch))
        self.btn_branch.grid(row=8, column=1, padx=20, pady=5, sticky="ew")

        # --- Console Output ---
        self.console = ctk.CTkTextbox(self, height=200)
        self.console.grid(row=9, column=0, columnspan=2, padx=20, pady=20, sticky="nsew")
        self.console.insert("0.0", "Ready. Enter a message above if committing.\n")

    # --- CORE RUNNER FUNCTION ---
    def run_command(self, cmd_list):
        """Runs a single git command and logs output."""
        try:
            cmd_str = " ".join(cmd_list)
            self.log(f"> Executing: {cmd_str}")
            
            # Run command
            result = subprocess.run(cmd_list, capture_output=True, text=True, check=False)
            
            if result.stdout:
                self.log(result.stdout)
            if result.stderr:
                self.log(f"[LOG/ERR]: {result.stderr}")
                
            return result.returncode == 0
        except Exception as e:
            self.log(f"Error: {e}")
            return False

    def log(self, message):
        self.console.insert("end", f"{message}\n")
        self.console.see("end")

    def run_sequence(self, sequence_func):
        """Runs the sequence in a separate thread so GUI doesn't freeze."""
        threading.Thread(target=sequence_func).start()

    # --- DEFINED SEQUENCES ---

    def seq_quick_push(self):
        """Sequence: Add . -> Commit -> Push Origin Main"""
        msg = self.input_entry.get()
        if not msg:
            msg = "Update" # Default message if empty
        
        self.log("--- STARTING PUSH SEQUENCE ---")
        if self.run_command(["git", "add", "."]):
            if self.run_command(["git", "commit", "-m", msg]):
                self.run_command(["git", "push", "origin", "main"])
        self.log("--- END SEQUENCE ---")

    def seq_pull(self):
        """Sequence: Pull Origin Main"""
        self.log("--- STARTING PULL SEQUENCE ---")
        self.run_command(["git", "pull", "origin", "main"])

    def seq_undo_soft(self):
        """Sequence: Reset Soft (Undoes commit, keeps file changes in stage)"""
        self.log("--- UNDOING LAST COMMIT (SOFT) ---")
        self.run_command(["git", "reset", "--soft", "HEAD~1"])

    def seq_discard_changes(self):
        """Sequence: Restore . (DANGEROUS: Deletes local file changes)"""
        self.log("--- DISCARDING LOCAL CHANGES ---")
        # 'restore .' discards changes in current working directory
        self.run_command(["git", "restore", "."]) 
        # 'clean -fd' removes untracked files
        self.run_command(["git", "clean", "-fd"]) 

    def seq_new_branch(self):
        """Sequence: Checkout -b [name]"""
        branch_name = self.input_entry.get()
        if not branch_name:
            self.log("ERROR: Please enter a branch name in the input box first!")
            return
        self.log(f"--- CREATING BRANCH {branch_name} ---")
        self.run_command(["git", "checkout", "-b", branch_name])

    def seq_status(self):
        """Sequence: Git Status"""
        self.log("--- CHECKING STATUS ---")
        self.run_command(["git", "status"])

if __name__ == "__main__":
    app = GitGUI()
    app.mainloop()