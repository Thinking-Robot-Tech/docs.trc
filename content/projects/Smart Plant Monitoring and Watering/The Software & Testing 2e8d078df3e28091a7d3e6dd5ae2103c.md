---
sidebar_position: 5
---
# The Software & Testing

### 1. Setting Up Your Environment

Before we write code, your computer needs to know how to talk to the ESP8266 chip.

> 🛠️ First Time Here?
If you have not set up the Arduino IDE for ESP8266 yet, please follow our [ESP8266 Setup Guide] first.
> 
> 
> If you are brand new to coding, check out our **[Coding Basics Primer]** to understand variables and loops.
> 

---

### 2. The Automation Code

Copy the code below into your Arduino IDE. Read the comments (the lines starting with `//`) to understand what each block does.

```cpp
// ==========================================
// Thinking Robot - Smart Garden Monitor (V1)
// ==========================================

// --- 1. Pin Definitions ---
// We tell the code which GPIO pins are connected to which devices.
const int SOIL_SENSOR_PIN = D1; // Input: The soil sensor digital pin
const int LED_PIN = D2;         // Output: The status LED
const int RELAY_PIN = D5;       // Output: The Relay controlling the pump

// --- 2. Setup (Runs Once) ---
// This function runs only when the ESP first turns on.
void setup() {
  // Start Serial communication for debugging (sending messages to the computer)
  Serial.begin(115200);
  Serial.println("Thinking Robot Garden System Starting...");

  // Set the pin modes (INPUT for reading sensors, OUTPUT for controlling things)
  pinMode(SOIL_SENSOR_PIN, INPUT);
  pinMode(LED_PIN, OUTPUT);
  pinMode(RELAY_PIN, OUTPUT);

  // Ensure Pump and LED are OFF to start
  // Note: Some relays are "Active LOW", meaning LOW turns them ON. 
  // If your pump starts immediately, change HIGH to LOW here.
  digitalWrite(RELAY_PIN, HIGH); 
  digitalWrite(LED_PIN, LOW);
  
  delay(2000); // Wait 2 seconds to stabilize
}

// --- 3. The Loop (Runs Forever) ---
// This function runs over and over again, thousands of times per second.
void loop() {
  // A. Read the Sensor
  // DigitalRead gives us 1 (HIGH) if Dry, or 0 (LOW) if Wet.
  int sensorState = digitalRead(SOIL_SENSOR_PIN);

  // B. The Logic (Decision Making)
  if (sensorState == HIGH) {
    // IF the sensor sends a HIGH signal, the soil is DRY.
    Serial.println("Status: Soil is DRY. Watering plant...");
    
    // Turn ON the LED and the Pump Relay
    digitalWrite(LED_PIN, HIGH);
    digitalWrite(RELAY_PIN, LOW); // LOW usually activates the relay switch
    
  } else {
    // ELSE (if sensorState is LOW), the soil is WET.
    Serial.println("Status: Soil is WET. Standby.");
    
    // Turn OFF the LED and the Pump Relay
    digitalWrite(LED_PIN, LOW);
    digitalWrite(RELAY_PIN, HIGH); // HIGH usually deactivates the relay
  }

  // C. Wait
  // Wait for 1 second before checking again so we don't flood the Serial Monitor.
  delay(1000); 
}
```

**Step-by-Step to Upload:**

1. Plug your ESP8266 into your computer via USB.
2. In Arduino IDE, select **Tools > Board > NodeMCU 1.0 (ESP-12E Module)**.
3. Select the correct **Port** under Tools.
4. Click the **Upload** button (the arrow icon). Wait until it says "Done uploading."

---

### 3. Testing & Tuning

Let's verify it works before putting it in a real plant.

1. **Open Serial Monitor:** In Arduino IDE, click the magnifying glass icon (top right). Set the baud rate to **115200**.
2. **Dry Test:** Hold the sensor in the air.
    - *Expected Result:* Serial Monitor should say "Status: Soil is DRY". The LED should turn ON. You should hear the Relay click. The pump should run.
3. **Wet Test:** Dip the tips of the sensor into a cup of water.
    - *Expected Result:* Serial Monitor should say "Status: Soil is WET". The LED and Pump should turn OFF.
4. **Tuning the Sensor:** If the sensor doesn't trigger correctly, use a small screwdriver to gently turn the blue potentiometer dial on the sensor module until the little light on the module turns on when touched by water, and off when in the air.

---

> 🆘 Troubleshooting Box: Common Issues
> 
> - **Issue: The pump runs continuously, even in water.**
>     - **Fix:** Your relay might be "Active High" instead of "Active Low". In the code loop, swap the `LOW` and `HIGH` values in the `digitalWrite(RELAY_PIN, ...)` lines.
> - **Issue: The sensor LED works, but the ESP isn't reacting.**
>     - **Fix:** Double-check the wiring from the sensor's "DO" pin to the ESP's "D1" pin. Ensure it's tight.
> - **Issue: Cannot upload code ("esptool.py error").**
>     - **Fix:** Ensure you selected the correct COM Port. Try holding the "FLASH" button on the NodeMCU while plugging in the USB cable.

---

### 4. Quick Quiz 🧠

Let's check your understanding!

**1. Which component is the "Input" in our system?**
A) The Water Pump
B) The Relay
C) The Soil Moisture Sensor

**2. Why do we need a Relay Module?**
A) To measure the water temperature.
B) Because the ESP8266 isn't strong enough to power the pump directly.
C) To make the pump run quieter.

**3. In our digital code, what signal does the sensor send when the soil is DRY?**
A) LOW (0)
B) HIGH (1)
C) It sends an analog voltage value.

**(Answers: 1:C, 2:B, 3:B)**