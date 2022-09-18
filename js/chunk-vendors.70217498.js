"use strict";(self["webpackChunkwedding_project"]=self["webpackChunkwedding_project"]||[]).push([[998],{444:function(t,e,n){n.d(e,{BH:function(){return c},L:function(){return a},LL:function(){return d},ZR:function(){return f},eu:function(){return l},hl:function(){return u},m9:function(){return v},vZ:function(){return m}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296===(64512&r)&&s+1<t.length&&56320===(64512&t.charCodeAt(s+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++s)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},r=function(t){const e=[];let n=0,s=0;while(n<t.length){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((31&r)<<6|63&i)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((7&r)<<18|(63&i)<<12|(63&o)<<6|63&a)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(1023&c))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((15&r)<<12|(63&i)<<6|63&o)}}return e.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const e=t[r],i=r+1<t.length,o=i?t[r+1]:0,a=r+2<t.length,c=a?t[r+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,f=63&c;a||(f=64,i||(h=64)),s.push(n[u],n[l],n[h],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(s(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):r(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const e=n[t.charAt(r++)],i=r<t.length,o=i?n[t.charAt(r)]:0;++r;const a=r<t.length,c=a?n[t.charAt(r)]:64;++r;const u=r<t.length,l=u?n[t.charAt(r)]:64;if(++r,null==e||null==o||null==c||null==l)throw Error();const h=e<<2|o>>4;if(s.push(h),64!==c){const t=o<<4&240|c>>2;if(s.push(t),64!==l){const t=c<<6&192|l;s.push(t)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=s(t);return i.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(){return"object"===typeof indexedDB}function l(){return new Promise(((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const h="FirebaseError";class f extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=h,Object.setPrototypeOf(this,f.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,d.prototype.create)}}class d{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,r=this.errors[t],i=r?p(r,n):"Error",o=`${this.serviceName}: ${i} (${s}).`,a=new f(s,o,n);return a}}function p(t,e){return t.replace(g,((t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`}))}const g=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const n=t[r],i=e[r];if(y(n)&&y(i)){if(!m(n,i))return!1}else if(n!==i)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function y(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function v(t){return t&&t._delegate?t._delegate:t}},262:function(t,e,n){n.d(e,{Bj:function(){return i},Fl:function(){return Bt},IU:function(){return kt},Jd:function(){return _},PG:function(){return Ct},Um:function(){return Et},WL:function(){return Pt},X$:function(){return A},X3:function(){return At},Xl:function(){return Dt},dq:function(){return Ot},j:function(){return I},lk:function(){return C},qj:function(){return bt},qq:function(){return w},yT:function(){return St}});var s=n(577);let r;class i{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&r&&(this.parent=r,this.index=(r.scopes||(r.scopes=[])).push(this)-1)}run(t){if(this.active){const e=r;try{return r=this,t()}finally{r=e}}else 0}on(){r=this}off(){r=this.parent}stop(t){if(this.active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function o(t,e=r){e&&e.active&&e.effects.push(t)}const a=t=>{const e=new Set(t);return e.w=0,e.n=0,e},c=t=>(t.w&p)>0,u=t=>(t.n&p)>0,l=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=p},h=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];c(r)&&!u(r)?r.delete(t):e[n++]=r,r.w&=~p,r.n&=~p}e.length=n}},f=new WeakMap;let d=0,p=1;const g=30;let m;const y=Symbol(""),v=Symbol("");class w{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let t=m,e=E;while(t){if(t===this)return;t=t.parent}try{return this.parent=m,m=this,E=!0,p=1<<++d,d<=g?l(this):b(this),this.fn()}finally{d<=g&&h(this),p=1<<--d,m=this.parent,E=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){m===this?this.deferStop=!0:this.active&&(b(this),this.onStop&&this.onStop(),this.active=!1)}}function b(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let E=!0;const T=[];function _(){T.push(E),E=!1}function C(){const t=T.pop();E=void 0===t||t}function I(t,e,n){if(E&&m){let e=f.get(t);e||f.set(t,e=new Map);let s=e.get(n);s||e.set(n,s=a());const r=void 0;S(s,r)}}function S(t,e){let n=!1;d<=g?u(t)||(t.n|=p,n=!c(t)):n=!t.has(m),n&&(t.add(m),m.deps.push(t))}function A(t,e,n,r,i,o){const c=f.get(t);if(!c)return;let u=[];if("clear"===e)u=[...c.values()];else if("length"===n&&(0,s.kJ)(t))c.forEach(((t,e)=>{("length"===e||e>=r)&&u.push(t)}));else switch(void 0!==n&&u.push(c.get(n)),e){case"add":(0,s.kJ)(t)?(0,s.S0)(n)&&u.push(c.get("length")):(u.push(c.get(y)),(0,s._N)(t)&&u.push(c.get(v)));break;case"delete":(0,s.kJ)(t)||(u.push(c.get(y)),(0,s._N)(t)&&u.push(c.get(v)));break;case"set":(0,s._N)(t)&&u.push(c.get(y));break}if(1===u.length)u[0]&&k(u[0]);else{const t=[];for(const e of u)e&&t.push(...e);k(a(t))}}function k(t,e){const n=(0,s.kJ)(t)?t:[...t];for(const s of n)s.computed&&D(s,e);for(const s of n)s.computed||D(s,e)}function D(t,e){(t!==m||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const N=(0,s.fY)("__proto__,__v_isRef,__isVue"),x=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(s.yk)),R=P(),L=P(!1,!0),O=P(!0),M=F();function F(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=kt(this);for(let e=0,r=this.length;e<r;e++)I(n,"get",e+"");const s=n[e](...t);return-1===s||!1===s?n[e](...t.map(kt)):s}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){_();const n=kt(this)[e].apply(this,t);return C(),n}})),t}function P(t=!1,e=!1){return function(n,r,i){if("__v_isReactive"===r)return!t;if("__v_isReadonly"===r)return t;if("__v_isShallow"===r)return e;if("__v_raw"===r&&i===(t?e?yt:mt:e?gt:pt).get(n))return n;const o=(0,s.kJ)(n);if(!t&&o&&(0,s.RI)(M,r))return Reflect.get(M,r,i);const a=Reflect.get(n,r,i);return((0,s.yk)(r)?x.has(r):N(r))?a:(t||I(n,"get",r),e?a:Ot(a)?o&&(0,s.S0)(r)?a:a.value:(0,s.Kn)(a)?t?Tt(a):bt(a):a)}}const V=B(),U=B(!0);function B(t=!1){return function(e,n,r,i){let o=e[n];if(It(o)&&Ot(o)&&!Ot(r))return!1;if(!t&&(St(r)||It(r)||(o=kt(o),r=kt(r)),!(0,s.kJ)(e)&&Ot(o)&&!Ot(r)))return o.value=r,!0;const a=(0,s.kJ)(e)&&(0,s.S0)(n)?Number(n)<e.length:(0,s.RI)(e,n),c=Reflect.set(e,n,r,i);return e===kt(i)&&(a?(0,s.aU)(r,o)&&A(e,"set",n,r,o):A(e,"add",n,r)),c}}function j(t,e){const n=(0,s.RI)(t,e),r=t[e],i=Reflect.deleteProperty(t,e);return i&&n&&A(t,"delete",e,void 0,r),i}function q(t,e){const n=Reflect.has(t,e);return(0,s.yk)(e)&&x.has(e)||I(t,"has",e),n}function $(t){return I(t,"iterate",(0,s.kJ)(t)?"length":y),Reflect.ownKeys(t)}const K={get:R,set:V,deleteProperty:j,has:q,ownKeys:$},H={get:O,set(t,e){return!0},deleteProperty(t,e){return!0}},G=(0,s.l7)({},K,{get:L,set:U}),z=t=>t,W=t=>Reflect.getPrototypeOf(t);function Q(t,e,n=!1,s=!1){t=t["__v_raw"];const r=kt(t),i=kt(e);n||(e!==i&&I(r,"get",e),I(r,"get",i));const{has:o}=W(r),a=s?z:n?xt:Nt;return o.call(r,e)?a(t.get(e)):o.call(r,i)?a(t.get(i)):void(t!==r&&t.get(e))}function J(t,e=!1){const n=this["__v_raw"],s=kt(n),r=kt(t);return e||(t!==r&&I(s,"has",t),I(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function X(t,e=!1){return t=t["__v_raw"],!e&&I(kt(t),"iterate",y),Reflect.get(t,"size",t)}function Y(t){t=kt(t);const e=kt(this),n=W(e),s=n.has.call(e,t);return s||(e.add(t),A(e,"add",t,t)),this}function Z(t,e){e=kt(e);const n=kt(this),{has:r,get:i}=W(n);let o=r.call(n,t);o||(t=kt(t),o=r.call(n,t));const a=i.call(n,t);return n.set(t,e),o?(0,s.aU)(e,a)&&A(n,"set",t,e,a):A(n,"add",t,e),this}function tt(t){const e=kt(this),{has:n,get:s}=W(e);let r=n.call(e,t);r||(t=kt(t),r=n.call(e,t));const i=s?s.call(e,t):void 0,o=e.delete(t);return r&&A(e,"delete",t,void 0,i),o}function et(){const t=kt(this),e=0!==t.size,n=void 0,s=t.clear();return e&&A(t,"clear",void 0,void 0,n),s}function nt(t,e){return function(n,s){const r=this,i=r["__v_raw"],o=kt(i),a=e?z:t?xt:Nt;return!t&&I(o,"iterate",y),i.forEach(((t,e)=>n.call(s,a(t),a(e),r)))}}function st(t,e,n){return function(...r){const i=this["__v_raw"],o=kt(i),a=(0,s._N)(o),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=i[t](...r),h=n?z:e?xt:Nt;return!e&&I(o,"iterate",u?v:y),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function rt(t){return function(...e){return"delete"!==t&&this}}function it(){const t={get(t){return Q(this,t)},get size(){return X(this)},has:J,add:Y,set:Z,delete:tt,clear:et,forEach:nt(!1,!1)},e={get(t){return Q(this,t,!1,!0)},get size(){return X(this)},has:J,add:Y,set:Z,delete:tt,clear:et,forEach:nt(!1,!0)},n={get(t){return Q(this,t,!0)},get size(){return X(this,!0)},has(t){return J.call(this,t,!0)},add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear"),forEach:nt(!0,!1)},s={get(t){return Q(this,t,!0,!0)},get size(){return X(this,!0)},has(t){return J.call(this,t,!0)},add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear"),forEach:nt(!0,!0)},r=["keys","values","entries",Symbol.iterator];return r.forEach((r=>{t[r]=st(r,!1,!1),n[r]=st(r,!0,!1),e[r]=st(r,!1,!0),s[r]=st(r,!0,!0)})),[t,n,e,s]}const[ot,at,ct,ut]=it();function lt(t,e){const n=e?t?ut:ct:t?at:ot;return(e,r,i)=>"__v_isReactive"===r?!t:"__v_isReadonly"===r?t:"__v_raw"===r?e:Reflect.get((0,s.RI)(n,r)&&r in e?n:e,r,i)}const ht={get:lt(!1,!1)},ft={get:lt(!1,!0)},dt={get:lt(!0,!1)};const pt=new WeakMap,gt=new WeakMap,mt=new WeakMap,yt=new WeakMap;function vt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:vt((0,s.W7)(t))}function bt(t){return It(t)?t:_t(t,!1,K,ht,pt)}function Et(t){return _t(t,!1,G,ft,gt)}function Tt(t){return _t(t,!0,H,dt,mt)}function _t(t,e,n,r,i){if(!(0,s.Kn)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=i.get(t);if(o)return o;const a=wt(t);if(0===a)return t;const c=new Proxy(t,2===a?r:n);return i.set(t,c),c}function Ct(t){return It(t)?Ct(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function It(t){return!(!t||!t["__v_isReadonly"])}function St(t){return!(!t||!t["__v_isShallow"])}function At(t){return Ct(t)||It(t)}function kt(t){const e=t&&t["__v_raw"];return e?kt(e):t}function Dt(t){return(0,s.Nj)(t,"__v_skip",!0),t}const Nt=t=>(0,s.Kn)(t)?bt(t):t,xt=t=>(0,s.Kn)(t)?Tt(t):t;function Rt(t){E&&m&&(t=kt(t),S(t.dep||(t.dep=a())))}function Lt(t,e){t=kt(t),t.dep&&k(t.dep)}function Ot(t){return!(!t||!0!==t.__v_isRef)}function Mt(t){return Ot(t)?t.value:t}const Ft={get:(t,e,n)=>Mt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ot(r)&&!Ot(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Pt(t){return Ct(t)?t:new Proxy(t,Ft)}var Vt;class Ut{constructor(t,e,n,s){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this[Vt]=!1,this._dirty=!0,this.effect=new w(t,(()=>{this._dirty||(this._dirty=!0,Lt(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!s,this["__v_isReadonly"]=n}get value(){const t=kt(this);return Rt(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Bt(t,e,n=!1){let r,i;const o=(0,s.mf)(t);o?(r=t,i=s.dG):(r=t.get,i=t.set);const a=new Ut(r,i,o||!i,n);return a}Vt="__v_isReadonly"},252:function(t,e,n){n.d(e,{$d:function(){return o},Cn:function(){return F},FN:function(){return fn},HY:function(){return Ne},Ko:function(){return Vt},P$:function(){return st},Q6:function(){return ut},U2:function(){return it},Uk:function(){return Ze},Us:function(){return Ce},Wm:function(){return Qe},Y8:function(){return tt},_:function(){return We},dD:function(){return M},h:function(){return Dn},iD:function(){return je},ic:function(){return Ct},kq:function(){return en},nK:function(){return ct},uE:function(){return tn},up:function(){return Ot},wg:function(){return Fe},wy:function(){return xt}});var s=n(262),r=n(577);function i(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){a(i,e,n)}return r}function o(t,e,n,s){if((0,r.mf)(t)){const o=i(t,e,n,s);return o&&(0,r.tI)(o)&&o.catch((t=>{a(t,e,n)})),o}const c=[];for(let r=0;r<t.length;r++)c.push(o(t[r],e,n,s));return c}function a(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const r=e.proxy,o=n;while(s){const e=s.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,r,o))return;s=s.parent}const a=e.appContext.config.errorHandler;if(a)return void i(a,null,10,[t,r,o])}c(t,n,r,s)}function c(t,e,n,s=!0){console.error(t)}let u=!1,l=!1;const h=[];let f=0;const d=[];let p=null,g=0;const m=Promise.resolve();let y=null;function v(t){const e=y||m;return t?e.then(this?t.bind(this):t):e}function w(t){let e=f+1,n=h.length;while(e<n){const s=e+n>>>1,r=S(h[s]);r<t?e=s+1:n=s}return e}function b(t){h.length&&h.includes(t,u&&t.allowRecurse?f+1:f)||(null==t.id?h.push(t):h.splice(w(t.id),0,t),E())}function E(){u||l||(l=!0,y=m.then(k))}function T(t){const e=h.indexOf(t);e>f&&h.splice(e,1)}function _(t){(0,r.kJ)(t)?d.push(...t):p&&p.includes(t,t.allowRecurse?g+1:g)||d.push(t),E()}function C(t,e=(u?f+1:0)){for(0;e<h.length;e++){const t=h[e];t&&t.pre&&(h.splice(e,1),e--,t())}}function I(t){if(d.length){const t=[...new Set(d)];if(d.length=0,p)return void p.push(...t);for(p=t,p.sort(((t,e)=>S(t)-S(e))),g=0;g<p.length;g++)p[g]();p=null,g=0}}const S=t=>null==t.id?1/0:t.id,A=(t,e)=>{const n=S(t)-S(e);if(0===n){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function k(t){l=!1,u=!0,h.sort(A);r.dG;try{for(f=0;f<h.length;f++){const t=h[f];t&&!1!==t.active&&i(t,null,14)}}finally{f=0,h.length=0,I(t),u=!1,y=null,(h.length||d.length)&&k(t)}}new Set;new Map;function D(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||r.kT;let i=n;const a=e.startsWith("update:"),c=a&&e.slice(7);if(c&&c in s){const t=`${"modelValue"===c?"model":c}Modifiers`,{number:e,trim:o}=s[t]||r.kT;o&&(i=n.map((t=>t.trim()))),e&&(i=n.map(r.He))}let u;let l=s[u=(0,r.hR)(e)]||s[u=(0,r.hR)((0,r._A)(e))];!l&&a&&(l=s[u=(0,r.hR)((0,r.rs)(e))]),l&&o(l,t,6,i);const h=s[u+"Once"];if(h){if(t.emitted){if(t.emitted[u])return}else t.emitted={};t.emitted[u]=!0,o(h,t,6,i)}}function N(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(void 0!==i)return i;const o=t.emits;let a={},c=!1;if(!(0,r.mf)(t)){const s=t=>{const n=N(t,e,!0);n&&(c=!0,(0,r.l7)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(s),t.extends&&s(t.extends),t.mixins&&t.mixins.forEach(s)}return o||c?((0,r.kJ)(o)?o.forEach((t=>a[t]=null)):(0,r.l7)(a,o),(0,r.Kn)(t)&&s.set(t,a),a):((0,r.Kn)(t)&&s.set(t,null),null)}function x(t,e){return!(!t||!(0,r.F7)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,r.RI)(t,e[0].toLowerCase()+e.slice(1))||(0,r.RI)(t,(0,r.rs)(e))||(0,r.RI)(t,e))}let R=null,L=null;function O(t){const e=R;return R=t,L=t&&t.type.__scopeId||null,e}function M(t){L=t}function F(){L=null}function P(t,e=R,n){if(!e)return t;if(t._n)return t;const s=(...n)=>{s._d&&Ue(-1);const r=O(e),i=t(...n);return O(r),s._d&&Ue(1),i};return s._n=!0,s._c=!0,s._d=!0,s}function V(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:o,propsOptions:[c],slots:u,attrs:l,emit:h,render:f,renderCache:d,data:p,setupState:g,ctx:m,inheritAttrs:y}=t;let v,w;const b=O(t);try{if(4&n.shapeFlag){const t=i||s;v=nn(f.call(t,t,d,o,g,p,m)),w=l}else{const t=e;0,v=nn(t.length>1?t(o,{attrs:l,slots:u,emit:h}):t(o,null)),w=e.props?l:U(l)}}catch(T){Oe.length=0,a(T,t,1),v=Qe(Re)}let E=v;if(w&&!1!==y){const t=Object.keys(w),{shapeFlag:e}=E;t.length&&7&e&&(c&&t.some(r.tR)&&(w=B(w,c)),E=Ye(E,w))}return n.dirs&&(E=Ye(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),v=E,O(b),v}const U=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,r.F7)(n))&&((e||(e={}))[n]=t[n]);return e},B=(t,e)=>{const n={};for(const s in t)(0,r.tR)(s)&&s.slice(9)in e||(n[s]=t[s]);return n};function j(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!r&&!a||a&&a.$stable)||s!==o&&(s?!o||q(s,o,u):!!o);if(1024&c)return!0;if(16&c)return s?q(s,o,u):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==s[n]&&!x(u,n))return!0}}return!1}function q(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!x(n,i))return!0}return!1}function $({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const K=t=>t.__isSuspense;function H(t,e){e&&e.pendingBranch?(0,r.kJ)(t)?e.effects.push(...t):e.effects.push(t):_(t)}function G(t,e){if(hn){let n=hn.provides;const s=hn.parent&&hn.parent.provides;s===n&&(n=hn.provides=Object.create(s)),n[t]=e}else 0}function z(t,e,n=!1){const s=hn||R;if(s){const i=null==s.parent?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&(0,r.mf)(e)?e.call(s.proxy):e}else 0}const W={};function Q(t,e,n){return J(t,e,n)}function J(t,e,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=r.kT){const h=hn;let f,d,p=!1,g=!1;if((0,s.dq)(t)?(f=()=>t.value,p=(0,s.yT)(t)):(0,s.PG)(t)?(f=()=>t,a=!0):(0,r.kJ)(t)?(g=!0,p=t.some((t=>(0,s.PG)(t)||(0,s.yT)(t))),f=()=>t.map((t=>(0,s.dq)(t)?t.value:(0,s.PG)(t)?Z(t):(0,r.mf)(t)?i(t,h,2):void 0))):f=(0,r.mf)(t)?e?()=>i(t,h,2):()=>{if(!h||!h.isUnmounted)return d&&d(),o(t,h,3,[m])}:r.dG,e&&a){const t=f;f=()=>Z(t())}let m=t=>{d=E.onStop=()=>{i(t,h,4)}};if(vn)return m=r.dG,e?n&&o(e,h,3,[f(),g?[]:void 0,m]):f(),r.dG;let y=g?[]:W;const v=()=>{if(E.active)if(e){const t=E.run();(a||p||(g?t.some(((t,e)=>(0,r.aU)(t,y[e]))):(0,r.aU)(t,y)))&&(d&&d(),o(e,h,3,[t,y===W?void 0:y,m]),y=t)}else E.run()};let w;v.allowRecurse=!!e,"sync"===c?w=v:"post"===c?w=()=>_e(v,h&&h.suspense):(v.pre=!0,h&&(v.id=h.uid),w=()=>b(v));const E=new s.qq(f,w);return e?n?v():y=E.run():"post"===c?_e(E.run.bind(E),h&&h.suspense):E.run(),()=>{E.stop(),h&&h.scope&&(0,r.Od)(h.scope.effects,E)}}function X(t,e,n){const s=this.proxy,i=(0,r.HD)(t)?t.includes(".")?Y(s,t):()=>s[t]:t.bind(s,s);let o;(0,r.mf)(e)?o=e:(o=e.handler,n=e);const a=hn;dn(this);const c=J(i,o.bind(s),n);return a?dn(a):pn(),c}function Y(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function Z(t,e){if(!(0,r.Kn)(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),(0,s.dq)(t))Z(t.value,e);else if((0,r.kJ)(t))for(let n=0;n<t.length;n++)Z(t[n],e);else if((0,r.DM)(t)||(0,r._N)(t))t.forEach((t=>{Z(t,e)}));else if((0,r.PO)(t))for(const n in t)Z(t[n],e);return t}function tt(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Tt((()=>{t.isMounted=!0})),It((()=>{t.isUnmounting=!0})),t}const et=[Function,Array],nt={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:et,onEnter:et,onAfterEnter:et,onEnterCancelled:et,onBeforeLeave:et,onLeave:et,onAfterLeave:et,onLeaveCancelled:et,onBeforeAppear:et,onAppear:et,onAfterAppear:et,onAppearCancelled:et},setup(t,{slots:e}){const n=fn(),r=tt();let i;return()=>{const o=e.default&&ut(e.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let t=!1;for(const e of o)if(e.type!==Re){0,a=e,t=!0;break}}const c=(0,s.IU)(t),{mode:u}=c;if(r.isLeaving)return ot(a);const l=at(a);if(!l)return ot(a);const h=it(l,c,r,n);ct(l,h);const f=n.subTree,d=f&&at(f);let p=!1;const{getTransitionKey:g}=l.type;if(g){const t=g();void 0===i?i=t:t!==i&&(i=t,p=!0)}if(d&&d.type!==Re&&(!Ke(l,d)||p)){const t=it(d,c,r,n);if(ct(d,t),"out-in"===u)return r.isLeaving=!0,t.afterLeave=()=>{r.isLeaving=!1,n.update()},ot(a);"in-out"===u&&l.type!==Re&&(t.delayLeave=(t,e,n)=>{const s=rt(r,d);s[String(d.key)]=d,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},st=nt;function rt(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function it(t,e,n,s){const{appear:i,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:y,onAppear:v,onAfterAppear:w,onAppearCancelled:b}=e,E=String(t.key),T=rt(n,t),_=(t,e)=>{t&&o(t,s,9,e)},C=(t,e)=>{const n=e[1];_(t,e),(0,r.kJ)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},I={mode:a,persisted:c,beforeEnter(e){let s=u;if(!n.isMounted){if(!i)return;s=y||u}e._leaveCb&&e._leaveCb(!0);const r=T[E];r&&Ke(t,r)&&r.el._leaveCb&&r.el._leaveCb(),_(s,[e])},enter(t){let e=l,s=h,r=f;if(!n.isMounted){if(!i)return;e=v||l,s=w||h,r=b||f}let o=!1;const a=t._enterCb=e=>{o||(o=!0,_(e?r:s,[t]),I.delayedLeave&&I.delayedLeave(),t._enterCb=void 0)};e?C(e,[t,a]):a()},leave(e,s){const r=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return s();_(d,[e]);let i=!1;const o=e._leaveCb=n=>{i||(i=!0,s(),_(n?m:g,[e]),e._leaveCb=void 0,T[r]===t&&delete T[r])};T[r]=t,p?C(p,[e,o]):o()},clone(t){return it(t,e,n,s)}};return I}function ot(t){if(ht(t))return t=Ye(t),t.children=null,t}function at(t){return ht(t)?t.children?t.children[0]:void 0:t}function ct(t,e){6&t.shapeFlag&&t.component?ct(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ut(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:i);o.type===Ne?(128&o.patchFlag&&r++,s=s.concat(ut(o.children,e,a))):(e||o.type!==Re)&&s.push(null!=a?Ye(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}const lt=t=>!!t.type.__asyncLoader;const ht=t=>t.type.__isKeepAlive;RegExp,RegExp;function ft(t,e){return(0,r.kJ)(t)?t.some((t=>ft(t,e))):(0,r.HD)(t)?t.split(",").includes(e):!!t.test&&t.test(e)}function dt(t,e){gt(t,"a",e)}function pt(t,e){gt(t,"da",e)}function gt(t,e,n=hn){const s=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(wt(e,s,n),n){let t=n.parent;while(t&&t.parent)ht(t.parent.vnode)&&mt(s,e,n,t),t=t.parent}}function mt(t,e,n,s){const i=wt(e,t,s,!0);St((()=>{(0,r.Od)(s[e],i)}),n)}function yt(t){let e=t.shapeFlag;256&e&&(e-=256),512&e&&(e-=512),t.shapeFlag=e}function vt(t){return 128&t.shapeFlag?t.ssContent:t}function wt(t,e,n=hn,r=!1){if(n){const i=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...r)=>{if(n.isUnmounted)return;(0,s.Jd)(),dn(n);const i=o(e,n,t,r);return pn(),(0,s.lk)(),i});return r?i.unshift(a):i.push(a),a}}const bt=t=>(e,n=hn)=>(!vn||"sp"===t)&&wt(t,e,n),Et=bt("bm"),Tt=bt("m"),_t=bt("bu"),Ct=bt("u"),It=bt("bum"),St=bt("um"),At=bt("sp"),kt=bt("rtg"),Dt=bt("rtc");function Nt(t,e=hn){wt("ec",t,e)}function xt(t,e){const n=R;if(null===n)return t;const s=In(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,n,a,c=r.kT]=e[o];(0,r.mf)(t)&&(t={mounted:t,updated:t}),t.deep&&Z(n),i.push({dir:t,instance:s,value:n,oldValue:void 0,arg:a,modifiers:c})}return t}function Rt(t,e,n,r){const i=t.dirs,a=e&&e.dirs;for(let c=0;c<i.length;c++){const u=i[c];a&&(u.oldValue=a[c].value);let l=u.dir[r];l&&((0,s.Jd)(),o(l,n,8,[t.el,u,t,e]),(0,s.lk)())}}const Lt="components";function Ot(t,e){return Ft(Lt,t,!0,e)||t}const Mt=Symbol();function Ft(t,e,n=!0,s=!1){const i=R||hn;if(i){const n=i.type;if(t===Lt){const t=Sn(n,!1);if(t&&(t===e||t===(0,r._A)(e)||t===(0,r.kC)((0,r._A)(e))))return n}const o=Pt(i[t]||n[t],e)||Pt(i.appContext[t],e);return!o&&s?n:o}}function Pt(t,e){return t&&(t[e]||t[(0,r._A)(e)]||t[(0,r.kC)((0,r._A)(e))])}function Vt(t,e,n,s){let i;const o=n&&n[s];if((0,r.kJ)(t)||(0,r.HD)(t)){i=new Array(t.length);for(let n=0,s=t.length;n<s;n++)i[n]=e(t[n],n,void 0,o&&o[n])}else if("number"===typeof t){0,i=new Array(t);for(let n=0;n<t;n++)i[n]=e(n+1,n,void 0,o&&o[n])}else if((0,r.Kn)(t))if(t[Symbol.iterator])i=Array.from(t,((t,n)=>e(t,n,void 0,o&&o[n])));else{const n=Object.keys(t);i=new Array(n.length);for(let s=0,r=n.length;s<r;s++){const r=n[s];i[s]=e(t[r],r,s,o&&o[s])}}else i=[];return n&&(n[s]=i),i}const Ut=t=>t?gn(t)?In(t)||t.proxy:Ut(t.parent):null,Bt=(0,r.l7)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ut(t.parent),$root:t=>Ut(t.root),$emit:t=>t.emit,$options:t=>zt(t),$forceUpdate:t=>t.f||(t.f=()=>b(t.update)),$nextTick:t=>t.n||(t.n=v.bind(t.proxy)),$watch:t=>X.bind(t)}),jt={get({_:t},e){const{ctx:n,setupState:i,data:o,props:a,accessCache:c,type:u,appContext:l}=t;let h;if("$"!==e[0]){const s=c[e];if(void 0!==s)switch(s){case 1:return i[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(i!==r.kT&&(0,r.RI)(i,e))return c[e]=1,i[e];if(o!==r.kT&&(0,r.RI)(o,e))return c[e]=2,o[e];if((h=t.propsOptions[0])&&(0,r.RI)(h,e))return c[e]=3,a[e];if(n!==r.kT&&(0,r.RI)(n,e))return c[e]=4,n[e];qt&&(c[e]=0)}}const f=Bt[e];let d,p;return f?("$attrs"===e&&(0,s.j)(t,"get",e),f(t)):(d=u.__cssModules)&&(d=d[e])?d:n!==r.kT&&(0,r.RI)(n,e)?(c[e]=4,n[e]):(p=l.config.globalProperties,(0,r.RI)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:s,setupState:i,ctx:o}=t;return i!==r.kT&&(0,r.RI)(i,e)?(i[e]=n,!0):s!==r.kT&&(0,r.RI)(s,e)?(s[e]=n,!0):!(0,r.RI)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:o}},a){let c;return!!n[a]||t!==r.kT&&(0,r.RI)(t,a)||e!==r.kT&&(0,r.RI)(e,a)||(c=o[0])&&(0,r.RI)(c,a)||(0,r.RI)(s,a)||(0,r.RI)(Bt,a)||(0,r.RI)(i.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,r.RI)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let qt=!0;function $t(t){const e=zt(t),n=t.proxy,i=t.ctx;qt=!1,e.beforeCreate&&Ht(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:m,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:b,destroyed:E,unmounted:T,render:_,renderTracked:C,renderTriggered:I,errorCaptured:S,serverPrefetch:A,expose:k,inheritAttrs:D,components:N,directives:x,filters:R}=e,L=null;if(h&&Kt(h,i,L,t.appContext.config.unwrapInjectedRef),c)for(const s in c){const t=c[s];(0,r.mf)(t)&&(i[s]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,r.Kn)(e)&&(t.data=(0,s.qj)(e))}if(qt=!0,a)for(const s in a){const t=a[s],e=(0,r.mf)(t)?t.bind(n,n):(0,r.mf)(t.get)?t.get.bind(n,n):r.dG;0;const o=!(0,r.mf)(t)&&(0,r.mf)(t.set)?t.set.bind(n):r.dG,c=kn({get:e,set:o});Object.defineProperty(i,s,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(u)for(const s in u)Gt(u[s],i,n,s);if(l){const t=(0,r.mf)(l)?l.call(n):l;Reflect.ownKeys(t).forEach((e=>{G(e,t[e])}))}function O(t,e){(0,r.kJ)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(f&&Ht(f,t,"c"),O(Et,d),O(Tt,p),O(_t,g),O(Ct,m),O(dt,y),O(pt,v),O(Nt,S),O(Dt,C),O(kt,I),O(It,b),O(St,T),O(At,A),(0,r.kJ)(k))if(k.length){const e=t.exposed||(t.exposed={});k.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});_&&t.render===r.dG&&(t.render=_),null!=D&&(t.inheritAttrs=D),N&&(t.components=N),x&&(t.directives=x)}function Kt(t,e,n=r.dG,i=!1){(0,r.kJ)(t)&&(t=Yt(t));for(const o in t){const n=t[o];let a;a=(0,r.Kn)(n)?"default"in n?z(n.from||o,n.default,!0):z(n.from||o):z(n),(0,s.dq)(a)&&i?Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t}):e[o]=a}}function Ht(t,e,n){o((0,r.kJ)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function Gt(t,e,n,s){const i=s.includes(".")?Y(n,s):()=>n[s];if((0,r.HD)(t)){const n=e[t];(0,r.mf)(n)&&Q(i,n)}else if((0,r.mf)(t))Q(i,t.bind(n));else if((0,r.Kn)(t))if((0,r.kJ)(t))t.forEach((t=>Gt(t,e,n,s)));else{const s=(0,r.mf)(t.handler)?t.handler.bind(n):e[t.handler];(0,r.mf)(s)&&Q(i,s,t)}else 0}function zt(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let u;return c?u=c:i.length||n||s?(u={},i.length&&i.forEach((t=>Wt(u,t,a,!0))),Wt(u,e,a)):u=e,(0,r.Kn)(e)&&o.set(e,u),u}function Wt(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Wt(t,i,n,!0),r&&r.forEach((e=>Wt(t,e,n,!0)));for(const o in e)if(s&&"expose"===o);else{const s=Qt[o]||n&&n[o];t[o]=s?s(t[o],e[o]):e[o]}return t}const Qt={data:Jt,props:te,emits:te,methods:te,computed:te,beforeCreate:Zt,created:Zt,beforeMount:Zt,mounted:Zt,beforeUpdate:Zt,updated:Zt,beforeDestroy:Zt,beforeUnmount:Zt,destroyed:Zt,unmounted:Zt,activated:Zt,deactivated:Zt,errorCaptured:Zt,serverPrefetch:Zt,components:te,directives:te,watch:ee,provide:Jt,inject:Xt};function Jt(t,e){return e?t?function(){return(0,r.l7)((0,r.mf)(t)?t.call(this,this):t,(0,r.mf)(e)?e.call(this,this):e)}:e:t}function Xt(t,e){return te(Yt(t),Yt(e))}function Yt(t){if((0,r.kJ)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Zt(t,e){return t?[...new Set([].concat(t,e))]:e}function te(t,e){return t?(0,r.l7)((0,r.l7)(Object.create(null),t),e):e}function ee(t,e){if(!t)return e;if(!e)return t;const n=(0,r.l7)(Object.create(null),t);for(const s in e)n[s]=Zt(t[s],e[s]);return n}function ne(t,e,n,i=!1){const o={},a={};(0,r.Nj)(a,He,1),t.propsDefaults=Object.create(null),re(t,e,o,a);for(const s in t.propsOptions[0])s in o||(o[s]=void 0);n?t.props=i?o:(0,s.Um)(o):t.type.props?t.props=o:t.props=a,t.attrs=a}function se(t,e,n,i){const{props:o,attrs:a,vnode:{patchFlag:c}}=t,u=(0,s.IU)(o),[l]=t.propsOptions;let h=!1;if(!(i||c>0)||16&c){let s;re(t,e,o,a)&&(h=!0);for(const i in u)e&&((0,r.RI)(e,i)||(s=(0,r.rs)(i))!==i&&(0,r.RI)(e,s))||(l?!n||void 0===n[i]&&void 0===n[s]||(o[i]=ie(l,u,i,void 0,t,!0)):delete o[i]);if(a!==u)for(const t in a)e&&(0,r.RI)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let s=0;s<n.length;s++){let i=n[s];if(x(t.emitsOptions,i))continue;const c=e[i];if(l)if((0,r.RI)(a,i))c!==a[i]&&(a[i]=c,h=!0);else{const e=(0,r._A)(i);o[e]=ie(l,u,e,c,t,!1)}else c!==a[i]&&(a[i]=c,h=!0)}}h&&(0,s.X$)(t,"set","$attrs")}function re(t,e,n,i){const[o,a]=t.propsOptions;let c,u=!1;if(e)for(let s in e){if((0,r.Gg)(s))continue;const l=e[s];let h;o&&(0,r.RI)(o,h=(0,r._A)(s))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:x(t.emitsOptions,s)||s in i&&l===i[s]||(i[s]=l,u=!0)}if(a){const e=(0,s.IU)(n),i=c||r.kT;for(let s=0;s<a.length;s++){const c=a[s];n[c]=ie(o,e,c,i[c],t,!(0,r.RI)(i,c))}}return u}function ie(t,e,n,s,i,o){const a=t[n];if(null!=a){const t=(0,r.RI)(a,"default");if(t&&void 0===s){const t=a.default;if(a.type!==Function&&(0,r.mf)(t)){const{propsDefaults:r}=i;n in r?s=r[n]:(dn(i),s=r[n]=t.call(null,e),pn())}else s=t}a[0]&&(o&&!t?s=!1:!a[1]||""!==s&&s!==(0,r.rs)(n)||(s=!0))}return s}function oe(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const o=t.props,a={},c=[];let u=!1;if(!(0,r.mf)(t)){const s=t=>{u=!0;const[n,s]=oe(t,e,!0);(0,r.l7)(a,n),s&&c.push(...s)};!n&&e.mixins.length&&e.mixins.forEach(s),t.extends&&s(t.extends),t.mixins&&t.mixins.forEach(s)}if(!o&&!u)return(0,r.Kn)(t)&&s.set(t,r.Z6),r.Z6;if((0,r.kJ)(o))for(let h=0;h<o.length;h++){0;const t=(0,r._A)(o[h]);ae(t)&&(a[t]=r.kT)}else if(o){0;for(const t in o){const e=(0,r._A)(t);if(ae(e)){const n=o[t],s=a[e]=(0,r.kJ)(n)||(0,r.mf)(n)?{type:n}:n;if(s){const t=le(Boolean,s.type),n=le(String,s.type);s[0]=t>-1,s[1]=n<0||t<n,(t>-1||(0,r.RI)(s,"default"))&&c.push(e)}}}}const l=[a,c];return(0,r.Kn)(t)&&s.set(t,l),l}function ae(t){return"$"!==t[0]}function ce(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:null===t?"null":""}function ue(t,e){return ce(t)===ce(e)}function le(t,e){return(0,r.kJ)(e)?e.findIndex((e=>ue(e,t))):(0,r.mf)(e)&&ue(e,t)?0:-1}const he=t=>"_"===t[0]||"$stable"===t,fe=t=>(0,r.kJ)(t)?t.map(nn):[nn(t)],de=(t,e,n)=>{if(e._n)return e;const s=P(((...t)=>fe(e(...t))),n);return s._c=!1,s},pe=(t,e,n)=>{const s=t._ctx;for(const i in t){if(he(i))continue;const n=t[i];if((0,r.mf)(n))e[i]=de(i,n,s);else if(null!=n){0;const t=fe(n);e[i]=()=>t}}},ge=(t,e)=>{const n=fe(e);t.slots.default=()=>n},me=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=(0,s.IU)(e),(0,r.Nj)(e,"_",n)):pe(e,t.slots={})}else t.slots={},e&&ge(t,e);(0,r.Nj)(t.slots,He,1)},ye=(t,e,n)=>{const{vnode:s,slots:i}=t;let o=!0,a=r.kT;if(32&s.shapeFlag){const t=e._;t?n&&1===t?o=!1:((0,r.l7)(i,e),n||1!==t||delete i._):(o=!e.$stable,pe(e,i)),a=e}else e&&(ge(t,e),a={default:1});if(o)for(const r in i)he(r)||r in a||delete i[r]};function ve(){return{app:null,config:{isNativeTag:r.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let we=0;function be(t,e){return function(n,s=null){(0,r.mf)(n)||(n=Object.assign({},n)),null==s||(0,r.Kn)(s)||(s=null);const i=ve(),o=new Set;let a=!1;const c=i.app={_uid:we++,_component:n,_props:s,_container:null,_context:i,_instance:null,version:Nn,get config(){return i.config},set config(t){0},use(t,...e){return o.has(t)||(t&&(0,r.mf)(t.install)?(o.add(t),t.install(c,...e)):(0,r.mf)(t)&&(o.add(t),t(c,...e))),c},mixin(t){return i.mixins.includes(t)||i.mixins.push(t),c},component(t,e){return e?(i.components[t]=e,c):i.components[t]},directive(t,e){return e?(i.directives[t]=e,c):i.directives[t]},mount(r,o,u){if(!a){0;const l=Qe(n,s);return l.appContext=i,o&&e?e(l,r):t(l,r,u),a=!0,c._container=r,r.__vue_app__=c,In(l.component)||l.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return i.provides[t]=e,c}};return c}}function Ee(t,e,n,o,a=!1){if((0,r.kJ)(t))return void t.forEach(((t,s)=>Ee(t,e&&((0,r.kJ)(e)?e[s]:e),n,o,a)));if(lt(o)&&!a)return;const c=4&o.shapeFlag?In(o.component)||o.component.proxy:o.el,u=a?null:c,{i:l,r:h}=t;const f=e&&e.r,d=l.refs===r.kT?l.refs={}:l.refs,p=l.setupState;if(null!=f&&f!==h&&((0,r.HD)(f)?(d[f]=null,(0,r.RI)(p,f)&&(p[f]=null)):(0,s.dq)(f)&&(f.value=null)),(0,r.mf)(h))i(h,l,12,[u,d]);else{const e=(0,r.HD)(h),i=(0,s.dq)(h);if(e||i){const s=()=>{if(t.f){const n=e?d[h]:h.value;a?(0,r.kJ)(n)&&(0,r.Od)(n,c):(0,r.kJ)(n)?n.includes(c)||n.push(c):e?(d[h]=[c],(0,r.RI)(p,h)&&(p[h]=d[h])):(h.value=[c],t.k&&(d[t.k]=h.value))}else e?(d[h]=u,(0,r.RI)(p,h)&&(p[h]=u)):i&&(h.value=u,t.k&&(d[t.k]=u))};u?(s.id=-1,_e(s,n)):s()}else 0}}function Te(){}const _e=H;function Ce(t){return Ie(t)}function Ie(t,e){Te();const n=(0,r.E9)();n.__VUE__=!0;const{insert:i,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=r.dG,cloneNode:m,insertStaticContent:y}=t,v=(t,e,n,s=null,r=null,i=null,o=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!Ke(t,e)&&(s=Z(t),W(t,r,i,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case xe:w(t,e,n,s);break;case Re:E(t,e,n,s);break;case Le:null==t&&_(e,n,s,o);break;case Ne:M(t,e,n,s,r,i,o,a,c);break;default:1&h?k(t,e,n,s,r,i,o,a,c):6&h?F(t,e,n,s,r,i,o,a,c):(64&h||128&h)&&u.process(t,e,n,s,r,i,o,a,c,et)}null!=l&&r&&Ee(l,t&&t.ref,i,e||t,!e)},w=(t,e,n,s)=>{if(null==t)i(e.el=u(e.children),n,s);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},E=(t,e,n,s)=>{null==t?i(e.el=l(e.children||""),n,s):e.el=t.el},_=(t,e,n,s)=>{[t.el,t.anchor]=y(t.children,e,n,s,t.el,t.anchor)},S=({el:t,anchor:e},n,s)=>{let r;while(t&&t!==e)r=p(t),i(t,n,s),t=r;i(e,n,s)},A=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},k=(t,e,n,s,r,i,o,a,c)=>{o=o||"svg"===e.type,null==t?D(e,n,s,r,i,o,a,c):R(t,e,r,i,o,a,c)},D=(t,e,n,s,o,u,l,h)=>{let d,p;const{type:g,props:y,shapeFlag:v,transition:w,patchFlag:b,dirs:E}=t;if(t.el&&void 0!==m&&-1===b)d=t.el=m(t.el);else{if(d=t.el=c(t.type,u,y&&y.is,y),8&v?f(d,t.children):16&v&&x(t.children,d,null,s,o,u&&"foreignObject"!==g,l,h),E&&Rt(t,null,s,"created"),y){for(const e in y)"value"===e||(0,r.Gg)(e)||a(d,e,null,y[e],u,t.children,s,o,Y);"value"in y&&a(d,"value",null,y.value),(p=y.onVnodeBeforeMount)&&an(p,s,t)}N(d,t,t.scopeId,l,s)}E&&Rt(t,null,s,"beforeMount");const T=(!o||o&&!o.pendingBranch)&&w&&!w.persisted;T&&w.beforeEnter(d),i(d,e,n),((p=y&&y.onVnodeMounted)||T||E)&&_e((()=>{p&&an(p,s,t),T&&w.enter(d),E&&Rt(t,null,s,"mounted")}),o)},N=(t,e,n,s,r)=>{if(n&&g(t,n),s)for(let i=0;i<s.length;i++)g(t,s[i]);if(r){let n=r.subTree;if(e===n){const e=r.vnode;N(t,e,e.scopeId,e.slotScopeIds,r.parent)}}},x=(t,e,n,s,r,i,o,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?sn(t[u]):nn(t[u]);v(null,c,e,n,s,r,i,o,a)}},R=(t,e,n,s,i,o,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:d}=e;l|=16&t.patchFlag;const p=t.props||r.kT,g=e.props||r.kT;let m;n&&Se(n,!1),(m=g.onVnodeBeforeUpdate)&&an(m,n,e,t),d&&Rt(e,t,n,"beforeUpdate"),n&&Se(n,!0);const y=i&&"foreignObject"!==e.type;if(h?L(t.dynamicChildren,h,u,n,s,y,o):c||K(t,e,u,null,n,s,y,o,!1),l>0){if(16&l)O(u,e,p,g,n,s,i);else if(2&l&&p.class!==g.class&&a(u,"class",null,g.class,i),4&l&&a(u,"style",p.style,g.style,i),8&l){const r=e.dynamicProps;for(let e=0;e<r.length;e++){const o=r[e],c=p[o],l=g[o];l===c&&"value"!==o||a(u,o,c,l,i,t.children,n,s,Y)}}1&l&&t.children!==e.children&&f(u,e.children)}else c||null!=h||O(u,e,p,g,n,s,i);((m=g.onVnodeUpdated)||d)&&_e((()=>{m&&an(m,n,e,t),d&&Rt(e,t,n,"updated")}),s)},L=(t,e,n,s,r,i,o)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===Ne||!Ke(c,u)||70&c.shapeFlag)?d(c.el):n;v(c,u,l,null,s,r,i,o,!0)}},O=(t,e,n,s,i,o,c)=>{if(n!==s){for(const u in s){if((0,r.Gg)(u))continue;const l=s[u],h=n[u];l!==h&&"value"!==u&&a(t,u,h,l,c,e.children,i,o,Y)}if(n!==r.kT)for(const u in n)(0,r.Gg)(u)||u in s||a(t,u,n[u],null,c,e.children,i,o,Y);"value"in s&&a(t,"value",n.value,s.value)}},M=(t,e,n,s,r,o,a,c,l)=>{const h=e.el=t?t.el:u(""),f=e.anchor=t?t.anchor:u("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:g}=e;g&&(c=c?c.concat(g):g),null==t?(i(h,n,s),i(f,n,s),x(e.children,n,f,r,o,a,c,l)):d>0&&64&d&&p&&t.dynamicChildren?(L(t.dynamicChildren,p,n,r,o,a,c),(null!=e.key||r&&e===r.subTree)&&Ae(t,e,!0)):K(t,e,n,f,r,o,a,c,l)},F=(t,e,n,s,r,i,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?r.ctx.activate(e,n,s,o,c):P(e,n,s,r,i,o,c):U(t,e,c)},P=(t,e,n,s,r,i,o)=>{const a=t.component=ln(t,s,r);if(ht(t)&&(a.ctx.renderer=et),wn(a),a.asyncDep){if(r&&r.registerDep(a,B),!t.el){const t=a.subTree=Qe(Re);E(null,t,e,n)}}else B(a,t,e,n,r,i,o)},U=(t,e,n)=>{const s=e.component=t.component;if(j(t,e,n)){if(s.asyncDep&&!s.asyncResolved)return void q(s,e,n);s.next=e,T(s.update),s.update()}else e.el=t.el,s.vnode=e},B=(t,e,n,i,o,a,c)=>{const u=()=>{if(t.isMounted){let e,{next:n,bu:s,u:i,parent:u,vnode:l}=t,h=n;0,Se(t,!1),n?(n.el=l.el,q(t,n,c)):n=l,s&&(0,r.ir)(s),(e=n.props&&n.props.onVnodeBeforeUpdate)&&an(e,u,n,l),Se(t,!0);const f=V(t);0;const p=t.subTree;t.subTree=f,v(p,f,d(p.el),Z(p),t,o,a),n.el=f.el,null===h&&$(t,f.el),i&&_e(i,o),(e=n.props&&n.props.onVnodeUpdated)&&_e((()=>an(e,u,n,l)),o)}else{let s;const{el:c,props:u}=e,{bm:l,m:h,parent:f}=t,d=lt(e);if(Se(t,!1),l&&(0,r.ir)(l),!d&&(s=u&&u.onVnodeBeforeMount)&&an(s,f,e),Se(t,!0),c&&st){const n=()=>{t.subTree=V(t),st(c,t.subTree,t,o,null)};d?e.type.__asyncLoader().then((()=>!t.isUnmounted&&n())):n()}else{0;const s=t.subTree=V(t);0,v(null,s,n,i,t,o,a),e.el=s.el}if(h&&_e(h,o),!d&&(s=u&&u.onVnodeMounted)){const t=e;_e((()=>an(s,f,t)),o)}(256&e.shapeFlag||f&&lt(f.vnode)&&256&f.vnode.shapeFlag)&&t.a&&_e(t.a,o),t.isMounted=!0,e=n=i=null}},l=t.effect=new s.qq(u,(()=>b(h)),t.scope),h=t.update=()=>l.run();h.id=t.uid,Se(t,!0),h()},q=(t,e,n)=>{e.component=t;const r=t.vnode.props;t.vnode=e,t.next=null,se(t,e.props,r,n),ye(t,e.children,n),(0,s.Jd)(),C(),(0,s.lk)()},K=(t,e,n,s,r,i,o,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,h=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void G(u,h,n,s,r,i,o,a,c);if(256&d)return void H(u,h,n,s,r,i,o,a,c)}8&p?(16&l&&Y(u,r,i),h!==u&&f(n,h)):16&l?16&p?G(u,h,n,s,r,i,o,a,c):Y(u,r,i,!0):(8&l&&f(n,""),16&p&&x(h,n,s,r,i,o,a,c))},H=(t,e,n,s,i,o,a,c,u)=>{t=t||r.Z6,e=e||r.Z6;const l=t.length,h=e.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const s=e[d]=u?sn(e[d]):nn(e[d]);v(t[d],s,n,null,i,o,a,c,u)}l>h?Y(t,i,o,!0,!1,f):x(e,n,s,i,o,a,c,u,f)},G=(t,e,n,s,i,o,a,c,u)=>{let l=0;const h=e.length;let f=t.length-1,d=h-1;while(l<=f&&l<=d){const s=t[l],r=e[l]=u?sn(e[l]):nn(e[l]);if(!Ke(s,r))break;v(s,r,n,null,i,o,a,c,u),l++}while(l<=f&&l<=d){const s=t[f],r=e[d]=u?sn(e[d]):nn(e[d]);if(!Ke(s,r))break;v(s,r,n,null,i,o,a,c,u),f--,d--}if(l>f){if(l<=d){const t=d+1,r=t<h?e[t].el:s;while(l<=d)v(null,e[l]=u?sn(e[l]):nn(e[l]),n,r,i,o,a,c,u),l++}}else if(l>d)while(l<=f)W(t[l],i,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=d;l++){const t=e[l]=u?sn(e[l]):nn(e[l]);null!=t.key&&m.set(t.key,l)}let y,w=0;const b=d-g+1;let E=!1,T=0;const _=new Array(b);for(l=0;l<b;l++)_[l]=0;for(l=p;l<=f;l++){const s=t[l];if(w>=b){W(s,i,o,!0);continue}let r;if(null!=s.key)r=m.get(s.key);else for(y=g;y<=d;y++)if(0===_[y-g]&&Ke(s,e[y])){r=y;break}void 0===r?W(s,i,o,!0):(_[r-g]=l+1,r>=T?T=r:E=!0,v(s,e[r],n,null,i,o,a,c,u),w++)}const C=E?ke(_):r.Z6;for(y=C.length-1,l=b-1;l>=0;l--){const t=g+l,r=e[t],f=t+1<h?e[t+1].el:s;0===_[l]?v(null,r,n,f,i,o,a,c,u):E&&(y<0||l!==C[y]?z(r,n,f,2):y--)}}},z=(t,e,n,s,r=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void z(t.component.subTree,e,n,s);if(128&l)return void t.suspense.move(e,n,s);if(64&l)return void a.move(t,e,n,et);if(a===Ne){i(o,e,n);for(let t=0;t<u.length;t++)z(u[t],e,n,s);return void i(t.anchor,e,n)}if(a===Le)return void S(t,e,n);const h=2!==s&&1&l&&c;if(h)if(0===s)c.beforeEnter(o),i(o,e,n),_e((()=>c.enter(o)),r);else{const{leave:t,delayLeave:s,afterLeave:r}=c,a=()=>i(o,e,n),u=()=>{t(o,(()=>{a(),r&&r()}))};s?s(o,a,u):u()}else i(o,e,n)},W=(t,e,n,s=!1,r=!1)=>{const{type:i,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:f}=t;if(null!=a&&Ee(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const d=1&l&&f,p=!lt(t);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&an(g,e,t),6&l)X(t.component,n,s);else{if(128&l)return void t.suspense.unmount(n,s);d&&Rt(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,r,et,s):u&&(i!==Ne||h>0&&64&h)?Y(u,e,n,!1,!0):(i===Ne&&384&h||!r&&16&l)&&Y(c,e,n),s&&Q(t)}(p&&(g=o&&o.onVnodeUnmounted)||d)&&_e((()=>{g&&an(g,e,t),d&&Rt(t,null,e,"unmounted")}),n)},Q=t=>{const{type:e,el:n,anchor:s,transition:r}=t;if(e===Ne)return void J(n,s);if(e===Le)return void A(t);const i=()=>{o(n),r&&!r.persisted&&r.afterLeave&&r.afterLeave()};if(1&t.shapeFlag&&r&&!r.persisted){const{leave:e,delayLeave:s}=r,o=()=>e(n,i);s?s(t.el,i,o):o()}else i()},J=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},X=(t,e,n)=>{const{bum:s,scope:i,update:o,subTree:a,um:c}=t;s&&(0,r.ir)(s),i.stop(),o&&(o.active=!1,W(a,t,e,n)),c&&_e(c,e),_e((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},Y=(t,e,n,s=!1,r=!1,i=0)=>{for(let o=i;o<t.length;o++)W(t[o],e,n,s,r)},Z=t=>6&t.shapeFlag?Z(t.component.subTree):128&t.shapeFlag?t.suspense.next():p(t.anchor||t.el),tt=(t,e,n)=>{null==t?e._vnode&&W(e._vnode,null,null,!0):v(e._vnode||null,t,e,null,null,null,n),C(),I(),e._vnode=t},et={p:v,um:W,m:z,r:Q,mt:P,mc:x,pc:K,pbc:L,n:Z,o:t};let nt,st;return e&&([nt,st]=e(et)),{render:tt,hydrate:nt,createApp:be(tt,nt)}}function Se({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ae(t,e,n=!1){const s=t.children,i=e.children;if((0,r.kJ)(s)&&(0,r.kJ)(i))for(let r=0;r<s.length;r++){const t=s[r];let e=i[r];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=i[r]=sn(i[r]),e.el=t.el),n||Ae(t,e))}}function ke(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const c=t[s];if(0!==c){if(r=n[n.length-1],t[r]<c){e[s]=r,n.push(s);continue}i=0,o=n.length-1;while(i<o)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}i=n.length,o=n[i-1];while(i-- >0)n[i]=o,o=e[o];return n}const De=t=>t.__isTeleport;const Ne=Symbol(void 0),xe=Symbol(void 0),Re=Symbol(void 0),Le=Symbol(void 0),Oe=[];let Me=null;function Fe(t=!1){Oe.push(Me=t?null:[])}function Pe(){Oe.pop(),Me=Oe[Oe.length-1]||null}let Ve=1;function Ue(t){Ve+=t}function Be(t){return t.dynamicChildren=Ve>0?Me||r.Z6:null,Pe(),Ve>0&&Me&&Me.push(t),t}function je(t,e,n,s,r,i){return Be(We(t,e,n,s,r,i,!0))}function qe(t,e,n,s,r){return Be(Qe(t,e,n,s,r,!0))}function $e(t){return!!t&&!0===t.__v_isVNode}function Ke(t,e){return t.type===e.type&&t.key===e.key}const He="__vInternal",Ge=({key:t})=>null!=t?t:null,ze=({ref:t,ref_key:e,ref_for:n})=>null!=t?(0,r.HD)(t)||(0,s.dq)(t)||(0,r.mf)(t)?{i:R,r:t,k:e,f:!!n}:t:null;function We(t,e=null,n=null,s=0,i=null,o=(t===Ne?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ge(e),ref:e&&ze(e),scopeId:L,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return c?(rn(u,n),128&o&&t.normalize(u)):n&&(u.shapeFlag|=(0,r.HD)(n)?8:16),Ve>0&&!a&&Me&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Me.push(u),u}const Qe=Je;function Je(t,e=null,n=null,i=0,o=null,a=!1){if(t&&t!==Mt||(t=Re),$e(t)){const s=Ye(t,e,!0);return n&&rn(s,n),Ve>0&&!a&&Me&&(6&s.shapeFlag?Me[Me.indexOf(t)]=s:Me.push(s)),s.patchFlag|=-2,s}if(An(t)&&(t=t.__vccOpts),e){e=Xe(e);let{class:t,style:n}=e;t&&!(0,r.HD)(t)&&(e.class=(0,r.C_)(t)),(0,r.Kn)(n)&&((0,s.X3)(n)&&!(0,r.kJ)(n)&&(n=(0,r.l7)({},n)),e.style=(0,r.j5)(n))}const c=(0,r.HD)(t)?1:K(t)?128:De(t)?64:(0,r.Kn)(t)?4:(0,r.mf)(t)?2:0;return We(t,e,n,i,o,c,a,!0)}function Xe(t){return t?(0,s.X3)(t)||He in t?(0,r.l7)({},t):t:null}function Ye(t,e,n=!1){const{props:s,ref:i,patchFlag:o,children:a}=t,c=e?on(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Ge(c),ref:e&&e.ref?n&&i?(0,r.kJ)(i)?i.concat(ze(e)):[i,ze(e)]:ze(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ne?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ye(t.ssContent),ssFallback:t.ssFallback&&Ye(t.ssFallback),el:t.el,anchor:t.anchor};return u}function Ze(t=" ",e=0){return Qe(xe,null,t,e)}function tn(t,e){const n=Qe(Le,null,t);return n.staticCount=e,n}function en(t="",e=!1){return e?(Fe(),qe(Re,null,t)):Qe(Re,null,t)}function nn(t){return null==t||"boolean"===typeof t?Qe(Re):(0,r.kJ)(t)?Qe(Ne,null,t.slice()):"object"===typeof t?sn(t):Qe(xe,null,String(t))}function sn(t){return null===t.el||t.memo?t:Ye(t)}function rn(t,e){let n=0;const{shapeFlag:s}=t;if(null==e)e=null;else if((0,r.kJ)(e))n=16;else if("object"===typeof e){if(65&s){const n=e.default;return void(n&&(n._c&&(n._d=!1),rn(t,n()),n._c&&(n._d=!0)))}{n=32;const s=e._;s||He in e?3===s&&R&&(1===R.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=R}}else(0,r.mf)(e)?(e={default:e,_ctx:R},n=32):(e=String(e),64&s?(n=16,e=[Ze(e)]):n=8);t.children=e,t.shapeFlag|=n}function on(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const t in s)if("class"===t)e.class!==s.class&&(e.class=(0,r.C_)([e.class,s.class]));else if("style"===t)e.style=(0,r.j5)([e.style,s.style]);else if((0,r.F7)(t)){const n=e[t],i=s[t];!i||n===i||(0,r.kJ)(n)&&n.includes(i)||(e[t]=n?[].concat(n,i):i)}else""!==t&&(e[t]=s[t])}return e}function an(t,e,n,s=null){o(t,e,7,[n,s])}const cn=ve();let un=0;function ln(t,e,n){const i=t.type,o=(e?e.appContext:t.appContext)||cn,a={uid:un++,vnode:t,type:i,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new s.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:oe(i,o),emitsOptions:N(i,o),emit:null,emitted:null,propsDefaults:r.kT,inheritAttrs:i.inheritAttrs,ctx:r.kT,data:r.kT,props:r.kT,attrs:r.kT,slots:r.kT,refs:r.kT,setupState:r.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=D.bind(null,a),t.ce&&t.ce(a),a}let hn=null;const fn=()=>hn||R,dn=t=>{hn=t,t.scope.on()},pn=()=>{hn&&hn.scope.off(),hn=null};function gn(t){return 4&t.vnode.shapeFlag}let mn,yn,vn=!1;function wn(t,e=!1){vn=e;const{props:n,children:s}=t.vnode,r=gn(t);ne(t,n,r,e),me(t,s);const i=r?bn(t,e):void 0;return vn=!1,i}function bn(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=(0,s.Xl)(new Proxy(t.ctx,jt));const{setup:o}=n;if(o){const n=t.setupContext=o.length>1?Cn(t):null;dn(t),(0,s.Jd)();const c=i(o,t,0,[t.props,n]);if((0,s.lk)(),pn(),(0,r.tI)(c)){if(c.then(pn,pn),e)return c.then((n=>{En(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=c}else En(t,c,e)}else Tn(t,e)}function En(t,e,n){(0,r.mf)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,r.Kn)(e)&&(t.setupState=(0,s.WL)(e)),Tn(t,n)}function Tn(t,e,n){const i=t.type;if(!t.render){if(!e&&mn&&!i.render){const e=i.template||zt(t).template;if(e){0;const{isCustomElement:n,compilerOptions:s}=t.appContext.config,{delimiters:o,compilerOptions:a}=i,c=(0,r.l7)((0,r.l7)({isCustomElement:n,delimiters:o},s),a);i.render=mn(e,c)}}t.render=i.render||r.dG,yn&&yn(t)}dn(t),(0,s.Jd)(),$t(t),(0,s.lk)(),pn()}function _n(t){return new Proxy(t.attrs,{get(e,n){return(0,s.j)(t,"get","$attrs"),e[n]}})}function Cn(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=_n(t))},slots:t.slots,emit:t.emit,expose:e}}function In(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy((0,s.WL)((0,s.Xl)(t.exposed)),{get(e,n){return n in e?e[n]:n in Bt?Bt[n](t):void 0}}))}function Sn(t,e=!0){return(0,r.mf)(t)?t.displayName||t.name:t.name||e&&t.__name}function An(t){return(0,r.mf)(t)&&"__vccOpts"in t}const kn=(t,e)=>(0,s.Fl)(t,e,vn);function Dn(t,e,n){const s=arguments.length;return 2===s?(0,r.Kn)(e)&&!(0,r.kJ)(e)?$e(e)?Qe(t,null,[e]):Qe(t,e):Qe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):3===s&&$e(n)&&(n=[n]),Qe(t,e,n))}Symbol("");const Nn="3.2.39"},963:function(t,e,n){n.d(e,{bM:function(){return st},iM:function(){return ct},nr:function(){return nt},ri:function(){return ft}});var s=n(577),r=n(252);n(262);const i="http://www.w3.org/2000/svg",o="undefined"!==typeof document?document:null,a=o&&o.createElement("template"),c={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?o.createElementNS(i,t):o.createElement(t,n?{is:n}:void 0);return"select"===t&&s&&null!=s.multiple&&r.setAttribute("multiple",s.multiple),r},createText:t=>o.createTextNode(t),createComment:t=>o.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>o.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling)){while(1)if(e.insertBefore(r.cloneNode(!0),n),r===i||!(r=r.nextSibling))break}else{a.innerHTML=s?`<svg>${t}</svg>`:t;const r=a.content;if(s){const t=r.firstChild;while(t.firstChild)r.appendChild(t.firstChild);r.removeChild(t)}e.insertBefore(r,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function u(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function l(t,e,n){const r=t.style,i=(0,s.HD)(n);if(n&&!i){for(const t in n)f(r,t,n[t]);if(e&&!(0,s.HD)(e))for(const t in e)null==n[t]&&f(r,t,"")}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const h=/\s*!important$/;function f(t,e,n){if((0,s.kJ)(n))n.forEach((n=>f(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=g(t,e);h.test(n)?t.setProperty((0,s.rs)(r),n.replace(h,""),"important"):t[r]=n}}const d=["Webkit","Moz","ms"],p={};function g(t,e){const n=p[e];if(n)return n;let r=(0,s._A)(e);if("filter"!==r&&r in t)return p[e]=r;r=(0,s.kC)(r);for(let s=0;s<d.length;s++){const n=d[s]+r;if(n in t)return p[e]=n}return e}const m="http://www.w3.org/1999/xlink";function y(t,e,n,r,i){if(r&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(m,e.slice(6,e.length)):t.setAttributeNS(m,e,n);else{const r=(0,s.Pq)(e);null==n||r&&!(0,s.yA)(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function v(t,e,n,r,i,o,a){if("innerHTML"===e||"textContent"===e)return r&&a(r,i,o),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName&&!t.tagName.includes("-")){t._value=n;const s=null==n?"":n;return t.value===s&&"OPTION"!==t.tagName||(t.value=s),void(null==n&&t.removeAttribute(e))}let c=!1;if(""===n||null==n){const r=typeof t[e];"boolean"===r?n=(0,s.yA)(n):null==n&&"string"===r?(n="",c=!0):"number"===r&&(n=0,c=!0)}try{t[e]=n}catch(u){0}c&&t.removeAttribute(e)}const[w,b]=(()=>{let t=Date.now,e=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let E=0;const T=Promise.resolve(),_=()=>{E=0},C=()=>E||(T.then(_),E=w());function I(t,e,n,s){t.addEventListener(e,n,s)}function S(t,e,n,s){t.removeEventListener(e,n,s)}function A(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[n,a]=D(e);if(s){const o=i[e]=N(s,r);I(t,n,o,a)}else o&&(S(t,n,o,a),i[e]=void 0)}}const k=/(?:Once|Passive|Capture)$/;function D(t){let e;if(k.test(t)){let n;e={};while(n=t.match(k))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,s.rs)(t.slice(2));return[n,e]}function N(t,e){const n=t=>{const s=t.timeStamp||w();(b||s>=n.attached-1)&&(0,r.$d)(x(t,n.value),e,5,[t])};return n.value=t,n.attached=C(),n}function x(t,e){if((0,s.kJ)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const R=/^on[a-z]/,L=(t,e,n,r,i=!1,o,a,c,h)=>{"class"===e?u(t,r,i):"style"===e?l(t,n,r):(0,s.F7)(e)?(0,s.tR)(e)||A(t,e,n,r,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):O(t,e,r,i))?v(t,e,r,o,a,c,h):("true-value"===e?t._trueValue=r:"false-value"===e&&(t._falseValue=r),y(t,e,r,i))};function O(t,e,n,r){return r?"innerHTML"===e||"textContent"===e||!!(e in t&&R.test(e)&&(0,s.mf)(n)):"spellcheck"!==e&&"draggable"!==e&&"translate"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!R.test(e)||!(0,s.HD)(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const M="transition",F="animation",P=(t,{slots:e})=>(0,r.h)(r.P$,j(t),e);P.displayName="Transition";const V={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},U=(P.props=(0,s.l7)({},r.P$.props,V),(t,e=[])=>{(0,s.kJ)(t)?t.forEach((t=>t(...e))):t&&t(...e)}),B=t=>!!t&&((0,s.kJ)(t)?t.some((t=>t.length>1)):t.length>1);function j(t){const e={};for(const s in t)s in V||(e[s]=t[s]);if(!1===t.css)return e;const{name:n="v",type:r,duration:i,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=q(i),m=g&&g[0],y=g&&g[1],{onBeforeEnter:v,onEnter:w,onEnterCancelled:b,onLeave:E,onLeaveCancelled:T,onBeforeAppear:_=v,onAppear:C=w,onAppearCancelled:I=b}=e,S=(t,e,n)=>{H(t,e?h:c),H(t,e?l:a),n&&n()},A=(t,e)=>{t._isLeaving=!1,H(t,f),H(t,p),H(t,d),e&&e()},k=t=>(e,n)=>{const s=t?C:w,i=()=>S(e,t,n);U(s,[e,i]),G((()=>{H(e,t?u:o),K(e,t?h:c),B(s)||W(e,r,m,i)}))};return(0,s.l7)(e,{onBeforeEnter(t){U(v,[t]),K(t,o),K(t,a)},onBeforeAppear(t){U(_,[t]),K(t,u),K(t,l)},onEnter:k(!1),onAppear:k(!0),onLeave(t,e){t._isLeaving=!0;const n=()=>A(t,e);K(t,f),Y(),K(t,d),G((()=>{t._isLeaving&&(H(t,f),K(t,p),B(E)||W(t,r,y,n))})),U(E,[t,n])},onEnterCancelled(t){S(t,!1),U(b,[t])},onAppearCancelled(t){S(t,!0),U(I,[t])},onLeaveCancelled(t){A(t),U(T,[t])}})}function q(t){if(null==t)return null;if((0,s.Kn)(t))return[$(t.enter),$(t.leave)];{const e=$(t);return[e,e]}}function $(t){const e=(0,s.He)(t);return e}function K(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t._vtc||(t._vtc=new Set)).add(e)}function H(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function G(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let z=0;function W(t,e,n,s){const r=t._endId=++z,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=Q(t,e);if(!o)return s();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,f),i()},f=e=>{e.target===t&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),t.addEventListener(u,f)}function Q(t,e){const n=window.getComputedStyle(t),s=t=>(n[t]||"").split(", "),r=s(M+"Delay"),i=s(M+"Duration"),o=J(r,i),a=s(F+"Delay"),c=s(F+"Duration"),u=J(a,c);let l=null,h=0,f=0;e===M?o>0&&(l=M,h=o,f=i.length):e===F?u>0&&(l=F,h=u,f=c.length):(h=Math.max(o,u),l=h>0?o>u?M:F:null,f=l?l===M?i.length:c.length:0);const d=l===M&&/\b(transform|all)(,|$)/.test(n[M+"Property"]);return{type:l,timeout:h,propCount:f,hasTransform:d}}function J(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>X(e)+X(t[n]))))}function X(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function Y(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Z=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,s.kJ)(e)?t=>(0,s.ir)(e,t):e};function tt(t){t.target.composing=!0}function et(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const nt={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=Z(i);const o=r||i.props&&"number"===i.props.type;I(t,e?"change":"input",(e=>{if(e.target.composing)return;let r=t.value;n&&(r=r.trim()),o&&(r=(0,s.He)(r)),t._assign(r)})),n&&I(t,"change",(()=>{t.value=t.value.trim()})),e||(I(t,"compositionstart",tt),I(t,"compositionend",et),I(t,"change",et))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},o){if(t._assign=Z(o),t.composing)return;if(document.activeElement===t&&"range"!==t.type){if(n)return;if(r&&t.value.trim()===e)return;if((i||"number"===t.type)&&(0,s.He)(t.value)===e)return}const a=null==e?"":e;t.value!==a&&(t.value=a)}};const st={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const i=(0,s.DM)(e);I(t,"change",(()=>{const e=Array.prototype.filter.call(t.options,(t=>t.selected)).map((t=>n?(0,s.He)(it(t)):it(t)));t._assign(t.multiple?i?new Set(e):e:e[0])})),t._assign=Z(r)},mounted(t,{value:e}){rt(t,e)},beforeUpdate(t,e,n){t._assign=Z(n)},updated(t,{value:e}){rt(t,e)}};function rt(t,e){const n=t.multiple;if(!n||(0,s.kJ)(e)||(0,s.DM)(e)){for(let r=0,i=t.options.length;r<i;r++){const i=t.options[r],o=it(i);if(n)(0,s.kJ)(e)?i.selected=(0,s.hq)(e,o)>-1:i.selected=e.has(o);else if((0,s.WV)(it(i),e))return void(t.selectedIndex!==r&&(t.selectedIndex=r))}n||-1===t.selectedIndex||(t.selectedIndex=-1)}}function it(t){return"_value"in t?t._value:t.value}const ot=["ctrl","shift","alt","meta"],at={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>ot.some((n=>t[`${n}Key`]&&!e.includes(n)))},ct=(t,e)=>(n,...s)=>{for(let t=0;t<e.length;t++){const s=at[e[t]];if(s&&s(n,e))return}return t(n,...s)};const ut=(0,s.l7)({patchProp:L},c);let lt;function ht(){return lt||(lt=(0,r.Us)(ut))}const ft=(...t)=>{const e=ht().createApp(...t);const{mount:n}=e;return e.mount=t=>{const r=dt(t);if(!r)return;const i=e._component;(0,s.mf)(i)||i.render||i.template||(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function dt(t){if((0,s.HD)(t)){const e=document.querySelector(t);return e}return t}},577:function(t,e,n){function s(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,{C_:function(){return d},DM:function(){return R},E9:function(){return st},F7:function(){return C},Gg:function(){return K},HD:function(){return M},He:function(){return et},Kn:function(){return P},NO:function(){return T},Nj:function(){return tt},Od:function(){return A},PO:function(){return q},Pq:function(){return a},RI:function(){return D},S0:function(){return $},W7:function(){return j},WV:function(){return g},Z6:function(){return b},_A:function(){return z},_N:function(){return x},aU:function(){return Y},dG:function(){return E},e1:function(){return i},fY:function(){return s},hR:function(){return X},hq:function(){return m},ir:function(){return Z},j5:function(){return u},kC:function(){return J},kJ:function(){return N},kT:function(){return w},l7:function(){return S},mf:function(){return O},rs:function(){return Q},tI:function(){return V},tR:function(){return I},yA:function(){return c},yk:function(){return F},zw:function(){return y}});const r="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",i=s(r);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=s(o);function c(t){return!!t||""===t}function u(t){if(N(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=M(s)?f(s):u(s);if(r)for(const t in r)e[t]=r[t]}return e}return M(t)||P(t)?t:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function f(t){const e={};return t.split(l).forEach((t=>{if(t){const n=t.split(h);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function d(t){let e="";if(M(t))e=t;else if(N(t))for(let n=0;n<t.length;n++){const s=d(t[n]);s&&(e+=s+" ")}else if(P(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function p(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=g(t[s],e[s]);return n}function g(t,e){if(t===e)return!0;let n=L(t),s=L(e);if(n||s)return!(!n||!s)&&t.getTime()===e.getTime();if(n=F(t),s=F(e),n||s)return t===e;if(n=N(t),s=N(e),n||s)return!(!n||!s)&&p(t,e);if(n=P(t),s=P(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const n in t){const s=t.hasOwnProperty(n),r=e.hasOwnProperty(n);if(s&&!r||!s&&r||!g(t[n],e[n]))return!1}}return String(t)===String(e)}function m(t,e){return t.findIndex((t=>g(t,e)))}const y=t=>M(t)?t:null==t?"":N(t)||P(t)&&(t.toString===U||!O(t.toString))?JSON.stringify(t,v,2):String(t),v=(t,e)=>e&&e.__v_isRef?v(t,e.value):x(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n])=>(t[`${e} =>`]=n,t)),{})}:R(e)?{[`Set(${e.size})`]:[...e.values()]}:!P(e)||N(e)||q(e)?e:String(e),w={},b=[],E=()=>{},T=()=>!1,_=/^on[^a-z]/,C=t=>_.test(t),I=t=>t.startsWith("onUpdate:"),S=Object.assign,A=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},k=Object.prototype.hasOwnProperty,D=(t,e)=>k.call(t,e),N=Array.isArray,x=t=>"[object Map]"===B(t),R=t=>"[object Set]"===B(t),L=t=>"[object Date]"===B(t),O=t=>"function"===typeof t,M=t=>"string"===typeof t,F=t=>"symbol"===typeof t,P=t=>null!==t&&"object"===typeof t,V=t=>P(t)&&O(t.then)&&O(t.catch),U=Object.prototype.toString,B=t=>U.call(t),j=t=>B(t).slice(8,-1),q=t=>"[object Object]"===B(t),$=t=>M(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,K=s(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),H=t=>{const e=Object.create(null);return n=>{const s=e[n];return s||(e[n]=t(n))}},G=/-(\w)/g,z=H((t=>t.replace(G,((t,e)=>e?e.toUpperCase():"")))),W=/\B([A-Z])/g,Q=H((t=>t.replace(W,"-$1").toLowerCase())),J=H((t=>t.charAt(0).toUpperCase()+t.slice(1))),X=H((t=>t?`on${J(t)}`:"")),Y=(t,e)=>!Object.is(t,e),Z=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},tt=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},et=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let nt;const st=()=>nt||(nt="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},503:function(t,e,n){n.d(e,{ZF:function(){return s.ZF}});var s=n(816),r="firebase",i="9.10.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,s.KN)(r,i,"app")},321:function(t,e,n){n.d(e,{ET:function(){return Yl},hJ:function(){return fl},ad:function(){return yl},cf:function(){return Zl}});var s,r=n(816),i=n(463),o=n(333),a=n(444),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},u={},l=l||{},h=c||self;function f(){}function d(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function g(t){return Object.prototype.hasOwnProperty.call(t,m)&&t[m]||(t[m]=++y)}var m="closure_uid_"+(1e9*Math.random()>>>0),y=0;function v(t,e,n){return t.call.apply(t.bind,arguments)}function w(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function b(t,e,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:w,b.apply(null,arguments)}function E(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function T(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,s){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return e.prototype[n].apply(t,r)}}function _(){this.s=this.s,this.o=this.o}var C=0,I={};_.prototype.s=!1,_.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=C)){var t=g(this);delete I[t]}},_.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const S=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function A(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function k(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(d(e)){const n=t.length||0,s=e.length||0;t.length=n+s;for(let r=0;r<s;r++)t[n+r]=e[r]}else t.push(e)}}function D(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}D.prototype.h=function(){this.defaultPrevented=!0};var N=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",f,e),h.removeEventListener("test",f,e)}catch(n){}return t}();function x(t){return/^[\s\xa0]*$/.test(t)}var R=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function L(t,e){return t<e?-1:t>e?1:0}function O(){var t=h.navigator;return t&&(t=t.userAgent)?t:""}function M(t){return-1!=O().indexOf(t)}function F(t){return F[" "](t),t}function P(t){var e=J;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}F[" "]=f;var V,U=M("Opera"),B=M("Trident")||M("MSIE"),j=M("Edge"),q=j||B,$=M("Gecko")&&!(-1!=O().toLowerCase().indexOf("webkit")&&!M("Edge"))&&!(M("Trident")||M("MSIE"))&&!M("Edge"),K=-1!=O().toLowerCase().indexOf("webkit")&&!M("Edge");function H(){var t=h.document;return t?t.documentMode:void 0}t:{var G="",z=function(){var t=O();return $?/rv:([^\);]+)(\)|;)/.exec(t):j?/Edge\/([\d\.]+)/.exec(t):B?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):K?/WebKit\/(\S+)/.exec(t):U?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(z&&(G=z?z[1]:""),B){var W=H();if(null!=W&&W>parseFloat(G)){V=String(W);break t}}V=G}var Q,J={};function X(){return P((function(){let t=0;const e=R(String(V)).split("."),n=R("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==r[0].length&&0==i[0].length)break;t=L(0==r[1].length?0:parseInt(r[1],10),0==i[1].length?0:parseInt(i[1],10))||L(0==r[2].length,0==i[2].length)||L(r[2],i[2]),r=r[3],i=i[3]}while(0==t)}return 0<=t}))}if(h.document&&B){var Y=H();Q=Y||(parseInt(V,10)||void 0)}else Q=void 0;var Z=Q;function tt(t,e){if(D.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($){t:{try{F(e.nodeName);var r=!0;break t}catch(i){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:et[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&tt.X.h.call(this)}}T(tt,D);var et={2:"touch",3:"pen",4:"mouse"};tt.prototype.h=function(){tt.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var nt="closure_listenable_"+(1e6*Math.random()|0),st=0;function rt(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++st,this.ba=this.ea=!1}function it(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ot(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function at(t){const e={};for(const n in t)e[n]=t[n];return e}const ct="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ut(t,e){let n,s;for(let r=1;r<arguments.length;r++){for(n in s=arguments[r],s)t[n]=s[n];for(let e=0;e<ct.length;e++)n=ct[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function lt(t){this.src=t,this.g={},this.h=0}function ht(t,e){var n=e.type;if(n in t.g){var s,r=t.g[n],i=S(r,e);(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(it(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ft(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}lt.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=ft(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new rt(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};var dt="closure_lm_"+(1e6*Math.random()|0),pt={};function gt(t,e,n,s,r){if(s&&s.once)return vt(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)gt(t,e[i],n,s,r);return null}return n=It(n),t&&t[nt]?t.N(e,n,p(s)?!!s.capture:!!s,r):mt(t,e,n,!1,s,r)}function mt(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=p(r)?!!r.capture:!!r,a=_t(t);if(a||(t[dt]=a=new lt(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=yt(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)N||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Et(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function yt(){function t(n){return e.call(t.src,t.listener,n)}const e=Tt;return t}function vt(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)vt(t,e[i],n,s,r);return null}return n=It(n),t&&t[nt]?t.O(e,n,p(s)?!!s.capture:!!s,r):mt(t,e,n,!0,s,r)}function wt(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)wt(t,e[i],n,s,r);else s=p(s)?!!s.capture:!!s,n=It(n),t&&t[nt]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=ft(i,n,s,r),-1<n&&(it(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=_t(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ft(e,n,s,r)),(n=-1<t?e[t]:null)&&bt(n))}function bt(t){if("number"!==typeof t&&t&&!t.ba){var e=t.src;if(e&&e[nt])ht(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Et(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=_t(e))?(ht(n,t),0==n.h&&(n.src=null,e[dt]=null)):it(t)}}}function Et(t){return t in pt?pt[t]:pt[t]="on"+t}function Tt(t,e){if(t.ba)t=!0;else{e=new tt(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&bt(t),t=n.call(s,e)}return t}function _t(t){return t=t[dt],t instanceof lt?t:null}var Ct="__closure_events_fn_"+(1e9*Math.random()>>>0);function It(t){return"function"===typeof t?t:(t[Ct]||(t[Ct]=function(e){return t.handleEvent(e)}),t[Ct])}function St(){_.call(this),this.i=new lt(this),this.P=this,this.I=null}function At(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"===typeof e)e=new D(e,t);else if(e instanceof D)e.target=e.target||t;else{var r=e;e=new D(s,t),ut(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=kt(o,s,!0,e)&&r}if(o=e.g=t,r=kt(o,s,!0,e)&&r,r=kt(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=kt(o,s,!1,e)&&r}function kt(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&ht(t.i,o),r=!1!==a.call(c,s)&&r}}return r&&!s.defaultPrevented}T(St,_),St.prototype[nt]=!0,St.prototype.removeEventListener=function(t,e,n,s){wt(this,t,e,n,s)},St.prototype.M=function(){if(St.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)it(n[s]);delete e.g[t],e.h--}}this.I=null},St.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},St.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var Dt=h.JSON.stringify;function Nt(){var t=Ut;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class xt{constructor(){this.h=this.g=null}add(t,e){const n=Lt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Rt,Lt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Ot),(t=>t.reset()));class Ot{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Mt(t){h.setTimeout((()=>{throw t}),0)}function Ft(t,e){Rt||Pt(),Vt||(Rt(),Vt=!0),Ut.add(t,e)}function Pt(){var t=h.Promise.resolve(void 0);Rt=function(){t.then(Bt)}}var Vt=!1,Ut=new xt;function Bt(){for(var t;t=Nt();){try{t.h.call(t.g)}catch(n){Mt(n)}var e=Lt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Vt=!1}function jt(t,e){St.call(this),this.h=t||1,this.g=e||h,this.j=b(this.kb,this),this.l=Date.now()}function qt(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function $t(t,e,n){if("function"===typeof t)n&&(t=b(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=b(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function Kt(t){t.g=$t((()=>{t.g=null,t.i&&(t.i=!1,Kt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}T(jt,St),s=jt.prototype,s.ca=!1,s.R=null,s.kb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),At(this,"tick"),this.ca&&(qt(this),this.start()))}},s.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},s.M=function(){jt.X.M.call(this),qt(this),delete this.g};class Ht extends _{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Kt(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gt(t){_.call(this),this.h=t,this.g={}}T(Gt,_);var zt=[];function Wt(t,e,n,s){Array.isArray(n)||(n&&(zt[0]=n.toString()),n=zt);for(var r=0;r<n.length;r++){var i=gt(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Qt(t){ot(t.g,(function(t,e){this.g.hasOwnProperty(e)&&bt(t)}),t),t.g={}}function Jt(){this.g=!0}function Xt(t,e,n,s,r,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}function Yt(t,e,n,s,r,i,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+i+" "+o}))}function Zt(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,n)+(s?" "+s:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<r.length;o++)r[o]=""}}}return Dt(n)}catch(a){return e}}Gt.prototype.M=function(){Gt.X.M.call(this),Qt(this)},Gt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Jt.prototype.Aa=function(){this.g=!1},Jt.prototype.info=function(){};var ne={},se=null;function re(){return se=se||new St}function ie(t){D.call(this,ne.Oa,t)}function oe(t){const e=re();At(e,new ie(e,t))}function ae(t,e){D.call(this,ne.STAT_EVENT,t),this.stat=e}function ce(t){const e=re();At(e,new ae(e,t))}function ue(t,e){D.call(this,ne.Pa,t),this.size=e}function le(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}ne.Oa="serverreachability",T(ie,D),ne.STAT_EVENT="statevent",T(ae,D),ne.Pa="timingevent",T(ue,D);var he={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,La:7,TIMEOUT:8,Cb:9},fe={qb:"complete",Mb:"success",Ma:"error",La:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function de(){}function pe(t){return t.h||(t.h=t.i())}function ge(){}de.prototype.h=null;var me,ye={OPEN:"a",pb:"b",Ma:"c",Bb:"d"};function ve(){D.call(this,"d")}function we(){D.call(this,"c")}function be(){}function Ee(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Gt(this),this.O=_e,t=q?125:void 0,this.T=new jt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Te}function Te(){this.i=null,this.g="",this.h=!1}T(ve,D),T(we,D),T(be,de),be.prototype.g=function(){return new XMLHttpRequest},be.prototype.i=function(){return{}},me=new be;var _e=45e3,Ce={},Ie={};function Se(t,e,n){t.K=1,t.v=We($e(e)),t.s=n,t.P=!0,Ae(t,null)}function Ae(t,e){t.F=Date.now(),xe(t),t.A=$e(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),cn(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Te,t.g=fs(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Ht(b(t.Ka,t,t.g),t.N)),Wt(t.S,t.g,"readystatechange",t.hb),e=t.H?at(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),oe(1),Xt(t.j,t.u,t.A,t.m,t.U,t.s)}function ke(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function De(t,e,n){let s,r=!0;for(;!t.I&&t.C<n.length;){if(s=Ne(t,n),s==Ie){4==e&&(t.o=4,ce(14),r=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}if(s==Ce){t.o=4,ce(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}Zt(t.j,t.m,s,null),Fe(t,s)}ke(t)&&s!=Ie&&s!=Ce&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ce(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),rs(e),e.K=!0,ce(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),Me(t),Oe(t))}function Ne(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?Ie:(n=Number(e.substring(n,s)),isNaN(n)?Ce:(s+=1,s+n>e.length?Ie:(e=e.substr(s,n),t.C=s+n,e)))}function xe(t){t.V=Date.now()+t.O,Re(t,t.O)}function Re(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=le(b(t.fb,t),e)}function Le(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function Oe(t){0==t.l.G||t.I||as(t.l,t)}function Me(t){Le(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,qt(t.T),Qt(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Fe(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||mn(n.h,t)))if(!t.J&&mn(n.h,t)&&3==n.G){try{var s=n.Fa.g.parse(e)}catch(u){s=null}if(Array.isArray(s)&&3==s.length){var r=s;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;os(n),Qn(n)}ss(n),ce(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&0==n.A&&!n.v&&(n.v=le(b(n.bb,n),6e3));if(1>=gn(n.h)&&n.ja){try{n.ja()}catch(u){}n.ja=void 0}}else us(n,11)}else if((t.J||n.g==t)&&os(n),!x(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const e=u[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const r=u[4];null!=r&&(n.Ca=r,n.j.info("SVER="+n.Ca));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(s=1.5*l,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=s.h;i.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(yn(i,i.h),i.h=null))}if(s.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.za=t,ze(s.F,s.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=hs(s,s.H?s.ka:null,s.V),o.J){vn(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Le(a),xe(a)),s.g=o}else ns(s);0<n.i.length&&Xn(n)}else"stop"!=u[0]&&"close"!=u[0]||us(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?us(n,7):Wn(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}oe(4)}catch(u){}}function Pe(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(d(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}function Ve(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(d(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Ue(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(d(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Ve(t),s=Pe(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}s=Ee.prototype,s.setTimeout=function(t){this.O=t},s.hb=function(t){t=t.target;const e=this.L;e&&3==qn(t)?e.l():this.Ka(t)},s.Ka=function(t){try{if(t==this.g)t:{const l=qn(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>l)&&(3!=l||q||this.g&&(this.h.h||this.g.fa()||$n(this.g)))){this.I||4!=l||7==e||oe(8==e||0>=f?3:2),Le(this);var n=this.g.aa();this.Y=n;e:if(ke(this)){var s=$n(this.g);t="";var r=s.length,i=4==qn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Me(this),Oe(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,Yt(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,ce(12),Me(this),Oe(this);break t}Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Fe(this,n)}this.P?(De(this,l,o),q&&this.i&&3==l&&(Wt(this.S,this.T,"tick",this.gb),this.T.start())):(Zt(this.j,this.m,o,null),Fe(this,o)),4==l&&Me(this),this.i&&!this.I&&(4==l?as(this.l,this):(this.i=!1,xe(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),Me(this),Oe(this)}}}catch(l){}},s.gb=function(){if(this.g){var t=qn(this.g),e=this.g.fa();this.C<e.length&&(Le(this),De(this,t,e),this.i&&4!=t&&xe(this))}},s.cancel=function(){this.I=!0,Me(this)},s.fb=function(){this.B=null;const t=Date.now();0<=t-this.V?(te(this.j,this.A),2!=this.K&&(oe(3),ce(17)),Me(this),this.o=2,Oe(this)):Re(this,this.V-t)};var Be=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function je(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function qe(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof qe){this.h=void 0!==e?e:t.h,Ke(this,t.j),this.s=t.s,this.g=t.g,He(this,t.m),this.l=t.l,e=t.i;var n=new sn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ge(this,n),this.o=t.o}else t&&(n=String(t).match(Be))?(this.h=!!e,Ke(this,n[1]||"",!0),this.s=Qe(n[2]||""),this.g=Qe(n[3]||"",!0),He(this,n[4]),this.l=Qe(n[5]||"",!0),Ge(this,n[6]||"",!0),this.o=Qe(n[7]||"")):(this.h=!!e,this.i=new sn(null,this.h))}function $e(t){return new qe(t)}function Ke(t,e,n){t.j=n?Qe(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function He(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ge(t,e,n){e instanceof sn?(t.i=e,ln(t.i,t.h)):(n||(e=Je(e,en)),t.i=new sn(e,t.h))}function ze(t,e,n){t.i.set(e,n)}function We(t){return ze(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Qe(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Je(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Xe),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Xe(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}qe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Je(e,Ye,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Je(e,Ye,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Je(n,"/"==n.charAt(0)?tn:Ze,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Je(n,nn)),t.join("")};var Ye=/[#\/\?@]/g,Ze=/[#\?:]/g,tn=/[#\?]/g,en=/[#\?@]/g,nn=/#/g;function sn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function rn(t){t.g||(t.g=new Map,t.h=0,t.i&&je(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function on(t,e){rn(t),e=un(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function an(t,e){return rn(t),e=un(t,e),t.g.has(e)}function cn(t,e,n){on(t,e),0<n.length&&(t.i=null,t.g.set(un(t,e),A(n)),t.h+=n.length)}function un(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ln(t,e){e&&!t.j&&(rn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(on(this,e),cn(this,n,t))}),t)),t.j=e}s=sn.prototype,s.add=function(t,e){rn(this),this.i=null,t=un(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},s.forEach=function(t,e){rn(this),this.g.forEach((function(n,s){n.forEach((function(n){t.call(e,n,s,this)}),this)}),this)},s.oa=function(){rn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let t=0;t<r.length;t++)n.push(e[s])}return n},s.W=function(t){rn(this);let e=[];if("string"===typeof t)an(this,t)&&(e=e.concat(this.g.get(un(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},s.set=function(t,e){return rn(this),this.i=null,t=un(this,t),an(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},s.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e},s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;""!==o[s]&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};var hn=class{constructor(t,e){this.h=t,this.g=e}};function fn(t){this.l=t||dn,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ga&&h.g.Ga()&&h.g.Ga().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dn=10;function pn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function gn(t){return t.h?1:t.g?t.g.size:0}function mn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function yn(t,e){t.g?t.g.add(e):t.h=e}function vn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function wn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return A(t.i)}function bn(){}function En(){this.g=new bn}function Tn(t,e,n){const s=n||"";try{Ue(t,(function(t,n){let r=t;p(t)&&(r=Dt(t)),e.push(s+n+"="+encodeURIComponent(r))}))}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function _n(t,e){const n=new Jt;if(h.Image){const s=new Image;s.onload=E(Cn,n,s,"TestLoadImage: loaded",!0,e),s.onerror=E(Cn,n,s,"TestLoadImage: error",!1,e),s.onabort=E(Cn,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=E(Cn,n,s,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}function Cn(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch(i){}}function In(t){this.l=t.$b||null,this.j=t.ib||!1}function Sn(t,e){St.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=An,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}fn.prototype.cancel=function(){if(this.i=wn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},bn.prototype.stringify=function(t){return h.JSON.stringify(t,void 0)},bn.prototype.parse=function(t){return h.JSON.parse(t,void 0)},T(In,de),In.prototype.g=function(){return new Sn(this.l,this.j)},In.prototype.i=function(t){return function(){return t}}({}),T(Sn,St);var An=0;function kn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ga.bind(t))}function Dn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Nn(t)}function Nn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}s=Sn.prototype,s.open=function(t,e){if(this.readyState!=An)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Nn(this)},s.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||h).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Dn(this)),this.readyState=An},s.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Nn(this)),this.g&&(this.readyState=3,Nn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ga.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;kn(this)}else t.text().then(this.Ua.bind(this),this.ga.bind(this))},s.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Dn(this):Nn(this),3==this.readyState&&kn(this)}},s.Ua=function(t){this.g&&(this.response=this.responseText=t,Dn(this))},s.Ta=function(t){this.g&&(this.response=t,Dn(this))},s.ga=function(){this.g&&Dn(this)},s.setRequestHeader=function(t,e){this.v.append(t,e)},s.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Sn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var xn=h.JSON.parse;function Rn(t){St.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ln,this.K=this.L=!1}T(Rn,St);var Ln="",On=/^https?$/i,Mn=["POST","PUT"];function Fn(t){return B&&X()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Pn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Vn(t),Bn(t)}function Vn(t){t.D||(t.D=!0,At(t,"complete"),At(t,"error"))}function Un(t){if(t.h&&"undefined"!=typeof l&&(!t.C[1]||4!=qn(t)||2!=t.aa()))if(t.v&&4==qn(t))$t(t.Ha,0,t);else if(At(t,"readystatechange"),4==qn(t)){t.h=!1;try{const c=t.aa();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===c){var r=String(t.H).match(Be)[1]||null;if(!r&&h.self&&h.self.location){var i=h.self.location.protocol;r=i.substr(0,i.length-1)}s=!On.test(r?r.toLowerCase():"")}n=s}if(n)At(t,"complete"),At(t,"success");else{t.m=6;try{var o=2<qn(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.aa()+"]",Vn(t)}}finally{Bn(t)}}}function Bn(t,e){if(t.g){jn(t);const s=t.g,r=t.C[0]?f:null;t.g=null,t.C=null,e||At(t,"ready");try{s.onreadystatechange=r}catch(n){}}}function jn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function qn(t){return t.g?t.g.readyState:0}function $n(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ln:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Ds){return null}}function Kn(t){let e="";return ot(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Hn(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Kn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):ze(t,e,n))}function Gn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function zn(t){this.Ca=0,this.i=[],this.j=new Jt,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.$a=this.U=0,this.Ya=Gn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Wa=Gn("baseRetryDelayMs",5e3,t),this.ab=Gn("retryDelaySeedMs",1e4,t),this.Za=Gn("forwardChannelMaxRetries",2,t),this.ta=Gn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Yb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new fn(t&&t.concurrentRequestLimit),this.Fa=new En,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Xa=t&&t.Wb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Wn(t){if(Jn(t),3==t.G){var e=t.U++,n=$e(t.F);ze(n,"SID",t.I),ze(n,"RID",e),ze(n,"TYPE","terminate"),ts(t,n),e=new Ee(t,t.j,e,void 0),e.K=2,e.v=We($e(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(e.v.toString(),"")),!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=fs(e.l,null),e.g.da(e.v)),e.F=Date.now(),xe(e)}ls(t)}function Qn(t){t.g&&(rs(t),t.g.cancel(),t.g=null)}function Jn(t){Qn(t),t.u&&(h.clearTimeout(t.u),t.u=null),os(t),t.h.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function Xn(t){pn(t.h)||t.m||(t.m=!0,Ft(t.Ja,t),t.C=0)}function Yn(t,e){return!(gn(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.C>=(t.Ya?0:t.Za))&&(t.m=le(b(t.Ja,t,e),cs(t,t.C)),t.C++,!0))}function Zn(t,e){var n;n=e?e.m:t.U++;const s=$e(t.F);ze(s,"SID",t.I),ze(s,"RID",n),ze(s,"AID",t.T),ts(t,s),t.o&&t.s&&Hn(s,t.o,t.s),n=new Ee(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=es(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),yn(t.h,n),Se(n,s,e)}function ts(t,e){t.ia&&ot(t.ia,(function(t,n){ze(e,n,t)})),t.l&&Ue({},(function(t,n){ze(e,n,t)}))}function es(t,e,n){n=Math.min(t.i.length,n);var s=t.l?b(t.l.Qa,t.l,t):null;t:{var r=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let i=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=e,0>n)e=Math.max(0,r[o].h-100),i=!1;else try{Tn(a,t,"req"+n+"_")}catch(Us){s&&s(a)}}if(i){s=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,s}function ns(t){t.g||t.u||(t.Z=1,Ft(t.Ia,t),t.A=0)}function ss(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=le(b(t.Ia,t),cs(t,t.A)),t.A++,!0)}function rs(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function is(t){t.g=new Ee(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=$e(t.sa);ze(e,"RID","rpc"),ze(e,"SID",t.I),ze(e,"CI",t.L?"0":"1"),ze(e,"AID",t.T),ze(e,"TYPE","xmlhttp"),ts(t,e),t.o&&t.s&&Hn(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=We($e(e)),n.s=null,n.P=!0,Ae(n,t)}function os(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function as(t,e){var n=null;if(t.g==e){os(t),rs(t),t.g=null;var s=2}else{if(!mn(t.h,e))return;n=e.D,vn(t.h,e),s=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=re(),At(s,new ue(s,n,e,r)),Xn(t)}else ns(t);else if(r=e.o,3==r||0==r&&0<t.pa||!(1==s&&Yn(t,e)||2==s&&ss(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:us(t,5);break;case 4:us(t,10);break;case 3:us(t,6);break;default:us(t,2)}}function cs(t,e){let n=t.Wa+Math.floor(Math.random()*t.ab);return t.l||(n*=2),n*e}function us(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var s=b(t.jb,t);n||(n=new qe("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Ke(n,"https"),We(n)),_n(n.toString(),s)}else ce(2);t.G=0,t.l&&t.l.va(e),ls(t),Jn(t)}function ls(t){if(t.G=0,t.la=[],t.l){const e=wn(t.h);0==e.length&&0==t.i.length||(k(t.la,e),k(t.la,t.i),t.h.i.length=0,A(t.i),t.i.length=0),t.l.ua()}}function hs(t,e,n){var s=n instanceof qe?$e(n):new qe(n,void 0);if(""!=s.g)e&&(s.g=e+"."+s.g),He(s,s.m);else{var r=h.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new qe(null,void 0);s&&Ke(i,s),e&&(i.g=e),r&&He(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&ze(s,n,e),ze(s,"VER",t.ma),ts(t,s),s}function fs(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Rn(new In({ib:!0})):new Rn(t.ra),e.L=t.H,e}function ds(){}function ps(){if(B&&!(10<=Number(Z)))throw Error("Environmental error: no available transport.")}function gs(t,e){St.call(this),this.g=new zn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Xb)&&!x(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!x(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new vs(this)}function ms(t){ve.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function ys(){we.call(this),this.status=1}function vs(t){this.g=t}s=Rn.prototype,s.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():me.g(),this.C=this.u?pe(this.u):pe(me),this.g.onreadystatechange=b(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){return void Pn(this,i)}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else{if("function"!==typeof s.keys||"function"!==typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const t of s.keys())n.set(t,s.get(t))}s=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=h.FormData&&t instanceof h.FormData,!(0<=S(Mn,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{jn(this),0<this.B&&((this.K=Fn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.qa,this)):this.A=$t(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Pn(this,i)}},s.qa=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,At(this,"timeout"),this.abort(8))},s.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,At(this,"complete"),At(this,"abort"),Bn(this))},s.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Bn(this,!0)),Rn.X.M.call(this)},s.Ha=function(){this.s||(this.F||this.v||this.l?Un(this):this.eb())},s.eb=function(){Un(this)},s.aa=function(){try{return 2<qn(this)?this.g.status:-1}catch(t){return-1}},s.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},s.Ra=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),xn(e)}},s.Ea=function(){return this.m},s.Na=function(){return"string"===typeof this.j?this.j:String(this.j)},s=zn.prototype,s.ma=8,s.G=1,s.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Ee(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=at(i),ut(i,this.S)):i=this.S),null!==this.o||this.N||(r.H=i,i=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var s=this.i[n];if(s="__data__"in s.g&&(s=s.g.__data__,"string"===typeof s)?s.length:void 0,void 0===s)break;if(e+=s,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=es(this,r,e),n=$e(this.F),ze(n,"RID",t),ze(n,"CVER",22),this.D&&ze(n,"X-HTTP-Session-Id",this.D),ts(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Kn(i)))+"&"+e:this.o&&Hn(n,this.o,i)),yn(this.h,r),this.Xa&&ze(n,"TYPE","init"),this.O?(ze(n,"$req",e),ze(n,"SID","null"),r.Z=!0,Se(r,n,null)):Se(r,n,e),this.G=2}}else 3==this.G&&(t?Zn(this,t):0==this.i.length||pn(this.h)||Zn(this))},s.Ia=function(){if(this.u=null,is(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=le(b(this.cb,this),t)}},s.cb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ce(10),Qn(this),is(this))},s.bb=function(){null!=this.v&&(this.v=null,Qn(this),ss(this),ce(19))},s.jb=function(t){t?(this.j.info("Successfully pinged google.com"),ce(2)):(this.j.info("Failed to ping google.com"),ce(1))},s=ds.prototype,s.xa=function(){},s.wa=function(){},s.va=function(){},s.ua=function(){},s.Qa=function(){},ps.prototype.g=function(t,e){return new gs(t,e)},T(gs,St),gs.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ce(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=hs(t,null,t.V),Xn(t)},gs.prototype.close=function(){Wn(this.g)},gs.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Dt(t),t=n);e.i.push(new hn(e.$a++,t)),3==e.G&&Xn(e)},gs.prototype.M=function(){this.g.l=null,delete this.j,Wn(this.g),delete this.g,gs.X.M.call(this)},T(ms,ve),T(ys,we),T(vs,ds),vs.prototype.xa=function(){At(this.g,"a")},vs.prototype.wa=function(t){At(this.g,new ms(t))},vs.prototype.va=function(t){At(this.g,new ys(t))},vs.prototype.ua=function(){At(this.g,"b")},ps.prototype.createWebChannel=ps.prototype.g,gs.prototype.send=gs.prototype.u,gs.prototype.open=gs.prototype.m,gs.prototype.close=gs.prototype.close,he.NO_ERROR=0,he.TIMEOUT=8,he.HTTP_ERROR=6,fe.COMPLETE="complete",ge.EventType=ye,ye.OPEN="a",ye.CLOSE="b",ye.ERROR="c",ye.MESSAGE="d",St.prototype.listen=St.prototype.N,Rn.prototype.listenOnce=Rn.prototype.O,Rn.prototype.getLastError=Rn.prototype.Na,Rn.prototype.getLastErrorCode=Rn.prototype.Ea,Rn.prototype.getStatus=Rn.prototype.aa,Rn.prototype.getResponseJson=Rn.prototype.Ra,Rn.prototype.getResponseText=Rn.prototype.fa,Rn.prototype.send=Rn.prototype.da;var ws=u.createWebChannelTransport=function(){return new ps},bs=u.getStatEventTarget=function(){return re()},Es=u.ErrorCode=he,Ts=u.EventType=fe,_s=u.Event=ne,Cs=u.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Is=u.FetchXmlHttpFactory=In,Ss=u.WebChannel=ge,As=u.XhrIo=Rn;const ks="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ds.UNAUTHENTICATED=new Ds(null),Ds.GOOGLE_CREDENTIALS=new Ds("google-credentials-uid"),Ds.FIRST_PARTY=new Ds("first-party-uid"),Ds.MOCK_USER=new Ds("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ns="9.10.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=new o.Yd("@firebase/firestore");function Rs(){return xs.logLevel}function Ls(t,...e){if(xs.logLevel<=o["in"].DEBUG){const n=e.map(Fs);xs.debug(`Firestore (${Ns}): ${t}`,...n)}}function Os(t,...e){if(xs.logLevel<=o["in"].ERROR){const n=e.map(Fs);xs.error(`Firestore (${Ns}): ${t}`,...n)}}function Ms(t,...e){if(xs.logLevel<=o["in"].WARN){const n=e.map(Fs);xs.warn(`Firestore (${Ns}): ${t}`,...n)}}function Fs(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(t="Unexpected state"){const e=`FIRESTORE (${Ns}) INTERNAL ASSERTION FAILED: `+t;throw Os(e),new Error(e)}function Vs(t,e){t||Ps()}function Us(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class js extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ks{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Ds.UNAUTHENTICATED)))}shutdown(){}}class Hs{constructor(t){this.t=t,this.currentUser=Ds.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new qs;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new qs,t.enqueueRetryable((()=>s(this.currentUser)))};const i=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{Ls("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Ls("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new qs)}}),0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Ls("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Vs("string"==typeof e.accessToken),new $s(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Vs(null===t||"string"==typeof t),new Ds(t)}}class Gs{constructor(t,e,n,s){this.h=t,this.l=e,this.m=n,this.g=s,this.type="FirstParty",this.user=Ds.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Vs(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class zs{constructor(t,e,n,s){this.h=t,this.l=e,this.m=n,this.g=s}getToken(){return Promise.resolve(new Gs(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(Ds.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ws{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Qs{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,e){const n=t=>{null!=t.error&&Ls("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,Ls("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{Ls("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?s(t):Ls("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Vs("string"==typeof t.token),this.A=t.token,new Ws(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Js(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=Js(40);for(let r=0;r<s.length;++r)n.length<20&&s[r]<e&&(n+=t.charAt(s[r]%t.length))}return n}}function Ys(t,e){return t<e?-1:t>e?1:0}function Zs(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tr{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new js(Bs.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new js(Bs.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new js(Bs.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new js(Bs.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return tr.fromMillis(Date.now())}static fromDate(t){return tr.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new tr(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Ys(this.nanoseconds,t.nanoseconds):Ys(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t){this.timestamp=t}static fromTimestamp(t){return new er(t)}static min(){return new er(new tr(0,0))}static max(){return new er(new tr(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,e,n){void 0===e?e=0:e>t.length&&Ps(),void 0===n?n=t.length-e:n>t.length-e&&Ps(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===nr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof nr?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),r=e.get(s);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class sr extends nr{construct(t,e,n){return new sr(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new js(Bs.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new sr(e)}static emptyPath(){return new sr([])}}const rr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ir extends nr{construct(t,e,n){return new ir(t,e,n)}static isValidIdentifier(t){return rr.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ir.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ir(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const r=()=>{if(0===n.length)throw new js(Bs.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new js(Bs.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new js(Bs.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(i=!i,s++):"."!==e||i?(n+=e,s++):(r(),s++)}if(r(),i)throw new js(Bs.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ir(e)}static emptyPath(){return new ir([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(t){this.path=t}static fromPath(t){return new or(sr.fromString(t))}static fromName(t){return new or(sr.fromString(t).popFirst(5))}static empty(){return new or(sr.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===sr.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return sr.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new or(new sr(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}ar.UNKNOWN_ID=-1;function cr(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=er.fromTimestamp(1e9===s?new tr(n+1,0):new tr(n,s));return new lr(r,or.empty(),e)}function ur(t){return new lr(t.readTime,t.key,-1)}class lr{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new lr(er.min(),or.empty(),-1)}static max(){return new lr(er.max(),or.empty(),-1)}}function hr(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=or.comparator(t.documentKey,e.documentKey),0!==n?n:Ys(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pr(t){if(t.code!==Bs.FAILED_PRECONDITION||t.message!==fr)throw t;Ls("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Ps(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new gr(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof gr?e:gr.resolve(e)}catch(t){return gr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):gr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):gr.reject(e)}static resolve(t){return new gr(((e,n)=>{e(t)}))}static reject(t){return new gr(((e,n)=>{n(t)}))}static waitFor(t){return new gr(((e,n)=>{let s=0,r=0,i=!1;t.forEach((t=>{++s,t.next((()=>{++r,i&&r===s&&e()}),(t=>n(t)))})),i=!0,r===s&&e()}))}static or(t){let e=gr.resolve(!1);for(const n of t)e=e.next((t=>t?gr.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}static mapArray(t,e){return new gr(((n,s)=>{const r=t.length,i=new Array(r);let o=0;for(let a=0;a<r;a++){const c=a;e(t[c]).next((t=>{i[c]=t,++o,o===r&&n(i)}),(t=>s(t)))}}))}static doWhile(t,e){return new gr(((n,s)=>{const r=()=>{!0===t()?e().next((()=>{r()}),s):n()};r()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function wr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function br(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yr.at=-1;class Er{constructor(t,e){this.comparator=t,this.root=e||_r.EMPTY}insert(t,e){return new Er(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,_r.BLACK,null,null))}remove(t){return new Er(this.comparator,this.root.remove(t,this.comparator).copy(null,null,_r.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Tr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Tr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Tr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Tr(this.root,t,this.comparator,!0)}}class Tr{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class _r{constructor(t,e,n,s,r){this.key=t,this.value=e,this.color=null!=n?n:_r.RED,this.left=null!=s?s:_r.EMPTY,this.right=null!=r?r:_r.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,r){return new _r(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const r=n(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===r?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return _r.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return _r.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,_r.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,_r.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ps();if(this.right.isRed())throw Ps();const t=this.left.check();if(t!==this.right.check())throw Ps();return t+(this.isRed()?0:1)}}_r.EMPTY=null,_r.RED=!0,_r.BLACK=!1,_r.EMPTY=new class{constructor(){this.size=0}get key(){throw Ps()}get value(){throw Ps()}get color(){throw Ps()}get left(){throw Ps()}get right(){throw Ps()}copy(t,e,n,s,r){return this}insert(t,e,n){return new _r(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cr{constructor(t){this.comparator=t,this.data=new Er(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ir(this.data.getIterator())}getIteratorFrom(t){return new Ir(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Cr))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Cr(this.comparator);return e.data=t,e}}class Ir{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sr{constructor(t){this.fields=t,t.sort(ir.comparator)}static empty(){return new Sr([])}unionWith(t){let e=new Cr(ir.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Sr(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Zs(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ar{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Ar(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Ar(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ys(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ar.EMPTY_BYTE_STRING=new Ar("");const kr=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Dr(t){if(Vs(!!t),"string"==typeof t){let e=0;const n=kr.exec(t);if(Vs(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Nr(t.seconds),nanos:Nr(t.nanos)}}function Nr(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function xr(t){return"string"==typeof t?Ar.fromBase64String(t):Ar.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Lr(t){const e=t.mapValue.fields.__previous_value__;return Rr(e)?Lr(e):e}function Or(t){const e=Dr(t.mapValue.fields.__local_write_time__.timestampValue);return new tr(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(t,e,n,s,r,i,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=r,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Fr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Fr("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Fr&&t.projectId===this.projectId&&t.database===this.database}}function Pr(t){return null==t}function Vr(t){return 0===t&&1/t==-1/0}function Ur(t){return"number"==typeof t&&Number.isInteger(t)&&!Vr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function jr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Rr(t)?4:ti(t)?9007199254740991:10:Ps()}function qr(t,e){if(t===e)return!0;const n=jr(t);if(n!==jr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Or(t).isEqual(Or(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Dr(t.timestampValue),s=Dr(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return xr(t.bytesValue).isEqual(xr(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Nr(t.geoPointValue.latitude)===Nr(e.geoPointValue.latitude)&&Nr(t.geoPointValue.longitude)===Nr(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Nr(t.integerValue)===Nr(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Nr(t.doubleValue),s=Nr(e.doubleValue);return n===s?Vr(n)===Vr(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return Zs(t.arrayValue.values||[],e.arrayValue.values||[],qr);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(vr(n)!==vr(s))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===s[r]||!qr(n[r],s[r])))return!1;return!0}(t,e);default:return Ps()}}function $r(t,e){return void 0!==(t.values||[]).find((t=>qr(t,e)))}function Kr(t,e){if(t===e)return 0;const n=jr(t),s=jr(e);if(n!==s)return Ys(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ys(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Nr(t.integerValue||t.doubleValue),s=Nr(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return Hr(t.timestampValue,e.timestampValue);case 4:return Hr(Or(t),Or(e));case 5:return Ys(t.stringValue,e.stringValue);case 6:return function(t,e){const n=xr(t),s=xr(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let r=0;r<n.length&&r<s.length;r++){const t=Ys(n[r],s[r]);if(0!==t)return t}return Ys(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Ys(Nr(t.latitude),Nr(e.latitude));return 0!==n?n:Ys(Nr(t.longitude),Nr(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const t=Kr(n[r],s[r]);if(t)return t}return Ys(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Br.mapValue&&e===Br.mapValue)return 0;if(t===Br.mapValue)return 1;if(e===Br.mapValue)return-1;const n=t.fields||{},s=Object.keys(n),r=e.fields||{},i=Object.keys(r);s.sort(),i.sort();for(let o=0;o<s.length&&o<i.length;++o){const t=Ys(s[o],i[o]);if(0!==t)return t;const e=Kr(n[s[o]],r[i[o]]);if(0!==e)return e}return Ys(s.length,i.length)}(t.mapValue,e.mapValue);default:throw Ps()}}function Hr(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Ys(t,e);const n=Dr(t),s=Dr(e),r=Ys(n.seconds,s.seconds);return 0!==r?r:Ys(n.nanos,s.nanos)}function Gr(t){return zr(t)}function zr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Dr(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?xr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,or.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=zr(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const r of e)s?s=!1:n+=",",n+=`${r}:${zr(t.fields[r])}`;return n+"}"}(t.mapValue):Ps();var e,n}function Wr(t){return!!t&&"integerValue"in t}function Qr(t){return!!t&&"arrayValue"in t}function Jr(t){return!!t&&"nullValue"in t}function Xr(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Yr(t){return!!t&&"mapValue"in t}function Zr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return wr(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Zr(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Zr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ti(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ei{constructor(t){this.value=t}static empty(){return new ei({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Yr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Zr(e)}setAll(t){let e=ir.emptyPath(),n={},s=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=r.popLast()}t?n[r.lastSegment()]=Zr(t):s.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,s)}delete(t){const e=this.field(t.popLast());Yr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return qr(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Yr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){wr(e,((e,n)=>t[e]=n));for(const s of n)delete t[s]}clone(){return new ei(Zr(this.value))}}function ni(t){const e=[];return wr(t.fields,((t,n)=>{const s=new ir([t]);if(Yr(n)){const t=ni(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)})),new Sr(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class si{constructor(t,e,n,s,r,i){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.data=r,this.documentState=i}static newInvalidDocument(t){return new si(t,0,er.min(),er.min(),ei.empty(),0)}static newFoundDocument(t,e,n){return new si(t,1,e,er.min(),n,0)}static newNoDocument(t,e){return new si(t,2,e,er.min(),ei.empty(),0)}static newUnknownDocument(t,e){return new si(t,3,e,er.min(),ei.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ei.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ei.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=er.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof si&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new si(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,e=null,n=[],s=[],r=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=r,this.startAt=i,this.endAt=o,this.ht=null}}function ii(t,e=null,n=[],s=[],r=null,i=null,o=null){return new ri(t,e,n,s,r,i,o)}function oi(t){const e=Us(t);if(null===e.ht){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+Gr(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Pr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Gr(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Gr(t))).join(",")),e.ht=t}return e.ht}function ai(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Gr(e.value)}`;var e})).join(", ")}]`),Pr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Gr(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Gr(t))).join(",")),`Target(${e})`}function ci(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!Ei(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!qr(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_i(t.startAt,e.startAt)&&_i(t.endAt,e.endAt)}function ui(t){return or.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class li extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.lt(t,e,n):new hi(t,e,n):"array-contains"===e?new gi(t,n):"in"===e?new mi(t,n):"not-in"===e?new yi(t,n):"array-contains-any"===e?new vi(t,n):new li(t,e,n)}static lt(t,e,n){return"in"===e?new fi(t,n):new di(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.ft(Kr(e,this.value)):null!==e&&jr(this.value)===jr(e)&&this.ft(Kr(e,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Ps()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class hi extends li{constructor(t,e,n){super(t,e,n),this.key=or.fromName(n.referenceValue)}matches(t){const e=or.comparator(t.key,this.key);return this.ft(e)}}class fi extends li{constructor(t,e){super(t,"in",e),this.keys=pi("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class di extends li{constructor(t,e){super(t,"not-in",e),this.keys=pi("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function pi(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>or.fromName(t.referenceValue)))}class gi extends li{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Qr(e)&&$r(e.arrayValue,this.value)}}class mi extends li{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&$r(this.value.arrayValue,e)}}class yi extends li{constructor(t,e){super(t,"not-in",e)}matches(t){if($r(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!$r(this.value.arrayValue,e)}}class vi extends li{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Qr(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>$r(this.value.arrayValue,t)))}}class wi{constructor(t,e){this.position=t,this.inclusive=e}}class bi{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ei(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ti(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(s=i.field.isKeyField()?or.comparator(or.fromName(o.referenceValue),n.key):Kr(o,n.data.field(i.field)),"desc"===i.dir&&(s*=-1),0!==s)break}return s}function _i(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qr(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(t,e=null,n=[],s=[],r=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=r,this.limitType=i,this.startAt=o,this.endAt=a,this._t=null,this.wt=null,this.startAt,this.endAt}}function Ii(t,e,n,s,r,i,o,a){return new Ci(t,e,n,s,r,i,o,a)}function Si(t){return new Ci(t)}function Ai(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function ki(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Di(t){for(const e of t.filters)if(e.dt())return e.field;return null}function Ni(t){return null!==t.collectionGroup}function xi(t){const e=Us(t);if(null===e._t){e._t=[];const t=Di(e),n=ki(e);if(null!==t&&null===n)t.isKeyField()||e._t.push(new bi(t)),e._t.push(new bi(ir.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e._t.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new bi(ir.keyField(),t))}}}return e._t}function Ri(t){const e=Us(t);if(!e.wt)if("F"===e.limitType)e.wt=ii(e.path,e.collectionGroup,xi(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of xi(e)){const e="desc"===r.dir?"asc":"desc";t.push(new bi(r.field,e))}const n=e.endAt?new wi(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new wi(e.startAt.position,e.startAt.inclusive):null;e.wt=ii(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.wt}function Li(t,e,n){return new Ci(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Oi(t,e){return ci(Ri(t),Ri(e))&&t.limitType===e.limitType}function Mi(t){return`${oi(Ri(t))}|lt:${t.limitType}`}function Fi(t){return`Query(target=${ai(Ri(t))}; limitType=${t.limitType})`}function Pi(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):or.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const s=Ti(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,xi(t),e))&&!(t.endAt&&!function(t,e,n){const s=Ti(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,xi(t),e))}(t,e)}function Vi(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ui(t){return(e,n)=>{let s=!1;for(const r of xi(t)){const t=Bi(r,e,n);if(0!==t)return t;s=s||r.field.isKeyField()}return 0}}function Bi(t,e,n){const s=t.field.isKeyField()?or.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),r=n.data.field(t);return null!==s&&null!==r?Kr(s,r):Ps()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Ps()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vr(e)?"-0":e}}function qi(t){return{integerValue:""+t}}function $i(t,e){return Ur(e)?qi(e):ji(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(){this._=void 0}}function Hi(t,e,n){return t instanceof Wi?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Qi?Ji(t,e):t instanceof Xi?Yi(t,e):function(t,e){const n=zi(t,e),s=to(n)+to(t.yt);return Wr(n)&&Wr(t.yt)?qi(s):ji(t.It,s)}(t,e)}function Gi(t,e,n){return t instanceof Qi?Ji(t,e):t instanceof Xi?Yi(t,e):n}function zi(t,e){return t instanceof Zi?Wr(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Wi extends Ki{}class Qi extends Ki{constructor(t){super(),this.elements=t}}function Ji(t,e){const n=eo(e);for(const s of t.elements)n.some((t=>qr(t,s)))||n.push(s);return{arrayValue:{values:n}}}class Xi extends Ki{constructor(t){super(),this.elements=t}}function Yi(t,e){let n=eo(e);for(const s of t.elements)n=n.filter((t=>!qr(t,s)));return{arrayValue:{values:n}}}class Zi extends Ki{constructor(t,e){super(),this.It=t,this.yt=e}}function to(t){return Nr(t.integerValue||t.doubleValue)}function eo(t){return Qr(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Qi&&e instanceof Qi||t instanceof Xi&&e instanceof Xi?Zs(t.elements,e.elements,qr):t instanceof Zi&&e instanceof Zi?qr(t.yt,e.yt):t instanceof Wi&&e instanceof Wi}(t.transform,e.transform)}class so{constructor(t,e){this.version=t,this.transformResults=e}}class ro{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ro}static exists(t){return new ro(void 0,t)}static updateTime(t){return new ro(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function io(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class oo{}function ao(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new vo(t.key,ro.none()):new fo(t.key,t.data,ro.none());{const n=t.data,s=ei.empty();let r=new Cr(ir.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),r=r.add(t)}return new po(t.key,s,new Sr(r.toArray()),ro.none())}}function co(t,e,n){t instanceof fo?function(t,e,n){const s=t.value.clone(),r=mo(t.fieldTransforms,e,n.transformResults);s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof po?function(t,e,n){if(!io(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=mo(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(go(t)),r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function uo(t,e,n,s){return t instanceof fo?function(t,e,n,s){if(!io(t.precondition,e))return n;const r=t.value.clone(),i=yo(t.fieldTransforms,s,e);return r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,s):t instanceof po?function(t,e,n,s){if(!io(t.precondition,e))return n;const r=yo(t.fieldTransforms,s,e),i=e.data;return i.setAll(go(t)),i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,s):function(t,e,n){return io(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function lo(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),r=zi(s.transform,t||null);null!=r&&(null===n&&(n=ei.empty()),n.set(s.field,r))}return n||null}function ho(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Zs(t,e,((t,e)=>no(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class fo extends oo{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class po extends oo{constructor(t,e,n,s,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function go(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function mo(t,e,n){const s=new Map;Vs(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Gi(o,a,n[r]))}return s}function yo(t,e,n){const s=new Map;for(const r of t){const t=r.transform,i=n.data.field(r.field);s.set(r.field,Hi(t,i,e))}return s}class vo extends oo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wo extends oo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Eo,To;function _o(t){switch(t){default:return Ps();case Bs.CANCELLED:case Bs.UNKNOWN:case Bs.DEADLINE_EXCEEDED:case Bs.RESOURCE_EXHAUSTED:case Bs.INTERNAL:case Bs.UNAVAILABLE:case Bs.UNAUTHENTICATED:return!1;case Bs.INVALID_ARGUMENT:case Bs.NOT_FOUND:case Bs.ALREADY_EXISTS:case Bs.PERMISSION_DENIED:case Bs.FAILED_PRECONDITION:case Bs.ABORTED:case Bs.OUT_OF_RANGE:case Bs.UNIMPLEMENTED:case Bs.DATA_LOSS:return!0}}function Co(t){if(void 0===t)return Os("GRPC error has no .code"),Bs.UNKNOWN;switch(t){case Eo.OK:return Bs.OK;case Eo.CANCELLED:return Bs.CANCELLED;case Eo.UNKNOWN:return Bs.UNKNOWN;case Eo.DEADLINE_EXCEEDED:return Bs.DEADLINE_EXCEEDED;case Eo.RESOURCE_EXHAUSTED:return Bs.RESOURCE_EXHAUSTED;case Eo.INTERNAL:return Bs.INTERNAL;case Eo.UNAVAILABLE:return Bs.UNAVAILABLE;case Eo.UNAUTHENTICATED:return Bs.UNAUTHENTICATED;case Eo.INVALID_ARGUMENT:return Bs.INVALID_ARGUMENT;case Eo.NOT_FOUND:return Bs.NOT_FOUND;case Eo.ALREADY_EXISTS:return Bs.ALREADY_EXISTS;case Eo.PERMISSION_DENIED:return Bs.PERMISSION_DENIED;case Eo.FAILED_PRECONDITION:return Bs.FAILED_PRECONDITION;case Eo.ABORTED:return Bs.ABORTED;case Eo.OUT_OF_RANGE:return Bs.OUT_OF_RANGE;case Eo.UNIMPLEMENTED:return Bs.UNIMPLEMENTED;case Eo.DATA_LOSS:return Bs.DATA_LOSS;default:return Ps()}}(To=Eo||(Eo={}))[To.OK=0]="OK",To[To.CANCELLED=1]="CANCELLED",To[To.UNKNOWN=2]="UNKNOWN",To[To.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",To[To.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",To[To.NOT_FOUND=5]="NOT_FOUND",To[To.ALREADY_EXISTS=6]="ALREADY_EXISTS",To[To.PERMISSION_DENIED=7]="PERMISSION_DENIED",To[To.UNAUTHENTICATED=16]="UNAUTHENTICATED",To[To.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",To[To.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",To[To.ABORTED=10]="ABORTED",To[To.OUT_OF_RANGE=11]="OUT_OF_RANGE",To[To.UNIMPLEMENTED=12]="UNIMPLEMENTED",To[To.INTERNAL=13]="INTERNAL",To[To.UNAVAILABLE=14]="UNAVAILABLE",To[To.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Io{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[s,r]of n)if(this.equalsFn(s,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return void(s[r]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){wr(this.inner,((e,n)=>{for(const[s,r]of n)t(s,r)}))}isEmpty(){return br(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=new Er(or.comparator);function Ao(){return So}const ko=new Er(or.comparator);function Do(...t){let e=ko;for(const n of t)e=e.insert(n.key,n);return e}function No(t){let e=ko;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function xo(){return Lo()}function Ro(){return Lo()}function Lo(){return new Io((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Oo=new Er(or.comparator),Mo=new Cr(or.comparator);function Fo(...t){let e=Mo;for(const n of t)e=e.add(n);return e}const Po=new Cr(Ys);function Vo(){return Po}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(t,e,n,s,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Bo.createSynthesizedTargetChangeForCurrentChange(t,e)),new Uo(er.min(),n,Vo(),Ao(),Fo())}}class Bo{constructor(t,e,n,s,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Bo(Ar.EMPTY_BYTE_STRING,e,Fo(),Fo(),Fo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(t,e,n,s){this.Tt=t,this.removedTargetIds=e,this.key=n,this.Et=s}}class qo{constructor(t,e){this.targetId=t,this.At=e}}class $o{constructor(t,e,n=Ar.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Ko{constructor(){this.Rt=0,this.bt=zo(),this.Pt=Ar.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(t){t.approximateByteSize()>0&&(this.Vt=!0,this.Pt=t)}xt(){let t=Fo(),e=Fo(),n=Fo();return this.bt.forEach(((s,r)=>{switch(r){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:Ps()}})),new Bo(this.Pt,this.vt,t,e,n)}Nt(){this.Vt=!1,this.bt=zo()}kt(t,e){this.Vt=!0,this.bt=this.bt.insert(t,e)}Mt(t){this.Vt=!0,this.bt=this.bt.remove(t)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Ho{constructor(t){this.Bt=t,this.Lt=new Map,this.Ut=Ao(),this.qt=Go(),this.Kt=new Cr(Ys)}Gt(t){for(const e of t.Tt)t.Et&&t.Et.isFoundDocument()?this.Qt(e,t.Et):this.jt(e,t.key,t.Et);for(const e of t.removedTargetIds)this.jt(e,t.key,t.Et)}Wt(t){this.forEachTarget(t,(e=>{const n=this.zt(e);switch(t.state){case 0:this.Ht(e)&&n.Ct(t.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(t.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(e);break;case 3:this.Ht(e)&&(n.$t(),n.Ct(t.resumeToken));break;case 4:this.Ht(e)&&(this.Jt(e),n.Ct(t.resumeToken));break;default:Ps()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Lt.forEach(((t,n)=>{this.Ht(n)&&e(n)}))}Yt(t){const e=t.targetId,n=t.At.count,s=this.Xt(e);if(s){const t=s.target;if(ui(t))if(0===n){const n=new or(t.path);this.jt(e,n,si.newNoDocument(n,er.min()))}else Vs(1===n);else this.Zt(e)!==n&&(this.Jt(e),this.Kt=this.Kt.add(e))}}te(t){const e=new Map;this.Lt.forEach(((n,s)=>{const r=this.Xt(s);if(r){if(n.current&&ui(r.target)){const e=new or(r.target.path);null!==this.Ut.get(e)||this.ee(s,e)||this.jt(s,e,si.newNoDocument(e,t))}n.Dt&&(e.set(s,n.xt()),n.Nt())}}));let n=Fo();this.qt.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.Xt(t);return!e||2===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.Ut.forEach(((e,n)=>n.setReadTime(t)));const s=new Uo(t,e,this.Kt,this.Ut,n);return this.Ut=Ao(),this.qt=Go(),this.Kt=new Cr(Ys),s}Qt(t,e){if(!this.Ht(t))return;const n=this.ee(t,e.key)?2:0;this.zt(t).kt(e.key,n),this.Ut=this.Ut.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ne(e.key).add(t))}jt(t,e,n){if(!this.Ht(t))return;const s=this.zt(t);this.ee(t,e)?s.kt(e,1):s.Mt(e),this.qt=this.qt.insert(e,this.ne(e).delete(t)),n&&(this.Ut=this.Ut.insert(e,n))}removeTarget(t){this.Lt.delete(t)}Zt(t){const e=this.zt(t).xt();return this.Bt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ot(t){this.zt(t).Ot()}zt(t){let e=this.Lt.get(t);return e||(e=new Ko,this.Lt.set(t,e)),e}ne(t){let e=this.qt.get(t);return e||(e=new Cr(Ys),this.qt=this.qt.insert(t,e)),e}Ht(t){const e=null!==this.Xt(t);return e||Ls("WatchChangeAggregator","Detected inactive target",t),e}Xt(t){const e=this.Lt.get(t);return e&&e.St?null:this.Bt.se(t)}Jt(t){this.Lt.set(t,new Ko),this.Bt.getRemoteKeysForTarget(t).forEach((e=>{this.jt(t,e,null)}))}ee(t,e){return this.Bt.getRemoteKeysForTarget(t).has(e)}}function Go(){return new Er(or.comparator)}function zo(){return new Er(or.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Qo=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class Jo{constructor(t,e){this.databaseId=t,this.gt=e}}function Xo(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Yo(t,e){return t.gt?e.toBase64():e.toUint8Array()}function Zo(t,e){return Xo(t,e.toTimestamp())}function ta(t){return Vs(!!t),er.fromTimestamp(function(t){const e=Dr(t);return new tr(e.seconds,e.nanos)}(t))}function ea(t,e){return function(t){return new sr(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function na(t){const e=sr.fromString(t);return Vs(Ia(e)),e}function sa(t,e){return ea(t.databaseId,e.path)}function ra(t,e){const n=na(e);if(n.get(1)!==t.databaseId.projectId)throw new js(Bs.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new js(Bs.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new or(ca(n))}function ia(t,e){return ea(t.databaseId,e)}function oa(t){const e=na(t);return 4===e.length?sr.emptyPath():ca(e)}function aa(t){return new sr(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ca(t){return Vs(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function ua(t,e,n){return{name:sa(t,e),fields:n.value.mapValue.fields}}function la(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Ps()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(t,e){return t.gt?(Vs(void 0===e||"string"==typeof e),Ar.fromBase64String(e||"")):(Vs(void 0===e||e instanceof Uint8Array),Ar.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Bs.UNKNOWN:Co(t.code);return new js(e,t.message||"")}(o);n=new $o(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=ra(t,s.document.name),i=ta(s.document.updateTime),o=new ei({mapValue:{fields:s.document.fields}}),a=si.newFoundDocument(r,i,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new jo(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=ra(t,s.document),i=s.readTime?ta(s.readTime):er.min(),o=si.newNoDocument(r,i),a=s.removedTargetIds||[];n=new jo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=ra(t,s.document),i=s.removedTargetIds||[];n=new jo([],i,r,null)}else{if(!("filter"in e))return Ps();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,r=new bo(s),i=t.targetId;n=new qo(i,r)}}return n}function ha(t,e){let n;if(e instanceof fo)n={update:ua(t,e.key,e.value)};else if(e instanceof vo)n={delete:sa(t,e.key)};else if(e instanceof po)n={update:ua(t,e.key,e.data),updateMask:Ca(e.fieldMask)};else{if(!(e instanceof wo))return Ps();n={verify:sa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Wi)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Qi)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Xi)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Zi)return{fieldPath:e.field.canonicalString(),increment:n.yt};throw Ps()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Zo(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Ps()}(t,e.precondition)),n}function fa(t,e){return t&&t.length>0?(Vs(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?ta(t.updateTime):ta(e);return n.isEqual(er.min())&&(n=ta(e)),new so(n,t.transformResults||[])}(t,e)))):[]}function da(t,e){return{documents:[ia(t,e.path)]}}function pa(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=ia(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ia(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Xr(t.value))return{unaryFilter:{field:ba(t.field),op:"IS_NAN"}};if(Jr(t.value))return{unaryFilter:{field:ba(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Xr(t.value))return{unaryFilter:{field:ba(t.field),op:"IS_NOT_NAN"}};if(Jr(t.value))return{unaryFilter:{field:ba(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ba(t.field),op:wa(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:ba(t.field),direction:va(t.dir)}}(t)))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(t,e){return t.gt||Pr(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function ga(t){let e=oa(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Vs(1===s);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=ya(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new bi(Ea(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Pr(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new wi(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new wi(n,e)}(n.endAt)),Ii(e,r,o,i,a,"F",c,u)}function ma(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ps()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function ya(t){return t?void 0!==t.unaryFilter?[_a(t)]:void 0!==t.fieldFilter?[Ta(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>ya(t))).reduce(((t,e)=>t.concat(e))):Ps():[]}function va(t){return Wo[t]}function wa(t){return Qo[t]}function ba(t){return{fieldPath:t.canonicalString()}}function Ea(t){return ir.fromServerFormat(t.fieldPath)}function Ta(t){return li.create(Ea(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ps()}}(t.fieldFilter.op),t.fieldFilter.value)}function _a(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ea(t.unaryFilter.field);return li.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ea(t.unaryFilter.field);return li.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ea(t.unaryFilter.field);return li.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ea(t.unaryFilter.field);return li.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Ps()}}function Ca(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Ia(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Aa=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ka=Aa;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Da{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const e=this.mutations[s];e.key.isEqual(t.key)&&co(e,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=uo(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=uo(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Ro();return this.mutations.forEach((s=>{const r=t.get(s.key),i=r.overlayedDocument;let o=this.applyToLocalView(i,r.mutatedFields);o=e.has(s.key)?null:o;const a=ao(i,o);null!==a&&n.set(s.key,a),i.isValidDocument()||i.convertToNoDocument(er.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Fo())}isEqual(t){return this.batchId===t.batchId&&Zs(this.mutations,t.mutations,((t,e)=>ho(t,e)))&&Zs(this.baseMutations,t.baseMutations,((t,e)=>ho(t,e)))}}class Na{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){Vs(t.mutations.length===n.length);let s=Oo;const r=t.mutations;for(let i=0;i<r.length;i++)s=s.insert(r[i].key,n[i].version);return new Na(t,e,n,s)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(t,e,n,s,r=er.min(),i=er.min(),o=Ar.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(t){return new Ra(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Ra(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Ra(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(t){this.re=t}}function Oa(t){const e=ga({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Li(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ma{constructor(){}ce(t,e){this.ae(t,e),e.he()}ae(t,e){if("nullValue"in t)this.le(e,5);else if("booleanValue"in t)this.le(e,10),e.fe(t.booleanValue?1:0);else if("integerValue"in t)this.le(e,15),e.fe(Nr(t.integerValue));else if("doubleValue"in t){const n=Nr(t.doubleValue);isNaN(n)?this.le(e,13):(this.le(e,15),Vr(n)?e.fe(0):e.fe(n))}else if("timestampValue"in t){const n=t.timestampValue;this.le(e,20),"string"==typeof n?e.de(n):(e.de(`${n.seconds||""}`),e.fe(n.nanos||0))}else if("stringValue"in t)this._e(t.stringValue,e),this.we(e);else if("bytesValue"in t)this.le(e,30),e.me(xr(t.bytesValue)),this.we(e);else if("referenceValue"in t)this.ge(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.le(e,45),e.fe(n.latitude||0),e.fe(n.longitude||0)}else"mapValue"in t?ti(t)?this.le(e,Number.MAX_SAFE_INTEGER):(this.ye(t.mapValue,e),this.we(e)):"arrayValue"in t?(this.pe(t.arrayValue,e),this.we(e)):Ps()}_e(t,e){this.le(e,25),this.Ie(t,e)}Ie(t,e){e.de(t)}ye(t,e){const n=t.fields||{};this.le(e,55);for(const s of Object.keys(n))this._e(s,e),this.ae(n[s],e)}pe(t,e){const n=t.values||[];this.le(e,50);for(const s of n)this.ae(s,e)}ge(t,e){this.le(e,37),or.fromName(t).path.forEach((t=>{this.le(e,60),this.Ie(t,e)}))}le(t,e){t.fe(e)}we(t){t.fe(2)}}Ma.Te=new Ma;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fa{constructor(){this.Ye=new Pa}addToCollectionParentIndex(t,e){return this.Ye.add(e),gr.resolve()}getCollectionParents(t,e){return gr.resolve(this.Ye.getEntries(e))}addFieldIndex(t,e){return gr.resolve()}deleteFieldIndex(t,e){return gr.resolve()}getDocumentsMatchingTarget(t,e){return gr.resolve(null)}getIndexType(t,e){return gr.resolve(0)}getFieldIndexes(t,e){return gr.resolve([])}getNextCollectionGroupToUpdate(t){return gr.resolve(null)}getMinOffset(t,e){return gr.resolve(lr.min())}getMinOffsetFromCollectionGroup(t,e){return gr.resolve(lr.min())}updateCollectionGroup(t,e,n){return gr.resolve()}updateIndexEntries(t,e){return gr.resolve()}}class Pa{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Cr(sr.comparator),r=!s.has(n);return this.index[e]=s.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Cr(sr.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Va{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Va(t,Va.DEFAULT_COLLECTION_PERCENTILE,Va.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Va.DEFAULT_COLLECTION_PERCENTILE=10,Va.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Va.DEFAULT=new Va(41943040,Va.DEFAULT_COLLECTION_PERCENTILE,Va.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Va.DISABLED=new Va(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ua{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new Ua(0)}static vn(){return new Ua(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ba{constructor(){this.changes=new Io((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,si.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?gr.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ja{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&uo(n.mutation,t,Sr.empty(),tr.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Fo()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Fo()){const s=xo();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((t=>{let e=Do();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=xo();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Fo())))}populateOverlays(t,e,n){const s=[];return n.forEach((t=>{e.has(t)||s.push(t)})),this.documentOverlayCache.getOverlays(t,s).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,s){let r=Ao();const i=Lo(),o=Lo();return e.forEach(((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof po)?r=r.insert(e.key,e):void 0!==o&&(i.set(e.key,o.mutation.getFieldMask()),uo(o.mutation,e,o.mutation.getFieldMask(),tr.now()))})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>i.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new ja(e,null!==(n=i.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Lo();let s=new Er(((t,e)=>t-e)),r=Fo();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||Sr.empty();o=r.applyToLocalView(i,o),n.set(t,o);const a=(s.get(r.batchId)||Fo()).add(t);s=s.insert(r.batchId,a)}))})).next((()=>{const i=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,c=s.value,u=Ro();c.forEach((t=>{if(!r.has(t)){const s=ao(e.get(t),n.get(t));null!==s&&u.set(t,s),r=r.add(t)}})),i.push(this.documentOverlayCache.saveOverlays(t,a,u))}return gr.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return or.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ni(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((r=>{const i=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-r.size):gr.resolve(xo());let o=-1,a=r;return i.next((e=>gr.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?gr.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,Fo()))).next((t=>({batchId:o,changes:No(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new or(e)).next((t=>{let e=Do();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const s=e.collectionGroup;let r=Do();return this.indexManager.getCollectionParents(t,s).next((i=>gr.forEach(i,(i=>{const o=function(t,e){return new Ci(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,i.child(s));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{r=r.insert(t,e)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(t,e,n){let s;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((r=>(s=r,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===s.get(n)&&(s=s.insert(n,si.newInvalidDocument(n)))}));let n=Do();return s.forEach(((s,r)=>{const i=t.get(s);void 0!==i&&uo(i.mutation,r,Sr.empty(),tr.now()),Pi(e,r)&&(n=n.insert(s,r))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):gr.resolve(si.newInvalidDocument(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,e){return gr.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:ta(n.createTime)}),gr.resolve()}getNamedQuery(t,e){return gr.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,function(t){return{name:t.name,query:Oa(t.bundledQuery),readTime:ta(t.readTime)}}(e)),gr.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(){this.overlays=new Er(or.comparator),this.es=new Map}getOverlay(t,e){return gr.resolve(this.overlays.get(e))}getOverlays(t,e){const n=xo();return gr.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.ue(t,e,s)})),gr.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.es.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.es.delete(n)),gr.resolve()}getOverlaysForCollection(t,e,n){const s=xo(),r=e.length+1,i=new or(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===r&&t.largestBatchId>n&&s.set(t.getKey(),t)}return gr.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let r=new Er(((t,e)=>t-e));const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=xo(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=xo(),a=r.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=s)break;return gr.resolve(o)}ue(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.es.get(s.largestBatchId).delete(n.key);this.es.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new xa(e,n));let r=this.es.get(e);void 0===r&&(r=Fo(),this.es.set(e,r)),this.es.set(e,r.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(){this.ns=new Cr(Ga.ss),this.rs=new Cr(Ga.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new Ga(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.cs(new Ga(t,e))}hs(t,e){t.forEach((t=>this.removeReference(t,e)))}ls(t){const e=new or(new sr([])),n=new Ga(e,t),s=new Ga(e,t+1),r=[];return this.rs.forEachInRange([n,s],(t=>{this.cs(t),r.push(t.key)})),r}fs(){this.ns.forEach((t=>this.cs(t)))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new or(new sr([])),n=new Ga(e,t),s=new Ga(e,t+1);let r=Fo();return this.rs.forEachInRange([n,s],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new Ga(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Ga{constructor(t,e){this.key=t,this._s=e}static ss(t,e){return or.comparator(t.key,e.key)||Ys(t._s,e._s)}static os(t,e){return Ys(t._s,e._s)||or.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new Cr(Ga.ss)}checkEmpty(t){return gr.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Da(r,e,n,s);this.mutationQueue.push(i);for(const o of s)this.gs=this.gs.add(new Ga(o.key,r)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return gr.resolve(i)}lookupMutationBatch(t,e){return gr.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.ps(n),r=s<0?0:s;return gr.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return gr.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return gr.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Ga(e,0),s=new Ga(e,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([n,s],(t=>{const e=this.ys(t._s);r.push(e)})),gr.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Cr(Ys);return e.forEach((t=>{const e=new Ga(t,0),s=new Ga(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,s],(t=>{n=n.add(t._s)}))})),gr.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let r=n;or.isDocumentKey(r)||(r=r.child(""));const i=new Ga(new or(r),0);let o=new Cr(Ys);return this.gs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t._s)),!0)}),i),gr.resolve(this.Is(o))}Is(t){const e=[];return t.forEach((t=>{const n=this.ys(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Vs(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return gr.forEach(e.mutations,(s=>{const r=new Ga(s.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.gs=n}))}An(t){}containsKey(t,e){const n=new Ga(e,0),s=this.gs.firstAfterOrEqual(n);return gr.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,gr.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(t){this.Es=t,this.docs=new Er(or.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),r=s?s.size:0,i=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return gr.resolve(n?n.document.mutableCopy():si.newInvalidDocument(e))}getEntries(t,e){let n=Ao();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():si.newInvalidDocument(t))})),gr.resolve(n)}getAllFromCollection(t,e,n){let s=Ao();const r=new or(e.child("")),i=this.docs.getIteratorFrom(r);for(;i.hasNext();){const{key:t,value:{document:r}}=i.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||hr(ur(r),n)<=0||(s=s.insert(r.key,r.mutableCopy()))}return gr.resolve(s)}getAllFromCollectionGroup(t,e,n,s){Ps()}As(t,e){return gr.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Qa(this)}getSize(t){return gr.resolve(this.size)}}class Qa extends Ba{constructor(t){super(),this.Yn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.Yn.addEntry(t,s)):this.Yn.removeEntry(n)})),gr.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t){this.persistence=t,this.Rs=new Io((t=>oi(t)),ci),this.lastRemoteSnapshotVersion=er.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Ha,this.targetCount=0,this.vs=Ua.Pn()}forEachTarget(t,e){return this.Rs.forEach(((t,n)=>e(n))),gr.resolve()}getLastRemoteSnapshotVersion(t){return gr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return gr.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),gr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),gr.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new Ua(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,gr.resolve()}updateTargetData(t,e){return this.Dn(e),gr.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,gr.resolve()}removeTargets(t,e,n){let s=0;const r=[];return this.Rs.forEach(((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Rs.delete(i),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),gr.waitFor(r).next((()=>s))}getTargetCount(t){return gr.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return gr.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),gr.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const s=this.persistence.referenceDelegate,r=[];return s&&e.forEach((e=>{r.push(s.markPotentiallyOrphaned(t,e))})),gr.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),gr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return gr.resolve(n)}containsKey(t,e){return gr.resolve(this.Ps.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(t,e){this.Vs={},this.overlays={},this.Ss=new yr(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Ja(this),this.indexManager=new Fa,this.remoteDocumentCache=function(t){return new Wa(t)}((t=>this.referenceDelegate.xs(t))),this.It=new La(e),this.Ns=new $a(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ka,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new za(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){Ls("MemoryPersistence","Starting transaction:",t);const s=new Ya(this.Ss.next());return this.referenceDelegate.ks(),n(s).next((t=>this.referenceDelegate.Ms(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Os(t,e){return gr.or(Object.values(this.Vs).map((n=>()=>n.containsKey(t,e))))}}class Ya extends dr{constructor(t){super(),this.currentSequenceNumber=t}}class Za{constructor(t){this.persistence=t,this.Fs=new Ha,this.$s=null}static Bs(t){return new Za(t)}get Ls(){if(this.$s)return this.$s;throw Ps()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),gr.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),gr.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),gr.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach((t=>this.Ls.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ls.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ks(){this.$s=new Set}Ms(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return gr.forEach(this.Ls,(n=>{const s=or.fromPath(n);return this.Us(t,s).next((t=>{t||e.removeEntry(s,er.min())}))})).next((()=>(this.$s=null,e.apply(t))))}updateLimboDocument(t,e){return this.Us(t,e).next((t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())}))}xs(t){return 0}Us(t,e){return gr.or([()=>gr.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Os(t,e)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tc{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=s}static Ci(t,e){let n=Fo(),s=Fo();for(const r of e.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new tc(t,e.fromCache,n,s)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(){this.xi=!1}initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,s){return this.ki(t,e).next((r=>r||this.Mi(t,e,s,n))).next((n=>n||this.Oi(t,e)))}ki(t,e){if(Ai(e))return gr.resolve(null);let n=Ri(e);return this.indexManager.getIndexType(t,n).next((s=>0===s?null:(null!==e.limit&&1===s&&(e=Li(e,null,"F"),n=Ri(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((s=>{const r=Fo(...s);return this.Ni.getDocuments(t,r).next((s=>this.indexManager.getMinOffset(t,n).next((n=>{const i=this.Fi(e,s);return this.$i(e,i,r,n.readTime)?this.ki(t,Li(e,null,"F")):this.Bi(t,i,e,n)}))))})))))}Mi(t,e,n,s){return Ai(e)||s.isEqual(er.min())?this.Oi(t,e):this.Ni.getDocuments(t,n).next((r=>{const i=this.Fi(e,r);return this.$i(e,i,n,s)?this.Oi(t,e):(Rs()<=o["in"].DEBUG&&Ls("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Fi(e)),this.Bi(t,i,e,cr(s,-1)))}))}Fi(t,e){let n=new Cr(Ui(t));return e.forEach(((e,s)=>{Pi(t,s)&&(n=n.add(s))})),n}$i(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Oi(t,e){return Rs()<=o["in"].DEBUG&&Ls("QueryEngine","Using full collection scan to execute query:",Fi(e)),this.Ni.getDocumentsMatchingQuery(t,e,lr.min())}Bi(t,e,n,s){return this.Ni.getDocumentsMatchingQuery(t,n,s).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(t,e,n,s){this.persistence=t,this.Li=e,this.It=s,this.Ui=new Er(Ys),this.qi=new Io((t=>oi(t)),ci),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new qa(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ui)))}}function sc(t,e,n,s){return new nc(t,e,n,s)}async function rc(t,e){const n=Us(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next((r=>(s=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],i=[];let o=Fo();for(const t of s){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ji:t,removedBatchIds:r,addedBatchIds:i})))}))}))}function ic(t,e){const n=Us(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const s=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const r=n.batch,i=r.keys();let o=gr.resolve();return i.forEach((t=>{o=o.next((()=>s.getEntry(e,t))).next((e=>{const i=n.docVersions.get(t);Vs(null!==i),e.version.compareTo(i)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Fo();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,s)))}))}function oc(t){const e=Us(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Cs.getLastRemoteSnapshotVersion(t)))}function ac(t,e){const n=Us(t),s=e.snapshotVersion;let r=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const i=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.Ui;const o=[];e.targetChanges.forEach(((i,a)=>{const c=r.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(t,i.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(t,i.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(Ar.EMPTY_BYTE_STRING,er.min()).withLastLimboFreeSnapshotVersion(er.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,s)),r=r.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,i)&&o.push(n.Cs.updateTargetData(t,u))}));let a=Ao(),c=Fo();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(cc(t,i,e.documentUpdates).next((t=>{a=t.Wi,c=t.zi}))),!s.isEqual(er.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next((e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return gr.waitFor(o).next((()=>i.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Ui=r,t)))}function cc(t,e,n){let s=Fo(),r=Fo();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=Ao();return n.forEach(((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),i.isNoDocument()&&i.version.isEqual(er.min())?(e.removeEntry(n,i.readTime),s=s.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),s=s.insert(n,i)):Ls("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{Wi:s,zi:r}}))}function uc(t,e){const n=Us(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function lc(t,e){const n=Us(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.Cs.getTargetData(t,e).next((r=>r?(s=r,gr.resolve(s)):n.Cs.allocateTargetId(t).next((r=>(s=new Ra(e,r,0,t.currentSequenceNumber),n.Cs.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.Ui.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(t.targetId,t),n.qi.set(e,t.targetId)),t}))}async function hc(t,e,n){const s=Us(t),r=s.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,(t=>s.persistence.referenceDelegate.removeTarget(t,r)))}catch(t){if(!mr(t))throw t;Ls("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.Ui=s.Ui.remove(e),s.qi.delete(r.target)}function fc(t,e,n){const s=Us(t);let r=er.min(),i=Fo();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=Us(t),r=s.qi.get(n);return void 0!==r?gr.resolve(s.Ui.get(r)):s.Cs.getTargetData(e,n)}(s,t,Ri(e)).next((e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{i=t}))})).next((()=>s.Li.getDocumentsMatchingQuery(t,e,n?r:er.min(),n?i:Fo()))).next((t=>(dc(s,Vi(e),t),{documents:t,Hi:i})))))}function dc(t,e,n){let s=er.min();n.forEach(((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)})),t.Ki.set(e,s)}class pc{constructor(){this.activeTargetIds=Vo()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class gc{constructor(){this.Lr=new pc,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,e,n){this.Ur[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new pc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{qr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Ls("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){Ls("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(t,e,n,s,r){const i=this.ao(t,e);Ls("RestConnection","Sending: ",i,n);const o={};return this.ho(o,s,r),this.lo(t,i,o,n).then((t=>(Ls("RestConnection","Received: ",t),t)),(e=>{throw Ms("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}fo(t,e,n,s,r,i){return this.co(t,e,n,s,r)}ho(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ns,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ao(t,e){const n=vc[t];return`${this.oo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}lo(t,e,n,s){return new Promise(((r,i)=>{const o=new As;o.listenOnce(Ts.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Es.NO_ERROR:const e=o.getResponseJson();Ls("Connection","XHR received:",JSON.stringify(e)),r(e);break;case Es.TIMEOUT:Ls("Connection",'RPC "'+t+'" timed out'),i(new js(Bs.DEADLINE_EXCEEDED,"Request time out"));break;case Es.HTTP_ERROR:const n=o.getStatus();if(Ls("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Bs).indexOf(e)>=0?e:Bs.UNKNOWN}(t.status);i(new js(e,t.message))}else i(new js(Bs.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new js(Bs.UNAVAILABLE,"Connection failed."));break;default:Ps()}}finally{Ls("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(s);o.send(e,"POST",a,n,15)}))}_o(t,e,n){const s=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=ws(),i=bs(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Is({})),this.ho(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const a=s.join("");Ls("Connection","Creating WebChannel: "+a,o);const c=r.createWebChannel(a,o);let u=!1,l=!1;const h=new wc({Hr:t=>{l?Ls("Connection","Not sending because WebChannel is closed:",t):(u||(Ls("Connection","Opening WebChannel transport."),c.open(),u=!0),Ls("Connection","WebChannel sending:",t),c.send(t))},Jr:()=>c.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(c,Ss.EventType.OPEN,(()=>{l||Ls("Connection","WebChannel transport opened.")})),f(c,Ss.EventType.CLOSE,(()=>{l||(l=!0,Ls("Connection","WebChannel transport closed"),h.io())})),f(c,Ss.EventType.ERROR,(t=>{l||(l=!0,Ms("Connection","WebChannel transport errored:",t),h.io(new js(Bs.UNAVAILABLE,"The operation could not be completed")))})),f(c,Ss.EventType.MESSAGE,(t=>{var e;if(!l){const n=t.data[0];Vs(!!n);const s=n,r=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(r){Ls("Connection","WebChannel received error:",r);const t=r.status;let e=function(t){const e=Eo[t];if(void 0!==e)return Co(e)}(t),n=r.message;void 0===e&&(e=Bs.INTERNAL,n="Unknown error status: "+t+" with message "+r.message),l=!0,h.io(new js(e,n)),c.close()}else Ls("Connection","WebChannel received:",n),h.ro(n)}})),f(i,_s.STAT_EVENT,(t=>{t.stat===Cs.PROXY?Ls("Connection","Detected buffering proxy"):t.stat===Cs.NOPROXY&&Ls("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.so()}),0),h}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(t){return new Jo(t,!0)}class _c{constructor(t,e,n=1e3,s=1.5,r=6e4){this.Hs=t,this.timerId=e,this.wo=n,this.mo=s,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(t){this.cancel();const e=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),s=Math.max(0,e-n);s>0&&Ls("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.po} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,s,(()=>(this.To=Date.now(),t()))),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(t,e,n,s,r,i,o,a){this.Hs=t,this.Po=n,this.vo=s,this.Vo=r,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new _c(t,e)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,(()=>this.$o())))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,e){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,4!==t?this.xo.reset():e&&e.code===Bs.RESOURCE_EXHAUSTED?(Os(e.toString()),Os("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):e&&e.code===Bs.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}qo(){}auth(){this.state=1;const t=this.Ko(this.So),e=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.So===e&&this.Go(t,n)}),(e=>{t((()=>{const t=new js(Bs.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Qo(t)}))}))}Go(t,e){const n=this.Ko(this.So);this.stream=this.jo(t,e),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((t=>{n((()=>this.Qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Mo(){this.state=5,this.xo.Ao((async()=>{this.state=0,this.start()}))}Qo(t){return Ls("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return e=>{this.Hs.enqueueAndForget((()=>this.So===t?e():(Ls("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ic extends Cc{constructor(t,e,n,s,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,i),this.It=r}jo(t,e){return this.Vo._o("Listen",t,e)}onMessage(t){this.xo.reset();const e=la(this.It,t),n=function(t){if(!("targetChange"in t))return er.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?er.min():e.readTime?ta(e.readTime):er.min()}(t);return this.listener.Wo(e,n)}zo(t){const e={};e.database=aa(this.It),e.addTarget=function(t,e){let n;const s=e.target;return n=ui(s)?{documents:da(t,s)}:{query:pa(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Yo(t,e.resumeToken):e.snapshotVersion.compareTo(er.min())>0&&(n.readTime=Xo(t,e.snapshotVersion.toTimestamp())),n}(this.It,t);const n=ma(this.It,t);n&&(e.labels=n),this.Bo(e)}Ho(t){const e={};e.database=aa(this.It),e.removeTarget=t,this.Bo(e)}}class Sc extends Cc{constructor(t,e,n,s,r,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,i),this.It=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(t,e){return this.Vo._o("Write",t,e)}onMessage(t){if(Vs(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const e=fa(t.writeResults,t.commitTime),n=ta(t.commitTime);return this.listener.Zo(n,e)}return Vs(!t.writeResults||0===t.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=aa(this.It),this.Bo(t)}Xo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>ha(this.It,t)))};this.Bo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.Vo=n,this.It=s,this.nu=!1}su(){if(this.nu)throw new js(Bs.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,e,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.Vo.co(t,e,n,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Bs.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new js(Bs.UNKNOWN,t.toString())}))}fo(t,e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.Vo.fo(t,e,n,r,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Bs.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new js(Bs.UNKNOWN,t.toString())}))}terminate(){this.nu=!0}}class kc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(t){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,"Online"===t&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Os(e),this.ou=!1):Ls("OnlineStateTracker",e)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(t,e,n,s,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.qr((t=>{n.enqueueAndForget((async()=>{Vc(this)&&(Ls("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Us(t);e._u.add(4),await xc(e),e.gu.set("Unknown"),e._u.delete(4),await Nc(e)}(this))}))})),this.gu=new kc(n,s)}}async function Nc(t){if(Vc(t))for(const e of t.wu)await e(!0)}async function xc(t){for(const e of t.wu)await e(!1)}function Rc(t,e){const n=Us(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Pc(n)?Fc(n):nu(n).ko()&&Oc(n,e))}function Lc(t,e){const n=Us(t),s=nu(n);n.du.delete(e),s.ko()&&Mc(n,e),0===n.du.size&&(s.ko()?s.Fo():Vc(n)&&n.gu.set("Unknown"))}function Oc(t,e){t.yu.Ot(e.targetId),nu(t).zo(e)}function Mc(t,e){t.yu.Ot(e),nu(t).Ho(e)}function Fc(t){t.yu=new Ho({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),nu(t).start(),t.gu.uu()}function Pc(t){return Vc(t)&&!nu(t).No()&&t.du.size>0}function Vc(t){return 0===Us(t)._u.size}function Uc(t){t.yu=void 0}async function Bc(t){t.du.forEach(((e,n)=>{Oc(t,e)}))}async function jc(t,e){Uc(t),Pc(t)?(t.gu.hu(e),Fc(t)):t.gu.set("Unknown")}async function qc(t,e,n){if(t.gu.set("Online"),e instanceof $o&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.du.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.du.delete(s),t.yu.removeTarget(s))}(t,e)}catch(n){Ls("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await $c(t,n)}else if(e instanceof jo?t.yu.Gt(e):e instanceof qo?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(er.min()))try{const e=await oc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.yu.te(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.du.get(s);r&&t.du.set(s,r.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.du.get(e);if(!n)return;t.du.set(e,n.withResumeToken(Ar.EMPTY_BYTE_STRING,n.snapshotVersion)),Mc(t,e);const s=new Ra(n.target,e,1,n.sequenceNumber);Oc(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Ls("RemoteStore","Failed to raise snapshot:",e),await $c(t,e)}}async function $c(t,e,n){if(!mr(e))throw e;t._u.add(1),await xc(t),t.gu.set("Offline"),n||(n=()=>oc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Ls("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Nc(t)}))}function Kc(t,e){return e().catch((n=>$c(t,n,e)))}async function Hc(t){const e=Us(t),n=su(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Gc(e);)try{const t=await uc(e.localStore,s);if(null===t){0===e.fu.length&&n.Fo();break}s=t.batchId,zc(e,t)}catch(t){await $c(e,t)}Wc(e)&&Qc(e)}function Gc(t){return Vc(t)&&t.fu.length<10}function zc(t,e){t.fu.push(e);const n=su(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Wc(t){return Vc(t)&&!su(t).No()&&t.fu.length>0}function Qc(t){su(t).start()}async function Jc(t){su(t).eu()}async function Xc(t){const e=su(t);for(const n of t.fu)e.Xo(n.mutations)}async function Yc(t,e,n){const s=t.fu.shift(),r=Na.from(s,e,n);await Kc(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await Hc(t)}async function Zc(t,e){e&&su(t).Yo&&await async function(t,e){if(n=e.code,_o(n)&&n!==Bs.ABORTED){const n=t.fu.shift();su(t).Oo(),await Kc(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Hc(t)}var n}(t,e),Wc(t)&&Qc(t)}async function tu(t,e){const n=Us(t);n.asyncQueue.verifyOperationInProgress(),Ls("RemoteStore","RemoteStore received new credentials");const s=Vc(n);n._u.add(3),await xc(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Nc(n)}async function eu(t,e){const n=Us(t);e?(n._u.delete(2),await Nc(n)):e||(n._u.add(2),await xc(n),n.gu.set("Unknown"))}function nu(t){return t.pu||(t.pu=function(t,e,n){const s=Us(t);return s.su(),new Ic(e,s.Vo,s.authCredentials,s.appCheckCredentials,s.It,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Yr:Bc.bind(null,t),Zr:jc.bind(null,t),Wo:qc.bind(null,t)}),t.wu.push((async e=>{e?(t.pu.Oo(),Pc(t)?Fc(t):t.gu.set("Unknown")):(await t.pu.stop(),Uc(t))}))),t.pu}function su(t){return t.Iu||(t.Iu=function(t,e,n){const s=Us(t);return s.su(),new Sc(e,s.Vo,s.authCredentials,s.appCheckCredentials,s.It,n)}(t.datastore,t.asyncQueue,{Yr:Jc.bind(null,t),Zr:Zc.bind(null,t),tu:Xc.bind(null,t),Zo:Yc.bind(null,t)}),t.wu.push((async e=>{e?(t.Iu.Oo(),await Hc(t)):(await t.Iu.stop(),t.fu.length>0&&(Ls("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))}))),t.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ru{constructor(t,e,n,s,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=r,this.deferred=new qs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,r){const i=Date.now()+n,o=new ru(t,e,i,s,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new js(Bs.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function iu(t,e){if(Os("AsyncQueue",`${e}: ${t}`),mr(t))return new js(Bs.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(t){this.comparator=t?(e,n)=>t(e,n)||or.comparator(e.key,n.key):(t,e)=>or.comparator(t.key,e.key),this.keyedMap=Do(),this.sortedSet=new Er(this.comparator)}static emptySet(t){return new ou(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ou))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new ou;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(){this.Tu=new Er(or.comparator)}track(t){const e=t.doc.key,n=this.Tu.get(e);n?0!==t.type&&3===n.type?this.Tu=this.Tu.insert(e,t):3===t.type&&1!==n.type?this.Tu=this.Tu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Tu=this.Tu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Tu=this.Tu.remove(e):1===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):Ps():this.Tu=this.Tu.insert(e,t)}Eu(){const t=[];return this.Tu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class cu{constructor(t,e,n,s,r,i,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=r,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,s){const r=[];return e.forEach((t=>{r.push({type:0,doc:t})})),new cu(t,e,ou.emptySet(e),r,n,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Oi(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(){this.Au=void 0,this.listeners=[]}}class lu{constructor(){this.queries=new Io((t=>Mi(t)),Oi),this.onlineState="Unknown",this.Ru=new Set}}async function hu(t,e){const n=Us(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new uu),r)try{i.Au=await n.onListen(s)}catch(t){const n=iu(t,`Initialization of query '${Fi(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&gu(n)}async function fu(t,e){const n=Us(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),r=0===i.listeners.length)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function du(t,e){const n=Us(t);let s=!1;for(const r of e){const t=r.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Pu(r)&&(s=!0);e.Au=r}}s&&gu(n)}function pu(t,e,n){const s=Us(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function gu(t){t.Ru.forEach((t=>{t.next()}))}class mu{constructor(t,e,n){this.query=t,this.vu=e,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new cu(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),e=!0):this.Cu(t,this.onlineState)&&(this.xu(t),e=!0),this.Su=t,e}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let e=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),e=!0),e}Cu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Nu||!n)&&(!t.docs.isEmpty()||"Offline"===e)}Du(t){if(t.docChanges.length>0)return!0;const e=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}xu(t){t=cu.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.Vu=!0,this.vu.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yu{constructor(t){this.key=t}}class vu{constructor(t){this.key=t}}class wu{constructor(t,e){this.query=t,this.Lu=e,this.Uu=null,this.current=!1,this.qu=Fo(),this.mutatedKeys=Fo(),this.Ku=Ui(t),this.Gu=new ou(this.Ku)}get Qu(){return this.Lu}ju(t,e){const n=e?e.Wu:new au,s=e?e.Gu:this.Gu;let r=e?e.mutatedKeys:this.mutatedKeys,i=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,c="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const u=s.get(t),l=Pi(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.zu(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.Ku(l,a)>0||c&&this.Ku(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(o=!0)),d&&(l?(i=i.add(l),r=f?r.add(t):r.delete(t)):(i=i.delete(t),r=r.delete(t)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{Gu:i,Wu:n,$i:o,mutatedKeys:r}}zu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.Gu;this.Gu=t.Gu,this.mutatedKeys=t.mutatedKeys;const r=t.Wu.Eu();r.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ps()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Ku(t.doc,e.doc))),this.Hu(n);const i=e?this.Ju():[],o=0===this.qu.size&&this.current?1:0,a=o!==this.Uu;return this.Uu=o,0!==r.length||a?{snapshot:new cu(this.query,t.Gu,s,r,t.mutatedKeys,0===o,a,!1),Yu:i}:{Yu:i}}bu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new au,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(t){return!this.Lu.has(t)&&!!this.Gu.has(t)&&!this.Gu.get(t).hasLocalMutations}Hu(t){t&&(t.addedDocuments.forEach((t=>this.Lu=this.Lu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Lu=this.Lu.delete(t))),this.current=t.current)}Ju(){if(!this.current)return[];const t=this.qu;this.qu=Fo(),this.Gu.forEach((t=>{this.Xu(t.key)&&(this.qu=this.qu.add(t.key))}));const e=[];return t.forEach((t=>{this.qu.has(t)||e.push(new vu(t))})),this.qu.forEach((n=>{t.has(n)||e.push(new yu(n))})),e}Zu(t){this.Lu=t.Hi,this.qu=Fo();const e=this.ju(t.documents);return this.applyChanges(e,!0)}tc(){return cu.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.Uu)}}class bu{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Eu{constructor(t){this.key=t,this.ec=!1}}class Tu{constructor(t,e,n,s,r,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=i,this.nc={},this.sc=new Io((t=>Mi(t)),Oi),this.ic=new Map,this.rc=new Set,this.oc=new Er(or.comparator),this.uc=new Map,this.cc=new Ha,this.ac={},this.hc=new Map,this.lc=Ua.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return!0===this.fc}}async function _u(t,e){const n=qu(t);let s,r;const i=n.sc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const t=await lc(n.localStore,Ri(e));n.isPrimaryClient&&Rc(n.remoteStore,t);const i=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,r=await Cu(n,e,s,"current"===i)}return r}async function Cu(t,e,n,s){t.dc=(e,n,s)=>async function(t,e,n,s){let r=e.view.ju(n);r.$i&&(r=await fc(t.localStore,e.query,!1).then((({documents:t})=>e.view.ju(t,r))));const i=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(r,t.isPrimaryClient,i);return Fu(t,e.targetId,o.Yu),o.snapshot}(t,e,n,s);const r=await fc(t.localStore,e,!0),i=new wu(e,r.Hi),o=i.ju(r.documents),a=Bo.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState),c=i.applyChanges(o,t.isPrimaryClient,a);Fu(t,n,c.Yu);const u=new bu(e,n,i);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function Iu(t,e){const n=Us(t),s=n.sc.get(e),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter((t=>!Oi(t,e)))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await hc(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),Lc(n.remoteStore,s.targetId),Ou(n,s.targetId)})).catch(pr)):(Ou(n,s.targetId),await hc(n.localStore,s.targetId,!0))}async function Su(t,e,n){const s=$u(t);try{const t=await function(t,e){const n=Us(t),s=tr.now(),r=e.reduce(((t,e)=>t.add(e.key)),Fo());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Ao(),c=Fo();return n.Gi.getEntries(t,r).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((r=>{i=r;const o=[];for(const t of e){const e=lo(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new po(t.key,e,ni(e.value.mapValue),ro.exists(!0)))}return n.mutationQueue.addMutationBatch(t,s,o,e)})).next((e=>{o=e;const s=e.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,s)}))})).then((()=>({batchId:o.batchId,changes:No(i)})))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.ac[t.currentUser.toKey()];s||(s=new Er(Ys)),s=s.insert(e,n),t.ac[t.currentUser.toKey()]=s}(s,t.batchId,n),await Uu(s,t.changes),await Hc(s.remoteStore)}catch(t){const e=iu(t,"Failed to persist write");n.reject(e)}}async function Au(t,e){const n=Us(t);try{const t=await ac(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.uc.get(e);s&&(Vs(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.ec=!0:t.modifiedDocuments.size>0?Vs(s.ec):t.removedDocuments.size>0&&(Vs(s.ec),s.ec=!1))})),await Uu(n,t,e)}catch(t){await pr(t)}}function ku(t,e,n){const s=Us(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.sc.forEach(((n,s)=>{const r=s.view.bu(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=Us(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const r of n.listeners)r.bu(e)&&(s=!0)})),s&&gu(n)}(s.eventManager,e),t.length&&s.nc.Wo(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Du(t,e,n){const s=Us(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.uc.get(e),i=r&&r.key;if(i){let t=new Er(or.comparator);t=t.insert(i,si.newNoDocument(i,er.min()));const n=Fo().add(i),r=new Uo(er.min(),new Map,new Cr(Ys),t,n);await Au(s,r),s.oc=s.oc.remove(i),s.uc.delete(e),Vu(s)}else await hc(s.localStore,e,!1).then((()=>Ou(s,e,n))).catch(pr)}async function Nu(t,e){const n=Us(t),s=e.batch.batchId;try{const t=await ic(n.localStore,e);Lu(n,s,null),Ru(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Uu(n,t)}catch(t){await pr(t)}}async function xu(t,e,n){const s=Us(t);try{const t=await function(t,e){const n=Us(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let s;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Vs(null!==e),s=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,s))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(s.localStore,e);Lu(s,e,n),Ru(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Uu(s,t)}catch(n){await pr(n)}}function Ru(t,e){(t.hc.get(e)||[]).forEach((t=>{t.resolve()})),t.hc.delete(e)}function Lu(t,e,n){const s=Us(t);let r=s.ac[s.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),s.ac[s.currentUser.toKey()]=r}}function Ou(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc._c(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach((e=>{t.cc.containsKey(e)||Mu(t,e)}))}function Mu(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);null!==n&&(Lc(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Vu(t))}function Fu(t,e,n){for(const s of n)s instanceof yu?(t.cc.addReference(s.key,e),Pu(t,s)):s instanceof vu?(Ls("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||Mu(t,s.key)):Ps()}function Pu(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(Ls("SyncEngine","New document in limbo: "+n),t.rc.add(s),Vu(t))}function Vu(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new or(sr.fromString(e)),s=t.lc.next();t.uc.set(s,new Eu(n)),t.oc=t.oc.insert(n,s),Rc(t.remoteStore,new Ra(Ri(Si(n.path)),s,2,yr.at))}}async function Uu(t,e,n){const s=Us(t),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach(((t,a)=>{o.push(s.dc(a,e,n).then((t=>{if(t){s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),r.push(t);const e=tc.Ci(a.targetId,t);i.push(e)}})))})),await Promise.all(o),s.nc.Wo(r),await async function(t,e){const n=Us(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>gr.forEach(e,(e=>gr.forEach(e.Si,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>gr.forEach(e.Di,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!mr(t))throw t;Ls("LocalStore","Failed to update sequence numbers: "+t)}for(const s of e){const t=s.targetId;if(!s.fromCache){const e=n.Ui.get(t),s=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(s);n.Ui=n.Ui.insert(t,r)}}}(s.localStore,i))}async function Bu(t,e){const n=Us(t);if(!n.currentUser.isEqual(e)){Ls("SyncEngine","User change. New user:",e.toKey());const t=await rc(n.localStore,e);n.currentUser=e,function(t,e){t.hc.forEach((t=>{t.forEach((t=>{t.reject(new js(Bs.CANCELLED,e))}))})),t.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Uu(n,t.ji)}}function ju(t,e){const n=Us(t),s=n.uc.get(e);if(s&&s.ec)return Fo().add(s.key);{let t=Fo();const s=n.ic.get(e);if(!s)return t;for(const e of s){const s=n.sc.get(e);t=t.unionWith(s.view.Qu)}return t}}function qu(t){const e=Us(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Au.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ju.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Du.bind(null,e),e.nc.Wo=du.bind(null,e.eventManager),e.nc._c=pu.bind(null,e.eventManager),e}function $u(t){const e=Us(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Nu.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xu.bind(null,e),e}class Ku{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=Tc(t.databaseInfo.databaseId),this.sharedClientState=this.mc(t),this.persistence=this.gc(t),await this.persistence.start(),this.localStore=this.yc(t),this.gcScheduler=this.Ic(t,this.localStore),this.indexBackfillerScheduler=this.Tc(t,this.localStore)}Ic(t,e){return null}Tc(t,e){return null}yc(t){return sc(this.persistence,new ec,t.initialUser,this.It)}gc(t){return new Xa(Za.Bs,this.It)}mc(t){return new gc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Hu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>ku(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Bu.bind(null,this.syncEngine),await eu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new lu}createDatastore(t){const e=Tc(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new bc(s));var s;return function(t,e,n,s){return new Ac(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,r=t=>ku(this.syncEngine,t,0),i=yc.C()?new yc:new mc,new Dc(e,n,s,r,i);var e,n,s,r,i}createSyncEngine(t,e){return function(t,e,n,s,r,i,o){const a=new Tu(t,e,n,s,r,i);return o&&(a.fc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Us(t);Ls("RemoteStore","RemoteStore shutting down."),e._u.add(5),await xc(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gu{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ac(this.observer.next,t)}error(t){this.observer.error?this.Ac(this.observer.error,t):Os("Uncaught Error in snapshot listener:",t)}Rc(){this.muted=!0}Ac(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zu{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=Ds.UNAUTHENTICATED,this.clientId=Xs.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Ls("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Ls("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new js(Bs.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new qs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=iu(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Wu(t,e){t.asyncQueue.verifyOperationInProgress(),Ls("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await rc(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function Qu(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ju(t);Ls("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>tu(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>tu(e.remoteStore,n))),t.onlineComponents=e}async function Ju(t){return t.offlineComponents||(Ls("FirestoreClient","Using default OfflineComponentProvider"),await Wu(t,new Ku)),t.offlineComponents}async function Xu(t){return t.onlineComponents||(Ls("FirestoreClient","Using default OnlineComponentProvider"),await Qu(t,new Hu)),t.onlineComponents}function Yu(t){return Xu(t).then((t=>t.syncEngine))}async function Zu(t){const e=await Xu(t),n=e.eventManager;return n.onListen=_u.bind(null,e.syncEngine),n.onUnlisten=Iu.bind(null,e.syncEngine),n}const tl=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(t,e,n){if(!n)throw new js(Bs.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nl(t,e,n,s){if(!0===e&&!0===s)throw new js(Bs.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function sl(t){if(!or.isDocumentKey(t))throw new js(Bs.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function rl(t){if(or.isDocumentKey(t))throw new js(Bs.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function il(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Ps()}function ol(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new js(Bs.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=il(t);throw new js(Bs.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class al{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new js(Bs.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new js(Bs.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,nl("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new al({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new js(Bs.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new js(Bs.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new al(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Ks;switch(t.type){case"gapi":const e=t.client;return new zs(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new js(Bs.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=tl.get(t);e&&(Ls("ComponentProvider","Removing Datastore"),tl.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ul{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hl(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ul(this.firestore,t,this._key)}}class ll{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new ll(this.firestore,t,this._query)}}class hl extends ll{constructor(t,e,n){super(t,e,Si(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ul(this.firestore,null,new or(t))}withConverter(t){return new hl(this.firestore,t,this._path)}}function fl(t,e,...n){if(t=(0,a.m9)(t),el("collection","path",e),t instanceof cl){const s=sr.fromString(e,...n);return rl(s),new hl(t,null,s)}{if(!(t instanceof ul||t instanceof hl))throw new js(Bs.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(sr.fromString(e,...n));return rl(s),new hl(t.firestore,null,s)}}function dl(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=Xs.R()),el("doc","path",e),t instanceof cl){const s=sr.fromString(e,...n);return sl(s),new ul(t,null,new or(s))}{if(!(t instanceof ul||t instanceof hl))throw new js(Bs.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(sr.fromString(e,...n));return sl(s),new ul(t.firestore,t instanceof hl?t.converter:null,new or(s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pl{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new _c(this,"async_queue_retry"),this.jc=()=>{const t=Ec();t&&Ls("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.bo()};const t=Ec();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Wc(),this.zc(t)}enterRestrictedMode(t){if(!this.Lc){this.Lc=!0,this.Gc=t||!1;const e=Ec();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.jc)}}enqueue(t){if(this.Wc(),this.Lc)return new Promise((()=>{}));const e=new qs;return this.zc((()=>this.Lc&&this.Gc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Bc.push(t),this.Hc())))}async Hc(){if(0!==this.Bc.length){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(T){if(!mr(T))throw T;Ls("AsyncQueue","Operation failed with retryable error: "+T)}this.Bc.length>0&&this.xo.Ao((()=>this.Hc()))}}zc(t){const e=this.$c.then((()=>(this.Kc=!0,t().catch((t=>{this.qc=t,this.Kc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw Os("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Kc=!1,t))))));return this.$c=e,e}enqueueAfterDelay(t,e,n){this.Wc(),this.Qc.indexOf(t)>-1&&(e=0);const s=ru.createAndSchedule(this,t,e,n,(t=>this.Jc(t)));return this.Uc.push(s),s}Wc(){this.qc&&Ps()}verifyOperationInProgress(){}async Yc(){let t;do{t=this.$c,await t}while(t!==this.$c)}Xc(t){for(const e of this.Uc)if(e.timerId===t)return!0;return!1}Zc(t){return this.Yc().then((()=>{this.Uc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Uc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Yc()}))}ta(t){this.Qc.push(t)}Jc(t){const e=this.Uc.indexOf(t);this.Uc.splice(e,1)}}function gl(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const s of e)if(s in n&&"function"==typeof n[s])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,["next","error","complete"])}class ml extends cl{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new pl,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||wl(this),this._firestoreClient.terminate()}}function yl(t,e){const n="object"==typeof t?t:(0,r.Mq)(),s="string"==typeof t?t:e||"(default)";return(0,r.qX)(n,"firestore").getImmediate({identifier:s})}function vl(t){return t._firestoreClient||wl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function wl(t){var e;const n=t._freezeSettings(),s=function(t,e,n,s){return new Mr(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new zu(t._authCredentials,t._appCheckCredentials,t._queue,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bl{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new js(Bs.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ir(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class El{constructor(t){this._byteString=t}static fromBase64String(t){try{return new El(Ar.fromBase64String(t))}catch(t){throw new js(Bs.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new El(Ar.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new js(Bs.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new js(Bs.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Ys(this._lat,t._lat)||Ys(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl=/^__.*__$/;class Il{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new po(t,this.data,this.fieldMask,e,this.fieldTransforms):new fo(t,this.data,e,this.fieldTransforms)}}function Sl(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ps()}}class Al{constructor(t,e,n,s,r,i){this.settings=t,this.databaseId=e,this.It=n,this.ignoreUndefinedProperties=s,void 0===r&&this.ea(),this.fieldTransforms=r||[],this.fieldMask=i||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(t){return new Al(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.sa({path:n,ra:!1});return s.oa(t),s}ua(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.sa({path:n,ra:!1});return s.ea(),s}ca(t){return this.sa({path:void 0,ra:!0})}aa(t){return Vl(t,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}ea(){if(this.path)for(let t=0;t<this.path.length;t++)this.oa(this.path.get(t))}oa(t){if(0===t.length)throw this.aa("Document fields must not be empty");if(Sl(this.na)&&Cl.test(t))throw this.aa('Document fields cannot begin and end with "__"')}}class kl{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.It=n||Tc(t)}fa(t,e,n,s=!1){return new Al({na:t,methodName:e,la:n,path:ir.emptyPath(),ra:!1,ha:s},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Dl(t){const e=t._freezeSettings(),n=Tc(t._databaseId);return new kl(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Nl(t,e,n,s,r,i={}){const o=t.fa(i.merge||i.mergeFields?2:0,e,n,r);Ol("Data must be an object, but it was:",o,s);const a=Rl(s,o);let c,u;if(i.merge)c=new Sr(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const s of i.mergeFields){const r=Ml(e,s,n);if(!o.contains(r))throw new js(Bs.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Ul(t,r)||t.push(r)}c=new Sr(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Il(new ei(a),c,u)}function xl(t,e){if(Ll(t=(0,a.m9)(t)))return Ol("Unsupported field value:",e,t),Rl(t,e);if(t instanceof Tl)return function(t,e){if(!Sl(e.na))throw e.aa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.aa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ra&&4!==e.na)throw e.aa("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const r of t){let t=xl(r,e.ca(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return $i(e.It,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=tr.fromDate(t);return{timestampValue:Xo(e.It,n)}}if(t instanceof tr){const n=new tr(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Xo(e.It,n)}}if(t instanceof _l)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof El)return{bytesValue:Yo(e.It,t._byteString)};if(t instanceof ul){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.aa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ea(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.aa(`Unsupported field value: ${il(t)}`)}(t,e)}function Rl(t,e){const n={};return br(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wr(t,((t,s)=>{const r=xl(s,e.ia(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function Ll(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof tr||t instanceof _l||t instanceof El||t instanceof ul||t instanceof Tl)}function Ol(t,e,n){if(!Ll(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const s=il(n);throw"an object"===s?e.aa(t+" a custom object"):e.aa(t+" "+s)}}function Ml(t,e,n){if((e=(0,a.m9)(e))instanceof bl)return e._internalPath;if("string"==typeof e)return Pl(t,e);throw Vl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Fl=new RegExp("[~\\*/\\[\\]]");function Pl(t,e,n){if(e.search(Fl)>=0)throw Vl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new bl(...e.split("."))._internalPath}catch(s){throw Vl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vl(t,e,n,s,r){const i=s&&!s.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new js(Bs.INVALID_ARGUMENT,a+t+c)}function Ul(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(t,e,n,s,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ul(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new jl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ql("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class jl extends Bl{data(){return super.data()}}function ql(t,e){return"string"==typeof e?Pl(t,e):e instanceof bl?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Kl extends Bl{constructor(t,e,n,s,r,i){super(t,e,n,s,i),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Hl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(ql("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Hl extends Kl{data(t={}){return super.data(t)}}class Gl{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new $l(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Hl(this._firestore,this._userDataWriter,n.key,n,new $l(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new js(Bs.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new Hl(t._firestore,t._userDataWriter,n.doc.key,n.doc,new $l(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new Hl(t._firestore,t._userDataWriter,e.doc.key,e.doc,new $l(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,i=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:zl(e.type),doc:s,oldIndex:r,newIndex:i}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function zl(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ps()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wl(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new js(Bs.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ql{convertValue(t,e="none"){switch(jr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Nr(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(xr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Ps()}}convertObject(t,e){const n={};return wr(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new _l(Nr(t.latitude),Nr(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Lr(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Or(t));default:return null}}convertTimestamp(t){const e=Dr(t);return new tr(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=sr.fromString(t);Vs(Ia(n));const s=new Fr(n.get(1),n.get(3)),r=new or(n.popFirst(5));return s.isEqual(e)||Os(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class Xl extends Ql{constructor(t){super(),this.firestore=t}convertBytes(t){return new El(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ul(this.firestore,null,e)}}function Yl(t,e){const n=ol(t.firestore,ml),s=dl(t),r=Jl(t.converter,e);return th(n,[Nl(Dl(t.firestore),"addDoc",s._key,r,null!==t.converter,{}).toMutation(s._key,ro.exists(!1))]).then((()=>s))}function Zl(t,...e){var n,s,r;t=(0,a.m9)(t);let i={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||gl(e[o])||(i=e[o],o++);const c={includeMetadataChanges:i.includeMetadataChanges};if(gl(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(s=t.error)||void 0===s?void 0:s.bind(t),e[o+2]=null===(r=t.complete)||void 0===r?void 0:r.bind(t)}let u,l,h;if(t instanceof ul)l=ol(t.firestore,ml),h=Si(t._key.path),u={next:n=>{e[o]&&e[o](eh(l,t,n))},error:e[o+1],complete:e[o+2]};else{const n=ol(t,ll);l=ol(n.firestore,ml),h=n._query;const s=new Xl(l);u={next:t=>{e[o]&&e[o](new Gl(l,s,n,t))},error:e[o+1],complete:e[o+2]},Wl(t._query)}return function(t,e,n,s){const r=new Gu(s),i=new mu(e,r,n);return t.asyncQueue.enqueueAndForget((async()=>hu(await Zu(t),i))),()=>{r.Rc(),t.asyncQueue.enqueueAndForget((async()=>fu(await Zu(t),i)))}}(vl(l),h,c,u)}function th(t,e){return function(t,e){const n=new qs;return t.asyncQueue.enqueueAndForget((async()=>Su(await Yu(t),e,n))),n.promise}(vl(t),e)}function eh(t,e,n){const s=n.docs.get(e._key),r=new Xl(t);return new Kl(t,r,e._key,s,new $l(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){Ns=t}(r.Jn),(0,r.Xd)(new i.wA("firestore",((t,{instanceIdentifier:n,options:s})=>{const r=t.getProvider("app").getImmediate(),i=new ml(new Hs(t.getProvider("auth-internal")),new Qs(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new js(Bs.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fr(t.options.projectId,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,n),r);return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i}),"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(ks,"3.5.0",t),(0,r.KN)(ks,"3.5.0","esm2017")}()},744:function(t,e){e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n}},816:function(t,e,n){n.d(e,{Jn:function(){return gt},qX:function(){return ht},Xd:function(){return lt},Mq:function(){return yt},ZF:function(){return mt},KN:function(){return vt}});var s=n(463),r=n(333),i=n(444);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",i)},r=()=>{e(T(t.result)),s()},i=()=>{n(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),g.set(e,t),e}function y(t){if(f.has(t))return;const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",i),t.removeEventListener("abort",i)},r=()=>{e(),s()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",i),t.addEventListener("abort",i)}));f.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return T(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){v=t(v)}function b(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(_(this),e),T(h.get(this))}:function(...e){return T(t.apply(_(this),e))}:function(e,...n){const s=t.call(_(this),e,...n);return d.set(s,e.sort?e.sort():[e]),T(s)}}function E(t){return"function"===typeof t?b(t):(t instanceof IDBTransaction&&y(t),o(t,u())?new Proxy(t,v):t)}function T(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=E(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const _=t=>g.get(t);function C(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=T(o);return s&&o.addEventListener("upgradeneeded",(t=>{s(T(o.result),t.oldVersion,t.newVersion,T(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{i&&t.addEventListener("close",(()=>i())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const I=["get","getKey","getAll","getAllKeys","count"],S=["put","add","delete","clear"],A=new Map;function k(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(A.get(e))return A.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=S.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!r&&!I.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,r?"readwrite":"readonly");let o=i.store;return s&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&i.done]))[0]};return A.set(e,i),i}w((t=>({...t,get:(e,n,s)=>k(e,n)||t.get(e,n,s),has:(e,n)=>!!k(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class D{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(N(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function N(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const x="@firebase/app",R="0.7.33",L=new r.Yd("@firebase/app"),O="@firebase/app-compat",M="@firebase/analytics-compat",F="@firebase/analytics",P="@firebase/app-check-compat",V="@firebase/app-check",U="@firebase/auth",B="@firebase/auth-compat",j="@firebase/database",q="@firebase/database-compat",$="@firebase/functions",K="@firebase/functions-compat",H="@firebase/installations",G="@firebase/installations-compat",z="@firebase/messaging",W="@firebase/messaging-compat",Q="@firebase/performance",J="@firebase/performance-compat",X="@firebase/remote-config",Y="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",st="firebase",rt="9.10.0",it="[DEFAULT]",ot={[x]:"fire-core",[O]:"fire-core-compat",[F]:"fire-analytics",[M]:"fire-analytics-compat",[V]:"fire-app-check",[P]:"fire-app-check-compat",[U]:"fire-auth",[B]:"fire-auth-compat",[j]:"fire-rtdb",[q]:"fire-rtdb-compat",[$]:"fire-fn",[K]:"fire-fn-compat",[H]:"fire-iid",[G]:"fire-iid-compat",[z]:"fire-fcm",[W]:"fire-fcm-compat",[Q]:"fire-perf",[J]:"fire-perf-compat",[X]:"fire-rc",[Y]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[st]:"fire-js-all"},at=new Map,ct=new Map;function ut(t,e){try{t.container.addComponent(e)}catch(n){L.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(ct.has(e))return L.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())ut(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ft={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},dt=new i.LL("app","Firebase",ft);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new s.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=rt;function mt(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:it,automaticDataCollectionEnabled:!1},e),r=n.name;if("string"!==typeof r||!r)throw dt.create("bad-app-name",{appName:String(r)});const o=at.get(r);if(o){if((0,i.vZ)(t,o.options)&&(0,i.vZ)(n,o.config))return o;throw dt.create("duplicate-app",{appName:r})}const a=new s.H0(r);for(const s of ct.values())a.addComponent(s);const c=new pt(t,n,a);return at.set(r,c),c}function yt(t=it){const e=at.get(t);if(!e)throw dt.create("no-app",{appName:t});return e}function vt(t,e,n){var r;let i=null!==(r=ot[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${i}" with version "${e}":`];return o&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void L.warn(t.join(" "))}lt(new s.wA(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wt="firebase-heartbeat-database",bt=1,Et="firebase-heartbeat-store";let Tt=null;function _t(){return Tt||(Tt=C(wt,bt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Et)}}}).catch((t=>{throw dt.create("idb-open",{originalErrorMessage:t.message})}))),Tt}async function Ct(t){var e;try{const e=await _t();return e.transaction(Et).objectStore(Et).get(St(t))}catch(n){if(n instanceof i.ZR)L.warn(n.message);else{const t=dt.create("idb-get",{originalErrorMessage:null===(e=n)||void 0===e?void 0:e.message});L.warn(t.message)}}}async function It(t,e){var n;try{const n=await _t(),s=n.transaction(Et,"readwrite"),r=s.objectStore(Et);return await r.put(e,St(t)),s.done}catch(s){if(s instanceof i.ZR)L.warn(s.message);else{const t=dt.create("idb-set",{originalErrorMessage:null===(n=s)||void 0===n?void 0:n.message});L.warn(t.message)}}}function St(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=1024,kt=2592e6;class Dt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Rt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Nt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=kt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Nt(),{heartbeatsToSend:e,unsentEntries:n}=xt(this._heartbeatsCache.heartbeats),s=(0,i.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Nt(){const t=new Date;return t.toISOString().substring(0,10)}function xt(t,e=At){const n=[];let s=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),Lt(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Lt(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Rt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Ct(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return It(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return It(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Lt(t){return(0,i.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t){lt(new s.wA("platform-logger",(t=>new D(t)),"PRIVATE")),lt(new s.wA("heartbeat",(t=>new Dt(t)),"PRIVATE")),vt(x,R,t),vt(x,R,"esm2017"),vt("fire-js","")}Ot("")},463:function(t,e,n){n.d(e,{H0:function(){return u},wA:function(){return r}});var s=n(444);class r{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new s.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),s=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:i})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:s});n.resolve(t)}catch(e){}}}}clearInstance(t=i){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=i){return this.instances.has(t)}getOptions(t=i){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[r,i]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(r);n===t&&i.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&t(i,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(s){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(s){}return n||null}normalizeInstanceIdentifier(t=i){return this.component?this.component.multipleInstances?t:i:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===i?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},333:function(t,e,n){n.d(e,{Yd:function(){return u},in:function(){return r}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s=[];var r;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(r||(r={}));const i={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),r=a[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${s}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in r))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?i[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...t),this._logHandler(this,r.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...t),this._logHandler(this,r.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,r.INFO,...t),this._logHandler(this,r.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,r.WARN,...t),this._logHandler(this,r.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...t),this._logHandler(this,r.ERROR,...t)}}}}]);
//# sourceMappingURL=chunk-vendors.70217498.js.map