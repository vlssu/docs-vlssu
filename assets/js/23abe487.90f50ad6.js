"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[911],{2126:(e,a,t)=>{t.r(a),t.d(a,{default:()=>r});var n=t(799),l=t(1122),o=t(796),s=t(6686);function r(){const{siteConfig:e}=(0,l.A)();return n.createElement(o.A,null,n.createElement("h2",null,"Site config"),n.createElement(s.A,{src:e,collapseDepth:3}))}},6686:(e,a,t)=>{t.d(a,{A:()=>V});var n=t(799);const l=e=>"boolean"==typeof e||e instanceof Boolean,o=e=>"number"==typeof e||e instanceof Number,s=e=>"bigint"==typeof e||e instanceof BigInt,r=e=>!!e&&e instanceof Date,c=e=>"string"==typeof e||e instanceof String,u=e=>Array.isArray(e),i=e=>e instanceof Object&&null!==e;let d=1;const m=()=>d++;function p(e){let{field:a,value:t,data:l,lastElement:o,openBracket:s,closeBracket:r,level:c,style:u,shouldExpandNode:i}=e;const d=(0,n.useRef)(!1),[p,E,_]=function(e){const[a,t]=(0,n.useState)(e());return[a,()=>t((e=>!e)),t]}((()=>i(c,t,a)));(0,n.useEffect)((()=>{d.current?_(i(c,t,a)):d.current=!0}),[i]);const b=p?u.collapseIcon:u.expandIcon,v=p?"collapse JSON":"expand JSON",g=function(){const e=(0,n.useRef)();return void 0===e.current&&(e.current=`:jsnvw:${m()}:`),e.current}(),y=c+1,N=l.length-1,h=e=>{" "===e.key&&E()};return(0,n.createElement)("div",{className:u.basicChildStyle,role:"list"},(0,n.createElement)("span",{className:b,onClick:E,onKeyDown:h,role:"button",tabIndex:0,"aria-label":v,"aria-expanded":p,"aria-controls":p?g:void 0}),a&&(0,n.createElement)("span",{className:u.label},a,":"),(0,n.createElement)("span",{className:u.punctuation},s),p?(0,n.createElement)("div",{id:g},l.map(((e,a)=>(0,n.createElement)(f,{key:e[0]||a,field:e[0],value:e[1],style:u,lastElement:a===N,level:y,shouldExpandNode:i})))):(0,n.createElement)("span",{className:u.collapsedContent,onClick:E,onKeyDown:h,role:"button",tabIndex:-1,"aria-hidden":!0,"aria-label":v,"aria-expanded":p}),(0,n.createElement)("span",{className:u.punctuation},r),!o&&(0,n.createElement)("span",{className:u.punctuation},","))}function E(e){let{field:a,value:t,style:n,lastElement:l,shouldExpandNode:o,level:s}=e;return p({field:a,value:t,lastElement:l||!1,level:s,openBracket:"{",closeBracket:"}",style:n,shouldExpandNode:o,data:Object.keys(t).map((e=>[e,t[e]]))})}function _(e){let{field:a,value:t,style:n,lastElement:l,level:o,shouldExpandNode:s}=e;return p({field:a,value:t,lastElement:l||!1,level:o,openBracket:"[",closeBracket:"]",style:n,shouldExpandNode:s,data:t.map((e=>[void 0,e]))})}function b(e){let{field:a,value:t,style:u,lastElement:i}=e,d=t,m=u.otherValue;return null===t?(d="null",m=u.nullValue):void 0===t?(d="undefined",m=u.undefinedValue):c(t)?(d=u.noQuotesForStringValues?t:`"${t}"`,m=u.stringValue):l(t)?(d=t?"true":"false",m=u.booleanValue):o(t)?(d=t.toString(),m=u.numberValue):s(t)?(d=`${t.toString()}n`,m=u.numberValue):d=r(t)?t.toISOString():t.toString(),""===a&&(a='""'),(0,n.createElement)("div",{className:u.basicChildStyle,role:"listitem"},a&&(0,n.createElement)("span",{className:u.label},a,":"),(0,n.createElement)("span",{className:m},d),!i&&(0,n.createElement)("span",{className:u.punctuation},","))}function f(e){const a=e.value;return u(a)?(0,n.createElement)(_,Object.assign({},e)):i(a)&&!r(a)?(0,n.createElement)(E,Object.assign({},e)):(0,n.createElement)(b,Object.assign({},e))}var v="_2bkNM";const g={container:"_2IvMF _GzYRV",basicChildStyle:v,label:"_1MGIk",nullValue:"_2T6PJ",undefinedValue:"_1Gho6",stringValue:"_vGjyY",booleanValue:"_3zQKs",numberValue:"_1bQdo",otherValue:"_1xvuR",punctuation:"_3uHL6 _3eOF8",collapseIcon:"_oLqym _f10Tu _1MFti _1LId0",expandIcon:"_2AXVT _f10Tu _1MFti _1UmXx",collapsedContent:"_2KJWg _1pNG9 _1MFti",noQuotesForStringValues:!1},y=()=>!0,N=e=>{let{data:a,style:t=g,shouldExpandNode:l=y}=e;return(0,n.createElement)("div",{className:t.container},(0,n.createElement)(f,{value:a,style:t,lastElement:!0,level:0,shouldExpandNode:l}))},h={container:"containerParaiso_LqC8",basicChildStyle:"basicElementParaiso_k27c",label:"labelParaiso_tTuU",nullValue:"nullValueParaiso_D_IM",undefinedValue:"undefinedValueParaiso_NuWM",stringValue:"stringValueParaiso_s7oT",booleanValue:"booleanValueParaiso_NF0X",numberValue:"numberValueParaiso_mxu_",otherValue:"otherValueParaiso_LnL5",punctuation:"punctuationParaiso_Q67L",collapseIcon:"collapseIconParaiso_fkSz",expandIcon:"expandIconParaiso_ratc",collapsedContent:"collapseContentParaiso_KRU0"};function V({src:e,collapseDepth:a}){return n.createElement(N,{data:e,shouldExpandNode:(e,t)=>Array.isArray(t)?t.length<5:void 0!==a&&e<a,style:h})}},796:(e,a,t)=>{t.d(a,{A:()=>c});var n=t(799),l=t(5636),o=t(526);const s={container:"container_uTlJ",nav:"nav_O7be",navlink:"navlink_H0zG",active:"active_LTVu"};function r({to:e,children:a}){return n.createElement(o.A,{className:s.navlink,isNavLink:!0,to:e,exact:!0,activeStyle:{backgroundColor:"#363739"}},a)}function c({children:e}){return n.createElement(n.Fragment,null,n.createElement(l.A,null,n.createElement("html",{lang:"en"}),n.createElement("title",null,"Docusaurus debug panel"),n.createElement("meta",{name:"robots",content:"noindex"})),n.createElement("div",null,n.createElement("nav",{className:s.nav},n.createElement(r,{to:"/__docusaurus/debug"},"Config"),n.createElement(r,{to:"/__docusaurus/debug/metadata"},"Metadata"),n.createElement(r,{to:"/__docusaurus/debug/registry"},"Registry"),n.createElement(r,{to:"/__docusaurus/debug/routes"},"Routes"),n.createElement(r,{to:"/__docusaurus/debug/content"},"Content"),n.createElement(r,{to:"/__docusaurus/debug/globalData"},"Global data")),n.createElement("main",{className:s.container},e)))}}}]);