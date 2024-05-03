exports.id = 4583;
exports.ids = [4583];
exports.modules = {

/***/ 8311:
/***/ ((module) => {

// Exports
module.exports = {
	"heroBanner": `heroBanner__Akg`,
	"buttons": `buttons_HJQ5`
};


/***/ }),

/***/ 4393:
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

/***/ 4829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: ./node_modules/.store/react-npm-18.3.1-af38f3c1ae/package/index.js
var react_npm_18_3_1_af38f3c1ae_package = __webpack_require__(799);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-3c6fb1fad4/package/lib/theme/Layout/index.js + 53 modules
var Layout = __webpack_require__(7117);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-core-virtual-26b69661b6/package/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(1122);
// EXTERNAL MODULE: ./src/css/index.module.css
var index_module = __webpack_require__(8311);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-core-virtual-26b69661b6/package/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(4667);
// EXTERNAL MODULE: ./src/css/projects.module.css
var projects_module = __webpack_require__(4393);
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
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("div", { className: (projects_module_default()).project }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("div", { className: (projects_module_default()).flex }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(Link/* default */.A, { className: (projects_module_default()).projectGitHub, to: `${project.repo}` }, project.title), /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("p", null, project.description)), /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("div", null, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(Link/* default */.A, { className: "button button--primary", to: project.link }, "Go")));
}
function Projects() {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("section", { className: (projects_module_default()).projects }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("div", { className: (projects_module_default()).projectsContainer }, projects.map((project, index) => /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(Project, { key: index, ...project }))));
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-search-algolia-virtual-0b92606925/package/lib/theme/SearchBar/index.js + 5 modules
var SearchBar = __webpack_require__(3322);
;// CONCATENATED MODULE: ./src/pages/index.tsx






function HomepageHeader() {
  const { siteConfig } = (0,useDocusaurusContext/* default */.A)();
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("header", { className: (index_module_default()).heroBanner }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("div", { className: "container" }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("h1", { className: "hero__title" }, siteConfig.title), /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("p", { className: "hero__subtitle" }, siteConfig.tagline)));
}
function Home() {
  const {
    siteConfig: { customFields }
  } = (0,useDocusaurusContext/* default */.A)();
  const { description } = customFields;
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(Layout/* default */.A, { title: "\u4E3B\u9875", description }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(HomepageHeader, null), /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("section", { className: "homePageSearch" }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(SearchBar/* default */.A, null)), /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("main", null, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(Projects, null)));
}


/***/ })

};
;