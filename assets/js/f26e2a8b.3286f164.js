"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6121],{522:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(1949);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=i,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2490:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>d,default:()=>y,frontMatter:()=>f,metadata:()=>m,toc:()=>g});var n=r(522),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&s(e,r,t[r]);return e};const f={sidebar_position:4},d="PE/BE/\u57fa\u5ca9\u7248",m={unversionedId:"tutorials/configuring-client/pe",id:"tutorials/configuring-client/pe",title:"PE/BE/\u57fa\u5ca9\u7248",description:"\u8fd9\u91cc\u8bb2\u8ff0\u4e86\u57fa\u5ca9\u7248\u8be5\u5982\u4f55\u914d\u7f6e",source:"@site/docs/mcserver/tutorials/configuring-client/pe.md",sourceDirName:"tutorials/configuring-client",slug:"/tutorials/configuring-client/pe",permalink:"/mcserver/tutorials/configuring-client/pe",draft:!1,editUrl:"https://github.com/vlssu/docs.vlssu.com/blob/master/docs/mcserver/tutorials/configuring-client/pe.md",tags:[],version:"current",lastUpdatedBy:"\u98d2\u723d\u5e08\u53d4",lastUpdatedAt:1671946424,formattedLastUpdatedAt:"2022\u5e7412\u670825\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"primary",previous:{title:"PCL\u542f\u52a8\u5668",permalink:"/mcserver/tutorials/configuring-client/pcl"},next:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/mcserver/faq"}},v={},g=[{value:"\u9996\u5148\u8fdb\u5165QQ\u7fa4\u4e0b\u8f7d\u57fa\u5ca9\u7248",id:"\u9996\u5148\u8fdb\u5165qq\u7fa4\u4e0b\u8f7d\u57fa\u5ca9\u7248",level:2},{value:"\u6ce8\u518c\u76ae\u80a4\u7ad9\u8d26\u6237",id:"\u6ce8\u518c\u76ae\u80a4\u7ad9\u8d26\u6237",level:2},{value:"\u6dfb\u52a0\u670d\u52a1\u5668IP\u7b49\u4fe1\u606f",id:"\u6dfb\u52a0\u670d\u52a1\u5668ip\u7b49\u4fe1\u606f",level:2},{value:"\u6216\u624b\u52a8\u6dfb\u52a0IP\u4fe1\u606f",id:"\u6216\u624b\u52a8\u6dfb\u52a0ip\u4fe1\u606f",level:3},{value:"\u4f7f\u7528\u76ae\u80a4\u7ad9\u8d26\u6237\u767b\u5f55",id:"\u4f7f\u7528\u76ae\u80a4\u7ad9\u8d26\u6237\u767b\u5f55",level:2}],b={toc:g};function y(e){var t,i=e,{components:s}=i,f=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(i,["components"]);return(0,n.kt)("wrapper",(t=u(u({},b),f),o(t,a({components:s,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"pebe\u57fa\u5ca9\u7248"}),"PE/BE/\u57fa\u5ca9\u7248"),(0,n.kt)("p",null,"\u8fd9\u91cc\u8bb2\u8ff0\u4e86\u57fa\u5ca9\u7248\u8be5\u5982\u4f55\u914d\u7f6e"),(0,n.kt)("h2",u({},{id:"\u9996\u5148\u8fdb\u5165qq\u7fa4\u4e0b\u8f7d\u57fa\u5ca9\u7248"}),"\u9996\u5148\u8fdb\u5165QQ\u7fa4\u4e0b\u8f7d\u57fa\u5ca9\u7248"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"https://jq.qq.com/?_wv=1027&k=0anjDlw3"}),"QQ\u7fa4 - VLssu\u516c\u76ca\u670d")),(0,n.kt)("h2",u({},{id:"\u6ce8\u518c\u76ae\u80a4\u7ad9\u8d26\u6237"}),"\u6ce8\u518c\u76ae\u80a4\u7ad9\u8d26\u6237"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/mcserver/tutorials/reg-skin-station"}),"\u5982\u4f55\u6ce8\u518c\u76ae\u80a4\u7ad9")),(0,n.kt)("h2",u({},{id:"\u6dfb\u52a0\u670d\u52a1\u5668ip\u7b49\u4fe1\u606f"}),"\u6dfb\u52a0\u670d\u52a1\u5668IP\u7b49\u4fe1\u606f"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"minecraft://?addExternalServer=Vlssu%20Server%7Cmc.vlssu.cn:19132"}),"\u57fa\u5ca9\u7248\u8fdb\u670d\u76f4\u94fe")),(0,n.kt)("h3",u({},{id:"\u6216\u624b\u52a8\u6dfb\u52a0ip\u4fe1\u606f"}),"\u6216\u624b\u52a8\u6dfb\u52a0IP\u4fe1\u606f"),(0,n.kt)("admonition",u({},{type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"mc.vlssu.cn \u7aef\u53e3\u9ed8\u8ba4\u5373\u53ef\uff0819132\uff09")),(0,n.kt)("h2",u({},{id:"\u4f7f\u7528\u76ae\u80a4\u7ad9\u8d26\u6237\u767b\u5f55"}),"\u4f7f\u7528\u76ae\u80a4\u7ad9\u8d26\u6237\u767b\u5f55"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u70b9\u51fb\u3010\u4f7f\u7528Mojang\u8d26\u6237\u767b\u5f55\u3011",src:r(1199).Z,width:"1784",height:"857"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u8f93\u5165\u4f60\u6ce8\u518c\u7684\u76ae\u80a4\u7ad9\u8d26\u6237\u5373\u53ef\u8fdb\u5165",src:r(3745).Z,width:"1716",height:"857"})))}y.isMDXComponent=!0},1199:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/pe1-3db37cf727398ffb895893bd381fa3e9.jpg"},3745:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/pe2-c32615d4ee1e2c5cb4e833da39c87866.jpg"}}]);