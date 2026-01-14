---
sidebar_position: 6
---
# Understanding the Code

### 5. Code Deep Dive: How it Works

Let's break down the program line-by-line. Understanding this will help you modify the code later (for example, to add more sensors!).

### Part A: The Names (Variables)

Before the code starts, we give meaningful names to the numbers. This makes the code easier to read.

```cpp
const int SOIL_SENSOR_PIN = D1;
const int LED_PIN = D2;
const int RELAY_PIN = D5;
```

- **`const int`**: This tells the ESP, "I am creating a whole number (integer) that will never change (constant)."
- **`SOIL_SENSOR_PIN = D1`**: Instead of remembering that the sensor is on pin `D1`, we can now just write `SOIL_SENSOR_PIN`. It’s like saving a contact in your phone instead of memorizing the number.

### Part B: The Setup (Running Once)

The `setup()` function runs **only one time** when you first power on the board. It’s like the pilot's checklist before takeoff.

```cpp
void setup() {
  Serial.begin(115200);
```

- **`Serial.begin(115200);`**: This opens the communication line between the ESP8266 and your computer. `115200` is the speed of conversation (baud rate). Without this, the `Serial.print` commands later won't work.

```cpp
  pinMode(SOIL_SENSOR_PIN, INPUT);
  pinMode(RELAY_PIN, OUTPUT);
```

- **`pinMode(..., INPUT)`**: We tell the ESP that the Soil Sensor pin is an **Input**. We are *listening* to it (like an ear).
- **`pinMode(..., OUTPUT)`**: We tell the ESP that the Relay pin is an **Output**. We are *commanding* it (like a voice).

```cpp
  digitalWrite(RELAY_PIN, HIGH);
```

- **`digitalWrite(RELAY_PIN, HIGH)`**: We immediately turn the Relay **OFF** (Logic High usually turns relays off) to make sure water doesn't start spraying the moment you plug it in.

### Part C: The Loop (Running Forever)

The `loop()` function is the heart of the automation. It repeats itself continuously as fast as it can (or as slow as we tell it).

**1. The Senses**

```cpp
  int sensorState = digitalRead(SOIL_SENSOR_PIN);
```

- **`digitalRead(...)`**: This command checks the voltage on the pin.
    - If it sees 3.3V, it returns **`HIGH` (1)**.
    - If it sees 0V, it returns **`LOW` (0)**.
- We save this result into a variable called `sensorState` so we can use it in the next step.

**2. The Decision (The "If" Statement)**

```cpp
  if (sensorState == HIGH) {
```

- **`if (...)`**: This is the decision maker. It asks: "Is the variable `sensorState` equal to `HIGH`?"
- *Note on Hardware:* On most digital soil sensors, **HIGH means DRY** (because electricity can't flow through dry soil) and **LOW means WET**.

**3. The Action (True)**
If the answer was **YES (It is Dry)**, we run the code inside the first set of brackets `{ ... }`:

```cpp
    Serial.println("Status: Soil is DRY...");
    digitalWrite(RELAY_PIN, LOW);
```

- **`Serial.println(...)`**: Sends a text message to your computer screen.
- **`digitalWrite(RELAY_PIN, LOW)`**: We send a "LOW" signal (0 Volts) to the relay. This activates the electromagnet, closing the switch and turning on the pump. **Water starts flowing!**

**4. The Action (False)**
If the answer was **NO (It is Wet)**, we skip to the `else` block:

```cpp
  } else {
    digitalWrite(RELAY_PIN, HIGH);
  }
```

- **`else`**: This handles every other possibility. If it's not dry, it must be wet.
- **`digitalWrite(..., HIGH)`**: We send a "HIGH" signal (3.3 Volts). The relay electromagnet lets go, the switch opens, and the pump stops.

**5. The Pause**

```cpp
  delay(1000);
```

- **`delay(1000)`**: This freezes the ESP8266 for 1000 milliseconds (1 second).
- **Why?** Without this, the ESP would print "Status: Dry" thousands of times per second, crashing your computer and making the relay jitter. A 1-second pause makes the system stable.