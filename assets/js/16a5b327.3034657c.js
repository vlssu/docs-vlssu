exports.id = 6616;
exports.ids = [6616];
exports.modules = {

/***/ 7428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5428);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(795);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4299);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87);


const frontMatter = {
	sidebar_position: 2
};
const contentTitle = 'Yggdrasil';
const metadata = {
  "id": "advanced/Yggdrasil",
  "title": "Yggdrasil",
  "description": "VlssuSkin 提供 Yggdrasil 验证鉴权服务，你可以配合 authlib-injector 来实现 Minecraft 服务器外置登录，并在不安装皮肤 Mod 的情况下加载来自 VlssuSkin 的材质。",
  "source": "@site/docs/vlssuskin/advanced/Yggdrasil.md",
  "sourceDirName": "advanced",
  "slug": "/advanced/Yggdrasil",
  "permalink": "/vlssuskin/advanced/Yggdrasil",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/vlssu/docs.vlssu.com/blob/master/docs/vlssuskin/advanced/Yggdrasil.md",
  "tags": [],
  "version": "current",
  "lastUpdatedBy": "飒爽师叔",
  "lastUpdatedAt": 1672115812000,
  "sidebarPosition": 2,
  "frontMatter": {
    "sidebar_position": 2
  },
  "sidebar": "primary",
  "previous": {
    "title": "Blessing Skin API",
    "permalink": "/vlssuskin/advanced/api"
  },
  "next": {
    "title": "OAuth 2",
    "permalink": "/vlssuskin/advanced/oauth2"
  }
};
const assets = {

};





