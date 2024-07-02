exports.id = 8401;
exports.ids = [8401];
exports.modules = {

/***/ 8559:
/***/ ((module) => {

// Exports
module.exports = {
	"admonition": `admonition_YpZo`,
	"admonitionHeading": `admonitionHeading_ndzt`,
	"admonitionIcon": `admonitionIcon_kKC4`,
	"admonitionContent": `admonitionContent_IUWz`
};


/***/ }),

/***/ 2246:
/***/ ((module) => {

// Exports
module.exports = {
	"codeBlockContainer": `codeBlockContainer_YxTM`
};


/***/ }),

/***/ 8512:
/***/ ((module) => {

// Exports
module.exports = {
	"codeBlockContent": `codeBlockContent_n1vy`,
	"codeBlockTitle": `codeBlockTitle_y1Bn`,
	"codeBlock": `codeBlock_bK8L`,
	"codeBlockStandalone": `codeBlockStandalone_RCnw`,
	"codeBlockLines": `codeBlockLines_AHzp`,
	"codeBlockLinesWithNumbering": `codeBlockLinesWithNumbering_AVVg`,
	"buttonGroup": `buttonGroup_p4T1`
};


/***/ }),

/***/ 6078:
/***/ ((module) => {

// Exports
module.exports = {
	"copyButtonCopied": `copyButtonCopied_sqvm`,
	"copyButtonIcons": `copyButtonIcons__XME`,
	"copyButtonIcon": `copyButtonIcon_RbYr`,
	"copyButtonSuccessIcon": `copyButtonSuccessIcon_r0sx`
};


/***/ }),

/***/ 3915:
/***/ ((module) => {

// Exports
module.exports = {
	"codeLine": `codeLine_ut7q`,
	"codeLineNumber": `codeLineNumber_Z4eo`,
	"codeLineContent": `codeLineContent_AOiS`
};


/***/ }),

/***/ 1325:
/***/ ((module) => {

// Exports
module.exports = {
	"wordWrapButtonIcon": `wordWrapButtonIcon_RTrf`,
	"wordWrapButtonEnabled": `wordWrapButtonEnabled_Yqkx`
};


/***/ }),

/***/ 8814:
/***/ ((module) => {

// Exports
module.exports = {
	"details": `details_SY7b`
};


/***/ }),

/***/ 6409:
/***/ ((module) => {

// Exports
module.exports = {
	"breadcrumbHomeIcon": `breadcrumbHomeIcon_k6xj`
};


/***/ }),

/***/ 4760:
/***/ ((module) => {

// Exports
module.exports = {
	"breadcrumbsContainer": `breadcrumbsContainer_icm4`
};


/***/ }),

/***/ 6856:
/***/ ((module) => {

// Exports
module.exports = {
	"docItemContainer": `docItemContainer_psEC`,
	"docItemCol": `docItemCol_tTPJ`
};


/***/ }),

/***/ 3917:
/***/ ((module) => {

// Exports
module.exports = {
	"tocMobile": `tocMobile_wE_8`
};


/***/ }),

/***/ 2501:
/***/ ((module) => {

// Exports
module.exports = {
	"lastUpdated": `lastUpdated_Mr8O`
};


/***/ }),

/***/ 9946:
/***/ ((module) => {

// Exports
module.exports = {
	"iconEdit": `iconEdit_cYak`
};


/***/ }),

/***/ 465:
/***/ ((module) => {

// Exports
module.exports = {
	"img": `img_w8Jf`
};


/***/ }),

/***/ 2955:
/***/ ((module) => {

// Exports
module.exports = {
	"containsTaskList": `containsTaskList_w5rz`
};


/***/ }),

/***/ 5106:
/***/ ((module) => {

// Exports
module.exports = {
	"tableOfContents": `tableOfContents_uJRA`,
	"docItemContainer": `docItemContainer_RQE5`
};


/***/ }),

/***/ 9888:
/***/ ((module) => {

// Exports
module.exports = {
	"tocCollapsibleButton": `tocCollapsibleButton_sDEi`,
	"tocCollapsibleButtonExpanded": `tocCollapsibleButtonExpanded_BEla`
};


/***/ }),

/***/ 3418:
/***/ ((module) => {

// Exports
module.exports = {
	"tocCollapsible": `tocCollapsible_ez0Z`,
	"tocCollapsibleContent": `tocCollapsibleContent_mRgi`,
	"tocCollapsibleExpanded": `tocCollapsibleExpanded_dgQu`
};


/***/ }),

/***/ 64:
/***/ ((module) => {

// Exports
module.exports = {
	"tag": `tag_jpzu`,
	"tagRegular": `tagRegular_nbDw`,
	"tagWithCount": `tagWithCount_ZzSW`
};


/***/ }),

/***/ 4920:
/***/ ((module) => {

// Exports
module.exports = {
	"tags": `tags_xd82`,
	"tag": `tag_O6zN`
};


/***/ }),

/***/ 8295:
/***/ ((module) => {

// Exports
module.exports = {
	"details": `details_u3Rh`,
	"isBrowser": `isBrowser_z8zd`,
	"collapsibleContent": `collapsibleContent_phXV`
};


/***/ }),

/***/ 3752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocItem)
});

// EXTERNAL MODULE: ./node_modules/.store/react-npm-18.3.1-af38f3c1ae/package/index.js
var react_npm_18_3_1_af38f3c1ae_package = __webpack_require__(799);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-f222014a6e/package/lib/utils/metadataUtils.js + 1 modules
var metadataUtils = __webpack_require__(8971);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-f222014a6e/package/lib/utils/reactUtils.js
var reactUtils = __webpack_require__(3721);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-f222014a6e/package/lib/contexts/doc.js


const Context = react_npm_18_3_1_af38f3c1ae_package.createContext(null);
function useContextValue(content) {
  return (0,react_npm_18_3_1_af38f3c1ae_package.useMemo)(() => ({
    metadata: content.metadata,
    frontMatter: content.frontMatter,
    assets: content.assets,
    contentTitle: content.contentTitle,
    toc: content.toc
  }), [content]);
}
function DocProvider({ children, content }) {
  const contextValue = useContextValue(content);
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(Context.Provider, { value: contextValue }, children);
}
function useDoc() {
  const doc = (0,react_npm_18_3_1_af38f3c1ae_package.useContext)(Context);
  if (doc === null) {
    throw new reactUtils/* ReactContextError */.dV("DocProvider");
  }
  return doc;
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/DocItem/Metadata/index.js



function DocItemMetadata() {
  var _a;
  const { metadata, frontMatter, assets } = useDoc();
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    metadataUtils/* PageMetadata */.be,
    {
      title: metadata.title,
      description: metadata.description,
      keywords: frontMatter.keywords,
      image: (_a = assets.image) != null ? _a : frontMatter.image
    }
  );
}

// EXTERNAL MODULE: ./node_modules/.store/clsx-npm-2.1.0-29d286e1de/package/dist/clsx.mjs
var clsx = __webpack_require__(7340);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-f222014a6e/package/lib/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(7730);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-core-virtual-864ae9834c/package/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(7861);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-core-virtual-864ae9834c/package/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(1246);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/PaginatorNavLink/index.js



function PaginatorNavLink(props) {
  const { permalink, title, subLabel, isNext } = props;
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    Link/* default */.A,
    {
      className: (0,clsx/* default */.A)(
        "pagination-nav__link",
        isNext ? "pagination-nav__link--next" : "pagination-nav__link--prev"
      ),
      to: permalink
    },
    subLabel && /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("div", { className: "pagination-nav__sublabel" }, subLabel),
    /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("div", { className: "pagination-nav__label" }, title)
  );
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/DocPaginator/index.js



function DocPaginator(props) {
  const { previous, next } = props;
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    "nav",
    {
      className: "pagination-nav docusaurus-mt-lg",
      "aria-label": (0,Translate/* translate */.T)({
        id: "theme.docs.paginator.navAriaLabel",
        message: "Docs pages",
        description: "The ARIA label for the docs pagination"
      })
    },
    previous && /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
      PaginatorNavLink,
      {
        ...previous,
        subLabel: /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
          Translate/* default */.A,
          {
            id: "theme.docs.paginator.previous",
            description: "The label used to navigate to the previous doc"
          },
          "Previous"
        )
      }
    ),
    next && /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
      PaginatorNavLink,
      {
        ...next,
        subLabel: /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
          Translate/* default */.A,
          {
            id: "theme.docs.paginator.next",
            description: "The label used to navigate to the next doc"
          },
          "Next"
        ),
        isNext: true
      }
    )
  );
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/DocItem/Paginator/index.js



function DocItemPaginator() {
  const { metadata } = useDoc();
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(DocPaginator, { previous: metadata.previous, next: metadata.next });
}

// EXTERNAL MODULE: ./node_modules/.store/clsx-npm-2.1.1-96125b98be/package/dist/clsx.mjs
var dist_clsx = __webpack_require__(4998);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-core-virtual-864ae9834c/package/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(9371);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-plugin-content-docs-virtual-eebf1c7b5a/package/lib/client/index.js + 1 modules
var client = __webpack_require__(1262);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-f222014a6e/package/lib/contexts/docsPreferredVersion.js
var docsPreferredVersion = __webpack_require__(8322);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-f222014a6e/package/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(4228);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-f222014a6e/package/lib/contexts/docsVersion.js
var docsVersion = __webpack_require__(7413);
;// CONCATENATED MODULE: ./src/theme/DocVersionBanner/index.tsx








