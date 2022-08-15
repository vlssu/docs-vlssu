"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2536],{522:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(1949);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7146:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(1949),a=r(9871),i=r(9155),o=r(6876),c=r(1350),l=r(875);const s="cardContainer_AgNS",u="cardTitle_pWOr",p="cardDescription_pbZz";function m({href:e,children:t}){return n.createElement(o.Z,{href:e,className:(0,a.Z)("card padding--lg",s)},t)}function d({href:e,icon:t,title:r,description:i}){return n.createElement(m,{href:e},n.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:r},t," ",r),i&&n.createElement("p",{className:(0,a.Z)("text--truncate",p),title:i},i))}function f({item:e}){const t=(0,i.Wl)(e);return t?n.createElement(d,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function g({item:e}){var t;const r=(0,c.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(d,{href:e.href,icon:r,title:e.label,description:null==a?void 0:a.description})}function v({item:e}){switch(e.type){case"link":return n.createElement(g,{item:e});case"category":return n.createElement(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function y({items:e,className:t}){return n.createElement("section",{className:(0,a.Z)("row",t)},function(e){return e.filter((e=>"category"!==e.type||!!(0,i.Wl)(e)))}(e).map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(v,{key:t,item:e})))))}},1580:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>k,frontMatter:()=>f,metadata:()=>v,toc:()=>h});var n=r(522),a=r(7146),i=r(9155),o=Object.defineProperty,c=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&m(e,r,t[r]);if(s)for(var r of s(t))p.call(t,r)&&m(e,r,t[r]);return e};const f={description:"\u5ba2\u6237\u7aef\u4e5f\u662f\u4e00\u4e2a\u91cd\u707e\u533a\uff0c\u6211\u5c06\u4f1a\u5728\u8fd9\u91cc\u5217\u4e3e\u5728\u8fd9"},g="\u5982\u4f55\u914d\u7f6e\u5ba2\u6237\u7aef",v={unversionedId:"tutorials/configuring-client/README",id:"tutorials/configuring-client/README",title:"\u5982\u4f55\u914d\u7f6e\u5ba2\u6237\u7aef",description:"\u5ba2\u6237\u7aef\u4e5f\u662f\u4e00\u4e2a\u91cd\u707e\u533a\uff0c\u6211\u5c06\u4f1a\u5728\u8fd9\u91cc\u5217\u4e3e\u5728\u8fd9",source:"@site/docs/mcserver/tutorials/configuring-client/README.md",sourceDirName:"tutorials/configuring-client",slug:"/tutorials/configuring-client/",permalink:"/mcserver/tutorials/configuring-client/",draft:!1,editUrl:"https://github.com/vlssu/docs.vlssu.com/blob/master/docs/mcserver/tutorials/configuring-client/README.md",tags:[],version:"current",lastUpdatedBy:"\u98d2\u723d\u5e08\u53d4",lastUpdatedAt:1660556164,formattedLastUpdatedAt:"2022/8/15",frontMatter:{description:"\u5ba2\u6237\u7aef\u4e5f\u662f\u4e00\u4e2a\u91cd\u707e\u533a\uff0c\u6211\u5c06\u4f1a\u5728\u8fd9\u91cc\u5217\u4e3e\u5728\u8fd9"},sidebar:"primary",previous:{title:"\u5982\u4f55\u6ce8\u518c\u76ae\u80a4\u7ad9",permalink:"/mcserver/tutorials/reg-skin-station"},next:{title:"\u6b63\u7248\u542f\u52a8\u5668",permalink:"/mcserver/tutorials/configuring-client/minecraft-launcher"}},y={},h=[],b={toc:h};function k(e){var t,r=e,{components:o}=r,m=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},b),m),c(t,l({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",d({},{id:"\u5982\u4f55\u914d\u7f6e\u5ba2\u6237\u7aef"}),"\u5982\u4f55\u914d\u7f6e\u5ba2\u6237\u7aef"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9996\u5148\u5c31\u662f\u6211\u4eec\u8981\u6ce8\u518c\u76ae\u80a4\u7ad9 ",(0,n.kt)("a",d({parentName:"li"},{href:"https://skin.vlssu.com/auth/register"}),(0,n.kt)("strong",{parentName:"a"},"\u70b9\u51fb\u8fd9\u91cc\u53bb\u76ae\u80a4\u7ad9"))),(0,n.kt)("li",{parentName:"ul"},"\u5728\u4f60\u6ce8\u518c\u5b8c\u4e4b\u540e\u4f1a\u8fdb\u5165",(0,n.kt)("a",d({parentName:"li"},{href:"http://skin.vlssu.com/user"}),(0,n.kt)("strong",{parentName:"a"},"\u7528\u6237\u4e2d\u5fc3"))),(0,n.kt)("li",{parentName:"ul"},"\u6b63\u7248\u65e0\u9700\u6ce8\u518c\uff01",(0,n.kt)("strong",{parentName:"li"},"(\u4f46\u6700\u597d\u8fd8\u662f\u6ce8\u518c\u4e0b\uff0c\u76f4\u63a5\u767b\u9646\u76ae\u80a4\u7ad9\u5c31\u6ce8\u518c\u4e86)"))),(0,n.kt)("div",d({},{className:"admonition admonition-caution alert alert--warning"}),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,n.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("h4",d({parentName:"div"},{id:"\u6211\u4eec\u76ae\u80a4\u7ad9\u7684\u8ba4\u8bc1\u670d\u52a1\u5668\u5730\u5740"}),"\u6211\u4eec\u76ae\u80a4\u7ad9\u7684\u8ba4\u8bc1\u670d\u52a1\u5668\u5730\u5740"))),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"https://skin.vlssu.com/api/yggdrasil\n")),(0,n.kt)(a.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}k.isMDXComponent=!0}}]);