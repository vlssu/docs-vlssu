(()=>{"use strict";var e={365:()=>{try{self["workbox:core:6.5.3"]&&_()}catch(e){}},461:()=>{try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},240:()=>{try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},625:()=>{try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(365);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(461);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(625);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class v extends _{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(v.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==v.copyRedirectedCacheableResponsesPlugin&&(a===v.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(v.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}v.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},v.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class m{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new v({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(240);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"68f5c49f51c3bdce5add86f52126b6a5","url":"__docusaurus/debug.html"},{"revision":"a2bc70c661e4e5090e5c68b457a4553a","url":"__docusaurus/debug/config.html"},{"revision":"349661a08add076ab40e4a671cfa4666","url":"__docusaurus/debug/content.html"},{"revision":"554c9ce8d61a959bc66e195f2d900b0f","url":"__docusaurus/debug/globalData.html"},{"revision":"9fad6d9edd7b4739520dcb32d0be9b31","url":"__docusaurus/debug/metadata.html"},{"revision":"9e2f24dc7c7299b86617a3b1afdd3021","url":"__docusaurus/debug/registry.html"},{"revision":"0a6152302c4662a7a753e1157bfc9d9e","url":"__docusaurus/debug/routes.html"},{"revision":"d0e02310e72ad0c0d7e1d170f7b65720","url":"404.html"},{"revision":"501c4ddbd32e7381873b94daf8c91d0c","url":"assets/css/styles.71d71d3c.css"},{"revision":"517c923a27c5dc66ce458f289bb7de5a","url":"assets/js/100f3b11.b864f0e2.js"},{"revision":"fd0b232eebde3acbf0a3b37a3f4bbb8e","url":"assets/js/1192.cf39fd69.js"},{"revision":"b844b31d56c8b5bd7176d18024a4f3d4","url":"assets/js/146891a0.675de3eb.js"},{"revision":"2ec427482a8c92726b81f2ca14fb1d77","url":"assets/js/16a5b327.89d8a285.js"},{"revision":"c6a5a4a71cea9845adf4da90969698c6","url":"assets/js/17896441.948d2da2.js"},{"revision":"b77568cd06d0c357f64c46df8c103f21","url":"assets/js/1a4e3797.9211dd56.js"},{"revision":"e7974659c941560d4aca1f67b19cf49c","url":"assets/js/1be78505.6bf4a01c.js"},{"revision":"5754e17579b7e82051bac2d7b2d384f1","url":"assets/js/1df93b7f.3eb4bed2.js"},{"revision":"ad64401adcef158d2b00557e43b0579a","url":"assets/js/2044.a2504859.js"},{"revision":"e08c9ac1d42e8cbe4de054b6d81b3cd9","url":"assets/js/23abe487.845e2c22.js"},{"revision":"ba32d0691fc24d12aeed4627798c8d2c","url":"assets/js/246f2c6f.33b1e9ae.js"},{"revision":"69277da86c9c7d01d7faf9532158c00f","url":"assets/js/2577.8f3cda78.js"},{"revision":"72ad9f7bb77c33c9716f990d358a84be","url":"assets/js/2d3a9d6a.fb673e60.js"},{"revision":"b86757da9fb6bb266aba43eb2230941c","url":"assets/js/3135.a5586c6c.js"},{"revision":"fe535e74498945a0c63fd1991b08bf5c","url":"assets/js/31389f65.bcaa46c5.js"},{"revision":"87cb7d8c26d6282163143fac14debb3f","url":"assets/js/3882.2b2e45ff.js"},{"revision":"9467497b91d9c6a1cfecdbc1656d085c","url":"assets/js/3a50d4e7.0b3dc6ec.js"},{"revision":"97cc86e26eb3d2dfc05958db365ad762","url":"assets/js/406d4c28.224be55d.js"},{"revision":"60482c0bed7d0f19e1d61f76ceeb6de9","url":"assets/js/428bf6b8.651b7272.js"},{"revision":"71d1fb8ad5de6d08fde7fc146b30c3ff","url":"assets/js/4374.42a80f6f.js"},{"revision":"5a5885fb47ec5d78b0b14b5978335659","url":"assets/js/58cb887f.5aaa8b4d.js"},{"revision":"5bb1ece97ce33b3297497c6dadcabf9d","url":"assets/js/6292.8696ce62.js"},{"revision":"a17ba41eca21f3e64a77ac5c4f4b237b","url":"assets/js/6364de16.16abb0a1.js"},{"revision":"937c5a35aa440fc837ea8b7c4d41c4b7","url":"assets/js/63be92f4.1373ff4e.js"},{"revision":"bf5446bfbbe01beb203e56566fcb18bd","url":"assets/js/659355db.35ae2b11.js"},{"revision":"5a71a39b00097ba8b38066156f955ee8","url":"assets/js/6794d4cd.0e22eb44.js"},{"revision":"8e1f595682635f7d87946753762ea756","url":"assets/js/68e633d4.aee8d55b.js"},{"revision":"93baa96d5a7b37085e837e5b6e3c4a14","url":"assets/js/72d6d5c3.6aef0467.js"},{"revision":"224d5ea9406b0c9362762b7331af239a","url":"assets/js/754a694e.45d8253b.js"},{"revision":"f05fc08cfedc8a8287ac218173d03537","url":"assets/js/7674.b3b8070c.js"},{"revision":"e448ef9332eaead602d12e86a908ff97","url":"assets/js/7841c085.18dcea52.js"},{"revision":"b3e983a97252152b185fad69226fc271","url":"assets/js/7884.4c29f299.js"},{"revision":"86b1459d82961b7f4bdf7f9d64649a4f","url":"assets/js/82437be0.7f313822.js"},{"revision":"3526abf4f688703c155884ccae3684f4","url":"assets/js/843abcdb.878119fb.js"},{"revision":"3e9d1653f2ed9bf2fe0d630b79d3e0aa","url":"assets/js/86bfae87.67087047.js"},{"revision":"a274074a5c3f0d41e6f4a469bec713f2","url":"assets/js/87eace82.ef9a8ca1.js"},{"revision":"9cd7283a085ee1a846a686ae98f9d483","url":"assets/js/8ac32ba1.0365d1fa.js"},{"revision":"2b87deb160c9a48ab26d41221103e62d","url":"assets/js/8c50d7e0.9d44f40f.js"},{"revision":"e34031def214e6f2d385af7411174e4a","url":"assets/js/946bd85a.0ba8bae6.js"},{"revision":"82b5e23453a7abaa31564542af0872a7","url":"assets/js/a3470f84.4c08d981.js"},{"revision":"5bad05f40fb8a7e4da41acd28121d3db","url":"assets/js/a518d338.3f873fd6.js"},{"revision":"9c14508d98105199ba332b43e1b0b4db","url":"assets/js/af39b1a1.5d549dd8.js"},{"revision":"1b9ee1644f85b23b9fb9d8c96238fef6","url":"assets/js/ba8b3534.4578fa66.js"},{"revision":"76db405afdc14227ed4f7bbc6b3e1af3","url":"assets/js/bd370d9d.b07fa60f.js"},{"revision":"1e36a33e9de7cf907a1073c598e71052","url":"assets/js/c2e1db56.f18e42bb.js"},{"revision":"34cbfef363f95b711b38efe67c42b1d5","url":"assets/js/cb3f72b6.c0f6f151.js"},{"revision":"b2cb5f55120594ea0b3bbbd59659162a","url":"assets/js/cb3fd989.b09afbe2.js"},{"revision":"b2f3300a75cb2309dc880975700a6fca","url":"assets/js/cc99a760.23e65080.js"},{"revision":"ff51561332400f57c735e1c980bc951a","url":"assets/js/ce5217b5.b96c8ddb.js"},{"revision":"cd388840aa11910c16e37ad8ea16b00e","url":"assets/js/cf75b345.a67c6228.js"},{"revision":"67da2314865c193371a50ee4e591dd2b","url":"assets/js/d8f15ad2.e2735b9c.js"},{"revision":"6209beb2992697afd262dc38e93e32a9","url":"assets/js/d8fe0c54.a492236f.js"},{"revision":"844284949bc1c5209f54e1031099c22d","url":"assets/js/dae1ef6e.df7a9734.js"},{"revision":"a99baf5162023f89f384012bf91d6109","url":"assets/js/df538fd9.e63ea225.js"},{"revision":"36d77ec69095ee4a1e364db6190eb82f","url":"assets/js/eb292d8e.a5f5f01a.js"},{"revision":"717575d27f8d2485cd32597bd004ac7f","url":"assets/js/ed68828c.76bef32d.js"},{"revision":"3264f9d604d690a3f3dbcb3e5690e4db","url":"assets/js/ed6efced.c73e92e1.js"},{"revision":"0167ba7644fa0c7a9559dd7a16c72852","url":"assets/js/ede3a018.7ddcad6d.js"},{"revision":"19264df26cc73598407688120b8f60be","url":"assets/js/f26e2a8b.f4f88669.js"},{"revision":"79064a6b11a75872a638a9fe767998e1","url":"assets/js/f94171ea.5c055762.js"},{"revision":"34efd0ee021aa2320dd9f71161224838","url":"assets/js/ff78808e.7af3f6fa.js"},{"revision":"efc57cfacdffd53c337ce7cca35c8a80","url":"assets/js/main.5c9ad764.js"},{"revision":"5f5b85e0197d4ba657899e280fda387a","url":"assets/js/runtime~main.6c1c4a5e.js"},{"revision":"829dcb359668f680d5a1066029b83ed6","url":"index.html"},{"revision":"5f380a981c72b5ef35223b0260da79fb","url":"manifest.json"},{"revision":"e58ce99752eea16e6f9230ebbb3a7826","url":"mcserver.html"},{"revision":"4e70e67280d550ec0a23e96572b31081","url":"mcserver/faq.html"},{"revision":"75db759ee0e4c968389bf61a69104b55","url":"mcserver/sponsor.html"},{"revision":"30f528d84c6f2c8168f0d9b364813be8","url":"mcserver/SUMMARY.html"},{"revision":"458ebca4742e211b55b8616cca53d101","url":"mcserver/summary/java-summary.html"},{"revision":"60c4aa613fb2e2d4f33d57bd536b20da","url":"mcserver/summary/pe-summary.html"},{"revision":"b3c6517d78006cf1272422a28f4c446d","url":"mcserver/summary/server.html"},{"revision":"a3b1d167f768eb58d66e82c95b08eef8","url":"mcserver/summary/server/beta-survive.html"},{"revision":"ac87dab5bb365e15ca9216599bdfea56","url":"mcserver/summary/server/bmss.html"},{"revision":"1492d2448694fdd778b364d9b0a807cf","url":"mcserver/summary/server/bskyblock.html"},{"revision":"0403cb34afed66662f38b8c816329309","url":"mcserver/summary/server/creative.html"},{"revision":"177a171e3260024c9e7e5f85d1950ba3","url":"mcserver/summary/server/electricity.html"},{"revision":"d3421b384bcbbedc38bfd2110fd9ac77","url":"mcserver/summary/server/login.html"},{"revision":"0099eb8bd63282475a551f0c9b7c391e","url":"mcserver/summary/server/mod-server.html"},{"revision":"ea504f078e6ad7bbcb7c89e09c3bf9f4","url":"mcserver/summary/server/survive.html"},{"revision":"03f31a386419b0f6b891e5d1c9ec3aa3","url":"mcserver/tutorials/configuring-client.html"},{"revision":"d6a2cd5368b95ca82ff4fceaefdff2ec","url":"mcserver/tutorials/configuring-client/hmcl.html"},{"revision":"845aea0d01c828ec3f0a49a398423667","url":"mcserver/tutorials/configuring-client/minecraft-launcher.html"},{"revision":"c304533ea6c8e6f817eabd0af1256fd0","url":"mcserver/tutorials/configuring-client/pcl.html"},{"revision":"f0786ba1eb6a5b390895872770feb3e6","url":"mcserver/tutorials/configuring-client/pe.html"},{"revision":"2a39e8c40be8604843f2cbb0857d400b","url":"mcserver/tutorials/reg-skin-station.html"},{"revision":"d96a23a2244f6d1e33f4ff1ab5c962c8","url":"search.html"},{"revision":"20f30b1a6ebd528490aee3c44d32a95f","url":"vlssuskin.html"},{"revision":"9a13cf7ef102ea1badfaf987b326ffc9","url":"vlssuskin/advanced/api.html"},{"revision":"d1684dd75c0de1d382ec99835ed29260","url":"vlssuskin/advanced/flarum.html"},{"revision":"dc0e2d27f3a20d1986d1a4d2bb479073","url":"vlssuskin/advanced/oauth2.html"},{"revision":"40064d569f6408ddea5abc05974656ff","url":"vlssuskin/advanced/Yggdrasil.html"},{"revision":"05a70629ae51ccb100f1e8d40580aa95","url":"vlssuskin/faq.html"},{"revision":"91c248621abe7164d32af0a3b13487d7","url":"vlssuskin/newbee/mod.html"},{"revision":"79bea47d79cd6f1007f99d0d668bc884","url":"vlssuskin/newbee/player.html"},{"revision":"178f55d7728d901c847d4315e43cfa59","url":"vlssuskin/newbee/textures.html"},{"revision":"76abb862a9904033ec7859d510a7cbe9","url":"vlssuskin/policies/privacy.html"},{"revision":"d9f23c40da314d0bf11d9eb90fdd908a","url":"vlssuskin/policies/tos.html"},{"revision":"0ad91bc685ec014950611f53512498ca","url":"vlssuskin/score.html"},{"revision":"3dc40b7d5e2fd0e03f1f0d2af54b6592","url":"vlssuskin/vps.html"},{"revision":"7c4823950f1e46da5c9c1798cbfed857","url":"assets/images/cp1-ff24e4c3641e5ff3bc173b93be88be4b.png"},{"revision":"f22ac2789f7ed24b83916217db3d2405","url":"assets/images/f10-036c78a846e0a43c0abdfbe7707a9dc5.png"},{"revision":"d7bf304f333a01a1d25d4830d4af9dd8","url":"assets/images/f3-76fe45f34e5835b64b828ace48c2709a.png"},{"revision":"a1d0cece76bde58167fc49ca0522bf51","url":"assets/images/f4-ea294d91b5e3a10a4bedb05e6ba8c08c.png"},{"revision":"892e52797dd42c7d52fb9962e325f264","url":"assets/images/f5-69800ca3a5bd2aaa2703659d15e0da6f.png"},{"revision":"91c0520e03e12431fb94d58dfb87df59","url":"assets/images/f7-eaa7a4add7b7f6e6d86be8d9ad46ef9b.png"},{"revision":"5bf742f284cb8db476a50a1c88181c9a","url":"assets/images/f8-d73ed51863e39193879b82aea5a5dcea.png"},{"revision":"37b12c1d90ca482f4df0526d1e25cfc6","url":"assets/images/f9-46831ec36556c98b6bf618e7345b0334.png"},{"revision":"327213993babfb406b0ec5943a38f7a8","url":"assets/images/HMCLR1-e9a25d0a64c102ee37853c3d384a7aa5.png"},{"revision":"3b46fa4087f04b3774c7104bb850b3ee","url":"assets/images/HMCLR2-bb1a82cd86966103acf9978bdd64c528.png"},{"revision":"b9672ea37c7197b96365d5c46a7b606e","url":"assets/images/HMCLR3-e214c6f8ec425c506d4f6d058a622bdd.png"},{"revision":"b813bcbf72cbc224f838876c3d9acc29","url":"assets/images/HMCLR4-64c01436471d2293c0d907f202a51045.png"},{"revision":"75f4e1eb508b69a3ee27b896cb194a1e","url":"assets/images/io.netty-8f2c02699afe7a2150d022ab0ac1d897.png"},{"revision":"38f59f5ce85980d8cd4be8f77db1f89b","url":"assets/images/ml1-d7d6922894572195fec463ce17ca6230.jpg"},{"revision":"76c93950a9be43b628deb620fe84b882","url":"assets/images/ml2-bde92400eb470a3044ed45f8efd3cb2a.jpg"},{"revision":"e319fd928412ad4507e6bd1d3b8cdd58","url":"assets/images/ml3-32f47d9f7b3e904b6c6de7b737c53d43.jpg"},{"revision":"758b34882daccd40df76820cc5a14064","url":"assets/images/mod-server_1-11b9f79b181935b0a10723315e4751ae.jpg"},{"revision":"a44c6b528e553a563588ae0b2f6b0878","url":"assets/images/mod-server_2-85acadb09307807174862eaab4b8c8c1.jpg"},{"revision":"aacf3e1bef4d126634f7296e89f71e86","url":"assets/images/o1-4015a91f0e1757cb367b7c081cda9644.png"},{"revision":"91e90bde02c491cc0b730ce0c616959a","url":"assets/images/pcl1-f35772e8e5bd9cef202aef4fb5ee9933.jpg"},{"revision":"22cdc8d3bb1815f5d9cb720dd17009b4","url":"assets/images/pcl2-1cb95f18a615d96d5add06e0436ef962.jpg"},{"revision":"4e67f046d723d40b6db7acb7f143cae6","url":"assets/images/pcl3-ba5dc58d59290d04b5d3c424af49be1d.jpg"},{"revision":"0a4e86e001bac502c388f497159f742e","url":"assets/images/pe1-3db37cf727398ffb895893bd381fa3e9.jpg"},{"revision":"298c554a3c8aa1efe5b9b302614e474a","url":"assets/images/pe2-c32615d4ee1e2c5cb4e833da39c87866.jpg"},{"revision":"605071a41f45220a93e7afa031dd815c","url":"assets/images/st2-e14c0c41acc57c0cff85ff268c80b5f0.png"},{"revision":"593ec90499e6150193c8604f9bb05598","url":"assets/images/st4-e280d9e51e7d22e0abcfc7cc218314ec.png"},{"revision":"00751587a16b4e9f5cedba05ec48a026","url":"assets/images/st5-d38b69ba828bdc1b22f4801bfc86ca18.png"},{"revision":"81517c5d8fcaa656db8fa4c09e6d8ad8","url":"assets/images/st7-4f53104cc3f8f41283079d12533c102b.png"},{"revision":"666aba4e7b65bddce380a43fc2e2a635","url":"assets/images/tm1-770f15760754eed524e0fe7370b217dd.jpg"},{"revision":"5f3f0d7fbaf22372b0ab28fad744492d","url":"assets/images/tm2-f193a82dba19f996392330e428e6c16f.jpg"},{"revision":"fd0e4a9daa047ad0c4595652c3b5ab3e","url":"assets/images/tm3-496e286d1dbc6e51374d35a972a50cd9.jpg"},{"revision":"599205b54e94539964f7674f1f846e1c","url":"assets/images/Unknown-host-c87f97dd4c637cadaf3c84d22be74c53.png"},{"revision":"a408b7fe2cf67c6200a558eefbf69798","url":"assets/images/vlssu历史线.drawio-9987d326965d6edcf0fb808530465a30.svg"},{"revision":"f434adad2c355e80a7d988b47bc25971","url":"assets/images/vps-868ad78259e863c29590ffc466be7cd3.png"},{"revision":"7809e6ac957b254d3772cb95ecae11e3","url":"assets/images/y1-1e9e432edaebf92234f14d725ec776a3.png"},{"revision":"c4372071890e568a5e42160eb6a93701","url":"assets/images/y10-a99ddb08873704743f258b61687eb67d.png"},{"revision":"ea386e1387a1ca824ca1988ea252e7d0","url":"assets/images/y2-64ba226a97a5a3cf8eb0502b7b163feb.png"},{"revision":"b9672ea37c7197b96365d5c46a7b606e","url":"assets/images/y3-e214c6f8ec425c506d4f6d058a622bdd.png"},{"revision":"98634887f7732da8a087dc954c8b2a0b","url":"assets/images/y4-e7028fc369d40ab2d3b5748938a29722.png"},{"revision":"dda8a13c0002bd4ddec1ab3c97aa7fd7","url":"assets/images/y5-981d063d00a7441585e09c272d1ae762.png"},{"revision":"dbb9fa2d5e6786edc7bc151944df2dc2","url":"assets/images/y6-09a558e8b94ea6887be40a430dd706a0.png"},{"revision":"b4a2311e6b6de7a44ed43a4cfa6bf54a","url":"assets/images/y7-d2511a3f71b59ba6c88138a00e0903cc.png"},{"revision":"0b712949c833f51502f82a530515a027","url":"assets/images/y8-fe73a23522099c54a3c42b9337ede168.png"},{"revision":"bb8e9b96d93b6cb3ad01069b76a4f90e","url":"assets/images/y9-9598dd02e1cbf2042568ca65ed27f6c6.png"},{"revision":"fc576f833f663ed7ce680a8dcb9652f7","url":"assets/images/无效的登入凭据,请核查客户端外置登入配置或稍后重试-f7a338e35259adf72d954ee40f9c16a4.png"},{"revision":"f63827e9b833436fe9c8483c9a9c4f33","url":"assets/images/无法解析主机名-f3204c3245e2d2977059b592104e96d6.png"},{"revision":"18edfc64634eb94783a30b6f0daa5c7a","url":"assets/images/无法验证用户名-91be0b129e14349a103eecc3b24e0ea9.png"},{"revision":"70c42323217337654e14330f7a1a2df7","url":"assets/images/登入失败：无效会话（请尝试重启游戏及启动器）-455cd2558f7447316b77026694db1fda.png"},{"revision":"f00e7a764dbe0b4dc21e03ff84b7ee99","url":"assets/images/登入失败Null-264df3d6a0d50e5090507974623a63f1.png"},{"revision":"e27d0abdce9a8a77b6901a62921792ff","url":"assets/images/登入失败身份验证目前正在停机维护-651fba69006ba02e99c049d27d29e01e.png"},{"revision":"f2d7cd73ba1d8d2375dbd856fb640e2f","url":"img/favicon.ico"},{"revision":"1c8622eac81f53f0a386124bc8cadbb2","url":"img/icons/icon-128x128.png"},{"revision":"00cc75375682e6f9df03845a38393ca8","url":"img/icons/icon-144x144.png"},{"revision":"54fe64c15e3aa5a91d95ae0aab77909f","url":"img/icons/icon-152x152.png"},{"revision":"e578a4c67469ff14f7fb3440f0d2c3c4","url":"img/icons/icon-192x192.png"},{"revision":"4e5680c95bd88cc5579f0b7cc04c7d0b","url":"img/icons/icon-384x384.png"},{"revision":"f636f92aab7db0ec790a0006d6da997e","url":"img/icons/icon-512x512.png"},{"revision":"ce1c86e716619db226340de67921fb37","url":"img/icons/icon-72x72.png"},{"revision":"b603ab12dc0ad2b68812f85f9706b43a","url":"img/icons/icon-96x96.png"},{"revision":"17aa327002484349e4c087a638848d8f","url":"img/logo.svg"},{"revision":"cfdd4b00e82effb02931776780993f0f","url":"img/og-image.png"},{"revision":"282ca54c573eb894389751f5ab755647","url":"img/vlssu.png"},{"revision":"62dbb62edfb73578956170bab16e1102","url":"assets/fonts/jetbrains-mono-all-400-normal-2346733ac7062d6402c0c859ccbf227e.woff"},{"revision":"73e0466a4982d9cc878c4880554d7cbf","url":"assets/fonts/jetbrains-mono-latin-400-normal-d0b41bd1d599bc0a52b733fd39c8cc06.woff2"},{"revision":"eea8a45e4d02c3c163a90a2a4743d37b","url":"assets/fonts/JetBrainsMono-Regular-d922fd933fc62eec7ec568cb006b4964.woff2"}],s=new m({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();