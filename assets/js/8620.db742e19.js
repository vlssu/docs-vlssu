"use strict";
exports.id = 8620;
exports.ids = [8620];
exports.modules = {

/***/ 8620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderReloadPopup: () => (/* binding */ renderReloadPopup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(799);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2631);


const POPUP_CONTAINER_ID = "pwa-popup-container";
const getContainer = () => document.getElementById(POPUP_CONTAINER_ID);
const createContainer = () => {
  const container = document.createElement("div");
  container.id = POPUP_CONTAINER_ID;
  document.body.appendChild(container);
  return container;
};
function renderReloadPopup(props) {
  var _a;
  const container = (_a = getContainer()) != null ? _a : createContainer();
  return __webpack_require__.e(/* import() */ 4609).then(__webpack_require__.bind(__webpack_require__, 4609)).then(({ default: ReloadPopup }) => {
    react_dom__WEBPACK_IMPORTED_MODULE_1__.render(/* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ReloadPopup, { ...props }), container);
  });
}


/***/ })

};
;