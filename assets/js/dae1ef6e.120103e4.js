"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7149],{522:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>f});var n=r(1949);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var l=n.createContext({}),p=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},s=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,o=t.originalType,l=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),u=p(r),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,a(a({ref:e},s),{},{components:r})):n.createElement(f,a({ref:e},s))}));function f(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=r.length,a=new Array(o);a[0]=m;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c[u]="string"==typeof t?t:i,a[1]=c;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9030:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>g,contentTitle:()=>m,default:()=>k,frontMatter:()=>d,metadata:()=>f,toc:()=>b});var n=r(522),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(t,e,r)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,u=(t,e)=>{for(var r in e||(e={}))l.call(e,r)&&s(t,r,e[r]);if(c)for(var r of c(e))p.call(e,r)&&s(t,r,e[r]);return t};const d={sidebar_position:3},m="PCL\u542f\u52a8\u5668",f={unversionedId:"tutorials/configuring-client/pcl",id:"tutorials/configuring-client/pcl",title:"PCL\u542f\u52a8\u5668",description:"\u4ee5\u4e0b\u4ee5 PCL 2 \u4e3a\u4f8b\uff0c\u6f14\u793a\u5728 Minecraft \u5ba2\u6237\u7aef\u4e2d\u4f7f\u7528 Yggdrasil",source:"@site/docs/mcserver/tutorials/configuring-client/pcl.md",sourceDirName:"tutorials/configuring-client",slug:"/tutorials/configuring-client/pcl",permalink:"/mcserver/tutorials/configuring-client/pcl",draft:!1,editUrl:"https://github.com/vlssu/docs.vlssu.com/blob/master/docs/mcserver/tutorials/configuring-client/pcl.md",tags:[],version:"current",lastUpdatedBy:"\u98d2\u723d\u5e08\u53d4",lastUpdatedAt:1675164601,formattedLastUpdatedAt:"2023\u5e741\u670831\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"primary",previous:{title:"HMCL\u542f\u52a8\u5668",permalink:"/mcserver/tutorials/configuring-client/hmcl"},next:{title:"PE/BE/\u57fa\u5ca9\u7248",permalink:"/mcserver/tutorials/configuring-client/pe"}},g={},b=[{value:"\u8bbe\u7f6e\u5b8c\u6210\u5566\uff01\u4f60\u53ef\u4ee5\u76f4\u63a5\u70b9\u300c\u542f\u52a8\u6e38\u620f\u300d\u4e86\uff0c\u8d26\u6237\u4f1a\u76f4\u63a5\u767b\u5f55",id:"\u8bbe\u7f6e\u5b8c\u6210\u5566\u4f60\u53ef\u4ee5\u76f4\u63a5\u70b9\u542f\u52a8\u6e38\u620f\u4e86\u8d26\u6237\u4f1a\u76f4\u63a5\u767b\u5f55",level:3}],y={toc:b};function k(t){var e,i=t,{components:s}=i,d=((t,e)=>{var r={};for(var n in t)l.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&c)for(var n of c(t))e.indexOf(n)<0&&p.call(t,n)&&(r[n]=t[n]);return r})(i,["components"]);return(0,n.kt)("wrapper",(e=u(u({},y),d),o(e,a({components:s,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"pcl\u542f\u52a8\u5668"}),"PCL\u542f\u52a8\u5668"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u4ee5 ",(0,n.kt)("a",u({parentName:"p"},{href:"https://afdian.net/@LTCat"}),"PCL 2")," \u4e3a\u4f8b\uff0c\u6f14\u793a\u5728 Minecraft \u5ba2\u6237\u7aef\u4e2d\u4f7f\u7528 Yggdrasil"),(0,n.kt)("admonition",u({},{title:"\u5c0f\u5c0f\u7684\u5efa\u8bae",type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"\u8be5\u542f\u52a8\u5668\u53ef\u80fd\u5b58\u5728\u53cd\u4eba\u7c7b\u8bbe\u8ba1\u6216\u5176\u4ed6\u4e00\u4e9b\u539f\u56e0\uff0c\u5728\u6b64\u6211\u4eec\u4e0d\u592a\u63a8\u8350\u4f7f\u7528\u6b64\u542f\u52a8\u5668\uff0c\u5efa\u8bae\u4f7f\u7528\u5176\u4ed6\u542f\u52a8\u5668\u3002",(0,n.kt)("strong",{parentName:"p"},"\u5982\u679c\u60a8\u89c9\u5f97\u6b64\u63d0\u793a\u4e0d\u5f53\uff0c\u8bf7\u65e0\u89c6\u6b64\u63d0\u793a\u3002"))),(0,n.kt)("admonition",u({},{type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"\u6253\u5f00 PCL 2 \u7684\u300c\u7248\u672c\u8bbe\u7f6e\u300d\u754c\u9762\u3002\u5982\u679c\u8fd9\u662f\u4f60\u7b2c\u4e00\u6b21\u6253\u5f00 PCL 2\uff0c\u8bf7\u5148\u4e0b\u8f7d\u4f60\u60f3\u73a9\u7684\u7248\u672c(\u6216\u670d\u52a1\u5668\u6240\u9700\u7248\u672c)")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"An image",src:r(3672).Z,width:"878",height:"490"})),(0,n.kt)("admonition",u({},{type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"\u70b9\u51fb\u300c\u8bbe\u7f6e\u300d\u5f80\u4e0b\u62c9\u52a8\u4f1a\u770b\u89c1\u300c\u670d\u52a1\u5668\u9009\u9879\u300d\uff0c\u5728\u300c\u767b\u9646\u65b9\u5f0f\u300d\u4e00\u680f\u9009\u62e9\u300c\u7b2c\u4e09\u65b9\u767b\u5f55\uff1aAuthlib-lnjector\u300d\uff0c\u4e0b\u9762\u4f1a\u5f39\u51fa\u300c\u8ba4\u8bc1\u670d\u52a1\u5668\u300d\u7b49\u4e00\u7cfb\u5217\u9009\u9879\u3002\u8f93\u5165 VlssuSkin \u7684 Yggdrasil API \u5730\u5740\u7b49\u4fe1\u606f")),(0,n.kt)("admonition",u({},{type:"caution"}),(0,n.kt)("p",{parentName:"admonition"},"\u7531\u4e8ePCL2\u4f5c\u8005\u8bbe\u8ba1\u539f\u56e0\uff0c\u6bcf\u73a9\u4e00\u4e2a\u65b0\u7248\u672c\u90fd\u9700\u8981\u5982\u6b64\u8bbe\u7f6e")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"\u767b\u9646\u65b9\u5f0f    \u7b2c\u4e09\u65b9\u767b\u5f55\uff1aAuthlib-lnjector\n\u8ba4\u8bc1\u670d\u52a1\u5668  https://skin.vlssu.com/api/yggdrasil\n\u6ce8\u518c\u94fe\u63a5    https://skin.vlssu.com/auth/register\n\u670d\u52a1\u5668\u540d\u79f0  VlssuSkin\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"An image",src:r(6221).Z,width:"878",height:"886"})),(0,n.kt)("admonition",u({},{type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"\u5728\u65b0\u7248 PCL \u8fd9\u91cc\u5de6\u4e0b\u89d2\u4f1a\u6709\u300c\u8bbe\u7f6e\u4e3a Little Skin\u300d\uff0c",(0,n.kt)("strong",{parentName:"p"},"\u8bf7\u4e0d\u8981\u70b9\u51fb\uff0c\u76f4\u63a5\u5de6\u4e0a\u89d2\u70b9\u8fd4\u56de\u5373\u53ef"),"\u3002")),(0,n.kt)("admonition",u({},{type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"\u8bbe\u7f6e\u597d\u540e\u4e3b\u9875\u4e0d\u51fa\u610f\u5916\u5df2\u7ecf\u81ea\u52a8\u53d8\u6210VlssuSkin\u8bbe\u7f6e\u754c\u9762\u4e86\uff0c\u5728\u4e0b\u65b9\u586b\u5199\u4f60\u7684\u90ae\u7bb1\u548c\u5bc6\u7801\u3002\u300c\u8d26\u6237\u300d\u5373\u4e3a\u4f60\u5728 VlssuSkin \u7684\u8d26\u53f7\u7684\u90ae\u7bb1\u3002"),(0,n.kt)("p",{parentName:"admonition"},"\u56e0PCL2\u4f5c\u8005\u8bbe\u8ba1\u539f\u56e0\uff0c\u8ba4\u8bc1\u670d\u52a1\u5668\u53ea\u80fd\u8bbe\u7f6e\u4e00\u4e2a\uff0c\u5728\u4e0d\u66f4\u6539(\u6ca1\u6709\u8f93\u9519)\u7684\u60c5\u51b5\u4e0b\uff0c\u90a3 VlssuSkin \u5c31\u662f\u542f\u52a8\u5668\u552f\u4e00\u7684\u8ba4\u8bc1\u670d\u52a1\u5668")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"An image",src:r(687).Z,width:"878",height:"491"})),(0,n.kt)("h3",u({},{id:"\u8bbe\u7f6e\u5b8c\u6210\u5566\u4f60\u53ef\u4ee5\u76f4\u63a5\u70b9\u542f\u52a8\u6e38\u620f\u4e86\u8d26\u6237\u4f1a\u76f4\u63a5\u767b\u5f55"}),"\u8bbe\u7f6e\u5b8c\u6210\u5566\uff01\u4f60\u53ef\u4ee5\u76f4\u63a5\u70b9\u300c\u542f\u52a8\u6e38\u620f\u300d\u4e86\uff0c\u8d26\u6237\u4f1a\u76f4\u63a5\u767b\u5f55"))}k.isMDXComponent=!0},3672:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/pcl1-f35772e8e5bd9cef202aef4fb5ee9933.jpg"},6221:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/pcl2-1cb95f18a615d96d5add06e0436ef962.jpg"},687:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/pcl3-ba5dc58d59290d04b5d3c424af49be1d.jpg"}}]);