---
sidebar_position: 1
---

# 正版启动器
以下以 [Minecraft Launcher](https://www.minecraft.net/zh-hans/download) 为例，演示在 Minecraft 客户端中使用 Yggdrasil

:::tip
首先你得是正版，然后再皮肤站绑定正版，如发现进不去，可以去皮肤站的[**个人资料**](https://skin.vlssu.com/user/profile)右上角进行更新**UUID**
:::

![An image](./img/ml1.jpg)

:::tip
需要先下载[`authlib-injector.jar`](https://authlib-injector.yushi.moe/\~download/)并放在你的游戏文件的根目录也就是`.minecraft`文件夹里（实际随你放哪）
:::

![An image](./img/ml2.jpg)

:::caution
然后打开正版启动器的JVM参数进行设置
:::

![An image](./img/ml3.jpg)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="设置参数" label="设置参数">

```js
-javaagent:{绝对位置\authlib-injector.jar}=https://skin.vlssu.com/api/yggdrasil
```

</TabItem>
<TabItem value="这是我的参数" label="这是我的参数">

```js
-javaagent:C:\Users\vlssu\AppData\Roaming\.minecraft\authlib-injector.jar=https://skin.vlssu.com/api/yggdrasil -Xmx8G -XX:+UnlockExperimentalVMOptions -XX:+UseG1GC -XX:G1NewSizePercent=20 -XX:G1ReservePercent=20 -XX:MaxGCPauseMillis=50 -XX:G1HeapRegionSize=32M
```

</TabItem>
</Tabs>
