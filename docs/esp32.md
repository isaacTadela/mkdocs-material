# ESP32

```py
cd "%userprofile%\myWork\project\portfolio\csi\ESP32-CSI-Collection-and-Display\active_ap"

idf.py set-target esp32

idf.py menuconfig

idf.py -p COM5 build flash monitor

idf.py monitor -B 115200
```

## Links

search dataset of wifi esp32

[github.com/espressif/esp-csi](https://github.com/espressif/esp-csi/tree/master).

[Marsrocky/Awesome-WiFi-CSI-Sensing](https://github.com/Marsrocky/Awesome-WiFi-CSI-Sensing#awesome-wifi-sensing).

[rfpose.csail.mit.edu/](http://rfpose.csail.mit.edu/#Alsocheckout).

[Zhao_Through-Wall_Human_Pose_CVPR_2018_paper.pdf](https://openaccess.thecvf.com/content_cvpr_2018/papers/Zhao_Through-Wall_Human_Pose_CVPR_2018_paper.pdf).

### csi_send

```py
cd esp-csi/examples/get-started/csi_send

idf.py set-target esp32

idf.py flash -b 921600 -p /dev/ttyUSB0 monitor

idf.py flash -b 921600 monitor -p COM5
```

### console_test

```py
cd esp-csi/examples/console_test

idf.py set-target esp32

idf.py flash -b 921600 -p /dev/ttyUSB1

idf.py flash -b 921600 monitor -p COM5
```

### console_test\tools

```py
cd examples/esp-radar/console_test/tools/

pip install -r requirements.txt

python esp_csi_tool.py -p COM5
```

## wifi mesh example

[Offical Docs](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/api-reference/network/esp-wifi-mesh.html).
[writing an esp wifi mesh application](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/api-reference/network/esp-wifi-mesh.html#writing-an-esp-wifi-mesh-application).
[code exmaple - internal_communication](https://github.com/espressif/esp-idf/tree/master/examples/mesh/internal_communication).

### Node # - MAC - name - parent - child

* 1 - e0:5a:1b:a1:a9:08 - Node1 - XXXXX - AAA, BBB , CCC
* 2 - e0:5a:1b:a0:e3:c0 - Node2 - XXXXX - AAA, BBB , CCC
* 3 - e0:5a:1b:a1:14:f4 - Node3 - XXXXX - AAA, BBB , CCC
* 4 - e0:5a:1b:a1:19:54 - Node4 - XXXXX - AAA, BBB , CCC

```py
idf.py monitor --print_filter mesh_main
```

## Broadcast??
