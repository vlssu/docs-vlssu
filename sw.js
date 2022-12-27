(()=>{"use strict";var e={365:()=>{try{self["workbox:core:6.5.3"]&&_()}catch(e){}},461:()=>{try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},240:()=>{try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},625:()=>{try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(365);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(461);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(625);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class v extends _{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(v.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==v.copyRedirectedCacheableResponsesPlugin&&(a===v.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(v.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}v.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},v.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class m{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new v({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(240);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"d3686e6029c6820a65c01a19b33e8380","url":"__docusaurus/debug.html"},{"revision":"352e2306aa2b202cf83461a8f590073d","url":"__docusaurus/debug/config.html"},{"revision":"d3c7de3db924670625e14db74a960201","url":"__docusaurus/debug/content.html"},{"revision":"16e1ac9b4b4bb06d5be5ab3d906f563c","url":"__docusaurus/debug/globalData.html"},{"revision":"fcaf98582aa419062ff1abffe6b0a056","url":"__docusaurus/debug/metadata.html"},{"revision":"dbe702315230b980a28e53452fb2ac34","url":"__docusaurus/debug/registry.html"},{"revision":"642a88ac634843b93d926c2118d0ec00","url":"__docusaurus/debug/routes.html"},{"revision":"9b19455e48880e9722e2e58bfe403cfc","url":"404.html"},{"revision":"501c4ddbd32e7381873b94daf8c91d0c","url":"assets/css/styles.71d71d3c.css"},{"revision":"d0af203aa32d9edd9f1f548e8d9b157b","url":"assets/js/100f3b11.e1cd3616.js"},{"revision":"fd0b232eebde3acbf0a3b37a3f4bbb8e","url":"assets/js/1192.cf39fd69.js"},{"revision":"46c563a1965cb05046a0a20a68c73536","url":"assets/js/146891a0.c378ff78.js"},{"revision":"515ade11b9f210790d6bfa8ff8413c19","url":"assets/js/16a5b327.a0d79e9b.js"},{"revision":"c6a5a4a71cea9845adf4da90969698c6","url":"assets/js/17896441.948d2da2.js"},{"revision":"b77568cd06d0c357f64c46df8c103f21","url":"assets/js/1a4e3797.9211dd56.js"},{"revision":"e7974659c941560d4aca1f67b19cf49c","url":"assets/js/1be78505.6bf4a01c.js"},{"revision":"5754e17579b7e82051bac2d7b2d384f1","url":"assets/js/1df93b7f.3eb4bed2.js"},{"revision":"ad64401adcef158d2b00557e43b0579a","url":"assets/js/2044.a2504859.js"},{"revision":"e08c9ac1d42e8cbe4de054b6d81b3cd9","url":"assets/js/23abe487.845e2c22.js"},{"revision":"5fa3e7258be3053d4ea41163b6f19dc9","url":"assets/js/246f2c6f.0434f541.js"},{"revision":"69277da86c9c7d01d7faf9532158c00f","url":"assets/js/2577.8f3cda78.js"},{"revision":"86de9cde3c08ea0d48799c39c041b238","url":"assets/js/2d3a9d6a.d824e904.js"},{"revision":"b86757da9fb6bb266aba43eb2230941c","url":"assets/js/3135.a5586c6c.js"},{"revision":"fe535e74498945a0c63fd1991b08bf5c","url":"assets/js/31389f65.bcaa46c5.js"},{"revision":"87cb7d8c26d6282163143fac14debb3f","url":"assets/js/3882.2b2e45ff.js"},{"revision":"7faa8ac1045937e441df89045713821b","url":"assets/js/3a50d4e7.2b3e19ae.js"},{"revision":"da94bdcf91dd14bb96a1ab0964fd80f4","url":"assets/js/406d4c28.af6a2a5a.js"},{"revision":"1b00a8d2e6688eaa1ac383c0bd4335ed","url":"assets/js/428bf6b8.8b37fd4d.js"},{"revision":"71d1fb8ad5de6d08fde7fc146b30c3ff","url":"assets/js/4374.42a80f6f.js"},{"revision":"e7e76816808ed7aeb58584d915df016a","url":"assets/js/58cb887f.a7663604.js"},{"revision":"5bb1ece97ce33b3297497c6dadcabf9d","url":"assets/js/6292.8696ce62.js"},{"revision":"4f904234807526308b517e478fd3060c","url":"assets/js/6364de16.293d957d.js"},{"revision":"9ef578a3ab6797cf8edf0ffcd9403322","url":"assets/js/63be92f4.0f52ff42.js"},{"revision":"bf5446bfbbe01beb203e56566fcb18bd","url":"assets/js/659355db.35ae2b11.js"},{"revision":"5a71a39b00097ba8b38066156f955ee8","url":"assets/js/6794d4cd.0e22eb44.js"},{"revision":"8e1f595682635f7d87946753762ea756","url":"assets/js/68e633d4.aee8d55b.js"},{"revision":"93baa96d5a7b37085e837e5b6e3c4a14","url":"assets/js/72d6d5c3.6aef0467.js"},{"revision":"041cd264f972b8a71f33b27e3c310627","url":"assets/js/754a694e.29225902.js"},{"revision":"f05fc08cfedc8a8287ac218173d03537","url":"assets/js/7674.b3b8070c.js"},{"revision":"20e43789a3b9afea476373b80b87e33d","url":"assets/js/7841c085.899324de.js"},{"revision":"b3e983a97252152b185fad69226fc271","url":"assets/js/7884.4c29f299.js"},{"revision":"86b1459d82961b7f4bdf7f9d64649a4f","url":"assets/js/82437be0.7f313822.js"},{"revision":"4dd1cbd7a4557c72ca5c934fe5c3a6b2","url":"assets/js/843abcdb.b4e1624a.js"},{"revision":"30356fe3777cdb3ff6283909248e1ab2","url":"assets/js/86bfae87.1b6d4505.js"},{"revision":"a274074a5c3f0d41e6f4a469bec713f2","url":"assets/js/87eace82.ef9a8ca1.js"},{"revision":"375ff62dbf0e5a70feffb28d3c24e555","url":"assets/js/8ac32ba1.828d8d16.js"},{"revision":"691a4446149ce72cc9d72e8b0ce044a6","url":"assets/js/8c50d7e0.dca27d11.js"},{"revision":"e34031def214e6f2d385af7411174e4a","url":"assets/js/946bd85a.0ba8bae6.js"},{"revision":"d1dc50c75a8edd68d2fe32a8830dc708","url":"assets/js/a3470f84.b86beabf.js"},{"revision":"869b278c6b6b17f49ac8e73cdbf93e48","url":"assets/js/a518d338.9e995fd4.js"},{"revision":"c7f8cd909754152c25901aa1511dd5b4","url":"assets/js/af39b1a1.ac78acfa.js"},{"revision":"1b9ee1644f85b23b9fb9d8c96238fef6","url":"assets/js/ba8b3534.4578fa66.js"},{"revision":"e7b14f8511349f184ffd02b45740c54d","url":"assets/js/bd370d9d.8820b25d.js"},{"revision":"d7c36790188acf483a3e79529e81cf27","url":"assets/js/c2e1db56.b0b9a6f5.js"},{"revision":"4cb88189dd8b814adf33b1634ac2585c","url":"assets/js/cb3f72b6.2ff06fa5.js"},{"revision":"57d0b596a4f35c6078e6e8ff81509884","url":"assets/js/cb3fd989.5f929e9d.js"},{"revision":"5973909d59fa50c5d0e7d430524c72de","url":"assets/js/cc99a760.c2ba97cc.js"},{"revision":"8e280571208af6b56ef6600c90e987c4","url":"assets/js/ce5217b5.792cf4ea.js"},{"revision":"46ccc03c1837c5f968c066bce1c4471d","url":"assets/js/cf75b345.c887e8f5.js"},{"revision":"4deba84e28384afbffcf6ea1673b2201","url":"assets/js/d8f15ad2.865755ed.js"},{"revision":"cfcf475e637dc8512c0344da2113477f","url":"assets/js/d8fe0c54.fdeb2e28.js"},{"revision":"2b14322259479a30abd029f53df8ad71","url":"assets/js/dae1ef6e.ea09d608.js"},{"revision":"a99baf5162023f89f384012bf91d6109","url":"assets/js/df538fd9.e63ea225.js"},{"revision":"40b3f1c547ed78773ee7cb9ca9767655","url":"assets/js/eb292d8e.f0da0389.js"},{"revision":"9ca2fdfa5f8fb446951d457544ce2734","url":"assets/js/ed68828c.2f4b195e.js"},{"revision":"01096aafe87964bf8edc3caeb3a08223","url":"assets/js/ed6efced.21537e8c.js"},{"revision":"0167ba7644fa0c7a9559dd7a16c72852","url":"assets/js/ede3a018.7ddcad6d.js"},{"revision":"9b5516cc454b9a5be2b0d328b9e62981","url":"assets/js/f26e2a8b.e4604a0a.js"},{"revision":"c8b8c46df24d43ed007d49474d3cc91c","url":"assets/js/f94171ea.ef6ef72b.js"},{"revision":"faeb4fea47c5d14d7056b6e9713970c5","url":"assets/js/ff78808e.a568e44b.js"},{"revision":"43971a002e5cf66212a992ccdc369f3b","url":"assets/js/main.055b5cfc.js"},{"revision":"c5f54abf6d6b4c6ad4537bc13d84f838","url":"assets/js/runtime~main.62df8ff3.js"},{"revision":"dfe8321a30c3a260628e5f4094e93b5d","url":"index.html"},{"revision":"5f380a981c72b5ef35223b0260da79fb","url":"manifest.json"},{"revision":"91660a65445dc9e03f06bfd5ed0eb736","url":"mcserver.html"},{"revision":"5ce711b736cdcba6ea4a07f095561a4e","url":"mcserver/faq.html"},{"revision":"1b42823b76f5787fd0fbd0d032f1507e","url":"mcserver/sponsor.html"},{"revision":"d61cceaa5864cf4c5d6e9334a7fc4416","url":"mcserver/SUMMARY.html"},{"revision":"98a90eb08f20d1e2cc929a8ad267d27d","url":"mcserver/summary/java-summary.html"},{"revision":"428dbb3e63b1474b3dd9124c147415b1","url":"mcserver/summary/pe-summary.html"},{"revision":"8b17e5390b08019fa0cbe4663c85c98a","url":"mcserver/summary/server.html"},{"revision":"20c01476cabc53b0a18623f0e173af79","url":"mcserver/summary/server/beta-survive.html"},{"revision":"897e13edb761efc144193898c0cdb237","url":"mcserver/summary/server/bmss.html"},{"revision":"3cf2873feaf18cbd53e91ebf234b440b","url":"mcserver/summary/server/bskyblock.html"},{"revision":"76f7529a886b40d9a5687ac20930f455","url":"mcserver/summary/server/creative.html"},{"revision":"d5e77e435650f6284b94786533958f24","url":"mcserver/summary/server/electricity.html"},{"revision":"18c264fd761c84740ae8fbae185340e4","url":"mcserver/summary/server/login.html"},{"revision":"6bb81ccf6953a84c8900307f4adf6036","url":"mcserver/summary/server/mod-server.html"},{"revision":"c92d3156d9ace16ceb4ac843c0d909bb","url":"mcserver/summary/server/survive.html"},{"revision":"9633eecc3427ee241c17db92317f36e3","url":"mcserver/tutorials/configuring-client.html"},{"revision":"dea50967c3706935344809aed6d59451","url":"mcserver/tutorials/configuring-client/hmcl.html"},{"revision":"9febf2640c0672f6181ae117a75dbcac","url":"mcserver/tutorials/configuring-client/minecraft-launcher.html"},{"revision":"a97b7f93af4530a18b73efbd331ee2e8","url":"mcserver/tutorials/configuring-client/pcl.html"},{"revision":"b309055b69aa2c3e3a8ac14e3f71d7fe","url":"mcserver/tutorials/configuring-client/pe.html"},{"revision":"8dd5de236557ce2880baba5ea1e55a9c","url":"mcserver/tutorials/reg-skin-station.html"},{"revision":"e3d59d543866717aea82604e0d511fe8","url":"search.html"},{"revision":"393f76df62c0cd6e2844f768a6b81f07","url":"vlssuskin.html"},{"revision":"512447a5f97ff661c5dc7031f533e752","url":"vlssuskin/advanced/api.html"},{"revision":"6672be699206c862f9882064098ab79b","url":"vlssuskin/advanced/flarum.html"},{"revision":"49bcea22d2cc70daffe18f0964cf198a","url":"vlssuskin/advanced/oauth2.html"},{"revision":"1a9e1bd924a519d28ec5fd31699bb894","url":"vlssuskin/advanced/Yggdrasil.html"},{"revision":"5a4836611e56f6451f42eaa8c4083fb3","url":"vlssuskin/faq.html"},{"revision":"2c3d121037b8db53715bd1122f33e360","url":"vlssuskin/newbee/mod.html"},{"revision":"b775db69c2237b2650e2d4da0ab7e0fb","url":"vlssuskin/newbee/player.html"},{"revision":"96696aef499fb9d39bbf2bbddd6380c9","url":"vlssuskin/newbee/textures.html"},{"revision":"84e74f847ca298e2d4ae6c93da98e1f6","url":"vlssuskin/policies/privacy.html"},{"revision":"6e009e9b0c59a24ff48b027b18707a80","url":"vlssuskin/policies/tos.html"},{"revision":"d0939359860c60cf3f7fbfdbb06a929a","url":"vlssuskin/score.html"},{"revision":"2b671ac2ffe330811500d7c05282917d","url":"vlssuskin/vps.html"},{"revision":"7c4823950f1e46da5c9c1798cbfed857","url":"assets/images/cp1-ff24e4c3641e5ff3bc173b93be88be4b.png"},{"revision":"f22ac2789f7ed24b83916217db3d2405","url":"assets/images/f10-036c78a846e0a43c0abdfbe7707a9dc5.png"},{"revision":"d7bf304f333a01a1d25d4830d4af9dd8","url":"assets/images/f3-76fe45f34e5835b64b828ace48c2709a.png"},{"revision":"a1d0cece76bde58167fc49ca0522bf51","url":"assets/images/f4-ea294d91b5e3a10a4bedb05e6ba8c08c.png"},{"revision":"892e52797dd42c7d52fb9962e325f264","url":"assets/images/f5-69800ca3a5bd2aaa2703659d15e0da6f.png"},{"revision":"91c0520e03e12431fb94d58dfb87df59","url":"assets/images/f7-eaa7a4add7b7f6e6d86be8d9ad46ef9b.png"},{"revision":"5bf742f284cb8db476a50a1c88181c9a","url":"assets/images/f8-d73ed51863e39193879b82aea5a5dcea.png"},{"revision":"37b12c1d90ca482f4df0526d1e25cfc6","url":"assets/images/f9-46831ec36556c98b6bf618e7345b0334.png"},{"revision":"327213993babfb406b0ec5943a38f7a8","url":"assets/images/HMCLR1-e9a25d0a64c102ee37853c3d384a7aa5.png"},{"revision":"3b46fa4087f04b3774c7104bb850b3ee","url":"assets/images/HMCLR2-bb1a82cd86966103acf9978bdd64c528.png"},{"revision":"b9672ea37c7197b96365d5c46a7b606e","url":"assets/images/HMCLR3-e214c6f8ec425c506d4f6d058a622bdd.png"},{"revision":"b813bcbf72cbc224f838876c3d9acc29","url":"assets/images/HMCLR4-64c01436471d2293c0d907f202a51045.png"},{"revision":"75f4e1eb508b69a3ee27b896cb194a1e","url":"assets/images/io.netty-8f2c02699afe7a2150d022ab0ac1d897.png"},{"revision":"38f59f5ce85980d8cd4be8f77db1f89b","url":"assets/images/ml1-d7d6922894572195fec463ce17ca6230.jpg"},{"revision":"76c93950a9be43b628deb620fe84b882","url":"assets/images/ml2-bde92400eb470a3044ed45f8efd3cb2a.jpg"},{"revision":"e319fd928412ad4507e6bd1d3b8cdd58","url":"assets/images/ml3-32f47d9f7b3e904b6c6de7b737c53d43.jpg"},{"revision":"aacf3e1bef4d126634f7296e89f71e86","url":"assets/images/o1-4015a91f0e1757cb367b7c081cda9644.png"},{"revision":"91e90bde02c491cc0b730ce0c616959a","url":"assets/images/pcl1-f35772e8e5bd9cef202aef4fb5ee9933.jpg"},{"revision":"22cdc8d3bb1815f5d9cb720dd17009b4","url":"assets/images/pcl2-1cb95f18a615d96d5add06e0436ef962.jpg"},{"revision":"4e67f046d723d40b6db7acb7f143cae6","url":"assets/images/pcl3-ba5dc58d59290d04b5d3c424af49be1d.jpg"},{"revision":"0a4e86e001bac502c388f497159f742e","url":"assets/images/pe1-3db37cf727398ffb895893bd381fa3e9.jpg"},{"revision":"298c554a3c8aa1efe5b9b302614e474a","url":"assets/images/pe2-c32615d4ee1e2c5cb4e833da39c87866.jpg"},{"revision":"605071a41f45220a93e7afa031dd815c","url":"assets/images/st2-e14c0c41acc57c0cff85ff268c80b5f0.png"},{"revision":"593ec90499e6150193c8604f9bb05598","url":"assets/images/st4-e280d9e51e7d22e0abcfc7cc218314ec.png"},{"revision":"00751587a16b4e9f5cedba05ec48a026","url":"assets/images/st5-d38b69ba828bdc1b22f4801bfc86ca18.png"},{"revision":"81517c5d8fcaa656db8fa4c09e6d8ad8","url":"assets/images/st7-4f53104cc3f8f41283079d12533c102b.png"},{"revision":"666aba4e7b65bddce380a43fc2e2a635","url":"assets/images/tm1-770f15760754eed524e0fe7370b217dd.jpg"},{"revision":"5f3f0d7fbaf22372b0ab28fad744492d","url":"assets/images/tm2-f193a82dba19f996392330e428e6c16f.jpg"},{"revision":"fd0e4a9daa047ad0c4595652c3b5ab3e","url":"assets/images/tm3-496e286d1dbc6e51374d35a972a50cd9.jpg"},{"revision":"599205b54e94539964f7674f1f846e1c","url":"assets/images/Unknown-host-c87f97dd4c637cadaf3c84d22be74c53.png"},{"revision":"a408b7fe2cf67c6200a558eefbf69798","url":"assets/images/vlssu历史线.drawio-9987d326965d6edcf0fb808530465a30.svg"},{"revision":"f434adad2c355e80a7d988b47bc25971","url":"assets/images/vps-868ad78259e863c29590ffc466be7cd3.png"},{"revision":"7809e6ac957b254d3772cb95ecae11e3","url":"assets/images/y1-1e9e432edaebf92234f14d725ec776a3.png"},{"revision":"c4372071890e568a5e42160eb6a93701","url":"assets/images/y10-a99ddb08873704743f258b61687eb67d.png"},{"revision":"ea386e1387a1ca824ca1988ea252e7d0","url":"assets/images/y2-64ba226a97a5a3cf8eb0502b7b163feb.png"},{"revision":"b9672ea37c7197b96365d5c46a7b606e","url":"assets/images/y3-e214c6f8ec425c506d4f6d058a622bdd.png"},{"revision":"98634887f7732da8a087dc954c8b2a0b","url":"assets/images/y4-e7028fc369d40ab2d3b5748938a29722.png"},{"revision":"dda8a13c0002bd4ddec1ab3c97aa7fd7","url":"assets/images/y5-981d063d00a7441585e09c272d1ae762.png"},{"revision":"dbb9fa2d5e6786edc7bc151944df2dc2","url":"assets/images/y6-09a558e8b94ea6887be40a430dd706a0.png"},{"revision":"b4a2311e6b6de7a44ed43a4cfa6bf54a","url":"assets/images/y7-d2511a3f71b59ba6c88138a00e0903cc.png"},{"revision":"0b712949c833f51502f82a530515a027","url":"assets/images/y8-fe73a23522099c54a3c42b9337ede168.png"},{"revision":"bb8e9b96d93b6cb3ad01069b76a4f90e","url":"assets/images/y9-9598dd02e1cbf2042568ca65ed27f6c6.png"},{"revision":"fc576f833f663ed7ce680a8dcb9652f7","url":"assets/images/无效的登入凭据,请核查客户端外置登入配置或稍后重试-f7a338e35259adf72d954ee40f9c16a4.png"},{"revision":"f63827e9b833436fe9c8483c9a9c4f33","url":"assets/images/无法解析主机名-f3204c3245e2d2977059b592104e96d6.png"},{"revision":"18edfc64634eb94783a30b6f0daa5c7a","url":"assets/images/无法验证用户名-91be0b129e14349a103eecc3b24e0ea9.png"},{"revision":"70c42323217337654e14330f7a1a2df7","url":"assets/images/登入失败：无效会话（请尝试重启游戏及启动器）-455cd2558f7447316b77026694db1fda.png"},{"revision":"f00e7a764dbe0b4dc21e03ff84b7ee99","url":"assets/images/登入失败Null-264df3d6a0d50e5090507974623a63f1.png"},{"revision":"e27d0abdce9a8a77b6901a62921792ff","url":"assets/images/登入失败身份验证目前正在停机维护-651fba69006ba02e99c049d27d29e01e.png"},{"revision":"f2d7cd73ba1d8d2375dbd856fb640e2f","url":"img/favicon.ico"},{"revision":"1c8622eac81f53f0a386124bc8cadbb2","url":"img/icons/icon-128x128.png"},{"revision":"00cc75375682e6f9df03845a38393ca8","url":"img/icons/icon-144x144.png"},{"revision":"54fe64c15e3aa5a91d95ae0aab77909f","url":"img/icons/icon-152x152.png"},{"revision":"e578a4c67469ff14f7fb3440f0d2c3c4","url":"img/icons/icon-192x192.png"},{"revision":"4e5680c95bd88cc5579f0b7cc04c7d0b","url":"img/icons/icon-384x384.png"},{"revision":"f636f92aab7db0ec790a0006d6da997e","url":"img/icons/icon-512x512.png"},{"revision":"ce1c86e716619db226340de67921fb37","url":"img/icons/icon-72x72.png"},{"revision":"b603ab12dc0ad2b68812f85f9706b43a","url":"img/icons/icon-96x96.png"},{"revision":"17aa327002484349e4c087a638848d8f","url":"img/logo.svg"},{"revision":"cfdd4b00e82effb02931776780993f0f","url":"img/og-image.png"},{"revision":"282ca54c573eb894389751f5ab755647","url":"img/vlssu.png"},{"revision":"62dbb62edfb73578956170bab16e1102","url":"assets/fonts/jetbrains-mono-all-400-normal-2346733ac7062d6402c0c859ccbf227e.woff"},{"revision":"73e0466a4982d9cc878c4880554d7cbf","url":"assets/fonts/jetbrains-mono-latin-400-normal-d0b41bd1d599bc0a52b733fd39c8cc06.woff2"},{"revision":"eea8a45e4d02c3c163a90a2a4743d37b","url":"assets/fonts/JetBrainsMono-Regular-d922fd933fc62eec7ec568cb006b4964.woff2"}],s=new m({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();