const toc = [{
  "value": "Yggdrasil API 地址",
  "id": "yggdrasil-api-地址",
  "level": 2
}, {
  "value": "API 文档",
  "id": "api-文档",
  "level": 2
}, {
  "value": "在服务端使用",
  "id": "在服务端使用",
  "level": 2
}, {
  "value": "在客户端使用",
  "id": "在客户端使用",
  "level": 2
}, {
  "value": "HMCL 启动器示例",
  "id": "hmcl-启动器示例",
  "level": 3
}, {
  "value": "PCL 启动器示例",
  "id": "pcl-启动器示例",
  "level": 3
}, {
  "value": "正版 启动器示例",
  "id": "正版-启动器示例",
  "level": 3
}, {
  "value": "参考链接",
  "id": "参考链接",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.header, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
        id: "yggdrasil",
        children: "Yggdrasil"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["VlssuSkin 提供 Yggdrasil 验证鉴权服务，你可以配合 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/yushijinhun/authlib-injector",
        children: "authlib-injector"
      }), " 来实现 Minecraft 服务器外置登录，并在不安装皮肤 Mod 的情况下加载来自 VlssuSkin 的材质。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["你可以在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://authlib-injector.yushi.moe/~download/",
        children: "https://authlib-injector.yushi.moe/~download/"
      }), " 下载到最新版本的 authlib-injector。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "yggdrasil-api-地址",
      children: "Yggdrasil API 地址"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "VlssuSkin 的 Yggdrasil API 的地址是："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "https://skin.vlssu.com/api/yggdrasil\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "api-文档",
      children: "API 文档"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["请参阅：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/yushijinhun/authlib-injector/wiki/Yggdrasil#yggdrasil-api-%E5%9C%B0%E5%9D%80",
        children: "Yggdrasil"
      }), " 服务端技术规范"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["你也可以在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://wiki.vg/Main_Page",
        children: "wiki.vg"
      }), " 上找到更多信息。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "在服务端使用",
      children: "在服务端使用"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["请先将服务器配置文件（一般为 server.propties）中 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "online-mode"
      }), " 一项的值设为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "true"
      }), "，然后在你的服务端的启动指令的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "-jar"
      }), " 参数前添加如下参数："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "-javaagent:{path/to/authlib-injector.jar}=https://skin.vlssu.com/api/yggdrasil\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["其中 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "{path/to/authlib-injector.jar}"
      }), " 为指向 authlib-injector 的路径。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "tip",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["如果你使用 BungeeCord，你需要在所有服务端（包括 BungeeCord 和所有子服）中加载 authlib-injector（方法见上），但只有 BungeeCord 打开 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "online-mode"
        }), "，其他服务端应该关闭 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "online-mode"
        }), "。"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "在客户端使用",
      children: "在客户端使用"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在客户端中使用 VlssuSkin 的 Yggdrasil 需要启动器支持自定义 Yggdrasil 服务器。推荐使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.mcbbs.net/thread-142335-1-1.html",
        children: "HMCL 3"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "tip",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "如果你使用的启动器不支持自定义 Yggdrasil，并且你使用的启动器是使用 Java 编写的，你也可以手动添加 JVM 参数来加载 authlib-injector（就像在服务端使用 authlib-injector 一样），但是本文不介绍这种做法。"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "hmcl-启动器示例",
      children: "HMCL 启动器示例"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "以下以 HMCL 3.5 为例，演示在 Minecraft 客户端中使用 Yggdrasil。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "打开 HMCL 3.5 的「新建游戏账户」界面。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(5346)/* ["default"] */ .A) + "",
        width: "818",
        height: "508"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "点击左下角的「添加认证服务器」，输入 VlssuSkin 的 Yggdrasil API 地址，点击「下一步」，等待识别出 VlssuSkin 的 Yggdrasil 后点击「完成」。\r\n如果你曾经添加过 VlssuSkin 的 Yggdrasil，你也可以在「添加账户」菜单中直接选择 VlssuSkin。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(6313)/* ["default"] */ .A) + "",
        width: "818",
        height: "508"
      }), "\r\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(8192)/* ["default"] */ .A) + "",
        width: "818",
        height: "508"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "在「添加账户」菜单中选择 VlssuSkin，填写你的邮箱和密码。「用户名」即为你在 VlssuSkin 的账号的邮箱。\r\n如果你只添加了一个认证服务器，那么 HMCL 3.5 会默认选中那个唯一的认证服务器。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(9519)/* ["default"] */ .A) + "",
        width: "818",
        height: "508"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "设置完成啦！你可以启动游戏了。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "pcl-启动器示例",
      children: "PCL 启动器示例"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "以下以 PCL 2 为例，演示在 Minecraft 客户端中使用 Yggdrasil。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      title: "小小的建议",
      type: "tip",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["该启动器可能存在反人类设计或其他一些原因，在此我们不太推荐使用此启动器，建议使用其他启动器。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "如果您觉得此提示不当，请无视此提示。"
        })]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "打开 PCL 2 的「版本设置」界面。如果这是你第一次打开 PCL 2，请先下载你想玩的版本(或服务器所需版本)。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "版本设置",
        src: (__webpack_require__(6230)/* ["default"] */ .A) + "",
        width: "878",
        height: "490"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "点击「设置」往下拉动会看见「服务器选项」，在「登陆方式」一栏选择「第三方登录：Authlib-lnjector」，下面会弹出「认证服务器」等一系列选项。输入 VlssuSkin 的 Yggdrasil API 地址等信息。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "由于PCL2作者设计原因，每玩一个新版本都需要如此设置"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "登陆方式    第三方登录：Authlib-lnjector\r\n认证服务器  https://skin.vlssu.com/api/yggdrasil\r\n注册链接    https://skin.vlssu.com/auth/register\r\n服务器名称  VlssuSkin\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        src: (__webpack_require__(6557)/* ["default"] */ .A) + "",
        width: "878",
        height: "886"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "tip",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["在新版 PCL 这里左下角会有「设置为 Little Skin」，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "请不要点击，直接左上角点返回即可"
        }), "。"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "设置好后主页不出意外已经自动变成VlssuSkin设置界面了，在下方填写你的邮箱和密码。「账户」即为你在 VlssuSkin 的账号的邮箱。\r\n因PCL2作者设计原因，认证服务器只能设置一个，在不更改(没有输错)的情况下，那 VlssuSkin 就是启动器唯一的认证服务器"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        src: (__webpack_require__(6308)/* ["default"] */ .A) + "",
        width: "878",
        height: "491"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "设置完成啦！你可以直接点「启动游戏」了，账户会直接登录。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "正版-启动器示例",
      children: "正版 启动器示例"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "以下以 Minecraft Launcher 为例，演示在 Minecraft 客户端中使用 Yggdrasil。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["首先你得是正版，然后再皮肤站绑定正版，如发现进不去，可以去皮肤站的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://skin.vlssu.com/user/profile",
          children: "个人资料"
        }), "右上角进行更新", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "UUID"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "An image",
        src: (__webpack_require__(6531)/* ["default"] */ .A) + "",
        width: "824",
        height: "338"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["需要先下载 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://authlib-injector.yushi.moe/~download/",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "authlib-injector.jar"
          })
        }), " 并放在你的游戏文件的根目录也就是 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: ".minecraft"
        }), " 文件夹里（实际随你放哪）"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "An image",
        src: (__webpack_require__(2426)/* ["default"] */ .A) + "",
        width: "1117",
        height: "590"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "然后打开正版启动器的JVM参数进行设置"
      }), "\n"]
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        value: "设置参数",
        label: "设置参数",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-js",
            children: "-javaagent:{绝对位置\\authlib-injector.jar}=https://skin.vlssu.com/api/yggdrasil\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        value: "这是我的参数",
        label: "这是我的参数",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-js",
            children: "-javaagent:C:\\Users\\vlssu\\AppData\\Roaming\\.minecraft\\authlib-injector.jar=https://skin.vlssu.com/api/yggdrasil -Xmx8G -XX:+UnlockExperimentalVMOptions -XX:+UseG1GC -XX:G1NewSizePercent=20 -XX:G1ReservePercent=20 -XX:MaxGCPauseMillis=50 -XX:G1HeapRegionSize=32M\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "An image",
        src: (__webpack_require__(936)/* ["default"] */ .A) + "",
        width: "1016",
        height: "639"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "设置完成啦！你可以启动游戏了。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "参考链接",
      children: "参考链接"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/bs-community/yggdrasil-api/wiki/0x03-%E9%85%8D%E5%90%88-authlib-injector-%E4%BD%BF%E7%94%A8",
          children: "配合 authlib-injector 使用"
        })
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 973:
/***/ ((module) => {

// Exports
module.exports = {
	"tabItem": `tabItem_wJru`
};


/***/ }),

