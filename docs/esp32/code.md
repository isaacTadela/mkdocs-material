# ESP32 Code snippets

## MAC address table

1 - e0:5a:1b:a1:a9:08
2 - e0:5a:1b:a0:e3:c0
3 - e0:5a:1b:a1:14:f4
4 - e0:5a:1b:a1:19:54
ayaso - 30:de:4b:47:e4:c2
isaac e8:d1:1b:72:6c:70

## Global declaration and functions

```c
#define membersByMAC 5
// #define MAC2STR(a) (a)[0], (a)[1], (a)[2], (a)[3], (a)[4], (a)[5]
// #define MACSTR   "%02x:%02x:%02x:%02x:%02x:%02x"
// %x - hex value

static char temp_mac[20] = {'/0'};
// sprintf(buffer, "%02x:%02x:%02x:%02x:%02x:%02x", 1.2345, 78, 0.874568);


// Arrays for saved UIDs
const uint8_t savedMAC[membersByMAC][7] = {
  { 0xe0, 0x5a, 0x1b, 0xa1, 0xa9, 0x08, 1},
  { 0xe0, 0x5a, 0x1b, 0xa0, 0xe3, 0xc0, 2},
  { 0xe0, 0x5a, 0x1b, 0xa1, 0x14, 0xf4, 3},
  { 0xe0, 0x5a, 0x1b, 0xa1, 0x19, 0x54, 4},
  { 0xe8, 0xd1, 0x1b, 0x72, 0x6c, 0x70, 100}
};

int compareMac(uint8_t* mac_addr) {
  int i,j = 0;
  for(i=0; i < membersByMAC; i++){
    for(j=0; j < 6; j++){
      if (savedMAC[i][j] != mac_addr[j]) break;
    }
    if(j==6)return savedMAC[i][j];
  }

  return 0;
}
```

use inside a function

```c
char buf[256];
sprintf(buf,"%02x:%02x:%02x:%02x:%02x:%02x",MAC2STR(my_mac) );

ESP_LOGI(MESH_TAG, " My MAC is "MACSTR", aka: %d, my parent MAC is "MACSTR" aka: %d , and im a %s ",
                    MAC2STR(my_mac),
                    compareMac(my_mac),
                    MAC2STR(mesh_parent_addr.addr),
                    compareMac(mesh_parent_addr.addr ),
                    (is_mesh_connected && esp_mesh_is_root()) ? "ROOT" : is_mesh_connected ? "NODE" : "DISCONNECT");

```

inside the main function

```c
/*  retrieve the MAC address of the WiFi interface  */
    ESP_ERROR_CHECK( esp_wifi_get_mac(ESP_IF_WIFI_STA, my_mac) );
```
