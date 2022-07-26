import { Navbar } from "@docusaurus/theme-common";

// don't specify style or hideOnScroll here, we want it to be dynamic
const navbar: Omit<Navbar, "style" | "hideOnScroll"> = {
  title: "VLssu Docs",
  logo: {
    src: "img/logo.svg",
    width: 130,
    height: 32,
    alt: "VLssu Docs",
  },
  items: [
    {
      to: "vlssuskin",
      label: "VlssuSkin",
      position: "left"
    },
    {
      to: "mcserver",
      label: "VLssu公益服",
      position: "left"
    },
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
};

export default navbar;