/***/ 4047:
/***/ ((module) => {

// Exports
module.exports = {
	"tabList": `tabList_qm36`,
	"tabItem": `tabItem_Gg1K`
};


/***/ }),

/***/ 87:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ TabItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(799);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7340);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(973);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_1__);



function TabItem({ children, hidden, className }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    {
      role: "tabpanel",
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)((_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().tabItem), className),
      ...{ hidden }
    },
    children
  );
}


/***/ }),

/***/ 4299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tabs)
});

// EXTERNAL MODULE: ./node_modules/.store/react-npm-18.3.1-af38f3c1ae/package/index.js
var react_npm_18_3_1_af38f3c1ae_package = __webpack_require__(799);
// EXTERNAL MODULE: ./node_modules/.store/clsx-npm-2.1.0-29d286e1de/package/dist/clsx.mjs
var clsx = __webpack_require__(7340);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-2b128264f6/package/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(6149);
// EXTERNAL MODULE: ./node_modules/.store/react-router-virtual-129bbab0a3/package/esm/react-router.js
var react_router = __webpack_require__(1694);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-core-virtual-2f335dc3cb/package/lib/client/exports/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__(2851);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-2b128264f6/package/lib/utils/historyUtils.js
var historyUtils = __webpack_require__(158);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-2b128264f6/package/lib/utils/jsUtils.js
var jsUtils = __webpack_require__(6383);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-2b128264f6/package/lib/utils/storageUtils.js
var storageUtils = __webpack_require__(9989);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-2b128264f6/package/lib/utils/tabsUtils.js





