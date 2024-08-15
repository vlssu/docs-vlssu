exports.id = 9048;
exports.ids = [9048];
exports.modules = {

/***/ 5022:
/***/ ((module) => {

// Exports
module.exports = {
	"backToTopButton": `backToTopButton_gktA`,
	"backToTopButtonShow": `backToTopButtonShow_Wy69`
};


/***/ }),

/***/ 8652:
/***/ ((module) => {

// Exports
module.exports = {
	"docMainContainer": `docMainContainer_m_dz`,
	"docMainContainerEnhanced": `docMainContainerEnhanced_LTH7`,
	"docItemWrapperEnhanced": `docItemWrapperEnhanced_HU1A`
};


/***/ }),

/***/ 5876:
/***/ ((module) => {

// Exports
module.exports = {
	"expandButton": `expandButton_ES4U`,
	"expandButtonIcon": `expandButtonIcon_i_2r`
};


/***/ }),

/***/ 5381:
/***/ ((module) => {

// Exports
module.exports = {
	"docSidebarContainer": `docSidebarContainer_C9Tk`,
	"docSidebarContainerHidden": `docSidebarContainerHidden_jNy9`,
	"sidebarViewport": `sidebarViewport_f7o6`
};


/***/ }),

/***/ 3344:
/***/ ((module) => {

// Exports
module.exports = {
	"docRoot": `docRoot_QMYF`,
	"docsWrapper": `docsWrapper_nHGt`
};


/***/ }),

/***/ 5534:
/***/ ((module) => {

// Exports
module.exports = {
	"collapseSidebarButton": `collapseSidebarButton_D0WF`,
	"collapseSidebarButtonIcon": `collapseSidebarButtonIcon_uLuf`
};


/***/ }),

/***/ 3254:
/***/ ((module) => {

// Exports
module.exports = {
	"menu": `menu_J2yI`,
	"menuWithAnnouncementBar": `menuWithAnnouncementBar_zvnW`
};


/***/ }),

/***/ 5240:
/***/ ((module) => {

// Exports
module.exports = {
	"sidebar": `sidebar_Tttc`,
	"sidebarWithHideableNavbar": `sidebarWithHideableNavbar_oHrm`,
	"sidebarHidden": `sidebarHidden_uquc`,
	"sidebarLogo": `sidebarLogo_HYWO`
};


/***/ }),

/***/ 968:
/***/ ((module) => {

// Exports
module.exports = {
	"menuHtmlItem": `menuHtmlItem_FAOe`
};


/***/ }),

/***/ 2127:
/***/ ((module) => {

// Exports
module.exports = {
	"menuExternalLink": `menuExternalLink_NIko`
};


/***/ }),

/***/ 7860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocRoot)
});

// EXTERNAL MODULE: ./node_modules/.store/react-npm-18.3.1-af38f3c1ae/package/index.js
var react_npm_18_3_1_af38f3c1ae_package = __webpack_require__(799);
// EXTERNAL MODULE: ./node_modules/.store/clsx-npm-2.1.0-29d286e1de/package/dist/clsx.mjs
var clsx = __webpack_require__(7340);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-2b128264f6/package/lib/utils/metadataUtils.js + 1 modules
var metadataUtils = __webpack_require__(4358);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-2b128264f6/package/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(7238);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-plugin-content-docs-virtual-f084fea81d/package/lib/client/docsUtils.js
var docsUtils = __webpack_require__(6348);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-plugin-content-docs-virtual-f084fea81d/package/lib/client/docsSidebar.js
var docsSidebar = __webpack_require__(298);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-core-virtual-2f335dc3cb/package/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(6722);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-2b128264f6/package/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(6149);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-2b128264f6/package/lib/utils/useLocationChange.js
var useLocationChange = __webpack_require__(339);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-2b128264f6/package/lib/hooks/useBackToTopButton.js



