import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import vsDark from "prism-react-renderer/themes/vsDark";
import isCI from "is-ci";
import navbar from "./config/navbar.config";
import footer from "./config/footer.config";
import { env } from "process";
import { Config } from "@docusaurus/types";
import { Options } from "@docusaurus/plugin-content-docs";

const preview = env.VERCEL_ENV === "preview";

const url = (preview && `https://${env.VERCEL_URL}`) || "https://docs.vlssu.com";

const docsCommon: Options = {
  breadcrumbs: true,
  editCurrentVersion: true,
  remarkPlugins: [remarkA11yEmoji],
  showLastUpdateAuthor: true,
  showLastUpdateTime: true,
};

const config: Config = {
  title: "VLssu Documentation",
  tagline:
    "VLssu内的项目文档。",
  url: url,
  baseUrl: "/",
  onBrokenLinks: isCI ? "throw" : "warn",
  onBrokenMarkdownLinks: isCI ? "throw" : "warn",
  onDuplicateRoutes: isCI ? "throw" : "warn",
  favicon: "img/favicon.ico",
  trailingSlash: false,
  noIndex: preview,
  baseUrlIssueBanner: false,
  clientModules: [
    require.resolve("../src/css/custom.css"),
    require.resolve("@fontsource/jetbrains-mono/index.css"),
  ],

  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve("esbuild-loader"),
      options: {
        loader: "tsx",
        target: isServer ? "node12" : "es2017",
      },
    }),
  },

  headTags: [
    {
      tagName: "script",
        attributes: {
          type: "application/ld+json",
        },
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          url,
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${url}/search?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
          },
        }),
    },
  ],
  
  themes: ["@docusaurus/theme-classic", "@docusaurus/theme-search-algolia"],

  plugins: [
    [
      "content-docs",
      {
        ...docsCommon,
        id: "vlssuskin",
        path: "docs/vlssuskin",
        routeBasePath: "vlssuskin",
        sidebarPath: require.resolve("./config/sidebar.vlssuskin"),
        editUrl: ({ docPath }) => `https://github.com/vlssu/docs.vlssu.com/blob/master/docs/vlssuskin/${docPath}`,
      },
    ],
    [
      "content-docs",
      {
        ...docsCommon,
        id: "mcserver",
        path: "docs/mcserver",
        routeBasePath: "mcserver",
        sidebarPath: require.resolve("./config/sidebar.mcserver"),
        editUrl: ({ docPath }) => `https://github.com/vlssu/docs.vlssu.com/blob/master/docs/mcserver/${docPath}`,
      },
    ],
    [
      "content-pages",
      {
        remarkPlugins: [remarkA11yEmoji],
      },
    ],
    [
      "pwa",
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
    [
      "@docusaurus/plugin-sitemap",
      {
        ignorePatterns: ["**/cat/**"],
      },
    ],
    "@docusaurus/plugin-debug",
  ],

  themeConfig: {
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
    navbar: navbar,
    footer: footer,
    docs: {
      sidebar: {
        hideable: true,
      },
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
      theme: vsDark,
    },
    algolia: {
      appId: "N7DOAH86MC",
      apiKey: "3cdbb34f9d17bdcf072f295e7665bdd0",
      indexName: "vlssu",
      contextualSearch: true,
    },
  },
};

export = config;
