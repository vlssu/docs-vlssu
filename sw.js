(()=>{"use strict";var e={365:()=>{try{self["workbox:core:6.5.3"]&&_()}catch(e){}},461:()=>{try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},240:()=>{try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},625:()=>{try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(365);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(461);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(625);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class v extends _{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(v.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==v.copyRedirectedCacheableResponsesPlugin&&(a===v.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(v.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}v.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},v.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class m{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new v({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(240);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"47a93b9ccf97f476d59d35ff0e6adfbb","url":"__docusaurus/debug.html"},{"revision":"184de82aaa971ce60c652e62e4f028fc","url":"__docusaurus/debug/config.html"},{"revision":"10cc85b037504e3bb0a0b5a276aa29ac","url":"__docusaurus/debug/content.html"},{"revision":"f38075ac4570d0c7a7c29c4a95d1c63d","url":"__docusaurus/debug/globalData.html"},{"revision":"d5f40945742f4dce9508928812ddd232","url":"__docusaurus/debug/metadata.html"},{"revision":"e175b1ebfd562b532f424d513b9ffab3","url":"__docusaurus/debug/registry.html"},{"revision":"f68a2c16a1c6f469b9faf97bc947ee74","url":"__docusaurus/debug/routes.html"},{"revision":"5f20c39e2dd75bd7fb4e2322d9f2289e","url":"404.html"},{"revision":"501c4ddbd32e7381873b94daf8c91d0c","url":"assets/css/styles.71d71d3c.css"},{"revision":"7f08dfbc4ea109d2798a0b5dd40ccda2","url":"assets/js/100f3b11.f542de27.js"},{"revision":"fd0b232eebde3acbf0a3b37a3f4bbb8e","url":"assets/js/1192.cf39fd69.js"},{"revision":"60bb5090ae62e5c102c2ce7e0d0f2b11","url":"assets/js/146891a0.e0d24c32.js"},{"revision":"3226567b0c1f8d9a5a237f6581ca10ec","url":"assets/js/16a5b327.92022438.js"},{"revision":"c6a5a4a71cea9845adf4da90969698c6","url":"assets/js/17896441.948d2da2.js"},{"revision":"b77568cd06d0c357f64c46df8c103f21","url":"assets/js/1a4e3797.9211dd56.js"},{"revision":"e7974659c941560d4aca1f67b19cf49c","url":"assets/js/1be78505.6bf4a01c.js"},{"revision":"5754e17579b7e82051bac2d7b2d384f1","url":"assets/js/1df93b7f.3eb4bed2.js"},{"revision":"ad64401adcef158d2b00557e43b0579a","url":"assets/js/2044.a2504859.js"},{"revision":"e08c9ac1d42e8cbe4de054b6d81b3cd9","url":"assets/js/23abe487.845e2c22.js"},{"revision":"5f58d647a72bafb2ca81b0999ac70f17","url":"assets/js/246f2c6f.c5fde13a.js"},{"revision":"69277da86c9c7d01d7faf9532158c00f","url":"assets/js/2577.8f3cda78.js"},{"revision":"7b85166c2c4f81335eb0b0af317dc9c7","url":"assets/js/2d3a9d6a.3695d200.js"},{"revision":"b86757da9fb6bb266aba43eb2230941c","url":"assets/js/3135.a5586c6c.js"},{"revision":"fe535e74498945a0c63fd1991b08bf5c","url":"assets/js/31389f65.bcaa46c5.js"},{"revision":"87cb7d8c26d6282163143fac14debb3f","url":"assets/js/3882.2b2e45ff.js"},{"revision":"9ae3343bce0a6892e36bda7c00e519dc","url":"assets/js/3a50d4e7.1a69e45c.js"},{"revision":"526a9438700fd0bf34fa7304aad714a6","url":"assets/js/406d4c28.07a4fa47.js"},{"revision":"35ee9e17393542751104168f82dbef38","url":"assets/js/428bf6b8.3a5f2f36.js"},{"revision":"71d1fb8ad5de6d08fde7fc146b30c3ff","url":"assets/js/4374.42a80f6f.js"},{"revision":"e31ade7d2a724363cf59dc1adcbe1176","url":"assets/js/58cb887f.df73c165.js"},{"revision":"5bb1ece97ce33b3297497c6dadcabf9d","url":"assets/js/6292.8696ce62.js"},{"revision":"ac388cea9700d245921276eecbe01c95","url":"assets/js/6364de16.fbcd481a.js"},{"revision":"962c5858889bde354389880ca2c3b287","url":"assets/js/63be92f4.58551c60.js"},{"revision":"bf5446bfbbe01beb203e56566fcb18bd","url":"assets/js/659355db.35ae2b11.js"},{"revision":"5a71a39b00097ba8b38066156f955ee8","url":"assets/js/6794d4cd.0e22eb44.js"},{"revision":"8e1f595682635f7d87946753762ea756","url":"assets/js/68e633d4.aee8d55b.js"},{"revision":"93baa96d5a7b37085e837e5b6e3c4a14","url":"assets/js/72d6d5c3.6aef0467.js"},{"revision":"af6cb7e097630a3a77aad82f53678e4e","url":"assets/js/754a694e.981e5210.js"},{"revision":"f05fc08cfedc8a8287ac218173d03537","url":"assets/js/7674.b3b8070c.js"},{"revision":"4f99d9fa0794335e603afe2f74aed563","url":"assets/js/7841c085.04b678c0.js"},{"revision":"b3e983a97252152b185fad69226fc271","url":"assets/js/7884.4c29f299.js"},{"revision":"86b1459d82961b7f4bdf7f9d64649a4f","url":"assets/js/82437be0.7f313822.js"},{"revision":"db8b164dd6195229fae819d9d5d5d6b0","url":"assets/js/843abcdb.70874a31.js"},{"revision":"dcc147213d09d55040e1ef73c3047787","url":"assets/js/86bfae87.8d0bdce4.js"},{"revision":"a274074a5c3f0d41e6f4a469bec713f2","url":"assets/js/87eace82.ef9a8ca1.js"},{"revision":"b26076226e707e62fe7748fa90358b55","url":"assets/js/8ac32ba1.884f2dad.js"},{"revision":"3af3258c73dc93ccde66e8e8ee1446db","url":"assets/js/8c50d7e0.c382fc79.js"},{"revision":"e34031def214e6f2d385af7411174e4a","url":"assets/js/946bd85a.0ba8bae6.js"},{"revision":"e897f732ab60a9f0b7a10fb996f83565","url":"assets/js/a3470f84.8933ec78.js"},{"revision":"0a3f1e52d13905fa2a4cb09730d4135a","url":"assets/js/a518d338.0475fda2.js"},{"revision":"4b541e7fd7e51d1b5b75dc68c7846e97","url":"assets/js/af39b1a1.8d2983de.js"},{"revision":"1b9ee1644f85b23b9fb9d8c96238fef6","url":"assets/js/ba8b3534.4578fa66.js"},{"revision":"fcb33a0629270f004ab7d737b8decd76","url":"assets/js/bd370d9d.2e2c2e30.js"},{"revision":"0877cf5dd8ecce7b3e7da914bff8e883","url":"assets/js/c2e1db56.7458d0bf.js"},{"revision":"30db38d65568fa4d56c3ac5a7aada3b3","url":"assets/js/cb3f72b6.6d462a98.js"},{"revision":"d0decd850daacbe4f664385944f38062","url":"assets/js/cb3fd989.994a4804.js"},{"revision":"d71baf6e4eb384087307057064a677c4","url":"assets/js/cc99a760.09236741.js"},{"revision":"c29ff154f3eb24c170b35da7660a2981","url":"assets/js/ce5217b5.b896b349.js"},{"revision":"7d92e7e51f52cd56d60586ff5c09bdd4","url":"assets/js/cf75b345.be376de5.js"},{"revision":"4251d0b935eeb0e9808eab9494dcb599","url":"assets/js/d8f15ad2.eb195702.js"},{"revision":"00f9d820422ab079a2fc041cc6470e5a","url":"assets/js/d8fe0c54.0d228bea.js"},{"revision":"028cb281058051a60ee889f95c435454","url":"assets/js/dae1ef6e.dacce6f1.js"},{"revision":"a99baf5162023f89f384012bf91d6109","url":"assets/js/df538fd9.e63ea225.js"},{"revision":"49e12288fd71403d3f3b8fd072d75fbc","url":"assets/js/eb292d8e.8a505be8.js"},{"revision":"717575d27f8d2485cd32597bd004ac7f","url":"assets/js/ed68828c.76bef32d.js"},{"revision":"1b356ef1f07e2e87eb686eab12e6032c","url":"assets/js/ed6efced.3a2ea70f.js"},{"revision":"0167ba7644fa0c7a9559dd7a16c72852","url":"assets/js/ede3a018.7ddcad6d.js"},{"revision":"bc2addf725fc20114c5ed6f3d6161d1a","url":"assets/js/f26e2a8b.4fa01e71.js"},{"revision":"b8d7b9967c5c8c03553ee66c40e59df8","url":"assets/js/f94171ea.dc847ef1.js"},{"revision":"670db8cb903534cac1a2aa960036f992","url":"assets/js/ff78808e.b261fcfc.js"},{"revision":"efc57cfacdffd53c337ce7cca35c8a80","url":"assets/js/main.5c9ad764.js"},{"revision":"ef2e3c77f81427cc4ad0bf931309a8d8","url":"assets/js/runtime~main.764a0ff7.js"},{"revision":"18164b7c7dc516399f4af8bc8674fd4b","url":"index.html"},{"revision":"5f380a981c72b5ef35223b0260da79fb","url":"manifest.json"},{"revision":"be8dc3fe8dbca08313cbac19ee9d5465","url":"mcserver.html"},{"revision":"a150d3a2f7268b23cbc3fe2c378f7dd2","url":"mcserver/faq.html"},{"revision":"4cf9ffb99ff823d93b6ab01c7f0315bc","url":"mcserver/sponsor.html"},{"revision":"9422a7e503dd942b5761f59f1335a0f8","url":"mcserver/SUMMARY.html"},{"revision":"898492f19f949a0dd70f2f72a4e766f7","url":"mcserver/summary/java-summary.html"},{"revision":"4b0cb49c647004e0f2e4591d748c5dd6","url":"mcserver/summary/pe-summary.html"},{"revision":"66cc6045670d71de53bf74f6b08fd1ee","url":"mcserver/summary/server.html"},{"revision":"a7be0f015bd76f0068642ee330f8d2ae","url":"mcserver/summary/server/beta-survive.html"},{"revision":"8335e8c9022fdf81824071419d5dc984","url":"mcserver/summary/server/bmss.html"},{"revision":"da076d0d109ff29f94d130786b6f5f64","url":"mcserver/summary/server/bskyblock.html"},{"revision":"578a3efcd38e59738dfe69c287c87af2","url":"mcserver/summary/server/creative.html"},{"revision":"ee187794efab7150609d28ca6527b530","url":"mcserver/summary/server/electricity.html"},{"revision":"6846b73a5c24ce4dc7411b44e3eb4fc9","url":"mcserver/summary/server/login.html"},{"revision":"b433dc68b67f0a7747ef1f4204a0ae8d","url":"mcserver/summary/server/mod-server.html"},{"revision":"48c5d9f2be0247dbd18adb01e3be5d7c","url":"mcserver/summary/server/survive.html"},{"revision":"ac8154d8e602151a5c9922b7927b48e3","url":"mcserver/tutorials/configuring-client.html"},{"revision":"5e75412f164e84948646f9ae8892f8c6","url":"mcserver/tutorials/configuring-client/hmcl.html"},{"revision":"9bb7ef84d553284b32f751097f3a1be1","url":"mcserver/tutorials/configuring-client/minecraft-launcher.html"},{"revision":"350b43f0d8ca328bd5790df6ad0dd42e","url":"mcserver/tutorials/configuring-client/pcl.html"},{"revision":"a88cdca24815f003150249624dc36264","url":"mcserver/tutorials/configuring-client/pe.html"},{"revision":"0de3c6d21139782b1d40dd124742f51a","url":"mcserver/tutorials/reg-skin-station.html"},{"revision":"c6b407fea9eb5dd765febe8029d4aae6","url":"search.html"},{"revision":"4b2066fbc9a5e6bca3f7f849cb49ee18","url":"vlssuskin.html"},{"revision":"9eb5b3922ca89040137603e01a092d55","url":"vlssuskin/advanced/api.html"},{"revision":"1dfc69be0d767cb4963016edcb2c0c4a","url":"vlssuskin/advanced/flarum.html"},{"revision":"0a2c083c11fc40e03748fc1c02c07089","url":"vlssuskin/advanced/oauth2.html"},{"revision":"25d163d22c9415510dd6086122b1628a","url":"vlssuskin/advanced/Yggdrasil.html"},{"revision":"dae2e1a89b8927e44df5086edf328590","url":"vlssuskin/faq.html"},{"revision":"d7caf4ff8d888ff7313b4abab671eb46","url":"vlssuskin/newbee/mod.html"},{"revision":"61987423b56d21d57932530a92dba1a0","url":"vlssuskin/newbee/player.html"},{"revision":"5b1070c4b275a75c0c5dbead3db9afae","url":"vlssuskin/newbee/textures.html"},{"revision":"da0628eeaa78ff05b4b44d0fe7511489","url":"vlssuskin/policies/privacy.html"},{"revision":"f3348cdcd8454e59aec04227d4f5c16e","url":"vlssuskin/policies/tos.html"},{"revision":"a76c504da9f629883f6e53cc79cc685a","url":"vlssuskin/score.html"},{"revision":"fc85bf6d36a0478443e0b97c62ea73f3","url":"vlssuskin/vps.html"},{"revision":"7c4823950f1e46da5c9c1798cbfed857","url":"assets/images/cp1-ff24e4c3641e5ff3bc173b93be88be4b.png"},{"revision":"f22ac2789f7ed24b83916217db3d2405","url":"assets/images/f10-036c78a846e0a43c0abdfbe7707a9dc5.png"},{"revision":"d7bf304f333a01a1d25d4830d4af9dd8","url":"assets/images/f3-76fe45f34e5835b64b828ace48c2709a.png"},{"revision":"a1d0cece76bde58167fc49ca0522bf51","url":"assets/images/f4-ea294d91b5e3a10a4bedb05e6ba8c08c.png"},{"revision":"892e52797dd42c7d52fb9962e325f264","url":"assets/images/f5-69800ca3a5bd2aaa2703659d15e0da6f.png"},{"revision":"91c0520e03e12431fb94d58dfb87df59","url":"assets/images/f7-eaa7a4add7b7f6e6d86be8d9ad46ef9b.png"},{"revision":"5bf742f284cb8db476a50a1c88181c9a","url":"assets/images/f8-d73ed51863e39193879b82aea5a5dcea.png"},{"revision":"37b12c1d90ca482f4df0526d1e25cfc6","url":"assets/images/f9-46831ec36556c98b6bf618e7345b0334.png"},{"revision":"327213993babfb406b0ec5943a38f7a8","url":"assets/images/HMCLR1-e9a25d0a64c102ee37853c3d384a7aa5.png"},{"revision":"3b46fa4087f04b3774c7104bb850b3ee","url":"assets/images/HMCLR2-bb1a82cd86966103acf9978bdd64c528.png"},{"revision":"b9672ea37c7197b96365d5c46a7b606e","url":"assets/images/HMCLR3-e214c6f8ec425c506d4f6d058a622bdd.png"},{"revision":"b813bcbf72cbc224f838876c3d9acc29","url":"assets/images/HMCLR4-64c01436471d2293c0d907f202a51045.png"},{"revision":"75f4e1eb508b69a3ee27b896cb194a1e","url":"assets/images/io.netty-8f2c02699afe7a2150d022ab0ac1d897.png"},{"revision":"38f59f5ce85980d8cd4be8f77db1f89b","url":"assets/images/ml1-d7d6922894572195fec463ce17ca6230.jpg"},{"revision":"76c93950a9be43b628deb620fe84b882","url":"assets/images/ml2-bde92400eb470a3044ed45f8efd3cb2a.jpg"},{"revision":"e319fd928412ad4507e6bd1d3b8cdd58","url":"assets/images/ml3-32f47d9f7b3e904b6c6de7b737c53d43.jpg"},{"revision":"758b34882daccd40df76820cc5a14064","url":"assets/images/mod-server_1-11b9f79b181935b0a10723315e4751ae.jpg"},{"revision":"a44c6b528e553a563588ae0b2f6b0878","url":"assets/images/mod-server_2-85acadb09307807174862eaab4b8c8c1.jpg"},{"revision":"aacf3e1bef4d126634f7296e89f71e86","url":"assets/images/o1-4015a91f0e1757cb367b7c081cda9644.png"},{"revision":"91e90bde02c491cc0b730ce0c616959a","url":"assets/images/pcl1-f35772e8e5bd9cef202aef4fb5ee9933.jpg"},{"revision":"22cdc8d3bb1815f5d9cb720dd17009b4","url":"assets/images/pcl2-1cb95f18a615d96d5add06e0436ef962.jpg"},{"revision":"4e67f046d723d40b6db7acb7f143cae6","url":"assets/images/pcl3-ba5dc58d59290d04b5d3c424af49be1d.jpg"},{"revision":"0a4e86e001bac502c388f497159f742e","url":"assets/images/pe1-3db37cf727398ffb895893bd381fa3e9.jpg"},{"revision":"298c554a3c8aa1efe5b9b302614e474a","url":"assets/images/pe2-c32615d4ee1e2c5cb4e833da39c87866.jpg"},{"revision":"605071a41f45220a93e7afa031dd815c","url":"assets/images/st2-e14c0c41acc57c0cff85ff268c80b5f0.png"},{"revision":"593ec90499e6150193c8604f9bb05598","url":"assets/images/st4-e280d9e51e7d22e0abcfc7cc218314ec.png"},{"revision":"00751587a16b4e9f5cedba05ec48a026","url":"assets/images/st5-d38b69ba828bdc1b22f4801bfc86ca18.png"},{"revision":"81517c5d8fcaa656db8fa4c09e6d8ad8","url":"assets/images/st7-4f53104cc3f8f41283079d12533c102b.png"},{"revision":"666aba4e7b65bddce380a43fc2e2a635","url":"assets/images/tm1-770f15760754eed524e0fe7370b217dd.jpg"},{"revision":"5f3f0d7fbaf22372b0ab28fad744492d","url":"assets/images/tm2-f193a82dba19f996392330e428e6c16f.jpg"},{"revision":"fd0e4a9daa047ad0c4595652c3b5ab3e","url":"assets/images/tm3-496e286d1dbc6e51374d35a972a50cd9.jpg"},{"revision":"599205b54e94539964f7674f1f846e1c","url":"assets/images/Unknown-host-c87f97dd4c637cadaf3c84d22be74c53.png"},{"revision":"a408b7fe2cf67c6200a558eefbf69798","url":"assets/images/vlssu历史线.drawio-9987d326965d6edcf0fb808530465a30.svg"},{"revision":"f434adad2c355e80a7d988b47bc25971","url":"assets/images/vps-868ad78259e863c29590ffc466be7cd3.png"},{"revision":"7809e6ac957b254d3772cb95ecae11e3","url":"assets/images/y1-1e9e432edaebf92234f14d725ec776a3.png"},{"revision":"c4372071890e568a5e42160eb6a93701","url":"assets/images/y10-a99ddb08873704743f258b61687eb67d.png"},{"revision":"ea386e1387a1ca824ca1988ea252e7d0","url":"assets/images/y2-64ba226a97a5a3cf8eb0502b7b163feb.png"},{"revision":"b9672ea37c7197b96365d5c46a7b606e","url":"assets/images/y3-e214c6f8ec425c506d4f6d058a622bdd.png"},{"revision":"98634887f7732da8a087dc954c8b2a0b","url":"assets/images/y4-e7028fc369d40ab2d3b5748938a29722.png"},{"revision":"dda8a13c0002bd4ddec1ab3c97aa7fd7","url":"assets/images/y5-981d063d00a7441585e09c272d1ae762.png"},{"revision":"dbb9fa2d5e6786edc7bc151944df2dc2","url":"assets/images/y6-09a558e8b94ea6887be40a430dd706a0.png"},{"revision":"b4a2311e6b6de7a44ed43a4cfa6bf54a","url":"assets/images/y7-d2511a3f71b59ba6c88138a00e0903cc.png"},{"revision":"0b712949c833f51502f82a530515a027","url":"assets/images/y8-fe73a23522099c54a3c42b9337ede168.png"},{"revision":"bb8e9b96d93b6cb3ad01069b76a4f90e","url":"assets/images/y9-9598dd02e1cbf2042568ca65ed27f6c6.png"},{"revision":"fc576f833f663ed7ce680a8dcb9652f7","url":"assets/images/无效的登入凭据,请核查客户端外置登入配置或稍后重试-f7a338e35259adf72d954ee40f9c16a4.png"},{"revision":"f63827e9b833436fe9c8483c9a9c4f33","url":"assets/images/无法解析主机名-f3204c3245e2d2977059b592104e96d6.png"},{"revision":"18edfc64634eb94783a30b6f0daa5c7a","url":"assets/images/无法验证用户名-91be0b129e14349a103eecc3b24e0ea9.png"},{"revision":"70c42323217337654e14330f7a1a2df7","url":"assets/images/登入失败：无效会话（请尝试重启游戏及启动器）-455cd2558f7447316b77026694db1fda.png"},{"revision":"f00e7a764dbe0b4dc21e03ff84b7ee99","url":"assets/images/登入失败Null-264df3d6a0d50e5090507974623a63f1.png"},{"revision":"e27d0abdce9a8a77b6901a62921792ff","url":"assets/images/登入失败身份验证目前正在停机维护-651fba69006ba02e99c049d27d29e01e.png"},{"revision":"f2d7cd73ba1d8d2375dbd856fb640e2f","url":"img/favicon.ico"},{"revision":"1c8622eac81f53f0a386124bc8cadbb2","url":"img/icons/icon-128x128.png"},{"revision":"00cc75375682e6f9df03845a38393ca8","url":"img/icons/icon-144x144.png"},{"revision":"54fe64c15e3aa5a91d95ae0aab77909f","url":"img/icons/icon-152x152.png"},{"revision":"e578a4c67469ff14f7fb3440f0d2c3c4","url":"img/icons/icon-192x192.png"},{"revision":"4e5680c95bd88cc5579f0b7cc04c7d0b","url":"img/icons/icon-384x384.png"},{"revision":"f636f92aab7db0ec790a0006d6da997e","url":"img/icons/icon-512x512.png"},{"revision":"ce1c86e716619db226340de67921fb37","url":"img/icons/icon-72x72.png"},{"revision":"b603ab12dc0ad2b68812f85f9706b43a","url":"img/icons/icon-96x96.png"},{"revision":"17aa327002484349e4c087a638848d8f","url":"img/logo.svg"},{"revision":"cfdd4b00e82effb02931776780993f0f","url":"img/og-image.png"},{"revision":"282ca54c573eb894389751f5ab755647","url":"img/vlssu.png"},{"revision":"62dbb62edfb73578956170bab16e1102","url":"assets/fonts/jetbrains-mono-all-400-normal-2346733ac7062d6402c0c859ccbf227e.woff"},{"revision":"73e0466a4982d9cc878c4880554d7cbf","url":"assets/fonts/jetbrains-mono-latin-400-normal-d0b41bd1d599bc0a52b733fd39c8cc06.woff2"},{"revision":"eea8a45e4d02c3c163a90a2a4743d37b","url":"assets/fonts/JetBrainsMono-Regular-d922fd933fc62eec7ec568cb006b4964.woff2"}],s=new m({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();