function UnreleasedVersionLabel({ siteTitle, versionMetadata }) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    Translate/* default */.A,
    {
      id: "theme.docs.versions.unreleasedVersionLabel",
      description: "The label used to tell the user that he's browsing an unreleased doc version",
      values: {
        siteTitle,
        versionLabel: /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("b", null, versionMetadata.label)
      }
    },
    "This is unreleased documentation for {siteTitle} {versionLabel} version."
  );
}
function UnmaintainedVersionLabel({ siteTitle, versionMetadata }) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    Translate/* default */.A,
    {
      id: "theme.docs.versions.unmaintainedVersionLabel",
      description: "The label used to tell the user that he's browsing an unmaintained doc version",
      values: {
        siteTitle,
        versionLabel: /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("b", null, versionMetadata.label)
      }
    },
    "This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."
  );
}
const BannerLabelComponents = {
  unreleased: UnreleasedVersionLabel,
  unmaintained: UnmaintainedVersionLabel
};
function BannerLabel(props) {
  const BannerLabelComponent = BannerLabelComponents[props.versionMetadata.banner];
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(BannerLabelComponent, { ...props });
}
function LatestVersionSuggestionLabel({
  versionLabel,
  to,
  onClick
}) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    Translate/* default */.A,
    {
      id: "theme.docs.versions.latestVersionSuggestionLabel",
      description: "The label used to tell the user to check the latest version",
      values: {
        versionLabel,
        latestVersionLink: /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("b", null, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(Link/* default */.A, { to, onClick }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
          Translate/* default */.A,
          {
            id: "theme.docs.versions.latestVersionLinkLabel",
            description: "The label used for the latest version suggestion link label"
          },
          "latest version"
        )))
      }
    },
    "For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."
  );
}
function DocVersionBannerEnabled({
  className,
  versionMetadata
}) {
  const {
    siteConfig: { title: siteTitle }
  } = (0,useDocusaurusContext/* default */.A)();
  const { pluginId } = (0,client/* useActivePlugin */.vT)({ failfast: true });
  const getVersionMainDoc = (version) => version.docs.find((doc) => doc.id === version.mainDocId);
  const { savePreferredVersionName } = (0,docsPreferredVersion/* useDocsPreferredVersion */.g1)(pluginId);
  const { latestDocSuggestion, latestVersionSuggestion } = (0,client/* useDocVersionSuggestions */.HW)(pluginId);
  const latestVersionSuggestedDoc = latestDocSuggestion != null ? latestDocSuggestion : getVersionMainDoc(latestVersionSuggestion);
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    "div",
    {
      className: (0,dist_clsx/* default */.A)(
        className,
        ThemeClassNames/* ThemeClassNames */.G.docs.docVersionBanner,
        "alert alert--warning margin-bottom--md"
      ),
      role: "alert"
    },
    /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("div", null, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
      BannerLabel,
      {
        siteTitle: pluginId.charAt(0).toUpperCase() + pluginId.slice(1).toLowerCase(),
        versionMetadata
      }
    )),
    /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("div", { className: "margin-top--md" }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
      LatestVersionSuggestionLabel,
      {
        versionLabel: latestVersionSuggestion.label,
        to: latestVersionSuggestedDoc.path,
        onClick: () => savePreferredVersionName(latestVersionSuggestion.name)
      }
    ))
  );
}
function DocVersionBanner({ className }) {
  const versionMetadata = (0,docsVersion/* useDocsVersion */.r)();
  if (versionMetadata.banner) {
    return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(DocVersionBannerEnabled, { className, versionMetadata });
  }
  return null;
}

;// CONCATENATED MODULE: ./src/theme/DocVersionBadge/index.tsx

function DocVersionBadgeWrapper(_props) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(react_npm_18_3_1_af38f3c1ae_package.Fragment, null);
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/Tag/styles.module.css
var styles_module = __webpack_require__(64);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/Tag/index.js




function Tag({ permalink, label, count, description }) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    Link/* default */.A,
    {
      href: permalink,
      title: description,
      className: (0,clsx/* default */.A)(
        (styles_module_default()).tag,
        count ? (styles_module_default()).tagWithCount : (styles_module_default()).tagRegular
      )
    },
    label,
    count && /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("span", null, count)
  );
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/TagsListInline/styles.module.css
var TagsListInline_styles_module = __webpack_require__(4920);
var TagsListInline_styles_module_default = /*#__PURE__*/__webpack_require__.n(TagsListInline_styles_module);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/TagsListInline/index.js





function TagsListInline({ tags }) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(react_npm_18_3_1_af38f3c1ae_package.Fragment, null, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("b", null, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    Translate/* default */.A,
    {
      id: "theme.tags.tagsListLabel",
      description: "The label alongside a tag list"
    },
    "Tags:"
  )), /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("ul", { className: (0,clsx/* default */.A)((TagsListInline_styles_module_default()).tags, "padding--none", "margin-left--sm") }, tags.map((tag) => /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("li", { key: tag.permalink, className: (TagsListInline_styles_module_default()).tag }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(Tag, { ...tag })))));
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/Icon/Edit/styles.module.css
var Edit_styles_module = __webpack_require__(9946);
var Edit_styles_module_default = /*#__PURE__*/__webpack_require__.n(Edit_styles_module);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/Icon/Edit/index.js



function IconEdit({ className, ...restProps }) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    "svg",
    {
      fill: "currentColor",
      height: "20",
      width: "20",
      viewBox: "0 0 40 40",
      className: (0,clsx/* default */.A)((Edit_styles_module_default()).iconEdit, className),
      "aria-hidden": "true",
      ...restProps
    },
    /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("g", null, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("path", { d: "m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z" }))
  );
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/EditThisPage/index.js





function EditThisPage({ editUrl }) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(Link/* default */.A, { to: editUrl, className: ThemeClassNames/* ThemeClassNames */.G.common.editThisPage }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(IconEdit, null), /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    Translate/* default */.A,
    {
      id: "theme.common.editThisPage",
      description: "The link label to edit the current page"
    },
    "Edit this page"
  ));
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-f222014a6e/package/lib/utils/IntlUtils.js

function useCalendar() {
  const { i18n: { currentLocale, localeConfigs } } = (0,useDocusaurusContext/* default */.A)();
  return localeConfigs[currentLocale].calendar;
}
function useDateTimeFormat(options = {}) {
  const { i18n: { currentLocale } } = (0,useDocusaurusContext/* default */.A)();
  const calendar = useCalendar();
  return new Intl.DateTimeFormat(currentLocale, {
    calendar,
    ...options
  });
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/LastUpdated/index.js




function LastUpdatedAtDate({ lastUpdatedAt }) {
  const atDate = new Date(lastUpdatedAt);
  const dateTimeFormat = useDateTimeFormat({
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC"
  });
  const formattedLastUpdatedAt = dateTimeFormat.format(atDate);
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    Translate/* default */.A,
    {
      id: "theme.lastUpdated.atDate",
      description: "The words used to describe on which date a page has been last updated",
      values: {
        date: /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("b", null, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("time", { dateTime: atDate.toISOString(), itemProp: "dateModified" }, formattedLastUpdatedAt))
      }
    },
    " on {date}"
  );
}
function LastUpdatedByUser({ lastUpdatedBy }) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    Translate/* default */.A,
    {
      id: "theme.lastUpdated.byUser",
      description: "The words used to describe by who the page has been last updated",
      values: {
        user: /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("b", null, lastUpdatedBy)
      }
    },
    " by {user}"
  );
}
function LastUpdated({ lastUpdatedAt, lastUpdatedBy }) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("span", { className: ThemeClassNames/* ThemeClassNames */.G.common.lastUpdated }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    Translate/* default */.A,
    {
      id: "theme.lastUpdated.lastUpdatedAtBy",
      description: "The sentence used to display when a page has been last updated, and by who",
      values: {
        atDate: lastUpdatedAt ? /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(LastUpdatedAtDate, { lastUpdatedAt }) : "",
        byUser: lastUpdatedBy ? /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(LastUpdatedByUser, { lastUpdatedBy }) : ""
      }
    },
    "Last updated{atDate}{byUser}"
  ),  false && /* @__PURE__ */ 0);
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/EditMetaRow/styles.module.css
var EditMetaRow_styles_module = __webpack_require__(2501);
var EditMetaRow_styles_module_default = /*#__PURE__*/__webpack_require__.n(EditMetaRow_styles_module);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/EditMetaRow/index.js





function EditMetaRow({
  className,
  editUrl,
  lastUpdatedAt,
  lastUpdatedBy
}) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("div", { className: (0,clsx/* default */.A)("row", className) }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("div", { className: "col" }, editUrl && /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(EditThisPage, { editUrl })), /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("div", { className: (0,clsx/* default */.A)("col", (EditMetaRow_styles_module_default()).lastUpdated) }, (lastUpdatedAt || lastUpdatedBy) && /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    LastUpdated,
    {
      lastUpdatedAt,
      lastUpdatedBy
    }
  )));
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/DocItem/Footer/index.js






function DocItemFooter() {
  const { metadata } = useDoc();
  const { editUrl, lastUpdatedAt, lastUpdatedBy, tags } = metadata;
  const canDisplayTagsRow = tags.length > 0;
  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
  const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;
  if (!canDisplayFooter) {
    return null;
  }
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    "footer",
    {
      className: (0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docFooter, "docusaurus-mt-lg")
    },
    canDisplayTagsRow && /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
      "div",
      {
        className: (0,clsx/* default */.A)(
          "row margin-top--sm",
          ThemeClassNames/* ThemeClassNames */.G.docs.docFooterTagsRow
        )
      },
      /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("div", { className: "col" }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(TagsListInline, { tags }))
    ),
    canDisplayEditMetaRow && /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
      EditMetaRow,
      {
        className: (0,clsx/* default */.A)(
          "margin-top--sm",
          ThemeClassNames/* ThemeClassNames */.G.docs.docFooterEditMetaRow
        ),
        editUrl,
        lastUpdatedAt,
        lastUpdatedBy
      }
    )
  );
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-f222014a6e/package/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(5111);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-f222014a6e/package/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(3379);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-f222014a6e/package/lib/utils/tocUtils.js