function useBackToTopButton({ threshold }) {
  const [shown, setShown] = (0,react_npm_18_3_1_af38f3c1ae_package.useState)(false);
  const isFocusedAnchor = (0,react_npm_18_3_1_af38f3c1ae_package.useRef)(false);
  const { startScroll, cancelScroll } = (0,scrollUtils/* useSmoothScrollTo */.gk)();
  (0,scrollUtils/* useScrollPosition */.Mq)(({ scrollY: scrollTop }, lastPosition) => {
    const lastScrollTop = lastPosition == null ? void 0 : lastPosition.scrollY;
    if (!lastScrollTop) {
      return;
    }
    if (isFocusedAnchor.current) {
      isFocusedAnchor.current = false;
    } else if (scrollTop >= lastScrollTop) {
      cancelScroll();
      setShown(false);
    } else if (scrollTop < threshold) {
      setShown(false);
    } else if (scrollTop + window.innerHeight < document.documentElement.scrollHeight) {
      setShown(true);
    }
  });
  (0,useLocationChange/* useLocationChange */.$)((locationChangeEvent) => {
    if (locationChangeEvent.location.hash) {
      isFocusedAnchor.current = true;
      setShown(false);
    }
  });
  return { shown, scrollToTop: () => startScroll(0) };
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-73dbe88646/package/lib/theme/BackToTopButton/styles.module.css
var styles_module = __webpack_require__(5022);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-73dbe88646/package/lib/theme/BackToTopButton/index.js






function BackToTopButton() {
  const { shown, scrollToTop } = useBackToTopButton({ threshold: 300 });
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    "button",
    {
      "aria-label": (0,Translate/* translate */.T)({
        id: "theme.BackToTopButton.buttonAriaLabel",
        message: "Scroll back to top",
        description: "The ARIA label for the back to top button"
      }),
      className: (0,clsx/* default */.A)(
        "clean-btn",
        ThemeClassNames/* ThemeClassNames */.G.common.backToTopButton,
        (styles_module_default()).backToTopButton,
        shown && (styles_module_default()).backToTopButtonShow
      ),
      type: "button",
      onClick: scrollToTop
    }
  );
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-2b128264f6/package/lib/utils/accessibilityUtils.js
var accessibilityUtils = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/.store/react-router-virtual-129bbab0a3/package/esm/react-router.js
var react_router = __webpack_require__(1694);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-2b128264f6/package/lib/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(8472);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-2b128264f6/package/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(3389);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-73dbe88646/package/lib/theme/Logo/index.js
var Logo = __webpack_require__(1302);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-73dbe88646/package/lib/theme/Icon/Arrow/index.js

function IconArrow(props) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("svg", { width: "20", height: "20", "aria-hidden": "true", ...props }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("g", { fill: "#7a7a7a" }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("path", { d: "M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0" }), /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("path", { d: "M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0" })));
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-73dbe88646/package/lib/theme/DocSidebar/Desktop/CollapseButton/styles.module.css
var CollapseButton_styles_module = __webpack_require__(5534);
var CollapseButton_styles_module_default = /*#__PURE__*/__webpack_require__.n(CollapseButton_styles_module);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-73dbe88646/package/lib/theme/DocSidebar/Desktop/CollapseButton/index.js





function CollapseButton({ onClick }) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    "button",
    {
      type: "button",
      title: (0,Translate/* translate */.T)({
        id: "theme.docs.sidebar.collapseButtonTitle",
        message: "Collapse sidebar",
        description: "The title attribute for collapse button of doc sidebar"
      }),
      "aria-label": (0,Translate/* translate */.T)({
        id: "theme.docs.sidebar.collapseButtonAriaLabel",
        message: "Collapse sidebar",
        description: "The title attribute for collapse button of doc sidebar"
      }),
      className: (0,clsx/* default */.A)(
        "button button--secondary button--outline",
        (CollapseButton_styles_module_default()).collapseSidebarButton
      ),
      onClick
    },
    /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(IconArrow, { className: (CollapseButton_styles_module_default()).collapseSidebarButtonIcon })
  );
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-2b128264f6/package/lib/contexts/announcementBar.js
var announcementBar = __webpack_require__(1890);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-2b128264f6/package/lib/utils/reactUtils.js
var reactUtils = __webpack_require__(2143);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-plugin-content-docs-virtual-f084fea81d/package/lib/client/docSidebarItemsExpandedState.js


