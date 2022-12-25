"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1836],{522:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(1949);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,f=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6030:(e,t,r)=>{r.d(t,{Z:()=>N});var n=r(1949),a=r(9871),o=r(9650),i=r(4422),l=r(7310),c=r(9645);const s="cardContainer_tBc9",m="cardTitle_M37E",p="cardDescription_trxQ";function u({href:e,children:t}){return n.createElement(i.Z,{href:e,className:(0,a.Z)("card padding--lg",s)},t)}function d({href:e,icon:t,title:r,description:o}){return n.createElement(u,{href:e},n.createElement("h2",{className:(0,a.Z)("text--truncate",m),title:r},t," ",r),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",p),title:o},o))}function f({item:e}){const t=(0,o.Wl)(e);return t?n.createElement(d,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function y({item:e}){var t;const r=(0,l.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(d,{href:e.href,icon:r,title:e.label,description:null==a?void 0:a.description})}function b({item:e}){switch(e.type){case"link":return n.createElement(y,{item:e});case"category":return n.createElement(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var v=Object.defineProperty,O=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function E({className:e}){const t=(0,o.jA)();return n.createElement(N,{items:t.items,className:e})}function N(e){const{items:t,className:r}=e;if(!t)return n.createElement(E,((e,t)=>{for(var r in t||(t={}))g.call(t,r)&&h(e,r,t[r]);if(O)for(var r of O(t))k.call(t,r)&&h(e,r,t[r]);return e})({},e));const i=(0,o.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(b,{item:e})))))}},9847:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>k,frontMatter:()=>f,metadata:()=>b,toc:()=>O});var n=r(522),a=r(6030),o=r(9650),i=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&u(e,r,t[r]);if(s)for(var r of s(t))p.call(t,r)&&u(e,r,t[r]);return e};const f={sidebar_position:1},y="\u5404\u670d\u6587\u6863",b={unversionedId:"summary/server/README",id:"summary/server/README",title:"\u5404\u670d\u6587\u6863",description:"\u6ce8\u610f\u4e8b\u9879",source:"@site/docs/mcserver/summary/server/README.md",sourceDirName:"summary/server",slug:"/summary/server/",permalink:"/mcserver/summary/server/",draft:!1,editUrl:"https://github.com/vlssu/docs.vlssu.com/blob/master/docs/mcserver/summary/server/README.md",tags:[],version:"current",lastUpdatedBy:"\u98d2\u723d\u5e08\u53d4",lastUpdatedAt:1671946424,formattedLastUpdatedAt:"2022\u5e7412\u670825\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"primary",previous:{title:"PE/BE/\u57fa\u5ca9\u7248\u8fdb\u670d\u5730\u5740",permalink:"/mcserver/summary/pe-summary"},next:{title:"\u767b\u9646\u5927\u5385",permalink:"/mcserver/summary/server/login"}},v={},O=[{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}],g={toc:O};function k(e){var t,r=e,{components:i}=r,u=((e,t)=>{var r={};for(var n in e)m.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},g),u),l(t,c({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("h1",d({},{id:"\u5404\u670d\u6587\u6863"}),"\u5404\u670d\u6587\u6863"),(0,n.kt)("h2",d({},{id:"\u6ce8\u610f\u4e8b\u9879"}),"\u6ce8\u610f\u4e8b\u9879"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u53cb\u597d\uff08\u7981\u6b62\u9a82\u4eba\u3001\u6311\u8845\u3001\u6545\u610f\u51fb\u6740\u591a\u6b21\u3001\u706b\u70e7\u6c34\u6df9\u7b49\uff09\uff0c\u3010\u4e3e\u62a5\u6210\u529f\u9020\u6210\u635f\u5931\u968f\u4e3e\u62a5\u8005\u610f\u8fdb\u884c\u8d54\u507f\u5e76\u5c01\u79817\u5929\uff0c\u6ca1\u6709\u7b2c\u4e8c\u6b21\u673a\u4f1a\u3011"),(0,n.kt)("li",{parentName:"ol"},"\u7981\u6b62\u5077\u4e1c\u897f\u3010\u65e0\u5fc3\u4e4b\u8fc7\u5c01\u4e09\u5929\u6ca1\u6709\u7b2c\u4e8c\u6b21\u673a\u4f1a\u3011"),(0,n.kt)("li",{parentName:"ol"},"\u7981\u6b62\u4e71\u62c6\u4e71\u5efa\u4e71\u6539\u9020\uff08\u5728\u6ca1\u6709\u4ed6\u4eba\u5141\u8bb8\u7684\u60c5\u51b5\u4e0b\u7981\u6b62\u62c6\u5378\u4ed6\u4eba\u7269\u54c1\uff09\u3010\u5305\u62ec\u5c45\u6240\u5468\u56f4\u73af\u5883\u4ee5\u53ca\u5c71\u6d1e\uff0c\u5177\u4f53\u60c5\u51b5\u5177\u4f53\u800c\u5b9a\u3011"),(0,n.kt)("li",{parentName:"ol"},"\u7981\u6b62\u9ad8\u9891\u3010\u5df2\u5f00\u542f\u53cd\u9ad8\u9891\uff0c\u7269\u54c1\u6d88\u5931\u6982\u4e0d\u8d1f\u8d23\uff0c\u65e0\u6cd5\u68c0\u6d4b\u51fa\u6765\u7684\u6f0f\u6d1e\u7ecf\u4e3e\u62a5\u6216\u68c0\u67e5\u540e\u5e94\u66f4\u6b63\uff0c\u62d2\u4e0d\u6539\u6b63\u76f4\u63a5\u62c6\u9664\u3011"),(0,n.kt)("li",{parentName:"ol"},"\u7981\u6b62\u642d\u5efa\u8fdd\u89c4\u5efa\u7b51\u3002\u3010\u9ad8\u7a7a/\u60ac\u7a7a\u5efa\u7b51\u3001\u64ce\u5929\u67f1\u3001\u9ad8\u7a7a\u6d41\u6c34\u3011\uff08\u7c7b\u4f3c\u6d6e\u5c9b\u5efa\u7b51\u53ef\u4ee5\uff0c\u7b26\u5408\u7269\u7406\u5e38\u8bc6\u4e14\u7f8e\u89c2\uff0c\u4e0d\u662f\u4e00\u4e2a\u67f1\u5b50\u7684\u4e8b\u60c5\uff09"),(0,n.kt)("li",{parentName:"ol"},"\u670d\u52a1\u5668\u63d0\u5021\u5171\u4eab\uff0c\u82e5\u7bb1\u5b50\u4e0a\u5199\u7740\u5171\u4eab\uff0c\u8bf7\u5728\u62ff\u7684\u65f6\u5019\u7559\u8a00\uff08\u724c\u5b50\uff0c\u4e66\u4e0e\u7b14\uff0c\u9644\u9b54\u7684\u7269\u54c1\uff09\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u724c\u5b50\u53f3\u952e\u53ef\u7ed9\u7bb1\u5b50\u4e0a\u9501\uff0c\u82e5\u4e0d\u5171\u4eab\u8bf7\u9501\u7bb1\u5b50\uff08\u4eba\u591a\u9501\u4e0d\u4e0a\u53ef\u9501\u95e8\uff09\uff0c\u65e2\u4e0d\u9501\u7bb1\u5b50\u4e5f\u4e0d\u9501\u95e8\u5bfc\u81f4\u7684\u7269\u54c1\u4e22\u5931\u6982\u4e0d\u8d1f\u8d23"),(0,n.kt)("li",{parentName:"ol"},"\u5bb6\u88ab\u718a\u5148/co i\u68c0\u67e5\uff08\u5de6\u952e\u8fd9\u4e2a\u65b9\u5757\u7684\u5750\u6807\u6216\u53f3\u952e\u653e\u7f6e\u65b9\u5757\u7684\u5750\u6807\uff0c\u7bb1\u5b50\u7b49\u76f4\u63a5\u53f3\u952e\uff09\u622a\u56fe\uff08\u5168\u5c4f\uff09\u5e76\u4e3e\u62a5\u7ed9\u7ba1\u7406\u5458\uff0c\u7ba1\u7406\u4f1a\u5c3d\u5feb\u8fdb\u884c\u4e8c\u6b21\u6838\u9a8c\u5e76\u67e5\u5904"),(0,n.kt)("li",{parentName:"ol"},"\u6b7b\u4ea1\u6389\u843d\uff0c\u4e3a\u4e86\u9632\u6b62\u88c5\u5907\u9971\u548c\u800c\u8003\u8651\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u7981\u6b62\u5927\u91cf\u517b\u6b96\u52a8\u7269\uff0c\u5229\u7528\u6e38\u620f\u7279\u6027\u5c06\u751f\u7269\u5361\u5728\u540c\u4e00\u683c\u4e14\u751f\u7269\u6570\u91cf\u8d85\u8fc7\u4e00\u5b9a\u91cf\u7684\uff0c\u5168\u90e8\u6e05\u9664\u3002\u3010\u591a\u5c42\u7267\u573a\u53ea\u7b97\u6700\u5927\u7684\u4e00\u5c42\u9762\u79ef\u3011\uff08\u5b89\u5168\u6807\u51c6\uff1a\u6bcf\u4e24\u683c\u9762\u79ef\u4e00\u53ea\u52a8\u7269\uff09"),(0,n.kt)("li",{parentName:"ol"},"\u4e0d\u53ef\u5229\u7528\u89c4\u5b9a\u94bb\u6f0f\u6d1e\u6216\u78b0\u74f7\u5176\u4ed6\u73a9\u5bb6\uff0c\u4e0d\u53ef\u6076\u4eba\u5148\u544a\u72b6\u5bfb\u8845\u6ecb\u4e8b\u3010\u6b64\u7c7b\u60c5\u51b5\u5c01\u4e09\u5929\u5148\u3011")),(0,n.kt)("admonition",d({},{title:"\u60e9\u7f5a\u63aa\u65bd",type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"\u3010\u718a\u3001\u7834\u574f\u3001\u968f\u4fbf\u62ff\u4ed6\u4eba\u4e1c\u897f\u3011\u60e9\u7f5a\u63aa\u65bd\u5982\u4e0b\uff1a"),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"\u73a9\u5bb6\u5982\u679c\u65e0\u6240\u8c13\uff0c\u4e0d\u4e3e\u62a5\u65e0\u64cd\u4f5c\uff0c\u4f46\u73a9\u5bb6\u5728\u610f\u5e76\u4e3e\u62a5\u7ed9\u7ba1\u7406\u5458\u76f4\u63a5banip"),(0,n.kt)("li",{parentName:"ol"},"\u53d1\u73b0\u3010\u718a\u3001\u7834\u574f\u3011\u5c01IP \uff08\u6c38\u4e45\u5c01\u7981\uff09 \u3010\u968f\u4fbf\u62ff\u4ed6\u4eba\u4e1c\u897f\u3011\u5c01IP \uff08\u6c38\u4e45\u5c01\u7981\uff09")),(0,n.kt)("p",{parentName:"admonition"},"\u3010\u9a82\u4eba\u3001\u5237\u5c4f\u3011\u60e9\u7f5a\u63aa\u65bd\u5982\u4e0b\uff1a"),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"\u7b2c\u4e00\u6b21\u53d1\u73b0\u3010\u9a82\u4eba\u3001\u5237\u5c4f\u3011\u7981\u8a00\uff085\u5929\uff09"),(0,n.kt)("li",{parentName:"ol"},"\u7b2c\u4e8c\u6b21\u53d1\u73b0\u3010\u9a82\u4eba\u3001\u5237\u5c4f\u3011\u7981\u8a00\uff08\u6c38\u4e45\u7981\u8a00\uff09"))),(0,n.kt)("admonition",d({},{type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"\u670d\u52a1\u5668\u5404\u670d\u6587\u6863")),(0,n.kt)(a.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}k.isMDXComponent=!0}}]);