function treeifyTOC(flatTOC) {
  const headings = flatTOC.map((heading) => ({
    ...heading,
    parentIndex: -1,
    children: []
  }));
  const prevIndexForLevel = Array(7).fill(-1);
  headings.forEach((curr, currIndex) => {
    const ancestorLevelIndexes = prevIndexForLevel.slice(2, curr.level);
    curr.parentIndex = Math.max(...ancestorLevelIndexes);
    prevIndexForLevel[curr.level] = currIndex;
  });
  const rootNodes = [];
  headings.forEach((heading) => {
    const { parentIndex, ...rest } = heading;
    if (parentIndex >= 0) {
      headings[parentIndex].children.push(rest);
    } else {
      rootNodes.push(rest);
    }
  });
  return rootNodes;
}
function useTreeifiedTOC(toc) {
  return useMemo(() => treeifyTOC(toc), [toc]);
}
function filterTOC({ toc, minHeadingLevel, maxHeadingLevel }) {
  function isValid(item) {
    return item.level >= minHeadingLevel && item.level <= maxHeadingLevel;
  }
  return toc.flatMap((item) => {
    const filteredChildren = filterTOC({
      toc: item.children,
      minHeadingLevel,
      maxHeadingLevel
    });
    if (isValid(item)) {
      return [
        {
          ...item,
          children: filteredChildren
        }
      ];
    }
    return filteredChildren;
  });
}
function useFilteredAndTreeifiedTOC({ toc, minHeadingLevel, maxHeadingLevel }) {
  return (0,react_npm_18_3_1_af38f3c1ae_package.useMemo)(() => filterTOC({ toc: treeifyTOC(toc), minHeadingLevel, maxHeadingLevel }), [toc, minHeadingLevel, maxHeadingLevel]);
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-f222014a6e/package/lib/hooks/useTOCHighlight.js


function getVisibleBoundingClientRect(element) {
  const rect = element.getBoundingClientRect();
  const hasNoHeight = rect.top === rect.bottom;
  if (hasNoHeight) {
    return getVisibleBoundingClientRect(element.parentNode);
  }
  return rect;
}
function isInViewportTopHalf(boundingRect) {
  return boundingRect.top > 0 && boundingRect.bottom < window.innerHeight / 2;
}
function getAnchors({ minHeadingLevel, maxHeadingLevel }) {
  const selectors = [];
  for (let i = minHeadingLevel; i <= maxHeadingLevel; i += 1) {
    selectors.push(`h${i}.anchor`);
  }
  return Array.from(document.querySelectorAll(selectors.join()));
}
function getActiveAnchor(anchors, { anchorTopOffset }) {
  var _a, _b;
  const nextVisibleAnchor = anchors.find((anchor) => {
    const boundingRect = getVisibleBoundingClientRect(anchor);
    return boundingRect.top >= anchorTopOffset;
  });
  if (nextVisibleAnchor) {
    const boundingRect = getVisibleBoundingClientRect(nextVisibleAnchor);
    if (isInViewportTopHalf(boundingRect)) {
      return nextVisibleAnchor;
    }
    return (_a = anchors[anchors.indexOf(nextVisibleAnchor) - 1]) != null ? _a : null;
  }
  return (_b = anchors[anchors.length - 1]) != null ? _b : null;
}
function getLinkAnchorValue(link) {
  return decodeURIComponent(link.href.substring(link.href.indexOf("#") + 1));
}
function getLinks(linkClassName) {
  return Array.from(document.getElementsByClassName(linkClassName));
}
function getNavbarHeight() {
  return document.querySelector(".navbar").clientHeight;
}
function useAnchorTopOffsetRef() {
  const anchorTopOffsetRef = (0,react_npm_18_3_1_af38f3c1ae_package.useRef)(0);
  const { navbar: { hideOnScroll } } = (0,useThemeConfig/* useThemeConfig */.p)();
  (0,react_npm_18_3_1_af38f3c1ae_package.useEffect)(() => {
    anchorTopOffsetRef.current = hideOnScroll ? 0 : getNavbarHeight();
  }, [hideOnScroll]);
  return anchorTopOffsetRef;
}
function useTOCHighlight(config) {
  const lastActiveLinkRef = (0,react_npm_18_3_1_af38f3c1ae_package.useRef)(void 0);
  const anchorTopOffsetRef = useAnchorTopOffsetRef();
  (0,react_npm_18_3_1_af38f3c1ae_package.useEffect)(() => {
    if (!config) {
      return () => {
      };
    }
    const { linkClassName, linkActiveClassName, minHeadingLevel, maxHeadingLevel } = config;
    function updateLinkActiveClass(link, active) {
      if (active) {
        if (lastActiveLinkRef.current && lastActiveLinkRef.current !== link) {
          lastActiveLinkRef.current.classList.remove(linkActiveClassName);
        }
        link.classList.add(linkActiveClassName);
        lastActiveLinkRef.current = link;
      } else {
        link.classList.remove(linkActiveClassName);
      }
    }
    function updateActiveLink() {
      const links = getLinks(linkClassName);
      const anchors = getAnchors({ minHeadingLevel, maxHeadingLevel });
      const activeAnchor = getActiveAnchor(anchors, {
        anchorTopOffset: anchorTopOffsetRef.current
      });
      const activeLink = links.find((link) => activeAnchor && activeAnchor.id === getLinkAnchorValue(link));
      links.forEach((link) => {
        updateLinkActiveClass(link, link === activeLink);
      });
    }
    document.addEventListener("scroll", updateActiveLink);
    document.addEventListener("resize", updateActiveLink);
    updateActiveLink();
    return () => {
      document.removeEventListener("scroll", updateActiveLink);
      document.removeEventListener("resize", updateActiveLink);
    };
  }, [config, anchorTopOffsetRef]);
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/TOCItems/Tree.js


function TOCItemTree({ toc, className, linkClassName, isChild }) {
  if (!toc.length) {
    return null;
  }
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("ul", { className: isChild ? void 0 : className }, toc.map((heading) => /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("li", { key: heading.id }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    Link/* default */.A,
    {
      to: `#${heading.id}`,
      className: linkClassName != null ? linkClassName : void 0,
      dangerouslySetInnerHTML: { __html: heading.value }
    }
  ), /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    TOCItemTree,
    {
      isChild: true,
      toc: heading.children,
      className,
      linkClassName
    }
  ))));
}
/* harmony default export */ const Tree = (react_npm_18_3_1_af38f3c1ae_package.memo(TOCItemTree));

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/TOCItems/index.js




function TOCItems({
  toc,
  className = "table-of-contents table-of-contents__left-border",
  linkClassName = "table-of-contents__link",
  linkActiveClassName = void 0,
  minHeadingLevel: minHeadingLevelOption,
  maxHeadingLevel: maxHeadingLevelOption,
  ...props
}) {
  const themeConfig = (0,useThemeConfig/* useThemeConfig */.p)();
  const minHeadingLevel = minHeadingLevelOption != null ? minHeadingLevelOption : themeConfig.tableOfContents.minHeadingLevel;
  const maxHeadingLevel = maxHeadingLevelOption != null ? maxHeadingLevelOption : themeConfig.tableOfContents.maxHeadingLevel;
  const tocTree = useFilteredAndTreeifiedTOC({
    toc,
    minHeadingLevel,
    maxHeadingLevel
  });
  const tocHighlightConfig = (0,react_npm_18_3_1_af38f3c1ae_package.useMemo)(() => {
    if (linkClassName && linkActiveClassName) {
      return {
        linkClassName,
        linkActiveClassName,
        minHeadingLevel,
        maxHeadingLevel
      };
    }
    return void 0;
  }, [linkClassName, linkActiveClassName, minHeadingLevel, maxHeadingLevel]);
  useTOCHighlight(tocHighlightConfig);
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    Tree,
    {
      toc: tocTree,
      className,
      linkClassName,
      ...props
    }
  );
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/TOCCollapsible/CollapseButton/styles.module.css
var CollapseButton_styles_module = __webpack_require__(9888);
var CollapseButton_styles_module_default = /*#__PURE__*/__webpack_require__.n(CollapseButton_styles_module);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/TOCCollapsible/CollapseButton/index.js




function TOCCollapsibleCollapseButton({ collapsed, ...props }) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    "button",
    {
      type: "button",
      ...props,
      className: (0,clsx/* default */.A)(
        "clean-btn",
        (CollapseButton_styles_module_default()).tocCollapsibleButton,
        !collapsed && (CollapseButton_styles_module_default()).tocCollapsibleButtonExpanded,
        props.className
      )
    },
    /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
      Translate/* default */.A,
      {
        id: "theme.TOCCollapsible.toggleButtonLabel",
        description: "The label used by the button on the collapsible TOC component"
      },
      "On this page"
    )
  );
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/TOCCollapsible/styles.module.css
var TOCCollapsible_styles_module = __webpack_require__(3418);
var TOCCollapsible_styles_module_default = /*#__PURE__*/__webpack_require__.n(TOCCollapsible_styles_module);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/TOCCollapsible/index.js






function TOCCollapsible({
  toc,
  className,
  minHeadingLevel,
  maxHeadingLevel
}) {
  const { collapsed, toggleCollapsed } = (0,Collapsible/* useCollapsible */.u)({
    initialState: true
  });
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    "div",
    {
      className: (0,clsx/* default */.A)(
        (TOCCollapsible_styles_module_default()).tocCollapsible,
        !collapsed && (TOCCollapsible_styles_module_default()).tocCollapsibleExpanded,
        className
      )
    },
    /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(TOCCollapsibleCollapseButton, { collapsed, onClick: toggleCollapsed }),
    /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
      Collapsible/* Collapsible */.N,
      {
        lazy: true,
        className: (TOCCollapsible_styles_module_default()).tocCollapsibleContent,
        collapsed
      },
      /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
        TOCItems,
        {
          toc,
          minHeadingLevel,
          maxHeadingLevel
        }
      )
    )
  );
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/DocItem/TOC/Mobile/styles.module.css
var Mobile_styles_module = __webpack_require__(3917);
var Mobile_styles_module_default = /*#__PURE__*/__webpack_require__.n(Mobile_styles_module);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/DocItem/TOC/Mobile/index.js






