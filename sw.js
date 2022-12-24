(()=>{"use strict";var e={6:()=>{try{self["workbox:core:6.5.2"]&&_()}catch(e){}},206:()=>{try{self["workbox:precaching:6.5.2"]&&_()}catch(e){}},175:()=>{try{self["workbox:routing:6.5.2"]&&_()}catch(e){}},343:()=>{try{self["workbox:strategies:6.5.2"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(6);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(206);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(343);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(175);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"6d6eeb52635c158c699add7d48605ceb","url":"__docusaurus/debug.html"},{"revision":"17bc40c24f2400d778e8ce499b88d73a","url":"__docusaurus/debug/config.html"},{"revision":"8b7260cb9f59f30bf2e67628b185cf64","url":"__docusaurus/debug/content.html"},{"revision":"f231c6255b6586b20dabd5e02ed5f213","url":"__docusaurus/debug/globalData.html"},{"revision":"2c86f4096e3741ef4425faf0d8e4cc0b","url":"__docusaurus/debug/metadata.html"},{"revision":"51f90493e0f6da7047d3ffff821a072f","url":"__docusaurus/debug/registry.html"},{"revision":"4fa97e235fa94b950d8f29861974bb42","url":"__docusaurus/debug/routes.html"},{"revision":"7ba283c41210fe04540a63904158c665","url":"404.html"},{"revision":"6d2886a6c6dc68c0dbc43fb684a3abf3","url":"assets/css/styles.d0dcae49.css"},{"revision":"7530865487d7ad4c89f1bf93426c0bc4","url":"assets/js/100f3b11.0ebb6ca5.js"},{"revision":"a10d9c01297edfe9a73c446afe114969","url":"assets/js/146891a0.b3f31538.js"},{"revision":"329d9b67b3df5ecf685051b6a4ef826d","url":"assets/js/14d0eace.975e480b.js"},{"revision":"76e763cb668f3e4dfd29c9aa5f686c4d","url":"assets/js/1571.9a4159c7.js"},{"revision":"75ab12c4571d5bd86521b7447510da29","url":"assets/js/17896441.c4ab573a.js"},{"revision":"fb9c3aea7938288920dfa9af48fccf94","url":"assets/js/1a4e3797.948c4b66.js"},{"revision":"f3e77e2766bfce498d615919eabdbcba","url":"assets/js/1be78505.04351996.js"},{"revision":"c43d3705fcfce46bb009e971ac8b7cee","url":"assets/js/1cb8e563.a64c4373.js"},{"revision":"56d369ddb540d87e88853889a6c660fb","url":"assets/js/1df93b7f.90fc2092.js"},{"revision":"3ee6ec7a8734dbd3f37ca3dea290b433","url":"assets/js/23abe487.b4274f00.js"},{"revision":"507bedfcc8956d417d0bda4e651f96a5","url":"assets/js/246f2c6f.d3b050f4.js"},{"revision":"fe535e74498945a0c63fd1991b08bf5c","url":"assets/js/31389f65.bcaa46c5.js"},{"revision":"f941b037ad0d107692a1fe27fe36cef9","url":"assets/js/408.3f3d1b5f.js"},{"revision":"d0b47fd793b8abc5f393edf0652310ba","url":"assets/js/4139.86704372.js"},{"revision":"097a24d2ffe749cdd0f23d68a121b459","url":"assets/js/428bf6b8.23c26bb2.js"},{"revision":"8cc35aeb2b4b9cd708c642bef1a3c3b0","url":"assets/js/576a2519.16af0c46.js"},{"revision":"cbb2c95b44e17ed2bab679e0ef59f4fb","url":"assets/js/58cb887f.8d3219ea.js"},{"revision":"d4c23aa13a84bb574f852df25c91cf23","url":"assets/js/6116.3eb6f60d.js"},{"revision":"9a1372b12b657cf286fca3c88c224f2f","url":"assets/js/6248.d17eb18e.js"},{"revision":"37632df9e06265cab3a6ebb2f82ae06d","url":"assets/js/6364de16.188b2278.js"},{"revision":"d9b32b1fd6067445a11775ba2e04cdea","url":"assets/js/63be92f4.43fb2308.js"},{"revision":"08a18b1d92b207646299eaaeb35a85f1","url":"assets/js/6505.b6f63aab.js"},{"revision":"bf5446bfbbe01beb203e56566fcb18bd","url":"assets/js/659355db.35ae2b11.js"},{"revision":"360aab08b57270fd3db1859c62f8197e","url":"assets/js/6794d4cd.b4ef641d.js"},{"revision":"5a54c45fcc8e0fe13e696d3a6ffdb53b","url":"assets/js/68e633d4.72a034b0.js"},{"revision":"93baa96d5a7b37085e837e5b6e3c4a14","url":"assets/js/72d6d5c3.6aef0467.js"},{"revision":"70c1c149da1a57511a8f4c8329120244","url":"assets/js/754a694e.b9336f6c.js"},{"revision":"4bfdf8cb80c976797537f55deea74b8a","url":"assets/js/7735.e5ed6465.js"},{"revision":"3ff151ed2d011c1bdded633bbcb5271a","url":"assets/js/7841c085.203bea55.js"},{"revision":"22a47d426d8c2b31a0a67f17c5d13b33","url":"assets/js/82437be0.7f47b201.js"},{"revision":"b82fb1a4392e3893c8670a7445e41ecd","url":"assets/js/8390.937cbe86.js"},{"revision":"0d60293f82813304282480819b06cc71","url":"assets/js/843abcdb.5f9715ce.js"},{"revision":"77b1455132640449f2f7db9d066515e7","url":"assets/js/86bfae87.33b32e64.js"},{"revision":"a274074a5c3f0d41e6f4a469bec713f2","url":"assets/js/87eace82.ef9a8ca1.js"},{"revision":"a45c4c9362409a44c4cd65d1da708837","url":"assets/js/8ac32ba1.4fc9e960.js"},{"revision":"4aad14d8face49bb5f0edc4ea9d7b15c","url":"assets/js/8c50d7e0.77687705.js"},{"revision":"6e117873c32f7fd520cebb1107cfd457","url":"assets/js/946bd85a.9d7bc074.js"},{"revision":"fe211fe78e603ca354af92d5509d281c","url":"assets/js/9663.17c48c62.js"},{"revision":"0d17b4bb46a23603a3cbd77792067a59","url":"assets/js/9a9c78bf.5baebc9d.js"},{"revision":"ca17ef88e416a1e888e6ac4ea529c03a","url":"assets/js/a3470f84.331a7f0d.js"},{"revision":"0a9f12b1c596c268f0a80800aa0f6895","url":"assets/js/a518d338.13dd3c2d.js"},{"revision":"50dc20582039bf0ce54ac71eb9de9bd8","url":"assets/js/a69d75ad.f3c82e7d.js"},{"revision":"644f91a32ad075d3b469ba8df0d6c997","url":"assets/js/af39b1a1.36c7e310.js"},{"revision":"96ff9e441fcedde99ea240d2352e163a","url":"assets/js/b9603c68.b40a2369.js"},{"revision":"d3be8e42883c3078dc2fe82efb9dc9f6","url":"assets/js/ba8b3534.3b11dae0.js"},{"revision":"eb9968392f71c86065ab86911e098a9b","url":"assets/js/bd370d9d.da2c0dfb.js"},{"revision":"b2be962c59245a0c0c7ae8d5f7dc8574","url":"assets/js/c1eafa19.b27d890d.js"},{"revision":"4e862b8beccf250505945d75799c5815","url":"assets/js/cb3f72b6.22641801.js"},{"revision":"737901d6d93b72a65fb27d526595d1c2","url":"assets/js/cb3fd989.2db287ac.js"},{"revision":"5a351407407c0bf44ca8987bb36e57b3","url":"assets/js/cc99a760.a079f3af.js"},{"revision":"3bccb56f245a765ed0609aaa04b792e7","url":"assets/js/ce5217b5.65aa6ea8.js"},{"revision":"2408bd3ac099f3fb8045564af81d2470","url":"assets/js/cf75b345.2ff66edd.js"},{"revision":"31892324ba1370ff238497ff42d5f0e5","url":"assets/js/dae1ef6e.6ce1ed1a.js"},{"revision":"a99baf5162023f89f384012bf91d6109","url":"assets/js/df538fd9.e63ea225.js"},{"revision":"0fde5d3fc9f5f0c82bb970e617466462","url":"assets/js/eb292d8e.71c08350.js"},{"revision":"685da4e08ee449e3e71c51f91e0b2bd3","url":"assets/js/ed68828c.48da93ae.js"},{"revision":"733d5026d9320e0b1b3e4115e752513b","url":"assets/js/ed6efced.f3e502d3.js"},{"revision":"dd6c4e9ab8fe15ba56c8eed8525928b4","url":"assets/js/ede3a018.8bc7126a.js"},{"revision":"027723c6428525e90f3a2fa0f7eec1e4","url":"assets/js/f26e2a8b.be95f8ce.js"},{"revision":"80b50c0a8578b2997db4af41bad67fa8","url":"assets/js/f94171ea.e401491e.js"},{"revision":"9e4c92598444190654797607e3001668","url":"assets/js/ff78808e.4d62661a.js"},{"revision":"63d99358b1c5fbdd1321ae8d7c4391b7","url":"assets/js/main.56ae6177.js"},{"revision":"eb0b406376361f5ebe763e4d78492715","url":"assets/js/runtime~main.d05728b7.js"},{"revision":"fb55d0b0adbc0cc17e3a77fc3c9b62bf","url":"index.html"},{"revision":"5f380a981c72b5ef35223b0260da79fb","url":"manifest.json"},{"revision":"197c38fdd673f6ba148074b551f9cc88","url":"mcserver.html"},{"revision":"2df45a0aa36cb296ebd19c05c0659590","url":"mcserver/faq.html"},{"revision":"abea187bf299cd388e26a6c7dde68a89","url":"mcserver/sponsor.html"},{"revision":"fa48322736d0f3196da5caeeb82acd01","url":"mcserver/SUMMARY.html"},{"revision":"5e2e5ddf93699d6cbcbe4cf16491db9a","url":"mcserver/summary/java-summary.html"},{"revision":"5bf9aa9067f0d18ecbe3aaa38292c82b","url":"mcserver/summary/pe-summary.html"},{"revision":"9fbb00b62f568f76d28790c2cdedc8d6","url":"mcserver/summary/server.html"},{"revision":"853dbed5f0823944b7bb74d1d80b85ff","url":"mcserver/summary/server/beta-survive.html"},{"revision":"d09c1457d1f3ebe96599265595dc9bdf","url":"mcserver/summary/server/bmss.html"},{"revision":"948cb599960c76fba34d53c917d120af","url":"mcserver/summary/server/bskyblock.html"},{"revision":"ec8e2508fd941639fbdd072ef7da1fda","url":"mcserver/summary/server/creative.html"},{"revision":"f3ed4c361c3bc2885f82b7316b1d6fe2","url":"mcserver/summary/server/electricity.html"},{"revision":"7c03667d049d4e5caff31b5c55d0c2e3","url":"mcserver/summary/server/login.html"},{"revision":"14202140a934d786c742fbff5908afd5","url":"mcserver/summary/server/mod-server.html"},{"revision":"8304d48670309eac09cccb50be88c074","url":"mcserver/summary/server/survive.html"},{"revision":"28e535d500b6b0e8139c142b1e49dc4f","url":"mcserver/tutorials/configuring-client.html"},{"revision":"37967642daee3a139d1764c47c659aea","url":"mcserver/tutorials/configuring-client/hmcl.html"},{"revision":"b140d13c81b345405fdbc8d4352c8419","url":"mcserver/tutorials/configuring-client/minecraft-launcher.html"},{"revision":"f7957e03262cb91db1b56dffa014585a","url":"mcserver/tutorials/configuring-client/pcl.html"},{"revision":"c5cb7c90a909a4a13d6d71e296767c35","url":"mcserver/tutorials/configuring-client/pe.html"},{"revision":"bfe79c49425dd146875ff5aac8699f3c","url":"mcserver/tutorials/reg-skin-station.html"},{"revision":"a2df6bc28c71022dad9dc385b88fdc49","url":"search.html"},{"revision":"ead9d4a3f1fa76e587dd3a20240a04f0","url":"vlssuskin.html"},{"revision":"9a07ff9f87498cd835f6668faba791ef","url":"vlssuskin/advanced-usage/api.html"},{"revision":"a2ebe6ecbdb4876008eb7e939396991d","url":"vlssuskin/advanced-usage/flarum.html"},{"revision":"f3d606fc00b70851dedde40544f71602","url":"vlssuskin/advanced-usage/oauth2.html"},{"revision":"5962aa50e85c9d5a5ce09606b7aff37a","url":"vlssuskin/advanced-usage/Yggdrasil.html"},{"revision":"ce9b5b46761c765f1117ff6e5a32ad27","url":"vlssuskin/faq.html"},{"revision":"1134a1f2e40dffb4074cbef25499ba3b","url":"vlssuskin/newbee-guide/create-player.html"},{"revision":"c4c524d9008e7cec66acdb05756b6623","url":"vlssuskin/newbee-guide/install-mod.html"},{"revision":"216e8ab1e8c301bb7c7f329b37db820d","url":"vlssuskin/newbee-guide/set-textures.html"},{"revision":"c73c4624d7429fb794300f563df9e990","url":"vlssuskin/policies/privacy.html"},{"revision":"528b66806b052ad7fe0ab94b11b749aa","url":"vlssuskin/policies/tos.html"},{"revision":"ab2d4245df6cad373fce1ea574fb14d3","url":"vlssuskin/score.html"},{"revision":"578c1a0a5c2afa084482f09a5f4a3568","url":"vlssuskin/vps.html"},{"revision":"7c4823950f1e46da5c9c1798cbfed857","url":"assets/images/cp1-ff24e4c3641e5ff3bc173b93be88be4b.png"},{"revision":"f22ac2789f7ed24b83916217db3d2405","url":"assets/images/f10-036c78a846e0a43c0abdfbe7707a9dc5.png"},{"revision":"d7bf304f333a01a1d25d4830d4af9dd8","url":"assets/images/f3-76fe45f34e5835b64b828ace48c2709a.png"},{"revision":"a1d0cece76bde58167fc49ca0522bf51","url":"assets/images/f4-ea294d91b5e3a10a4bedb05e6ba8c08c.png"},{"revision":"892e52797dd42c7d52fb9962e325f264","url":"assets/images/f5-69800ca3a5bd2aaa2703659d15e0da6f.png"},{"revision":"91c0520e03e12431fb94d58dfb87df59","url":"assets/images/f7-eaa7a4add7b7f6e6d86be8d9ad46ef9b.png"},{"revision":"5bf742f284cb8db476a50a1c88181c9a","url":"assets/images/f8-d73ed51863e39193879b82aea5a5dcea.png"},{"revision":"37b12c1d90ca482f4df0526d1e25cfc6","url":"assets/images/f9-46831ec36556c98b6bf618e7345b0334.png"},{"revision":"327213993babfb406b0ec5943a38f7a8","url":"assets/images/HMCLR1-e9a25d0a64c102ee37853c3d384a7aa5.png"},{"revision":"3b46fa4087f04b3774c7104bb850b3ee","url":"assets/images/HMCLR2-bb1a82cd86966103acf9978bdd64c528.png"},{"revision":"b9672ea37c7197b96365d5c46a7b606e","url":"assets/images/HMCLR3-e214c6f8ec425c506d4f6d058a622bdd.png"},{"revision":"b813bcbf72cbc224f838876c3d9acc29","url":"assets/images/HMCLR4-64c01436471d2293c0d907f202a51045.png"},{"revision":"75f4e1eb508b69a3ee27b896cb194a1e","url":"assets/images/io.netty-8f2c02699afe7a2150d022ab0ac1d897.png"},{"revision":"38f59f5ce85980d8cd4be8f77db1f89b","url":"assets/images/ml1-d7d6922894572195fec463ce17ca6230.jpg"},{"revision":"76c93950a9be43b628deb620fe84b882","url":"assets/images/ml2-bde92400eb470a3044ed45f8efd3cb2a.jpg"},{"revision":"e319fd928412ad4507e6bd1d3b8cdd58","url":"assets/images/ml3-32f47d9f7b3e904b6c6de7b737c53d43.jpg"},{"revision":"aacf3e1bef4d126634f7296e89f71e86","url":"assets/images/o1-4015a91f0e1757cb367b7c081cda9644.png"},{"revision":"91e90bde02c491cc0b730ce0c616959a","url":"assets/images/pcl1-f35772e8e5bd9cef202aef4fb5ee9933.jpg"},{"revision":"22cdc8d3bb1815f5d9cb720dd17009b4","url":"assets/images/pcl2-1cb95f18a615d96d5add06e0436ef962.jpg"},{"revision":"4e67f046d723d40b6db7acb7f143cae6","url":"assets/images/pcl3-ba5dc58d59290d04b5d3c424af49be1d.jpg"},{"revision":"0a4e86e001bac502c388f497159f742e","url":"assets/images/pe1-3db37cf727398ffb895893bd381fa3e9.jpg"},{"revision":"298c554a3c8aa1efe5b9b302614e474a","url":"assets/images/pe2-c32615d4ee1e2c5cb4e833da39c87866.jpg"},{"revision":"605071a41f45220a93e7afa031dd815c","url":"assets/images/st2-e14c0c41acc57c0cff85ff268c80b5f0.png"},{"revision":"593ec90499e6150193c8604f9bb05598","url":"assets/images/st4-e280d9e51e7d22e0abcfc7cc218314ec.png"},{"revision":"00751587a16b4e9f5cedba05ec48a026","url":"assets/images/st5-d38b69ba828bdc1b22f4801bfc86ca18.png"},{"revision":"81517c5d8fcaa656db8fa4c09e6d8ad8","url":"assets/images/st7-4f53104cc3f8f41283079d12533c102b.png"},{"revision":"666aba4e7b65bddce380a43fc2e2a635","url":"assets/images/tm1-770f15760754eed524e0fe7370b217dd.jpg"},{"revision":"5f3f0d7fbaf22372b0ab28fad744492d","url":"assets/images/tm2-f193a82dba19f996392330e428e6c16f.jpg"},{"revision":"fd0e4a9daa047ad0c4595652c3b5ab3e","url":"assets/images/tm3-496e286d1dbc6e51374d35a972a50cd9.jpg"},{"revision":"599205b54e94539964f7674f1f846e1c","url":"assets/images/Unknown-host-c87f97dd4c637cadaf3c84d22be74c53.png"},{"revision":"a408b7fe2cf67c6200a558eefbf69798","url":"assets/images/vlssu历史线.drawio-9987d326965d6edcf0fb808530465a30.svg"},{"revision":"f434adad2c355e80a7d988b47bc25971","url":"assets/images/vps-868ad78259e863c29590ffc466be7cd3.png"},{"revision":"7809e6ac957b254d3772cb95ecae11e3","url":"assets/images/y1-1e9e432edaebf92234f14d725ec776a3.png"},{"revision":"c4372071890e568a5e42160eb6a93701","url":"assets/images/y10-a99ddb08873704743f258b61687eb67d.png"},{"revision":"ea386e1387a1ca824ca1988ea252e7d0","url":"assets/images/y2-64ba226a97a5a3cf8eb0502b7b163feb.png"},{"revision":"b9672ea37c7197b96365d5c46a7b606e","url":"assets/images/y3-e214c6f8ec425c506d4f6d058a622bdd.png"},{"revision":"98634887f7732da8a087dc954c8b2a0b","url":"assets/images/y4-e7028fc369d40ab2d3b5748938a29722.png"},{"revision":"dda8a13c0002bd4ddec1ab3c97aa7fd7","url":"assets/images/y5-981d063d00a7441585e09c272d1ae762.png"},{"revision":"dbb9fa2d5e6786edc7bc151944df2dc2","url":"assets/images/y6-09a558e8b94ea6887be40a430dd706a0.png"},{"revision":"b4a2311e6b6de7a44ed43a4cfa6bf54a","url":"assets/images/y7-d2511a3f71b59ba6c88138a00e0903cc.png"},{"revision":"0b712949c833f51502f82a530515a027","url":"assets/images/y8-fe73a23522099c54a3c42b9337ede168.png"},{"revision":"bb8e9b96d93b6cb3ad01069b76a4f90e","url":"assets/images/y9-9598dd02e1cbf2042568ca65ed27f6c6.png"},{"revision":"fc576f833f663ed7ce680a8dcb9652f7","url":"assets/images/无效的登入凭据,请核查客户端外置登入配置或稍后重试-f7a338e35259adf72d954ee40f9c16a4.png"},{"revision":"f63827e9b833436fe9c8483c9a9c4f33","url":"assets/images/无法解析主机名-f3204c3245e2d2977059b592104e96d6.png"},{"revision":"18edfc64634eb94783a30b6f0daa5c7a","url":"assets/images/无法验证用户名-91be0b129e14349a103eecc3b24e0ea9.png"},{"revision":"70c42323217337654e14330f7a1a2df7","url":"assets/images/登入失败：无效会话（请尝试重启游戏及启动器）-455cd2558f7447316b77026694db1fda.png"},{"revision":"f00e7a764dbe0b4dc21e03ff84b7ee99","url":"assets/images/登入失败Null-264df3d6a0d50e5090507974623a63f1.png"},{"revision":"e27d0abdce9a8a77b6901a62921792ff","url":"assets/images/登入失败身份验证目前正在停机维护-651fba69006ba02e99c049d27d29e01e.png"},{"revision":"f2d7cd73ba1d8d2375dbd856fb640e2f","url":"img/favicon.ico"},{"revision":"1c8622eac81f53f0a386124bc8cadbb2","url":"img/icons/icon-128x128.png"},{"revision":"00cc75375682e6f9df03845a38393ca8","url":"img/icons/icon-144x144.png"},{"revision":"54fe64c15e3aa5a91d95ae0aab77909f","url":"img/icons/icon-152x152.png"},{"revision":"e578a4c67469ff14f7fb3440f0d2c3c4","url":"img/icons/icon-192x192.png"},{"revision":"4e5680c95bd88cc5579f0b7cc04c7d0b","url":"img/icons/icon-384x384.png"},{"revision":"f636f92aab7db0ec790a0006d6da997e","url":"img/icons/icon-512x512.png"},{"revision":"ce1c86e716619db226340de67921fb37","url":"img/icons/icon-72x72.png"},{"revision":"b603ab12dc0ad2b68812f85f9706b43a","url":"img/icons/icon-96x96.png"},{"revision":"17aa327002484349e4c087a638848d8f","url":"img/logo.svg"},{"revision":"cfdd4b00e82effb02931776780993f0f","url":"img/og-image.png"},{"revision":"282ca54c573eb894389751f5ab755647","url":"img/vlssu.png"},{"revision":"eea8a45e4d02c3c163a90a2a4743d37b","url":"assets/fonts/JetBrainsMono-Regular-d922fd933fc62eec7ec568cb006b4964.woff2"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();