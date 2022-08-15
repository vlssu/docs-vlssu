"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6121],{522:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(1949);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2708:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>m,default:()=>y,frontMatter:()=>d,metadata:()=>f,toc:()=>g});var n=r(522),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(c)for(var r of c(t))s.call(t,r)&&p(e,r,t[r]);return e};const d={sidebar_position:4},m="PE/BE/\u57fa\u5ca9\u7248",f={unversionedId:"tutorials/configuring-client/pe",id:"tutorials/configuring-client/pe",title:"PE/BE/\u57fa\u5ca9\u7248",description:"\u8fd9\u91cc\u8bb2\u8ff0\u4e86\u57fa\u5ca9\u7248\u8be5\u5982\u4f55\u914d\u7f6e",source:"@site/docs/mcserver/tutorials/configuring-client/pe.md",sourceDirName:"tutorials/configuring-client",slug:"/tutorials/configuring-client/pe",permalink:"/mcserver/tutorials/configuring-client/pe",draft:!1,editUrl:"https://github.com/vlssu/docs.vlssu.com/blob/master/docs/mcserver/tutorials/configuring-client/pe.md",tags:[],version:"current",lastUpdatedBy:"\u98d2\u723d\u5e08\u53d4",lastUpdatedAt:1660556164,formattedLastUpdatedAt:"2022/8/15",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"primary",previous:{title:"PCL\u542f\u52a8\u5668",permalink:"/mcserver/tutorials/configuring-client/pcl"},next:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/mcserver/faq"}},v={},g=[{value:"\u9996\u5148\u8fdb\u5165QQ\u7fa4\u4e0b\u8f7d\u57fa\u5ca9\u7248",id:"\u9996\u5148\u8fdb\u5165qq\u7fa4\u4e0b\u8f7d\u57fa\u5ca9\u7248",level:2},{value:"\u6ce8\u518c\u76ae\u80a4\u7ad9\u8d26\u6237",id:"\u6ce8\u518c\u76ae\u80a4\u7ad9\u8d26\u6237",level:2},{value:"\u6dfb\u52a0\u670d\u52a1\u5668IP\u7b49\u4fe1\u606f",id:"\u6dfb\u52a0\u670d\u52a1\u5668ip\u7b49\u4fe1\u606f",level:2},{value:"\u6216\u624b\u52a8\u6dfb\u52a0IP\u4fe1\u606f",id:"\u6216\u624b\u52a8\u6dfb\u52a0ip\u4fe1\u606f",level:3},{value:"\u4f7f\u7528\u76ae\u80a4\u7ad9\u8d26\u6237\u767b\u5f55",id:"\u4f7f\u7528\u76ae\u80a4\u7ad9\u8d26\u6237\u767b\u5f55",level:2}],b={toc:g};function y(e){var t,i=e,{components:p}=i,d=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(i,["components"]);return(0,n.kt)("wrapper",(t=u(u({},b),d),a(t,o({components:p,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"pebe\u57fa\u5ca9\u7248"}),"PE/BE/\u57fa\u5ca9\u7248"),(0,n.kt)("p",null,"\u8fd9\u91cc\u8bb2\u8ff0\u4e86\u57fa\u5ca9\u7248\u8be5\u5982\u4f55\u914d\u7f6e"),(0,n.kt)("h2",u({},{id:"\u9996\u5148\u8fdb\u5165qq\u7fa4\u4e0b\u8f7d\u57fa\u5ca9\u7248"}),"\u9996\u5148\u8fdb\u5165QQ\u7fa4\u4e0b\u8f7d\u57fa\u5ca9\u7248"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"https://jq.qq.com/?_wv=1027&k=0anjDlw3"}),"QQ\u7fa4 - VLssu\u516c\u76ca\u670d")),(0,n.kt)("h2",u({},{id:"\u6ce8\u518c\u76ae\u80a4\u7ad9\u8d26\u6237"}),"\u6ce8\u518c\u76ae\u80a4\u7ad9\u8d26\u6237"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/mcserver/tutorials/reg-skin-station"}),"\u5982\u4f55\u6ce8\u518c\u76ae\u80a4\u7ad9")),(0,n.kt)("h2",u({},{id:"\u6dfb\u52a0\u670d\u52a1\u5668ip\u7b49\u4fe1\u606f"}),"\u6dfb\u52a0\u670d\u52a1\u5668IP\u7b49\u4fe1\u606f"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"minecraft://?addExternalServer=Vlssu%20Server%7Cmc.vlssu.cn:19132"}),"\u57fa\u5ca9\u7248\u8fdb\u670d\u76f4\u94fe")),(0,n.kt)("h3",u({},{id:"\u6216\u624b\u52a8\u6dfb\u52a0ip\u4fe1\u606f"}),"\u6216\u624b\u52a8\u6dfb\u52a0IP\u4fe1\u606f"),(0,n.kt)("div",u({},{className:"admonition admonition-tip alert alert--success"}),(0,n.kt)("div",u({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",u({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",u({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,n.kt)("path",u({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,n.kt)("div",u({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"mc.vlssu.cn \u7aef\u53e3\u9ed8\u8ba4\u5373\u53ef\uff0819132\uff09"))),(0,n.kt)("h2",u({},{id:"\u4f7f\u7528\u76ae\u80a4\u7ad9\u8d26\u6237\u767b\u5f55"}),"\u4f7f\u7528\u76ae\u80a4\u7ad9\u8d26\u6237\u767b\u5f55"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u70b9\u51fb\u3010\u4f7f\u7528Mojang\u8d26\u6237\u767b\u5f55\u3011",src:r(6056).Z,width:"1784",height:"857"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u8f93\u5165\u4f60\u6ce8\u518c\u7684\u76ae\u80a4\u7ad9\u8d26\u6237\u5373\u53ef\u8fdb\u5165",src:r(656).Z,width:"1716",height:"857"})))}y.isMDXComponent=!0},6056:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/pe1-3db37cf727398ffb895893bd381fa3e9.jpg"},656:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/pe2-c32615d4ee1e2c5cb4e833da39c87866.jpg"}}]);