function DocItemTOCMobile() {
  const { toc, frontMatter } = useDoc();
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    TOCCollapsible,
    {
      toc,
      minHeadingLevel: frontMatter.toc_min_heading_level,
      maxHeadingLevel: frontMatter.toc_max_heading_level,
      className: (0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docTocMobile, (Mobile_styles_module_default()).tocMobile)
    }
  );
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/TOC/styles.module.css
var TOC_styles_module = __webpack_require__(5106);
var TOC_styles_module_default = /*#__PURE__*/__webpack_require__.n(TOC_styles_module);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/TOC/index.js




const LINK_CLASS_NAME = "table-of-contents__link toc-highlight";
const LINK_ACTIVE_CLASS_NAME = "table-of-contents__link--active";
function TOC({ className, ...props }) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("div", { className: (0,clsx/* default */.A)((TOC_styles_module_default()).tableOfContents, "thin-scrollbar", className) }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    TOCItems,
    {
      ...props,
      linkClassName: LINK_CLASS_NAME,
      linkActiveClassName: LINK_ACTIVE_CLASS_NAME
    }
  ));
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/DocItem/TOC/Desktop/index.js




function DocItemTOCDesktop() {
  const { toc, frontMatter } = useDoc();
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    TOC,
    {
      toc,
      minHeadingLevel: frontMatter.toc_min_heading_level,
      maxHeadingLevel: frontMatter.toc_max_heading_level,
      className: ThemeClassNames/* ThemeClassNames */.G.docs.docTocDesktop
    }
  );
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/Heading/index.js
var Heading = __webpack_require__(9614);
// EXTERNAL MODULE: ./node_modules/.store/@mdx-js-react-virtual-916a57e59d/package/lib/index.js
var lib = __webpack_require__(795);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-core-virtual-864ae9834c/package/lib/client/exports/Head.js
var Head = __webpack_require__(2441);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-core-virtual-864ae9834c/package/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(6690);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-f222014a6e/package/lib/contexts/colorMode.js
var contexts_colorMode = __webpack_require__(3804);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-f222014a6e/package/lib/hooks/usePrismTheme.js


function usePrismTheme() {
  const { prism } = (0,useThemeConfig/* useThemeConfig */.p)();
  const { colorMode } = (0,contexts_colorMode/* useColorMode */.G)();
  const lightModeTheme = prism.theme;
  const darkModeTheme = prism.darkTheme || lightModeTheme;
  const prismTheme = colorMode === "dark" ? darkModeTheme : lightModeTheme;
  return prismTheme;
}

// EXTERNAL MODULE: ./node_modules/.store/parse-numeric-range-npm-1.3.0-71baf377a4/package/index.js
var parse_numeric_range_npm_1_3_0_71baf377a4_package = __webpack_require__(1296);
var parse_numeric_range_npm_1_3_0_71baf377a4_package_default = /*#__PURE__*/__webpack_require__.n(parse_numeric_range_npm_1_3_0_71baf377a4_package);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-f222014a6e/package/lib/utils/codeBlockUtils.js

const codeBlockTitleRegex = /title=(?<quote>["'])(?<title>.*?)\1/;
const metastringLinesRangeRegex = /\{(?<range>[\d,-]+)\}/;
const popularCommentPatterns = {
  js: { start: "\\/\\/", end: "" },
  jsBlock: { start: "\\/\\*", end: "\\*\\/" },
  jsx: { start: "\\{\\s*\\/\\*", end: "\\*\\/\\s*\\}" },
  bash: { start: "#", end: "" },
  html: { start: "<!--", end: "-->" }
};
const commentPatterns = {
  ...popularCommentPatterns,
  // shallow copy is sufficient
  // minor comment styles
  lua: { start: "--", end: "" },
  wasm: { start: "\\;\\;", end: "" },
  tex: { start: "%", end: "" },
  vb: { start: "['\u2018\u2019]", end: "" },
  vbnet: { start: "(?:_\\s*)?['\u2018\u2019]", end: "" },
  // Visual Studio 2019 or later
  rem: { start: "[Rr][Ee][Mm]\\b", end: "" },
  f90: { start: "!", end: "" },
  // Free format only
  ml: { start: "\\(\\*", end: "\\*\\)" },
  cobol: { start: "\\*>", end: "" }
  // Free format only
};
const popularCommentTypes = Object.keys(popularCommentPatterns);
function getCommentPattern(languages, magicCommentDirectives) {
  const commentPattern = languages.map((lang) => {
    const { start, end } = commentPatterns[lang];
    return `(?:${start}\\s*(${magicCommentDirectives.flatMap((d) => {
      var _a, _b;
      return [d.line, (_a = d.block) == null ? void 0 : _a.start, (_b = d.block) == null ? void 0 : _b.end].filter(Boolean);
    }).join("|")})\\s*${end})`;
  }).join("|");
  return new RegExp(`^\\s*(?:${commentPattern})\\s*$`);
}
function getAllMagicCommentDirectiveStyles(lang, magicCommentDirectives) {
  switch (lang) {
    case "js":
    case "javascript":
    case "ts":
    case "typescript":
      return getCommentPattern(["js", "jsBlock"], magicCommentDirectives);
    case "jsx":
    case "tsx":
      return getCommentPattern(["js", "jsBlock", "jsx"], magicCommentDirectives);
    case "html":
      return getCommentPattern(["js", "jsBlock", "html"], magicCommentDirectives);
    case "python":
    case "py":
    case "bash":
      return getCommentPattern(["bash"], magicCommentDirectives);
    case "markdown":
    case "md":
      return getCommentPattern(["html", "jsx", "bash"], magicCommentDirectives);
    case "tex":
    case "latex":
    case "matlab":
      return getCommentPattern(["tex"], magicCommentDirectives);
    case "lua":
    case "haskell":
    case "sql":
      return getCommentPattern(["lua"], magicCommentDirectives);
    case "wasm":
      return getCommentPattern(["wasm"], magicCommentDirectives);
    case "vb":
    case "vba":
    case "visual-basic":
      return getCommentPattern(["vb", "rem"], magicCommentDirectives);
    case "vbnet":
      return getCommentPattern(["vbnet", "rem"], magicCommentDirectives);
    case "batch":
      return getCommentPattern(["rem"], magicCommentDirectives);
    case "basic":
      return getCommentPattern(["rem", "f90"], magicCommentDirectives);
    case "fsharp":
      return getCommentPattern(["js", "ml"], magicCommentDirectives);
    case "ocaml":
    case "sml":
      return getCommentPattern(["ml"], magicCommentDirectives);
    case "fortran":
      return getCommentPattern(["f90"], magicCommentDirectives);
    case "cobol":
      return getCommentPattern(["cobol"], magicCommentDirectives);
    default:
      return getCommentPattern(popularCommentTypes, magicCommentDirectives);
  }
}
function parseCodeBlockTitle(metastring) {
  var _a, _b;
  return (_b = (_a = metastring == null ? void 0 : metastring.match(codeBlockTitleRegex)) == null ? void 0 : _a.groups.title) != null ? _b : "";
}
function containsLineNumbers(metastring) {
  return Boolean(metastring == null ? void 0 : metastring.includes("showLineNumbers"));
}
function parseLanguage(className) {
  const languageClassName = className.split(" ").find((str) => str.startsWith("language-"));
  return languageClassName == null ? void 0 : languageClassName.replace(/language-/, "");
}
function parseLines(content, options) {
  let code = content.replace(/\n$/, "");
  const { language, magicComments, metastring } = options;
  if (metastring && metastringLinesRangeRegex.test(metastring)) {
    const linesRange = metastring.match(metastringLinesRangeRegex).groups.range;
    if (magicComments.length === 0) {
      throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${metastring}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);
    }
    const metastringRangeClassName = magicComments[0].className;
    const lines2 = parse_numeric_range_npm_1_3_0_71baf377a4_package_default()(linesRange).filter((n) => n > 0).map((n) => [n - 1, [metastringRangeClassName]]);
    return { lineClassNames: Object.fromEntries(lines2), code };
  }
  if (language === void 0) {
    return { lineClassNames: {}, code };
  }
  const directiveRegex = getAllMagicCommentDirectiveStyles(language, magicComments);
  const lines = code.split("\n");
  const blocks = Object.fromEntries(magicComments.map((d) => [d.className, { start: 0, range: "" }]));
  const lineToClassName = Object.fromEntries(magicComments.filter((d) => d.line).map(({ className, line }) => [line, className]));
  const blockStartToClassName = Object.fromEntries(magicComments.filter((d) => d.block).map(({ className, block }) => [block.start, className]));
  const blockEndToClassName = Object.fromEntries(magicComments.filter((d) => d.block).map(({ className, block }) => [block.end, className]));
  for (let lineNumber = 0; lineNumber < lines.length; ) {
    const line = lines[lineNumber];
    const match = line.match(directiveRegex);
    if (!match) {
      lineNumber += 1;
      continue;
    }
    const directive = match.slice(1).find((item) => item !== void 0);
    if (lineToClassName[directive]) {
      blocks[lineToClassName[directive]].range += `${lineNumber},`;
    } else if (blockStartToClassName[directive]) {
      blocks[blockStartToClassName[directive]].start = lineNumber;
    } else if (blockEndToClassName[directive]) {
      blocks[blockEndToClassName[directive]].range += `${blocks[blockEndToClassName[directive]].start}-${lineNumber - 1},`;
    }
    lines.splice(lineNumber, 1);
  }
  code = lines.join("\n");
  const lineClassNames = {};
  Object.entries(blocks).forEach(([className, { range }]) => {
    parse_numeric_range_npm_1_3_0_71baf377a4_package_default()(range).forEach((l) => {
      var _a;
      (_a = lineClassNames[l]) != null ? _a : lineClassNames[l] = [];
      lineClassNames[l].push(className);
    });
  });
  return { lineClassNames, code };
}
function getPrismCssVariables(prismTheme) {
  const mapping = {
    color: "--prism-color",
    backgroundColor: "--prism-background-color"
  };
  const properties = {};
  Object.entries(prismTheme.plain).forEach(([key, value]) => {
    const varName = mapping[key];
    if (varName && typeof value === "string") {
      properties[varName] = value;
    }
  });
  return properties;
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/CodeBlock/Container/styles.module.css
var Container_styles_module = __webpack_require__(2246);
var Container_styles_module_default = /*#__PURE__*/__webpack_require__.n(Container_styles_module);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/CodeBlock/Container/index.js





function CodeBlockContainer({ as: As, ...props }) {
  const prismTheme = usePrismTheme();
  const prismCssVariables = getPrismCssVariables(prismTheme);
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    As,
    {
      ...props,
      style: prismCssVariables,
      className: (0,clsx/* default */.A)(
        props.className,
        (Container_styles_module_default()).codeBlockContainer,
        ThemeClassNames/* ThemeClassNames */.G.common.codeBlock
      )
    }
  );
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/CodeBlock/Content/styles.module.css
var Content_styles_module = __webpack_require__(8512);
var Content_styles_module_default = /*#__PURE__*/__webpack_require__.n(Content_styles_module);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/CodeBlock/Content/Element.js




function CodeBlockJSX({ children, className }) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    CodeBlockContainer,
    {
      as: "pre",
      tabIndex: 0,
      className: (0,clsx/* default */.A)((Content_styles_module_default()).codeBlockStandalone, "thin-scrollbar", className)
    },
    /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("code", { className: (Content_styles_module_default()).codeBlockLines }, children)
  );
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-f222014a6e/package/lib/hooks/useMutationObserver.js


const DefaultOptions = {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true
};
function useMutationObserver(target, callback, options = DefaultOptions) {
  const stableCallback = (0,reactUtils/* useEvent */._q)(callback);
  const stableOptions = (0,reactUtils/* useShallowMemoObject */.Be)(options);
  (0,react_npm_18_3_1_af38f3c1ae_package.useEffect)(() => {
    const observer = new MutationObserver(stableCallback);
    if (target) {
      observer.observe(target, stableOptions);
    }
    return () => observer.disconnect();
  }, [target, stableCallback, stableOptions]);
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-f222014a6e/package/lib/hooks/useCodeWordWrap.js


function useTabBecameVisibleCallback(codeBlockRef, callback) {
  const [hiddenTabElement, setHiddenTabElement] = (0,react_npm_18_3_1_af38f3c1ae_package.useState)();
  const updateHiddenTabElement = (0,react_npm_18_3_1_af38f3c1ae_package.useCallback)(() => {
    var _a;
    setHiddenTabElement((_a = codeBlockRef.current) == null ? void 0 : _a.closest("[role=tabpanel][hidden]"));
  }, [codeBlockRef, setHiddenTabElement]);
  (0,react_npm_18_3_1_af38f3c1ae_package.useEffect)(() => {
    updateHiddenTabElement();
  }, [updateHiddenTabElement]);
  useMutationObserver(hiddenTabElement, (mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "attributes" && mutation.attributeName === "hidden") {
        callback();
        updateHiddenTabElement();
      }
    });
  }, {
    attributes: true,
    characterData: false,
    childList: false,
    subtree: false
  });
}
function useCodeWordWrap() {
  const [isEnabled, setIsEnabled] = (0,react_npm_18_3_1_af38f3c1ae_package.useState)(false);
  const [isCodeScrollable, setIsCodeScrollable] = (0,react_npm_18_3_1_af38f3c1ae_package.useState)(false);
  const codeBlockRef = (0,react_npm_18_3_1_af38f3c1ae_package.useRef)(null);
  const toggle = (0,react_npm_18_3_1_af38f3c1ae_package.useCallback)(() => {
    const codeElement = codeBlockRef.current.querySelector("code");
    if (isEnabled) {
      codeElement.removeAttribute("style");
    } else {
      codeElement.style.whiteSpace = "pre-wrap";
      codeElement.style.overflowWrap = "anywhere";
    }
    setIsEnabled((value) => !value);
  }, [codeBlockRef, isEnabled]);
  const updateCodeIsScrollable = (0,react_npm_18_3_1_af38f3c1ae_package.useCallback)(() => {
    const { scrollWidth, clientWidth } = codeBlockRef.current;
    const isScrollable = scrollWidth > clientWidth || codeBlockRef.current.querySelector("code").hasAttribute("style");
    setIsCodeScrollable(isScrollable);
  }, [codeBlockRef]);
  useTabBecameVisibleCallback(codeBlockRef, updateCodeIsScrollable);
  (0,react_npm_18_3_1_af38f3c1ae_package.useEffect)(() => {
    updateCodeIsScrollable();
  }, [isEnabled, updateCodeIsScrollable]);
  (0,react_npm_18_3_1_af38f3c1ae_package.useEffect)(() => {
    window.addEventListener("resize", updateCodeIsScrollable, {
      passive: true
    });
    return () => {
      window.removeEventListener("resize", updateCodeIsScrollable);
    };
  }, [updateCodeIsScrollable]);
  return { codeBlockRef, isEnabled, isCodeScrollable, toggle };
}

