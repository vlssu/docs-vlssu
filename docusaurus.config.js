// @ts-check

const isCI = process.env.CI === "true";
const isPreview = process.env.DEPLOY_PREVIEW === "true";

/** @type {import("@docusaurus/types").Config} */
const base = {
  title: "VLssu Documentation",
  tagline: "VLssu内的项目文档。",
  customFields: {
    description:
      "VLssu旗下所有项目的文档.",
  },
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn'],
  },
  url: isPreview ? process.env.PREVIEW_URL : "https://docs.vlssu.com",
  baseUrl: isPreview ? process.env.PREVIEW_BASE_URL : "/",
  onBrokenLinks: isCI ? "throw" : "warn",
  onBrokenMarkdownLinks: isCI ? "throw" : "warn",
  onDuplicateRoutes: isCI ? "throw" : "error",
  favicon: "img/favicon.ico",
  organizationName: "VLssu",
  projectName: "docs",
  trailingSlash: false,
  noIndex: isPreview,
  
  presets: [
    [
      "classic",
      /** @type {import("@docusaurus/preset-classic").Options} */
      ({
        debug: !isCI || isPreview,
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
        docs: {
          editUrl: ({ docPath }) => `https://github.com/vlssu/docs.vlssu.com/blob/master/docs/${docPath}`,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarCollapsible: true,
          remarkPlugins: [require("@fec/remark-a11y-emoji")],
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        offlineModeActivationStrategies: ["appInstalled", "standalone", "queryString"],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "img/vlssu.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(0, 78, 233)",
          },
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      image: "img/og-image.png",
      metadata: [
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "og:type",
          content: "website",
        },
        {
          name: "og:image:alt",
          content: "VLssu Logo",
        },
      ],
      navbar: {
        title: "VLssu Docs",
        logo: {
          alt: "VLssu Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            to: "VLssuSkin",
            label: "VLssuSkin",
            position: "left",
          },
          /**{
            to: "https://papermc.io/downloads",
            label: "Downloads",
            position: "right",
          },*/
          {
            href: "https://jq.qq.com/?_wv=1027&k=5mq4JvN",
            className: "header-icon-link header-qq-link",
            position: "right",
          },
          {
            href: "https://discord.gg/Cs542v28Xt",
            className: "header-icon-link header-discord-link",
            position: "right",
          },
          {
            href: "https://github.com/vlssu/docs.vlssu.com",
            className: "header-icon-link header-github-link",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        /*links: [
          {
            title: "社区",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/Cs542v28Xt",
              },
              {
                label: "Forums",
                href: "https://bbs.vlssu.cn/",
              },
              {
                label: "QQ",
                href: "https://jq.qq.com/?_wv=1027&k=5mq4JvN",
              },
            ],
          },
          {
            title: "其他",
            items: [
              {
                label: "VLssu公益服官网",
                href: "https://vlssu.cn",
              },
              {
                label: "GitHub",
                href: "https://github.com/vlssu",
              },
            ],
          },
        ],*/
        copyright: `Copyright © ${new Date().getFullYear()} VLssu, Inc. Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: [
          "batch",
          "bash",
          "git",
          "java",
          "javastacktrace",
          "kotlin",
          "groovy",
          "log",
          "toml",
          "properties",
        ],
        theme: require("prism-react-renderer/themes/vsDark"),
      },
      algolia: {
        appId: "N7DOAH86MC",
        apiKey: "3cdbb34f9d17bdcf072f295e7665bdd0",
        indexName: "vlssu",
      },
    }),

  themes: [
    // ... Your other themes.
    /*[
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        indexPages: true,
        indexBlog: false,
        docsRouteBasePath: "/",
        docsDir: "*",
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "zh"],
        // language: ["en", "zh"],
        // ```
        highlightSearchTermsOnTargetPage: true,
        translations:
        {
          "search_placeholder": "搜索",
          "see_all_results": "查看所有结果",
          "no_results": "没有结果.",
          "search_results_for": "搜索结果 \"{{ keyword }}\"",
          "search_the_documentation": "搜索文档",
          "count_documents_found": "找到了 {{ count }} 个文档",
          "count_documents_found_plural": "找到了 {{ count }} 个文件",
          "no_documents_were_found": "没有找到文件"
        }
      },
    ],*/
  ],
};

async function config() {
  return base;
}

module.exports = config;