const EmptyContext = Symbol("EmptyContext");
const Context = react_npm_18_3_1_af38f3c1ae_package.createContext(EmptyContext);
function DocSidebarItemsExpandedStateProvider({ children }) {
  const [expandedItem, setExpandedItem] = (0,react_npm_18_3_1_af38f3c1ae_package.useState)(null);
  const contextValue = (0,react_npm_18_3_1_af38f3c1ae_package.useMemo)(() => ({ expandedItem, setExpandedItem }), [expandedItem]);
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(Context.Provider, { value: contextValue }, children);
}
function useDocSidebarItemsExpandedState() {
  const value = (0,react_npm_18_3_1_af38f3c1ae_package.useContext)(Context);
  if (value === EmptyContext) {
    throw new reactUtils/* ReactContextError */.dV("DocSidebarItemsExpandedStateProvider");
  }
  return value;
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-2b128264f6/package/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(2293);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-2b128264f6/package/lib/utils/routesUtils.js
var routesUtils = __webpack_require__(6644);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-core-virtual-2f335dc3cb/package/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(3649);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-core-virtual-2f335dc3cb/package/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(3409);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-73dbe88646/package/lib/theme/DocSidebarItem/Category/index.js









function useAutoExpandActiveCategory({ isActive, collapsed, updateCollapsed }) {
  const wasActive = (0,reactUtils/* usePrevious */.ZC)(isActive);
  (0,react_npm_18_3_1_af38f3c1ae_package.useEffect)(() => {
    const justBecameActive = isActive && !wasActive;
    if (justBecameActive && collapsed) {
      updateCollapsed(false);
    }
  }, [isActive, wasActive, collapsed, updateCollapsed]);
}
function useCategoryHrefWithSSRFallback(item) {
  const isBrowser = (0,useIsBrowser/* default */.A)();
  return (0,react_npm_18_3_1_af38f3c1ae_package.useMemo)(() => {
    if (item.href && !item.linkUnlisted) {
      return item.href;
    }
    if (isBrowser || !item.collapsible) {
      return void 0;
    }
    return (0,docsUtils/* findFirstSidebarItemLink */.Nr)(item);
  }, [item, isBrowser]);
}
function Category_CollapseButton({ collapsed, categoryLabel, onClick }) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    "button",
    {
      "aria-label": collapsed ? (0,Translate/* translate */.T)(
        {
          id: "theme.DocSidebarItem.expandCategoryAriaLabel",
          message: "Expand sidebar category '{label}'",
          description: "The ARIA label to expand the sidebar category"
        },
        { label: categoryLabel }
      ) : (0,Translate/* translate */.T)(
        {
          id: "theme.DocSidebarItem.collapseCategoryAriaLabel",
          message: "Collapse sidebar category '{label}'",
          description: "The ARIA label to collapse the sidebar category"
        },
        { label: categoryLabel }
      ),
      "aria-expanded": !collapsed,
      type: "button",
      className: "clean-btn menu__caret",
      onClick
    }
  );
}
function DocSidebarItemCategory({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}) {
  const { items, label, collapsible, className, href } = item;
  const {
    docs: {
      sidebar: { autoCollapseCategories }
    }
  } = (0,useThemeConfig/* useThemeConfig */.p)();
  const hrefWithSSRFallback = useCategoryHrefWithSSRFallback(item);
  const isActive = (0,docsUtils/* isActiveSidebarItem */.w8)(item, activePath);
  const isCurrentPage = (0,routesUtils/* isSamePath */.ys)(href, activePath);
  const { collapsed, setCollapsed } = (0,Collapsible/* useCollapsible */.u)({
    // Active categories are always initialized as expanded. The default
    // (`item.collapsed`) is only used for non-active categories.
    initialState: () => {
      if (!collapsible) {
        return false;
      }
      return isActive ? false : item.collapsed;
    }
  });
  const { expandedItem, setExpandedItem } = useDocSidebarItemsExpandedState();
  const updateCollapsed = (toCollapsed = !collapsed) => {
    setExpandedItem(toCollapsed ? null : index);
    setCollapsed(toCollapsed);
  };
  useAutoExpandActiveCategory({ isActive, collapsed, updateCollapsed });
  (0,react_npm_18_3_1_af38f3c1ae_package.useEffect)(() => {
    if (collapsible && expandedItem != null && expandedItem !== index && autoCollapseCategories) {
      setCollapsed(true);
    }
  }, [collapsible, expandedItem, index, setCollapsed, autoCollapseCategories]);
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    "li",
    {
      className: (0,clsx/* default */.A)(
        ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemCategory,
        ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemCategoryLevel(level),
        "menu__list-item",
        {
          "menu__list-item--collapsed": collapsed
        },
        className
      )
    },
    /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
      "div",
      {
        className: (0,clsx/* default */.A)("menu__list-item-collapsible", {
          "menu__list-item-collapsible--active": isCurrentPage
        })
      },
      /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
        Link/* default */.A,
        {
          className: (0,clsx/* default */.A)("menu__link", {
            "menu__link--sublist": collapsible,
            "menu__link--sublist-caret": !href && collapsible,
            "menu__link--active": isActive
          }),
          onClick: collapsible ? (e) => {
            onItemClick == null ? void 0 : onItemClick(item);
            if (href) {
              updateCollapsed(false);
            } else {
              e.preventDefault();
              updateCollapsed();
            }
          } : () => {
            onItemClick == null ? void 0 : onItemClick(item);
          },
          "aria-current": isCurrentPage ? "page" : void 0,
          role: collapsible && !href ? "button" : void 0,
          "aria-expanded": collapsible && !href ? !collapsed : void 0,
          href: collapsible ? hrefWithSSRFallback != null ? hrefWithSSRFallback : "#" : hrefWithSSRFallback,
          ...props
        },
        label
      ),
      href && collapsible && /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
        Category_CollapseButton,
        {
          collapsed,
          categoryLabel: label,
          onClick: (e) => {
            e.preventDefault();
            updateCollapsed();
          }
        }
      )
    ),
    /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(Collapsible/* Collapsible */.N, { lazy: true, as: "ul", className: "menu__list", collapsed }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
      theme_DocSidebarItems,
      {
        items,
        tabIndex: collapsed ? -1 : 0,
        onItemClick,
        activePath,
        level: level + 1
      }
    ))
  );
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-core-virtual-2f335dc3cb/package/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(7312);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-73dbe88646/package/lib/theme/Icon/ExternalLink/index.js
var ExternalLink = __webpack_require__(542);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-73dbe88646/package/lib/theme/DocSidebarItem/Link/styles.module.css
var Link_styles_module = __webpack_require__(2127);
var Link_styles_module_default = /*#__PURE__*/__webpack_require__.n(Link_styles_module);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-73dbe88646/package/lib/theme/DocSidebarItem/Link/index.js








