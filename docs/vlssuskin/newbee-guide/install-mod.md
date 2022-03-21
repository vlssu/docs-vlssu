# 配置 Mod

VlssuSkin仅提供材质的上传，存储，检索和分享的功能。想要在Minecraft中显示你在VlssuSkin设置的材质的话，你需要在Minecraft客户端中安装皮肤Mod并修改相应的配置文件。

所有的配置文件内容都可以在用户中心的“皮肤Mod”页面找到。

:::tip

当前VlssuSkin支持[CustomSkinLoader](https://www.mcbbs.net/thread-269807-1-1.html)和[Universal Skin Mod](https://www.mcbbs.net/thread-358932-1-4.html)各自的新版和旧版。如何安装Mod请自行搜索，本文假定你已经安装好了皮肤Mod，仅说明如何配置皮肤Mod使其从VlssuSkin加载材质。

:::

## CustomSkinLoader

### 13.1~14.7 +

#### ExtraList

CustomSkinLoader 14.4起支持通过ExtraList的方式添加皮肤站。你可以在用户中心的“皮肤Mod”页面下载到VlssuSkin的ExtraList文件，将其放入`.minecraft/CustomSkinLoader/ExtraList/`目录下即可。

在安装完成后的第一次启动游戏并成功载入CustomSkinLoader时ExtraList文件会被自动删除，这是正常现象。如果不出意外的话，此时VlssuSkin已被添加至CustomSkinLoader加载列表列表顶部。

#### 手动修改配置文件

文件配置于存放`.minecraft/CustomSkinLoader/`目录中，仅有一个配置文件，名为文件`CustomSkinLoader.json`请使用记事本。或者任意代码编辑器将其打开，将原有的所有内容替换成以下内容：

```json
{
    "enable": true,
    "loadlist": [
        {
            "name": "VlssuSkin",
            "type": "CustomSkinAPI",
            "root": "https://skin.vlssu.com/csl/"
        },
        {
            "name": "Blessing Skin",
            "type": "CustomSkinAPI",
            "root": "https://skin.prinzeugen.net/csl/"
        },
        {
            "name": "Mojang",
            "type": "MojangAPI"
        }
    ]
}
```
保存退出，再次打开Minecraft之后，你应该就能看到你在VlssuSkin中设置的材质了。

### 12.9 -

配置文件存放于 `.minecraft/CustomSkinLoader/` 目录中，共有两个配置文件，文件名分别为 `skinurls.txt` 和 `capeurls.txt`。

首先请使用记事本或者任意代码编辑器打开 `skinurls.txt`，将原有的所有内容替换为以下内容：

```
https://skin.vlssu.com/skin/*.png
https://skin.prinzeugen.net/skin/*.png
http://skins.minecraft.net/MinecraftSkins/*.png
```

保存退出后再使用记事本或任意代码编辑器打开 `capeurls.txt`，将原有的所有内容替换为以下内容：

```
https://skin.vlssu.com/cape/*.png
https://skin.prinzeugen.net/cape/*.png
```

保存退出，再次打开 Minecraft 之后，你应该就能看到你在 VlssuSkin 中设置的材质了。

## Universal Skin Mod

### 1.4 +

配置文件存放于 `.minecraft/config/UniSkinMod/` 目录中，仅有一个配置文件，文件名为 `UniSkinMod.json`。请使用记事本或者任意代码编辑器将其打开，将原有的所有内容替换成以下内容：

```json
{
    "rootURIs": [
        "https://skin.vlssu.com/usm",
        "https://skin.prinzeugen.net/usm"
    ],
    "legacySkinURIs": [],
    "legacyCapeURIs": []
}
```

保存退出，再次打开 Minecraft 之后，你应该就能看到你在 VlssuSkin 中设置的材质了。

### 1.3

配置文件存放于 `.minecraft/config/` 目录中，仅有一个配置文件，文件名为 `UniSkinMod.cfg`。请使用记事本或者任意代码编辑器将其打开，将原有的所有内容替换成以下内容：

```
# VlssuSkin
Root: https://skin.vlssu.com/usm
# Blessing Skin
Root: https://skin.prinzeugen.net/usm
```

保存退出，再次打开 Minecraft 之后，你应该就能看到你在 VlssuSkin 中设置的材质了。

### 1.2 -

配置文件存放于 `.minecraft/config/` 目录中，仅有一个配置文件，文件名为 `UniSkinMod.cfg`。请使用记事本或者任意代码编辑器将其打开，将原有的所有内容替换成以下内容：

```
# VlssuSkin
Skin: https://skin.vlssu.com/skin/%s.png
Cape: https://skin.vlssu.com/cape/%s.png
# Blessing Skin
Skin: https://skin.prinzeugen.net/skin/%s.png
Cape: https://skin.prinzeugen.net/cape/%s.png
# Mojang
Skin: http://skins.minecraft.net/MinecraftSkins/%s.png
Cape: http://skins.minecraft.net/MinecraftCloaks/%s.png
```

保存退出，再次打开 Minecraft 之后，你应该就能看到你在 VlssuSkin 中设置的材质了。