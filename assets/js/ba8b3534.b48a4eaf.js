exports.id = 7815;
exports.ids = [7815];
exports.modules = {

/***/ 3439:
/***/ ((module) => {

// Exports
module.exports = {
	"containerParaiso": `containerParaiso_b00V`,
	"basicElementParaiso": `basicElementParaiso_dxvh`,
	"labelParaiso": `labelParaiso_sxDe`,
	"nullValueParaiso": `nullValueParaiso_mmSq`,
	"undefinedValueParaiso": `undefinedValueParaiso_JpWu`,
	"stringValueParaiso": `stringValueParaiso_gqiX`,
	"booleanValueParaiso": `booleanValueParaiso_N7G_`,
	"numberValueParaiso": `numberValueParaiso_ra6f`,
	"otherValueParaiso": `otherValueParaiso_WaSS`,
	"punctuationParaiso": `punctuationParaiso_s1Z3`,
	"expandIconParaiso": `expandIconParaiso_h49n`,
	"collapseIconParaiso": `collapseIconParaiso_ZJEg`,
	"collapseContentParaiso": `collapseContentParaiso_X57c`
};


/***/ }),

/***/ 5932:
/***/ ((module) => {

// Exports
module.exports = {
	"container": `container_CYem`,
	"nav": `nav__W4u`,
	"navlink": `navlink_PnK1`,
	"active": `active_ZNuR`
};


/***/ }),

/***/ 1835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DebugContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(799);
/* harmony import */ var _theme_DebugLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(128);
/* harmony import */ var _theme_DebugJsonView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3043);



function PluginInstanceContent({ pluginId, pluginInstanceContent }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", { style: { marginBottom: 30 } }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, pluginId), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_DebugJsonView__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, { src: pluginInstanceContent, collapseDepth: 2 }));
}
function PluginContent({ pluginName, pluginContent }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", { style: { marginBottom: 60 } }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, pluginName), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, Object.entries(pluginContent).filter(([, pluginInstanceContent]) => !!pluginInstanceContent).map(([pluginId, pluginInstanceContent]) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    PluginInstanceContent,
    {
      key: pluginId,
      pluginId,
      pluginInstanceContent
    }
  ))));
}
function DebugContent({ allContent }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_DebugLayout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Plugin content"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, Object.entries(allContent).filter(
    ([, pluginContent]) => Object.values(pluginContent).some(
      (instanceContent) => !!instanceContent
    )
  ).map(([pluginName, pluginContent]) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    PluginContent,
    {
      key: pluginName,
      pluginName,
      pluginContent
    }
  ))));
}


/***/ }),

/***/ 3043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ DebugJsonView)
});

// EXTERNAL MODULE: ./node_modules/.store/react-npm-18.3.1-af38f3c1ae/package/index.js
var react_npm_18_3_1_af38f3c1ae_package = __webpack_require__(799);
;// CONCATENATED MODULE: ./node_modules/.store/react-json-view-lite-virtual-b32cb7e5fe/package/dist/index.modern.js


const isBoolean = data => {
  return typeof data === 'boolean' || data instanceof Boolean;
};
const isNumber = data => {
  return typeof data === 'number' || data instanceof Number;
};
const isBigInt = data => {
  return typeof data === 'bigint' || data instanceof BigInt;
};
const isDate = data => {
  return !!data && data instanceof Date;
};
const isString = data => {
  return typeof data === 'string' || data instanceof String;
};
const isArray = data => {
  return Array.isArray(data);
};
const isObject = data => {
  return data instanceof Object && data !== null;
};

function useBool(initialValueCreator) {
  const [value, setValue] = (0,react_npm_18_3_1_af38f3c1ae_package.useState)(initialValueCreator());
  const tooggle = () => setValue(currentValue => !currentValue);
  return [value, tooggle, setValue];
}
let componentId = 1;
const generateNextId = () => componentId++;
function useComponentId() {
  const componentId = (0,react_npm_18_3_1_af38f3c1ae_package.useRef)();
  if (componentId.current === undefined) {
    componentId.current = `:jsnvw:${generateNextId()}:`;
  }
  return componentId.current;
}