function DocSidebarItemLink({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}) {
  const { href, label, className, autoAddBaseUrl } = item;
  const isActive = (0,docsUtils/* isActiveSidebarItem */.w8)(item, activePath);
  const isInternalLink = (0,isInternalUrl/* default */.A)(href);
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    "li",
    {
      className: (0,clsx/* default */.A)(
        ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemLink,
        ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemLinkLevel(level),
        "menu__list-item",
        className
      ),
      key: label
    },
    /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
      Link/* default */.A,
      {
        className: (0,clsx/* default */.A)(
          "menu__link",
          !isInternalLink && (Link_styles_module_default()).menuExternalLink,
          {
            "menu__link--active": isActive
          }
        ),
        autoAddBaseUrl,
        "aria-current": isActive ? "page" : void 0,
        to: href,
        ...isInternalLink && {
          onClick: onItemClick ? () => onItemClick(item) : void 0
        },
        ...props
      },
      label,
      !isInternalLink && /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(ExternalLink/* default */.A, null)
    )
  );
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-73dbe88646/package/lib/theme/DocSidebarItem/Html/styles.module.css
var Html_styles_module = __webpack_require__(968);
var Html_styles_module_default = /*#__PURE__*/__webpack_require__.n(Html_styles_module);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-73dbe88646/package/lib/theme/DocSidebarItem/Html/index.js




function DocSidebarItemHtml({ item, level, index }) {
  const { value, defaultStyle, className } = item;
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    "li",
    {
      className: (0,clsx/* default */.A)(
        ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemLink,
        ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemLinkLevel(level),
        defaultStyle && [(Html_styles_module_default()).menuHtmlItem, "menu__list-item"],
        className
      ),
      key: index,
      dangerouslySetInnerHTML: { __html: value }
    }
  );
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-73dbe88646/package/lib/theme/DocSidebarItem/index.js




function DocSidebarItem({ item, ...props }) {
  switch (item.type) {
    case "category":
      return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(DocSidebarItemCategory, { item, ...props });
    case "html":
      return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(DocSidebarItemHtml, { item, ...props });
    case "link":
    default:
      return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(DocSidebarItemLink, { item, ...props });
  }
}

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-73dbe88646/package/lib/theme/DocSidebarItems/index.js



