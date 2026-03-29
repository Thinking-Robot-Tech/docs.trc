---
sidebar_position: 3
title: ESP32 Simple Web Server
---

# 📡 Creating a Simple Web Server

Now that your ESP32 is on the network, let's host a web page!

You can serve an HTML file to any client connecting to the ESP32's IP address and display sensor values.

## Example

```cpp
#include <WiFi.h>
#include <WebServer.h>

WebServer server(80);

void handleRoot() {
  server.send(200, "text/html", "<h1>Hello from the ESP32!</h1>");
}

void setup() {
  Serial.begin(115200);
  // Connect to WiFi (see Chapter 1)
  
  server.on("/", handleRoot);
  server.begin();
  Serial.println("HTTP server started");
}

void loop() {
  server.handleClient();
}
```

Go to your browser and type in the ESP32's IP address. You'll see your hosted webpage!
