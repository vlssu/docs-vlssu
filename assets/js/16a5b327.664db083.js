"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6e3],{522:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(1949);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,g=c["".concat(o,".").concat(m)]||c[m]||d[m]||l;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1853:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(1949),r=a(9871);const l="tabItem_Cqxv";var i=Object.defineProperty,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function c({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))o.call(t,a)&&u(e,a,t[a]);if(s)for(var a of s(t))p.call(t,a)&&u(e,a,t[a]);return e})({role:"tabpanel",className:(0,r.Z)(l,a)},{hidden:t}),e)}},554:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(1949),r=a(9871),l=a(3689),i=a(1371),s=a(5519),o=a(5901);const p="tabList_PuBr",u="tabItem_zAYN";var c=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,h=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,f=(e,t)=>{for(var a in t||(t={}))k.call(t,a)&&h(e,a,t[a]);if(g)for(var a of g(t))b.call(t,a)&&h(e,a,t[a]);return e};function v(e){var t,a;const{lazy:l,block:c,defaultValue:g,values:k,groupId:b,className:h}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=k?k:v.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),j=(0,i.l)(y,((e,t)=>e.value===t.value));if(j.length>0)throw new Error(`Docusaurus error: Duplicate values "${j.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===g?g:null!=(a=null!=g?g:null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)?a:v[0].props.value;if(null!==w&&!y.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:O}=(0,s.U)(),[P,C]=(0,n.useState)(w),E=[],{blockElementScrollPositionUntilNextRender:S}=(0,o.o5)();if(null!=b){const e=N[b];null!=e&&e!==P&&y.some((t=>t.value===e))&&C(e)}const Z=e=>{const t=e.currentTarget,a=E.indexOf(t),n=y[a].value;n!==P&&(S(t),C(n),null!=b&&O(b,String(n)))},Y=e=>{var t,a;let n=null;switch(e.key){case"Enter":Z(e);break;case"ArrowRight":{const a=E.indexOf(e.currentTarget)+1;n=null!=(t=E[a])?t:E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=null!=(a=E[t])?a:E[E.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},h)},y.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(l=f({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:e=>E.push(e),onKeyDown:Y,onClick:Z},a),i={className:(0,r.Z)("tabs__item",u,null==a?void 0:a.className,{"tabs__item--active":P===e})},d(l,m(i))),null!=t?t:e);var l,i}))),l?(0,n.cloneElement)(v.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function y(e){const t=(0,l.Z)();return n.createElement(v,f({key:String(t)},e))}},6668:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>k,default:()=>y,frontMatter:()=>g,metadata:()=>b,toc:()=>f});var n=a(522),r=a(554),l=a(1853),i=Object.defineProperty,s=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&d(e,a,t[a]);if(p)for(var a of p(t))c.call(t,a)&&d(e,a,t[a]);return e};const g={sidebar_position:2},k="Yggdrasil",b={unversionedId:"advanced/Yggdrasil",id:"advanced/Yggdrasil",title:"Yggdrasil",description:"VlssuSkin \u63d0\u4f9b Yggdrasil \u9a8c\u8bc1\u9274\u6743\u670d\u52a1\uff0c\u4f60\u53ef\u4ee5\u914d\u5408 authlib-injector \u6765\u5b9e\u73b0 Minecraft \u670d\u52a1\u5668\u5916\u7f6e\u767b\u5f55\uff0c\u5e76\u5728\u4e0d\u5b89\u88c5\u76ae\u80a4 Mod \u7684\u60c5\u51b5\u4e0b\u52a0\u8f7d\u6765\u81ea VlssuSkin \u7684\u6750\u8d28\u3002",source:"@site/docs/vlssuskin/advanced/Yggdrasil.md",sourceDirName:"advanced",slug:"/advanced/Yggdrasil",permalink:"/vlssuskin/advanced/Yggdrasil",draft:!1,editUrl:"https://github.com/vlssu/docs.vlssu.com/blob/master/docs/vlssuskin/advanced/Yggdrasil.md",tags:[],version:"current",lastUpdatedBy:"\u98d2\u723d\u5e08\u53d4",lastUpdatedAt:1672927679,formattedLastUpdatedAt:"2023\u5e741\u67085\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"primary",previous:{title:"Blessing Skin API",permalink:"/vlssuskin/advanced/api"},next:{title:"OAuth 2",permalink:"/vlssuskin/advanced/oauth2"}},h={},f=[{value:"Yggdrasil API \u5730\u5740",id:"yggdrasil-api-\u5730\u5740",level:2},{value:"API \u6587\u6863",id:"api-\u6587\u6863",level:2},{value:"\u5728\u670d\u52a1\u7aef\u4f7f\u7528",id:"\u5728\u670d\u52a1\u7aef\u4f7f\u7528",level:2},{value:"\u5728\u5ba2\u6237\u7aef\u4f7f\u7528",id:"\u5728\u5ba2\u6237\u7aef\u4f7f\u7528",level:2},{value:"HMCL \u542f\u52a8\u5668\u793a\u4f8b",id:"hmcl-\u542f\u52a8\u5668\u793a\u4f8b",level:3},{value:"PCL \u542f\u52a8\u5668\u793a\u4f8b",id:"pcl-\u542f\u52a8\u5668\u793a\u4f8b",level:3},{value:"\u6b63\u7248 \u542f\u52a8\u5668\u793a\u4f8b",id:"\u6b63\u7248-\u542f\u52a8\u5668\u793a\u4f8b",level:3},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],v={toc:f};function y(e){var t,i=e,{components:d}=i,g=((e,t)=>{var a={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a})(i,["components"]);return(0,n.kt)("wrapper",(t=m(m({},v),g),s(t,o({components:d,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"yggdrasil"}),"Yggdrasil"),(0,n.kt)("p",null,"VlssuSkin \u63d0\u4f9b Yggdrasil \u9a8c\u8bc1\u9274\u6743\u670d\u52a1\uff0c\u4f60\u53ef\u4ee5\u914d\u5408 ",(0,n.kt)("a",m({parentName:"p"},{href:"https://github.com/yushijinhun/authlib-injector"}),"authlib-injector")," \u6765\u5b9e\u73b0 Minecraft \u670d\u52a1\u5668\u5916\u7f6e\u767b\u5f55\uff0c\u5e76\u5728\u4e0d\u5b89\u88c5\u76ae\u80a4 Mod \u7684\u60c5\u51b5\u4e0b\u52a0\u8f7d\u6765\u81ea VlssuSkin \u7684\u6750\u8d28\u3002"),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 ",(0,n.kt)("a",m({parentName:"p"},{href:"https://authlib-injector.yushi.moe/~download/"}),"https://authlib-injector.yushi.moe/~download/")," \u4e0b\u8f7d\u5230\u6700\u65b0\u7248\u672c\u7684 authlib-injector\u3002"),(0,n.kt)("h2",m({},{id:"yggdrasil-api-\u5730\u5740"}),"Yggdrasil API \u5730\u5740"),(0,n.kt)("p",null,"VlssuSkin \u7684 Yggdrasil API \u7684\u5730\u5740\u662f\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"https://skin.vlssu.com/api/yggdrasil\n")),(0,n.kt)("h2",m({},{id:"api-\u6587\u6863"}),"API \u6587\u6863"),(0,n.kt)("p",null,"\u8bf7\u53c2\u9605\uff1a",(0,n.kt)("a",m({parentName:"p"},{href:"https://github.com/yushijinhun/authlib-injector/wiki/Yggdrasil#yggdrasil-api-%E5%9C%B0%E5%9D%80"}),"Yggdrasil")," \u670d\u52a1\u7aef\u6280\u672f\u89c4\u8303"),(0,n.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u5728 ",(0,n.kt)("a",m({parentName:"p"},{href:"https://wiki.vg/Main_Page"}),"wiki.vg")," \u4e0a\u627e\u5230\u66f4\u591a\u4fe1\u606f\u3002"),(0,n.kt)("h2",m({},{id:"\u5728\u670d\u52a1\u7aef\u4f7f\u7528"}),"\u5728\u670d\u52a1\u7aef\u4f7f\u7528"),(0,n.kt)("p",null,"\u8bf7\u5148\u5c06\u670d\u52a1\u5668\u914d\u7f6e\u6587\u4ef6\uff08\u4e00\u822c\u4e3a server.propties\uff09\u4e2d ",(0,n.kt)("inlineCode",{parentName:"p"},"online-mode")," \u4e00\u9879\u7684\u503c\u8bbe\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u7136\u540e\u5728\u4f60\u7684\u670d\u52a1\u7aef\u7684\u542f\u52a8\u6307\u4ee4\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"-jar")," \u53c2\u6570\u524d\u6dfb\u52a0\u5982\u4e0b\u53c2\u6570\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"-javaagent:{path/to/authlib-injector.jar}=https://skin.vlssu.com/api/yggdrasil\n")),(0,n.kt)("p",null,"\u5176\u4e2d ",(0,n.kt)("inlineCode",{parentName:"p"},"{path/to/authlib-injector.jar}")," \u4e3a\u6307\u5411 authlib-injector \u7684\u8def\u5f84\u3002"),(0,n.kt)("admonition",m({},{type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u4f7f\u7528 BungeeCord\uff0c\u4f60\u9700\u8981\u5728\u6240\u6709\u670d\u52a1\u7aef\uff08\u5305\u62ec BungeeCord \u548c\u6240\u6709\u5b50\u670d\uff09\u4e2d\u52a0\u8f7d authlib-injector\uff08\u65b9\u6cd5\u89c1\u4e0a\uff09\uff0c\u4f46\u53ea\u6709 BungeeCord \u6253\u5f00 ",(0,n.kt)("inlineCode",{parentName:"p"},"online-mode"),"\uff0c\u5176\u4ed6\u670d\u52a1\u7aef\u5e94\u8be5\u5173\u95ed ",(0,n.kt)("inlineCode",{parentName:"p"},"online-mode"),"\u3002")),(0,n.kt)("h2",m({},{id:"\u5728\u5ba2\u6237\u7aef\u4f7f\u7528"}),"\u5728\u5ba2\u6237\u7aef\u4f7f\u7528"),(0,n.kt)("p",null,"\u5728\u5ba2\u6237\u7aef\u4e2d\u4f7f\u7528 VlssuSkin \u7684 Yggdrasil \u9700\u8981\u542f\u52a8\u5668\u652f\u6301\u81ea\u5b9a\u4e49 Yggdrasil \u670d\u52a1\u5668\u3002\u63a8\u8350\u4f7f\u7528 ",(0,n.kt)("a",m({parentName:"p"},{href:"https://www.mcbbs.net/thread-142335-1-1.html"}),"HMCL 3"),"\u3002"),(0,n.kt)("admonition",m({},{type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u4f7f\u7528\u7684\u542f\u52a8\u5668\u4e0d\u652f\u6301\u81ea\u5b9a\u4e49 Yggdrasil\uff0c\u5e76\u4e14\u4f60\u4f7f\u7528\u7684\u542f\u52a8\u5668\u662f\u4f7f\u7528 Java \u7f16\u5199\u7684\uff0c\u4f60\u4e5f\u53ef\u4ee5\u624b\u52a8\u6dfb\u52a0 JVM \u53c2\u6570\u6765\u52a0\u8f7d authlib-injector\uff08\u5c31\u50cf\u5728\u670d\u52a1\u7aef\u4f7f\u7528 authlib-injector \u4e00\u6837\uff09\uff0c\u4f46\u662f\u672c\u6587\u4e0d\u4ecb\u7ecd\u8fd9\u79cd\u505a\u6cd5\u3002")),(0,n.kt)("h3",m({},{id:"hmcl-\u542f\u52a8\u5668\u793a\u4f8b"}),"HMCL \u542f\u52a8\u5668\u793a\u4f8b"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u4ee5 HMCL 3.5 \u4e3a\u4f8b\uff0c\u6f14\u793a\u5728 Minecraft \u5ba2\u6237\u7aef\u4e2d\u4f7f\u7528 Yggdrasil\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u6253\u5f00 HMCL 3.5 \u7684\u300c\u65b0\u5efa\u6e38\u620f\u8d26\u6237\u300d\u754c\u9762\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image.png",src:a(1847).Z,width:"818",height:"508"})),(0,n.kt)("ol",m({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u5de6\u4e0b\u89d2\u7684\u300c\u6dfb\u52a0\u8ba4\u8bc1\u670d\u52a1\u5668\u300d\uff0c\u8f93\u5165 VlssuSkin \u7684 Yggdrasil API \u5730\u5740\uff0c\u70b9\u51fb\u300c\u4e0b\u4e00\u6b65\u300d\uff0c\u7b49\u5f85\u8bc6\u522b\u51fa VlssuSkin \u7684 Yggdrasil \u540e\u70b9\u51fb\u300c\u5b8c\u6210\u300d\u3002\n\u5982\u679c\u4f60\u66fe\u7ecf\u6dfb\u52a0\u8fc7 VlssuSkin \u7684 Yggdrasil\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5728\u300c\u6dfb\u52a0\u8d26\u6237\u300d\u83dc\u5355\u4e2d\u76f4\u63a5\u9009\u62e9 VlssuSkin\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image.png",src:a(5705).Z,width:"818",height:"508"}),"\n",(0,n.kt)("img",{alt:"image.png",src:a(5312).Z,width:"818",height:"508"})),(0,n.kt)("ol",m({},{start:3}),(0,n.kt)("li",{parentName:"ol"},"\u5728\u300c\u6dfb\u52a0\u8d26\u6237\u300d\u83dc\u5355\u4e2d\u9009\u62e9 VlssuSkin\uff0c\u586b\u5199\u4f60\u7684\u90ae\u7bb1\u548c\u5bc6\u7801\u3002\u300c\u7528\u6237\u540d\u300d\u5373\u4e3a\u4f60\u5728 VlssuSkin \u7684\u8d26\u53f7\u7684\u90ae\u7bb1\u3002\n\u5982\u679c\u4f60\u53ea\u6dfb\u52a0\u4e86\u4e00\u4e2a\u8ba4\u8bc1\u670d\u52a1\u5668\uff0c\u90a3\u4e48 HMCL 3.5 \u4f1a\u9ed8\u8ba4\u9009\u4e2d\u90a3\u4e2a\u552f\u4e00\u7684\u8ba4\u8bc1\u670d\u52a1\u5668\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image.png",src:a(5696).Z,width:"818",height:"508"})),(0,n.kt)("ol",m({},{start:4}),(0,n.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u5b8c\u6210\u5566\uff01\u4f60\u53ef\u4ee5\u542f\u52a8\u6e38\u620f\u4e86\u3002")),(0,n.kt)("h3",m({},{id:"pcl-\u542f\u52a8\u5668\u793a\u4f8b"}),"PCL \u542f\u52a8\u5668\u793a\u4f8b"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u4ee5 PCL 2 \u4e3a\u4f8b\uff0c\u6f14\u793a\u5728 Minecraft \u5ba2\u6237\u7aef\u4e2d\u4f7f\u7528 Yggdrasil\u3002"),(0,n.kt)("admonition",m({},{title:"\u5c0f\u5c0f\u7684\u5efa\u8bae",type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"\u8be5\u542f\u52a8\u5668\u53ef\u80fd\u5b58\u5728\u53cd\u4eba\u7c7b\u8bbe\u8ba1\u6216\u5176\u4ed6\u4e00\u4e9b\u539f\u56e0\uff0c\u5728\u6b64\u6211\u4eec\u4e0d\u592a\u63a8\u8350\u4f7f\u7528\u6b64\u542f\u52a8\u5668\uff0c\u5efa\u8bae\u4f7f\u7528\u5176\u4ed6\u542f\u52a8\u5668\u3002",(0,n.kt)("strong",{parentName:"p"},"\u5982\u679c\u60a8\u89c9\u5f97\u6b64\u63d0\u793a\u4e0d\u5f53\uff0c\u8bf7\u65e0\u89c6\u6b64\u63d0\u793a\u3002"))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u6253\u5f00 PCL 2 \u7684\u300c\u7248\u672c\u8bbe\u7f6e\u300d\u754c\u9762\u3002\u5982\u679c\u8fd9\u662f\u4f60\u7b2c\u4e00\u6b21\u6253\u5f00 PCL 2\uff0c\u8bf7\u5148\u4e0b\u8f7d\u4f60\u60f3\u73a9\u7684\u7248\u672c(\u6216\u670d\u52a1\u5668\u6240\u9700\u7248\u672c)\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u7248\u672c\u8bbe\u7f6e",src:a(4965).Z,width:"878",height:"490"})),(0,n.kt)("ol",m({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u300c\u8bbe\u7f6e\u300d\u5f80\u4e0b\u62c9\u52a8\u4f1a\u770b\u89c1\u300c\u670d\u52a1\u5668\u9009\u9879\u300d\uff0c\u5728\u300c\u767b\u9646\u65b9\u5f0f\u300d\u4e00\u680f\u9009\u62e9\u300c\u7b2c\u4e09\u65b9\u767b\u5f55\uff1aAuthlib-lnjector\u300d\uff0c\u4e0b\u9762\u4f1a\u5f39\u51fa\u300c\u8ba4\u8bc1\u670d\u52a1\u5668\u300d\u7b49\u4e00\u7cfb\u5217\u9009\u9879\u3002\u8f93\u5165 VlssuSkin \u7684 Yggdrasil API \u5730\u5740\u7b49\u4fe1\u606f\u3002")),(0,n.kt)("p",null,"\u7531\u4e8ePCL2\u4f5c\u8005\u8bbe\u8ba1\u539f\u56e0\uff0c\u6bcf\u73a9\u4e00\u4e2a\u65b0\u7248\u672c\u90fd\u9700\u8981\u5982\u6b64\u8bbe\u7f6e"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"\u767b\u9646\u65b9\u5f0f    \u7b2c\u4e09\u65b9\u767b\u5f55\uff1aAuthlib-lnjector\n\u8ba4\u8bc1\u670d\u52a1\u5668  https://skin.vlssu.com/api/yggdrasil\n\u6ce8\u518c\u94fe\u63a5    https://skin.vlssu.com/auth/register\n\u670d\u52a1\u5668\u540d\u79f0  VlssuSkin\n")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(4153).Z,width:"878",height:"886"})),(0,n.kt)("admonition",m({},{type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"\u5728\u65b0\u7248 PCL \u8fd9\u91cc\u5de6\u4e0b\u89d2\u4f1a\u6709\u300c\u8bbe\u7f6e\u4e3a Little Skin\u300d\uff0c",(0,n.kt)("strong",{parentName:"p"},"\u8bf7\u4e0d\u8981\u70b9\u51fb\uff0c\u76f4\u63a5\u5de6\u4e0a\u89d2\u70b9\u8fd4\u56de\u5373\u53ef"),"\u3002")),(0,n.kt)("ol",m({},{start:3}),(0,n.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u597d\u540e\u4e3b\u9875\u4e0d\u51fa\u610f\u5916\u5df2\u7ecf\u81ea\u52a8\u53d8\u6210VlssuSkin\u8bbe\u7f6e\u754c\u9762\u4e86\uff0c\u5728\u4e0b\u65b9\u586b\u5199\u4f60\u7684\u90ae\u7bb1\u548c\u5bc6\u7801\u3002\u300c\u8d26\u6237\u300d\u5373\u4e3a\u4f60\u5728 VlssuSkin \u7684\u8d26\u53f7\u7684\u90ae\u7bb1\u3002\n\u56e0PCL2\u4f5c\u8005\u8bbe\u8ba1\u539f\u56e0\uff0c\u8ba4\u8bc1\u670d\u52a1\u5668\u53ea\u80fd\u8bbe\u7f6e\u4e00\u4e2a\uff0c\u5728\u4e0d\u66f4\u6539(\u6ca1\u6709\u8f93\u9519)\u7684\u60c5\u51b5\u4e0b\uff0c\u90a3 VlssuSkin \u5c31\u662f\u542f\u52a8\u5668\u552f\u4e00\u7684\u8ba4\u8bc1\u670d\u52a1\u5668")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(9499).Z,width:"878",height:"491"})),(0,n.kt)("ol",m({},{start:4}),(0,n.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u5b8c\u6210\u5566\uff01\u4f60\u53ef\u4ee5\u76f4\u63a5\u70b9\u300c\u542f\u52a8\u6e38\u620f\u300d\u4e86\uff0c\u8d26\u6237\u4f1a\u76f4\u63a5\u767b\u5f55\u3002")),(0,n.kt)("h3",m({},{id:"\u6b63\u7248-\u542f\u52a8\u5668\u793a\u4f8b"}),"\u6b63\u7248 \u542f\u52a8\u5668\u793a\u4f8b"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u4ee5 Minecraft Launcher \u4e3a\u4f8b\uff0c\u6f14\u793a\u5728 Minecraft \u5ba2\u6237\u7aef\u4e2d\u4f7f\u7528 Yggdrasil\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u9996\u5148\u4f60\u5f97\u662f\u6b63\u7248\uff0c\u7136\u540e\u518d\u76ae\u80a4\u7ad9\u7ed1\u5b9a\u6b63\u7248\uff0c\u5982\u53d1\u73b0\u8fdb\u4e0d\u53bb\uff0c\u53ef\u4ee5\u53bb\u76ae\u80a4\u7ad9\u7684",(0,n.kt)("a",m({parentName:"li"},{href:"https://skin.vlssu.com/user/profile"}),"\u4e2a\u4eba\u8d44\u6599"),"\u53f3\u4e0a\u89d2\u8fdb\u884c\u66f4\u65b0",(0,n.kt)("strong",{parentName:"li"},"UUID"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"An image",src:a(2693).Z,width:"824",height:"338"})),(0,n.kt)("ol",m({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"\u9700\u8981\u5148\u4e0b\u8f7d ",(0,n.kt)("a",m({parentName:"li"},{href:"https://authlib-injector.yushi.moe/~download/"}),(0,n.kt)("inlineCode",{parentName:"a"},"authlib-injector.jar"))," \u5e76\u653e\u5728\u4f60\u7684\u6e38\u620f\u6587\u4ef6\u7684\u6839\u76ee\u5f55\u4e5f\u5c31\u662f ",(0,n.kt)("inlineCode",{parentName:"li"},".minecraft")," \u6587\u4ef6\u5939\u91cc\uff08\u5b9e\u9645\u968f\u4f60\u653e\u54ea\uff09")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"An image",src:a(8626).Z,width:"1117",height:"590"})),(0,n.kt)("ol",m({},{start:3}),(0,n.kt)("li",{parentName:"ol"},"\u7136\u540e\u6253\u5f00\u6b63\u7248\u542f\u52a8\u5668\u7684JVM\u53c2\u6570\u8fdb\u884c\u8bbe\u7f6e")),(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"\u8bbe\u7f6e\u53c2\u6570",label:"\u8bbe\u7f6e\u53c2\u6570",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-js"}),"-javaagent:{\u7edd\u5bf9\u4f4d\u7f6e\\authlib-injector.jar}=https://skin.vlssu.com/api/yggdrasil\n"))),(0,n.kt)(l.Z,{value:"\u8fd9\u662f\u6211\u7684\u53c2\u6570",label:"\u8fd9\u662f\u6211\u7684\u53c2\u6570",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-js"}),"-javaagent:C:\\Users\\vlssu\\AppData\\Roaming\\.minecraft\\authlib-injector.jar=https://skin.vlssu.com/api/yggdrasil -Xmx8G -XX:+UnlockExperimentalVMOptions -XX:+UseG1GC -XX:G1NewSizePercent=20 -XX:G1ReservePercent=20 -XX:MaxGCPauseMillis=50 -XX:G1HeapRegionSize=32M\n")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"An image",src:a(620).Z,width:"1016",height:"639"})),(0,n.kt)("ol",m({},{start:4}),(0,n.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u5b8c\u6210\u5566\uff01\u4f60\u53ef\u4ee5\u542f\u52a8\u6e38\u620f\u4e86\u3002")),(0,n.kt)("h2",m({},{id:"\u53c2\u8003\u94fe\u63a5"}),"\u53c2\u8003\u94fe\u63a5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/bs-community/yggdrasil-api/wiki/0x03-%E9%85%8D%E5%90%88-authlib-injector-%E4%BD%BF%E7%94%A8"}),"\u914d\u5408 authlib-injector \u4f7f\u7528"))))}y.isMDXComponent=!0},1847:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/y1-1e9e432edaebf92234f14d725ec776a3.png"},620:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/y10-a99ddb08873704743f258b61687eb67d.png"},5705:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/y2-64ba226a97a5a3cf8eb0502b7b163feb.png"},5312:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/y3-e214c6f8ec425c506d4f6d058a622bdd.png"},5696:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/y4-e7028fc369d40ab2d3b5748938a29722.png"},4965:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/y5-981d063d00a7441585e09c272d1ae762.png"},4153:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/y6-09a558e8b94ea6887be40a430dd706a0.png"},9499:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/y7-d2511a3f71b59ba6c88138a00e0903cc.png"},2693:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/y8-fe73a23522099c54a3c42b9337ede168.png"},8626:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/y9-9598dd02e1cbf2042568ca65ed27f6c6.png"}}]);