function isTabItem(comp) {
  const { props } = comp;
  return !!props && typeof props === "object" && "value" in props;
}
function sanitizeTabsChildren(children) {
  var _a, _b;
  return (_b = (_a = react_npm_18_3_1_af38f3c1ae_package.Children.toArray(children).filter((child) => child !== "\n").map((child) => {
    if (!child || (0,react_npm_18_3_1_af38f3c1ae_package.isValidElement)(child) && isTabItem(child)) {
      return child;
    }
    throw new Error(`Docusaurus error: Bad <Tabs> child <${// @ts-expect-error: guarding against unexpected cases
    typeof child.type === "string" ? child.type : child.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`);
  })) == null ? void 0 : _a.filter(Boolean)) != null ? _b : [];
}
function extractChildrenTabValues(children) {
  return sanitizeTabsChildren(children).map(({ props: { value, label, attributes, default: isDefault } }) => ({
    value,
    label,
    attributes,
    default: isDefault
  }));
}
function ensureNoDuplicateValue(values) {
  const dup = (0,jsUtils/* duplicates */.XI)(values, (a, b) => a.value === b.value);
  if (dup.length > 0) {
    throw new Error(`Docusaurus error: Duplicate values "${dup.map((a) => a.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`);
  }
}
function useTabValues(props) {
  const { values: valuesProp, children } = props;
  return (0,react_npm_18_3_1_af38f3c1ae_package.useMemo)(() => {
    const values = valuesProp != null ? valuesProp : extractChildrenTabValues(children);
    ensureNoDuplicateValue(values);
    return values;
  }, [valuesProp, children]);
}
function isValidValue({ value, tabValues }) {
  return tabValues.some((a) => a.value === value);
}
function getInitialStateValue({ defaultValue, tabValues }) {
  var _a;
  if (tabValues.length === 0) {
    throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");
  }
  if (defaultValue) {
    if (!isValidValue({ value: defaultValue, tabValues })) {
      throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${defaultValue}" but none of its children has the corresponding value. Available values are: ${tabValues.map((a) => a.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);
    }
    return defaultValue;
  }
  const defaultTabValue = (_a = tabValues.find((tabValue) => tabValue.default)) != null ? _a : tabValues[0];
  if (!defaultTabValue) {
    throw new Error("Unexpected error: 0 tabValues");
  }
  return defaultTabValue.value;
}
function getStorageKey(groupId) {
  if (!groupId) {
    return null;
  }
  return `docusaurus.tab.${groupId}`;
}
function getQueryStringKey({ queryString = false, groupId }) {
  if (typeof queryString === "string") {
    return queryString;
  }
  if (queryString === false) {
    return null;
  }
  if (queryString === true && !groupId) {
    throw new Error(`Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".`);
  }
  return groupId != null ? groupId : null;
}
function useTabQueryString({ queryString = false, groupId }) {
  const history = (0,react_router/* useHistory */.W6)();
  const key = getQueryStringKey({ queryString, groupId });
  const value = (0,historyUtils/* useQueryStringValue */.aZ)(key);
  const setValue = (0,react_npm_18_3_1_af38f3c1ae_package.useCallback)((newValue) => {
    if (!key) {
      return;
    }
    const searchParams = new URLSearchParams(history.location.search);
    searchParams.set(key, newValue);
    history.replace({ ...history.location, search: searchParams.toString() });
  }, [key, history]);
  return [value, setValue];
}
function useTabStorage({ groupId }) {
  const key = getStorageKey(groupId);
  const [value, storageSlot] = (0,storageUtils/* useStorageSlot */.Dv)(key);
  const setValue = (0,react_npm_18_3_1_af38f3c1ae_package.useCallback)((newValue) => {
    if (!key) {
      return;
    }
    storageSlot.set(newValue);
  }, [key, storageSlot]);
  return [value, setValue];
}
function useTabs(props) {
  const { defaultValue, queryString = false, groupId } = props;
  const tabValues = useTabValues(props);
  const [selectedValue, setSelectedValue] = (0,react_npm_18_3_1_af38f3c1ae_package.useState)(() => getInitialStateValue({ defaultValue, tabValues }));
  const [queryStringValue, setQueryString] = useTabQueryString({
    queryString,
    groupId
  });
  const [storageValue, setStorageValue] = useTabStorage({
    groupId
  });
  const valueToSync = (() => {
    const value = queryStringValue != null ? queryStringValue : storageValue;
    if (!isValidValue({ value, tabValues })) {
      return null;
    }
    return value;
  })();
  (0,useIsomorphicLayoutEffect/* default */.A)(() => {
    if (valueToSync) {
      setSelectedValue(valueToSync);
    }
  }, [valueToSync]);
  const selectValue = (0,react_npm_18_3_1_af38f3c1ae_package.useCallback)((newValue) => {
    if (!isValidValue({ value: newValue, tabValues })) {
      throw new Error(`Can't select invalid tab value=${newValue}`);
    }
    setSelectedValue(newValue);
    setQueryString(newValue);
    setStorageValue(newValue);
  }, [setQueryString, setStorageValue, tabValues]);
  return { selectedValue, selectValue, tabValues };
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-core-virtual-2f335dc3cb/package/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(3409);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-73dbe88646/package/lib/theme/Tabs/styles.module.css
var styles_module = __webpack_require__(4047);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-73dbe88646/package/lib/theme/Tabs/index.js





function TabList({ className, block, selectedValue, selectValue, tabValues }) {
  const tabRefs = [];
  const { blockElementScrollPositionUntilNextRender } = (0,scrollUtils/* useScrollPositionBlocker */.a_)();
  const handleTabChange = (event) => {
    const newTab = event.currentTarget;
    const newTabIndex = tabRefs.indexOf(newTab);
    const newTabValue = tabValues[newTabIndex].value;
    if (newTabValue !== selectedValue) {
      blockElementScrollPositionUntilNextRender(newTab);
      selectValue(newTabValue);
    }
  };
  const handleKeydown = (event) => {
    var _a, _b;
    let focusElement = null;
    switch (event.key) {
      case "Enter": {
        handleTabChange(event);
        break;
      }
      case "ArrowRight": {
        const nextTab = tabRefs.indexOf(event.currentTarget) + 1;
        focusElement = (_a = tabRefs[nextTab]) != null ? _a : tabRefs[0];
        break;
      }
      case "ArrowLeft": {
        const prevTab = tabRefs.indexOf(event.currentTarget) - 1;
        focusElement = (_b = tabRefs[prevTab]) != null ? _b : tabRefs[tabRefs.length - 1];
        break;
      }
      default:
        break;
    }
    focusElement == null ? void 0 : focusElement.focus();
  };
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    "ul",
    {
      role: "tablist",
      "aria-orientation": "horizontal",
      className: (0,clsx/* default */.A)(
        "tabs",
        {
          "tabs--block": block
        },
        className
      )
    },
    tabValues.map(({ value, label, attributes }) => /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
      "li",
      {
        role: "tab",
        tabIndex: selectedValue === value ? 0 : -1,
        "aria-selected": selectedValue === value,
        key: value,
        ref: (tabControl) => tabRefs.push(tabControl),
        onKeyDown: handleKeydown,
        onClick: handleTabChange,
        ...attributes,
        className: (0,clsx/* default */.A)("tabs__item", (styles_module_default()).tabItem, attributes == null ? void 0 : attributes.className, {
          "tabs__item--active": selectedValue === value
        })
      },
      label != null ? label : value
    ))
  );
}
function TabContent({ lazy, children, selectedValue }) {
  const childTabs = (Array.isArray(children) ? children : [children]).filter(
    Boolean
  );
  if (lazy) {
    const selectedTabItem = childTabs.find(
      (tabItem) => tabItem.props.value === selectedValue
    );
    if (!selectedTabItem) {
      return null;
    }
    return (0,react_npm_18_3_1_af38f3c1ae_package.cloneElement)(selectedTabItem, {
      className: (0,clsx/* default */.A)("margin-top--md", selectedTabItem.props.className)
    });
  }
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("div", { className: "margin-top--md" }, childTabs.map(
    (tabItem, i) => (0,react_npm_18_3_1_af38f3c1ae_package.cloneElement)(tabItem, {
      key: i,
      hidden: tabItem.props.value !== selectedValue
    })
  ));
}
function TabsComponent(props) {
  const tabs = useTabs(props);
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("div", { className: (0,clsx/* default */.A)("tabs-container", (styles_module_default()).tabList) }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(TabList, { ...tabs, ...props }), /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(TabContent, { ...tabs, ...props }));
}
function Tabs(props) {
  const isBrowser = (0,useIsBrowser/* default */.A)();
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    TabsComponent,
    {
      key: String(isBrowser),
      ...props
    },
    sanitizeTabsChildren(props.children)
  );
}


