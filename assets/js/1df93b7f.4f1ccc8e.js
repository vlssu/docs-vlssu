exports.id = 4583;
exports.ids = [4583];
exports.modules = {

/***/ 8265:
/***/ ((module) => {

// Exports
module.exports = {
	"heroBanner": `heroBanner__Akg`,
	"buttons": `buttons_HJQ5`
};


/***/ }),

/***/ 7343:
/***/ ((module) => {

// Exports
module.exports = {
	"flex": `flex_f4dl`,
	"project": `project_ldqH`,
	"projectGitHub": `projectGitHub_UFH1`,
	"projects": `projects_DOEk`,
	"projectsContainer": `projectsContainer__BfS`
};


/***/ }),

/***/ 8174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: ./node_modules/.store/react-npm-18.3.1-af38f3c1ae/node_modules/react/index.js
var react = __webpack_require__(1031);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-3c6fb1fad4/node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 53 modules
var Layout = __webpack_require__(9458);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-core-virtual-26b69661b6/node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(6468);
// EXTERNAL MODULE: ./src/css/index.module.css
var index_module = __webpack_require__(8265);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-core-virtual-26b69661b6/node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(5455);
// EXTERNAL MODULE: ./src/css/projects.module.css
var projects_module = __webpack_require__(7343);
var projects_module_default = /*#__PURE__*/__webpack_require__.n(projects_module);
;// CONCATENATED MODULE: ./src/components/Projects.tsx



const projects = [
  {
    title: "VLssuSkin",
    description: "VLssu\u4E0B\u7684\u76AE\u80A4\u7AD9\u6587\u6863\uFF0C\u8BA9\u4F60\u66F4\u5BB9\u6613\u3001\u5B9E\u65F6\u7684\u627E\u5230\u4F60\u9700\u8981\u7684\u5185\u5BB9",
    link: "/vlssuskin",
    repo: "https://skin.vlssu.com"
  },
  {
    title: "Vlssu\u516C\u76CA\u670D",
    description: "VLssu\u4E0B\u7684\u6211\u7684\u4E16\u754C\u670D\u52A1\u5668\u6587\u6863\uFF0C\u8BA9\u4F60\u66F4\u5BB9\u6613\u3001\u5B9E\u65F6\u7684\u627E\u5230\u4F60\u9700\u8981\u7684\u5185\u5BB9",
    link: "/mcserver",
    repo: "https://vlssu.cn/"
  }
];
function Project(project) {
  return /* @__PURE__ */ react.createElement("div", { className: (projects_module_default()).project }, /* @__PURE__ */ react.createElement("div", { className: (projects_module_default()).flex }, /* @__PURE__ */ react.createElement(Link/* default */.A, { className: (projects_module_default()).projectGitHub, to: `${project.repo}` }, project.title), /* @__PURE__ */ react.createElement("p", null, project.description)), /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(Link/* default */.A, { className: "button button--primary", to: project.link }, "Go")));
}
function Projects() {
  return /* @__PURE__ */ react.createElement("section", { className: (projects_module_default()).projects }, /* @__PURE__ */ react.createElement("div", { className: (projects_module_default()).projectsContainer }, projects.map((project, index) => /* @__PURE__ */ react.createElement(Project, { key: index, ...project }))));
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-search-algolia-virtual-0b92606925/node_modules/@docusaurus/theme-search-algolia/lib/theme/SearchBar/index.js + 5 modules
var SearchBar = __webpack_require__(8998);
;// CONCATENATED MODULE: ./src/pages/index.tsx






function HomepageHeader() {
  const { siteConfig } = (0,useDocusaurusContext/* default */.A)();
  return /* @__PURE__ */ react.createElement("header", { className: (index_module_default()).heroBanner }, /* @__PURE__ */ react.createElement("div", { className: "container" }, /* @__PURE__ */ react.createElement("h1", { className: "hero__title" }, siteConfig.title), /* @__PURE__ */ react.createElement("p", { className: "hero__subtitle" }, siteConfig.tagline)));
}
function Home() {
  const {
    siteConfig: { customFields }
  } = (0,useDocusaurusContext/* default */.A)();
  const { description } = customFields;
  return /* @__PURE__ */ react.createElement(Layout/* default */.A, { title: "\u4E3B\u9875", description }, /* @__PURE__ */ react.createElement(HomepageHeader, null), /* @__PURE__ */ react.createElement("section", { className: "homePageSearch" }, /* @__PURE__ */ react.createElement(SearchBar/* default */.A, null)), /* @__PURE__ */ react.createElement("main", null, /* @__PURE__ */ react.createElement(Projects, null)));
}


/***/ })

};
;