function ExpandableObject(_ref) {
  let {
    field,
    value,
    data,
    lastElement,
    openBracket,
    closeBracket,
    level,
    style,
    shouldExpandNode
  } = _ref;
  const shouldExpandNodeCalledRef = (0,react_npm_18_3_1_af38f3c1ae_package.useRef)(false);
  const [expanded, toggleExpanded, setExpanded] = useBool(() => shouldExpandNode(level, value, field));
  (0,react_npm_18_3_1_af38f3c1ae_package.useEffect)(() => {
    if (!shouldExpandNodeCalledRef.current) {
      shouldExpandNodeCalledRef.current = true;
    } else {
      setExpanded(shouldExpandNode(level, value, field));
    }
  }, [shouldExpandNode]);
  const expanderIconStyle = expanded ? style.collapseIcon : style.expandIcon;
  const ariaLabel = expanded ? 'collapse JSON' : 'expand JSON';
  const contentsId = useComponentId();
  const childLevel = level + 1;
  const lastIndex = data.length - 1;
  const onKeyDown = e => {
    if (e.key === ' ') {
      toggleExpanded();
    }
  };
  return /*#__PURE__*/(0,react_npm_18_3_1_af38f3c1ae_package.createElement)("div", {
    className: style.basicChildStyle,
    role: 'list'
  }, /*#__PURE__*/(0,react_npm_18_3_1_af38f3c1ae_package.createElement)("span", {
    className: expanderIconStyle,
    onClick: toggleExpanded,
    onKeyDown: onKeyDown,
    role: 'button',
    tabIndex: 0,
    "aria-label": ariaLabel,
    "aria-expanded": expanded,
    "aria-controls": expanded ? contentsId : undefined
  }), field && /*#__PURE__*/(0,react_npm_18_3_1_af38f3c1ae_package.createElement)("span", {
    className: style.label
  }, field, ":"), /*#__PURE__*/(0,react_npm_18_3_1_af38f3c1ae_package.createElement)("span", {
    className: style.punctuation
  }, openBracket), expanded ? /*#__PURE__*/(0,react_npm_18_3_1_af38f3c1ae_package.createElement)("div", {
    id: contentsId
  }, data.map((dataElement, index) => /*#__PURE__*/(0,react_npm_18_3_1_af38f3c1ae_package.createElement)(DataRender, {
    key: dataElement[0] || index,
    field: dataElement[0],
    value: dataElement[1],
    style: style,
    lastElement: index === lastIndex,
    level: childLevel,
    shouldExpandNode: shouldExpandNode
  }))) : /*#__PURE__*/(0,react_npm_18_3_1_af38f3c1ae_package.createElement)("span", {
    className: style.collapsedContent,
    onClick: toggleExpanded,
    onKeyDown: onKeyDown,
    role: 'button',
    tabIndex: -1,
    "aria-hidden": true,
    "aria-label": ariaLabel,
    "aria-expanded": expanded
  }), /*#__PURE__*/(0,react_npm_18_3_1_af38f3c1ae_package.createElement)("span", {
    className: style.punctuation
  }, closeBracket), !lastElement && /*#__PURE__*/(0,react_npm_18_3_1_af38f3c1ae_package.createElement)("span", {
    className: style.punctuation
  }, ","));
}
function JsonObject(_ref2) {
  let {
    field,
    value,
    style,
    lastElement,
    shouldExpandNode,
    level
  } = _ref2;
  return ExpandableObject({
    field,
    value,
    lastElement: lastElement || false,
    level,
    openBracket: '{',
    closeBracket: '}',
    style,
    shouldExpandNode,
    data: Object.keys(value).map(key => [key, value[key]])
  });
}
function JsonArray(_ref3) {
  let {
    field,
    value,
    style,
    lastElement,
    level,
    shouldExpandNode
  } = _ref3;
  return ExpandableObject({
    field,
    value,
    lastElement: lastElement || false,
    level,
    openBracket: '[',
    closeBracket: ']',
    style,
    shouldExpandNode,
    data: value.map(element => [undefined, element])
  });
}
function JsonPrimitiveValue(_ref4) {
  let {
    field,
    value,
    style,
    lastElement
  } = _ref4;
  let stringValue = value;
  let valueStyle = style.otherValue;
  if (value === null) {
    stringValue = 'null';
    valueStyle = style.nullValue;
  } else if (value === undefined) {
    stringValue = 'undefined';
    valueStyle = style.undefinedValue;
  } else if (isString(value)) {
    stringValue = style.noQuotesForStringValues ? value : `"${value}"`;
    valueStyle = style.stringValue;
  } else if (isBoolean(value)) {
    stringValue = value ? 'true' : 'false';
    valueStyle = style.booleanValue;
  } else if (isNumber(value)) {
    stringValue = value.toString();
    valueStyle = style.numberValue;
  } else if (isBigInt(value)) {
    stringValue = `${value.toString()}n`;
    valueStyle = style.numberValue;
  } else if (isDate(value)) {
    stringValue = value.toISOString();
  } else {
    stringValue = value.toString();
  }
  if (field === '') {
    field = '""';
  }
  return /*#__PURE__*/(0,react_npm_18_3_1_af38f3c1ae_package.createElement)("div", {
    className: style.basicChildStyle,
    role: 'listitem'
  }, field && /*#__PURE__*/(0,react_npm_18_3_1_af38f3c1ae_package.createElement)("span", {
    className: style.label
  }, field, ":"), /*#__PURE__*/(0,react_npm_18_3_1_af38f3c1ae_package.createElement)("span", {
    className: valueStyle
  }, stringValue), !lastElement && /*#__PURE__*/(0,react_npm_18_3_1_af38f3c1ae_package.createElement)("span", {
    className: style.punctuation
  }, ","));
}
function DataRender(props) {
  const value = props.value;
  if (isArray(value)) {
    return /*#__PURE__*/(0,react_npm_18_3_1_af38f3c1ae_package.createElement)(JsonArray, Object.assign({}, props));
  }
  if (isObject(value) && !isDate(value)) {
    return /*#__PURE__*/(0,react_npm_18_3_1_af38f3c1ae_package.createElement)(JsonObject, Object.assign({}, props));
  }
  return /*#__PURE__*/(0,react_npm_18_3_1_af38f3c1ae_package.createElement)(JsonPrimitiveValue, Object.assign({}, props));
}

