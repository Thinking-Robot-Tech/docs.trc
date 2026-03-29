---
sidebar_position: 2
title: L01 - Blinking an LED
---

# 🔴 Blinking an LED with Arduino

Welcome to the **"Hello World"** of hardware: making an LED blink!

## What You Need
- 1x Arduino Uno
- 1x LED (Any color!)
- 1x 220-ohm Resistor
- Breadboard & Jumper wires

## The Circuit
1. Connect the long leg (anode) of the LED to Digital Pin 13 on the Arduino.
2. Connect the short leg (cathode) to a 220-ohm resistor.
3. Connect the other end of the resistor to GND.

## The Code

```cpp
void setup() {
  // Initialize digital pin 13 as an output.
  pinMode(13, OUTPUT);
}

void loop() {
  digitalWrite(13, HIGH);  // Turn the LED on
  delay(1000);             // Wait for a second
  digitalWrite(13, LOW);   // Turn the LED off
  delay(1000);             // Wait for a second
}
```

Upload this to your Arduino and watch the magic!
