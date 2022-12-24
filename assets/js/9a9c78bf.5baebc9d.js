"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9475],{522:(t,e,a)=>{a.d(e,{Zo:()=>i,kt:()=>s});var n=a(1949);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function A(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?A(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):A(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},A=Object.keys(t);for(n=0;n<A.length;n++)a=A[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(t);for(n=0;n<A.length;n++)a=A[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),o=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},i=function(t){var e=o(t.components);return n.createElement(m.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,A=t.originalType,m=t.parentName,i=p(t,["components","mdxType","originalType","parentName"]),k=o(a),s=r,N=k["".concat(m,".").concat(s)]||k[s]||d[s]||A;return a?n.createElement(N,l(l({ref:e},i),{},{components:a})):n.createElement(N,l({ref:e},i))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var A=a.length,l=new Array(A);l[0]=k;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,l[1]=p;for(var o=2;o<A;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},4661:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>k,metadata:()=>N,toc:()=>y});var n=a(522),r=Object.defineProperty,A=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,d=(t,e)=>{for(var a in e||(e={}))m.call(e,a)&&i(t,a,e[a]);if(p)for(var a of p(e))o.call(e,a)&&i(t,a,e[a]);return t};const k={sidebar_position:3},s="OAuth 2",N={unversionedId:"advanced-usage/oauth2",id:"advanced-usage/oauth2",title:"OAuth 2",description:"\u8fd9\u7bc7\u6587\u6863\u662f\u9762\u5411\u5f00\u53d1\u8005\u7684\uff0c\u666e\u901a\u7528\u6237\u53ef\u80fd\u65e0\u6cd5\u7406\u89e3\u3002",source:"@site/docs/vlssuskin/advanced-usage/oauth2.md",sourceDirName:"advanced-usage",slug:"/advanced-usage/oauth2",permalink:"/vlssuskin/advanced-usage/oauth2",draft:!1,editUrl:"https://github.com/vlssu/docs.vlssu.com/blob/master/docs/vlssuskin/advanced-usage/oauth2.md",tags:[],version:"current",lastUpdatedBy:"\u98d2\u723d\u5e08\u53d4",lastUpdatedAt:1671895037,formattedLastUpdatedAt:"2022/12/24",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"primary",previous:{title:"Yggdrasil",permalink:"/vlssuskin/advanced-usage/Yggdrasil"},next:{title:"\u4e0e Flarum \u8054\u52a8",permalink:"/vlssuskin/advanced-usage/flarum"}},c={},y=[{value:"\u6587\u6863",id:"\u6587\u6863",level:2},{value:"\u521b\u5efa OAuth 2 \u5e94\u7528",id:"\u521b\u5efa-oauth-2-\u5e94\u7528",level:2},{value:"\u7b2c\u4e09\u65b9\u7f51\u7ad9\u63a5\u5165\u603b\u7ed3",id:"\u7b2c\u4e09\u65b9\u7f51\u7ad9\u63a5\u5165\u603b\u7ed3",level:2},{value:"OAuth2 \u8ba4\u8bc1\u8bf4\u660e",id:"oauth2-\u8ba4\u8bc1\u8bf4\u660e",level:3}],u={toc:y};function f(t){var e,r=t,{components:i}=r,k=((t,e)=>{var a={};for(var n in t)m.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&p)for(var n of p(t))e.indexOf(n)<0&&o.call(t,n)&&(a[n]=t[n]);return a})(r,["components"]);return(0,n.kt)("wrapper",(e=d(d({},u),k),A(e,l({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("h1",d({},{id:"oauth-2"}),"OAuth 2"),(0,n.kt)("div",d({},{className:"admonition admonition-tip alert alert--success"}),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,n.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"\u8fd9\u7bc7\u6587\u6863\u662f\u9762\u5411\u5f00\u53d1\u8005\u7684\uff0c\u666e\u901a\u7528\u6237\u53ef\u80fd\u65e0\u6cd5\u7406\u89e3\u3002"),(0,n.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u770b\u4e0d\u61c2\u8fd9\u4e2a\u9875\u9762\u5728\u8bf4\u4e9b\u4ec0\u4e48\uff0c\u76f4\u63a5\u5173\u95ed\u8fd9\u7bc7\u6587\u6863\u6216\u8005\u6d4f\u89c8\u5176\u5b83\u6587\u6863\u5373\u53ef\uff0c\u5ffd\u7565\u8fd9\u90e8\u5206\u5185\u5bb9\u4e0d\u4f1a\u5f71\u54cd\u4f60\u6b63\u5e38\u4f7f\u7528 VlssuSkin \u7684\u57fa\u7840\u529f\u80fd\u3002"))),(0,n.kt)("p",null,"VlssuSkin \u652f\u6301 OAuth 2 \u670d\u52a1\u7aef\u3002\u4f60\u53ef\u4ee5\u5728\u4f60\u7684\u5e94\u7528\u4e2d\u96c6\u6210\u300c\u4f7f\u7528 VlssuSkin \u8d26\u6237\u767b\u5f55\u300d\u8fd9\u6837\u7684\u529f\u80fd\u3002"),(0,n.kt)("h2",d({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,n.kt)("p",null,"\u8bf7\u53c2\u9605\uff1a",(0,n.kt)("a",d({parentName:"p"},{href:"https://blessing.netlify.app/api/oauth.html"}),"Blessing Skin API \u6587\u6863 - OAuth2 \u8ba4\u8bc1\u3002")),(0,n.kt)("h2",d({},{id:"\u521b\u5efa-oauth-2-\u5e94\u7528"}),"\u521b\u5efa OAuth 2 \u5e94\u7528"),(0,n.kt)("p",null,"\u5728\u4f60\u7684\u7f51\u7ad9\u4e2d\u96c6\u6210 OAuth 2 \u4e4b\u524d\uff0c\u4f60\u9700\u8981\u5148\u5728 VlssuSkin \u521b\u5efa\u5e94\u7528\u5e76\u83b7\u53d6\u5ba2\u6237\u7aef ID \u548c\u5ba2\u6237\u7aef Secret\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u6253\u5f00 OAuth 2 \u5e94\u7528\u7ba1\u7406\u9875\u9762\uff0c\u4f60\u53ef\u4ee5\u5728\u4fa7\u8fb9\u680f\u7684 \u5f00\u53d1\u8005 -> OAuth2 \u5e94\u7528 \u627e\u5230\u8fd9\u4e2a\u9875\u9762\u7684\u94fe\u63a5\u3002\u70b9\u51fb\u300c\u521b\u5efa\u5e94\u7528\u300d\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"OAuth 2\u754c\u9762",src:a(3522).Z,width:"1302",height:"574"})),(0,n.kt)("ol",d({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"\u8f93\u5165\u4f60\u7684\u5e94\u7528\u7684\u540d\u79f0\u548c\u56de\u8c03 URL\uff0c\u70b9\u51fb\u300c\u63d0\u4ea4\u300d\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"OAuth 2\u8f93\u5165\u4fe1\u606f",src:a(862).Z,width:"611",height:"299"})),(0,n.kt)("ol",d({},{start:3}),(0,n.kt)("li",{parentName:"ol"},"\u4f60\u7684 OAuth 2 \u5e94\u7528\u5c31\u521b\u5efa\u597d\u5566\uff0c\u4f60\u53ef\u4ee5\u5728\u9875\u9762\u4e2d\u627e\u5230\u4f60\u7684 OAuth 2 \u5e94\u7528\u7684\u5ba2\u6237\u7aef ID \u548c\u5ba2\u6237\u7aef Secret\u3002")),(0,n.kt)("h2",d({},{id:"\u7b2c\u4e09\u65b9\u7f51\u7ad9\u63a5\u5165\u603b\u7ed3"}),"\u7b2c\u4e09\u65b9\u7f51\u7ad9\u63a5\u5165\u603b\u7ed3"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"),(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"\u952e"),(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"\u503c"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"\u7f51\u7ad9\u751f\u6210\u7684ID"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"client_id")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"\uff08\u5ba2\u6237\u7aef ID\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"\u7f51\u7ad9\u751f\u6210\u7684secret \u503c"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"client_secret")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"\uff08\u5ba2\u6237\u7aef\u7684 secret \u503c\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"\u5e94\u7528\u7a0b\u5e8f\u6388\u6743\u7aef\u70b9 URL"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"authorize_url")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"https://skin.vlssu.com/oauth/authorize"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"\u5e94\u7528\u7a0b\u5e8ftoken\u7aef\u70b9 URL"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"token_url")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"https://skin.vlssu.com/oauth/token"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"\u7528\u6237\u4fe1\u606f\u7aef\u70b9 URL"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"user_info_url")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"https://skin.vlssu.com/api/user"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"\u5305\u542b\u7528\u6237 ID \u7684\u5b57\u6bb5"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"id")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"uid"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"\u5305\u542b\u7528\u6237\u663e\u793a\u540d\u79f0\u7684\u5b57\u6bb5"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"name")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"nickname"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"\u5305\u542b\u7528\u6237\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u7684\u5b57\u6bb5"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"email")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"email"))))),(0,n.kt)("h3",d({},{id:"oauth2-\u8ba4\u8bc1\u8bf4\u660e"}),"OAuth2 \u8ba4\u8bc1\u8bf4\u660e"),(0,n.kt)("p",null,"\u5ba2\u6237\u7aef\u5728\u9996\u6b21\u5411\u7528\u6237\u8bf7\u6c42\u6388\u6743\u65f6\uff0c\u5e94\u8be5\u8ba9\u7528\u6237\u8bbf\u95ee ",(0,n.kt)("inlineCode",{parentName:"p"},"https://skin.vlssu.com/oauth/authorize?client_id={\u5ba2\u6237\u7aef ID}&redirect_uri={\u56de\u8c03 URL}&response_type=code&scope=")," \uff08\u6700\u597d\u662f\u5ba2\u6237\u7aef\u80fd\u4e3b\u52a8\u8c03\u7528\u6d4f\u89c8\u5668\uff09\u3002"),(0,n.kt)("p",null,"\u6b64\u65f6\u6d4f\u89c8\u5668\u4f1a\u663e\u793a\u4e00\u4e2a\u8ba9\u7528\u6237\u9009\u62e9\u662f\u5426\u5141\u8bb8\u6388\u6743\u7ed9\u5ba2\u6237\u7aef\u7684\u9875\u9762\u3002\u5982\u679c\u7528\u6237\u5141\u8bb8\uff0c\u7528\u6237\u5c06\u88ab\u91cd\u5b9a\u5411\u5230\u56de\u8c03 ",(0,n.kt)("inlineCode",{parentName:"p"},"URL"),"\uff0c\u5e76\u5e26\u6709\u4e00\u4e2a\u542b ",(0,n.kt)("inlineCode",{parentName:"p"},"code")," \u5b57\u6bb5\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"query string"),"\u3002"),(0,n.kt)("p",null,"\u5ba2\u6237\u7aef\u8981\u53d6\u56de\u8fd9\u4e2a ",(0,n.kt)("inlineCode",{parentName:"p"},"code")," \u7684\u503c\u3002"),(0,n.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u5ba2\u6237\u7aef\u7528\u81ea\u5df1\u7684 HTTP \u5e93\u4ee5 POST \u65b9\u6cd5\u8bbf\u95ee\uff08\u5373\uff0c\u65e0\u9700\u7528\u6237\u5e72\u9884\uff09\u6b64 URL\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"https://skin.vlssu.com/oauth/token"),"\uff0c\u540c\u65f6\u9644\u5e26\u4e0a\u4ee5\u4e0b\u8868\u5355\u53c2\u6570\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"key"),(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"grant_type"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"authorization_code")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"client_id"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"\uff08\u5ba2\u6237\u7aef ID\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"client_secret"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"\uff08\u5ba2\u6237\u7aef\u7684 secret \u503c\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"redirect_uri"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"\uff08\u56de\u8c03 URL\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"code"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"\uff08\u521a\u521a\u83b7\u53d6\u5230\u7684 code \u503c\uff09")))))}f.isMDXComponent=!0},3522:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/o1-4015a91f0e1757cb367b7c081cda9644.png"},862:(t,e,a)=>{a.d(e,{Z:()=>n});const n="data:image/png;base64,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"}}]);