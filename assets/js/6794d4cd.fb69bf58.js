exports.id = 2680;
exports.ids = [2680];
exports.modules = {

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

/***/ 2387:
/***/ ((module) => {

// Exports
module.exports = {
	"listItem": `listItem_HhGt`
};


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


/***/ }),

/***/ 8501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DebugRegistry)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(799);
/* harmony import */ var _generated_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8268);
/* harmony import */ var _theme_DebugLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(128);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2387);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);




function DebugRegistry() {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_DebugLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Registry"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", { className: "clean-list" }, Object.values(_generated_registry__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A).map(([, aliasedPath, resolved]) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { key: aliasedPath, className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().listItem) }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { marginBottom: "10px" } }, "Aliased Path: ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, aliasedPath)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Resolved Path: ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, resolved))))));
}


/***/ })

};
;