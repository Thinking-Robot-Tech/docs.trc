---
sidebar_position: 2
title: ESP32 WiFi Connection Guide
---

# 🌐 Connecting your ESP32 to Wi-Fi

The ESP32 is built for the Internet of Things! Let's connect it to your home router.

## The Script

```cpp
#include <WiFi.h>

const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";

void setup() {
  Serial.begin(115200);
  delay(10);

  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  // Your code here
}
```

- Open the Serial Monitor at `115200` baud.
- Enter your SSID and Password. 
- You should see the IP Address printed once connected!
