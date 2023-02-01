"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3877],{522:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(1949);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9413:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>h,frontMatter:()=>d,metadata:()=>f,toc:()=>y});var n=r(522),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(c)for(var r of c(t))s.call(t,r)&&p(e,r,t[r]);return e};const d={sidebar_position:2},m="HMCL\u542f\u52a8\u5668",f={unversionedId:"tutorials/configuring-client/hmcl",id:"tutorials/configuring-client/hmcl",title:"HMCL\u542f\u52a8\u5668",description:"\u4ee5\u4e0b\u4ee5 HMCL 3 \u4e3a\u4f8b\uff0c\u6f14\u793a\u5728 Minecraft \u5ba2\u6237\u7aef\u4e2d\u4f7f\u7528 Yggdrasil",source:"@site/docs/mcserver/tutorials/configuring-client/hmcl.md",sourceDirName:"tutorials/configuring-client",slug:"/tutorials/configuring-client/hmcl",permalink:"/mcserver/tutorials/configuring-client/hmcl",draft:!1,editUrl:"https://github.com/vlssu/docs.vlssu.com/blob/master/docs/mcserver/tutorials/configuring-client/hmcl.md",tags:[],version:"current",lastUpdatedBy:"\u98d2\u723d\u5e08\u53d4",lastUpdatedAt:1675293030,formattedLastUpdatedAt:"2023\u5e742\u67081\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"primary",previous:{title:"\u6b63\u7248\u542f\u52a8\u5668",permalink:"/mcserver/tutorials/configuring-client/minecraft-launcher"},next:{title:"PCL\u542f\u52a8\u5668",permalink:"/mcserver/tutorials/configuring-client/pcl"}},g={},y=[{value:"\u8bbe\u7f6e\u5b8c\u6210\u5566\uff01\u4f60\u53ef\u4ee5\u542f\u52a8\u6e38\u620f\u4e86",id:"\u8bbe\u7f6e\u5b8c\u6210\u5566\u4f60\u53ef\u4ee5\u542f\u52a8\u6e38\u620f\u4e86",level:3}],b={toc:y};function h(e){var t,i=e,{components:p}=i,d=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(i,["components"]);return(0,n.kt)("wrapper",(t=u(u({},b),d),a(t,o({components:p,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"hmcl\u542f\u52a8\u5668"}),"HMCL\u542f\u52a8\u5668"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u4ee5 ",(0,n.kt)("a",u({parentName:"p"},{href:"https://ci.huangyuhui.net/job/HMCL/"}),"HMCL 3")," \u4e3a\u4f8b\uff0c\u6f14\u793a\u5728 Minecraft \u5ba2\u6237\u7aef\u4e2d\u4f7f\u7528 Yggdrasil"),(0,n.kt)("admonition",u({},{type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"\u6253\u5f00 HMCL 3.5 \u7684\u300c\u65b0\u5efa\u6e38\u620f\u8d26\u6237\u300d\u754c\u9762\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"An image",src:r(371).Z,width:"818",height:"508"})),(0,n.kt)("admonition",u({},{type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"\u70b9\u51fb\u5de6\u4e0b\u89d2\u7684\u300c\u6dfb\u52a0\u8ba4\u8bc1\u670d\u52a1\u5668\u300d\uff0c\u8f93\u5165 VlssuSkin \u7684 Yggdrasil API \u5730\u5740\uff0c\u70b9\u51fb\u300c\u4e0b\u4e00\u6b65\u300d\uff0c\u7b49\u5f85\u8bc6\u522b\u51fa VlssuSkin \u7684 Yggdrasil \u540e\u70b9\u51fb\u300c\u5b8c\u6210\u300d\u3002 \u5982\u679c\u4f60\u66fe\u7ecf\u6dfb\u52a0\u8fc7 VlssuSkin \u7684 Yggdrasil\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5728\u300c\u6dfb\u52a0\u8d26\u6237\u300d\u83dc\u5355\u4e2d\u76f4\u63a5\u9009\u62e9 VlssuSkin\u3002"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{}),"https://skin.vlssu.com/api/yggdrasil\n"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"An image",src:r(9099).Z,width:"818",height:"508"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"An image",src:r(9588).Z,width:"818",height:"508"})),(0,n.kt)("admonition",u({},{type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"\u5728\u300c\u6dfb\u52a0\u8d26\u6237\u300d\u83dc\u5355\u4e2d\u9009\u62e9 VlssuSkin\uff0c\u586b\u5199\u4f60\u7684\u90ae\u7bb1\u548c\u5bc6\u7801\u3002\u300c\u7528\u6237\u540d\u300d\u5373\u4e3a\u4f60\u5728 VlssuSkin \u7684\u8d26\u53f7\u7684\u90ae\u7bb1\u3002 \u5982\u679c\u4f60\u53ea\u6dfb\u52a0\u4e86\u4e00\u4e2a\u8ba4\u8bc1\u670d\u52a1\u5668\uff0c\u90a3\u4e48 HMCL 3.5 \u4f1a\u9ed8\u8ba4\u9009\u4e2d\u90a3\u4e2a\u552f\u4e00\u7684\u8ba4\u8bc1\u670d\u52a1\u5668\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"An image",src:r(4147).Z,width:"818",height:"508"})),(0,n.kt)("h3",u({},{id:"\u8bbe\u7f6e\u5b8c\u6210\u5566\u4f60\u53ef\u4ee5\u542f\u52a8\u6e38\u620f\u4e86"}),"\u8bbe\u7f6e\u5b8c\u6210\u5566\uff01\u4f60\u53ef\u4ee5\u542f\u52a8\u6e38\u620f\u4e86"))}h.isMDXComponent=!0},371:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/HMCLR1-e9a25d0a64c102ee37853c3d384a7aa5.png"},9099:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/HMCLR2-bb1a82cd86966103acf9978bdd64c528.png"},9588:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/HMCLR3-e214c6f8ec425c506d4f6d058a622bdd.png"},4147:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/HMCLR4-64c01436471d2293c0d907f202a51045.png"}}]);