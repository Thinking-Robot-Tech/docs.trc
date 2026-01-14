---
sidebar_position: 3
---
# Hardware Assembly - Part 1

### 1. The Power Backbone ⚡

Before we connect the smart parts, we need a stable power foundation. The ESP8266 runs on 3.3 Volts, but our pump and relay might need 5V. The **Breadboard Power Supply Module** solves this by taking the 12V from the wall adapter and splitting it into safe 3.3V and 5V rails on your breadboard.

> 📘 New to Breadboards?
If you have never used a breadboard before, stop here and read our quick guide: [Link to Breadboard Basics Page]. It will explain how the hidden rows and columns are connected.
> 

**Step 1: Power up the Board**

1. Snap the **Power Supply Module** onto one end of your breadboard.
2. Ensure the yellow jumpers on the module are set to output **3.3V** on one side rail and **5V** on the other side rail.
3. Plug your ESP8266 NodeMCU into the middle of the breadboard.
4. Use jumper wires to connect the **GND** (Ground) pin of the ESP to the **blue (-) rail** and the **VIN** (or 3V3) pin to the **red (+) rail**.

*(Placeholder: Insert Image of Breadboard with Power Module and ESP8266 connected via power rails)*

---

### 2. Connecting the Soil Sensor (Input)

Now let's give the brain its sense of touch. We will use the **Digital Output (DO)** pin of the sensor module. This sends a simple "YES" (Dry) or "NO" (Wet) signal to the ESP8266.

**Step 2: Wire the Sensor**

1. Connect the fork-shaped probe to the sensor module using the two long wires.
2. Connect the module to the ESP8266 as follows:
    - **VCC** → 3.3V Rail (Red line on breadboard)
    - **GND** → GND Rail (Blue line on breadboard)
    - **DO (Digital Output)** → **Pin D1 (GPIO 5)** on the NodeMCU.

*(Placeholder: Insert Image showing Soil Sensor module wired to ESP8266 Pin D1)*

---

### 3. Adding a Status LED (Indicator)

It's helpful to see visual feedback when the pump is supposed to be running. Let's add a simple LED that turns on whenever the plant is being watered.

**Step 3: Wire the LED**

1. Place an LED on the breadboard. Remember, the **longer leg** is Positive (+), and the shorter leg is Negative (-).
2. Connect the **Shorter Leg (-)** to the GND rail using a 220Ω or 330Ω resistor (this protects the LED from burning out).
3. Connect the **Longer Leg (+)** directly to **Pin D2 (GPIO 4)** on the NodeMCU.

**Great job! The "Brain" (ESP), "Senses" (Sensor), and "Indicator" (LED) are wired. Click Next to connect the heavy-duty parts.**

#