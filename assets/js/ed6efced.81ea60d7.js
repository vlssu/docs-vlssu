exports.id = 9769;
exports.ids = [9769];
exports.modules = {

/***/ 2647:
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3215);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1245);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3619);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9851);


const frontMatter = {
	sidebar_position: 1
};
const contentTitle = '正版启动器';
const metadata = {
  "id": "tutorials/configuring-client/minecraft-launcher",
  "title": "正版启动器",
  "description": "(此方法在新版正版启动器中失效了，请改用HMCL或其他启动器)",
  "source": "@site/docs/mcserver/tutorials/configuring-client/minecraft-launcher.md",
  "sourceDirName": "tutorials/configuring-client",
  "slug": "/tutorials/configuring-client/minecraft-launcher",
  "permalink": "/mcserver/tutorials/configuring-client/minecraft-launcher",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/vlssu/docs.vlssu.com/blob/master/docs/mcserver/tutorials/configuring-client/minecraft-launcher.md",
  "tags": [],
  "version": "current",
  "lastUpdatedBy": "飒爽师叔",
  "lastUpdatedAt": 1687336740000,
  "sidebarPosition": 1,
  "frontMatter": {
    "sidebar_position": 1
  },
  "sidebar": "primary",
  "previous": {
    "title": "配置客户端",
    "permalink": "/mcserver/tutorials/configuring-client/"
  },
  "next": {
    "title": "HMCL启动器",
    "permalink": "/mcserver/tutorials/configuring-client/hmcl"
  }
};
const assets = {

};





const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h1: "h1",
    img: "img",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "正版启动器",
      children: "正版启动器"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "(此方法在新版正版启动器中失效了，请改用HMCL或其他启动器)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["以下以 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.minecraft.net/zh-hans/download",
        children: "Minecraft Launcher"
      }), " 为例，演示在 Minecraft 客户端中使用 Yggdrasil"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "tip",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["首先你得是正版，然后再皮肤站绑定正版，如发现进不去，可以去皮肤站的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://skin.vlssu.com/user/profile",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "个人资料"
          })
        }), "右上角进行更新", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "UUID"
        }), "（如果没有则站点已帮你自动同步更新）"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "An image",
        src: (__webpack_require__(8610)/* ["default"] */ .A) + "",
        width: "824",
        height: "338"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "tip",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["需要先下载", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://authlib-injector.yushi.moe/~download/",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "authlib-injector.jar"
          })
        }), "并放在你的游戏文件的根目录也就是", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: ".minecraft"
        }), "文件夹里（实际随你放哪）"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "An image",
        src: (__webpack_require__(7869)/* ["default"] */ .A) + "",
        width: "1117",
        height: "590"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "caution",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "然后打开正版启动器的JVM参数进行设置"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "An image",
        src: (__webpack_require__(4563)/* ["default"] */ .A) + "",
        width: "1016",
        height: "639"
      })
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

/***/ 862:
/***/ ((module) => {

// Exports
module.exports = {
	"tabItem": `tabItem_IOJz`
};


/***/ }),

/***/ 7586:
/***/ ((module) => {

// Exports
module.exports = {
	"tabList": `tabList_Xu32`,
	"tabItem": `tabItem_WJBt`
};


/***/ }),

/***/ 9851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ TabItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1031);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8285);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(862);
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

/***/ 3619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tabs)
});

// EXTERNAL MODULE: ./node_modules/.store/react-npm-18.3.1-af38f3c1ae/node_modules/react/index.js
var react = __webpack_require__(1031);
// EXTERNAL MODULE: ./node_modules/.store/clsx-npm-2.1.0-29d286e1de/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(8285);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-fa0f572a22/node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(3240);
// EXTERNAL MODULE: ./node_modules/.store/react-router-virtual-813706e6e9/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(7349);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-core-virtual-26b69661b6/node_modules/@docusaurus/core/lib/client/exports/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__(1103);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-fa0f572a22/node_modules/@docusaurus/theme-common/lib/utils/historyUtils.js
var historyUtils = __webpack_require__(4325);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-fa0f572a22/node_modules/@docusaurus/theme-common/lib/utils/jsUtils.js
var jsUtils = __webpack_require__(4906);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-fa0f572a22/node_modules/@docusaurus/theme-common/lib/utils/storageUtils.js
var storageUtils = __webpack_require__(9746);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-fa0f572a22/node_modules/@docusaurus/theme-common/lib/utils/tabsUtils.js