// EXTERNAL MODULE: ./node_modules/.store/prism-react-renderer-virtual-2652cfc16e/package/dist/index.mjs
var dist = __webpack_require__(4314);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/CodeBlock/Line/styles.module.css
var Line_styles_module = __webpack_require__(3915);
var Line_styles_module_default = /*#__PURE__*/__webpack_require__.n(Line_styles_module);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/CodeBlock/Line/index.js



function CodeBlockLine({
  line,
  classNames,
  showLineNumbers,
  getLineProps,
  getTokenProps
}) {
  if (line.length === 1 && line[0].content === "\n") {
    line[0].content = "";
  }
  const lineProps = getLineProps({
    line,
    className: (0,clsx/* default */.A)(classNames, showLineNumbers && (Line_styles_module_default()).codeLine)
  });
  const lineTokens = line.map((token, key) => /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("span", { key, ...getTokenProps({ token }) }));
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("span", { ...lineProps }, showLineNumbers ? /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(react_npm_18_3_1_af38f3c1ae_package.Fragment, null, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("span", { className: (Line_styles_module_default()).codeLineNumber }), /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("span", { className: (Line_styles_module_default()).codeLineContent }, lineTokens)) : lineTokens, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("br", null));
}

;// CONCATENATED MODULE: ./node_modules/.store/copy-text-to-clipboard-npm-3.2.0-46c47374b9/package/index.js
function copyTextToClipboard(text, {target = document.body} = {}) {
	if (typeof text !== 'string') {
		throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof text}\`.`);
	}

	const element = document.createElement('textarea');
	const previouslyFocusedElement = document.activeElement;

	element.value = text;

	// Prevent keyboard from showing on mobile
	element.setAttribute('readonly', '');

	element.style.contain = 'strict';
	element.style.position = 'absolute';
	element.style.left = '-9999px';
	element.style.fontSize = '12pt'; // Prevent zooming on iOS

	const selection = document.getSelection();
	const originalRange = selection.rangeCount > 0 && selection.getRangeAt(0);

	target.append(element);
	element.select();

	// Explicit selection workaround for iOS
	element.selectionStart = 0;
	element.selectionEnd = text.length;

	let isSuccess = false;
	try {
		isSuccess = document.execCommand('copy');
	} catch {}

	element.remove();

	if (originalRange) {
		selection.removeAllRanges();
		selection.addRange(originalRange);
	}

	// Get the focus back on the previously focused element, if any
	if (previouslyFocusedElement) {
		previouslyFocusedElement.focus();
	}

	return isSuccess;
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/Icon/Copy/index.js

function IconCopy(props) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("svg", { viewBox: "0 0 24 24", ...props }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    "path",
    {
      fill: "currentColor",
      d: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
    }
  ));
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/Icon/Success/index.js

function IconSuccess(props) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("svg", { viewBox: "0 0 24 24", ...props }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    "path",
    {
      fill: "currentColor",
      d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
    }
  ));
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/CodeBlock/CopyButton/styles.module.css
var CopyButton_styles_module = __webpack_require__(6078);
var CopyButton_styles_module_default = /*#__PURE__*/__webpack_require__.n(CopyButton_styles_module);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/CodeBlock/CopyButton/index.js







function CopyButton({ code, className }) {
  const [isCopied, setIsCopied] = (0,react_npm_18_3_1_af38f3c1ae_package.useState)(false);
  const copyTimeout = (0,react_npm_18_3_1_af38f3c1ae_package.useRef)(void 0);
  const handleCopyCode = (0,react_npm_18_3_1_af38f3c1ae_package.useCallback)(() => {
    copyTextToClipboard(code);
    setIsCopied(true);
    copyTimeout.current = window.setTimeout(() => {
      setIsCopied(false);
    }, 1e3);
  }, [code]);
  (0,react_npm_18_3_1_af38f3c1ae_package.useEffect)(() => () => window.clearTimeout(copyTimeout.current), []);
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    "button",
    {
      type: "button",
      "aria-label": isCopied ? (0,Translate/* translate */.T)({
        id: "theme.CodeBlock.copied",
        message: "Copied",
        description: "The copied button label on code blocks"
      }) : (0,Translate/* translate */.T)({
        id: "theme.CodeBlock.copyButtonAriaLabel",
        message: "Copy code to clipboard",
        description: "The ARIA label for copy code blocks button"
      }),
      title: (0,Translate/* translate */.T)({
        id: "theme.CodeBlock.copy",
        message: "Copy",
        description: "The copy button label on code blocks"
      }),
      className: (0,clsx/* default */.A)(
        "clean-btn",
        className,
        (CopyButton_styles_module_default()).copyButton,
        isCopied && (CopyButton_styles_module_default()).copyButtonCopied
      ),
      onClick: handleCopyCode
    },
    /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("span", { className: (CopyButton_styles_module_default()).copyButtonIcons, "aria-hidden": "true" }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(IconCopy, { className: (CopyButton_styles_module_default()).copyButtonIcon }), /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(IconSuccess, { className: (CopyButton_styles_module_default()).copyButtonSuccessIcon }))
  );
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/Icon/WordWrap/index.js

