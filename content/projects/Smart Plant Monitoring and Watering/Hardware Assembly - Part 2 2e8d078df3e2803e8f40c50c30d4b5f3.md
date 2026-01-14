---
sidebar_position: 4
---
# Hardware Assembly - Part 2

### ⚠️ Safety Checkpoint

We are now working with water and power.

1. Ensure your 12V wall adapter is **UNPLUGGED** while wiring.
2. Keep the water bucket far away from your breadboard and laptop.

---

### 1. Understanding the Relay

The ESP8266 is too weak to power the pump directly—it would fry the chip! We use a **Relay Module**. Think of a relay as a light switch that the ESP8266 can flick on and off electronically.

The relay has two sides:

- **Low Voltage Side (Input):** Connects to the ESP8266 to receive commands.
- **High Voltage Side (Output):** Acts as the switch for the pump power.

---

### 2. Wiring the Relay to the ESP (Input)

First, let's connect the control wires so the brain can talk to the switch.

**Step 1: Control Wires**

- **VCC** → 5V Rail on Breadboard (Relays usually need 5V to switch reliably)
- **GND** → GND Rail on Breadboard
- **IN (Input)** → **Pin D5 (GPIO 14)** on the NodeMCU.

---

### 3. Wiring the Pump to the Relay (Output)

Now we wire the pump to the "switch" part of the relay. We will interrupt the pump's red power wire with the relay.

**Step 2: Pump Power Wires**

1. Connect the **Black Wire** of the water pump directly to the **GND Rail (0V)** of your power supply.
2. Connect the **Red Wire** of the water pump to the middle screw terminal of the relay, labeled **COM (Common)**.
3. Connect a wire from the **5V Rail** (or 12V rail, depending on your specific pump voltage) to the screw terminal labeled **NO (Normally Open)**.

*How it works: Normally, the circuit is Open (broken), so the pump is OFF. When the ESP sends a signal, the relay clicks closed, connecting the 5V power to the pump's red wire, turning it ON.*

*(Placeholder: Insert clear diagram focusing specifically on the Relay screw terminals and pump wires)*

**Assembly Complete! Time to upload the intelligence. Click Next.**

#