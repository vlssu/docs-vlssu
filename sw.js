(()=>{"use strict";var e={365:()=>{try{self["workbox:core:6.5.3"]&&_()}catch(e){}},461:()=>{try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},240:()=>{try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},625:()=>{try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(365);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(461);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(625);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class v extends _{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(v.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==v.copyRedirectedCacheableResponsesPlugin&&(a===v.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(v.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}v.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},v.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class m{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new v({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(240);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"67e4050744d05ee6de511c249bf6587c","url":"__docusaurus/debug.html"},{"revision":"723ceef3be1f48d807de7a0822816f87","url":"__docusaurus/debug/config.html"},{"revision":"9c764aba65db6a2741b48cb10b21d209","url":"__docusaurus/debug/content.html"},{"revision":"0764f0dbdd5305253b46f54f3c85319e","url":"__docusaurus/debug/globalData.html"},{"revision":"d9c3ae0080cae5d0ceb646cea290ea78","url":"__docusaurus/debug/metadata.html"},{"revision":"55dc9cf93af2305210eaad5a800076d6","url":"__docusaurus/debug/registry.html"},{"revision":"d4ac78dd09407eb6b998c1b8f2cd65f8","url":"__docusaurus/debug/routes.html"},{"revision":"ff2872e746682edd48799e39c6f8137a","url":"404.html"},{"revision":"88106bd3b31327ae690cf1f5839add5e","url":"assets/css/styles.05818ceb.css"},{"revision":"a8103ae95e32f740d4de983c56f3a8bb","url":"assets/js/100f3b11.feded8ff.js"},{"revision":"1d88ffecb646d3a49f7d8488a2948a5f","url":"assets/js/12c39719.219c4f6e.js"},{"revision":"790b69d4797aab45238d6019279248cf","url":"assets/js/146891a0.77d534db.js"},{"revision":"94e1550e7bde2f17000d3f7877b80e60","url":"assets/js/16a5b327.7734e08e.js"},{"revision":"d60a568bbccd3fb18cf0ea300a2c9f5f","url":"assets/js/17896441.40c40fd2.js"},{"revision":"51340b6721aaca1b9027b0cfbc8fbd80","url":"assets/js/1a4e3797.bc1795f7.js"},{"revision":"a7382e5cd088c5cb8c271507d0a8e10f","url":"assets/js/1be78505.acfef7ae.js"},{"revision":"4fc298eb8a96a9f68520d6d21d6304e8","url":"assets/js/1df93b7f.4c7f1ac2.js"},{"revision":"60b4f79f169ea2ea6a32f31a20afec58","url":"assets/js/23abe487.313a08fe.js"},{"revision":"0df23928f1104d2b4064c8035d7e75f5","url":"assets/js/246f2c6f.8c85a4e2.js"},{"revision":"ef304653358a1c394e56bb7798673a63","url":"assets/js/2793.25fe682e.js"},{"revision":"5d0fd0115d6d5efffcaf5dee3ab03e28","url":"assets/js/2d3a9d6a.b80cc9d2.js"},{"revision":"fe535e74498945a0c63fd1991b08bf5c","url":"assets/js/31389f65.bcaa46c5.js"},{"revision":"87cb7d8c26d6282163143fac14debb3f","url":"assets/js/3882.2b2e45ff.js"},{"revision":"95fa6b4367956ecd20eca566d77fcb1f","url":"assets/js/3a154f56.bddff10c.js"},{"revision":"30938f01abe08a23b08193dec0e53619","url":"assets/js/3a50d4e7.52b62c12.js"},{"revision":"de20383d7ce2ac997878fd35c470b66e","url":"assets/js/406d4c28.11020cd1.js"},{"revision":"92e63fde7c7ac780735a2d75c7a63496","url":"assets/js/428bf6b8.352a4971.js"},{"revision":"1b7e7d17c2aa0762f45f6302355e2673","url":"assets/js/5400.5b3b4a34.js"},{"revision":"e751dae286d437928913a8033fea9333","url":"assets/js/58cb887f.95ab8b7d.js"},{"revision":"2d3bf416bd627605e955e5d38918f13c","url":"assets/js/6299.81325b65.js"},{"revision":"19f8f1e315c11fda50c34d4a5e754bf1","url":"assets/js/6364de16.e367ee67.js"},{"revision":"7ca6bf11b91b99255a3c6488f8aa58d4","url":"assets/js/63be92f4.996965c2.js"},{"revision":"bf5446bfbbe01beb203e56566fcb18bd","url":"assets/js/659355db.35ae2b11.js"},{"revision":"c65bb4c720272ee91694f286452c0940","url":"assets/js/6794d4cd.c55eba89.js"},{"revision":"155673e4c63e1045f55caf5d0f4633f2","url":"assets/js/68e633d4.c6f528f4.js"},{"revision":"93baa96d5a7b37085e837e5b6e3c4a14","url":"assets/js/72d6d5c3.6aef0467.js"},{"revision":"1919589ba9bdffc841406bdd12d4016c","url":"assets/js/7841c085.c904d41e.js"},{"revision":"6dbdad0a990fdac87a0116bae5388136","url":"assets/js/8076.ed2bbde8.js"},{"revision":"0571f0d8907ed6bbb99d387043e6e058","url":"assets/js/8161.567de14f.js"},{"revision":"86b1459d82961b7f4bdf7f9d64649a4f","url":"assets/js/82437be0.7f313822.js"},{"revision":"bef5a82c9ffe83b30445af4a230cadee","url":"assets/js/843abcdb.b0953fa0.js"},{"revision":"7622328ff667de2995bfca4f6ef5f478","url":"assets/js/8516.4f37ad4a.js"},{"revision":"45d214300d00eb74cb5b7bcb0f402b73","url":"assets/js/8572.3c29c20e.js"},{"revision":"5544dabf437ca3091038ba03322d9f49","url":"assets/js/86bfae87.e7a35cf8.js"},{"revision":"a274074a5c3f0d41e6f4a469bec713f2","url":"assets/js/87eace82.ef9a8ca1.js"},{"revision":"4c4fb0628d4e5946eb752381e62683df","url":"assets/js/8ac32ba1.8061a822.js"},{"revision":"051a486428ff06c5896d181dbbb9de10","url":"assets/js/8c50d7e0.b660ab46.js"},{"revision":"19f8ae70369bfd6d0466417f85a0e3a5","url":"assets/js/946bd85a.4a321257.js"},{"revision":"9c80fef18fe7ff649d400fb13cbe239f","url":"assets/js/973.6fbd0ca8.js"},{"revision":"a1cf5964baa446e0e7d888bb88da25df","url":"assets/js/a3470f84.c3835d6b.js"},{"revision":"d19349e8509e388bc5815065b68a68ec","url":"assets/js/a518d338.8853325e.js"},{"revision":"b810c539ac6019703b6a7817b54b71aa","url":"assets/js/af39b1a1.e9969eaa.js"},{"revision":"b3ea4f16459c210a948de5c939d0ff91","url":"assets/js/ba8b3534.51be6f48.js"},{"revision":"77980df460bda9bc07d1aaa8dd7eb075","url":"assets/js/bd370d9d.41bb0889.js"},{"revision":"4c3cf33dd7372701b12620ff949b1ed2","url":"assets/js/c2e1db56.9099662e.js"},{"revision":"de22b69ccb1228edd6bf648df33e007e","url":"assets/js/cb3fd989.1ee06e23.js"},{"revision":"e99b09e8602696530c99ab179ab9b84b","url":"assets/js/cc99a760.5f8f2460.js"},{"revision":"e4166a997feb895c1f9c29450f337cbb","url":"assets/js/ce5217b5.d4258307.js"},{"revision":"ed8910badd10581f6ef7b00603e905fb","url":"assets/js/cf75b345.8a1ddc45.js"},{"revision":"431574d6ce7132c9eb2093febe2deb93","url":"assets/js/d8f15ad2.ebd75deb.js"},{"revision":"7678ea991088090c1ab7ce7094ac7fbc","url":"assets/js/d8fe0c54.0c73c79e.js"},{"revision":"4b78dcf9ac00a7b897cba8095c15e173","url":"assets/js/dae1ef6e.864ee98f.js"},{"revision":"a99baf5162023f89f384012bf91d6109","url":"assets/js/df538fd9.e63ea225.js"},{"revision":"cff20a0cdb7c8cf33b3ab01bd7b82e7e","url":"assets/js/ed68828c.5c6f26a9.js"},{"revision":"e239d7dddfab931c6b5d7de39fdc1ce2","url":"assets/js/ed6efced.f5754664.js"},{"revision":"d90a7bc96cdb15c2e19a2ac6b63a2fd0","url":"assets/js/ede3a018.b5e4e40e.js"},{"revision":"304770f6885e895c193430aa3452ef78","url":"assets/js/f26e2a8b.153f97ff.js"},{"revision":"cd5be625358919e591c869b95382eb26","url":"assets/js/f94171ea.9cd40b94.js"},{"revision":"26cb8e5fe92d87f9783c6306403ffdd9","url":"assets/js/ff78808e.dbe84f5d.js"},{"revision":"1d9f37b6e06696ebaf9e87121971e538","url":"assets/js/main.c4e8f891.js"},{"revision":"2995a69cd829774123929b70f71d159c","url":"assets/js/runtime~main.9dfabc9a.js"},{"revision":"89a142b28fecdaace4c2c6bf6a6cb1f3","url":"index.html"},{"revision":"5f380a981c72b5ef35223b0260da79fb","url":"manifest.json"},{"revision":"d6f58abb3fe0936e6ab98d8d69292863","url":"mcserver.html"},{"revision":"f2dc22ed7ec4b2f30c084fdaf085e8b8","url":"mcserver/faq.html"},{"revision":"4da5e790077d1ad2a693486c7a73ec38","url":"mcserver/sponsor.html"},{"revision":"cfa1c316cb836ff4e31db71e92c59db6","url":"mcserver/SUMMARY.html"},{"revision":"24e1c0f21923fae34b078a46e63e7864","url":"mcserver/summary/java.html"},{"revision":"e9c0d472478e9bdc496a52d60831f222","url":"mcserver/summary/pe.html"},{"revision":"31060b2c3f4b7eae9bf7e355d1a17cf0","url":"mcserver/summary/server.html"},{"revision":"06da86584170193b68a85dae03873e2a","url":"mcserver/summary/server/beta-survive.html"},{"revision":"52ec180d6e4d1cad0314e938cb4f5077","url":"mcserver/summary/server/bskyblock.html"},{"revision":"72ebe8eb5f7c794527693c7d53217b6b","url":"mcserver/summary/server/creative.html"},{"revision":"b025365de5aa0fb0b5db3892f446ace5","url":"mcserver/summary/server/electricity.html"},{"revision":"e91af3c6c82ca83840be9cd3b3f8f81c","url":"mcserver/summary/server/login.html"},{"revision":"6ad6f67fbfd7bb9a9174722907de0aa6","url":"mcserver/summary/server/mod-server.html"},{"revision":"36bf075534b7a63a8c7792cb4f9f418b","url":"mcserver/summary/server/survive.html"},{"revision":"b5f8e43e0f5b6ae44fe82a3ab18819f4","url":"mcserver/tutorials/configuring-client.html"},{"revision":"93bcbb8efc6ccabfbc723c3097db068f","url":"mcserver/tutorials/configuring-client/hmcl.html"},{"revision":"477b11306e2e6b726c1ecfee5e32f4a6","url":"mcserver/tutorials/configuring-client/minecraft-launcher.html"},{"revision":"55fcbdd81350966f45e784d9a26127e5","url":"mcserver/tutorials/configuring-client/pcl.html"},{"revision":"a9b1b6fa172c4ca95f8b53f863d17d9b","url":"mcserver/tutorials/configuring-client/pe.html"},{"revision":"8ff5345fd488fd8d4705e26f6c15f1b6","url":"mcserver/tutorials/reg-skin-station.html"},{"revision":"74944bf90801020fb19d2cdf941bc0db","url":"search.html"},{"revision":"b5ff66435508de5b0f9838f89521c2c7","url":"vlssuskin.html"},{"revision":"80ad9113205938cc1c5e989df0bad5de","url":"vlssuskin/advanced/api.html"},{"revision":"1c03b42d4e87cf905ee9ef96096bdc7d","url":"vlssuskin/advanced/flarum.html"},{"revision":"c105d721d12f244fc38531e81a622261","url":"vlssuskin/advanced/oauth2.html"},{"revision":"5d28f5b5a333b20637a94df8d69d12c0","url":"vlssuskin/advanced/Yggdrasil.html"},{"revision":"aa6951828748c531fe03c4fe4df9187c","url":"vlssuskin/faq.html"},{"revision":"e1a178e574df9f8bc1868605ac07cf89","url":"vlssuskin/newbee/mod.html"},{"revision":"ff66bd58caa0314d9eec092e44de1c69","url":"vlssuskin/newbee/player.html"},{"revision":"e8a63dbd9611448dd3777873939bcc4e","url":"vlssuskin/newbee/textures.html"},{"revision":"9d86d62678db62f8c54bb8efc5d2c476","url":"vlssuskin/policies/privacy.html"},{"revision":"1fffa0216b82736479a1b6fd0af5e4dc","url":"vlssuskin/policies/tos.html"},{"revision":"46c9a1d9eac3696b10cacbc76b7f92bd","url":"vlssuskin/score.html"},{"revision":"77a5edc5255a0de01eb0bcae5aa909a4","url":"vlssuskin/vps.html"},{"revision":"7c4823950f1e46da5c9c1798cbfed857","url":"assets/images/cp1-ff24e4c3641e5ff3bc173b93be88be4b.png"},{"revision":"f22ac2789f7ed24b83916217db3d2405","url":"assets/images/f10-036c78a846e0a43c0abdfbe7707a9dc5.png"},{"revision":"d7bf304f333a01a1d25d4830d4af9dd8","url":"assets/images/f3-76fe45f34e5835b64b828ace48c2709a.png"},{"revision":"a1d0cece76bde58167fc49ca0522bf51","url":"assets/images/f4-ea294d91b5e3a10a4bedb05e6ba8c08c.png"},{"revision":"892e52797dd42c7d52fb9962e325f264","url":"assets/images/f5-69800ca3a5bd2aaa2703659d15e0da6f.png"},{"revision":"91c0520e03e12431fb94d58dfb87df59","url":"assets/images/f7-eaa7a4add7b7f6e6d86be8d9ad46ef9b.png"},{"revision":"5bf742f284cb8db476a50a1c88181c9a","url":"assets/images/f8-d73ed51863e39193879b82aea5a5dcea.png"},{"revision":"37b12c1d90ca482f4df0526d1e25cfc6","url":"assets/images/f9-46831ec36556c98b6bf618e7345b0334.png"},{"revision":"327213993babfb406b0ec5943a38f7a8","url":"assets/images/HMCLR1-e9a25d0a64c102ee37853c3d384a7aa5.png"},{"revision":"3b46fa4087f04b3774c7104bb850b3ee","url":"assets/images/HMCLR2-bb1a82cd86966103acf9978bdd64c528.png"},{"revision":"b9672ea37c7197b96365d5c46a7b606e","url":"assets/images/HMCLR3-e214c6f8ec425c506d4f6d058a622bdd.png"},{"revision":"b813bcbf72cbc224f838876c3d9acc29","url":"assets/images/HMCLR4-64c01436471d2293c0d907f202a51045.png"},{"revision":"75f4e1eb508b69a3ee27b896cb194a1e","url":"assets/images/io.netty-8f2c02699afe7a2150d022ab0ac1d897.png"},{"revision":"38f59f5ce85980d8cd4be8f77db1f89b","url":"assets/images/ml1-d7d6922894572195fec463ce17ca6230.jpg"},{"revision":"76c93950a9be43b628deb620fe84b882","url":"assets/images/ml2-bde92400eb470a3044ed45f8efd3cb2a.jpg"},{"revision":"e319fd928412ad4507e6bd1d3b8cdd58","url":"assets/images/ml3-32f47d9f7b3e904b6c6de7b737c53d43.jpg"},{"revision":"758b34882daccd40df76820cc5a14064","url":"assets/images/mod-server_1-11b9f79b181935b0a10723315e4751ae.jpg"},{"revision":"a44c6b528e553a563588ae0b2f6b0878","url":"assets/images/mod-server_2-85acadb09307807174862eaab4b8c8c1.jpg"},{"revision":"aacf3e1bef4d126634f7296e89f71e86","url":"assets/images/o1-4015a91f0e1757cb367b7c081cda9644.png"},{"revision":"91e90bde02c491cc0b730ce0c616959a","url":"assets/images/pcl1-f35772e8e5bd9cef202aef4fb5ee9933.jpg"},{"revision":"22cdc8d3bb1815f5d9cb720dd17009b4","url":"assets/images/pcl2-1cb95f18a615d96d5add06e0436ef962.jpg"},{"revision":"4e67f046d723d40b6db7acb7f143cae6","url":"assets/images/pcl3-ba5dc58d59290d04b5d3c424af49be1d.jpg"},{"revision":"0a4e86e001bac502c388f497159f742e","url":"assets/images/pe1-3db37cf727398ffb895893bd381fa3e9.jpg"},{"revision":"298c554a3c8aa1efe5b9b302614e474a","url":"assets/images/pe2-c32615d4ee1e2c5cb4e833da39c87866.jpg"},{"revision":"605071a41f45220a93e7afa031dd815c","url":"assets/images/st2-e14c0c41acc57c0cff85ff268c80b5f0.png"},{"revision":"593ec90499e6150193c8604f9bb05598","url":"assets/images/st4-e280d9e51e7d22e0abcfc7cc218314ec.png"},{"revision":"00751587a16b4e9f5cedba05ec48a026","url":"assets/images/st5-d38b69ba828bdc1b22f4801bfc86ca18.png"},{"revision":"81517c5d8fcaa656db8fa4c09e6d8ad8","url":"assets/images/st7-4f53104cc3f8f41283079d12533c102b.png"},{"revision":"666aba4e7b65bddce380a43fc2e2a635","url":"assets/images/tm1-770f15760754eed524e0fe7370b217dd.jpg"},{"revision":"5f3f0d7fbaf22372b0ab28fad744492d","url":"assets/images/tm2-f193a82dba19f996392330e428e6c16f.jpg"},{"revision":"fd0e4a9daa047ad0c4595652c3b5ab3e","url":"assets/images/tm3-496e286d1dbc6e51374d35a972a50cd9.jpg"},{"revision":"599205b54e94539964f7674f1f846e1c","url":"assets/images/Unknown-host-c87f97dd4c637cadaf3c84d22be74c53.png"},{"revision":"a408b7fe2cf67c6200a558eefbf69798","url":"assets/images/vlssu历史线.drawio-9987d326965d6edcf0fb808530465a30.svg"},{"revision":"f434adad2c355e80a7d988b47bc25971","url":"assets/images/vps-868ad78259e863c29590ffc466be7cd3.png"},{"revision":"7809e6ac957b254d3772cb95ecae11e3","url":"assets/images/y1-1e9e432edaebf92234f14d725ec776a3.png"},{"revision":"c4372071890e568a5e42160eb6a93701","url":"assets/images/y10-a99ddb08873704743f258b61687eb67d.png"},{"revision":"ea386e1387a1ca824ca1988ea252e7d0","url":"assets/images/y2-64ba226a97a5a3cf8eb0502b7b163feb.png"},{"revision":"b9672ea37c7197b96365d5c46a7b606e","url":"assets/images/y3-e214c6f8ec425c506d4f6d058a622bdd.png"},{"revision":"98634887f7732da8a087dc954c8b2a0b","url":"assets/images/y4-e7028fc369d40ab2d3b5748938a29722.png"},{"revision":"dda8a13c0002bd4ddec1ab3c97aa7fd7","url":"assets/images/y5-981d063d00a7441585e09c272d1ae762.png"},{"revision":"dbb9fa2d5e6786edc7bc151944df2dc2","url":"assets/images/y6-09a558e8b94ea6887be40a430dd706a0.png"},{"revision":"b4a2311e6b6de7a44ed43a4cfa6bf54a","url":"assets/images/y7-d2511a3f71b59ba6c88138a00e0903cc.png"},{"revision":"0b712949c833f51502f82a530515a027","url":"assets/images/y8-fe73a23522099c54a3c42b9337ede168.png"},{"revision":"bb8e9b96d93b6cb3ad01069b76a4f90e","url":"assets/images/y9-9598dd02e1cbf2042568ca65ed27f6c6.png"},{"revision":"fc576f833f663ed7ce680a8dcb9652f7","url":"assets/images/无效的登入凭据,请核查客户端外置登入配置或稍后重试-f7a338e35259adf72d954ee40f9c16a4.png"},{"revision":"f63827e9b833436fe9c8483c9a9c4f33","url":"assets/images/无法解析主机名-f3204c3245e2d2977059b592104e96d6.png"},{"revision":"18edfc64634eb94783a30b6f0daa5c7a","url":"assets/images/无法验证用户名-91be0b129e14349a103eecc3b24e0ea9.png"},{"revision":"70c42323217337654e14330f7a1a2df7","url":"assets/images/登入失败：无效会话（请尝试重启游戏及启动器）-455cd2558f7447316b77026694db1fda.png"},{"revision":"f00e7a764dbe0b4dc21e03ff84b7ee99","url":"assets/images/登入失败Null-264df3d6a0d50e5090507974623a63f1.png"},{"revision":"e27d0abdce9a8a77b6901a62921792ff","url":"assets/images/登入失败身份验证目前正在停机维护-651fba69006ba02e99c049d27d29e01e.png"},{"revision":"f2d7cd73ba1d8d2375dbd856fb640e2f","url":"img/favicon.ico"},{"revision":"1c8622eac81f53f0a386124bc8cadbb2","url":"img/icons/icon-128x128.png"},{"revision":"00cc75375682e6f9df03845a38393ca8","url":"img/icons/icon-144x144.png"},{"revision":"54fe64c15e3aa5a91d95ae0aab77909f","url":"img/icons/icon-152x152.png"},{"revision":"e578a4c67469ff14f7fb3440f0d2c3c4","url":"img/icons/icon-192x192.png"},{"revision":"4e5680c95bd88cc5579f0b7cc04c7d0b","url":"img/icons/icon-384x384.png"},{"revision":"f636f92aab7db0ec790a0006d6da997e","url":"img/icons/icon-512x512.png"},{"revision":"ce1c86e716619db226340de67921fb37","url":"img/icons/icon-72x72.png"},{"revision":"b603ab12dc0ad2b68812f85f9706b43a","url":"img/icons/icon-96x96.png"},{"revision":"17aa327002484349e4c087a638848d8f","url":"img/logo.svg"},{"revision":"cfdd4b00e82effb02931776780993f0f","url":"img/og-image.png"},{"revision":"282ca54c573eb894389751f5ab755647","url":"img/vlssu.png"},{"revision":"62dbb62edfb73578956170bab16e1102","url":"assets/fonts/jetbrains-mono-all-400-normal-2346733ac7062d6402c0c859ccbf227e.woff"},{"revision":"73e0466a4982d9cc878c4880554d7cbf","url":"assets/fonts/jetbrains-mono-latin-400-normal-d0b41bd1d599bc0a52b733fd39c8cc06.woff2"},{"revision":"eea8a45e4d02c3c163a90a2a4743d37b","url":"assets/fonts/JetBrainsMono-Regular-d922fd933fc62eec7ec568cb006b4964.woff2"}],s=new m({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();