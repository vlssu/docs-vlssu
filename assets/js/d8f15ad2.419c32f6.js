"use strict";
exports.id = 4044;
exports.ids = [4044];
exports.modules = {

/***/ 9823:
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
	sidebar_position: 4
};
const contentTitle = '与 Flarum 联动';
const metadata = {
  "id": "advanced/flarum",
  "title": "与 Flarum 联动",
  "description": "由于 Blessing Skin 提供了 OAuth 服务器，因此我们为 Flarum 编写了一个扩展（extension）。利用这个扩展，Flarum 将作为 OAuth 客户端并从 Blessing Skin 获取用户数据。",
  "source": "@site/docs/vlssuskin/advanced/flarum.md",
  "sourceDirName": "advanced",
  "slug": "/advanced/flarum",
  "permalink": "/vlssuskin/advanced/flarum",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/vlssu/docs.vlssu.com/blob/master/docs/vlssuskin/advanced/flarum.md",
  "tags": [],
  "version": "current",
  "lastUpdatedBy": "飒爽师叔",
  "lastUpdatedAt": 1672115812000,
  "sidebarPosition": 4,
  "frontMatter": {
    "sidebar_position": 4
  },
  "sidebar": "primary",
  "previous": {
    "title": "OAuth 2",
    "permalink": "/vlssuskin/advanced/oauth2"
  },
  "next": {
    "title": "常见问题解答",
    "permalink": "/vlssuskin/faq"
  }
};
const assets = {

};



const toc = [{
  "value": "创建 OAuth 应用",
  "id": "创建-oauth-应用",
  "level": 2
}, {
  "value": "安装并启用 Flarum 扩展",
  "id": "安装并启用-flarum-扩展",
  "level": 2
}, {
  "value": "设置 Flarum 扩展",
  "id": "设置-flarum-扩展",
  "level": 2
}, {
  "value": "登录",
  "id": "登录",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    h1: "h1",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "与-flarum-联动",
      children: "与 Flarum 联动"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "由于 Blessing Skin 提供了 OAuth 服务器，因此我们为 Flarum 编写了一个扩展（extension）。利用这个扩展，Flarum 将作为 OAuth 客户端并从 Blessing Skin 获取用户数据。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "创建-oauth-应用",
      children: "创建 OAuth 应用"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "我们首先需要在 Blessing Skin 中创建一个应用。在页面的左侧菜单栏中依次点击「高级功能」、「OAuth2 应用」，此时将出现 OAuth 应用列表。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      title: "找不到这个入口？",
      type: "tip",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "这个菜单项很有可能是被管理员隐藏了，请联系他们开启。如果您是管理员，可暂时禁用「隐藏「高级功能」菜单」插件，在操作结束后再次启用即可。"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "An image",
        src: (__webpack_require__(4137)/* ["default"] */ .A) + "",
        width: "251",
        height: "387"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "然后点击「创建应用」："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "An image",
        src: (__webpack_require__(8050)/* ["default"] */ .A) + "",
        width: "245",
        height: "166"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在弹出的提示框中像这样填写信息："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "An image",
        src: (__webpack_require__(1560)/* ["default"] */ .A) + "",
        width: "555",
        height: "391"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["其中「应用名」将在提示用户进行授权时显示；「回调 URL」中则请根据自己的实际情况修改域名（注意是 Flarum 网站所对应的域名），但后面的 pathname 部分必须是 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "/auth/blessing"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "提交后，列表中会出现刚刚创建的应用的信息："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "An image",
        src: (__webpack_require__(9268)/* ["default"] */ .A) + "",
        width: "1660",
        height: "249"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "至此，我们已经完成了在 Blessing Skin 中的设置。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "安装并启用-flarum-扩展",
      children: "安装并启用 Flarum 扩展"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "进入到 Flarum 的根目录，执行以下命令："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        children: "composer require blessing/flarum-oauth-client\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "然后进行「管理」，并启用「Blessing Skin Login」扩展："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "An image",
        src: (__webpack_require__(2301)/* ["default"] */ .A) + "",
        width: "622",
        height: "381"
      }), "\r\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "An image",
        src: (__webpack_require__(1094)/* ["default"] */ .A) + "",
        width: "288",
        height: "63"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "设置-flarum-扩展",
      children: "设置 Flarum 扩展"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在启用「Blessing Skin Login」扩展后，将弹出扩展设置界面："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "An image",
        src: (__webpack_require__(111)/* ["default"] */ .A) + "",
        width: "622",
        height: "646"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "表单的各项说明："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["「Blessing Skin 根 URL」为您的 Blessing Skin 站点根 URL，在本文中为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "https://localhost/"
        }), "；"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "「OAuth 客户端 ID」是在 Blessing Skin 中创建应用时生成的 ID，这个 ID 可以在 Blessing Skin 的 OAuth 应用列表中被找到，例如本文中为 8；"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "「OAuth 客户端 Secret」是在 Blessing Skin 中创建应用时生成的随机字符串，这个 secret 可以在 Blessing Skin 的 OAuth 应用列表中被找到；"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "「登录按钮的文本」这一项可以不填，默认为「使用 Blessing Skin 登录」；"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "「登录按钮的图标」这一项可以不填，此项的值必须 Font Awesome 图标的类名。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "填写结果如下："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "An image",
        src: (__webpack_require__(8808)/* ["default"] */ .A) + "",
        width: "618",
        height: "635"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "登录",
      children: "登录"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "用户在登录时，可以看到登录表单中多出一个按钮："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "An image",
        src: (__webpack_require__(6289)/* ["default"] */ .A) + "",
        width: "407",
        height: "575"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "点击「使用 Blessing Skin 登录」按钮（这个按钮的文本和图标可以在设置中被修改），就可以使用现有的 Blessing Skin 账号进行登录。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "首次访问时，Blessing Skin 将询问用户是否允许授权："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "An image",
        src: (__webpack_require__(3869)/* ["default"] */ .A) + "",
        width: "596",
        height: "467"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "点击「授权」，Flarum 即可获取到用户的邮箱和昵称。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "值得注意的是，Flarum 在被授权后并不会自动创建用户并以该用户的身份登录，而是被引导到一个简单的「注册」表单："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "caution",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "在 Blessing Skin 中，昵称是允许重复出现的，而 Flarum 不允许用户名重复。因此您可能需要根据实际情况修改用户名。"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "点击「注册」，就实现了使用 Blessing Skin 账号来登录 Flarum 论坛了。"
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

/***/ 4137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 3869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f10-036c78a846e0a43c0abdfbe7707a9dc5.png");

/***/ }),

/***/ 8050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 1560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f3-76fe45f34e5835b64b828ace48c2709a.png");

/***/ }),

/***/ 9268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f4-ea294d91b5e3a10a4bedb05e6ba8c08c.png");

/***/ }),

/***/ 2301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f5-69800ca3a5bd2aaa2703659d15e0da6f.png");

/***/ }),

/***/ 1094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f7-eaa7a4add7b7f6e6d86be8d9ad46ef9b.png");

/***/ }),

/***/ 8808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f8-d73ed51863e39193879b82aea5a5dcea.png");

/***/ }),

/***/ 6289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f9-46831ec36556c98b6bf618e7345b0334.png");

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