"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3877],{522:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(1949);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,g=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>k,frontMatter:()=>m,metadata:()=>g,toc:()=>v});var r=n(522),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))l.call(t,n)&&p(e,n,t[n]);return e};const m={sidebar_position:2},u="HMCL\u542f\u52a8\u5668",g={unversionedId:"tutorials/configuring-client/hmcl",id:"tutorials/configuring-client/hmcl",title:"HMCL\u542f\u52a8\u5668",description:"\u4ee5\u4e0b\u4ee5 HMCL 3 \u4e3a\u4f8b\uff0c\u6f14\u793a\u5728 Minecraft \u5ba2\u6237\u7aef\u4e2d\u4f7f\u7528 Yggdrasil",source:"@site/docs/mcserver/tutorials/configuring-client/hmcl.md",sourceDirName:"tutorials/configuring-client",slug:"/tutorials/configuring-client/hmcl",permalink:"/mcserver/tutorials/configuring-client/hmcl",draft:!1,editUrl:"https://github.com/vlssu/docs.vlssu.com/blob/master/docs/mcserver/tutorials/configuring-client/hmcl.md",tags:[],version:"current",lastUpdatedBy:"\u98d2\u723d\u5e08\u53d4",lastUpdatedAt:1658853008,formattedLastUpdatedAt:"2022/7/26",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"primary",previous:{title:"\u6b63\u7248\u542f\u52a8\u5668",permalink:"/mcserver/tutorials/configuring-client/minecraft-launcher"},next:{title:"PCL\u542f\u52a8\u5668",permalink:"/mcserver/tutorials/configuring-client/pcl"}},f={},v=[{value:"\u8bbe\u7f6e\u5b8c\u6210\u5566\uff01\u4f60\u53ef\u4ee5\u542f\u52a8\u6e38\u620f\u4e86",id:"\u8bbe\u7f6e\u5b8c\u6210\u5566\u4f60\u53ef\u4ee5\u542f\u52a8\u6e38\u620f\u4e86",level:3}],h={toc:v};function k(e){var t,a=e,{components:p}=a,m=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n})(a,["components"]);return(0,r.kt)("wrapper",(t=d(d({},h),m),i(t,o({components:p,mdxType:"MDXLayout"}))),(0,r.kt)("h1",d({},{id:"hmcl\u542f\u52a8\u5668"}),"HMCL\u542f\u52a8\u5668"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u4ee5 ",(0,r.kt)("a",d({parentName:"p"},{href:"https://ci.huangyuhui.net/job/HMCL/"}),"HMCL 3")," \u4e3a\u4f8b\uff0c\u6f14\u793a\u5728 Minecraft \u5ba2\u6237\u7aef\u4e2d\u4f7f\u7528 Yggdrasil"),(0,r.kt)("div",d({},{className:"admonition admonition-tip alert alert--success"}),(0,r.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,r.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,r.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"\u6253\u5f00 HMCL 3.5 \u7684\u300c\u65b0\u5efa\u6e38\u620f\u8d26\u6237\u300d\u754c\u9762\u3002"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An image",src:n(3213).Z,width:"818",height:"508"})),(0,r.kt)("div",d({},{className:"admonition admonition-tip alert alert--success"}),(0,r.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,r.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,r.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"\u70b9\u51fb\u5de6\u4e0b\u89d2\u7684\u300c\u6dfb\u52a0\u8ba4\u8bc1\u670d\u52a1\u5668\u300d\uff0c\u8f93\u5165 VlssuSkin \u7684 Yggdrasil API \u5730\u5740\uff0c\u70b9\u51fb\u300c\u4e0b\u4e00\u6b65\u300d\uff0c\u7b49\u5f85\u8bc6\u522b\u51fa VlssuSkin \u7684 Yggdrasil \u540e\u70b9\u51fb\u300c\u5b8c\u6210\u300d\u3002 \u5982\u679c\u4f60\u66fe\u7ecf\u6dfb\u52a0\u8fc7 VlssuSkin \u7684 Yggdrasil\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5728\u300c\u6dfb\u52a0\u8d26\u6237\u300d\u83dc\u5355\u4e2d\u76f4\u63a5\u9009\u62e9 VlssuSkin\u3002"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",d({parentName:"pre"},{}),"https://skin.vlssu.com/api/yggdrasil\n")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An image",src:n(1153).Z,width:"818",height:"508"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An image",src:n(5997).Z,width:"818",height:"508"})),(0,r.kt)("div",d({},{className:"admonition admonition-tip alert alert--success"}),(0,r.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,r.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,r.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"\u5728\u300c\u6dfb\u52a0\u8d26\u6237\u300d\u83dc\u5355\u4e2d\u9009\u62e9 VlssuSkin\uff0c\u586b\u5199\u4f60\u7684\u90ae\u7bb1\u548c\u5bc6\u7801\u3002\u300c\u7528\u6237\u540d\u300d\u5373\u4e3a\u4f60\u5728 VlssuSkin \u7684\u8d26\u53f7\u7684\u90ae\u7bb1\u3002 \u5982\u679c\u4f60\u53ea\u6dfb\u52a0\u4e86\u4e00\u4e2a\u8ba4\u8bc1\u670d\u52a1\u5668\uff0c\u90a3\u4e48 HMCL 3.5 \u4f1a\u9ed8\u8ba4\u9009\u4e2d\u90a3\u4e2a\u552f\u4e00\u7684\u8ba4\u8bc1\u670d\u52a1\u5668\u3002"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An image",src:n(7858).Z,width:"818",height:"508"})),(0,r.kt)("h3",d({},{id:"\u8bbe\u7f6e\u5b8c\u6210\u5566\u4f60\u53ef\u4ee5\u542f\u52a8\u6e38\u620f\u4e86"}),"\u8bbe\u7f6e\u5b8c\u6210\u5566\uff01\u4f60\u53ef\u4ee5\u542f\u52a8\u6e38\u620f\u4e86"))}k.isMDXComponent=!0},3213:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/HMCLR1-c722ad220a77f348216cd5d7ebbf0415.png"},1153:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/HMCLR2-ddd12064144f7ae4ce9ffe786fba941a.png"},5997:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/HMCLR3-d8926ff1741dfbe738d6d02df3fd3e6c.png"},7858:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/HMCLR4-629873f50d064829b59f930473ecb05d.png"}}]);