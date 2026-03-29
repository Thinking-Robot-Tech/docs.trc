---
sidebar_position: 3
title: L02 - Reading an Input Button
---

# 🕹️ Reading a Push Button

Now that we can control an output (LED), let's read an input!

## Setup
Connect a push button to Digital Pin 2 and a pull-down resistor to GND.

## The Code
```cpp
const int buttonPin = 2;     // the number of the pushbutton pin
const int ledPin =  13;      // the number of the LED pin

int buttonState = 0;         // variable for reading the pushbutton status

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(buttonPin, INPUT);
}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);

  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH) {
    digitalWrite(ledPin, HIGH);
  } else {
    digitalWrite(ledPin, LOW);
  }
}
```
