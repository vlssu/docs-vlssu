"use strict";
exports.id = 7140;
exports.ids = [7140];
exports.modules = {

/***/ 6255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3047);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(795);


const frontMatter = {
	sidebar_position: 3
};
const contentTitle = '配置 Mod';
const metadata = {
  "id": "newbee/mod",
  "title": "配置 Mod",
  "description": "VlssuSkin仅提供材质的上传，存储，检索和分享的功能。想要在Minecraft中显示你在VlssuSkin设置的材质的话，你需要在Minecraft客户端中安装皮肤Mod并修改相应的配置文件。",
  "source": "@site/docs/vlssuskin/newbee/mod.md",
  "sourceDirName": "newbee",
  "slug": "/newbee/mod",
  "permalink": "/vlssuskin/newbee/mod",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/vlssu/docs.vlssu.com/blob/master/docs/vlssuskin/newbee/mod.md",
  "tags": [],
  "version": "current",
  "lastUpdatedBy": "飒爽师叔",
  "lastUpdatedAt": 1672115812000,
  "sidebarPosition": 3,
  "frontMatter": {
    "sidebar_position": 3
  },
  "sidebar": "primary",
  "previous": {
    "title": "设定材质",
    "permalink": "/vlssuskin/newbee/textures"
  },
  "next": {
    "title": "积分系统",
    "permalink": "/vlssuskin/score"
  }
};
const assets = {

};