function isTabItem(comp) {
  const { props } = comp;
  return !!props && typeof props === "object" && "value" in props;
}
function sanitizeTabsChildren(children) {
  var _a, _b;
  return (_b = (_a = react.Children.toArray(children).filter((child) => child !== "\n").map((child) => {
    if (!child || (0,react.isValidElement)(child) && isTabItem(child)) {
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
  const dup = (0,jsUtils/* duplicates */.X)(values, (a, b) => a.value === b.value);
  if (dup.length > 0) {
    throw new Error(`Docusaurus error: Duplicate values "${dup.map((a) => a.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`);
  }
}
function useTabValues(props) {
  const { values: valuesProp, children } = props;
  return (0,react.useMemo)(() => {
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
  const setValue = (0,react.useCallback)((newValue) => {
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
  const setValue = (0,react.useCallback)((newValue) => {
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
  const [selectedValue, setSelectedValue] = (0,react.useState)(() => getInitialStateValue({ defaultValue, tabValues }));
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
  const selectValue = (0,react.useCallback)((newValue) => {
    if (!isValidValue({ value: newValue, tabValues })) {
      throw new Error(`Can't select invalid tab value=${newValue}`);
    }
    setSelectedValue(newValue);
    setQueryString(newValue);
    setStorageValue(newValue);
  }, [setQueryString, setStorageValue, tabValues]);
  return { selectedValue, selectValue, tabValues };
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-core-virtual-26b69661b6/node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(2861);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-3c6fb1fad4/node_modules/@docusaurus/theme-classic/lib/theme/Tabs/styles.module.css
var styles_module = __webpack_require__(7586);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-3c6fb1fad4/node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js





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
  return /* @__PURE__ */ react.createElement(
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
    tabValues.map(({ value, label, attributes }) => /* @__PURE__ */ react.createElement(
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
    return (0,react.cloneElement)(selectedTabItem, { className: "margin-top--md" });
  }
  return /* @__PURE__ */ react.createElement("div", { className: "margin-top--md" }, childTabs.map(
    (tabItem, i) => (0,react.cloneElement)(tabItem, {
      key: i,
      hidden: tabItem.props.value !== selectedValue
    })
  ));
}
function TabsComponent(props) {
  const tabs = useTabs(props);
  return /* @__PURE__ */ react.createElement("div", { className: (0,clsx/* default */.A)("tabs-container", (styles_module_default()).tabList) }, /* @__PURE__ */ react.createElement(TabList, { ...props, ...tabs }), /* @__PURE__ */ react.createElement(TabContent, { ...props, ...tabs }));
}
function Tabs(props) {
  const isBrowser = (0,useIsBrowser/* default */.A)();
  return /* @__PURE__ */ react.createElement(
    TabsComponent,
    {
      key: String(isBrowser),
      ...props
    },
    sanitizeTabsChildren(props.children)
  );
}


/***/ }),

/***/ 1365:
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
var f=__webpack_require__(1031),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 3215:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(1365);
} else {}


/***/ }),

/***/ 8610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ml1-d7d6922894572195fec463ce17ca6230.jpg");

/***/ }),

/***/ 7869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ml2-bde92400eb470a3044ed45f8efd3cb2a.jpg");

/***/ }),

/***/ 4563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ml3-32f47d9f7b3e904b6c6de7b737c53d43.jpg");

/***/ }),

/***/ 1245:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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