function IconWordWrap(props) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("svg", { viewBox: "0 0 24 24", ...props }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    "path",
    {
      fill: "currentColor",
      d: "M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"
    }
  ));
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/CodeBlock/WordWrapButton/styles.module.css
var WordWrapButton_styles_module = __webpack_require__(1325);
var WordWrapButton_styles_module_default = /*#__PURE__*/__webpack_require__.n(WordWrapButton_styles_module);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/CodeBlock/WordWrapButton/index.js





function WordWrapButton({ className, onClick, isEnabled }) {
  const title = (0,Translate/* translate */.T)({
    id: "theme.CodeBlock.wordWrapToggle",
    message: "Toggle word wrap",
    description: "The title attribute for toggle word wrapping button of code block lines"
  });
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    "button",
    {
      type: "button",
      onClick,
      className: (0,clsx/* default */.A)(
        "clean-btn",
        className,
        isEnabled && (WordWrapButton_styles_module_default()).wordWrapButtonEnabled
      ),
      "aria-label": title,
      title
    },
    /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(IconWordWrap, { className: (WordWrapButton_styles_module_default()).wordWrapButtonIcon, "aria-hidden": "true" })
  );
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/CodeBlock/Content/String.js










function normalizeLanguage(language) {
  return language == null ? void 0 : language.toLowerCase();
}
function CodeBlockString({
  children,
  className: blockClassName = "",
  metastring,
  title: titleProp,
  showLineNumbers: showLineNumbersProp,
  language: languageProp
}) {
  var _a;
  const {
    prism: { defaultLanguage, magicComments }
  } = (0,useThemeConfig/* useThemeConfig */.p)();
  const language = normalizeLanguage(
    (_a = languageProp != null ? languageProp : parseLanguage(blockClassName)) != null ? _a : defaultLanguage
  );
  const prismTheme = usePrismTheme();
  const wordWrap = useCodeWordWrap();
  const title = parseCodeBlockTitle(metastring) || titleProp;
  const { lineClassNames, code } = parseLines(children, {
    metastring,
    language,
    magicComments
  });
  const showLineNumbers = showLineNumbersProp != null ? showLineNumbersProp : containsLineNumbers(metastring);
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    CodeBlockContainer,
    {
      as: "div",
      className: (0,clsx/* default */.A)(
        blockClassName,
        language && !blockClassName.includes(`language-${language}`) && `language-${language}`
      )
    },
    title && /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("div", { className: (Content_styles_module_default()).codeBlockTitle }, title),
    /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("div", { className: (Content_styles_module_default()).codeBlockContent }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(dist/* Highlight */.f4, { theme: prismTheme, code, language: language != null ? language : "text" }, ({ className, style, tokens, getLineProps, getTokenProps }) => /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
      "pre",
      {
        tabIndex: 0,
        ref: wordWrap.codeBlockRef,
        className: (0,clsx/* default */.A)(className, (Content_styles_module_default()).codeBlock, "thin-scrollbar"),
        style
      },
      /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
        "code",
        {
          className: (0,clsx/* default */.A)(
            (Content_styles_module_default()).codeBlockLines,
            showLineNumbers && (Content_styles_module_default()).codeBlockLinesWithNumbering
          )
        },
        tokens.map((line, i) => /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
          CodeBlockLine,
          {
            key: i,
            line,
            getLineProps,
            getTokenProps,
            classNames: lineClassNames[i],
            showLineNumbers
          }
        ))
      )
    )), /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("div", { className: (Content_styles_module_default()).buttonGroup }, (wordWrap.isEnabled || wordWrap.isCodeScrollable) && /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
      WordWrapButton,
      {
        className: (Content_styles_module_default()).codeButton,
        onClick: () => wordWrap.toggle(),
        isEnabled: wordWrap.isEnabled
      }
    ), /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(CopyButton, { className: (Content_styles_module_default()).codeButton, code })))
  );
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/CodeBlock/index.js




function maybeStringifyChildren(children) {
  if (react_npm_18_3_1_af38f3c1ae_package.Children.toArray(children).some((el) => (0,react_npm_18_3_1_af38f3c1ae_package.isValidElement)(el))) {
    return children;
  }
  return Array.isArray(children) ? children.join("") : children;
}
function CodeBlock({ children: rawChildren, ...props }) {
  const isBrowser = (0,useIsBrowser/* default */.A)();
  const children = maybeStringifyChildren(rawChildren);
  const CodeBlockComp = typeof children === "string" ? CodeBlockString : CodeBlockJSX;
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(CodeBlockComp, { key: String(isBrowser), ...props }, children);
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/CodeInline/index.js

function CodeInline(props) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("code", { ...props });
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/MDXComponents/Code.js



function shouldBeInline(props) {
  return (
    // empty code blocks have no props.children,
    // see https://github.com/facebook/docusaurus/pull/9704
    typeof props.children !== "undefined" && react_npm_18_3_1_af38f3c1ae_package.Children.toArray(props.children).every(
      (el) => typeof el === "string" && !el.includes("\n")
    )
  );
}
function MDXCode(props) {
  return shouldBeInline(props) ? /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(CodeInline, { ...props }) : /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(CodeBlock, { ...props });
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/MDXComponents/A.js


function MDXA(props) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(Link/* default */.A, { ...props });
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/MDXComponents/Pre.js

function MDXPre(props) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(react_npm_18_3_1_af38f3c1ae_package.Fragment, null, props.children);
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-core-virtual-864ae9834c/package/lib/client/exports/useBrokenLinks.js
var useBrokenLinks = __webpack_require__(52);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-f222014a6e/package/lib/components/Details/styles.module.css
var Details_styles_module = __webpack_require__(8295);
var Details_styles_module_default = /*#__PURE__*/__webpack_require__.n(Details_styles_module);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-f222014a6e/package/lib/components/Details/index.js






function isInSummary(node) {
  if (!node) {
    return false;
  }
  return node.tagName === "SUMMARY" || isInSummary(node.parentElement);
}
function hasParent(node, parent) {
  if (!node) {
    return false;
  }
  return node === parent || hasParent(node.parentElement, parent);
}
function Details({ summary, children, ...props }) {
  (0,useBrokenLinks/* default */.A)().collectAnchor(props.id);
  const isBrowser = (0,useIsBrowser/* default */.A)();
  const detailsRef = (0,react_npm_18_3_1_af38f3c1ae_package.useRef)(null);
  const { collapsed, setCollapsed } = (0,Collapsible/* useCollapsible */.u)({
    initialState: !props.open
  });
  const [open, setOpen] = (0,react_npm_18_3_1_af38f3c1ae_package.useState)(props.open);
  const summaryElement = react_npm_18_3_1_af38f3c1ae_package.isValidElement(summary) ? summary : /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("summary", null, summary != null ? summary : "Details");
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("details", { ...props, ref: detailsRef, open, "data-collapsed": collapsed, className: (0,clsx/* default */.A)((Details_styles_module_default()).details, isBrowser && (Details_styles_module_default()).isBrowser, props.className), onMouseDown: (e) => {
      const target = e.target;
      if (isInSummary(target) && e.detail > 1) {
        e.preventDefault();
      }
    }, onClick: (e) => {
      e.stopPropagation();
      const target = e.target;
      const shouldToggle = isInSummary(target) && hasParent(target, detailsRef.current);
      if (!shouldToggle) {
        return;
      }
      e.preventDefault();
      if (collapsed) {
        setCollapsed(false);
        setOpen(true);
      } else {
        setCollapsed(true);
      }
    } }, summaryElement, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
      Collapsible/* Collapsible */.N,
      {
        lazy: false,
        collapsed,
        disableSSRStyle: true,
        onCollapseTransitionEnd: (newCollapsed) => {
          setCollapsed(newCollapsed);
          setOpen(!newCollapsed);
        }
      },
      /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("div", { className: (Details_styles_module_default()).collapsibleContent }, children)
    ))
  );
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/Details/styles.module.css
var theme_Details_styles_module = __webpack_require__(8814);
var theme_Details_styles_module_default = /*#__PURE__*/__webpack_require__.n(theme_Details_styles_module);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/Details/index.js




const InfimaClasses = "alert alert--info";
function Details_Details({ ...props }) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    Details,
    {
      ...props,
      className: (0,clsx/* default */.A)(InfimaClasses, (theme_Details_styles_module_default()).details, props.className)
    }
  );
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/MDXComponents/Details.js