function DocSidebarItems({ items, ...props }) {
  const visibleItems = (0,docsUtils/* useVisibleSidebarItems */.Y)(items, props.activePath);
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(DocSidebarItemsExpandedStateProvider, null, visibleItems.map((item, index) => /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(DocSidebarItem, { key: index, item, index, ...props })));
}
/* harmony default export */ const theme_DocSidebarItems = ((0,react_npm_18_3_1_af38f3c1ae_package.memo)(DocSidebarItems));

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-73dbe88646/package/lib/theme/DocSidebar/Desktop/Content/styles.module.css
var Content_styles_module = __webpack_require__(3254);
var Content_styles_module_default = /*#__PURE__*/__webpack_require__.n(Content_styles_module);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-73dbe88646/package/lib/theme/DocSidebar/Desktop/Content/index.js







function useShowAnnouncementBar() {
  const { isActive } = (0,announcementBar/* useAnnouncementBar */.M)();
  const [showAnnouncementBar, setShowAnnouncementBar] = (0,react_npm_18_3_1_af38f3c1ae_package.useState)(isActive);
  (0,scrollUtils/* useScrollPosition */.Mq)(
    ({ scrollY }) => {
      if (isActive) {
        setShowAnnouncementBar(scrollY === 0);
      }
    },
    [isActive]
  );
  return isActive && showAnnouncementBar;
}
function DocSidebarDesktopContent({ path, sidebar, className }) {
  const showAnnouncementBar = useShowAnnouncementBar();
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    "nav",
    {
      "aria-label": (0,Translate/* translate */.T)({
        id: "theme.docs.sidebar.navAriaLabel",
        message: "Docs sidebar",
        description: "The ARIA label for the sidebar navigation"
      }),
      className: (0,clsx/* default */.A)(
        "menu thin-scrollbar",
        (Content_styles_module_default()).menu,
        showAnnouncementBar && (Content_styles_module_default()).menuWithAnnouncementBar,
        className
      )
    },
    /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("ul", { className: (0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarMenu, "menu__list") }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(theme_DocSidebarItems, { items: sidebar, activePath: path, level: 1 }))
  );
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-73dbe88646/package/lib/theme/DocSidebar/Desktop/styles.module.css
var Desktop_styles_module = __webpack_require__(5240);
var Desktop_styles_module_default = /*#__PURE__*/__webpack_require__.n(Desktop_styles_module);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-73dbe88646/package/lib/theme/DocSidebar/Desktop/index.js







function DocSidebarDesktop({ path, sidebar, onCollapse, isHidden }) {
  const {
    navbar: { hideOnScroll },
    docs: {
      sidebar: { hideable }
    }
  } = (0,useThemeConfig/* useThemeConfig */.p)();
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    "div",
    {
      className: (0,clsx/* default */.A)(
        (Desktop_styles_module_default()).sidebar,
        hideOnScroll && (Desktop_styles_module_default()).sidebarWithHideableNavbar,
        isHidden && (Desktop_styles_module_default()).sidebarHidden
      )
    },
    hideOnScroll && /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(Logo/* default */.A, { tabIndex: -1, className: (Desktop_styles_module_default()).sidebarLogo }),
    /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(DocSidebarDesktopContent, { path, sidebar }),
    hideable && /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(CollapseButton, { onClick: onCollapse })
  );
}
/* harmony default export */ const Desktop = (react_npm_18_3_1_af38f3c1ae_package.memo(DocSidebarDesktop));

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-2b128264f6/package/lib/contexts/navbarSecondaryMenu/content.js
var content = __webpack_require__(1595);
// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-common-virtual-2b128264f6/package/lib/contexts/navbarMobileSidebar.js
var navbarMobileSidebar = __webpack_require__(3058);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-73dbe88646/package/lib/theme/DocSidebar/Mobile/index.js





const DocSidebarMobileSecondaryMenu = ({ sidebar, path }) => {
  const mobileSidebar = (0,navbarMobileSidebar/* useNavbarMobileSidebar */.M)();
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("ul", { className: (0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarMenu, "menu__list") }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    theme_DocSidebarItems,
    {
      items: sidebar,
      activePath: path,
      onItemClick: (item) => {
        if (item.type === "category" && item.href) {
          mobileSidebar.toggle();
        }
        if (item.type === "link") {
          mobileSidebar.toggle();
        }
      },
      level: 1
    }
  ));
};
function DocSidebarMobile(props) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    content/* NavbarSecondaryMenuFiller */.GX,
    {
      component: DocSidebarMobileSecondaryMenu,
      props
    }
  );
}
/* harmony default export */ const Mobile = (react_npm_18_3_1_af38f3c1ae_package.memo(DocSidebarMobile));

