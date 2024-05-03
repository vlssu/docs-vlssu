"use strict";
exports.id = 9089;
exports.ids = [9089];
exports.modules = {

/***/ 6526:
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3215);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1245);


const frontMatter = {
	sidebar_position: 3
};
const contentTitle = 'OAuth 2';
const metadata = {
  "id": "advanced/oauth2",
  "title": "OAuth 2",
  "description": "这篇文档是面向开发者的，普通用户可能无法理解。",
  "source": "@site/docs/vlssuskin/advanced/oauth2.md",
  "sourceDirName": "advanced",
  "slug": "/advanced/oauth2",
  "permalink": "/vlssuskin/advanced/oauth2",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/vlssu/docs.vlssu.com/blob/master/docs/vlssuskin/advanced/oauth2.md",
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
    "title": "Yggdrasil",
    "permalink": "/vlssuskin/advanced/Yggdrasil"
  },
  "next": {
    "title": "与 Flarum 联动",
    "permalink": "/vlssuskin/advanced/flarum"
  }
};
const assets = {

};



const toc = [{
  "value": "文档",
  "id": "文档",
  "level": 2
}, {
  "value": "创建 OAuth 2 应用",
  "id": "创建-oauth-2-应用",
  "level": 2
}, {
  "value": "第三方网站接入总结",
  "id": "第三方网站接入总结",
  "level": 2
}, {
  "value": "OAuth2 认证说明",
  "id": "oauth2-认证说明",
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
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "oauth-2",
      children: "OAuth 2"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "这篇文档是面向开发者的，普通用户可能无法理解。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "如果你看不懂这个页面在说些什么，直接关闭这篇文档或者浏览其它文档即可，忽略这部分内容不会影响你正常使用 VlssuSkin 的基础功能。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "VlssuSkin 支持 OAuth 2 服务端。你可以在你的应用中集成「使用 VlssuSkin 账户登录」这样的功能。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "文档",
      children: "文档"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["请参阅：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://blessing.netlify.app/api/oauth.html",
        children: "Blessing Skin API 文档 - OAuth2 认证。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "创建-oauth-2-应用",
      children: "创建 OAuth 2 应用"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在你的网站中集成 OAuth 2 之前，你需要先在 VlssuSkin 创建应用并获取客户端 ID 和客户端 Secret。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "打开 OAuth 2 应用管理页面，你可以在侧边栏的 开发者 -> OAuth2 应用 找到这个页面的链接。点击「创建应用」。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "OAuth 2界面",
        src: (__webpack_require__(8982)/* ["default"] */ .A) + "",
        width: "1302",
        height: "574"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "输入你的应用的名称和回调 URL，点击「提交」。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "OAuth 2输入信息",
        src: (__webpack_require__(749)/* ["default"] */ .A) + "",
        width: "611",
        height: "299"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "你的 OAuth 2 应用就创建好啦，你可以在页面中找到你的 OAuth 2 应用的客户端 ID 和客户端 Secret。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "第三方网站接入总结",
      children: "第三方网站接入总结"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "说明"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "键"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "值"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "网站生成的ID"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "client_id"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "（客户端 ID）"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "网站生成的secret 值"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "client_secret"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "（客户端的 secret 值）"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "应用程序授权端点 URL"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "authorize_url"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "https://skin.vlssu.com/oauth/authorize"
            })
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "应用程序token端点 URL"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "token_url"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "https://skin.vlssu.com/oauth/token"
            })
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "用户信息端点 URL"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "user_info_url"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "https://skin.vlssu.com/api/user"
            })
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "包含用户 ID 的字段"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "id"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "uid"
            })
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "包含用户显示名称的字段"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "name"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "nickname"
            })
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "包含用户电子邮件地址的字段"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "email"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "email"
            })
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "oauth2-认证说明",
      children: "OAuth2 认证说明"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["客户端在首次向用户请求授权时，应该让用户访问 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "https://skin.vlssu.com/oauth/authorize?client_id={客户端 ID}&redirect_uri={回调 URL}&response_type=code&scope="
      }), " （最好是客户端能主动调用浏览器）。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["此时浏览器会显示一个让用户选择是否允许授权给客户端的页面。如果用户允许，用户将被重定向到回调 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "URL"
      }), "，并带有一个含 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "code"
      }), " 字段的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "query string"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["客户端要取回这个 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "code"
      }), " 的值。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["接下来，客户端用自己的 HTTP 库以 POST 方法访问（即，无需用户干预）此 URL：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "https://skin.vlssu.com/oauth/token"
      }), "，同时附带上以下表单参数："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "key"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "value"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "grant_type"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "authorization_code"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "client_id"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "（客户端 ID）"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "client_secret"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "（客户端的 secret 值）"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "redirect_uri"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "（回调 URL）"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "code"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "（刚刚获取到的 code 值）"
          })]
        })]
      })]
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

/***/ 1365:
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
var f=__webpack_require__(1031),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 3215:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(1365);
} else {}


/***/ }),

/***/ 8982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/o1-4015a91f0e1757cb367b7c081cda9644.png");

/***/ }),

/***/ 749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 1245:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1031);
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