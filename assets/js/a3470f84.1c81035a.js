exports.id = 8502;
exports.ids = [8502];
exports.modules = {

/***/ 7923:
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3047);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(795);
/* harmony import */ var _theme_DocCardList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7608);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8625);


const frontMatter = {
	description: '客户端也是一个重灾区，我将会在这里列举在这'
};
const contentTitle = '配置客户端';
const metadata = {
  "id": "tutorials/configuring-client/README",
  "title": "配置客户端",
  "description": "客户端也是一个重灾区，我将会在这里列举在这",
  "source": "@site/docs/mcserver/tutorials/configuring-client/README.md",
  "sourceDirName": "tutorials/configuring-client",
  "slug": "/tutorials/configuring-client/",
  "permalink": "/mcserver/tutorials/configuring-client/",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/vlssu/docs.vlssu.com/blob/master/docs/mcserver/tutorials/configuring-client/README.md",
  "tags": [],
  "version": "current",
  "lastUpdatedBy": "飒爽师叔",
  "lastUpdatedAt": 1686576938000,
  "frontMatter": {
    "description": "客户端也是一个重灾区，我将会在这里列举在这"
  },
  "sidebar": "primary",
  "previous": {
    "title": "注册皮肤站",
    "permalink": "/mcserver/tutorials/reg-skin-station"
  },
  "next": {
    "title": "正版启动器",
    "permalink": "/mcserver/tutorials/configuring-client/minecraft-launcher"
  }
};
const assets = {

};





const toc = [{
  "value": "我们皮肤站的认证服务器地址",
  "id": "我们皮肤站的认证服务器地址",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h1: "h1",
    h4: "h4",
    li: "li",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "配置客户端",
      children: "配置客户端"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["首先就是我们要注册皮肤站 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://skin.vlssu.com/auth/register",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "点击这里去皮肤站"
          })
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["在你注册完之后会进入", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "http://skin.vlssu.com/user",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "用户中心"
          })
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "caution",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "我们皮肤站的认证服务器地址",
        children: "我们皮肤站的认证服务器地址"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "https://skin.vlssu.com/api/yggdrasil\n"
        })
      })]
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_DocCardList__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      items: (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .useCurrentSidebarCategory */ .$S)().items
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
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

/***/ 7872:
/***/ ((module) => {

// Exports
module.exports = {
	"cardContainer": `cardContainer_JxBq`,
	"cardTitle": `cardTitle_eRmC`,
	"cardDescription": `cardDescription_ngs0`
};


/***/ }),

/***/ 7608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ DocCardList)
});

// EXTERNAL MODULE: ./node_modules/.store/react-npm-18.3.1-af38f3c1ae/package/index.js
var react_npm_18_3_1_af38f3c1ae_package = __webpack_require__(799);
// EXTERNAL MODULE: ./node_modules/.store/clsx-npm-2.1.0-29d286e1de/package/dist/clsx.mjs
var clsx = __webpack_require__(7340);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-f222014a6e/package/lib/utils/docsUtils.js
var docsUtils = __webpack_require__(8625);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-core-virtual-864ae9834c/package/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(1246);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-f222014a6e/package/lib/utils/usePluralForm.js
var usePluralForm = __webpack_require__(5902);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-core-virtual-864ae9834c/package/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(8017);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-core-virtual-864ae9834c/package/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(7861);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/Heading/index.js
var Heading = __webpack_require__(9614);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/DocCard/styles.module.css
var styles_module = __webpack_require__(7872);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/DocCard/index.js









