# 与 Flarum 联动
由于 Blessing Skin 提供了 OAuth 服务器，因此我们为 Flarum 编写了一个扩展（extension）。利用这个扩展，Flarum 将作为 OAuth 客户端并从 Blessing Skin 获取用户数据。

## 创建 OAuth 应用
我们首先需要在 Blessing Skin 中创建一个应用。在页面的左侧菜单栏中依次点击「高级功能」、「OAuth2 应用」，此时将出现 OAuth 应用列表。

:::tip 找不到这个入口？
这个菜单项很有可能是被管理员隐藏了，请联系他们开启。如果您是管理员，可暂时禁用「隐藏「高级功能」菜单」插件，在操作结束后再次启用即可。
:::

![An image](/img/vlssuskin/f1.png)

然后点击「创建应用」：

![An image](/img/vlssuskin/f2.png)

在弹出的提示框中像这样填写信息：

![An image](/img/vlssuskin/f3.png)

其中「应用名」将在提示用户进行授权时显示；「回调 URL」中则请根据自己的实际情况修改域名（注意是 Flarum 网站所对应的域名），但后面的 pathname 部分必须是 `/auth/blessing`。

提交后，列表中会出现刚刚创建的应用的信息：

![An image](/img/vlssuskin/f4.png)

至此，我们已经完成了在 Blessing Skin 中的设置。

## 安装并启用 Flarum 扩展

进入到 Flarum 的根目录，执行以下命令：

```bash
composer require blessing/flarum-oauth-client
```

然后进行「管理」，并启用「Blessing Skin Login」扩展：

![An image](/img/vlssuskin/f5.png)
![An image](/img/vlssuskin/f6.png)

## 设置 Flarum 扩展

在启用「Blessing Skin Login」扩展后，将弹出扩展设置界面：

![An image](/img/vlssuskin/f7.png)

表单的各项说明：

- 「Blessing Skin 根 URL」为您的 Blessing Skin 站点根 URL，在本文中为 https://localhost/；
- 「OAuth 客户端 ID」是在 Blessing Skin 中创建应用时生成的 ID，这个 ID 可以在 Blessing Skin 的 OAuth 应用列表中被找到，例如本文中为 8；
- 「OAuth 客户端 Secret」是在 Blessing Skin 中创建应用时生成的随机字符串，这个 secret 可以在 Blessing Skin 的 OAuth 应用列表中被找到；
- 「登录按钮的文本」这一项可以不填，默认为「使用 Blessing Skin 登录」；
- 「登录按钮的图标」这一项可以不填，此项的值必须 Font Awesome 图标的类名。

填写结果如下：

![An image](/img/vlssuskin/f8.png)

## 登录

用户在登录时，可以看到登录表单中多出一个按钮：

![An image](/img/vlssuskin/f9.png)

点击「使用 Blessing Skin 登录」按钮（这个按钮的文本和图标可以在设置中被修改），就可以使用现有的 Blessing Skin 账号进行登录。

首次访问时，Blessing Skin 将询问用户是否允许授权：

![An image](/img/vlssuskin/f10.png)

点击「授权」，Flarum 即可获取到用户的邮箱和昵称。

值得注意的是，Flarum 在被授权后并不会自动创建用户并以该用户的身份登录，而是被引导到一个简单的「注册」表单：



:::caution
在 Blessing Skin 中，昵称是允许重复出现的，而 Flarum 不允许用户名重复。因此您可能需要根据实际情况修改用户名。
:::

点击「注册」，就实现了使用 Blessing Skin 账号来登录 Flarum 论坛了。

