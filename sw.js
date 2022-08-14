(()=>{"use strict";var e={6:()=>{try{self["workbox:core:6.5.2"]&&_()}catch(e){}},206:()=>{try{self["workbox:precaching:6.5.2"]&&_()}catch(e){}},175:()=>{try{self["workbox:routing:6.5.2"]&&_()}catch(e){}},343:()=>{try{self["workbox:strategies:6.5.2"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(6);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(206);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(343);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(175);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"a1dd13f9cc86f04604553b972c1e38e9","url":"__docusaurus/debug.html"},{"revision":"10c0da64e3a9748062f1046e29c6a432","url":"__docusaurus/debug/config.html"},{"revision":"a147e078ce0831bbac741f212c3a2be5","url":"__docusaurus/debug/content.html"},{"revision":"a88e0c0c6a10bc00cdcf731c1d3c8b67","url":"__docusaurus/debug/globalData.html"},{"revision":"a89a0c7b728c1a2acda2f6ff704f6a41","url":"__docusaurus/debug/metadata.html"},{"revision":"b31baa8eba9c5f189753beb8a2d15035","url":"__docusaurus/debug/registry.html"},{"revision":"1b47f4a315f39fa39da567d7df8f2905","url":"__docusaurus/debug/routes.html"},{"revision":"0ce0653e2ac15202c529323ed8f6fc78","url":"404.html"},{"revision":"6d2886a6c6dc68c0dbc43fb684a3abf3","url":"assets/css/styles.d0dcae49.css"},{"revision":"8feec508fa69daa0d6caf4bedbe11faf","url":"assets/js/100f3b11.9869a5f5.js"},{"revision":"a20b03a15aa529b6f591130b50cbc895","url":"assets/js/146891a0.7701d786.js"},{"revision":"1b1e3bf3db49b010bdb1a4e5920059c1","url":"assets/js/14d0eace.10a70133.js"},{"revision":"76e763cb668f3e4dfd29c9aa5f686c4d","url":"assets/js/1571.9a4159c7.js"},{"revision":"75ab12c4571d5bd86521b7447510da29","url":"assets/js/17896441.c4ab573a.js"},{"revision":"fb9c3aea7938288920dfa9af48fccf94","url":"assets/js/1a4e3797.948c4b66.js"},{"revision":"f3e77e2766bfce498d615919eabdbcba","url":"assets/js/1be78505.04351996.js"},{"revision":"98908fb53bb25def9cb4fb4e15c2639f","url":"assets/js/1cb8e563.f1622870.js"},{"revision":"56d369ddb540d87e88853889a6c660fb","url":"assets/js/1df93b7f.90fc2092.js"},{"revision":"3ee6ec7a8734dbd3f37ca3dea290b433","url":"assets/js/23abe487.b4274f00.js"},{"revision":"999286b02740c71608f7e871a6fa3f14","url":"assets/js/246f2c6f.4f0d6077.js"},{"revision":"fe535e74498945a0c63fd1991b08bf5c","url":"assets/js/31389f65.bcaa46c5.js"},{"revision":"f941b037ad0d107692a1fe27fe36cef9","url":"assets/js/408.3f3d1b5f.js"},{"revision":"d0b47fd793b8abc5f393edf0652310ba","url":"assets/js/4139.86704372.js"},{"revision":"2d8684cf16b76fa52ba27a6780aa3163","url":"assets/js/428bf6b8.cf5fc929.js"},{"revision":"9afa028ac78fd9b96415468a9c643154","url":"assets/js/576a2519.8a3a01f5.js"},{"revision":"db9fff9ccb6e45adb8d58156352dafda","url":"assets/js/58cb887f.ae977737.js"},{"revision":"d4c23aa13a84bb574f852df25c91cf23","url":"assets/js/6116.3eb6f60d.js"},{"revision":"9a1372b12b657cf286fca3c88c224f2f","url":"assets/js/6248.d17eb18e.js"},{"revision":"20ca45450d7f6ebec5b725a9c164b624","url":"assets/js/6364de16.9e57aee3.js"},{"revision":"07396a095f894128235315db682d9245","url":"assets/js/63be92f4.840360b6.js"},{"revision":"08a18b1d92b207646299eaaeb35a85f1","url":"assets/js/6505.b6f63aab.js"},{"revision":"bf5446bfbbe01beb203e56566fcb18bd","url":"assets/js/659355db.35ae2b11.js"},{"revision":"360aab08b57270fd3db1859c62f8197e","url":"assets/js/6794d4cd.b4ef641d.js"},{"revision":"5a54c45fcc8e0fe13e696d3a6ffdb53b","url":"assets/js/68e633d4.72a034b0.js"},{"revision":"93baa96d5a7b37085e837e5b6e3c4a14","url":"assets/js/72d6d5c3.6aef0467.js"},{"revision":"f813818f59711fc9a04a90c2a9a7ba7f","url":"assets/js/754a694e.0188d315.js"},{"revision":"4bfdf8cb80c976797537f55deea74b8a","url":"assets/js/7735.e5ed6465.js"},{"revision":"91fb7795b774456a1331d4e44f125cc3","url":"assets/js/7841c085.4fd00d89.js"},{"revision":"22a47d426d8c2b31a0a67f17c5d13b33","url":"assets/js/82437be0.7f47b201.js"},{"revision":"b82fb1a4392e3893c8670a7445e41ecd","url":"assets/js/8390.937cbe86.js"},{"revision":"3f89617ed9df3189dd82638647d391b2","url":"assets/js/843abcdb.d5b8d700.js"},{"revision":"a5d29c14cd304c98addeae86c85a6473","url":"assets/js/86bfae87.cca649d4.js"},{"revision":"a274074a5c3f0d41e6f4a469bec713f2","url":"assets/js/87eace82.ef9a8ca1.js"},{"revision":"d28693d94d19706f1b49f94c1bf42d41","url":"assets/js/8ac32ba1.4d79ea8f.js"},{"revision":"90e620219a77e65141188146938fef4f","url":"assets/js/8c50d7e0.b6d27a78.js"},{"revision":"6e117873c32f7fd520cebb1107cfd457","url":"assets/js/946bd85a.9d7bc074.js"},{"revision":"fe211fe78e603ca354af92d5509d281c","url":"assets/js/9663.17c48c62.js"},{"revision":"0d1672207f34d189fd36ed848d385024","url":"assets/js/9a9c78bf.e205a7f0.js"},{"revision":"b587aa99c0ea9f418c8e4e718eb7d2ff","url":"assets/js/a3470f84.163922a4.js"},{"revision":"2ba9964c73c29613ccff6b9c500593dc","url":"assets/js/a518d338.40e53b14.js"},{"revision":"df901cf73006a0c28ee314921864d739","url":"assets/js/a69d75ad.4524c56c.js"},{"revision":"2922393642d3029db999e8995de9a1c4","url":"assets/js/af39b1a1.dfa78952.js"},{"revision":"b0aaa5e8f8eeb3f29e9b11b519d64913","url":"assets/js/b9603c68.35733b11.js"},{"revision":"d3be8e42883c3078dc2fe82efb9dc9f6","url":"assets/js/ba8b3534.3b11dae0.js"},{"revision":"559fda43c70b774f2ab4ef5f829e7e06","url":"assets/js/bd370d9d.1096d933.js"},{"revision":"6bbe09f7bdee470f1adf56227fb422b8","url":"assets/js/c1eafa19.92e115d4.js"},{"revision":"7bfbfe28a706ee4f216de8144e510a8d","url":"assets/js/cb3f72b6.f128663b.js"},{"revision":"6498111cb48dda6a1a1087d7e047b91f","url":"assets/js/cb3fd989.a592b77c.js"},{"revision":"0bbb50fd663a752c85006e03e2938b21","url":"assets/js/cc99a760.7b5d35d0.js"},{"revision":"eaf0a99e7b2b0f1acc8491f6ecddf03c","url":"assets/js/ce5217b5.55d62457.js"},{"revision":"d60f917d432fe24acc1e2ea7b9c9f73d","url":"assets/js/cf75b345.abc026c3.js"},{"revision":"4ff1e4b4c828af7b585bc7b084d1c228","url":"assets/js/dae1ef6e.c658f316.js"},{"revision":"a99baf5162023f89f384012bf91d6109","url":"assets/js/df538fd9.e63ea225.js"},{"revision":"d7cfceff368e5c915795b70b99124a82","url":"assets/js/eb292d8e.18224d33.js"},{"revision":"d29944668a67367f96ec0a3960708ce2","url":"assets/js/ed68828c.be9b591a.js"},{"revision":"0927ea64330b41dd30a57d7a28d402a7","url":"assets/js/ed6efced.c9182255.js"},{"revision":"dd6c4e9ab8fe15ba56c8eed8525928b4","url":"assets/js/ede3a018.8bc7126a.js"},{"revision":"1b7eade984b451db7273d8c9059211ee","url":"assets/js/f26e2a8b.d445283e.js"},{"revision":"ec99c1927c9171319d8cce571fb8a699","url":"assets/js/f94171ea.39b4aea5.js"},{"revision":"762c44eba37e5d7dea57ba990a38aa92","url":"assets/js/ff78808e.fe72db36.js"},{"revision":"63d99358b1c5fbdd1321ae8d7c4391b7","url":"assets/js/main.56ae6177.js"},{"revision":"8dd8a754c0412652996da0386a295fbf","url":"assets/js/runtime~main.08f48624.js"},{"revision":"3e8ed2175f44460912a3ca2f74ae7aa2","url":"index.html"},{"revision":"5f380a981c72b5ef35223b0260da79fb","url":"manifest.json"},{"revision":"07257ce14d2a8865f907e15dcd465983","url":"mcserver.html"},{"revision":"b02572808dff718e7246079d5b1dbaf6","url":"mcserver/faq.html"},{"revision":"4ffd5a941fdde5b12f2fddb1a1bebade","url":"mcserver/sponsor.html"},{"revision":"a955590a1c4d21dd91442b685141884a","url":"mcserver/SUMMARY.html"},{"revision":"0dfbc41a450d32a2495b29c4baa568a6","url":"mcserver/summary/java-summary.html"},{"revision":"21e743a8cc4b81f75c563a1c477280db","url":"mcserver/summary/pe-summary.html"},{"revision":"e169b44418e9d54b25368c33ac8a4c0c","url":"mcserver/summary/server.html"},{"revision":"f98b579d0f994074bbd350ef3537358e","url":"mcserver/summary/server/beta-survive.html"},{"revision":"a8d8348d556f9b3a154f4ee63133bb93","url":"mcserver/summary/server/bmss.html"},{"revision":"8579104ba609dfaad8eb757dd41a9889","url":"mcserver/summary/server/bskyblock.html"},{"revision":"7f1ffb27825c10e1769233583b42e55b","url":"mcserver/summary/server/creative.html"},{"revision":"553eb02df0c3e62d3ca35f2dba55cd5a","url":"mcserver/summary/server/electricity.html"},{"revision":"249cf08bac828b8f6a52ad3d407500b4","url":"mcserver/summary/server/login.html"},{"revision":"90f590fc9bee15a74bccf4ba70466a15","url":"mcserver/summary/server/mod-server.html"},{"revision":"5af61d95f18b95196f97c95e8e14ac67","url":"mcserver/summary/server/survive.html"},{"revision":"bbd0e28e6f944efae69aefdca8290f9b","url":"mcserver/tutorials/configuring-client.html"},{"revision":"5591a0740d6237dfcf6f3bdcde8f40ef","url":"mcserver/tutorials/configuring-client/hmcl.html"},{"revision":"213de592c728f00b4f4fa3791ee520e0","url":"mcserver/tutorials/configuring-client/minecraft-launcher.html"},{"revision":"20b0f340154a94425e0b8ba1210ac2d5","url":"mcserver/tutorials/configuring-client/pcl.html"},{"revision":"4c28dfc82d4d5ff40a62acfbb6863488","url":"mcserver/tutorials/configuring-client/pe.html"},{"revision":"7e57832aab5ffd5aabbc5cf99c70e2a6","url":"mcserver/tutorials/reg-skin-station.html"},{"revision":"7d9b0a01ae05d8b21f1a03f5379f9594","url":"search.html"},{"revision":"87798abec206673e9a0297d631482c59","url":"vlssuskin.html"},{"revision":"2acff0a8ae4e6a766413c6a0ef290700","url":"vlssuskin/advanced-usage/api.html"},{"revision":"417d9de7fd0ab674a2ab6d76917a366f","url":"vlssuskin/advanced-usage/flarum.html"},{"revision":"c19f93ea6d5eeb5afdcea1789c993a9c","url":"vlssuskin/advanced-usage/oauth2.html"},{"revision":"25d7c0a2d8395d70d41daa9c87ba0886","url":"vlssuskin/advanced-usage/Yggdrasil.html"},{"revision":"b0ed3b250f14e7803c785a5132dd19ff","url":"vlssuskin/faq.html"},{"revision":"a2252b0d6ce704d7934c0b6139e94cf0","url":"vlssuskin/newbee-guide/create-player.html"},{"revision":"621d2003d29d109c2a5eefa7defb484c","url":"vlssuskin/newbee-guide/install-mod.html"},{"revision":"bcfb6e9278fd37a2f9954c8e43800fba","url":"vlssuskin/newbee-guide/set-textures.html"},{"revision":"f8d88b268e500f1b20b3fe0ef7b9bfec","url":"vlssuskin/policies/privacy.html"},{"revision":"278eb8e371e8fb40cc24999cfc8cc70f","url":"vlssuskin/policies/tos.html"},{"revision":"069453246321c7df9571d5fad759b34f","url":"vlssuskin/score.html"},{"revision":"a8ca3eb2078e506d64c08f9047dfe14b","url":"vlssuskin/vps.html"},{"revision":"7c4823950f1e46da5c9c1798cbfed857","url":"assets/images/cp1-ff24e4c3641e5ff3bc173b93be88be4b.png"},{"revision":"f22ac2789f7ed24b83916217db3d2405","url":"assets/images/f10-036c78a846e0a43c0abdfbe7707a9dc5.png"},{"revision":"d7bf304f333a01a1d25d4830d4af9dd8","url":"assets/images/f3-76fe45f34e5835b64b828ace48c2709a.png"},{"revision":"a1d0cece76bde58167fc49ca0522bf51","url":"assets/images/f4-ea294d91b5e3a10a4bedb05e6ba8c08c.png"},{"revision":"892e52797dd42c7d52fb9962e325f264","url":"assets/images/f5-69800ca3a5bd2aaa2703659d15e0da6f.png"},{"revision":"91c0520e03e12431fb94d58dfb87df59","url":"assets/images/f7-eaa7a4add7b7f6e6d86be8d9ad46ef9b.png"},{"revision":"5bf742f284cb8db476a50a1c88181c9a","url":"assets/images/f8-d73ed51863e39193879b82aea5a5dcea.png"},{"revision":"37b12c1d90ca482f4df0526d1e25cfc6","url":"assets/images/f9-46831ec36556c98b6bf618e7345b0334.png"},{"revision":"327213993babfb406b0ec5943a38f7a8","url":"assets/images/HMCLR1-e9a25d0a64c102ee37853c3d384a7aa5.png"},{"revision":"3b46fa4087f04b3774c7104bb850b3ee","url":"assets/images/HMCLR2-bb1a82cd86966103acf9978bdd64c528.png"},{"revision":"b9672ea37c7197b96365d5c46a7b606e","url":"assets/images/HMCLR3-e214c6f8ec425c506d4f6d058a622bdd.png"},{"revision":"b813bcbf72cbc224f838876c3d9acc29","url":"assets/images/HMCLR4-64c01436471d2293c0d907f202a51045.png"},{"revision":"75f4e1eb508b69a3ee27b896cb194a1e","url":"assets/images/io.netty-8f2c02699afe7a2150d022ab0ac1d897.png"},{"revision":"38f59f5ce85980d8cd4be8f77db1f89b","url":"assets/images/ml1-d7d6922894572195fec463ce17ca6230.jpg"},{"revision":"76c93950a9be43b628deb620fe84b882","url":"assets/images/ml2-bde92400eb470a3044ed45f8efd3cb2a.jpg"},{"revision":"e319fd928412ad4507e6bd1d3b8cdd58","url":"assets/images/ml3-32f47d9f7b3e904b6c6de7b737c53d43.jpg"},{"revision":"aacf3e1bef4d126634f7296e89f71e86","url":"assets/images/o1-4015a91f0e1757cb367b7c081cda9644.png"},{"revision":"91e90bde02c491cc0b730ce0c616959a","url":"assets/images/pcl1-f35772e8e5bd9cef202aef4fb5ee9933.jpg"},{"revision":"22cdc8d3bb1815f5d9cb720dd17009b4","url":"assets/images/pcl2-1cb95f18a615d96d5add06e0436ef962.jpg"},{"revision":"4e67f046d723d40b6db7acb7f143cae6","url":"assets/images/pcl3-ba5dc58d59290d04b5d3c424af49be1d.jpg"},{"revision":"0a4e86e001bac502c388f497159f742e","url":"assets/images/pe1-3db37cf727398ffb895893bd381fa3e9.jpg"},{"revision":"298c554a3c8aa1efe5b9b302614e474a","url":"assets/images/pe2-c32615d4ee1e2c5cb4e833da39c87866.jpg"},{"revision":"605071a41f45220a93e7afa031dd815c","url":"assets/images/st2-e14c0c41acc57c0cff85ff268c80b5f0.png"},{"revision":"593ec90499e6150193c8604f9bb05598","url":"assets/images/st4-e280d9e51e7d22e0abcfc7cc218314ec.png"},{"revision":"00751587a16b4e9f5cedba05ec48a026","url":"assets/images/st5-d38b69ba828bdc1b22f4801bfc86ca18.png"},{"revision":"81517c5d8fcaa656db8fa4c09e6d8ad8","url":"assets/images/st7-4f53104cc3f8f41283079d12533c102b.png"},{"revision":"77640830c45b83c2dad2230fd0d1eb40","url":"assets/images/tm1-55d374f6f256e3e2d0659a5be1b8e145.jpg"},{"revision":"5f3f0d7fbaf22372b0ab28fad744492d","url":"assets/images/tm2-f193a82dba19f996392330e428e6c16f.jpg"},{"revision":"fd0e4a9daa047ad0c4595652c3b5ab3e","url":"assets/images/tm3-496e286d1dbc6e51374d35a972a50cd9.jpg"},{"revision":"599205b54e94539964f7674f1f846e1c","url":"assets/images/Unknown-host-c87f97dd4c637cadaf3c84d22be74c53.png"},{"revision":"a408b7fe2cf67c6200a558eefbf69798","url":"assets/images/vlssu历史线.drawio-9987d326965d6edcf0fb808530465a30.svg"},{"revision":"f434adad2c355e80a7d988b47bc25971","url":"assets/images/vps-868ad78259e863c29590ffc466be7cd3.png"},{"revision":"7809e6ac957b254d3772cb95ecae11e3","url":"assets/images/y1-1e9e432edaebf92234f14d725ec776a3.png"},{"revision":"c4372071890e568a5e42160eb6a93701","url":"assets/images/y10-a99ddb08873704743f258b61687eb67d.png"},{"revision":"ea386e1387a1ca824ca1988ea252e7d0","url":"assets/images/y2-64ba226a97a5a3cf8eb0502b7b163feb.png"},{"revision":"b9672ea37c7197b96365d5c46a7b606e","url":"assets/images/y3-e214c6f8ec425c506d4f6d058a622bdd.png"},{"revision":"98634887f7732da8a087dc954c8b2a0b","url":"assets/images/y4-e7028fc369d40ab2d3b5748938a29722.png"},{"revision":"dda8a13c0002bd4ddec1ab3c97aa7fd7","url":"assets/images/y5-981d063d00a7441585e09c272d1ae762.png"},{"revision":"dbb9fa2d5e6786edc7bc151944df2dc2","url":"assets/images/y6-09a558e8b94ea6887be40a430dd706a0.png"},{"revision":"b4a2311e6b6de7a44ed43a4cfa6bf54a","url":"assets/images/y7-d2511a3f71b59ba6c88138a00e0903cc.png"},{"revision":"0b712949c833f51502f82a530515a027","url":"assets/images/y8-fe73a23522099c54a3c42b9337ede168.png"},{"revision":"bb8e9b96d93b6cb3ad01069b76a4f90e","url":"assets/images/y9-9598dd02e1cbf2042568ca65ed27f6c6.png"},{"revision":"fc576f833f663ed7ce680a8dcb9652f7","url":"assets/images/无效的登入凭据,请核查客户端外置登入配置或稍后重试-f7a338e35259adf72d954ee40f9c16a4.png"},{"revision":"f63827e9b833436fe9c8483c9a9c4f33","url":"assets/images/无法解析主机名-f3204c3245e2d2977059b592104e96d6.png"},{"revision":"18edfc64634eb94783a30b6f0daa5c7a","url":"assets/images/无法验证用户名-91be0b129e14349a103eecc3b24e0ea9.png"},{"revision":"70c42323217337654e14330f7a1a2df7","url":"assets/images/登入失败：无效会话（请尝试重启游戏及启动器）-455cd2558f7447316b77026694db1fda.png"},{"revision":"f00e7a764dbe0b4dc21e03ff84b7ee99","url":"assets/images/登入失败Null-264df3d6a0d50e5090507974623a63f1.png"},{"revision":"e27d0abdce9a8a77b6901a62921792ff","url":"assets/images/登入失败身份验证目前正在停机维护-651fba69006ba02e99c049d27d29e01e.png"},{"revision":"f2d7cd73ba1d8d2375dbd856fb640e2f","url":"img/favicon.ico"},{"revision":"1c8622eac81f53f0a386124bc8cadbb2","url":"img/icons/icon-128x128.png"},{"revision":"00cc75375682e6f9df03845a38393ca8","url":"img/icons/icon-144x144.png"},{"revision":"54fe64c15e3aa5a91d95ae0aab77909f","url":"img/icons/icon-152x152.png"},{"revision":"e578a4c67469ff14f7fb3440f0d2c3c4","url":"img/icons/icon-192x192.png"},{"revision":"4e5680c95bd88cc5579f0b7cc04c7d0b","url":"img/icons/icon-384x384.png"},{"revision":"f636f92aab7db0ec790a0006d6da997e","url":"img/icons/icon-512x512.png"},{"revision":"ce1c86e716619db226340de67921fb37","url":"img/icons/icon-72x72.png"},{"revision":"b603ab12dc0ad2b68812f85f9706b43a","url":"img/icons/icon-96x96.png"},{"revision":"17aa327002484349e4c087a638848d8f","url":"img/logo.svg"},{"revision":"cfdd4b00e82effb02931776780993f0f","url":"img/og-image.png"},{"revision":"282ca54c573eb894389751f5ab755647","url":"img/vlssu.png"},{"revision":"eea8a45e4d02c3c163a90a2a4743d37b","url":"assets/fonts/JetBrainsMono-Regular-d922fd933fc62eec7ec568cb006b4964.woff2"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();