var styles = {"container-base":"_GzYRV","punctuation-base":"_3eOF8","pointer":"_1MFti","expander-base":"_f10Tu _1MFti","expand-icon":"_1UmXx","collapse-icon":"_1LId0","collapsed-content-base":"_1pNG9 _1MFti","container-light":"_2IvMF _GzYRV","basic-element-style":"_2bkNM","label-light":"_1MGIk","punctuation-light":"_3uHL6 _3eOF8","value-null-light":"_2T6PJ","value-undefined-light":"_1Gho6","value-string-light":"_vGjyY","value-number-light":"_1bQdo","value-boolean-light":"_3zQKs","value-other-light":"_1xvuR","collapse-icon-light":"_oLqym _f10Tu _1MFti _1LId0","expand-icon-light":"_2AXVT _f10Tu _1MFti _1UmXx","collapsed-content-light":"_2KJWg _1pNG9 _1MFti","container-dark":"_11RoI _GzYRV","expand-icon-dark":"_17H2C _f10Tu _1MFti _1UmXx","collapse-icon-dark":"_3QHg2 _f10Tu _1MFti _1LId0","collapsed-content-dark":"_3fDAz _1pNG9 _1MFti","label-dark":"_2bSDX","punctuation-dark":"_gsbQL _3eOF8","value-null-dark":"_LaAZe","value-undefined-dark":"_GTKgm","value-string-dark":"_Chy1W","value-number-dark":"_2bveF","value-boolean-dark":"_2vRm-","value-other-dark":"_1prJR"};

