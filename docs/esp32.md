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

# idf.py flash -b 921600 -p /dev/ttyUSB1

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

```py title="filter monitor output"
idf.py monitor --print_filter mesh_main
```

## Broadcast??

## ESP-MESH-LITE
[Offical doc](https://components.espressif.com/components/espressif/mesh_lite).
[examples - no_router](https://github.com/espressif/esp-mesh-lite/tree/master/examples/no_router).
ESP-MESH-LITE is a Wi-Fi networking application of IoT-Bridge, based on the SoftAP + Station mode, a set of Mesh solutions built on top of the Wi-Fi protocol. ESP-MESH-LITE allows numerous devices (henceforth referred to as nodes) spread over a large physical area (both indoors and outdoors) to be interconnected under a single WLAN (Wireless Local-Area Network). The biggest difference between ESP-MESH-LITE and ESP-MESH (also known as ESP-WIFI-MESH) is that ESP-MESH-LITE allows sub-devices in the network to independently access the external network, and the transmission information is insensitive to the parent node, which greatly reduces the difficulty to develop the application layer. ESP-MESH-LITE is self-organizing and self-healing, which means the network can be built and maintained autonomously.


[Enumerations wifi mode](https://espressif-docs.readthedocs-hosted.com/projects/esp-idf/en/stable/api-reference/network/esp_wifi.html#enumerations) like WIFI_MODE_STA ,WIFI_MODE_AP or WIFI_MODE_APSTA.

## ESP NOW
[ESP-NOW: A Game Changer for ESP32 Mesh Networks and Sensor Applications](https://medium.datadriveninvestor.com/esp-now-protocol-with-esp32-76a84d5f10fb).
"ESP-NOW is a wireless communication protocol defined by Espressif, which enables the direct, quick and low-power control of smart devices, without the need of a router...."

[GitHub repo](https://github.com/aZholtikov/zh_network) with ESP-NOW based mesh network
[Building an ESP-NOW-based Mesh Network with ESP32](https://kumarasenau.medium.com/building-an-esp-now-based-mesh-network-with-esp32-ac45c70a3046).

[ESP-NOW with ESP32: Receive Data from Multiple Boards (many-to-one)](https://randomnerdtutorials.com/esp-now-many-to-one-esp32/)
