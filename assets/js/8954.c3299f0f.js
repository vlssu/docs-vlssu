exports.id = 8954;
exports.ids = [8954];
exports.modules = {

/***/ 9814:
/***/ ((module) => {

// Exports
module.exports = {
	"popup": `popup_b7fR`,
	"buttonContainer": `buttonContainer_rC18`
};


/***/ }),

/***/ 8954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PwaReloadPopup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(799);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7340);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7861);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9814);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);




function PwaReloadPopup({ onReload }) {
  const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  return isVisible && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)("alert", "alert--secondary", (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().popup)) }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    {
      id: "theme.PwaReloadPopup.info",
      description: "The text for PWA reload popup"
    },
    "New version available"
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().buttonContainer) }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "button",
    {
      className: "button button--link",
      type: "button",
      onClick: () => {
        setIsVisible(false);
        onReload();
      }
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
      {
        id: "theme.PwaReloadPopup.refreshButtonText",
        description: "The text for PWA reload button"
      },
      "Refresh"
    )
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "button",
    {
      "aria-label": (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)({
        id: "theme.PwaReloadPopup.closeButtonAriaLabel",
        message: "Close",
        description: "The ARIA label for close button of PWA reload popup"
      }),
      className: "close",
      type: "button",
      onClick: () => setIsVisible(false)
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { "aria-hidden": "true" }, "\xD7")
  )));
}


/***/ })

};
;