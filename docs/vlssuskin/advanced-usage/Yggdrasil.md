# Yggdrasil

VlssuSkin 提供 Yggdrasil 验证鉴权服务，你可以配合 [authlib-injector](https://github.com/yushijinhun/authlib-injector) 来实现 Minecraft 服务器外置登录，并在不安装皮肤 Mod 的情况下加载来自 VlssuSkin 的材质。

你可以在 [https://authlib-injector.yushi.moe/~download/](https://authlib-injector.yushi.moe/~download/) 下载到最新版本的 authlib-injector。

## Yggdrasil API 地址

VlssuSkin 的 Yggdrasil API 的地址是：

```
https://skin.vlssu.com/api/yggdrasil
```

## API 文档

请参阅：[Yggdrasil](https://github.com/yushijinhun/authlib-injector/wiki/Yggdrasil#yggdrasil-api-地址) 服务端技术规范

你也可以在 [wiki.vg](https://wiki.vg/Main_Page) 上找到更多信息。

## 在服务端使用

请先将服务器配置文件（一般为 server.propties）中 `online-mode` 一项的值设为 `true`，然后在你的服务端的启动指令的 `-jar` 参数前添加如下参数：

```
-javaagent:{path/to/authlib-injector.jar}=https://skin.vlssu.com/api/yggdrasil
```

其中 `{path/to/authlib-injector.jar}` 为指向 authlib-injector 的路径。

:::tip
如果你使用 BungeeCord，你需要在所有服务端（包括 BungeeCord 和所有子服）中加载 authlib-injector（方法见上），但只有 BungeeCord 打开 `online-mode`，其他服务端应该关闭 `online-mode`。
:::

## 在客户端使用

在客户端中使用 VlssuSkin 的 Yggdrasil 需要启动器支持自定义 Yggdrasil 服务器。推荐使用 [HMCL 3](https://www.mcbbs.net/thread-142335-1-1.html)。

:::tip
如果你使用的启动器不支持自定义 Yggdrasil，并且你使用的启动器是使用 Java 编写的，你也可以手动添加 JVM 参数来加载 authlib-injector（就像在服务端使用 authlib-injector 一样），但是本文不介绍这种做法。
:::

### HMCL 启动器示例

以下以 HMCL 3.5 为例，演示在 Minecraft 客户端中使用 Yggdrasil。

1. 打开 HMCL 3.5 的「新建游戏账户」界面。

![image.png](/img/vlssuskin/y1.png)

2. 点击左下角的「添加认证服务器」，输入 VlssuSkin 的 Yggdrasil API 地址，点击「下一步」，等待识别出 VlssuSkin 的 Yggdrasil 后点击「完成」。
如果你曾经添加过 VlssuSkin 的 Yggdrasil，你也可以在「添加账户」菜单中直接选择 VlssuSkin。

![image.png](/img/vlssuskin/y2.png)
![image.png](/img/vlssuskin/y3.png)

3. 在「添加账户」菜单中选择 VlssuSkin，填写你的邮箱和密码。「用户名」即为你在 VlssuSkin 的账号的邮箱。
如果你只添加了一个认证服务器，那么 HMCL 3.5 会默认选中那个唯一的认证服务器。

![image.png](/img/vlssuskin/y4.png)

4. 设置完成啦！你可以启动游戏了。

### PCL 启动器示例

以下以 PCL 2 为例，演示在 Minecraft 客户端中使用 Yggdrasil。

1. 打开 PCL 2 的「版本设置」界面。如果这是你第一次打开 PCL 2，请先下载你想玩的版本(或服务器所需版本)。

![版本设置](/img/vlssuskin/y5.png)

2. 点击「设置」往下拉动会看见「服务器选项」，在「登陆方式」一栏选择「第三方登录：Authlib-lnjector」，下面会弹出「认证服务器」等一系列选项。输入 VlssuSkin 的 Yggdrasil API 地址等信息。

由于PCL2作者设计原因，每玩一个新版本都需要如此设置
```
登陆方式    第三方登录：Authlib-lnjector
认证服务器  https://skin.vlssu.com/api/yggdrasil
注册链接    https://skin.vlssu.com/auth/register
服务器名称  VlssuSkin
```

![](/img/vlssuskin/y6.png)

3. 设置好后主页不出意外已经自动变成VlssuSkin设置界面了，在下方填写你的邮箱和密码。「账户」即为你在 VlssuSkin 的账号的邮箱。
因PCL2作者设计原因，认证服务器只能设置一个，在不更改(没有输错)的情况下，那 VlssuSkin 就是启动器唯一的认证服务器

![](/img/vlssuskin/y7.png)

4. 设置完成啦！你可以直接点「启动游戏」了，账户会直接登录。

### 正版 启动器示例

以下以 Minecraft Launcher 为例，演示在 Minecraft 客户端中使用 Yggdrasil。

1. 首先你得是正版，然后再皮肤站绑定正版，如发现进不去，可以去皮肤站的[个人资料](https://skin.vlssu.com/user/profile)右上角进行更新**UUID**

![An image](/img/vlssuskin/y8.png)

2. 需要先下载`authlib-injector.jar`[【点击下载】](https://authlib-injector.yushi.moe/~download/)[【备用下载】](https://www.lanzous.com/i4mzbqd)并放在你的游戏文件的根目录也就是`.minecraft`文件夹里（实际随你放哪）

![An image](/img/vlssuskin/y9.png)

3. 然后打开正版启动器的JVM参数进行设置

```
-javaagent:{绝对位置\authlib-injector.jar}=https://skin.vlssu.com/api/yggdrasil
```

- 这是我的参数，仅供参考

```
-javaagent:C:\Users\cmy13\AppData\Roaming\.minecraft\authlib-injector.jar=https://skin.vlssu.com/api/yggdrasil -Xmx8G -XX:+UnlockExperimentalVMOptions -XX:+UseG1GC -XX:G1NewSizePercent=20 -XX:G1ReservePercent=20 -XX:MaxGCPauseMillis=50 -XX:G1HeapRegionSize=32M
```

![An image](/img/vlssuskin/y10.png)

4. 设置完成啦！你可以启动游戏了。

## 参考链接

- [配合 authlib-injector 使用](https://github.com/bs-community/yggdrasil-api/wiki/0x03-%E9%85%8D%E5%90%88-authlib-injector-%E4%BD%BF%E7%94%A8)