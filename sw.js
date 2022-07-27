(()=>{"use strict";var e={6:()=>{try{self["workbox:core:6.5.2"]&&_()}catch(e){}},206:()=>{try{self["workbox:precaching:6.5.2"]&&_()}catch(e){}},175:()=>{try{self["workbox:routing:6.5.2"]&&_()}catch(e){}},343:()=>{try{self["workbox:strategies:6.5.2"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(6);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(206);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(343);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(175);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"34524a84b0f609a5664dfc42c1e4816f","url":"__docusaurus/debug.html"},{"revision":"4f5a86f1b8b5dfd9acda98055963a32a","url":"__docusaurus/debug/config.html"},{"revision":"512e93a5f1d44c903adb40d715db3d23","url":"__docusaurus/debug/content.html"},{"revision":"96875fd3c2fae53ff32618f4144176c1","url":"__docusaurus/debug/globalData.html"},{"revision":"02f4a40e06e0b59d83aeaeb2b330420c","url":"__docusaurus/debug/metadata.html"},{"revision":"7538643b9244f233a7a20e5cbdeb21fe","url":"__docusaurus/debug/registry.html"},{"revision":"98d482e655879f2924da0a5cd4d8329e","url":"__docusaurus/debug/routes.html"},{"revision":"3affe44d5173fad1927d0637695dd766","url":"404.html"},{"revision":"6d2886a6c6dc68c0dbc43fb684a3abf3","url":"assets/css/styles.d0dcae49.css"},{"revision":"00db36452c26fb3aaf753749dc683666","url":"assets/js/100f3b11.68a023db.js"},{"revision":"c0afd7fc15554712d60f98ece751c447","url":"assets/js/146891a0.f30675cb.js"},{"revision":"29e24e555666e2f246085d0d0d5db62a","url":"assets/js/14d0eace.8609fec3.js"},{"revision":"76e763cb668f3e4dfd29c9aa5f686c4d","url":"assets/js/1571.9a4159c7.js"},{"revision":"75ab12c4571d5bd86521b7447510da29","url":"assets/js/17896441.c4ab573a.js"},{"revision":"fb9c3aea7938288920dfa9af48fccf94","url":"assets/js/1a4e3797.948c4b66.js"},{"revision":"f3e77e2766bfce498d615919eabdbcba","url":"assets/js/1be78505.04351996.js"},{"revision":"a5efd2fad4d232913c99d9dddafa4f88","url":"assets/js/1cb8e563.db83eb92.js"},{"revision":"56d369ddb540d87e88853889a6c660fb","url":"assets/js/1df93b7f.90fc2092.js"},{"revision":"3ee6ec7a8734dbd3f37ca3dea290b433","url":"assets/js/23abe487.b4274f00.js"},{"revision":"49735c71ae23d437d985191b6afc7117","url":"assets/js/246f2c6f.866249d2.js"},{"revision":"fe535e74498945a0c63fd1991b08bf5c","url":"assets/js/31389f65.bcaa46c5.js"},{"revision":"f941b037ad0d107692a1fe27fe36cef9","url":"assets/js/408.3f3d1b5f.js"},{"revision":"d0b47fd793b8abc5f393edf0652310ba","url":"assets/js/4139.86704372.js"},{"revision":"4ca683d92d7c6407b42e7c20c131a84f","url":"assets/js/428bf6b8.63254d51.js"},{"revision":"3a8370d167b24e8b6343aad64d654474","url":"assets/js/576a2519.5d5d4865.js"},{"revision":"b6aef261b6ddc0e6b8d0222b44d401ca","url":"assets/js/58cb887f.dc14823d.js"},{"revision":"d4c23aa13a84bb574f852df25c91cf23","url":"assets/js/6116.3eb6f60d.js"},{"revision":"9a1372b12b657cf286fca3c88c224f2f","url":"assets/js/6248.d17eb18e.js"},{"revision":"0bc42130827c99b904454df666e11454","url":"assets/js/6364de16.de2ef8a5.js"},{"revision":"27e76698168a9476ebb2508a71b15e31","url":"assets/js/63be92f4.7f6f0818.js"},{"revision":"08a18b1d92b207646299eaaeb35a85f1","url":"assets/js/6505.b6f63aab.js"},{"revision":"bf5446bfbbe01beb203e56566fcb18bd","url":"assets/js/659355db.35ae2b11.js"},{"revision":"360aab08b57270fd3db1859c62f8197e","url":"assets/js/6794d4cd.b4ef641d.js"},{"revision":"5a54c45fcc8e0fe13e696d3a6ffdb53b","url":"assets/js/68e633d4.72a034b0.js"},{"revision":"93baa96d5a7b37085e837e5b6e3c4a14","url":"assets/js/72d6d5c3.6aef0467.js"},{"revision":"dbf18d4b6ca17b0621b239593b6293e6","url":"assets/js/754a694e.91790856.js"},{"revision":"4bfdf8cb80c976797537f55deea74b8a","url":"assets/js/7735.e5ed6465.js"},{"revision":"7d5d1c469a36e4ab2fc36fae9ea7f6c7","url":"assets/js/7841c085.14dfb278.js"},{"revision":"22a47d426d8c2b31a0a67f17c5d13b33","url":"assets/js/82437be0.7f47b201.js"},{"revision":"b82fb1a4392e3893c8670a7445e41ecd","url":"assets/js/8390.937cbe86.js"},{"revision":"87c32595682a2d2372c02f5758f35dfe","url":"assets/js/843abcdb.f06a4a83.js"},{"revision":"b39c651d2d387295cc054f5d5f1dfeb6","url":"assets/js/86bfae87.cc1c1c16.js"},{"revision":"a274074a5c3f0d41e6f4a469bec713f2","url":"assets/js/87eace82.ef9a8ca1.js"},{"revision":"35d6657b24f4dc234b704fc1192d291c","url":"assets/js/8ac32ba1.521e0e25.js"},{"revision":"c4a25d1749273d557d9a5424535a33a5","url":"assets/js/8c50d7e0.9642c770.js"},{"revision":"6e117873c32f7fd520cebb1107cfd457","url":"assets/js/946bd85a.9d7bc074.js"},{"revision":"fe211fe78e603ca354af92d5509d281c","url":"assets/js/9663.17c48c62.js"},{"revision":"fd2f7e8f578d9c984832b753544d7e43","url":"assets/js/9a9c78bf.4abcd04d.js"},{"revision":"369a0aa9fce7f7e75e0260625d41caf0","url":"assets/js/a3470f84.2445f57f.js"},{"revision":"2a862842cbceaf391a019e8d5d0ddc9d","url":"assets/js/a518d338.adccff9e.js"},{"revision":"9e717cb151ec9bc29dc7160c7d46037c","url":"assets/js/a69d75ad.a10c0cc7.js"},{"revision":"63c1d7298d36b5d03a8f884022a6a12b","url":"assets/js/af39b1a1.479376a0.js"},{"revision":"dac97e33c9474147bdf8dadb08fbae57","url":"assets/js/b9603c68.6992ff80.js"},{"revision":"d3be8e42883c3078dc2fe82efb9dc9f6","url":"assets/js/ba8b3534.3b11dae0.js"},{"revision":"522391461a2ba90fc527764234fe7bcc","url":"assets/js/bd370d9d.6b2dfed7.js"},{"revision":"365919d8862bbc09869d5828f89f3f78","url":"assets/js/c1eafa19.01588d4b.js"},{"revision":"529a07d737a69c35c54707e0379750b1","url":"assets/js/cb3f72b6.16e6e456.js"},{"revision":"3a4a04ae1c5cf34f2e1e3f2b4cdad843","url":"assets/js/cb3fd989.9eee18db.js"},{"revision":"d63f99813e92e81fba9206f1bf4b40e8","url":"assets/js/cc99a760.fa8b3057.js"},{"revision":"ecfbbd6ab3bdc15a8b46f63e59d967b6","url":"assets/js/ce5217b5.ffcc288e.js"},{"revision":"98aa9660f4fa4c55d757b9197c55fca5","url":"assets/js/cf75b345.6e9e6569.js"},{"revision":"978336e52caa7a5510242dced555c461","url":"assets/js/dae1ef6e.99176560.js"},{"revision":"a99baf5162023f89f384012bf91d6109","url":"assets/js/df538fd9.e63ea225.js"},{"revision":"4bd94662ba9f459b990c1a7731600f23","url":"assets/js/eb292d8e.95410b1b.js"},{"revision":"5a3afe248c17304b29b82abe4a575249","url":"assets/js/ed68828c.bc423db3.js"},{"revision":"efdffd74b8241f14f7a35287edce747e","url":"assets/js/ed6efced.63ecdcbd.js"},{"revision":"dd6c4e9ab8fe15ba56c8eed8525928b4","url":"assets/js/ede3a018.8bc7126a.js"},{"revision":"69327b4107f1366c8979a3b72ba797f5","url":"assets/js/f26e2a8b.fc1ad889.js"},{"revision":"793d60102e430afe4759927fb63b82a1","url":"assets/js/f94171ea.0b964b3b.js"},{"revision":"d97a6a5058b091e539f8fd70320027fc","url":"assets/js/ff78808e.22a05373.js"},{"revision":"63d99358b1c5fbdd1321ae8d7c4391b7","url":"assets/js/main.56ae6177.js"},{"revision":"8ef34338dceb4ccfc8fcfb00e024cdc5","url":"assets/js/runtime~main.d9c1e25b.js"},{"revision":"93b1e66b223a24455bc3be7600655966","url":"index.html"},{"revision":"5f380a981c72b5ef35223b0260da79fb","url":"manifest.json"},{"revision":"9524649a8ab3ffa324b7a674ae59e9c0","url":"mcserver.html"},{"revision":"da60899ab057cef53d94b2292374d64b","url":"mcserver/faq.html"},{"revision":"f5b6a88d6a1e51e22c1108085e5e1b48","url":"mcserver/sponsor.html"},{"revision":"a7f04a7dadc9371c0a3f076e8f22462c","url":"mcserver/SUMMARY.html"},{"revision":"f8b7a7674c9967c4cda5aa71cc8ce459","url":"mcserver/summary/java-summary.html"},{"revision":"0652fd2f7e3a912c641c41abd8ab2039","url":"mcserver/summary/pe-summary.html"},{"revision":"770a990a579fadc9b568e452154c0cf5","url":"mcserver/summary/server.html"},{"revision":"c4ef4166947f8e4a00205784d2c0d6b5","url":"mcserver/summary/server/beta-survive.html"},{"revision":"42aafdd6a71406c2155d5b7061fb72cf","url":"mcserver/summary/server/bmss.html"},{"revision":"0dab7a0bf2f2522493effef48bf73967","url":"mcserver/summary/server/bskyblock.html"},{"revision":"0e4d48d5c9a3ab34ba802e1de9098e77","url":"mcserver/summary/server/creative.html"},{"revision":"237829f40bbc86a856ce02d224f5ddf7","url":"mcserver/summary/server/electricity.html"},{"revision":"aa0063ecec847c5e19fbcaba6499f238","url":"mcserver/summary/server/login.html"},{"revision":"030704ea30f7764f49a1c69125127ce5","url":"mcserver/summary/server/mod-server.html"},{"revision":"dca0fc5fe99fbc517e95cb59d305e1e3","url":"mcserver/summary/server/survive.html"},{"revision":"0d99c97e0a8a2a8651904f57d37a99e6","url":"mcserver/tutorials/configuring-client.html"},{"revision":"f68b1eb5b5fa5633e30c4c49d4530bf9","url":"mcserver/tutorials/configuring-client/hmcl.html"},{"revision":"0d1e3f81ee34081ce4e78c0a56165aa6","url":"mcserver/tutorials/configuring-client/minecraft-launcher.html"},{"revision":"90b3bc0b31ab4b20c066b9cd4135e2a0","url":"mcserver/tutorials/configuring-client/pcl.html"},{"revision":"bb798c13af1679ae88dad77de2e60d0e","url":"mcserver/tutorials/configuring-client/pe.html"},{"revision":"211da90b7384f5ee925c233ca636460f","url":"mcserver/tutorials/reg-skin-station.html"},{"revision":"955a71590f15ce9a8f544c70fb564f88","url":"search.html"},{"revision":"bba77f5a361a05e5c67677b596300e2e","url":"vlssuskin.html"},{"revision":"f68d0177a22667a801bb2984ea87cf2e","url":"vlssuskin/advanced-usage/api.html"},{"revision":"87fd94b2b57214f82a908e4b35fb6262","url":"vlssuskin/advanced-usage/flarum.html"},{"revision":"93713cb8472d9b99647671e266af4afd","url":"vlssuskin/advanced-usage/oauth2.html"},{"revision":"5b006d63ace104fc8bccf81f5ad945b9","url":"vlssuskin/advanced-usage/Yggdrasil.html"},{"revision":"879ca892eac8d4994420613c0988fe7f","url":"vlssuskin/faq.html"},{"revision":"33101572a950f92621e5f22582b52886","url":"vlssuskin/newbee-guide/create-player.html"},{"revision":"ca8c5c6f55beb5aab3225ececa3ee03d","url":"vlssuskin/newbee-guide/install-mod.html"},{"revision":"baa80e78f6b888b97c5d5b020df98b1d","url":"vlssuskin/newbee-guide/set-textures.html"},{"revision":"8a502c0f43f6e06688b9dd4e3b8b4e31","url":"vlssuskin/policies/privacy.html"},{"revision":"b5276614fdb2a6f1ca5475bf7fb98bf6","url":"vlssuskin/policies/tos.html"},{"revision":"c5ea1df17089e452834942f64bbb6cf6","url":"vlssuskin/score.html"},{"revision":"8f6f28095844152c269183dcd3d0273b","url":"vlssuskin/vps.html"},{"revision":"7c4823950f1e46da5c9c1798cbfed857","url":"assets/images/cp1-ff24e4c3641e5ff3bc173b93be88be4b.png"},{"revision":"1120bb91f7e536d0d7e15bebc61d6e6b","url":"assets/images/cp2-9dc472e769bc22b2f6cc8b84a6d4f1cb.png"},{"revision":"5eca3a971b889354cd988eff8ea5170d","url":"assets/images/Error-occurred-1bbdd48a538d0bc2d8ff6d6f107270d1.png"},{"revision":"919f80b2e6ca1cc10e28632c784985d3","url":"assets/images/f1-ad202661a26df8223870a91a8a8480e3.png"},{"revision":"18438bd314433ff58bffb0e4590f2bdf","url":"assets/images/f10-6ff6007f9c05476bdffeaa9716d7b755.png"},{"revision":"edf8c71db6ee5917dea4b490b0d2a0cf","url":"assets/images/f3-238fb6c876266364a9c939df1e8cf52f.png"},{"revision":"f3f209fffd2946ae9fd4df4dff70beca","url":"assets/images/f4-da4821d6d3dfea6b279dc0d8064a1268.png"},{"revision":"a5181cf8f9a3168dbf58e0128e534df2","url":"assets/images/f5-2a2507c093347b86c8a0b66637ebed79.png"},{"revision":"52fd58864bf33eae9c6adeb49a09e524","url":"assets/images/f7-19376f4c664bac6bc5ba8bba7dc5c43c.png"},{"revision":"edbcd071cfbbd93bbbeff0e60516cf6e","url":"assets/images/f8-ee84a4a7806f06c0979901f8b500abe5.png"},{"revision":"71e7cf9ebe4b140e837ec88fec576368","url":"assets/images/f9-ec19f64f06ed349b9102768e6dc40122.png"},{"revision":"2df40ff356b413c3b3413c013d325e6d","url":"assets/images/HMCLR1-c722ad220a77f348216cd5d7ebbf0415.png"},{"revision":"dbc466bb318d923af60a9c111f299bb3","url":"assets/images/HMCLR2-ddd12064144f7ae4ce9ffe786fba941a.png"},{"revision":"00c607f94700cfeb0957ed0030861d45","url":"assets/images/HMCLR3-d8926ff1741dfbe738d6d02df3fd3e6c.png"},{"revision":"94aa60bb3ac3bc8643049302df6e95a1","url":"assets/images/HMCLR4-629873f50d064829b59f930473ecb05d.png"},{"revision":"09aaba18242a2174d7b382413e5c0ea4","url":"assets/images/image-4ef87c2e80772639cf24159111ed231c.png"},{"revision":"45cf6dc6f1109e9ab1a7fb0cc0af08ef","url":"assets/images/io.netty-e5132a8aa9c81d5fbdab312ab23ee3b4.png"},{"revision":"38f59f5ce85980d8cd4be8f77db1f89b","url":"assets/images/ml1-d7d6922894572195fec463ce17ca6230.jpg"},{"revision":"76c93950a9be43b628deb620fe84b882","url":"assets/images/ml2-bde92400eb470a3044ed45f8efd3cb2a.jpg"},{"revision":"e319fd928412ad4507e6bd1d3b8cdd58","url":"assets/images/ml3-32f47d9f7b3e904b6c6de7b737c53d43.jpg"},{"revision":"9ec9219e39592703185329d607b574f9","url":"assets/images/o1-8f9424373bb9261e3d430963c475c672.png"},{"revision":"2195dfa1be873f0b333afe32903bf87c","url":"assets/images/o2-34d99f5e6ad25fb8247d6012c2cab60e.png"},{"revision":"91e90bde02c491cc0b730ce0c616959a","url":"assets/images/pcl1-f35772e8e5bd9cef202aef4fb5ee9933.jpg"},{"revision":"22cdc8d3bb1815f5d9cb720dd17009b4","url":"assets/images/pcl2-1cb95f18a615d96d5add06e0436ef962.jpg"},{"revision":"4e67f046d723d40b6db7acb7f143cae6","url":"assets/images/pcl3-ba5dc58d59290d04b5d3c424af49be1d.jpg"},{"revision":"0a4e86e001bac502c388f497159f742e","url":"assets/images/pe1-3db37cf727398ffb895893bd381fa3e9.jpg"},{"revision":"298c554a3c8aa1efe5b9b302614e474a","url":"assets/images/pe2-c32615d4ee1e2c5cb4e833da39c87866.jpg"},{"revision":"3c1823be0bb72436876cf1c56c8e57cf","url":"assets/images/st2-fe7494e18886246bb5ca03319141a8c2.png"},{"revision":"ce4db15373c9aa102c03d8953dd2c257","url":"assets/images/st3-8e8d1c83ce339b6ed5a3bda2d640f2a0.png"},{"revision":"ed71e282df06e0f0e5f25caee84a0b92","url":"assets/images/st4-f5044769710f2d067c01049d2c7d55a7.png"},{"revision":"812300271575e1dcc25c3297e607c0e3","url":"assets/images/st5-0c742750e0a2b10b8ade6988a22d3fbf.png"},{"revision":"9b7c7e381e69716a161a9fb47a65f8df","url":"assets/images/st6-a09088366fc5f39f56368d2e9b86b525.png"},{"revision":"7c4174aa35a5248febebaf4a260274db","url":"assets/images/st7-9e66c4550c21033c420c0e2974c009c4.png"},{"revision":"77640830c45b83c2dad2230fd0d1eb40","url":"assets/images/tm1-55d374f6f256e3e2d0659a5be1b8e145.jpg"},{"revision":"854dbf6d36c131ab1984cb7e474e0e23","url":"assets/images/tm2-0b5faa60927e818bdec807e4351834f9.jpg"},{"revision":"fd0e4a9daa047ad0c4595652c3b5ab3e","url":"assets/images/tm3-496e286d1dbc6e51374d35a972a50cd9.jpg"},{"revision":"323f8e668a87031fa870ff5fc038ca05","url":"assets/images/Unknown-host-bee9038d6b5efe19e8241a943aefc03c.png"},{"revision":"40f6752ad28578b7d28be855a80ccdd9","url":"assets/images/vlssu历史线.drawio-4af8966b63389f1ca165449ee7a2e361.svg"},{"revision":"b1480ef282d2dff21794d40ddfecb01b","url":"assets/images/vps-5adb9ba402905c81d3ad1f6f77e22cb8.png"},{"revision":"2df40ff356b413c3b3413c013d325e6d","url":"assets/images/y1-c722ad220a77f348216cd5d7ebbf0415.png"},{"revision":"a82a869a741e14addc01a99655d1667c","url":"assets/images/y10-da20a4574ff729bf8a7d4d5ac1a9a402.png"},{"revision":"dbc466bb318d923af60a9c111f299bb3","url":"assets/images/y2-ddd12064144f7ae4ce9ffe786fba941a.png"},{"revision":"00c607f94700cfeb0957ed0030861d45","url":"assets/images/y3-d8926ff1741dfbe738d6d02df3fd3e6c.png"},{"revision":"94aa60bb3ac3bc8643049302df6e95a1","url":"assets/images/y4-629873f50d064829b59f930473ecb05d.png"},{"revision":"6ee496800632220c71a27f7501610b68","url":"assets/images/y5-89b9f3a7e223e52592fc2e7ef788b85e.png"},{"revision":"43e7be5b52f70da51370ed294d1c0763","url":"assets/images/y6-cf335b2a95ad862a04c1c8dbc569ad77.png"},{"revision":"80d526f9a3da7d1528ed8e64e7b7c995","url":"assets/images/y7-5d96ca9ad6d8e648585efe32f6e28fb9.png"},{"revision":"a7a4d32d7e329182953f8fdaf030d7fc","url":"assets/images/y8-8975aa85125c335bf16966705dc5f04b.png"},{"revision":"671276d27621bf6d69c4a221071fddc1","url":"assets/images/y9-96a0c4ea278c44985c23d29539e4ce68.png"},{"revision":"5b5149009c49823958d2ef1ad09bf50c","url":"assets/images/无效的登入凭据,请核查客户端外置登入配置或稍后重试-af907b28a5f848b53d8415853c787ace.png"},{"revision":"2f0df6ee1ff6efd1fbb8ee4b37f47d42","url":"assets/images/无法解析主机名-dfbf6107c1ff9416859dd734021f500f.png"},{"revision":"43da12c968142979e1329e66de55c053","url":"assets/images/无法验证用户名-5914663acb863757f8f3880a6fbdcfb9.png"},{"revision":"109e98ffe2e02cfa7e63369d4a121c10","url":"assets/images/登入失败：无效会话（请尝试重启游戏及启动器）-244ead3686a3bc843f1dacd8219fdf02.png"},{"revision":"ac90fca3ba03ec56167751aa299e9f40","url":"assets/images/登入失败Null-9d31ab0bc983d50e57b28d2e508f27da.png"},{"revision":"1ffa5234a5993026e030466a5288ced6","url":"assets/images/登入失败身份验证目前正在停机维护-aaafe3ea703e942a0a5f984859359538.png"},{"revision":"f2d7cd73ba1d8d2375dbd856fb640e2f","url":"img/favicon.ico"},{"revision":"aec653cbae6669582c2c3cae7f3cd098","url":"img/icons/icon-128x128.png"},{"revision":"6a71567486045e48873169a0dc0dd6bd","url":"img/icons/icon-144x144.png"},{"revision":"c3922747a56d1e57bc3c6ec96ab8fe12","url":"img/icons/icon-152x152.png"},{"revision":"775aeb16d15639013ceeea7930c520e4","url":"img/icons/icon-192x192.png"},{"revision":"15b4676db61cd903e6950b890dce9d3b","url":"img/icons/icon-384x384.png"},{"revision":"be75b00d4f817f2eff3d0a48160e6d07","url":"img/icons/icon-512x512.png"},{"revision":"42b8e10db719fd45b5a4d56cb57fc71c","url":"img/icons/icon-72x72.png"},{"revision":"0370a67da78835e7a3c75f733bdff5e4","url":"img/icons/icon-96x96.png"},{"revision":"17aa327002484349e4c087a638848d8f","url":"img/logo.svg"},{"revision":"d2a5e458907beccf251e9aeeaad40bbb","url":"img/og-image.png"},{"revision":"d2a5e458907beccf251e9aeeaad40bbb","url":"img/vlssu.png"},{"revision":"eea8a45e4d02c3c163a90a2a4743d37b","url":"assets/fonts/JetBrainsMono-Regular-d922fd933fc62eec7ec568cb006b4964.woff2"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();