function MDXDetails(props) {
  const items = react_npm_18_3_1_af38f3c1ae_package.Children.toArray(props.children);
  const summary = items.find(
    (item) => react_npm_18_3_1_af38f3c1ae_package.isValidElement(item) && item.type === "summary"
  );
  const children = /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(react_npm_18_3_1_af38f3c1ae_package.Fragment, null, items.filter((item) => item !== summary));
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(Details_Details, { ...props, summary }, children);
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/MDXComponents/Heading.js


function MDXHeading(props) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(Heading/* default */.A, { ...props });
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/MDXComponents/Ul/styles.module.css
var Ul_styles_module = __webpack_require__(2955);
var Ul_styles_module_default = /*#__PURE__*/__webpack_require__.n(Ul_styles_module);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/MDXComponents/Ul/index.js



function transformUlClassName(className) {
  if (typeof className === "undefined") {
    return void 0;
  }
  return (0,clsx/* default */.A)(
    className,
    // This class is set globally by GitHub/MDX. We keep the global class, and
    // add another class to get a task list without the default ul styling
    // See https://github.com/syntax-tree/mdast-util-to-hast/issues/28
    (className == null ? void 0 : className.includes("contains-task-list")) && (Ul_styles_module_default()).containsTaskList
  );
}
function MDXUl(props) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("ul", { ...props, className: transformUlClassName(props.className) });
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/MDXComponents/Li.js


function MDXLi(props) {
  (0,useBrokenLinks/* default */.A)().collectAnchor(props.id);
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("li", { ...props });
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/MDXComponents/Img/styles.module.css
var Img_styles_module = __webpack_require__(465);
var Img_styles_module_default = /*#__PURE__*/__webpack_require__.n(Img_styles_module);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/MDXComponents/Img/index.js



function transformImgClassName(className) {
  return (0,clsx/* default */.A)(className, (Img_styles_module_default()).img);
}
function MDXImg(props) {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
      "img",
      {
        decoding: "async",
        loading: "lazy",
        ...props,
        className: transformImgClassName(props.className)
      }
    )
  );
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-f222014a6e/package/lib/utils/admonitionUtils.js

function extractMDXAdmonitionTitle(children) {
  const items = react_npm_18_3_1_af38f3c1ae_package.Children.toArray(children);
  const mdxAdmonitionTitleWrapper = items.find((item) => react_npm_18_3_1_af38f3c1ae_package.isValidElement(item) && item.type === "mdxAdmonitionTitle");
  const rest = items.filter((item) => item !== mdxAdmonitionTitleWrapper);
  const mdxAdmonitionTitle = mdxAdmonitionTitleWrapper == null ? void 0 : mdxAdmonitionTitleWrapper.props.children;
  return {
    mdxAdmonitionTitle,
    rest: rest.length > 0 ? /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(react_npm_18_3_1_af38f3c1ae_package.Fragment, null, rest) : null
  };
}
function processAdmonitionProps(props) {
  var _a;
  const { mdxAdmonitionTitle, rest } = extractMDXAdmonitionTitle(props.children);
  const title = (_a = props.title) != null ? _a : mdxAdmonitionTitle;
  return {
    ...props,
    // Do not return "title: undefined" prop
    // this might create unwanted props overrides when merging props
    // For example: {...default,...props}
    ...title && { title },
    children: rest
  };
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/Admonition/Layout/styles.module.css
var Layout_styles_module = __webpack_require__(8559);
var Layout_styles_module_default = /*#__PURE__*/__webpack_require__.n(Layout_styles_module);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/Admonition/Layout/index.js




function AdmonitionContainer({ type, className, children }) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    "div",
    {
      className: (0,clsx/* default */.A)(
        ThemeClassNames/* ThemeClassNames */.G.common.admonition,
        ThemeClassNames/* ThemeClassNames */.G.common.admonitionType(type),
        (Layout_styles_module_default()).admonition,
        className
      )
    },
    children
  );
}
function AdmonitionHeading({ icon, title }) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("div", { className: (Layout_styles_module_default()).admonitionHeading }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("span", { className: (Layout_styles_module_default()).admonitionIcon }, icon), title);
}
function AdmonitionContent({ children }) {
  return children ? /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("div", { className: (Layout_styles_module_default()).admonitionContent }, children) : null;
}
function AdmonitionLayout(props) {
  const { type, icon, title, children, className } = props;
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(AdmonitionContainer, { type, className }, title || icon ? /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(AdmonitionHeading, { title, icon }) : null, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(AdmonitionContent, null, children));
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/Admonition/Icon/Note.js

function AdmonitionIconNote(props) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("svg", { viewBox: "0 0 14 16", ...props }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    "path",
    {
      fillRule: "evenodd",
      d: "M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
    }
  ));
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/Admonition/Type/Note.js





const infimaClassName = "alert alert--secondary";
const defaultProps = {
  icon: /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(AdmonitionIconNote, null),
  title: /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    Translate/* default */.A,
    {
      id: "theme.admonition.note",
      description: "The default label used for the Note admonition (:::note)"
    },
    "note"
  )
};
function AdmonitionTypeNote(props) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    AdmonitionLayout,
    {
      ...defaultProps,
      ...props,
      className: (0,clsx/* default */.A)(infimaClassName, props.className)
    },
    props.children
  );
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/Admonition/Icon/Tip.js

function AdmonitionIconTip(props) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("svg", { viewBox: "0 0 12 16", ...props }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    "path",
    {
      fillRule: "evenodd",
      d: "M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"
    }
  ));
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/Admonition/Type/Tip.js





const Tip_infimaClassName = "alert alert--success";
const Tip_defaultProps = {
  icon: /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(AdmonitionIconTip, null),
  title: /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    Translate/* default */.A,
    {
      id: "theme.admonition.tip",
      description: "The default label used for the Tip admonition (:::tip)"
    },
    "tip"
  )
};
function AdmonitionTypeTip(props) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    AdmonitionLayout,
    {
      ...Tip_defaultProps,
      ...props,
      className: (0,clsx/* default */.A)(Tip_infimaClassName, props.className)
    },
    props.children
  );
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/Admonition/Icon/Info.js

function AdmonitionIconInfo(props) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("svg", { viewBox: "0 0 14 16", ...props }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    "path",
    {
      fillRule: "evenodd",
      d: "M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
    }
  ));
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/Admonition/Type/Info.js





const Info_infimaClassName = "alert alert--info";
const Info_defaultProps = {
  icon: /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(AdmonitionIconInfo, null),
  title: /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    Translate/* default */.A,
    {
      id: "theme.admonition.info",
      description: "The default label used for the Info admonition (:::info)"
    },
    "info"
  )
};
function AdmonitionTypeInfo(props) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    AdmonitionLayout,
    {
      ...Info_defaultProps,
      ...props,
      className: (0,clsx/* default */.A)(Info_infimaClassName, props.className)
    },
    props.children
  );
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/Admonition/Icon/Warning.js

function AdmonitionIconCaution(props) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("svg", { viewBox: "0 0 16 16", ...props }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    "path",
    {
      fillRule: "evenodd",
      d: "M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
    }
  ));
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/Admonition/Type/Warning.js





const Warning_infimaClassName = "alert alert--warning";
const Warning_defaultProps = {
  icon: /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(AdmonitionIconCaution, null),
  title: /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    Translate/* default */.A,
    {
      id: "theme.admonition.warning",
      description: "The default label used for the Warning admonition (:::warning)"
    },
    "warning"
  )
};
function AdmonitionTypeWarning(props) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    AdmonitionLayout,
    {
      ...Warning_defaultProps,
      ...props,
      className: (0,clsx/* default */.A)(Warning_infimaClassName, props.className)
    },
    props.children
  );
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/Admonition/Icon/Danger.js

function AdmonitionIconDanger(props) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("svg", { viewBox: "0 0 12 16", ...props }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    "path",
    {
      fillRule: "evenodd",
      d: "M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"
    }
  ));
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/Admonition/Type/Danger.js





const Danger_infimaClassName = "alert alert--danger";
const Danger_defaultProps = {
  icon: /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(AdmonitionIconDanger, null),
  title: /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    Translate/* default */.A,
    {
      id: "theme.admonition.danger",
      description: "The default label used for the Danger admonition (:::danger)"
    },
    "danger"
  )
};
function AdmonitionTypeDanger(props) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    AdmonitionLayout,
    {
      ...Danger_defaultProps,
      ...props,
      className: (0,clsx/* default */.A)(Danger_infimaClassName, props.className)
    },
    props.children
  );
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/Admonition/Type/Caution.js





const Caution_infimaClassName = "alert alert--warning";
const Caution_defaultProps = {
  icon: /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(AdmonitionIconCaution, null),
  title: /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    Translate/* default */.A,
    {
      id: "theme.admonition.caution",
      description: "The default label used for the Caution admonition (:::caution)"
    },
    "caution"
  )
};
function AdmonitionTypeCaution(props) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    AdmonitionLayout,
    {
      ...Caution_defaultProps,
      ...props,
      className: (0,clsx/* default */.A)(Caution_infimaClassName, props.className)
    },
    props.children
  );
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/Admonition/Types.js







const admonitionTypes = {
  note: AdmonitionTypeNote,
  tip: AdmonitionTypeTip,
  info: AdmonitionTypeInfo,
  warning: AdmonitionTypeWarning,
  danger: AdmonitionTypeDanger
};
const admonitionAliases = {
  secondary: (props) => /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(AdmonitionTypeNote, { title: "secondary", ...props }),
  important: (props) => /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(AdmonitionTypeInfo, { title: "important", ...props }),
  success: (props) => /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(AdmonitionTypeTip, { title: "success", ...props }),
  caution: AdmonitionTypeCaution
};
/* harmony default export */ const Types = ({
  ...admonitionTypes,
  ...admonitionAliases
});

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/Admonition/index.js



