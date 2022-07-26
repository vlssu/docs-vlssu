"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2536],{522:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(1949);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1580:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>b,frontMatter:()=>m,metadata:()=>d,toc:()=>v});var n=r(522),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(c)for(var r of c(t))s.call(t,r)&&p(e,r,t[r]);return e};const m={description:"\u5ba2\u6237\u7aef\u4e5f\u662f\u4e00\u4e2a\u91cd\u707e\u533a\uff0c\u6211\u5c06\u4f1a\u5728\u8fd9\u91cc\u5217\u4e3e\u5728\u8fd9"},f="\u5982\u4f55\u914d\u7f6e\u5ba2\u6237\u7aef",d={unversionedId:"tutorials/configuring-client/README",id:"tutorials/configuring-client/README",title:"\u5982\u4f55\u914d\u7f6e\u5ba2\u6237\u7aef",description:"\u5ba2\u6237\u7aef\u4e5f\u662f\u4e00\u4e2a\u91cd\u707e\u533a\uff0c\u6211\u5c06\u4f1a\u5728\u8fd9\u91cc\u5217\u4e3e\u5728\u8fd9",source:"@site/docs/mcserver/tutorials/configuring-client/README.md",sourceDirName:"tutorials/configuring-client",slug:"/tutorials/configuring-client/",permalink:"/mcserver/tutorials/configuring-client/",draft:!1,editUrl:"https://github.com/vlssu/docs.vlssu.com/blob/master/docs/tutorials/configuring-client/README.md",tags:[],version:"current",lastUpdatedBy:"\u98d2\u723d\u5e08\u53d4",lastUpdatedAt:1658846154,formattedLastUpdatedAt:"2022/7/26",frontMatter:{description:"\u5ba2\u6237\u7aef\u4e5f\u662f\u4e00\u4e2a\u91cd\u707e\u533a\uff0c\u6211\u5c06\u4f1a\u5728\u8fd9\u91cc\u5217\u4e3e\u5728\u8fd9"},sidebar:"primary",previous:{title:"\u5982\u4f55\u6ce8\u518c\u76ae\u80a4\u7ad9",permalink:"/mcserver/tutorials/reg-skin-station"},next:{title:"\u6b63\u7248\u542f\u52a8\u5668",permalink:"/mcserver/tutorials/configuring-client/minecraft-launcher"}},g={},v=[],y={toc:v};function b(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},y),p),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"\u5982\u4f55\u914d\u7f6e\u5ba2\u6237\u7aef"}),"\u5982\u4f55\u914d\u7f6e\u5ba2\u6237\u7aef"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9996\u5148\u5c31\u662f\u6211\u4eec\u8981\u6ce8\u518c\u76ae\u80a4\u7ad9 ",(0,n.kt)("a",u({parentName:"li"},{href:"https://skin.vlssu.com/auth/register"}),(0,n.kt)("strong",{parentName:"a"},"\u70b9\u51fb\u8fd9\u91cc\u53bb\u76ae\u80a4\u7ad9"))),(0,n.kt)("li",{parentName:"ul"},"\u5728\u4f60\u6ce8\u518c\u5b8c\u4e4b\u540e\u4f1a\u8fdb\u5165",(0,n.kt)("a",u({parentName:"li"},{href:"http://skin.vlssu.com/user"}),(0,n.kt)("strong",{parentName:"a"},"\u7528\u6237\u4e2d\u5fc3"))),(0,n.kt)("li",{parentName:"ul"},"\u6b63\u7248\u65e0\u9700\u6ce8\u518c\uff01",(0,n.kt)("strong",{parentName:"li"},"(\u4f46\u6700\u597d\u8fd8\u662f\u6ce8\u518c\u4e0b\uff0c\u76f4\u63a5\u767b\u9646\u76ae\u80a4\u7ad9\u5c31\u6ce8\u518c\u4e86)"))),(0,n.kt)("div",u({},{className:"admonition admonition-caution alert alert--warning"}),(0,n.kt)("div",u({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",u({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",u({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,n.kt)("path",u({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,n.kt)("div",u({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("h4",u({parentName:"div"},{id:"\u6211\u4eec\u76ae\u80a4\u7ad9\u7684\u8ba4\u8bc1\u670d\u52a1\u5668\u5730\u5740"}),"\u6211\u4eec\u76ae\u80a4\u7ad9\u7684\u8ba4\u8bc1\u670d\u52a1\u5668\u5730\u5740"))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"https://skin.vlssu.com/api/yggdrasil\n")),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/mcserver/tutorials/configuring-client/minecraft-launcher"}),"\u6b63\u7248\u542f\u52a8\u5668")),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/mcserver/tutorials/configuring-client/hmcl"}),"HMCL\u542f\u52a8\u5668")),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/mcserver/tutorials/configuring-client/pcl"}),"PCL\u542f\u52a8\u5668")))}b.isMDXComponent=!0}}]);