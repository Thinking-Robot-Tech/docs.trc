# 📚 How to Add a New Course / Parent Directory

This guide explains how to add a new top-level category (e.g., a new "STM32 Course" or "Robotics Kit") to the documentation site.

There are **two main parts** to this process: updating the configuration and creating the file structure.

---

## 🛠️ Step 1: Update `config.js`

Open `config.js` in the root directory. You need to replicate the existing setup for Arduino or ESP32.

**Perform these 2 changes:**

1.  **Copy/Paste the Navigation Entry:** Find the navigation array and duplicate the existing block.
2.  **Copy/Paste the Sidebar Reference:** Ensure the config knows where to find the sidebar for this new course.

### Example Code Snippet
```javascript
// Inside config.js

// 1. Add to Navigation (Navbar)
nav: [
    { text: 'Arduino Course', link: '/arduino/intro' }, 
    { text: 'ESP32 Course', link: '/esp32/intro' },
    
    // 👇 ADD YOUR NEW COURSE HERE
    { text: 'New Course Name', link: '/new-folder-name/intro' }, 
],

// 2. Add Sidebar Configuration
sidebar: {
    '/arduino/': arduinoSidebar,
    '/esp32/': esp32Sidebar,

    // 👇 ADD YOUR NEW SIDEBAR REFERENCE HERE
    '/new-folder-name/': newCourseSidebar, 
}