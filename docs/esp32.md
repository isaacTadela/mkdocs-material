

```
cd %userprofile%\myWork\project\portfolio\csi\ESP32-CSI-Collection-and-Display\active_ap

idf.py set-target esp32

idf.py menuconfig

idf.py -p COM5 build flash monitor

idf.py monitor -B 115200
```