function useCategoryItemsPlural() {
  const { selectMessage } = (0,usePluralForm/* usePluralForm */.W)();
  return (count) => selectMessage(
    count,
    (0,Translate/* translate */.T)(
      {
        message: "1 item|{count} items",
        id: "theme.docs.DocCard.categoryDescription.plurals",
        description: "The default description for a category card in the generated index about how many items this category includes"
      },
      { count }
    )
  );
}
function CardContainer({ href, children }) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    Link/* default */.A,
    {
      href,
      className: (0,clsx/* default */.A)("card padding--lg", (styles_module_default()).cardContainer)
    },
    children
  );
}
function CardLayout({ href, icon, title, description }) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(CardContainer, { href }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    Heading/* default */.A,
    {
      as: "h2",
      className: (0,clsx/* default */.A)("text--truncate", (styles_module_default()).cardTitle),
      title
    },
    icon,
    " ",
    title
  ), description && /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    "p",
    {
      className: (0,clsx/* default */.A)("text--truncate", (styles_module_default()).cardDescription),
      title: description
    },
    description
  ));
}
function CardCategory({ item }) {
  var _a;
  const href = (0,docsUtils/* findFirstSidebarItemLink */.Nr)(item);
  const categoryItemsPlural = useCategoryItemsPlural();
  if (!href) {
    return null;
  }
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    CardLayout,
    {
      href,
      icon: "\u{1F5C3}\uFE0F",
      title: item.label,
      description: (_a = item.description) != null ? _a : categoryItemsPlural(item.items.length)
    }
  );
}
function CardLink({ item }) {
  var _a, _b;
  const icon = (0,isInternalUrl/* default */.A)(item.href) ? "\u{1F4C4}\uFE0F" : "\u{1F517}";
  const doc = (0,docsUtils/* useDocById */.cC)((_a = item.docId) != null ? _a : void 0);
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    CardLayout,
    {
      href: item.href,
      icon,
      title: item.label,
      description: (_b = item.description) != null ? _b : doc == null ? void 0 : doc.description
    }
  );
}
function DocCard({ item }) {
  switch (item.type) {
    case "link":
      return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(CardLink, { item });
    case "category":
      return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(CardCategory, { item });
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/DocCardList/index.js




function DocCardListForCurrentSidebarCategory({ className }) {
  const category = (0,docsUtils/* useCurrentSidebarCategory */.$S)();
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(DocCardList, { items: category.items, className });
}
function DocCardList(props) {
  const { items, className } = props;
  if (!items) {
    return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(DocCardListForCurrentSidebarCategory, { ...props });
  }
  const filteredItems = (0,docsUtils/* filterDocCardListItems */.d1)(items);
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("section", { className: (0,clsx/* default */.A)("row", className) }, filteredItems.map((item, index) => /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("article", { key: index, className: "col col--6 margin-bottom--lg" }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(DocCard, { item }))));
}


/***/ }),

/***/ 5902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ usePluralForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(799);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9371);


const OrderedPluralForms = [
  "zero",
  "one",
  "two",
  "few",
  "many",
  "other"
];
function sortPluralForms(pluralForms) {
  return OrderedPluralForms.filter((pf) => pluralForms.includes(pf));
}
const EnglishPluralForms = {
  locale: "en",
  pluralForms: sortPluralForms(["one", "other"]),
  select: (count) => count === 1 ? "one" : "other"
};
function createLocalePluralForms(locale) {
  const pluralRules = new Intl.PluralRules(locale);
  return {
    locale,
    pluralForms: sortPluralForms(pluralRules.resolvedOptions().pluralCategories),
    select: (count) => pluralRules.select(count)
  };
}
function useLocalePluralForms() {
  const { i18n: { currentLocale } } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    try {
      return createLocalePluralForms(currentLocale);
    } catch (err) {
      console.error(`Failed to use Intl.PluralRules for locale "${currentLocale}".
Docusaurus will fallback to the default (English) implementation.
Error: ${err.message}
`);
      return EnglishPluralForms;
    }
  }, [currentLocale]);
}
function selectPluralMessage(pluralMessages, count, localePluralForms) {
  const separator = "|";
  const parts = pluralMessages.split(separator);
  if (parts.length === 1) {
    return parts[0];
  }
  if (parts.length > localePluralForms.pluralForms.length) {
    console.error(`For locale=${localePluralForms.locale}, a maximum of ${localePluralForms.pluralForms.length} plural forms are expected (${localePluralForms.pluralForms.join(",")}), but the message contains ${parts.length}: ${pluralMessages}`);
  }
  const pluralForm = localePluralForms.select(count);
  const pluralFormIndex = localePluralForms.pluralForms.indexOf(pluralForm);
  return parts[Math.min(pluralFormIndex, parts.length - 1)];
}
function usePluralForm() {
  const localePluralForm = useLocalePluralForms();
  return {
    selectMessage: (count, pluralMessages) => selectPluralMessage(pluralMessages, count, localePluralForm)
  };
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

/***/ 3047:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(2541);
} else {}


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