;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-73dbe88646/package/lib/theme/DocSidebar/index.js




function DocSidebar(props) {
  const windowSize = (0,useWindowSize/* useWindowSize */.l)();
  const shouldRenderSidebarDesktop = windowSize === "desktop" || windowSize === "ssr";
  const shouldRenderSidebarMobile = windowSize === "mobile";
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(react_npm_18_3_1_af38f3c1ae_package.Fragment, null, shouldRenderSidebarDesktop && /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(Desktop, { ...props }), shouldRenderSidebarMobile && /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(Mobile, { ...props }));
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-73dbe88646/package/lib/theme/DocRoot/Layout/Sidebar/ExpandButton/styles.module.css
var ExpandButton_styles_module = __webpack_require__(5876);
var ExpandButton_styles_module_default = /*#__PURE__*/__webpack_require__.n(ExpandButton_styles_module);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-73dbe88646/package/lib/theme/DocRoot/Layout/Sidebar/ExpandButton/index.js




function DocRootLayoutSidebarExpandButton({ toggleSidebar }) {
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    "div",
    {
      className: (ExpandButton_styles_module_default()).expandButton,
      title: (0,Translate/* translate */.T)({
        id: "theme.docs.sidebar.expandButtonTitle",
        message: "Expand sidebar",
        description: "The ARIA label and title attribute for expand button of doc sidebar"
      }),
      "aria-label": (0,Translate/* translate */.T)({
        id: "theme.docs.sidebar.expandButtonAriaLabel",
        message: "Expand sidebar",
        description: "The ARIA label and title attribute for expand button of doc sidebar"
      }),
      tabIndex: 0,
      role: "button",
      onKeyDown: toggleSidebar,
      onClick: toggleSidebar
    },
    /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(IconArrow, { className: (ExpandButton_styles_module_default()).expandButtonIcon })
  );
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-73dbe88646/package/lib/theme/DocRoot/Layout/Sidebar/styles.module.css
var Sidebar_styles_module = __webpack_require__(5381);
var Sidebar_styles_module_default = /*#__PURE__*/__webpack_require__.n(Sidebar_styles_module);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-73dbe88646/package/lib/theme/DocRoot/Layout/Sidebar/index.js








function ResetOnSidebarChange({ children }) {
  var _a;
  const sidebar = (0,docsSidebar/* useDocsSidebar */.t)();
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(react_npm_18_3_1_af38f3c1ae_package.Fragment, { key: (_a = sidebar == null ? void 0 : sidebar.name) != null ? _a : "noSidebar" }, children);
}
function DocRootLayoutSidebar({
  sidebar,
  hiddenSidebarContainer,
  setHiddenSidebarContainer
}) {
  const { pathname } = (0,react_router/* useLocation */.zy)();
  const [hiddenSidebar, setHiddenSidebar] = (0,react_npm_18_3_1_af38f3c1ae_package.useState)(false);
  const toggleSidebar = (0,react_npm_18_3_1_af38f3c1ae_package.useCallback)(() => {
    if (hiddenSidebar) {
      setHiddenSidebar(false);
    }
    if (!hiddenSidebar && (0,accessibilityUtils/* prefersReducedMotion */.O)()) {
      setHiddenSidebar(true);
    }
    setHiddenSidebarContainer((value) => !value);
  }, [setHiddenSidebarContainer, hiddenSidebar]);
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    "aside",
    {
      className: (0,clsx/* default */.A)(
        ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarContainer,
        (Sidebar_styles_module_default()).docSidebarContainer,
        hiddenSidebarContainer && (Sidebar_styles_module_default()).docSidebarContainerHidden
      ),
      onTransitionEnd: (e) => {
        if (!e.currentTarget.classList.contains((Sidebar_styles_module_default()).docSidebarContainer)) {
          return;
        }
        if (hiddenSidebarContainer) {
          setHiddenSidebar(true);
        }
      }
    },
    /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(ResetOnSidebarChange, null, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
      "div",
      {
        className: (0,clsx/* default */.A)(
          (Sidebar_styles_module_default()).sidebarViewport,
          hiddenSidebar && (Sidebar_styles_module_default()).sidebarViewportHidden
        )
      },
      /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
        DocSidebar,
        {
          sidebar,
          path: pathname,
          onCollapse: toggleSidebar,
          isHidden: hiddenSidebar
        }
      ),
      hiddenSidebar && /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(DocRootLayoutSidebarExpandButton, { toggleSidebar })
    ))
  );
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-73dbe88646/package/lib/theme/DocRoot/Layout/Main/styles.module.css
var Main_styles_module = __webpack_require__(8652);
var Main_styles_module_default = /*#__PURE__*/__webpack_require__.n(Main_styles_module);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-73dbe88646/package/lib/theme/DocRoot/Layout/Main/index.js




