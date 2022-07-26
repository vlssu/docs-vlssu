"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[584],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,v=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(v,o(o({ref:t},u),{},{components:n})):a.createElement(v,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8832:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return h},default:function(){return N},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return k}});var a=n(7462),r=n(3366),i=n(7294),o=n(3905),l=n(2389),c=n(3725),s=n(6010),u="tabItem_LplD";function m(e){var t,n,r,o=e.lazy,l=e.block,m=e.defaultValue,p=e.values,d=e.groupId,v=e.className,f=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,c.lx)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,c.UB)(),y=k.tabGroupChoices,N=k.setTabGroupChoices,w=(0,i.useState)(b),j=w[0],O=w[1],x=[],T=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var E=y[d];null!=E&&E!==j&&h.some((function(e){return e.value===E}))&&O(E)}var C=function(e){var t=e.currentTarget,n=x.indexOf(t),a=h[n].value;a!==j&&(T(t),O(a),null!=d&&N(d,a))},M=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},v)},h.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return x.push(e)},onKeyDown:M,onFocus:C,onClick:C},r,{className:(0,s.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),o?(0,i.cloneElement)(f.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function p(e){var t=(0,l.Z)();return i.createElement(m,(0,a.Z)({key:String(t)},e))}function d(e){var t=e.children,n=e.hidden,a=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}var v=["components"],f={sidebar_position:1},h="\u6b63\u7248\u542f\u52a8\u5668",g={unversionedId:"mcserver/tutorials/configuring-client/minecraft-launcher",id:"mcserver/tutorials/configuring-client/minecraft-launcher",title:"\u6b63\u7248\u542f\u52a8\u5668",description:"\u4ee5\u4e0b\u4ee5 Minecraft Launcher \u4e3a\u4f8b\uff0c\u6f14\u793a\u5728 Minecraft \u5ba2\u6237\u7aef\u4e2d\u4f7f\u7528 Yggdrasil",source:"@site/docs/mcserver/tutorials/configuring-client/minecraft-launcher.md",sourceDirName:"mcserver/tutorials/configuring-client",slug:"/mcserver/tutorials/configuring-client/minecraft-launcher",permalink:"/mcserver/tutorials/configuring-client/minecraft-launcher",editUrl:"https://github.com/vlssu/docs.vlssu.com/blob/master/docs/mcserver/tutorials/configuring-client/minecraft-launcher.md",tags:[],version:"current",lastUpdatedBy:"\u98d2\u723d\u5e08\u53d4",lastUpdatedAt:1658797871,formattedLastUpdatedAt:"2022/7/26",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"\u5982\u4f55\u914d\u7f6e\u5ba2\u6237\u7aef",permalink:"/mcserver/tutorials/configuring-client/"},next:{title:"HMCL\u542f\u52a8\u5668",permalink:"/mcserver/tutorials/configuring-client/hmcl"}},b={},k=[],y={toc:k};function N(e){var t=e.components,i=(0,r.Z)(e,v);return(0,o.kt)("wrapper",(0,a.Z)({},y,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6b63\u7248\u542f\u52a8\u5668"},"\u6b63\u7248\u542f\u52a8\u5668"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u4ee5 ",(0,o.kt)("a",{parentName:"p",href:"https://www.minecraft.net/zh-hans/download"},"Minecraft Launcher")," \u4e3a\u4f8b\uff0c\u6f14\u793a\u5728 Minecraft \u5ba2\u6237\u7aef\u4e2d\u4f7f\u7528 Yggdrasil"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u9996\u5148\u4f60\u5f97\u662f\u6b63\u7248\uff0c\u7136\u540e\u518d\u76ae\u80a4\u7ad9\u7ed1\u5b9a\u6b63\u7248\uff0c\u5982\u53d1\u73b0\u8fdb\u4e0d\u53bb\uff0c\u53ef\u4ee5\u53bb\u76ae\u80a4\u7ad9\u7684",(0,o.kt)("a",{parentName:"p",href:"https://skin.vlssu.com/user/profile"},"\u4e2a\u4eba\u8d44\u6599"),"\u53f3\u4e0a\u89d2\u8fdb\u884c\u66f4\u65b0",(0,o.kt)("strong",{parentName:"p"},"UUID")))),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"An image",src:n(5297).Z,width:"824",height:"338"})),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u9700\u8981\u5148\u4e0b\u8f7d",(0,o.kt)("inlineCode",{parentName:"p"},"authlib-injector.jar"),(0,o.kt)("a",{parentName:"p",href:"https://authlib-injector.yushi.moe/~download/"},"\u3010\u70b9\u51fb\u4e0b\u8f7d\u3011"),"\u5e76\u653e\u5728\u4f60\u7684\u6e38\u620f\u6587\u4ef6\u7684\u6839\u76ee\u5f55\u4e5f\u5c31\u662f",(0,o.kt)("inlineCode",{parentName:"p"},".minecraft"),"\u6587\u4ef6\u5939\u91cc\uff08\u5b9e\u9645\u968f\u4f60\u653e\u54ea\uff09"))),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"An image",src:n(3291).Z,width:"1117",height:"590"})),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u7136\u540e\u6253\u5f00\u6b63\u7248\u542f\u52a8\u5668\u7684JVM\u53c2\u6570\u8fdb\u884c\u8bbe\u7f6e"))),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"An image",src:n(1264).Z,width:"1016",height:"639"})),(0,o.kt)(p,{mdxType:"Tabs"},(0,o.kt)(d,{value:"\u8bbe\u7f6e\u53c2\u6570",label:"\u8bbe\u7f6e\u53c2\u6570",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"-javaagent:{\u7edd\u5bf9\u4f4d\u7f6e\\authlib-injector.jar}=https://skin.vlssu.com/api/yggdrasil\n"))),(0,o.kt)(d,{value:"\u8fd9\u662f\u6211\u7684\u53c2\u6570",label:"\u8fd9\u662f\u6211\u7684\u53c2\u6570",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"-javaagent:C:\\Users\\vlssu\\AppData\\Roaming\\.minecraft\\authlib-injector.jar=https://skin.vlssu.com/api/yggdrasil -Xmx8G -XX:+UnlockExperimentalVMOptions -XX:+UseG1GC -XX:G1NewSizePercent=20 -XX:G1ReservePercent=20 -XX:MaxGCPauseMillis=50 -XX:G1HeapRegionSize=32M\n")))))}N.isMDXComponent=!0},5297:function(e,t,n){t.Z=n.p+"assets/images/ml1-d7d6922894572195fec463ce17ca6230.jpg"},3291:function(e,t,n){t.Z=n.p+"assets/images/ml2-bde92400eb470a3044ed45f8efd3cb2a.jpg"},1264:function(e,t,n){t.Z=n.p+"assets/images/ml3-32f47d9f7b3e904b6c6de7b737c53d43.jpg"}}]);