/***/ }),

/***/ 2541:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(799),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 5428:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(2541);
} else {}


/***/ }),

/***/ 5346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/y1-1e9e432edaebf92234f14d725ec776a3.png");

/***/ }),

/***/ 936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/y10-a99ddb08873704743f258b61687eb67d.png");

/***/ }),

/***/ 6313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/y2-64ba226a97a5a3cf8eb0502b7b163feb.png");

/***/ }),

/***/ 8192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/y3-e214c6f8ec425c506d4f6d058a622bdd.png");

/***/ }),

/***/ 9519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/y4-e7028fc369d40ab2d3b5748938a29722.png");

/***/ }),

/***/ 6230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/y5-981d063d00a7441585e09c272d1ae762.png");

/***/ }),

/***/ 6557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/y6-09a558e8b94ea6887be40a430dd706a0.png");

/***/ }),

/***/ 6308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/y7-d2511a3f71b59ba6c88138a00e0903cc.png");

/***/ }),

/***/ 6531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/y8-fe73a23522099c54a3c42b9337ede168.png");

/***/ }),

/***/ 2426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/y9-9598dd02e1cbf2042568ca65ed27f6c6.png");

/***/ }),

/***/ 795:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(799);
/**
 * @typedef {import('mdx/types.js').MDXComponents} MDXComponents
 * @typedef {import('react').Component<{}, {}, unknown>} Component
 * @typedef {import('react').ReactNode} ReactNode
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {JSX.Element}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ })

};
;