function getAdmonitionTypeComponent(type) {
  const component = Types[type];
  if (component) {
    return component;
  }
  console.warn(
    `No admonition component found for admonition type "${type}". Using Info as fallback.`
  );
  return Types.info;
}
function Admonition(unprocessedProps) {
  const props = processAdmonitionProps(unprocessedProps);
  const AdmonitionTypeComponent = getAdmonitionTypeComponent(props.type);
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(AdmonitionTypeComponent, { ...props });
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-core-virtual-864ae9834c/package/lib/client/exports/Noop.js
/* harmony default export */ const Noop = (() => null);

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/MDXComponents/index.js












const MDXComponents = {
  Head: Head/* default */.A,
  details: MDXDetails,
  // For MD mode support, see https://github.com/facebook/docusaurus/issues/9092#issuecomment-1602902274
  Details: MDXDetails,
  code: MDXCode,
  a: MDXA,
  pre: MDXPre,
  ul: MDXUl,
  li: MDXLi,
  img: MDXImg,
  h1: (props) => /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(MDXHeading, { as: "h1", ...props }),
  h2: (props) => /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(MDXHeading, { as: "h2", ...props }),
  h3: (props) => /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(MDXHeading, { as: "h3", ...props }),
  h4: (props) => /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(MDXHeading, { as: "h4", ...props }),
  h5: (props) => /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(MDXHeading, { as: "h5", ...props }),
  h6: (props) => /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(MDXHeading, { as: "h6", ...props }),
  admonition: Admonition,
  mermaid: Noop
};
/* harmony default export */ const theme_MDXComponents = (MDXComponents);

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/MDXContent/index.js



function MDXContent({ children }) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(lib/* MDXProvider */.x, { components: theme_MDXComponents }, children);
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/DocItem/Content/index.js






function useSyntheticTitle() {
  const { metadata, frontMatter, contentTitle } = useDoc();
  const shouldRender = !frontMatter.hide_title && typeof contentTitle === "undefined";
  if (!shouldRender) {
    return null;
  }
  return metadata.title;
}
function DocItemContent({ children }) {
  const syntheticTitle = useSyntheticTitle();
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("div", { className: (0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docMarkdown, "markdown") }, syntheticTitle && /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("header", null, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(Heading/* default */.A, { as: "h1" }, syntheticTitle)), /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(MDXContent, null, children));
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-f222014a6e/package/lib/utils/docsUtils.js
var docsUtils = __webpack_require__(8625);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-f222014a6e/package/lib/utils/routesUtils.js
var routesUtils = __webpack_require__(8574);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-core-virtual-864ae9834c/package/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(8912);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/Icon/Home/index.js

function IconHome(props) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("svg", { viewBox: "0 0 24 24", ...props }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    "path",
    {
      d: "M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",
      fill: "currentColor"
    }
  ));
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/DocBreadcrumbs/Items/Home/styles.module.css
var Home_styles_module = __webpack_require__(6409);
var Home_styles_module_default = /*#__PURE__*/__webpack_require__.n(Home_styles_module);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/DocBreadcrumbs/Items/Home/index.js






function HomeBreadcrumbItem() {
  const homeHref = (0,useBaseUrl/* default */.Ay)("/");
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("li", { className: "breadcrumbs__item" }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    Link/* default */.A,
    {
      "aria-label": (0,Translate/* translate */.T)({
        id: "theme.docs.breadcrumbs.home",
        message: "Home page",
        description: "The ARIA label for the home page in the breadcrumbs"
      }),
      className: "breadcrumbs__link",
      href: homeHref
    },
    /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(IconHome, { className: (Home_styles_module_default()).breadcrumbHomeIcon })
  ));
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/DocBreadcrumbs/styles.module.css
var DocBreadcrumbs_styles_module = __webpack_require__(4760);
var DocBreadcrumbs_styles_module_default = /*#__PURE__*/__webpack_require__.n(DocBreadcrumbs_styles_module);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/DocBreadcrumbs/index.js








function BreadcrumbsItemLink({ children, href, isLast }) {
  const className = "breadcrumbs__link";
  if (isLast) {
    return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("span", { className, itemProp: "name" }, children);
  }
  return href ? /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(Link/* default */.A, { className, href, itemProp: "item" }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("span", { itemProp: "name" }, children)) : (
    // TODO Google search console doesn't like breadcrumb items without href.
    // The schema doesn't seem to require `id` for each `item`, although Google
    // insist to infer one, even if it's invalid. Removing `itemProp="item
    // name"` for now, since I don't know how to properly fix it.
    // See https://github.com/facebook/docusaurus/issues/7241
    /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("span", { className }, children)
  );
}
function BreadcrumbsItem({ children, active, index, addMicrodata }) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    "li",
    {
      ...addMicrodata && {
        itemScope: true,
        itemProp: "itemListElement",
        itemType: "https://schema.org/ListItem"
      },
      className: (0,clsx/* default */.A)("breadcrumbs__item", {
        "breadcrumbs__item--active": active
      })
    },
    children,
    /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("meta", { itemProp: "position", content: String(index + 1) })
  );
}
function DocBreadcrumbs() {
  const breadcrumbs = (0,docsUtils/* useSidebarBreadcrumbs */.OF)();
  const homePageRoute = (0,routesUtils/* useHomePageRoute */.Dt)();
  if (!breadcrumbs) {
    return null;
  }
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    "nav",
    {
      className: (0,clsx/* default */.A)(
        ThemeClassNames/* ThemeClassNames */.G.docs.docBreadcrumbs,
        (DocBreadcrumbs_styles_module_default()).breadcrumbsContainer
      ),
      "aria-label": (0,Translate/* translate */.T)({
        id: "theme.docs.breadcrumbs.navAriaLabel",
        message: "Breadcrumbs",
        description: "The ARIA label for the breadcrumbs"
      })
    },
    /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
      "ul",
      {
        className: "breadcrumbs",
        itemScope: true,
        itemType: "https://schema.org/BreadcrumbList"
      },
      homePageRoute && /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(HomeBreadcrumbItem, null),
      breadcrumbs.map((item, idx) => {
        const isLast = idx === breadcrumbs.length - 1;
        const href = item.type === "category" && item.linkUnlisted ? void 0 : item.href;
        return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
          BreadcrumbsItem,
          {
            key: idx,
            active: isLast,
            index: idx,
            addMicrodata: !!href
          },
          /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(BreadcrumbsItemLink, { href, isLast }, item.label)
        );
      })
    )
  );
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-f222014a6e/package/lib/utils/unlistedUtils.js



function UnlistedBannerTitle() {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(Translate/* default */.A, { id: "theme.unlistedContent.title", description: "The unlisted content banner title" }, "Unlisted page");
}
function UnlistedBannerMessage() {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(Translate/* default */.A, { id: "theme.unlistedContent.message", description: "The unlisted content banner message" }, "This page is unlisted. Search engines will not index it, and only users having a direct link can access it.");
}
function UnlistedMetadata() {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(Head/* default */.A, null, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("meta", { name: "robots", content: "noindex, nofollow" }));
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/Unlisted/index.js




function UnlistedBanner({ className }) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    Admonition,
    {
      type: "caution",
      title: /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(UnlistedBannerTitle, null),
      className: (0,clsx/* default */.A)(className, ThemeClassNames/* ThemeClassNames */.G.common.unlistedBanner)
    },
    /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(UnlistedBannerMessage, null)
  );
}
function Unlisted(props) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(react_npm_18_3_1_af38f3c1ae_package.Fragment, null, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(UnlistedMetadata, null), /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(UnlistedBanner, { ...props }));
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/DocItem/Layout/styles.module.css
var DocItem_Layout_styles_module = __webpack_require__(6856);
var DocItem_Layout_styles_module_default = /*#__PURE__*/__webpack_require__.n(DocItem_Layout_styles_module);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/DocItem/Layout/index.js














function useDocTOC() {
  const { frontMatter, toc } = useDoc();
  const windowSize = (0,useWindowSize/* useWindowSize */.l)();
  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;
  const mobile = canRender ? /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(DocItemTOCMobile, null) : void 0;
  const desktop = canRender && (windowSize === "desktop" || windowSize === "ssr") ? /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(DocItemTOCDesktop, null) : void 0;
  return {
    hidden,
    mobile,
    desktop
  };
}
function DocItemLayout({ children }) {
  const docTOC = useDocTOC();
  const {
    metadata: { unlisted }
  } = useDoc();
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("div", { className: "row" }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("div", { className: (0,clsx/* default */.A)("col", !docTOC.hidden && (DocItem_Layout_styles_module_default()).docItemCol) }, unlisted && /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(Unlisted, null), /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(DocVersionBanner, null), /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("div", { className: (DocItem_Layout_styles_module_default()).docItemContainer }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("article", null, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(DocBreadcrumbs, null), /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(DocVersionBadgeWrapper, null), docTOC.mobile, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(DocItemContent, null, children), /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(DocItemFooter, null)), /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(DocItemPaginator, null))), docTOC.desktop && /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("div", { className: "col col--3" }, docTOC.desktop));
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-2418aa5572/package/lib/theme/DocItem/index.js





function DocItem(props) {
  const docHtmlClassName = `docs-doc-id-${props.content.metadata.id}`;
  const MDXComponent = props.content;
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(DocProvider, { content: props.content }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(metadataUtils/* HtmlClassNameProvider */.e3, { className: docHtmlClassName }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(DocItemMetadata, null), /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(DocItemLayout, null, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(MDXComponent, null))));
}


/***/ }),

/***/ 1296:
/***/ ((module, exports) => {

/**
 * @param {string} string    The string to parse
 * @returns {Array<number>}  Returns an energetic array.
 */
function parsePart(string) {
  let res = [];
  let m;

  for (let str of string.split(",").map((str) => str.trim())) {
    // just a number
    if (/^-?\d+$/.test(str)) {
      res.push(parseInt(str, 10));
    } else if (
      (m = str.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))
    ) {
      // 1-5 or 1..5 (equivalent) or 1...5 (doesn't include 5)
      let [_, lhs, sep, rhs] = m;

      if (lhs && rhs) {
        lhs = parseInt(lhs);
        rhs = parseInt(rhs);
        const incr = lhs < rhs ? 1 : -1;

        // Make it inclusive by moving the right 'stop-point' away by one.
        if (sep === "-" || sep === ".." || sep === "\u2025") rhs += incr;

        for (let i = lhs; i !== rhs; i += incr) res.push(i);
      }
    }
  }

  return res;
}

exports["default"] = parsePart;
module.exports = parsePart;


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