function DocRootLayoutMain({ hiddenSidebarContainer, children }) {
  const sidebar = (0,docsSidebar/* useDocsSidebar */.t)();
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    "main",
    {
      className: (0,clsx/* default */.A)(
        (Main_styles_module_default()).docMainContainer,
        (hiddenSidebarContainer || !sidebar) && (Main_styles_module_default()).docMainContainerEnhanced
      )
    },
    /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
      "div",
      {
        className: (0,clsx/* default */.A)(
          "container padding-top--md padding-bottom--lg",
          (Main_styles_module_default()).docItemWrapper,
          hiddenSidebarContainer && (Main_styles_module_default()).docItemWrapperEnhanced
        )
      },
      children
    )
  );
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-73dbe88646/package/lib/theme/DocRoot/Layout/styles.module.css
var Layout_styles_module = __webpack_require__(3344);
var Layout_styles_module_default = /*#__PURE__*/__webpack_require__.n(Layout_styles_module);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-73dbe88646/package/lib/theme/DocRoot/Layout/index.js






function DocRootLayout({ children }) {
  const sidebar = (0,docsSidebar/* useDocsSidebar */.t)();
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = (0,react_npm_18_3_1_af38f3c1ae_package.useState)(false);
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("div", { className: (Layout_styles_module_default()).docsWrapper }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(BackToTopButton, null), /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement("div", { className: (Layout_styles_module_default()).docRoot }, sidebar && /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(
    DocRootLayoutSidebar,
    {
      sidebar: sidebar.items,
      hiddenSidebarContainer,
      setHiddenSidebarContainer
    }
  ), /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(DocRootLayoutMain, { hiddenSidebarContainer }, children)));
}

// EXTERNAL MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-73dbe88646/package/lib/theme/NotFound/Content/index.js
var Content = __webpack_require__(9412);
;// CONCATENATED MODULE: ./node_modules/.store/@docusaurus-theme-classic-virtual-73dbe88646/package/lib/theme/DocRoot/index.js






function DocRoot(props) {
  const currentDocRouteMetadata = (0,docsUtils/* useDocRootMetadata */.B5)(props);
  if (!currentDocRouteMetadata) {
    return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(Content/* default */.A, null);
  }
  const { docElement, sidebarName, sidebarItems } = currentDocRouteMetadata;
  return /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(metadataUtils/* HtmlClassNameProvider */.e3, { className: (0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.page.docsDocPage) }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(docsSidebar/* DocsSidebarProvider */.V, { name: sidebarName, items: sidebarItems }, /* @__PURE__ */ react_npm_18_3_1_af38f3c1ae_package.createElement(DocRootLayout, null, docElement)));
}


/***/ }),

/***/ 9412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ NotFoundContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(799);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7340);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6722);
/* harmony import */ var _theme_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5197);




function NotFoundContent({ className }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", { className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)("container margin-vert--xl", className) }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "row" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col col--6 col--offset-3" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Heading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, { as: "h1", className: "hero__title" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    {
      id: "theme.NotFound.title",
      description: "The title of the 404 page"
    },
    "Page Not Found"
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    {
      id: "theme.NotFound.p1",
      description: "The first paragraph of the 404 page"
    },
    "We could not find what you were looking for."
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    {
      id: "theme.NotFound.p2",
      description: "The 2nd paragraph of the 404 page"
    },
    "Please contact the owner of the site that linked you to the original URL and let them know their link is broken."
  )))));
}


/***/ })

};
;