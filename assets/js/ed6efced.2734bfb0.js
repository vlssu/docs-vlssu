/*! For license information please see ed6efced.2734bfb0.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9769],{6115:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=r(5428),a=r(795),l=r(8358),o=r(1376);const s={sidebar_position:1},i="\u6b63\u7248\u542f\u52a8\u5668",c={id:"tutorials/configuring-client/minecraft-launcher",title:"\u6b63\u7248\u542f\u52a8\u5668",description:"(\u6b64\u65b9\u6cd5\u5728\u65b0\u7248\u6b63\u7248\u542f\u52a8\u5668\u4e2d\u5931\u6548\u4e86\uff0c\u8bf7\u6539\u7528HMCL\u6216\u5176\u4ed6\u542f\u52a8\u5668)",source:"@site/docs/mcserver/tutorials/configuring-client/minecraft-launcher.md",sourceDirName:"tutorials/configuring-client",slug:"/tutorials/configuring-client/minecraft-launcher",permalink:"/mcserver/tutorials/configuring-client/minecraft-launcher",draft:!1,unlisted:!1,editUrl:"https://github.com/vlssu/docs.vlssu.com/blob/master/docs/mcserver/tutorials/configuring-client/minecraft-launcher.md",tags:[],version:"current",lastUpdatedBy:"\u98d2\u723d\u5e08\u53d4",lastUpdatedAt:168733674e4,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"primary",previous:{title:"\u914d\u7f6e\u5ba2\u6237\u7aef",permalink:"/mcserver/tutorials/configuring-client/"},next:{title:"HMCL\u542f\u52a8\u5668",permalink:"/mcserver/tutorials/configuring-client/hmcl"}},u={},d=[];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"\u6b63\u7248\u542f\u52a8\u5668",children:"\u6b63\u7248\u542f\u52a8\u5668"})}),"\n",(0,n.jsx)(t.p,{children:"(\u6b64\u65b9\u6cd5\u5728\u65b0\u7248\u6b63\u7248\u542f\u52a8\u5668\u4e2d\u5931\u6548\u4e86\uff0c\u8bf7\u6539\u7528HMCL\u6216\u5176\u4ed6\u542f\u52a8\u5668)"}),"\n",(0,n.jsxs)(t.p,{children:["\u4ee5\u4e0b\u4ee5 ",(0,n.jsx)(t.a,{href:"https://www.minecraft.net/zh-hans/download",children:"Minecraft Launcher"})," \u4e3a\u4f8b\uff0c\u6f14\u793a\u5728 Minecraft \u5ba2\u6237\u7aef\u4e2d\u4f7f\u7528 Yggdrasil"]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["\u9996\u5148\u4f60\u5f97\u662f\u6b63\u7248\uff0c\u7136\u540e\u518d\u76ae\u80a4\u7ad9\u7ed1\u5b9a\u6b63\u7248\uff0c\u5982\u53d1\u73b0\u8fdb\u4e0d\u53bb\uff0c\u53ef\u4ee5\u53bb\u76ae\u80a4\u7ad9\u7684",(0,n.jsx)(t.a,{href:"https://skin.vlssu.com/user/profile",children:(0,n.jsx)(t.strong,{children:"\u4e2a\u4eba\u8d44\u6599"})}),"\u53f3\u4e0a\u89d2\u8fdb\u884c\u66f4\u65b0",(0,n.jsx)(t.strong,{children:"UUID"}),"\uff08\u5982\u679c\u6ca1\u6709\u5219\u7ad9\u70b9\u5df2\u5e2e\u4f60\u81ea\u52a8\u540c\u6b65\u66f4\u65b0\uff09"]})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"An image",src:r(7080).A+"",width:"824",height:"338"})}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["\u9700\u8981\u5148\u4e0b\u8f7d",(0,n.jsx)(t.a,{href:"https://authlib-injector.yushi.moe/~download/",children:(0,n.jsx)(t.code,{children:"authlib-injector.jar"})}),"\u5e76\u653e\u5728\u4f60\u7684\u6e38\u620f\u6587\u4ef6\u7684\u6839\u76ee\u5f55\u4e5f\u5c31\u662f",(0,n.jsx)(t.code,{children:".minecraft"}),"\u6587\u4ef6\u5939\u91cc\uff08\u5b9e\u9645\u968f\u4f60\u653e\u54ea\uff09"]})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"An image",src:r(3575).A+"",width:"1117",height:"590"})}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"\u7136\u540e\u6253\u5f00\u6b63\u7248\u542f\u52a8\u5668\u7684JVM\u53c2\u6570\u8fdb\u884c\u8bbe\u7f6e"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"An image",src:r(7770).A+"",width:"1016",height:"639"})}),"\n","\n",(0,n.jsxs)(l.A,{children:[(0,n.jsx)(o.A,{value:"\u8bbe\u7f6e\u53c2\u6570",label:"\u8bbe\u7f6e\u53c2\u6570",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"-javaagent:{\u7edd\u5bf9\u4f4d\u7f6e\\authlib-injector.jar}=https://skin.vlssu.com/api/yggdrasil\n"})})}),(0,n.jsx)(o.A,{value:"\u8fd9\u662f\u6211\u7684\u53c2\u6570",label:"\u8fd9\u662f\u6211\u7684\u53c2\u6570",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"-javaagent:C:\\Users\\vlssu\\AppData\\Roaming\\.minecraft\\authlib-injector.jar=https://skin.vlssu.com/api/yggdrasil -Xmx8G -XX:+UnlockExperimentalVMOptions -XX:+UseG1GC -XX:G1NewSizePercent=20 -XX:G1ReservePercent=20 -XX:MaxGCPauseMillis=50 -XX:G1HeapRegionSize=32M\n"})})})]})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},1376:(e,t,r)=>{r.d(t,{A:()=>p});var n=r(799),a=r(7340);const l={tabItem:"tabItem_wJru"};var o=Object.defineProperty,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&u(e,r,t[r]);if(s)for(var r of s(t))c.call(t,r)&&u(e,r,t[r]);return e};function p({children:e,hidden:t,className:r}){return n.createElement("div",d({role:"tabpanel",className:(0,a.A)(l.tabItem,r)},{hidden:t}),e)}},8358:(e,t,r)=>{r.d(t,{A:()=>U});var n=r(799),a=r(7340),l=r(6149),o=r(1694),s=r(2851),i=r(158),c=r(6383),u=r(9989),d=Object.defineProperty,p=Object.defineProperties,f=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,v=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&g(e,r,t[r]);if(m)for(var r of m(t))b.call(t,r)&&g(e,r,t[r]);return e},y=(e,t)=>p(e,f(t));function j(e){var t,r;return null!=(r=null==(t=n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?r:[]}function x(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:function(e){return j(e).map((({props:{value:e,label:t,attributes:r,default:n}})=>({value:e,label:t,attributes:r,default:n})))}(r);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function w({value:e,tabValues:t}){return t.some((t=>t.value===e))}function O({queryString:e=!1,groupId:t}){const r=(0,o.W6)(),a=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,i.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace(y(v({},r.location),{search:t.toString()}))}),[a,r])]}function E(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=x(e),[o,i]=(0,n.useState)((()=>function({defaultValue:e,tabValues:t}){var r;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!w({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=null!=(r=t.find((e=>e.default)))?r:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[c,d]=O({queryString:r,groupId:a}),[p,f]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,a]=(0,u.Dv)(t);return[r,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:a}),m=(()=>{const e=null!=c?c:p;return w({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{m&&i(m)}),[m]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!w({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var A=r(3409);const k={tabList:"tabList_qm36",tabItem:"tabItem_Gg1K"};var I=Object.defineProperty,_=Object.defineProperties,P=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,N=(e,t,r)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,T=(e,t)=>{for(var r in t||(t={}))V.call(t,r)&&N(e,r,t[r]);if(S)for(var r of S(t))C.call(t,r)&&N(e,r,t[r]);return e},D=(e,t)=>_(e,P(t));function M({className:e,block:t,selectedValue:r,selectValue:o,tabValues:s}){const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const t=e.currentTarget,n=i.indexOf(t),a=s[n].value;a!==r&&(c(t),o(a))},d=e=>{var t,r;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=null!=(t=i[r])?t:i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=null!=(r=i[t])?r:i[i.length-1];break}}null==n||n.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},e)},s.map((({value:e,label:t,attributes:l})=>n.createElement("li",D(T({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,key:e,ref:e=>i.push(e),onKeyDown:d,onClick:u},l),{className:(0,a.A)("tabs__item",k.tabItem,null==l?void 0:l.className,{"tabs__item--active":r===e})}),null!=t?t:e))))}function R({lazy:e,children:t,selectedValue:r}){const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function X(e){const t=E(e);return n.createElement("div",{className:(0,a.A)("tabs-container",k.tabList)},n.createElement(M,T(T({},t),e)),n.createElement(R,T(T({},t),e)))}function U(e){const t=(0,A.A)();return n.createElement(X,T({key:String(t)},e),j(e.children))}},2541:(e,t,r)=>{var n=r(799),a=Symbol.for("react.element"),l=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,l={},c=null,u=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,n)&&!i.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===l[n]&&(l[n]=t[n]);return{$$typeof:a,type:e,key:c,ref:u,props:l,_owner:s.current}}t.Fragment=l,t.jsx=c,t.jsxs=c},5428:(e,t,r)=>{e.exports=r(2541)},7080:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/ml1-d7d6922894572195fec463ce17ca6230.jpg"},3575:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/ml2-bde92400eb470a3044ed45f8efd3cb2a.jpg"},7770:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/ml3-32f47d9f7b3e904b6c6de7b737c53d43.jpg"},795:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>s});var n=r(799);const a={},l=n.createContext(a);function o(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);