const defaultStyles = {
  container: styles['container-light'],
  basicChildStyle: styles['basic-element-style'],
  label: styles['label-light'],
  nullValue: styles['value-null-light'],
  undefinedValue: styles['value-undefined-light'],
  stringValue: styles['value-string-light'],
  booleanValue: styles['value-boolean-light'],
  numberValue: styles['value-number-light'],
  otherValue: styles['value-other-light'],
  punctuation: styles['punctuation-light'],
  collapseIcon: styles['collapse-icon-light'],
  expandIcon: styles['expand-icon-light'],
  collapsedContent: styles['collapsed-content-light'],
  noQuotesForStringValues: false
};
const darkStyles = {
  container: styles['container-dark'],
  basicChildStyle: styles['basic-element-style'],
  label: styles['label-dark'],
  nullValue: styles['value-null-dark'],
  undefinedValue: styles['value-undefined-dark'],
  stringValue: styles['value-string-dark'],
  booleanValue: styles['value-boolean-dark'],
  numberValue: styles['value-number-dark'],
  otherValue: styles['value-other-dark'],
  punctuation: styles['punctuation-dark'],
  collapseIcon: styles['collapse-icon-dark'],
  expandIcon: styles['expand-icon-dark'],
  collapsedContent: styles['collapsed-content-dark'],
  noQuotesForStringValues: false
};
const allExpanded = () => true;
const collapseAllNested = level => level < 1;
const JsonView = _ref => {
  let {
    data,
    style = defaultStyles,
    shouldExpandNode = allExpanded
  } = _ref;
  return /*#__PURE__*/(0,react_npm_18_3_1_af38f3c1ae_package.createElement)("div", {
    className: style.container
  }, /*#__PURE__*/(0,react_npm_18_3_1_af38f3c1ae_package.createElement)(DataRender, {
    value: data,
    style: style,
    lastElement: true,
    level: 0,
    shouldExpandNode: shouldExpandNode
  }));
};


//# sourceMappingURL=index.modern.js.map

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-plugin-debug-virtual-674f329553/package/lib/theme/DebugJsonView/styles.module.css
var styles_module = __webpack_require__(3439);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-plugin-debug-virtual-674f329553/package/lib/theme/DebugJsonView/index.js



const paraisoStyles = {
  container: (styles_module_default()).containerParaiso,
  basicChildStyle: (styles_module_default()).basicElementParaiso,
  label: (styles_module_default()).labelParaiso,
  nullValue: (styles_module_default()).nullValueParaiso,
  undefinedValue: (styles_module_default()).undefinedValueParaiso,
  stringValue: (styles_module_default()).stringValueParaiso,
  booleanValue: (styles_module_default()).booleanValueParaiso,
  numberValue: (styles_module_default()).numberValueParaiso,
  otherValue: (styles_module_default()).otherValueParaiso,
  punctuation: (styles_module_default()).punctuationParaiso,
  collapseIcon: (styles_module_default()).collapseIconParaiso,
  expandIcon: (styles_module_default()).expandIconParaiso,
  collapsedContent: (styles_module_default()).collapseContentParaiso
};
function DebugJsonView({ src, collapseDepth }) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    JsonView,
    {
      data: src,
      shouldExpandNode: (idx, value) => {
        if (Array.isArray(value)) {
          return value.length < 5;
        }
        return collapseDepth !== void 0 && idx < collapseDepth;
      },
      style: paraisoStyles
    }
  );
}


/***/ }),

/***/ 128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DebugLayout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(799);
/* harmony import */ var _docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2070);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3649);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5932);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);




function DebugNavLink({ to, children }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
    {
      className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().navlink),
      isNavLink: true,
      to,
      exact: true,
      activeStyle: {
        backgroundColor: "#363739"
      }
    },
    children
  );
}
function DebugLayout({ children }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("html", { lang: "en" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Docusaurus debug panel"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", { name: "robots", content: "noindex" })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", { className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav) }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DebugNavLink, { to: "/__docusaurus/debug" }, "Config"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DebugNavLink, { to: "/__docusaurus/debug/metadata" }, "Metadata"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DebugNavLink, { to: "/__docusaurus/debug/registry" }, "Registry"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DebugNavLink, { to: "/__docusaurus/debug/routes" }, "Routes"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DebugNavLink, { to: "/__docusaurus/debug/content" }, "Content"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DebugNavLink, { to: "/__docusaurus/debug/globalData" }, "Global data")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", { className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().container) }, children)));
}


/***/ })

};
;