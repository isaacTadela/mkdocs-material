

```
cd %userprofile%\myWork\project\portfolio\csi\ESP32-CSI-Collection-and-Display\active_ap

idf.py set-target esp32

idf.py menuconfig

idf.py -p COM5 build flash monitor

idf.py monitor -B 115200
```

## Links

search dataset of wifi esp32


https://github.com/espressif/esp-csi/tree/master

https://github.com/Marsrocky/Awesome-WiFi-CSI-Sensing#awesome-wifi-sensing
http://rfpose.csail.mit.edu/


http://rfpose.csail.mit.edu/#Alsocheckout
https://openaccess.thecvf.com/content_cvpr_2018/papers/Zhao_Through-Wall_Human_Pose_CVPR_2018_paper.pdf


### csi_send
cd esp-csi/examples/get-started/csi_send
idf.py set-target esp32
idf.py flash -b 921600 -p /dev/ttyUSB0 monitor
idf.py flash -b 921600 monitor -p COM5

### console_test
cd esp-csi/examples/console_test
idf.py set-target esp32
idf.py flash -b 921600 -p /dev/ttyUSB1
idf.py flash -b 921600 monitor -p COM5

### console_test\tools
```
cd examples/esp-radar/console_test/tools/
pip install -r requirements.txt
python esp_csi_tool.py -p COM5
```