const toc = [{
  "value": "CustomSkinLoader",
  "id": "customskinloader",
  "level": 2
}, {
  "value": "13.1~14.7 +",
  "id": "131147-",
  "level": 3
}, {
  "value": "ExtraList",
  "id": "extralist",
  "level": 4
}, {
  "value": "手动修改配置文件",
  "id": "手动修改配置文件",
  "level": 4
}, {
  "value": "12.9 -",
  "id": "129--",
  "level": 3
}, {
  "value": "Universal Skin Mod",
  "id": "universal-skin-mod",
  "level": 2
}, {
  "value": "1.4 +",
  "id": "14-",
  "level": 3
}, {
  "value": "1.3",
  "id": "13",
  "level": 3
}, {
  "value": "1.2 -",
  "id": "12--",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "配置-mod",
      children: "配置 Mod"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "VlssuSkin仅提供材质的上传，存储，检索和分享的功能。想要在Minecraft中显示你在VlssuSkin设置的材质的话，你需要在Minecraft客户端中安装皮肤Mod并修改相应的配置文件。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "所有的配置文件内容都可以在用户中心的“皮肤Mod”页面找到。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "tip",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["当前VlssuSkin支持", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://www.mcbbs.net/thread-269807-1-1.html",
          children: "CustomSkinLoader"
        }), "和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://www.mcbbs.net/thread-358932-1-4.html",
          children: "Universal Skin Mod"
        }), "各自的新版和旧版。如何安装Mod请自行搜索，本文假定你已经安装好了皮肤Mod，仅说明如何配置皮肤Mod使其从VlssuSkin加载材质。"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "customskinloader",
      children: "CustomSkinLoader"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "131147-",
      children: "13.1~14.7 +"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "extralist",
      children: "ExtraList"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["CustomSkinLoader 14.4起支持通过ExtraList的方式添加皮肤站。你可以在用户中心的“皮肤Mod”页面下载到VlssuSkin的ExtraList文件，将其放入", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: ".minecraft/CustomSkinLoader/ExtraList/"
      }), "目录下即可。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在安装完成后的第一次启动游戏并成功载入CustomSkinLoader时ExtraList文件会被自动删除，这是正常现象。如果不出意外的话，此时VlssuSkin已被添加至CustomSkinLoader加载列表列表顶部。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "手动修改配置文件",
      children: "手动修改配置文件"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["文件配置于存放", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: ".minecraft/CustomSkinLoader/"
      }), "目录中，仅有一个配置文件，名为文件", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "CustomSkinLoader.json"
      }), "请使用记事本。或者任意代码编辑器将其打开，将原有的所有内容替换成以下内容："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-json",
        children: "{\r\n    \"enable\": true,\r\n    \"loadlist\": [\r\n        {\r\n            \"name\": \"VlssuSkin\",\r\n            \"type\": \"CustomSkinAPI\",\r\n            \"root\": \"https://skin.vlssu.com/csl/\"\r\n        },\r\n        {\r\n            \"name\": \"Blessing Skin\",\r\n            \"type\": \"CustomSkinAPI\",\r\n            \"root\": \"https://skin.prinzeugen.net/csl/\"\r\n        },\r\n        {\r\n            \"name\": \"Mojang\",\r\n            \"type\": \"MojangAPI\"\r\n        }\r\n    ]\r\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "保存退出，再次打开Minecraft之后，你应该就能看到你在VlssuSkin中设置的材质了。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "129--",
      children: "12.9 -"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["配置文件存放于 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: ".minecraft/CustomSkinLoader/"
      }), " 目录中，共有两个配置文件，文件名分别为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "skinurls.txt"
      }), " 和 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "capeurls.txt"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["首先请使用记事本或者任意代码编辑器打开 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "skinurls.txt"
      }), "，将原有的所有内容替换为以下内容："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "https://skin.vlssu.com/skin/*.png\r\nhttps://skin.prinzeugen.net/skin/*.png\r\nhttp://skins.minecraft.net/MinecraftSkins/*.png\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["保存退出后再使用记事本或任意代码编辑器打开 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "capeurls.txt"
      }), "，将原有的所有内容替换为以下内容："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "https://skin.vlssu.com/cape/*.png\r\nhttps://skin.prinzeugen.net/cape/*.png\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "保存退出，再次打开 Minecraft 之后，你应该就能看到你在 VlssuSkin 中设置的材质了。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "universal-skin-mod",
      children: "Universal Skin Mod"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "14-",
      children: "1.4 +"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["配置文件存放于 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: ".minecraft/config/UniSkinMod/"
      }), " 目录中，仅有一个配置文件，文件名为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "UniSkinMod.json"
      }), "。请使用记事本或者任意代码编辑器将其打开，将原有的所有内容替换成以下内容："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-json",
        children: "{\r\n    \"rootURIs\": [\r\n        \"https://skin.vlssu.com/usm\",\r\n        \"https://skin.prinzeugen.net/usm\"\r\n    ],\r\n    \"legacySkinURIs\": [],\r\n    \"legacyCapeURIs\": []\r\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "保存退出，再次打开 Minecraft 之后，你应该就能看到你在 VlssuSkin 中设置的材质了。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "13",
      children: "1.3"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["配置文件存放于 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: ".minecraft/config/"
      }), " 目录中，仅有一个配置文件，文件名为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "UniSkinMod.cfg"
      }), "。请使用记事本或者任意代码编辑器将其打开，将原有的所有内容替换成以下内容："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "# VlssuSkin\r\nRoot: https://skin.vlssu.com/usm\r\n# Blessing Skin\r\nRoot: https://skin.prinzeugen.net/usm\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "保存退出，再次打开 Minecraft 之后，你应该就能看到你在 VlssuSkin 中设置的材质了。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "12--",
      children: "1.2 -"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["配置文件存放于 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: ".minecraft/config/"
      }), " 目录中，仅有一个配置文件，文件名为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "UniSkinMod.cfg"
      }), "。请使用记事本或者任意代码编辑器将其打开，将原有的所有内容替换成以下内容："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "# VlssuSkin\r\nSkin: https://skin.vlssu.com/skin/%s.png\r\nCape: https://skin.vlssu.com/cape/%s.png\r\n# Blessing Skin\r\nSkin: https://skin.prinzeugen.net/skin/%s.png\r\nCape: https://skin.prinzeugen.net/cape/%s.png\r\n# Mojang\r\nSkin: http://skins.minecraft.net/MinecraftSkins/%s.png\r\nCape: http://skins.minecraft.net/MinecraftCloaks/%s.png\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "保存退出，再次打开 Minecraft 之后，你应该就能看到你在 VlssuSkin 中设置的材质了。"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
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

/***/ 2541:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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

/***/ 3047:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(2541);
} else {}


/***/ }),

/***/ 795:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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