(self["webpackChunkwedding_project"]=self["webpackChunkwedding_project"]||[]).push([[998],{444:function(t,e,n){"use strict";n.d(e,{BH:function(){return c},L:function(){return a},LL:function(){return d},ZR:function(){return f},eu:function(){return l},hl:function(){return u},m9:function(){return v},vZ:function(){return g}});
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
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296===(64512&s)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++r)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},s=function(t){const e=[];let n=0,r=0;while(n<t.length){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((7&s)<<18|(63&i)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return e.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const e=t[s],i=s+1<t.length,o=i?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,f=63&c;a||(f=64,i||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):s(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const e=n[t.charAt(s++)],i=s<t.length,o=i?n[t.charAt(s)]:0;++s;const a=s<t.length,c=a?n[t.charAt(s)]:64;++s;const u=s<t.length,l=u?n[t.charAt(s)]:64;if(++s,null==e||null==o||null==c||null==l)throw Error();const h=e<<2|o>>4;if(r.push(h),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=r(t);return i.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")};
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
 */function u(){return"object"===typeof indexedDB}function l(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
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
const h="FirebaseError";class f extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=h,Object.setPrototypeOf(this,f.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,d.prototype.create)}}class d{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],i=s?p(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`,a=new f(r,o,n);return a}}function p(t,e){return t.replace(m,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const m=/\{\$([^}]+)}/g;
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
 */function g(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const n=t[s],i=e[s];if(y(n)&&y(i)){if(!g(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function y(t){return null!==t&&"object"===typeof t}
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
function v(t){return t&&t._delegate?t._delegate:t}},262:function(t,e,n){"use strict";n.d(e,{BK:function(){return Bt},Bj:function(){return i},Fl:function(){return Gt},IU:function(){return At},Jd:function(){return T},OT:function(){return _t},PG:function(){return Ct},Um:function(){return Et},WL:function(){return jt},X$:function(){return k},X3:function(){return kt},Xl:function(){return Dt},dq:function(){return Lt},iH:function(){return Mt},j:function(){return S},lk:function(){return C},qj:function(){return bt},qq:function(){return w},yT:function(){return It}});var r=n(577);let s;class i{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&s&&(this.parent=s,this.index=(s.scopes||(s.scopes=[])).push(this)-1)}run(t){if(this.active){const e=s;try{return s=this,t()}finally{s=e}}else 0}on(){s=this}off(){s=this.parent}stop(t){if(this.active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function o(t,e=s){e&&e.active&&e.effects.push(t)}const a=t=>{const e=new Set(t);return e.w=0,e.n=0,e},c=t=>(t.w&p)>0,u=t=>(t.n&p)>0,l=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=p},h=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];c(s)&&!u(s)?s.delete(t):e[n++]=s,s.w&=~p,s.n&=~p}e.length=n}},f=new WeakMap;let d=0,p=1;const m=30;let g;const y=Symbol(""),v=Symbol("");class w{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let t=g,e=E;while(t){if(t===this)return;t=t.parent}try{return this.parent=g,g=this,E=!0,p=1<<++d,d<=m?l(this):b(this),this.fn()}finally{d<=m&&h(this),p=1<<--d,g=this.parent,E=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){g===this?this.deferStop=!0:this.active&&(b(this),this.onStop&&this.onStop(),this.active=!1)}}function b(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let E=!0;const _=[];function T(){_.push(E),E=!1}function C(){const t=_.pop();E=void 0===t||t}function S(t,e,n){if(E&&g){let e=f.get(t);e||f.set(t,e=new Map);let r=e.get(n);r||e.set(n,r=a());const s=void 0;I(r,s)}}function I(t,e){let n=!1;d<=m?u(t)||(t.n|=p,n=!c(t)):n=!t.has(g),n&&(t.add(g),g.deps.push(t))}function k(t,e,n,s,i,o){const c=f.get(t);if(!c)return;let u=[];if("clear"===e)u=[...c.values()];else if("length"===n&&(0,r.kJ)(t))c.forEach(((t,e)=>{("length"===e||e>=s)&&u.push(t)}));else switch(void 0!==n&&u.push(c.get(n)),e){case"add":(0,r.kJ)(t)?(0,r.S0)(n)&&u.push(c.get("length")):(u.push(c.get(y)),(0,r._N)(t)&&u.push(c.get(v)));break;case"delete":(0,r.kJ)(t)||(u.push(c.get(y)),(0,r._N)(t)&&u.push(c.get(v)));break;case"set":(0,r._N)(t)&&u.push(c.get(y));break}if(1===u.length)u[0]&&A(u[0]);else{const t=[];for(const e of u)e&&t.push(...e);A(a(t))}}function A(t,e){const n=(0,r.kJ)(t)?t:[...t];for(const r of n)r.computed&&D(r,e);for(const r of n)r.computed||D(r,e)}function D(t,e){(t!==g||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const N=(0,r.fY)("__proto__,__v_isRef,__isVue"),x=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(r.yk)),R=V(),O=V(!1,!0),L=V(!0),M=P();function P(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=At(this);for(let e=0,s=this.length;e<s;e++)S(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(At)):r}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){T();const n=At(this)[e].apply(this,t);return C(),n}})),t}function V(t=!1,e=!1){return function(n,s,i){if("__v_isReactive"===s)return!t;if("__v_isReadonly"===s)return t;if("__v_isShallow"===s)return e;if("__v_raw"===s&&i===(t?e?yt:gt:e?mt:pt).get(n))return n;const o=(0,r.kJ)(n);if(!t&&o&&(0,r.RI)(M,s))return Reflect.get(M,s,i);const a=Reflect.get(n,s,i);return((0,r.yk)(s)?x.has(s):N(s))?a:(t||S(n,"get",s),e?a:Lt(a)?o&&(0,r.S0)(s)?a:a.value:(0,r.Kn)(a)?t?_t(a):bt(a):a)}}const F=j(),U=j(!0);function j(t=!1){return function(e,n,s,i){let o=e[n];if(St(o)&&Lt(o)&&!Lt(s))return!1;if(!t&&(It(s)||St(s)||(o=At(o),s=At(s)),!(0,r.kJ)(e)&&Lt(o)&&!Lt(s)))return o.value=s,!0;const a=(0,r.kJ)(e)&&(0,r.S0)(n)?Number(n)<e.length:(0,r.RI)(e,n),c=Reflect.set(e,n,s,i);return e===At(i)&&(a?(0,r.aU)(s,o)&&k(e,"set",n,s,o):k(e,"add",n,s)),c}}function B(t,e){const n=(0,r.RI)(t,e),s=t[e],i=Reflect.deleteProperty(t,e);return i&&n&&k(t,"delete",e,void 0,s),i}function q(t,e){const n=Reflect.has(t,e);return(0,r.yk)(e)&&x.has(e)||S(t,"has",e),n}function $(t){return S(t,"iterate",(0,r.kJ)(t)?"length":y),Reflect.ownKeys(t)}const K={get:R,set:F,deleteProperty:B,has:q,ownKeys:$},H={get:L,set(t,e){return!0},deleteProperty(t,e){return!0}},G=(0,r.l7)({},K,{get:O,set:U}),z=t=>t,W=t=>Reflect.getPrototypeOf(t);function Q(t,e,n=!1,r=!1){t=t["__v_raw"];const s=At(t),i=At(e);n||(e!==i&&S(s,"get",e),S(s,"get",i));const{has:o}=W(s),a=r?z:n?xt:Nt;return o.call(s,e)?a(t.get(e)):o.call(s,i)?a(t.get(i)):void(t!==s&&t.get(e))}function Y(t,e=!1){const n=this["__v_raw"],r=At(n),s=At(t);return e||(t!==s&&S(r,"has",t),S(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function J(t,e=!1){return t=t["__v_raw"],!e&&S(At(t),"iterate",y),Reflect.get(t,"size",t)}function X(t){t=At(t);const e=At(this),n=W(e),r=n.has.call(e,t);return r||(e.add(t),k(e,"add",t,t)),this}function Z(t,e){e=At(e);const n=At(this),{has:s,get:i}=W(n);let o=s.call(n,t);o||(t=At(t),o=s.call(n,t));const a=i.call(n,t);return n.set(t,e),o?(0,r.aU)(e,a)&&k(n,"set",t,e,a):k(n,"add",t,e),this}function tt(t){const e=At(this),{has:n,get:r}=W(e);let s=n.call(e,t);s||(t=At(t),s=n.call(e,t));const i=r?r.call(e,t):void 0,o=e.delete(t);return s&&k(e,"delete",t,void 0,i),o}function et(){const t=At(this),e=0!==t.size,n=void 0,r=t.clear();return e&&k(t,"clear",void 0,void 0,n),r}function nt(t,e){return function(n,r){const s=this,i=s["__v_raw"],o=At(i),a=e?z:t?xt:Nt;return!t&&S(o,"iterate",y),i.forEach(((t,e)=>n.call(r,a(t),a(e),s)))}}function rt(t,e,n){return function(...s){const i=this["__v_raw"],o=At(i),a=(0,r._N)(o),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=i[t](...s),h=n?z:e?xt:Nt;return!e&&S(o,"iterate",u?v:y),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function st(t){return function(...e){return"delete"!==t&&this}}function it(){const t={get(t){return Q(this,t)},get size(){return J(this)},has:Y,add:X,set:Z,delete:tt,clear:et,forEach:nt(!1,!1)},e={get(t){return Q(this,t,!1,!0)},get size(){return J(this)},has:Y,add:X,set:Z,delete:tt,clear:et,forEach:nt(!1,!0)},n={get(t){return Q(this,t,!0)},get size(){return J(this,!0)},has(t){return Y.call(this,t,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:nt(!0,!1)},r={get(t){return Q(this,t,!0,!0)},get size(){return J(this,!0)},has(t){return Y.call(this,t,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:nt(!0,!0)},s=["keys","values","entries",Symbol.iterator];return s.forEach((s=>{t[s]=rt(s,!1,!1),n[s]=rt(s,!0,!1),e[s]=rt(s,!1,!0),r[s]=rt(s,!0,!0)})),[t,n,e,r]}const[ot,at,ct,ut]=it();function lt(t,e){const n=e?t?ut:ct:t?at:ot;return(e,s,i)=>"__v_isReactive"===s?!t:"__v_isReadonly"===s?t:"__v_raw"===s?e:Reflect.get((0,r.RI)(n,s)&&s in e?n:e,s,i)}const ht={get:lt(!1,!1)},ft={get:lt(!1,!0)},dt={get:lt(!0,!1)};const pt=new WeakMap,mt=new WeakMap,gt=new WeakMap,yt=new WeakMap;function vt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:vt((0,r.W7)(t))}function bt(t){return St(t)?t:Tt(t,!1,K,ht,pt)}function Et(t){return Tt(t,!1,G,ft,mt)}function _t(t){return Tt(t,!0,H,dt,gt)}function Tt(t,e,n,s,i){if(!(0,r.Kn)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=i.get(t);if(o)return o;const a=wt(t);if(0===a)return t;const c=new Proxy(t,2===a?s:n);return i.set(t,c),c}function Ct(t){return St(t)?Ct(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function St(t){return!(!t||!t["__v_isReadonly"])}function It(t){return!(!t||!t["__v_isShallow"])}function kt(t){return Ct(t)||St(t)}function At(t){const e=t&&t["__v_raw"];return e?At(e):t}function Dt(t){return(0,r.Nj)(t,"__v_skip",!0),t}const Nt=t=>(0,r.Kn)(t)?bt(t):t,xt=t=>(0,r.Kn)(t)?_t(t):t;function Rt(t){E&&g&&(t=At(t),I(t.dep||(t.dep=a())))}function Ot(t,e){t=At(t),t.dep&&A(t.dep)}function Lt(t){return!(!t||!0!==t.__v_isRef)}function Mt(t){return Pt(t,!1)}function Pt(t,e){return Lt(t)?t:new Vt(t,e)}class Vt{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:At(t),this._value=e?t:Nt(t)}get value(){return Rt(this),this._value}set value(t){const e=this.__v_isShallow||It(t)||St(t);t=e?t:At(t),(0,r.aU)(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:Nt(t),Ot(this,t))}}function Ft(t){return Lt(t)?t.value:t}const Ut={get:(t,e,n)=>Ft(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Lt(s)&&!Lt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function jt(t){return Ct(t)?t:new Proxy(t,Ut)}function Bt(t){const e=(0,r.kJ)(t)?new Array(t.length):{};for(const n in t)e[n]=$t(t,n);return e}class qt{constructor(t,e,n){this._object=t,this._key=e,this._defaultValue=n,this.__v_isRef=!0}get value(){const t=this._object[this._key];return void 0===t?this._defaultValue:t}set value(t){this._object[this._key]=t}}function $t(t,e,n){const r=t[e];return Lt(r)?r:new qt(t,e,n)}var Kt;class Ht{constructor(t,e,n,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this[Kt]=!1,this._dirty=!0,this.effect=new w(t,(()=>{this._dirty||(this._dirty=!0,Ot(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const t=At(this);return Rt(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Gt(t,e,n=!1){let s,i;const o=(0,r.mf)(t);o?(s=t,i=r.dG):(s=t.get,i=t.set);const a=new Ht(s,i,o||!i,n);return a}Kt="__v_isReadonly"},252:function(t,e,n){"use strict";n.d(e,{$d:function(){return o},Ah:function(){return kt},Cn:function(){return P},FN:function(){return Tn},Fl:function(){return Un},HY:function(){return Be},Ko:function(){return Ut},P$:function(){return rt},Q6:function(){return ut},U2:function(){return it},Uk:function(){return hn},Us:function(){return Ae},WI:function(){return jt},Wm:function(){return an},Y3:function(){return v},Y8:function(){return tt},YP:function(){return Q},_:function(){return on},aZ:function(){return lt},bv:function(){return Tt},dD:function(){return M},dG:function(){return yn},f3:function(){return z},h:function(){return jn},iD:function(){return Xe},ic:function(){return St},j4:function(){return Ze},kq:function(){return dn},lR:function(){return je},mx:function(){return qt},nK:function(){return ct},uE:function(){return fn},up:function(){return Mt},w5:function(){return V},wg:function(){return ze},wy:function(){return Rt}});var r=n(262),s=n(577);function i(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){a(i,e,n)}return s}function o(t,e,n,r){if((0,s.mf)(t)){const o=i(t,e,n,r);return o&&(0,s.tI)(o)&&o.catch((t=>{a(t,e,n)})),o}const c=[];for(let s=0;s<t.length;s++)c.push(o(t[s],e,n,r));return c}function a(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const s=e.proxy,o=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,s,o))return;r=r.parent}const a=e.appContext.config.errorHandler;if(a)return void i(a,null,10,[t,s,o])}c(t,n,s,r)}function c(t,e,n,r=!0){console.error(t)}let u=!1,l=!1;const h=[];let f=0;const d=[];let p=null,m=0;const g=Promise.resolve();let y=null;function v(t){const e=y||g;return t?e.then(this?t.bind(this):t):e}function w(t){let e=f+1,n=h.length;while(e<n){const r=e+n>>>1,s=I(h[r]);s<t?e=r+1:n=r}return e}function b(t){h.length&&h.includes(t,u&&t.allowRecurse?f+1:f)||(null==t.id?h.push(t):h.splice(w(t.id),0,t),E())}function E(){u||l||(l=!0,y=g.then(A))}function _(t){const e=h.indexOf(t);e>f&&h.splice(e,1)}function T(t){(0,s.kJ)(t)?d.push(...t):p&&p.includes(t,t.allowRecurse?m+1:m)||d.push(t),E()}function C(t,e=(u?f+1:0)){for(0;e<h.length;e++){const t=h[e];t&&t.pre&&(h.splice(e,1),e--,t())}}function S(t){if(d.length){const t=[...new Set(d)];if(d.length=0,p)return void p.push(...t);for(p=t,p.sort(((t,e)=>I(t)-I(e))),m=0;m<p.length;m++)p[m]();p=null,m=0}}const I=t=>null==t.id?1/0:t.id,k=(t,e)=>{const n=I(t)-I(e);if(0===n){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function A(t){l=!1,u=!0,h.sort(k);s.dG;try{for(f=0;f<h.length;f++){const t=h[f];t&&!1!==t.active&&i(t,null,14)}}finally{f=0,h.length=0,S(t),u=!1,y=null,(h.length||d.length)&&A(t)}}new Set;new Map;function D(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||s.kT;let i=n;const a=e.startsWith("update:"),c=a&&e.slice(7);if(c&&c in r){const t=`${"modelValue"===c?"model":c}Modifiers`,{number:e,trim:o}=r[t]||s.kT;o&&(i=n.map((t=>t.trim()))),e&&(i=n.map(s.He))}let u;let l=r[u=(0,s.hR)(e)]||r[u=(0,s.hR)((0,s._A)(e))];!l&&a&&(l=r[u=(0,s.hR)((0,s.rs)(e))]),l&&o(l,t,6,i);const h=r[u+"Once"];if(h){if(t.emitted){if(t.emitted[u])return}else t.emitted={};t.emitted[u]=!0,o(h,t,6,i)}}function N(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(void 0!==i)return i;const o=t.emits;let a={},c=!1;if(!(0,s.mf)(t)){const r=t=>{const n=N(t,e,!0);n&&(c=!0,(0,s.l7)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return o||c?((0,s.kJ)(o)?o.forEach((t=>a[t]=null)):(0,s.l7)(a,o),(0,s.Kn)(t)&&r.set(t,a),a):((0,s.Kn)(t)&&r.set(t,null),null)}function x(t,e){return!(!t||!(0,s.F7)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,s.RI)(t,e[0].toLowerCase()+e.slice(1))||(0,s.RI)(t,(0,s.rs)(e))||(0,s.RI)(t,e))}let R=null,O=null;function L(t){const e=R;return R=t,O=t&&t.type.__scopeId||null,e}function M(t){O=t}function P(){O=null}function V(t,e=R,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&Ye(-1);const s=L(e),i=t(...n);return L(s),r._d&&Ye(1),i};return r._n=!0,r._c=!0,r._d=!0,r}function F(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:o,propsOptions:[c],slots:u,attrs:l,emit:h,render:f,renderCache:d,data:p,setupState:m,ctx:g,inheritAttrs:y}=t;let v,w;const b=L(t);try{if(4&n.shapeFlag){const t=i||r;v=pn(f.call(t,t,d,o,m,p,g)),w=l}else{const t=e;0,v=pn(t.length>1?t(o,{attrs:l,slots:u,emit:h}):t(o,null)),w=e.props?l:U(l)}}catch(_){He.length=0,a(_,t,1),v=an($e)}let E=v;if(w&&!1!==y){const t=Object.keys(w),{shapeFlag:e}=E;t.length&&7&e&&(c&&t.some(s.tR)&&(w=j(w,c)),E=ln(E,w))}return n.dirs&&(E=ln(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),v=E,L(b),v}const U=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,s.F7)(n))&&((e||(e={}))[n]=t[n]);return e},j=(t,e)=>{const n={};for(const r in t)(0,s.tR)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function B(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!s&&!a||a&&a.$stable)||r!==o&&(r?!o||q(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?q(r,o,u):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!x(u,n))return!0}}return!1}function q(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!x(n,i))return!0}return!1}function $({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const K=t=>t.__isSuspense;function H(t,e){e&&e.pendingBranch?(0,s.kJ)(t)?e.effects.push(...t):e.effects.push(t):T(t)}function G(t,e){if(_n){let n=_n.provides;const r=_n.parent&&_n.parent.provides;r===n&&(n=_n.provides=Object.create(r)),n[t]=e}else 0}function z(t,e,n=!1){const r=_n||R;if(r){const i=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&(0,s.mf)(e)?e.call(r.proxy):e}else 0}const W={};function Q(t,e,n){return Y(t,e,n)}function Y(t,e,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=s.kT){const h=_n;let f,d,p=!1,m=!1;if((0,r.dq)(t)?(f=()=>t.value,p=(0,r.yT)(t)):(0,r.PG)(t)?(f=()=>t,a=!0):(0,s.kJ)(t)?(m=!0,p=t.some((t=>(0,r.PG)(t)||(0,r.yT)(t))),f=()=>t.map((t=>(0,r.dq)(t)?t.value:(0,r.PG)(t)?Z(t):(0,s.mf)(t)?i(t,h,2):void 0))):f=(0,s.mf)(t)?e?()=>i(t,h,2):()=>{if(!h||!h.isUnmounted)return d&&d(),o(t,h,3,[g])}:s.dG,e&&a){const t=f;f=()=>Z(t())}let g=t=>{d=E.onStop=()=>{i(t,h,4)}};if(Dn)return g=s.dG,e?n&&o(e,h,3,[f(),m?[]:void 0,g]):f(),s.dG;let y=m?[]:W;const v=()=>{if(E.active)if(e){const t=E.run();(a||p||(m?t.some(((t,e)=>(0,s.aU)(t,y[e]))):(0,s.aU)(t,y)))&&(d&&d(),o(e,h,3,[t,y===W?void 0:y,g]),y=t)}else E.run()};let w;v.allowRecurse=!!e,"sync"===c?w=v:"post"===c?w=()=>ke(v,h&&h.suspense):(v.pre=!0,h&&(v.id=h.uid),w=()=>b(v));const E=new r.qq(f,w);return e?n?v():y=E.run():"post"===c?ke(E.run.bind(E),h&&h.suspense):E.run(),()=>{E.stop(),h&&h.scope&&(0,s.Od)(h.scope.effects,E)}}function J(t,e,n){const r=this.proxy,i=(0,s.HD)(t)?t.includes(".")?X(r,t):()=>r[t]:t.bind(r,r);let o;(0,s.mf)(e)?o=e:(o=e.handler,n=e);const a=_n;Cn(this);const c=Y(i,o.bind(r),n);return a?Cn(a):Sn(),c}function X(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function Z(t,e){if(!(0,s.Kn)(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),(0,r.dq)(t))Z(t.value,e);else if((0,s.kJ)(t))for(let n=0;n<t.length;n++)Z(t[n],e);else if((0,s.DM)(t)||(0,s._N)(t))t.forEach((t=>{Z(t,e)}));else if((0,s.PO)(t))for(const n in t)Z(t[n],e);return t}function tt(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Tt((()=>{t.isMounted=!0})),It((()=>{t.isUnmounting=!0})),t}const et=[Function,Array],nt={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:et,onEnter:et,onAfterEnter:et,onEnterCancelled:et,onBeforeLeave:et,onLeave:et,onAfterLeave:et,onLeaveCancelled:et,onBeforeAppear:et,onAppear:et,onAfterAppear:et,onAppearCancelled:et},setup(t,{slots:e}){const n=Tn(),s=tt();let i;return()=>{const o=e.default&&ut(e.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let t=!1;for(const e of o)if(e.type!==$e){0,a=e,t=!0;break}}const c=(0,r.IU)(t),{mode:u}=c;if(s.isLeaving)return ot(a);const l=at(a);if(!l)return ot(a);const h=it(l,c,s,n);ct(l,h);const f=n.subTree,d=f&&at(f);let p=!1;const{getTransitionKey:m}=l.type;if(m){const t=m();void 0===i?i=t:t!==i&&(i=t,p=!0)}if(d&&d.type!==$e&&(!en(l,d)||p)){const t=it(d,c,s,n);if(ct(d,t),"out-in"===u)return s.isLeaving=!0,t.afterLeave=()=>{s.isLeaving=!1,n.update()},ot(a);"in-out"===u&&l.type!==$e&&(t.delayLeave=(t,e,n)=>{const r=st(s,d);r[String(d.key)]=d,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},rt=nt;function st(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function it(t,e,n,r){const{appear:i,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:y,onAppear:v,onAfterAppear:w,onAppearCancelled:b}=e,E=String(t.key),_=st(n,t),T=(t,e)=>{t&&o(t,r,9,e)},C=(t,e)=>{const n=e[1];T(t,e),(0,s.kJ)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},S={mode:a,persisted:c,beforeEnter(e){let r=u;if(!n.isMounted){if(!i)return;r=y||u}e._leaveCb&&e._leaveCb(!0);const s=_[E];s&&en(t,s)&&s.el._leaveCb&&s.el._leaveCb(),T(r,[e])},enter(t){let e=l,r=h,s=f;if(!n.isMounted){if(!i)return;e=v||l,r=w||h,s=b||f}let o=!1;const a=t._enterCb=e=>{o||(o=!0,T(e?s:r,[t]),S.delayedLeave&&S.delayedLeave(),t._enterCb=void 0)};e?C(e,[t,a]):a()},leave(e,r){const s=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();T(d,[e]);let i=!1;const o=e._leaveCb=n=>{i||(i=!0,r(),T(n?g:m,[e]),e._leaveCb=void 0,_[s]===t&&delete _[s])};_[s]=t,p?C(p,[e,o]):o()},clone(t){return it(t,e,n,r)}};return S}function ot(t){if(ft(t))return t=ln(t),t.children=null,t}function at(t){return ft(t)?t.children?t.children[0]:void 0:t}function ct(t,e){6&t.shapeFlag&&t.component?ct(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ut(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:i);o.type===Be?(128&o.patchFlag&&s++,r=r.concat(ut(o.children,e,a))):(e||o.type!==$e)&&r.push(null!=a?ln(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function lt(t){return(0,s.mf)(t)?{setup:t,name:t.name}:t}const ht=t=>!!t.type.__asyncLoader;const ft=t=>t.type.__isKeepAlive;RegExp,RegExp;function dt(t,e){return(0,s.kJ)(t)?t.some((t=>dt(t,e))):(0,s.HD)(t)?t.split(",").includes(e):!!t.test&&t.test(e)}function pt(t,e){gt(t,"a",e)}function mt(t,e){gt(t,"da",e)}function gt(t,e,n=_n){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(bt(e,r,n),n){let t=n.parent;while(t&&t.parent)ft(t.parent.vnode)&&yt(r,e,n,t),t=t.parent}}function yt(t,e,n,r){const i=bt(e,t,r,!0);kt((()=>{(0,s.Od)(r[e],i)}),n)}function vt(t){let e=t.shapeFlag;256&e&&(e-=256),512&e&&(e-=512),t.shapeFlag=e}function wt(t){return 128&t.shapeFlag?t.ssContent:t}function bt(t,e,n=_n,s=!1){if(n){const i=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...s)=>{if(n.isUnmounted)return;(0,r.Jd)(),Cn(n);const i=o(e,n,t,s);return Sn(),(0,r.lk)(),i});return s?i.unshift(a):i.push(a),a}}const Et=t=>(e,n=_n)=>(!Dn||"sp"===t)&&bt(t,e,n),_t=Et("bm"),Tt=Et("m"),Ct=Et("bu"),St=Et("u"),It=Et("bum"),kt=Et("um"),At=Et("sp"),Dt=Et("rtg"),Nt=Et("rtc");function xt(t,e=_n){bt("ec",t,e)}function Rt(t,e){const n=R;if(null===n)return t;const r=Pn(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,n,a,c=s.kT]=e[o];(0,s.mf)(t)&&(t={mounted:t,updated:t}),t.deep&&Z(n),i.push({dir:t,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c})}return t}function Ot(t,e,n,s){const i=t.dirs,a=e&&e.dirs;for(let c=0;c<i.length;c++){const u=i[c];a&&(u.oldValue=a[c].value);let l=u.dir[s];l&&((0,r.Jd)(),o(l,n,8,[t.el,u,t,e]),(0,r.lk)())}}const Lt="components";function Mt(t,e){return Vt(Lt,t,!0,e)||t}const Pt=Symbol();function Vt(t,e,n=!0,r=!1){const i=R||_n;if(i){const n=i.type;if(t===Lt){const t=Vn(n,!1);if(t&&(t===e||t===(0,s._A)(e)||t===(0,s.kC)((0,s._A)(e))))return n}const o=Ft(i[t]||n[t],e)||Ft(i.appContext[t],e);return!o&&r?n:o}}function Ft(t,e){return t&&(t[e]||t[(0,s._A)(e)]||t[(0,s.kC)((0,s._A)(e))])}function Ut(t,e,n,r){let i;const o=n&&n[r];if((0,s.kJ)(t)||(0,s.HD)(t)){i=new Array(t.length);for(let n=0,r=t.length;n<r;n++)i[n]=e(t[n],n,void 0,o&&o[n])}else if("number"===typeof t){0,i=new Array(t);for(let n=0;n<t;n++)i[n]=e(n+1,n,void 0,o&&o[n])}else if((0,s.Kn)(t))if(t[Symbol.iterator])i=Array.from(t,((t,n)=>e(t,n,void 0,o&&o[n])));else{const n=Object.keys(t);i=new Array(n.length);for(let r=0,s=n.length;r<s;r++){const s=n[r];i[r]=e(t[s],s,r,o&&o[r])}}else i=[];return n&&(n[r]=i),i}function jt(t,e,n={},r,s){if(R.isCE||R.parent&&ht(R.parent)&&R.parent.isCE)return an("slot","default"===e?null:{name:e},r&&r());let i=t[e];i&&i._c&&(i._d=!1),ze();const o=i&&Bt(i(n)),a=Ze(Be,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&1===t._?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Bt(t){return t.some((t=>!tn(t)||t.type!==$e&&!(t.type===Be&&!Bt(t.children))))?t:null}function qt(t,e){const n={};for(const r in t)n[e&&/[A-Z]/.test(r)?`on:${r}`:(0,s.hR)(r)]=t[r];return n}const $t=t=>t?In(t)?Pn(t)||t.proxy:$t(t.parent):null,Kt=(0,s.l7)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>$t(t.parent),$root:t=>$t(t.root),$emit:t=>t.emit,$options:t=>Jt(t),$forceUpdate:t=>t.f||(t.f=()=>b(t.update)),$nextTick:t=>t.n||(t.n=v.bind(t.proxy)),$watch:t=>J.bind(t)}),Ht={get({_:t},e){const{ctx:n,setupState:i,data:o,props:a,accessCache:c,type:u,appContext:l}=t;let h;if("$"!==e[0]){const r=c[e];if(void 0!==r)switch(r){case 1:return i[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(i!==s.kT&&(0,s.RI)(i,e))return c[e]=1,i[e];if(o!==s.kT&&(0,s.RI)(o,e))return c[e]=2,o[e];if((h=t.propsOptions[0])&&(0,s.RI)(h,e))return c[e]=3,a[e];if(n!==s.kT&&(0,s.RI)(n,e))return c[e]=4,n[e];Gt&&(c[e]=0)}}const f=Kt[e];let d,p;return f?("$attrs"===e&&(0,r.j)(t,"get",e),f(t)):(d=u.__cssModules)&&(d=d[e])?d:n!==s.kT&&(0,s.RI)(n,e)?(c[e]=4,n[e]):(p=l.config.globalProperties,(0,s.RI)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:i,ctx:o}=t;return i!==s.kT&&(0,s.RI)(i,e)?(i[e]=n,!0):r!==s.kT&&(0,s.RI)(r,e)?(r[e]=n,!0):!(0,s.RI)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:o}},a){let c;return!!n[a]||t!==s.kT&&(0,s.RI)(t,a)||e!==s.kT&&(0,s.RI)(e,a)||(c=o[0])&&(0,s.RI)(c,a)||(0,s.RI)(r,a)||(0,s.RI)(Kt,a)||(0,s.RI)(i.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,s.RI)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Gt=!0;function zt(t){const e=Jt(t),n=t.proxy,i=t.ctx;Gt=!1,e.beforeCreate&&Qt(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:f,beforeMount:d,mounted:p,beforeUpdate:m,updated:g,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:b,destroyed:E,unmounted:_,render:T,renderTracked:C,renderTriggered:S,errorCaptured:I,serverPrefetch:k,expose:A,inheritAttrs:D,components:N,directives:x,filters:R}=e,O=null;if(h&&Wt(h,i,O,t.appContext.config.unwrapInjectedRef),c)for(const r in c){const t=c[r];(0,s.mf)(t)&&(i[r]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,s.Kn)(e)&&(t.data=(0,r.qj)(e))}if(Gt=!0,a)for(const r in a){const t=a[r],e=(0,s.mf)(t)?t.bind(n,n):(0,s.mf)(t.get)?t.get.bind(n,n):s.dG;0;const o=!(0,s.mf)(t)&&(0,s.mf)(t.set)?t.set.bind(n):s.dG,c=Un({get:e,set:o});Object.defineProperty(i,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(u)for(const r in u)Yt(u[r],i,n,r);if(l){const t=(0,s.mf)(l)?l.call(n):l;Reflect.ownKeys(t).forEach((e=>{G(e,t[e])}))}function L(t,e){(0,s.kJ)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(f&&Qt(f,t,"c"),L(_t,d),L(Tt,p),L(Ct,m),L(St,g),L(pt,y),L(mt,v),L(xt,I),L(Nt,C),L(Dt,S),L(It,b),L(kt,_),L(At,k),(0,s.kJ)(A))if(A.length){const e=t.exposed||(t.exposed={});A.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});T&&t.render===s.dG&&(t.render=T),null!=D&&(t.inheritAttrs=D),N&&(t.components=N),x&&(t.directives=x)}function Wt(t,e,n=s.dG,i=!1){(0,s.kJ)(t)&&(t=ne(t));for(const o in t){const n=t[o];let a;a=(0,s.Kn)(n)?"default"in n?z(n.from||o,n.default,!0):z(n.from||o):z(n),(0,r.dq)(a)&&i?Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t}):e[o]=a}}function Qt(t,e,n){o((0,s.kJ)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function Yt(t,e,n,r){const i=r.includes(".")?X(n,r):()=>n[r];if((0,s.HD)(t)){const n=e[t];(0,s.mf)(n)&&Q(i,n)}else if((0,s.mf)(t))Q(i,t.bind(n));else if((0,s.Kn)(t))if((0,s.kJ)(t))t.forEach((t=>Yt(t,e,n,r)));else{const r=(0,s.mf)(t.handler)?t.handler.bind(n):e[t.handler];(0,s.mf)(r)&&Q(i,r,t)}else 0}function Jt(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let u;return c?u=c:i.length||n||r?(u={},i.length&&i.forEach((t=>Xt(u,t,a,!0))),Xt(u,e,a)):u=e,(0,s.Kn)(e)&&o.set(e,u),u}function Xt(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Xt(t,i,n,!0),s&&s.forEach((e=>Xt(t,e,n,!0)));for(const o in e)if(r&&"expose"===o);else{const r=Zt[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const Zt={data:te,props:se,emits:se,methods:se,computed:se,beforeCreate:re,created:re,beforeMount:re,mounted:re,beforeUpdate:re,updated:re,beforeDestroy:re,beforeUnmount:re,destroyed:re,unmounted:re,activated:re,deactivated:re,errorCaptured:re,serverPrefetch:re,components:se,directives:se,watch:ie,provide:te,inject:ee};function te(t,e){return e?t?function(){return(0,s.l7)((0,s.mf)(t)?t.call(this,this):t,(0,s.mf)(e)?e.call(this,this):e)}:e:t}function ee(t,e){return se(ne(t),ne(e))}function ne(t){if((0,s.kJ)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function re(t,e){return t?[...new Set([].concat(t,e))]:e}function se(t,e){return t?(0,s.l7)((0,s.l7)(Object.create(null),t),e):e}function ie(t,e){if(!t)return e;if(!e)return t;const n=(0,s.l7)(Object.create(null),t);for(const r in e)n[r]=re(t[r],e[r]);return n}function oe(t,e,n,i=!1){const o={},a={};(0,s.Nj)(a,nn,1),t.propsDefaults=Object.create(null),ce(t,e,o,a);for(const r in t.propsOptions[0])r in o||(o[r]=void 0);n?t.props=i?o:(0,r.Um)(o):t.type.props?t.props=o:t.props=a,t.attrs=a}function ae(t,e,n,i){const{props:o,attrs:a,vnode:{patchFlag:c}}=t,u=(0,r.IU)(o),[l]=t.propsOptions;let h=!1;if(!(i||c>0)||16&c){let r;ce(t,e,o,a)&&(h=!0);for(const i in u)e&&((0,s.RI)(e,i)||(r=(0,s.rs)(i))!==i&&(0,s.RI)(e,r))||(l?!n||void 0===n[i]&&void 0===n[r]||(o[i]=ue(l,u,i,void 0,t,!0)):delete o[i]);if(a!==u)for(const t in a)e&&(0,s.RI)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let i=n[r];if(x(t.emitsOptions,i))continue;const c=e[i];if(l)if((0,s.RI)(a,i))c!==a[i]&&(a[i]=c,h=!0);else{const e=(0,s._A)(i);o[e]=ue(l,u,e,c,t,!1)}else c!==a[i]&&(a[i]=c,h=!0)}}h&&(0,r.X$)(t,"set","$attrs")}function ce(t,e,n,i){const[o,a]=t.propsOptions;let c,u=!1;if(e)for(let r in e){if((0,s.Gg)(r))continue;const l=e[r];let h;o&&(0,s.RI)(o,h=(0,s._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:x(t.emitsOptions,r)||r in i&&l===i[r]||(i[r]=l,u=!0)}if(a){const e=(0,r.IU)(n),i=c||s.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=ue(o,e,c,i[c],t,!(0,s.RI)(i,c))}}return u}function ue(t,e,n,r,i,o){const a=t[n];if(null!=a){const t=(0,s.RI)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&(0,s.mf)(t)){const{propsDefaults:s}=i;n in s?r=s[n]:(Cn(i),r=s[n]=t.call(null,e),Sn())}else r=t}a[0]&&(o&&!t?r=!1:!a[1]||""!==r&&r!==(0,s.rs)(n)||(r=!0))}return r}function le(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const o=t.props,a={},c=[];let u=!1;if(!(0,s.mf)(t)){const r=t=>{u=!0;const[n,r]=le(t,e,!0);(0,s.l7)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!o&&!u)return(0,s.Kn)(t)&&r.set(t,s.Z6),s.Z6;if((0,s.kJ)(o))for(let h=0;h<o.length;h++){0;const t=(0,s._A)(o[h]);he(t)&&(a[t]=s.kT)}else if(o){0;for(const t in o){const e=(0,s._A)(t);if(he(e)){const n=o[t],r=a[e]=(0,s.kJ)(n)||(0,s.mf)(n)?{type:n}:n;if(r){const t=pe(Boolean,r.type),n=pe(String,r.type);r[0]=t>-1,r[1]=n<0||t<n,(t>-1||(0,s.RI)(r,"default"))&&c.push(e)}}}}const l=[a,c];return(0,s.Kn)(t)&&r.set(t,l),l}function he(t){return"$"!==t[0]}function fe(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:null===t?"null":""}function de(t,e){return fe(t)===fe(e)}function pe(t,e){return(0,s.kJ)(e)?e.findIndex((e=>de(e,t))):(0,s.mf)(e)&&de(e,t)?0:-1}const me=t=>"_"===t[0]||"$stable"===t,ge=t=>(0,s.kJ)(t)?t.map(pn):[pn(t)],ye=(t,e,n)=>{if(e._n)return e;const r=V(((...t)=>ge(e(...t))),n);return r._c=!1,r},ve=(t,e,n)=>{const r=t._ctx;for(const i in t){if(me(i))continue;const n=t[i];if((0,s.mf)(n))e[i]=ye(i,n,r);else if(null!=n){0;const t=ge(n);e[i]=()=>t}}},we=(t,e)=>{const n=ge(e);t.slots.default=()=>n},be=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=(0,r.IU)(e),(0,s.Nj)(e,"_",n)):ve(e,t.slots={})}else t.slots={},e&&we(t,e);(0,s.Nj)(t.slots,nn,1)},Ee=(t,e,n)=>{const{vnode:r,slots:i}=t;let o=!0,a=s.kT;if(32&r.shapeFlag){const t=e._;t?n&&1===t?o=!1:((0,s.l7)(i,e),n||1!==t||delete i._):(o=!e.$stable,ve(e,i)),a=e}else e&&(we(t,e),a={default:1});if(o)for(const s in i)me(s)||s in a||delete i[s]};function _e(){return{app:null,config:{isNativeTag:s.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Te=0;function Ce(t,e){return function(n,r=null){(0,s.mf)(n)||(n=Object.assign({},n)),null==r||(0,s.Kn)(r)||(r=null);const i=_e(),o=new Set;let a=!1;const c=i.app={_uid:Te++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Bn,get config(){return i.config},set config(t){0},use(t,...e){return o.has(t)||(t&&(0,s.mf)(t.install)?(o.add(t),t.install(c,...e)):(0,s.mf)(t)&&(o.add(t),t(c,...e))),c},mixin(t){return i.mixins.includes(t)||i.mixins.push(t),c},component(t,e){return e?(i.components[t]=e,c):i.components[t]},directive(t,e){return e?(i.directives[t]=e,c):i.directives[t]},mount(s,o,u){if(!a){0;const l=an(n,r);return l.appContext=i,o&&e?e(l,s):t(l,s,u),a=!0,c._container=s,s.__vue_app__=c,Pn(l.component)||l.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return i.provides[t]=e,c}};return c}}function Se(t,e,n,o,a=!1){if((0,s.kJ)(t))return void t.forEach(((t,r)=>Se(t,e&&((0,s.kJ)(e)?e[r]:e),n,o,a)));if(ht(o)&&!a)return;const c=4&o.shapeFlag?Pn(o.component)||o.component.proxy:o.el,u=a?null:c,{i:l,r:h}=t;const f=e&&e.r,d=l.refs===s.kT?l.refs={}:l.refs,p=l.setupState;if(null!=f&&f!==h&&((0,s.HD)(f)?(d[f]=null,(0,s.RI)(p,f)&&(p[f]=null)):(0,r.dq)(f)&&(f.value=null)),(0,s.mf)(h))i(h,l,12,[u,d]);else{const e=(0,s.HD)(h),i=(0,r.dq)(h);if(e||i){const r=()=>{if(t.f){const n=e?d[h]:h.value;a?(0,s.kJ)(n)&&(0,s.Od)(n,c):(0,s.kJ)(n)?n.includes(c)||n.push(c):e?(d[h]=[c],(0,s.RI)(p,h)&&(p[h]=d[h])):(h.value=[c],t.k&&(d[t.k]=h.value))}else e?(d[h]=u,(0,s.RI)(p,h)&&(p[h]=u)):i&&(h.value=u,t.k&&(d[t.k]=u))};u?(r.id=-1,ke(r,n)):r()}else 0}}function Ie(){}const ke=H;function Ae(t){return De(t)}function De(t,e){Ie();const n=(0,s.E9)();n.__VUE__=!0;const{insert:i,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:f,parentNode:d,nextSibling:p,setScopeId:m=s.dG,cloneNode:g,insertStaticContent:y}=t,v=(t,e,n,r=null,s=null,i=null,o=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!en(t,e)&&(r=Z(t),W(t,s,i,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case qe:w(t,e,n,r);break;case $e:E(t,e,n,r);break;case Ke:null==t&&T(e,n,r,o);break;case Be:M(t,e,n,r,s,i,o,a,c);break;default:1&h?A(t,e,n,r,s,i,o,a,c):6&h?P(t,e,n,r,s,i,o,a,c):(64&h||128&h)&&u.process(t,e,n,r,s,i,o,a,c,et)}null!=l&&s&&Se(l,t&&t.ref,i,e||t,!e)},w=(t,e,n,r)=>{if(null==t)i(e.el=u(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},E=(t,e,n,r)=>{null==t?i(e.el=l(e.children||""),n,r):e.el=t.el},T=(t,e,n,r)=>{[t.el,t.anchor]=y(t.children,e,n,r,t.el,t.anchor)},I=({el:t,anchor:e},n,r)=>{let s;while(t&&t!==e)s=p(t),i(t,n,r),t=s;i(e,n,r)},k=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},A=(t,e,n,r,s,i,o,a,c)=>{o=o||"svg"===e.type,null==t?D(e,n,r,s,i,o,a,c):R(t,e,s,i,o,a,c)},D=(t,e,n,r,o,u,l,h)=>{let d,p;const{type:m,props:y,shapeFlag:v,transition:w,patchFlag:b,dirs:E}=t;if(t.el&&void 0!==g&&-1===b)d=t.el=g(t.el);else{if(d=t.el=c(t.type,u,y&&y.is,y),8&v?f(d,t.children):16&v&&x(t.children,d,null,r,o,u&&"foreignObject"!==m,l,h),E&&Ot(t,null,r,"created"),y){for(const e in y)"value"===e||(0,s.Gg)(e)||a(d,e,null,y[e],u,t.children,r,o,X);"value"in y&&a(d,"value",null,y.value),(p=y.onVnodeBeforeMount)&&vn(p,r,t)}N(d,t,t.scopeId,l,r)}E&&Ot(t,null,r,"beforeMount");const _=(!o||o&&!o.pendingBranch)&&w&&!w.persisted;_&&w.beforeEnter(d),i(d,e,n),((p=y&&y.onVnodeMounted)||_||E)&&ke((()=>{p&&vn(p,r,t),_&&w.enter(d),E&&Ot(t,null,r,"mounted")}),o)},N=(t,e,n,r,s)=>{if(n&&m(t,n),r)for(let i=0;i<r.length;i++)m(t,r[i]);if(s){let n=s.subTree;if(e===n){const e=s.vnode;N(t,e,e.scopeId,e.slotScopeIds,s.parent)}}},x=(t,e,n,r,s,i,o,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?mn(t[u]):pn(t[u]);v(null,c,e,n,r,s,i,o,a)}},R=(t,e,n,r,i,o,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:d}=e;l|=16&t.patchFlag;const p=t.props||s.kT,m=e.props||s.kT;let g;n&&Ne(n,!1),(g=m.onVnodeBeforeUpdate)&&vn(g,n,e,t),d&&Ot(e,t,n,"beforeUpdate"),n&&Ne(n,!0);const y=i&&"foreignObject"!==e.type;if(h?O(t.dynamicChildren,h,u,n,r,y,o):c||K(t,e,u,null,n,r,y,o,!1),l>0){if(16&l)L(u,e,p,m,n,r,i);else if(2&l&&p.class!==m.class&&a(u,"class",null,m.class,i),4&l&&a(u,"style",p.style,m.style,i),8&l){const s=e.dynamicProps;for(let e=0;e<s.length;e++){const o=s[e],c=p[o],l=m[o];l===c&&"value"!==o||a(u,o,c,l,i,t.children,n,r,X)}}1&l&&t.children!==e.children&&f(u,e.children)}else c||null!=h||L(u,e,p,m,n,r,i);((g=m.onVnodeUpdated)||d)&&ke((()=>{g&&vn(g,n,e,t),d&&Ot(e,t,n,"updated")}),r)},O=(t,e,n,r,s,i,o)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===Be||!en(c,u)||70&c.shapeFlag)?d(c.el):n;v(c,u,l,null,r,s,i,o,!0)}},L=(t,e,n,r,i,o,c)=>{if(n!==r){for(const u in r){if((0,s.Gg)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(t,u,h,l,c,e.children,i,o,X)}if(n!==s.kT)for(const u in n)(0,s.Gg)(u)||u in r||a(t,u,n[u],null,c,e.children,i,o,X);"value"in r&&a(t,"value",n.value,r.value)}},M=(t,e,n,r,s,o,a,c,l)=>{const h=e.el=t?t.el:u(""),f=e.anchor=t?t.anchor:u("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:m}=e;m&&(c=c?c.concat(m):m),null==t?(i(h,n,r),i(f,n,r),x(e.children,n,f,s,o,a,c,l)):d>0&&64&d&&p&&t.dynamicChildren?(O(t.dynamicChildren,p,n,s,o,a,c),(null!=e.key||s&&e===s.subTree)&&xe(t,e,!0)):K(t,e,n,f,s,o,a,c,l)},P=(t,e,n,r,s,i,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?s.ctx.activate(e,n,r,o,c):V(e,n,r,s,i,o,c):U(t,e,c)},V=(t,e,n,r,s,i,o)=>{const a=t.component=En(t,r,s);if(ft(t)&&(a.ctx.renderer=et),Nn(a),a.asyncDep){if(s&&s.registerDep(a,j),!t.el){const t=a.subTree=an($e);E(null,t,e,n)}}else j(a,t,e,n,s,i,o)},U=(t,e,n)=>{const r=e.component=t.component;if(B(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void q(r,e,n);r.next=e,_(r.update),r.update()}else e.el=t.el,r.vnode=e},j=(t,e,n,i,o,a,c)=>{const u=()=>{if(t.isMounted){let e,{next:n,bu:r,u:i,parent:u,vnode:l}=t,h=n;0,Ne(t,!1),n?(n.el=l.el,q(t,n,c)):n=l,r&&(0,s.ir)(r),(e=n.props&&n.props.onVnodeBeforeUpdate)&&vn(e,u,n,l),Ne(t,!0);const f=F(t);0;const p=t.subTree;t.subTree=f,v(p,f,d(p.el),Z(p),t,o,a),n.el=f.el,null===h&&$(t,f.el),i&&ke(i,o),(e=n.props&&n.props.onVnodeUpdated)&&ke((()=>vn(e,u,n,l)),o)}else{let r;const{el:c,props:u}=e,{bm:l,m:h,parent:f}=t,d=ht(e);if(Ne(t,!1),l&&(0,s.ir)(l),!d&&(r=u&&u.onVnodeBeforeMount)&&vn(r,f,e),Ne(t,!0),c&&rt){const n=()=>{t.subTree=F(t),rt(c,t.subTree,t,o,null)};d?e.type.__asyncLoader().then((()=>!t.isUnmounted&&n())):n()}else{0;const r=t.subTree=F(t);0,v(null,r,n,i,t,o,a),e.el=r.el}if(h&&ke(h,o),!d&&(r=u&&u.onVnodeMounted)){const t=e;ke((()=>vn(r,f,t)),o)}(256&e.shapeFlag||f&&ht(f.vnode)&&256&f.vnode.shapeFlag)&&t.a&&ke(t.a,o),t.isMounted=!0,e=n=i=null}},l=t.effect=new r.qq(u,(()=>b(h)),t.scope),h=t.update=()=>l.run();h.id=t.uid,Ne(t,!0),h()},q=(t,e,n)=>{e.component=t;const s=t.vnode.props;t.vnode=e,t.next=null,ae(t,e.props,s,n),Ee(t,e.children,n),(0,r.Jd)(),C(),(0,r.lk)()},K=(t,e,n,r,s,i,o,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,h=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void G(u,h,n,r,s,i,o,a,c);if(256&d)return void H(u,h,n,r,s,i,o,a,c)}8&p?(16&l&&X(u,s,i),h!==u&&f(n,h)):16&l?16&p?G(u,h,n,r,s,i,o,a,c):X(u,s,i,!0):(8&l&&f(n,""),16&p&&x(h,n,r,s,i,o,a,c))},H=(t,e,n,r,i,o,a,c,u)=>{t=t||s.Z6,e=e||s.Z6;const l=t.length,h=e.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const r=e[d]=u?mn(e[d]):pn(e[d]);v(t[d],r,n,null,i,o,a,c,u)}l>h?X(t,i,o,!0,!1,f):x(e,n,r,i,o,a,c,u,f)},G=(t,e,n,r,i,o,a,c,u)=>{let l=0;const h=e.length;let f=t.length-1,d=h-1;while(l<=f&&l<=d){const r=t[l],s=e[l]=u?mn(e[l]):pn(e[l]);if(!en(r,s))break;v(r,s,n,null,i,o,a,c,u),l++}while(l<=f&&l<=d){const r=t[f],s=e[d]=u?mn(e[d]):pn(e[d]);if(!en(r,s))break;v(r,s,n,null,i,o,a,c,u),f--,d--}if(l>f){if(l<=d){const t=d+1,s=t<h?e[t].el:r;while(l<=d)v(null,e[l]=u?mn(e[l]):pn(e[l]),n,s,i,o,a,c,u),l++}}else if(l>d)while(l<=f)W(t[l],i,o,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=d;l++){const t=e[l]=u?mn(e[l]):pn(e[l]);null!=t.key&&g.set(t.key,l)}let y,w=0;const b=d-m+1;let E=!1,_=0;const T=new Array(b);for(l=0;l<b;l++)T[l]=0;for(l=p;l<=f;l++){const r=t[l];if(w>=b){W(r,i,o,!0);continue}let s;if(null!=r.key)s=g.get(r.key);else for(y=m;y<=d;y++)if(0===T[y-m]&&en(r,e[y])){s=y;break}void 0===s?W(r,i,o,!0):(T[s-m]=l+1,s>=_?_=s:E=!0,v(r,e[s],n,null,i,o,a,c,u),w++)}const C=E?Re(T):s.Z6;for(y=C.length-1,l=b-1;l>=0;l--){const t=m+l,s=e[t],f=t+1<h?e[t+1].el:r;0===T[l]?v(null,s,n,f,i,o,a,c,u):E&&(y<0||l!==C[y]?z(s,n,f,2):y--)}}},z=(t,e,n,r,s=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void z(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,et);if(a===Be){i(o,e,n);for(let t=0;t<u.length;t++)z(u[t],e,n,r);return void i(t.anchor,e,n)}if(a===Ke)return void I(t,e,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),i(o,e,n),ke((()=>c.enter(o)),s);else{const{leave:t,delayLeave:r,afterLeave:s}=c,a=()=>i(o,e,n),u=()=>{t(o,(()=>{a(),s&&s()}))};r?r(o,a,u):u()}else i(o,e,n)},W=(t,e,n,r=!1,s=!1)=>{const{type:i,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:f}=t;if(null!=a&&Se(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const d=1&l&&f,p=!ht(t);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&vn(m,e,t),6&l)J(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);d&&Ot(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,s,et,r):u&&(i!==Be||h>0&&64&h)?X(u,e,n,!1,!0):(i===Be&&384&h||!s&&16&l)&&X(c,e,n),r&&Q(t)}(p&&(m=o&&o.onVnodeUnmounted)||d)&&ke((()=>{m&&vn(m,e,t),d&&Ot(t,null,e,"unmounted")}),n)},Q=t=>{const{type:e,el:n,anchor:r,transition:s}=t;if(e===Be)return void Y(n,r);if(e===Ke)return void k(t);const i=()=>{o(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&t.shapeFlag&&s&&!s.persisted){const{leave:e,delayLeave:r}=s,o=()=>e(n,i);r?r(t.el,i,o):o()}else i()},Y=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},J=(t,e,n)=>{const{bum:r,scope:i,update:o,subTree:a,um:c}=t;r&&(0,s.ir)(r),i.stop(),o&&(o.active=!1,W(a,t,e,n)),c&&ke(c,e),ke((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},X=(t,e,n,r=!1,s=!1,i=0)=>{for(let o=i;o<t.length;o++)W(t[o],e,n,r,s)},Z=t=>6&t.shapeFlag?Z(t.component.subTree):128&t.shapeFlag?t.suspense.next():p(t.anchor||t.el),tt=(t,e,n)=>{null==t?e._vnode&&W(e._vnode,null,null,!0):v(e._vnode||null,t,e,null,null,null,n),C(),S(),e._vnode=t},et={p:v,um:W,m:z,r:Q,mt:V,mc:x,pc:K,pbc:O,n:Z,o:t};let nt,rt;return e&&([nt,rt]=e(et)),{render:tt,hydrate:nt,createApp:Ce(tt,nt)}}function Ne({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function xe(t,e,n=!1){const r=t.children,i=e.children;if((0,s.kJ)(r)&&(0,s.kJ)(i))for(let s=0;s<r.length;s++){const t=r[s];let e=i[s];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=i[s]=mn(i[s]),e.el=t.el),n||xe(t,e))}}function Re(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}i=0,o=n.length-1;while(i<o)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}i=n.length,o=n[i-1];while(i-- >0)n[i]=o,o=e[o];return n}const Oe=t=>t.__isTeleport,Le=t=>t&&(t.disabled||""===t.disabled),Me=t=>"undefined"!==typeof SVGElement&&t instanceof SVGElement,Pe=(t,e)=>{const n=t&&t.to;if((0,s.HD)(n)){if(e){const t=e(n);return t}return null}return n},Ve={__isTeleport:!0,process(t,e,n,r,s,i,o,a,c,u){const{mc:l,pc:h,pbc:f,o:{insert:d,querySelector:p,createText:m,createComment:g}}=u,y=Le(e.props);let{shapeFlag:v,children:w,dynamicChildren:b}=e;if(null==t){const t=e.el=m(""),u=e.anchor=m("");d(t,n,r),d(u,n,r);const h=e.target=Pe(e.props,p),f=e.targetAnchor=m("");h&&(d(f,h),o=o||Me(h));const g=(t,e)=>{16&v&&l(w,t,e,s,i,o,a,c)};y?g(n,u):h&&g(h,f)}else{e.el=t.el;const r=e.anchor=t.anchor,l=e.target=t.target,d=e.targetAnchor=t.targetAnchor,m=Le(t.props),g=m?n:l,v=m?r:d;if(o=o||Me(l),b?(f(t.dynamicChildren,b,g,s,i,o,a),xe(t,e,!0)):c||h(t,e,g,v,s,i,o,a,!1),y)m||Fe(e,n,r,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const t=e.target=Pe(e.props,p);t&&Fe(e,t,null,u,0)}else m&&Fe(e,l,d,u,1)}},remove(t,e,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:a,children:c,anchor:u,targetAnchor:l,target:h,props:f}=t;if(h&&i(l),(o||!Le(f))&&(i(u),16&a))for(let d=0;d<c.length;d++){const t=c[d];s(t,e,n,!0,!!t.dynamicChildren)}},move:Fe,hydrate:Ue};function Fe(t,e,n,{o:{insert:r},m:s},i=2){0===i&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:u,props:l}=t,h=2===i;if(h&&r(o,e,n),(!h||Le(l))&&16&c)for(let f=0;f<u.length;f++)s(u[f],e,n,2);h&&r(a,e,n)}function Ue(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:c}},u){const l=e.target=Pe(e.props,c);if(l){const c=l._lpa||l.firstChild;if(16&e.shapeFlag)if(Le(e.props))e.anchor=u(o(t),e,a(t),n,r,s,i),e.targetAnchor=c;else{e.anchor=o(t);let a=c;while(a)if(a=o(a),a&&8===a.nodeType&&"teleport anchor"===a.data){e.targetAnchor=a,l._lpa=e.targetAnchor&&o(e.targetAnchor);break}u(c,e,l,n,r,s,i)}}return e.anchor&&o(e.anchor)}const je=Ve,Be=Symbol(void 0),qe=Symbol(void 0),$e=Symbol(void 0),Ke=Symbol(void 0),He=[];let Ge=null;function ze(t=!1){He.push(Ge=t?null:[])}function We(){He.pop(),Ge=He[He.length-1]||null}let Qe=1;function Ye(t){Qe+=t}function Je(t){return t.dynamicChildren=Qe>0?Ge||s.Z6:null,We(),Qe>0&&Ge&&Ge.push(t),t}function Xe(t,e,n,r,s,i){return Je(on(t,e,n,r,s,i,!0))}function Ze(t,e,n,r,s){return Je(an(t,e,n,r,s,!0))}function tn(t){return!!t&&!0===t.__v_isVNode}function en(t,e){return t.type===e.type&&t.key===e.key}const nn="__vInternal",rn=({key:t})=>null!=t?t:null,sn=({ref:t,ref_key:e,ref_for:n})=>null!=t?(0,s.HD)(t)||(0,r.dq)(t)||(0,s.mf)(t)?{i:R,r:t,k:e,f:!!n}:t:null;function on(t,e=null,n=null,r=0,i=null,o=(t===Be?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&rn(e),ref:e&&sn(e),scopeId:O,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return c?(gn(u,n),128&o&&t.normalize(u)):n&&(u.shapeFlag|=(0,s.HD)(n)?8:16),Qe>0&&!a&&Ge&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Ge.push(u),u}const an=cn;function cn(t,e=null,n=null,i=0,o=null,a=!1){if(t&&t!==Pt||(t=$e),tn(t)){const r=ln(t,e,!0);return n&&gn(r,n),Qe>0&&!a&&Ge&&(6&r.shapeFlag?Ge[Ge.indexOf(t)]=r:Ge.push(r)),r.patchFlag|=-2,r}if(Fn(t)&&(t=t.__vccOpts),e){e=un(e);let{class:t,style:n}=e;t&&!(0,s.HD)(t)&&(e.class=(0,s.C_)(t)),(0,s.Kn)(n)&&((0,r.X3)(n)&&!(0,s.kJ)(n)&&(n=(0,s.l7)({},n)),e.style=(0,s.j5)(n))}const c=(0,s.HD)(t)?1:K(t)?128:Oe(t)?64:(0,s.Kn)(t)?4:(0,s.mf)(t)?2:0;return on(t,e,n,i,o,c,a,!0)}function un(t){return t?(0,r.X3)(t)||nn in t?(0,s.l7)({},t):t:null}function ln(t,e,n=!1){const{props:r,ref:i,patchFlag:o,children:a}=t,c=e?yn(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&rn(c),ref:e&&e.ref?n&&i?(0,s.kJ)(i)?i.concat(sn(e)):[i,sn(e)]:sn(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Be?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ln(t.ssContent),ssFallback:t.ssFallback&&ln(t.ssFallback),el:t.el,anchor:t.anchor};return u}function hn(t=" ",e=0){return an(qe,null,t,e)}function fn(t,e){const n=an(Ke,null,t);return n.staticCount=e,n}function dn(t="",e=!1){return e?(ze(),Ze($e,null,t)):an($e,null,t)}function pn(t){return null==t||"boolean"===typeof t?an($e):(0,s.kJ)(t)?an(Be,null,t.slice()):"object"===typeof t?mn(t):an(qe,null,String(t))}function mn(t){return null===t.el||t.memo?t:ln(t)}function gn(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,s.kJ)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),gn(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||nn in e?3===r&&R&&(1===R.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=R}}else(0,s.mf)(e)?(e={default:e,_ctx:R},n=32):(e=String(e),64&r?(n=16,e=[hn(e)]):n=8);t.children=e,t.shapeFlag|=n}function yn(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,s.C_)([e.class,r.class]));else if("style"===t)e.style=(0,s.j5)([e.style,r.style]);else if((0,s.F7)(t)){const n=e[t],i=r[t];!i||n===i||(0,s.kJ)(n)&&n.includes(i)||(e[t]=n?[].concat(n,i):i)}else""!==t&&(e[t]=r[t])}return e}function vn(t,e,n,r=null){o(t,e,7,[n,r])}const wn=_e();let bn=0;function En(t,e,n){const i=t.type,o=(e?e.appContext:t.appContext)||wn,a={uid:bn++,vnode:t,type:i,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:le(i,o),emitsOptions:N(i,o),emit:null,emitted:null,propsDefaults:s.kT,inheritAttrs:i.inheritAttrs,ctx:s.kT,data:s.kT,props:s.kT,attrs:s.kT,slots:s.kT,refs:s.kT,setupState:s.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=D.bind(null,a),t.ce&&t.ce(a),a}let _n=null;const Tn=()=>_n||R,Cn=t=>{_n=t,t.scope.on()},Sn=()=>{_n&&_n.scope.off(),_n=null};function In(t){return 4&t.vnode.shapeFlag}let kn,An,Dn=!1;function Nn(t,e=!1){Dn=e;const{props:n,children:r}=t.vnode,s=In(t);oe(t,n,s,e),be(t,r);const i=s?xn(t,e):void 0;return Dn=!1,i}function xn(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=(0,r.Xl)(new Proxy(t.ctx,Ht));const{setup:o}=n;if(o){const n=t.setupContext=o.length>1?Mn(t):null;Cn(t),(0,r.Jd)();const c=i(o,t,0,[t.props,n]);if((0,r.lk)(),Sn(),(0,s.tI)(c)){if(c.then(Sn,Sn),e)return c.then((n=>{Rn(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=c}else Rn(t,c,e)}else On(t,e)}function Rn(t,e,n){(0,s.mf)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,s.Kn)(e)&&(t.setupState=(0,r.WL)(e)),On(t,n)}function On(t,e,n){const i=t.type;if(!t.render){if(!e&&kn&&!i.render){const e=i.template||Jt(t).template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:a}=i,c=(0,s.l7)((0,s.l7)({isCustomElement:n,delimiters:o},r),a);i.render=kn(e,c)}}t.render=i.render||s.dG,An&&An(t)}Cn(t),(0,r.Jd)(),zt(t),(0,r.lk)(),Sn()}function Ln(t){return new Proxy(t.attrs,{get(e,n){return(0,r.j)(t,"get","$attrs"),e[n]}})}function Mn(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=Ln(t))},slots:t.slots,emit:t.emit,expose:e}}function Pn(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(t.exposed)),{get(e,n){return n in e?e[n]:n in Kt?Kt[n](t):void 0}}))}function Vn(t,e=!0){return(0,s.mf)(t)?t.displayName||t.name:t.name||e&&t.__name}function Fn(t){return(0,s.mf)(t)&&"__vccOpts"in t}const Un=(t,e)=>(0,r.Fl)(t,e,Dn);function jn(t,e,n){const r=arguments.length;return 2===r?(0,s.Kn)(e)&&!(0,s.kJ)(e)?tn(e)?an(t,null,[e]):an(t,e):an(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&tn(n)&&(n=[n]),an(t,e,n))}Symbol("");const Bn="3.2.39"},963:function(t,e,n){"use strict";n.d(e,{F8:function(){return ut},bM:function(){return rt},iM:function(){return ct},nr:function(){return nt},ri:function(){return pt},uT:function(){return V}});var r=n(577),s=n(252);n(262);const i="http://www.w3.org/2000/svg",o="undefined"!==typeof document?document:null,a=o&&o.createElement("template"),c={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?o.createElementNS(i,t):o.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&s.setAttribute("multiple",r.multiple),s},createText:t=>o.createTextNode(t),createComment:t=>o.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>o.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling)){while(1)if(e.insertBefore(s.cloneNode(!0),n),s===i||!(s=s.nextSibling))break}else{a.innerHTML=r?`<svg>${t}</svg>`:t;const s=a.content;if(r){const t=s.firstChild;while(t.firstChild)s.appendChild(t.firstChild);s.removeChild(t)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function u(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function l(t,e,n){const s=t.style,i=(0,r.HD)(n);if(n&&!i){for(const t in n)f(s,t,n[t]);if(e&&!(0,r.HD)(e))for(const t in e)null==n[t]&&f(s,t,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const h=/\s*!important$/;function f(t,e,n){if((0,r.kJ)(n))n.forEach((n=>f(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=m(t,e);h.test(n)?t.setProperty((0,r.rs)(s),n.replace(h,""),"important"):t[s]=n}}const d=["Webkit","Moz","ms"],p={};function m(t,e){const n=p[e];if(n)return n;let s=(0,r._A)(e);if("filter"!==s&&s in t)return p[e]=s;s=(0,r.kC)(s);for(let r=0;r<d.length;r++){const n=d[r]+s;if(n in t)return p[e]=n}return e}const g="http://www.w3.org/1999/xlink";function y(t,e,n,s,i){if(s&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(g,e.slice(6,e.length)):t.setAttributeNS(g,e,n);else{const s=(0,r.Pq)(e);null==n||s&&!(0,r.yA)(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function v(t,e,n,s,i,o,a){if("innerHTML"===e||"textContent"===e)return s&&a(s,i,o),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName&&!t.tagName.includes("-")){t._value=n;const r=null==n?"":n;return t.value===r&&"OPTION"!==t.tagName||(t.value=r),void(null==n&&t.removeAttribute(e))}let c=!1;if(""===n||null==n){const s=typeof t[e];"boolean"===s?n=(0,r.yA)(n):null==n&&"string"===s?(n="",c=!0):"number"===s&&(n=0,c=!0)}try{t[e]=n}catch(u){0}c&&t.removeAttribute(e)}const[w,b]=(()=>{let t=Date.now,e=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let E=0;const _=Promise.resolve(),T=()=>{E=0},C=()=>E||(_.then(T),E=w());function S(t,e,n,r){t.addEventListener(e,n,r)}function I(t,e,n,r){t.removeEventListener(e,n,r)}function k(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[n,a]=D(e);if(r){const o=i[e]=N(r,s);S(t,n,o,a)}else o&&(I(t,n,o,a),i[e]=void 0)}}const A=/(?:Once|Passive|Capture)$/;function D(t){let e;if(A.test(t)){let n;e={};while(n=t.match(A))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,r.rs)(t.slice(2));return[n,e]}function N(t,e){const n=t=>{const r=t.timeStamp||w();(b||r>=n.attached-1)&&(0,s.$d)(x(t,n.value),e,5,[t])};return n.value=t,n.attached=C(),n}function x(t,e){if((0,r.kJ)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const R=/^on[a-z]/,O=(t,e,n,s,i=!1,o,a,c,h)=>{"class"===e?u(t,s,i):"style"===e?l(t,n,s):(0,r.F7)(e)?(0,r.tR)(e)||k(t,e,n,s,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):L(t,e,s,i))?v(t,e,s,o,a,c,h):("true-value"===e?t._trueValue=s:"false-value"===e&&(t._falseValue=s),y(t,e,s,i))};function L(t,e,n,s){return s?"innerHTML"===e||"textContent"===e||!!(e in t&&R.test(e)&&(0,r.mf)(n)):"spellcheck"!==e&&"draggable"!==e&&"translate"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!R.test(e)||!(0,r.HD)(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const M="transition",P="animation",V=(t,{slots:e})=>(0,s.h)(s.P$,B(t),e);V.displayName="Transition";const F={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},U=(V.props=(0,r.l7)({},s.P$.props,F),(t,e=[])=>{(0,r.kJ)(t)?t.forEach((t=>t(...e))):t&&t(...e)}),j=t=>!!t&&((0,r.kJ)(t)?t.some((t=>t.length>1)):t.length>1);function B(t){const e={};for(const r in t)r in F||(e[r]=t[r]);if(!1===t.css)return e;const{name:n="v",type:s,duration:i,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,m=q(i),g=m&&m[0],y=m&&m[1],{onBeforeEnter:v,onEnter:w,onEnterCancelled:b,onLeave:E,onLeaveCancelled:_,onBeforeAppear:T=v,onAppear:C=w,onAppearCancelled:S=b}=e,I=(t,e,n)=>{H(t,e?h:c),H(t,e?l:a),n&&n()},k=(t,e)=>{t._isLeaving=!1,H(t,f),H(t,p),H(t,d),e&&e()},A=t=>(e,n)=>{const r=t?C:w,i=()=>I(e,t,n);U(r,[e,i]),G((()=>{H(e,t?u:o),K(e,t?h:c),j(r)||W(e,s,g,i)}))};return(0,r.l7)(e,{onBeforeEnter(t){U(v,[t]),K(t,o),K(t,a)},onBeforeAppear(t){U(T,[t]),K(t,u),K(t,l)},onEnter:A(!1),onAppear:A(!0),onLeave(t,e){t._isLeaving=!0;const n=()=>k(t,e);K(t,f),X(),K(t,d),G((()=>{t._isLeaving&&(H(t,f),K(t,p),j(E)||W(t,s,y,n))})),U(E,[t,n])},onEnterCancelled(t){I(t,!1),U(b,[t])},onAppearCancelled(t){I(t,!0),U(S,[t])},onLeaveCancelled(t){k(t),U(_,[t])}})}function q(t){if(null==t)return null;if((0,r.Kn)(t))return[$(t.enter),$(t.leave)];{const e=$(t);return[e,e]}}function $(t){const e=(0,r.He)(t);return e}function K(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t._vtc||(t._vtc=new Set)).add(e)}function H(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function G(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let z=0;function W(t,e,n,r){const s=t._endId=++z,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=Q(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,f),i()},f=e=>{e.target===t&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),t.addEventListener(u,f)}function Q(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),s=r(M+"Delay"),i=r(M+"Duration"),o=Y(s,i),a=r(P+"Delay"),c=r(P+"Duration"),u=Y(a,c);let l=null,h=0,f=0;e===M?o>0&&(l=M,h=o,f=i.length):e===P?u>0&&(l=P,h=u,f=c.length):(h=Math.max(o,u),l=h>0?o>u?M:P:null,f=l?l===M?i.length:c.length:0);const d=l===M&&/\b(transform|all)(,|$)/.test(n[M+"Property"]);return{type:l,timeout:h,propCount:f,hasTransform:d}}function Y(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>J(e)+J(t[n]))))}function J(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function X(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Z=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(e)?t=>(0,r.ir)(e,t):e};function tt(t){t.target.composing=!0}function et(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const nt={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Z(i);const o=s||i.props&&"number"===i.props.type;S(t,e?"change":"input",(e=>{if(e.target.composing)return;let s=t.value;n&&(s=s.trim()),o&&(s=(0,r.He)(s)),t._assign(s)})),n&&S(t,"change",(()=>{t.value=t.value.trim()})),e||(S(t,"compositionstart",tt),S(t,"compositionend",et),S(t,"change",et))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},o){if(t._assign=Z(o),t.composing)return;if(document.activeElement===t&&"range"!==t.type){if(n)return;if(s&&t.value.trim()===e)return;if((i||"number"===t.type)&&(0,r.He)(t.value)===e)return}const a=null==e?"":e;t.value!==a&&(t.value=a)}};const rt={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=(0,r.DM)(e);S(t,"change",(()=>{const e=Array.prototype.filter.call(t.options,(t=>t.selected)).map((t=>n?(0,r.He)(it(t)):it(t)));t._assign(t.multiple?i?new Set(e):e:e[0])})),t._assign=Z(s)},mounted(t,{value:e}){st(t,e)},beforeUpdate(t,e,n){t._assign=Z(n)},updated(t,{value:e}){st(t,e)}};function st(t,e){const n=t.multiple;if(!n||(0,r.kJ)(e)||(0,r.DM)(e)){for(let s=0,i=t.options.length;s<i;s++){const i=t.options[s],o=it(i);if(n)(0,r.kJ)(e)?i.selected=(0,r.hq)(e,o)>-1:i.selected=e.has(o);else if((0,r.WV)(it(i),e))return void(t.selectedIndex!==s&&(t.selectedIndex=s))}n||-1===t.selectedIndex||(t.selectedIndex=-1)}}function it(t){return"_value"in t?t._value:t.value}const ot=["ctrl","shift","alt","meta"],at={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>ot.some((n=>t[`${n}Key`]&&!e.includes(n)))},ct=(t,e)=>(n,...r)=>{for(let t=0;t<e.length;t++){const r=at[e[t]];if(r&&r(n,e))return}return t(n,...r)},ut={beforeMount(t,{value:e},{transition:n}){t._vod="none"===t.style.display?"":t.style.display,n&&e?n.beforeEnter(t):lt(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!==!n&&(r?e?(r.beforeEnter(t),lt(t,!0),r.enter(t)):r.leave(t,(()=>{lt(t,!1)})):lt(t,e))},beforeUnmount(t,{value:e}){lt(t,e)}};function lt(t,e){t.style.display=e?t._vod:"none"}const ht=(0,r.l7)({patchProp:O},c);let ft;function dt(){return ft||(ft=(0,s.Us)(ht))}const pt=(...t)=>{const e=dt().createApp(...t);const{mount:n}=e;return e.mount=t=>{const s=mt(t);if(!s)return;const i=e._component;(0,r.mf)(i)||i.render||i.template||(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function mt(t){if((0,r.HD)(t)){const e=document.querySelector(t);return e}return t}},577:function(t,e,n){"use strict";function r(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,{C_:function(){return d},DM:function(){return R},E9:function(){return rt},F7:function(){return C},Gg:function(){return K},HD:function(){return M},He:function(){return et},Kn:function(){return V},NO:function(){return _},Nj:function(){return tt},Od:function(){return k},PO:function(){return q},Pq:function(){return a},RI:function(){return D},S0:function(){return $},W7:function(){return B},WV:function(){return m},Z6:function(){return b},_A:function(){return z},_N:function(){return x},aU:function(){return X},dG:function(){return E},e1:function(){return i},fY:function(){return r},hR:function(){return J},hq:function(){return g},ir:function(){return Z},j5:function(){return u},kC:function(){return Y},kJ:function(){return N},kT:function(){return w},l7:function(){return I},mf:function(){return L},rs:function(){return Q},tI:function(){return F},tR:function(){return S},yA:function(){return c},yk:function(){return P},zw:function(){return y}});const s="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",i=r(s);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(t){return!!t||""===t}function u(t){if(N(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=M(r)?f(r):u(r);if(s)for(const t in s)e[t]=s[t]}return e}return M(t)||V(t)?t:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function f(t){const e={};return t.split(l).forEach((t=>{if(t){const n=t.split(h);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function d(t){let e="";if(M(t))e=t;else if(N(t))for(let n=0;n<t.length;n++){const r=d(t[n]);r&&(e+=r+" ")}else if(V(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function p(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=m(t[r],e[r]);return n}function m(t,e){if(t===e)return!0;let n=O(t),r=O(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=P(t),r=P(e),n||r)return t===e;if(n=N(t),r=N(e),n||r)return!(!n||!r)&&p(t,e);if(n=V(t),r=V(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const n in t){const r=t.hasOwnProperty(n),s=e.hasOwnProperty(n);if(r&&!s||!r&&s||!m(t[n],e[n]))return!1}}return String(t)===String(e)}function g(t,e){return t.findIndex((t=>m(t,e)))}const y=t=>M(t)?t:null==t?"":N(t)||V(t)&&(t.toString===U||!L(t.toString))?JSON.stringify(t,v,2):String(t),v=(t,e)=>e&&e.__v_isRef?v(t,e.value):x(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n])=>(t[`${e} =>`]=n,t)),{})}:R(e)?{[`Set(${e.size})`]:[...e.values()]}:!V(e)||N(e)||q(e)?e:String(e),w={},b=[],E=()=>{},_=()=>!1,T=/^on[^a-z]/,C=t=>T.test(t),S=t=>t.startsWith("onUpdate:"),I=Object.assign,k=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},A=Object.prototype.hasOwnProperty,D=(t,e)=>A.call(t,e),N=Array.isArray,x=t=>"[object Map]"===j(t),R=t=>"[object Set]"===j(t),O=t=>"[object Date]"===j(t),L=t=>"function"===typeof t,M=t=>"string"===typeof t,P=t=>"symbol"===typeof t,V=t=>null!==t&&"object"===typeof t,F=t=>V(t)&&L(t.then)&&L(t.catch),U=Object.prototype.toString,j=t=>U.call(t),B=t=>j(t).slice(8,-1),q=t=>"[object Object]"===j(t),$=t=>M(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,K=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),H=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},G=/-(\w)/g,z=H((t=>t.replace(G,((t,e)=>e?e.toUpperCase():"")))),W=/\B([A-Z])/g,Q=H((t=>t.replace(W,"-$1").toLowerCase())),Y=H((t=>t.charAt(0).toUpperCase()+t.slice(1))),J=H((t=>t?`on${Y(t)}`:"")),X=(t,e)=>!Object.is(t,e),Z=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},tt=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},et=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let nt;const rt=()=>nt||(nt="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},711:function(t){!function(e,n){t.exports=n()}(0,(function(){return function(t){function e(r){if(n[r])return n[r].exports;var s=n[r]={exports:{},id:r,loaded:!1};return t[r].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var n={};return e.m=t,e.c=n,e.p="dist/",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n(1),o=(r(i),n(6)),a=r(o),c=n(7),u=r(c),l=n(8),h=r(l),f=n(9),d=r(f),p=n(10),m=r(p),g=n(11),y=r(g),v=n(14),w=r(v),b=[],E=!1,_={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},T=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(t&&(E=!0),E)return b=(0,y.default)(b,_),(0,m.default)(b,_.once),b},C=function(){b=(0,w.default)(),T()},S=function(){b.forEach((function(t,e){t.node.removeAttribute("data-aos"),t.node.removeAttribute("data-aos-easing"),t.node.removeAttribute("data-aos-duration"),t.node.removeAttribute("data-aos-delay")}))},I=function(t){return!0===t||"mobile"===t&&d.default.mobile()||"phone"===t&&d.default.phone()||"tablet"===t&&d.default.tablet()||"function"==typeof t&&!0===t()},k=function(t){_=s(_,t),b=(0,w.default)();var e=document.all&&!window.atob;return I(_.disable)||e?S():(_.disableMutationObserver||h.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),_.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",_.easing),document.querySelector("body").setAttribute("data-aos-duration",_.duration),document.querySelector("body").setAttribute("data-aos-delay",_.delay),"DOMContentLoaded"===_.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?T(!0):"load"===_.startEvent?window.addEventListener(_.startEvent,(function(){T(!0)})):document.addEventListener(_.startEvent,(function(){T(!0)})),window.addEventListener("resize",(0,u.default)(T,_.debounceDelay,!0)),window.addEventListener("orientationchange",(0,u.default)(T,_.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)((function(){(0,m.default)(b,_.once)}),_.throttleDelay)),_.disableMutationObserver||h.default.ready("[data-aos]",C),b)};t.exports={init:k,refresh:T,refreshHard:C}},function(t,e){},,,,,function(t,e){(function(e){"use strict";function n(t,e,n){function r(e){var n=m,r=g;return m=g=void 0,E=e,v=t.apply(r,n)}function i(t){return E=t,w=setTimeout(l,e),S?r(t):v}function o(t){var n=t-b,r=t-E,s=e-n;return I?T(s,y-r):s}function c(t){var n=t-b,r=t-E;return void 0===b||n>=e||n<0||I&&r>=y}function l(){var t=C();return c(t)?h(t):void(w=setTimeout(l,o(t)))}function h(t){return w=void 0,k&&m?r(t):(m=g=void 0,v)}function f(){void 0!==w&&clearTimeout(w),E=0,m=b=g=w=void 0}function d(){return void 0===w?v:h(C())}function p(){var t=C(),n=c(t);if(m=arguments,g=this,b=t,n){if(void 0===w)return i(b);if(I)return w=setTimeout(l,e),r(b)}return void 0===w&&(w=setTimeout(l,e)),v}var m,g,y,v,w,b,E=0,S=!1,I=!1,k=!0;if("function"!=typeof t)throw new TypeError(u);return e=a(e)||0,s(n)&&(S=!!n.leading,I="maxWait"in n,y=I?_(a(n.maxWait)||0,e):y,k="trailing"in n?!!n.trailing:k),p.cancel=f,p.flush=d,p}function r(t,e,r){var i=!0,o=!0;if("function"!=typeof t)throw new TypeError(u);return s(r)&&(i="leading"in r?!!r.leading:i,o="trailing"in r?!!r.trailing:o),n(t,e,{leading:i,maxWait:e,trailing:o})}function s(t){var e="undefined"==typeof t?"undefined":c(t);return!!t&&("object"==e||"function"==e)}function i(t){return!!t&&"object"==("undefined"==typeof t?"undefined":c(t))}function o(t){return"symbol"==("undefined"==typeof t?"undefined":c(t))||i(t)&&E.call(t)==h}function a(t){if("number"==typeof t)return t;if(o(t))return l;if(s(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=s(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(f,"");var n=p.test(t);return n||m.test(t)?g(t.slice(2),n?2:8):d.test(t)?l:+t}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u="Expected a function",l=NaN,h="[object Symbol]",f=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,g=parseInt,y="object"==("undefined"==typeof e?"undefined":c(e))&&e&&e.Object===Object&&e,v="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,w=y||v||Function("return this")(),b=Object.prototype,E=b.toString,_=Math.max,T=Math.min,C=function(){return w.Date.now()};t.exports=r}).call(e,function(){return this}())},function(t,e){(function(e){"use strict";function n(t,e,n){function s(e){var n=m,r=g;return m=g=void 0,C=e,v=t.apply(r,n)}function i(t){return C=t,w=setTimeout(l,e),S?s(t):v}function a(t){var n=t-b,r=t-C,s=e-n;return I?_(s,y-r):s}function u(t){var n=t-b,r=t-C;return void 0===b||n>=e||n<0||I&&r>=y}function l(){var t=T();return u(t)?h(t):void(w=setTimeout(l,a(t)))}function h(t){return w=void 0,k&&m?s(t):(m=g=void 0,v)}function f(){void 0!==w&&clearTimeout(w),C=0,m=b=g=w=void 0}function d(){return void 0===w?v:h(T())}function p(){var t=T(),n=u(t);if(m=arguments,g=this,b=t,n){if(void 0===w)return i(b);if(I)return w=setTimeout(l,e),s(b)}return void 0===w&&(w=setTimeout(l,e)),v}var m,g,y,v,w,b,C=0,S=!1,I=!1,k=!0;if("function"!=typeof t)throw new TypeError(c);return e=o(e)||0,r(n)&&(S=!!n.leading,I="maxWait"in n,y=I?E(o(n.maxWait)||0,e):y,k="trailing"in n?!!n.trailing:k),p.cancel=f,p.flush=d,p}function r(t){var e="undefined"==typeof t?"undefined":a(t);return!!t&&("object"==e||"function"==e)}function s(t){return!!t&&"object"==("undefined"==typeof t?"undefined":a(t))}function i(t){return"symbol"==("undefined"==typeof t?"undefined":a(t))||s(t)&&b.call(t)==l}function o(t){if("number"==typeof t)return t;if(i(t))return u;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(h,"");var n=d.test(t);return n||p.test(t)?m(t.slice(2),n?2:8):f.test(t)?u:+t}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c="Expected a function",u=NaN,l="[object Symbol]",h=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,p=/^0o[0-7]+$/i,m=parseInt,g="object"==("undefined"==typeof e?"undefined":a(e))&&e&&e.Object===Object&&e,y="object"==("undefined"==typeof self?"undefined":a(self))&&self&&self.Object===Object&&self,v=g||y||Function("return this")(),w=Object.prototype,b=w.toString,E=Math.max,_=Math.min,T=function(){return v.Date.now()};t.exports=n}).call(e,function(){return this}())},function(t,e){"use strict";function n(t){var e=void 0,r=void 0;for(e=0;e<t.length;e+=1){if(r=t[e],r.dataset&&r.dataset.aos)return!0;if(r.children&&n(r.children))return!0}return!1}function r(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function s(){return!!r()}function i(t,e){var n=window.document,s=r(),i=new s(o);a=e,i.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function o(t){t&&t.forEach((function(t){var e=Array.prototype.slice.call(t.addedNodes),r=Array.prototype.slice.call(t.removedNodes),s=e.concat(r);if(n(s))return a()}))}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){};e.default={isSupported:s,ready:i}},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,o=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=function(){function t(){n(this,t)}return s(t,[{key:"phone",value:function(){var t=r();return!(!i.test(t)&&!o.test(t.substr(0,4)))}},{key:"mobile",value:function(){var t=r();return!(!a.test(t)&&!c.test(t.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),t}();e.default=new u},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e,n){var r=t.node.getAttribute("data-aos-once");e>t.position?t.node.classList.add("aos-animate"):"undefined"!=typeof r&&("false"===r||!n&&"true"!==r)&&t.node.classList.remove("aos-animate")},r=function(t,e){var r=window.pageYOffset,s=window.innerHeight;t.forEach((function(t,i){n(t,s+r,e)}))};e.default=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(12),i=r(s),o=function(t,e){return t.forEach((function(t,n){t.node.classList.add("aos-init"),t.position=(0,i.default)(t.node,e.offset)})),t};e.default=o},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(13),i=r(s),o=function(t,e){var n=0,r=0,s=window.innerHeight,o={offset:t.getAttribute("data-aos-offset"),anchor:t.getAttribute("data-aos-anchor"),anchorPlacement:t.getAttribute("data-aos-anchor-placement")};switch(o.offset&&!isNaN(o.offset)&&(r=parseInt(o.offset)),o.anchor&&document.querySelectorAll(o.anchor)&&(t=document.querySelectorAll(o.anchor)[0]),n=(0,i.default)(t).top,o.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=t.offsetHeight/2;break;case"bottom-bottom":n+=t.offsetHeight;break;case"top-center":n+=s/2;break;case"bottom-center":n+=s/2+t.offsetHeight;break;case"center-center":n+=s/2+t.offsetHeight/2;break;case"top-top":n+=s;break;case"bottom-top":n+=t.offsetHeight+s;break;case"center-top":n+=t.offsetHeight/2+s}return o.anchorPlacement||o.offset||isNaN(e)||(r=e),n+r};e.default=o},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){for(var e=0,n=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)e+=t.offsetLeft-("BODY"!=t.tagName?t.scrollLeft:0),n+=t.offsetTop-("BODY"!=t.tagName?t.scrollTop:0),t=t.offsetParent;return{top:n,left:e}};e.default=n},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t=t||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(t,(function(t){return{node:t}}))};e.default=n}])}))},503:function(t,e,n){"use strict";n.d(e,{ZF:function(){return r.ZF}});var r=n(816),s="firebase",i="9.10.0";
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
(0,r.KN)(s,i,"app")},321:function(t,e,n){"use strict";n.d(e,{ET:function(){return rh},hJ:function(){return fl},ad:function(){return yl},cf:function(){return sh},Xo:function(){return Xl},IO:function(){return Yl}});var r,s=n(816),i=n(463),o=n(333),a=n(444),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},u={},l=l||{},h=c||self;function f(){}function d(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function m(t){return Object.prototype.hasOwnProperty.call(t,g)&&t[g]||(t[g]=++y)}var g="closure_uid_"+(1e9*Math.random()>>>0),y=0;function v(t,e,n){return t.call.apply(t.bind,arguments)}function w(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function b(t,e,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:w,b.apply(null,arguments)}function E(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function _(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}function T(){this.s=this.s,this.o=this.o}var C=0,S={};T.prototype.s=!1,T.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=C)){var t=m(this);delete S[t]}},T.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const I=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function k(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function A(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(d(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let s=0;s<r;s++)t[n+s]=e[s]}else t.push(e)}}function D(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}D.prototype.h=function(){this.defaultPrevented=!0};var N=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",f,e),h.removeEventListener("test",f,e)}catch(n){}return t}();function x(t){return/^[\s\xa0]*$/.test(t)}var R=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function O(t,e){return t<e?-1:t>e?1:0}function L(){var t=h.navigator;return t&&(t=t.userAgent)?t:""}function M(t){return-1!=L().indexOf(t)}function P(t){return P[" "](t),t}function V(t){var e=Y;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}P[" "]=f;var F,U=M("Opera"),j=M("Trident")||M("MSIE"),B=M("Edge"),q=B||j,$=M("Gecko")&&!(-1!=L().toLowerCase().indexOf("webkit")&&!M("Edge"))&&!(M("Trident")||M("MSIE"))&&!M("Edge"),K=-1!=L().toLowerCase().indexOf("webkit")&&!M("Edge");function H(){var t=h.document;return t?t.documentMode:void 0}t:{var G="",z=function(){var t=L();return $?/rv:([^\);]+)(\)|;)/.exec(t):B?/Edge\/([\d\.]+)/.exec(t):j?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):K?/WebKit\/(\S+)/.exec(t):U?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(z&&(G=z?z[1]:""),j){var W=H();if(null!=W&&W>parseFloat(G)){F=String(W);break t}}F=G}var Q,Y={};function J(){return V((function(){let t=0;const e=R(String(F)).split("."),n=R("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==s[0].length&&0==i[0].length)break;t=O(0==s[1].length?0:parseInt(s[1],10),0==i[1].length?0:parseInt(i[1],10))||O(0==s[2].length,0==i[2].length)||O(s[2],i[2]),s=s[3],i=i[3]}while(0==t)}return 0<=t}))}if(h.document&&j){var X=H();Q=X||(parseInt(F,10)||void 0)}else Q=void 0;var Z=Q;function tt(t,e){if(D.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($){t:{try{P(e.nodeName);var s=!0;break t}catch(i){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:et[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&tt.X.h.call(this)}}_(tt,D);var et={2:"touch",3:"pen",4:"mouse"};tt.prototype.h=function(){tt.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var nt="closure_listenable_"+(1e6*Math.random()|0),rt=0;function st(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=s,this.key=++rt,this.ba=this.ea=!1}function it(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ot(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function at(t){const e={};for(const n in t)e[n]=t[n];return e}const ct="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ut(t,e){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)t[n]=r[n];for(let e=0;e<ct.length;e++)n=ct[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function lt(t){this.src=t,this.g={},this.h=0}function ht(t,e){var n=e.type;if(n in t.g){var r,s=t.g[n],i=I(s,e);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(it(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ft(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==r)return s}return-1}lt.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=ft(t,e,r,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new st(e,this.src,i,!!r,s),e.ea=n,t.push(e)),e};var dt="closure_lm_"+(1e6*Math.random()|0),pt={};function mt(t,e,n,r,s){if(r&&r.once)return vt(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)mt(t,e[i],n,r,s);return null}return n=St(n),t&&t[nt]?t.N(e,n,p(r)?!!r.capture:!!r,s):gt(t,e,n,!1,r,s)}function gt(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=p(s)?!!s.capture:!!s,a=Tt(t);if(a||(t[dt]=a=new lt(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=yt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)N||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Et(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function yt(){function t(n){return e.call(t.src,t.listener,n)}const e=_t;return t}function vt(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)vt(t,e[i],n,r,s);return null}return n=St(n),t&&t[nt]?t.O(e,n,p(r)?!!r.capture:!!r,s):gt(t,e,n,!0,r,s)}function wt(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)wt(t,e[i],n,r,s);else r=p(r)?!!r.capture:!!r,n=St(n),t&&t[nt]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=ft(i,n,r,s),-1<n&&(it(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=Tt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ft(e,n,r,s)),(n=-1<t?e[t]:null)&&bt(n))}function bt(t){if("number"!==typeof t&&t&&!t.ba){var e=t.src;if(e&&e[nt])ht(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Et(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Tt(e))?(ht(n,t),0==n.h&&(n.src=null,e[dt]=null)):it(t)}}}function Et(t){return t in pt?pt[t]:pt[t]="on"+t}function _t(t,e){if(t.ba)t=!0;else{e=new tt(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&bt(t),t=n.call(r,e)}return t}function Tt(t){return t=t[dt],t instanceof lt?t:null}var Ct="__closure_events_fn_"+(1e9*Math.random()>>>0);function St(t){return"function"===typeof t?t:(t[Ct]||(t[Ct]=function(e){return t.handleEvent(e)}),t[Ct])}function It(){T.call(this),this.i=new lt(this),this.P=this,this.I=null}function kt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new D(e,t);else if(e instanceof D)e.target=e.target||t;else{var s=e;e=new D(r,t),ut(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=At(o,r,!0,e)&&s}if(o=e.g=t,s=At(o,r,!0,e)&&s,s=At(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=At(o,r,!1,e)&&s}function At(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&ht(t.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}_(It,T),It.prototype[nt]=!0,It.prototype.removeEventListener=function(t,e,n,r){wt(this,t,e,n,r)},It.prototype.M=function(){if(It.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)it(n[r]);delete e.g[t],e.h--}}this.I=null},It.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},It.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Dt=h.JSON.stringify;function Nt(){var t=Ut;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class xt{constructor(){this.h=this.g=null}add(t,e){const n=Ot.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Rt,Ot=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Lt),(t=>t.reset()));class Lt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Mt(t){h.setTimeout((()=>{throw t}),0)}function Pt(t,e){Rt||Vt(),Ft||(Rt(),Ft=!0),Ut.add(t,e)}function Vt(){var t=h.Promise.resolve(void 0);Rt=function(){t.then(jt)}}var Ft=!1,Ut=new xt;function jt(){for(var t;t=Nt();){try{t.h.call(t.g)}catch(n){Mt(n)}var e=Ot;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ft=!1}function Bt(t,e){It.call(this),this.h=t||1,this.g=e||h,this.j=b(this.kb,this),this.l=Date.now()}function qt(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function $t(t,e,n){if("function"===typeof t)n&&(t=b(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=b(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function Kt(t){t.g=$t((()=>{t.g=null,t.i&&(t.i=!1,Kt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}_(Bt,It),r=Bt.prototype,r.ca=!1,r.R=null,r.kb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),kt(this,"tick"),this.ca&&(qt(this),this.start()))}},r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Bt.X.M.call(this),qt(this),delete this.g};class Ht extends T{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Kt(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gt(t){T.call(this),this.h=t,this.g={}}_(Gt,T);var zt=[];function Wt(t,e,n,r){Array.isArray(n)||(n&&(zt[0]=n.toString()),n=zt);for(var s=0;s<n.length;s++){var i=mt(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Qt(t){ot(t.g,(function(t,e){this.g.hasOwnProperty(e)&&bt(t)}),t),t.g={}}function Yt(){this.g=!0}function Jt(t,e,n,r,s,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}function Xt(t,e,n,r,s,i,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+i+" "+o}))}function Zt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,n)+(r?" "+r:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return Dt(n)}catch(a){return e}}Gt.prototype.M=function(){Gt.X.M.call(this),Qt(this)},Gt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Yt.prototype.Aa=function(){this.g=!1},Yt.prototype.info=function(){};var ne={},re=null;function se(){return re=re||new It}function ie(t){D.call(this,ne.Oa,t)}function oe(t){const e=se();kt(e,new ie(e,t))}function ae(t,e){D.call(this,ne.STAT_EVENT,t),this.stat=e}function ce(t){const e=se();kt(e,new ae(e,t))}function ue(t,e){D.call(this,ne.Pa,t),this.size=e}function le(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}ne.Oa="serverreachability",_(ie,D),ne.STAT_EVENT="statevent",_(ae,D),ne.Pa="timingevent",_(ue,D);var he={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,La:7,TIMEOUT:8,Cb:9},fe={qb:"complete",Mb:"success",Ma:"error",La:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function de(){}function pe(t){return t.h||(t.h=t.i())}function me(){}de.prototype.h=null;var ge,ye={OPEN:"a",pb:"b",Ma:"c",Bb:"d"};function ve(){D.call(this,"d")}function we(){D.call(this,"c")}function be(){}function Ee(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Gt(this),this.O=Te,t=q?125:void 0,this.T=new Bt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new _e}function _e(){this.i=null,this.g="",this.h=!1}_(ve,D),_(we,D),_(be,de),be.prototype.g=function(){return new XMLHttpRequest},be.prototype.i=function(){return{}},ge=new be;var Te=45e3,Ce={},Se={};function Ie(t,e,n){t.K=1,t.v=We($e(e)),t.s=n,t.P=!0,ke(t,null)}function ke(t,e){t.F=Date.now(),xe(t),t.A=$e(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),cn(n.i,"t",r),t.C=0,n=t.l.H,t.h=new _e,t.g=fr(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Ht(b(t.Ka,t,t.g),t.N)),Wt(t.S,t.g,"readystatechange",t.hb),e=t.H?at(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),oe(1),Jt(t.j,t.u,t.A,t.m,t.U,t.s)}function Ae(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function De(t,e,n){let r,s=!0;for(;!t.I&&t.C<n.length;){if(r=Ne(t,n),r==Se){4==e&&(t.o=4,ce(14),s=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}if(r==Ce){t.o=4,ce(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}Zt(t.j,t.m,r,null),Pe(t,r)}Ae(t)&&r!=Se&&r!=Ce&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ce(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),sr(e),e.K=!0,ce(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),Me(t),Le(t))}function Ne(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Se:(n=Number(e.substring(n,r)),isNaN(n)?Ce:(r+=1,r+n>e.length?Se:(e=e.substr(r,n),t.C=r+n,e)))}function xe(t){t.V=Date.now()+t.O,Re(t,t.O)}function Re(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=le(b(t.fb,t),e)}function Oe(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function Le(t){0==t.l.G||t.I||ar(t.l,t)}function Me(t){Oe(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,qt(t.T),Qt(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Pe(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||gn(n.h,t)))if(!t.J&&gn(n.h,t)&&3==n.G){try{var r=n.Fa.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;or(n),Qn(n)}rr(n),ce(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&0==n.A&&!n.v&&(n.v=le(b(n.bb,n),6e3));if(1>=mn(n.h)&&n.ja){try{n.ja()}catch(u){}n.ja=void 0}}else ur(n,11)}else if((t.J||n.g==t)&&or(n),!x(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const e=u[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const s=u[4];null!=s&&(n.Ca=s,n.j.info("SVER="+n.Ca));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=r.h;i.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(yn(i,i.h),i.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.za=t,ze(r.F,r.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=hr(r,r.H?r.ka:null,r.V),o.J){vn(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(Oe(a),xe(a)),r.g=o}else nr(r);0<n.i.length&&Jn(n)}else"stop"!=u[0]&&"close"!=u[0]||ur(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?ur(n,7):Wn(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}oe(4)}catch(u){}}function Ve(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(d(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Fe(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(d(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Ue(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(d(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Fe(t),r=Ve(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}r=Ee.prototype,r.setTimeout=function(t){this.O=t},r.hb=function(t){t=t.target;const e=this.L;e&&3==qn(t)?e.l():this.Ka(t)},r.Ka=function(t){try{if(t==this.g)t:{const l=qn(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>l)&&(3!=l||q||this.g&&(this.h.h||this.g.fa()||$n(this.g)))){this.I||4!=l||7==e||oe(8==e||0>=f?3:2),Oe(this);var n=this.g.aa();this.Y=n;e:if(Ae(this)){var r=$n(this.g);t="";var s=r.length,i=4==qn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Me(this),Le(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,Xt(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,ce(12),Me(this),Le(this);break t}Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Pe(this,n)}this.P?(De(this,l,o),q&&this.i&&3==l&&(Wt(this.S,this.T,"tick",this.gb),this.T.start())):(Zt(this.j,this.m,o,null),Pe(this,o)),4==l&&Me(this),this.i&&!this.I&&(4==l?ar(this.l,this):(this.i=!1,xe(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),Me(this),Le(this)}}}catch(l){}},r.gb=function(){if(this.g){var t=qn(this.g),e=this.g.fa();this.C<e.length&&(Oe(this),De(this,t,e),this.i&&4!=t&&xe(this))}},r.cancel=function(){this.I=!0,Me(this)},r.fb=function(){this.B=null;const t=Date.now();0<=t-this.V?(te(this.j,this.A),2!=this.K&&(oe(3),ce(17)),Me(this),this.o=2,Le(this)):Re(this,this.V-t)};var je=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Be(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function qe(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof qe){this.h=void 0!==e?e:t.h,Ke(this,t.j),this.s=t.s,this.g=t.g,He(this,t.m),this.l=t.l,e=t.i;var n=new rn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ge(this,n),this.o=t.o}else t&&(n=String(t).match(je))?(this.h=!!e,Ke(this,n[1]||"",!0),this.s=Qe(n[2]||""),this.g=Qe(n[3]||"",!0),He(this,n[4]),this.l=Qe(n[5]||"",!0),Ge(this,n[6]||"",!0),this.o=Qe(n[7]||"")):(this.h=!!e,this.i=new rn(null,this.h))}function $e(t){return new qe(t)}function Ke(t,e,n){t.j=n?Qe(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function He(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ge(t,e,n){e instanceof rn?(t.i=e,ln(t.i,t.h)):(n||(e=Ye(e,en)),t.i=new rn(e,t.h))}function ze(t,e,n){t.i.set(e,n)}function We(t){return ze(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Qe(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ye(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Je),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Je(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}qe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ye(e,Xe,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Ye(e,Xe,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ye(n,"/"==n.charAt(0)?tn:Ze,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ye(n,nn)),t.join("")};var Xe=/[#\/\?@]/g,Ze=/[#\?:]/g,tn=/[#\?]/g,en=/[#\?@]/g,nn=/#/g;function rn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function sn(t){t.g||(t.g=new Map,t.h=0,t.i&&Be(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function on(t,e){sn(t),e=un(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function an(t,e){return sn(t),e=un(t,e),t.g.has(e)}function cn(t,e,n){on(t,e),0<n.length&&(t.i=null,t.g.set(un(t,e),k(n)),t.h+=n.length)}function un(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ln(t,e){e&&!t.j&&(sn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(on(this,e),cn(this,n,t))}),t)),t.j=e}r=rn.prototype,r.add=function(t,e){sn(this),this.i=null,t=un(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){sn(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},r.oa=function(){sn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let t=0;t<s.length;t++)n.push(e[r])}return n},r.W=function(t){sn(this);let e=[];if("string"===typeof t)an(this,t)&&(e=e.concat(this.g.get(un(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},r.set=function(t,e){return sn(this),this.i=null,t=un(this,t),an(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var s=i;""!==o[r]&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};var hn=class{constructor(t,e){this.h=t,this.g=e}};function fn(t){this.l=t||dn,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ga&&h.g.Ga()&&h.g.Ga().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dn=10;function pn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function mn(t){return t.h?1:t.g?t.g.size:0}function gn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function yn(t,e){t.g?t.g.add(e):t.h=e}function vn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function wn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return k(t.i)}function bn(){}function En(){this.g=new bn}function _n(t,e,n){const r=n||"";try{Ue(t,(function(t,n){let s=t;p(t)&&(s=Dt(t)),e.push(r+n+"="+encodeURIComponent(s))}))}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Tn(t,e){const n=new Yt;if(h.Image){const r=new Image;r.onload=E(Cn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=E(Cn,n,r,"TestLoadImage: error",!1,e),r.onabort=E(Cn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=E(Cn,n,r,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function Cn(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch(i){}}function Sn(t){this.l=t.$b||null,this.j=t.ib||!1}function In(t,e){It.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=kn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}fn.prototype.cancel=function(){if(this.i=wn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},bn.prototype.stringify=function(t){return h.JSON.stringify(t,void 0)},bn.prototype.parse=function(t){return h.JSON.parse(t,void 0)},_(Sn,de),Sn.prototype.g=function(){return new In(this.l,this.j)},Sn.prototype.i=function(t){return function(){return t}}({}),_(In,It);var kn=0;function An(t){t.j.read().then(t.Sa.bind(t)).catch(t.ga.bind(t))}function Dn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Nn(t)}function Nn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=In.prototype,r.open=function(t,e){if(this.readyState!=kn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Nn(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||h).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Dn(this)),this.readyState=kn},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Nn(this)),this.g&&(this.readyState=3,Nn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ga.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;An(this)}else t.text().then(this.Ua.bind(this),this.ga.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Dn(this):Nn(this),3==this.readyState&&An(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,Dn(this))},r.Ta=function(t){this.g&&(this.response=t,Dn(this))},r.ga=function(){this.g&&Dn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(In.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var xn=h.JSON.parse;function Rn(t){It.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=On,this.K=this.L=!1}_(Rn,It);var On="",Ln=/^https?$/i,Mn=["POST","PUT"];function Pn(t){return j&&J()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Vn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Fn(t),jn(t)}function Fn(t){t.D||(t.D=!0,kt(t,"complete"),kt(t,"error"))}function Un(t){if(t.h&&"undefined"!=typeof l&&(!t.C[1]||4!=qn(t)||2!=t.aa()))if(t.v&&4==qn(t))$t(t.Ha,0,t);else if(kt(t,"readystatechange"),4==qn(t)){t.h=!1;try{const c=t.aa();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===c){var s=String(t.H).match(je)[1]||null;if(!s&&h.self&&h.self.location){var i=h.self.location.protocol;s=i.substr(0,i.length-1)}r=!Ln.test(s?s.toLowerCase():"")}n=r}if(n)kt(t,"complete"),kt(t,"success");else{t.m=6;try{var o=2<qn(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.aa()+"]",Fn(t)}}finally{jn(t)}}}function jn(t,e){if(t.g){Bn(t);const r=t.g,s=t.C[0]?f:null;t.g=null,t.C=null,e||kt(t,"ready");try{r.onreadystatechange=s}catch(n){}}}function Bn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function qn(t){return t.g?t.g.readyState:0}function $n(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case On:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Dr){return null}}function Kn(t){let e="";return ot(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Hn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Kn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):ze(t,e,n))}function Gn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function zn(t){this.Ca=0,this.i=[],this.j=new Yt,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.$a=this.U=0,this.Ya=Gn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Wa=Gn("baseRetryDelayMs",5e3,t),this.ab=Gn("retryDelaySeedMs",1e4,t),this.Za=Gn("forwardChannelMaxRetries",2,t),this.ta=Gn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Yb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new fn(t&&t.concurrentRequestLimit),this.Fa=new En,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Xa=t&&t.Wb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Wn(t){if(Yn(t),3==t.G){var e=t.U++,n=$e(t.F);ze(n,"SID",t.I),ze(n,"RID",e),ze(n,"TYPE","terminate"),tr(t,n),e=new Ee(t,t.j,e,void 0),e.K=2,e.v=We($e(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(e.v.toString(),"")),!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=fr(e.l,null),e.g.da(e.v)),e.F=Date.now(),xe(e)}lr(t)}function Qn(t){t.g&&(sr(t),t.g.cancel(),t.g=null)}function Yn(t){Qn(t),t.u&&(h.clearTimeout(t.u),t.u=null),or(t),t.h.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function Jn(t){pn(t.h)||t.m||(t.m=!0,Pt(t.Ja,t),t.C=0)}function Xn(t,e){return!(mn(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.C>=(t.Ya?0:t.Za))&&(t.m=le(b(t.Ja,t,e),cr(t,t.C)),t.C++,!0))}function Zn(t,e){var n;n=e?e.m:t.U++;const r=$e(t.F);ze(r,"SID",t.I),ze(r,"RID",n),ze(r,"AID",t.T),tr(t,r),t.o&&t.s&&Hn(r,t.o,t.s),n=new Ee(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=er(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),yn(t.h,n),Ie(n,r,e)}function tr(t,e){t.ia&&ot(t.ia,(function(t,n){ze(e,n,t)})),t.l&&Ue({},(function(t,n){ze(e,n,t)}))}function er(t,e,n){n=Math.min(t.i.length,n);var r=t.l?b(t.l.Qa,t.l,t):null;t:{var s=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let i=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=e,0>n)e=Math.max(0,s[o].h-100),i=!1;else try{_n(a,t,"req"+n+"_")}catch(Ur){r&&r(a)}}if(i){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function nr(t){t.g||t.u||(t.Z=1,Pt(t.Ia,t),t.A=0)}function rr(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=le(b(t.Ia,t),cr(t,t.A)),t.A++,!0)}function sr(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function ir(t){t.g=new Ee(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=$e(t.sa);ze(e,"RID","rpc"),ze(e,"SID",t.I),ze(e,"CI",t.L?"0":"1"),ze(e,"AID",t.T),ze(e,"TYPE","xmlhttp"),tr(t,e),t.o&&t.s&&Hn(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=We($e(e)),n.s=null,n.P=!0,ke(n,t)}function or(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function ar(t,e){var n=null;if(t.g==e){or(t),sr(t),t.g=null;var r=2}else{if(!gn(t.h,e))return;n=e.D,vn(t.h,e),r=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=se(),kt(r,new ue(r,n,e,s)),Jn(t)}else nr(t);else if(s=e.o,3==s||0==s&&0<t.pa||!(1==r&&Xn(t,e)||2==r&&rr(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:ur(t,5);break;case 4:ur(t,10);break;case 3:ur(t,6);break;default:ur(t,2)}}function cr(t,e){let n=t.Wa+Math.floor(Math.random()*t.ab);return t.l||(n*=2),n*e}function ur(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var r=b(t.jb,t);n||(n=new qe("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Ke(n,"https"),We(n)),Tn(n.toString(),r)}else ce(2);t.G=0,t.l&&t.l.va(e),lr(t),Yn(t)}function lr(t){if(t.G=0,t.la=[],t.l){const e=wn(t.h);0==e.length&&0==t.i.length||(A(t.la,e),A(t.la,t.i),t.h.i.length=0,k(t.i),t.i.length=0),t.l.ua()}}function hr(t,e,n){var r=n instanceof qe?$e(n):new qe(n,void 0);if(""!=r.g)e&&(r.g=e+"."+r.g),He(r,r.m);else{var s=h.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new qe(null,void 0);r&&Ke(i,r),e&&(i.g=e),s&&He(i,s),n&&(i.l=n),r=i}return n=t.D,e=t.za,n&&e&&ze(r,n,e),ze(r,"VER",t.ma),tr(t,r),r}function fr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Rn(new Sn({ib:!0})):new Rn(t.ra),e.L=t.H,e}function dr(){}function pr(){if(j&&!(10<=Number(Z)))throw Error("Environmental error: no available transport.")}function mr(t,e){It.call(this),this.g=new zn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Xb)&&!x(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!x(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new vr(this)}function gr(t){ve.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function yr(){we.call(this),this.status=1}function vr(t){this.g=t}r=Rn.prototype,r.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ge.g(),this.C=this.u?pe(this.u):pe(ge),this.g.onreadystatechange=b(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){return void Vn(this,i)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),s=h.FormData&&t instanceof h.FormData,!(0<=I(Mn,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Bn(this),0<this.B&&((this.K=Pn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.qa,this)):this.A=$t(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Vn(this,i)}},r.qa=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,kt(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,kt(this,"complete"),kt(this,"abort"),jn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),jn(this,!0)),Rn.X.M.call(this)},r.Ha=function(){this.s||(this.F||this.v||this.l?Un(this):this.eb())},r.eb=function(){Un(this)},r.aa=function(){try{return 2<qn(this)?this.g.status:-1}catch(t){return-1}},r.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Ra=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),xn(e)}},r.Ea=function(){return this.m},r.Na=function(){return"string"===typeof this.j?this.j:String(this.j)},r=zn.prototype,r.ma=8,r.G=1,r.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new Ee(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=at(i),ut(i,this.S)):i=this.S),null!==this.o||this.N||(s.H=i,i=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=er(this,s,e),n=$e(this.F),ze(n,"RID",t),ze(n,"CVER",22),this.D&&ze(n,"X-HTTP-Session-Id",this.D),tr(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Kn(i)))+"&"+e:this.o&&Hn(n,this.o,i)),yn(this.h,s),this.Xa&&ze(n,"TYPE","init"),this.O?(ze(n,"$req",e),ze(n,"SID","null"),s.Z=!0,Ie(s,n,null)):Ie(s,n,e),this.G=2}}else 3==this.G&&(t?Zn(this,t):0==this.i.length||pn(this.h)||Zn(this))},r.Ia=function(){if(this.u=null,ir(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=le(b(this.cb,this),t)}},r.cb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ce(10),Qn(this),ir(this))},r.bb=function(){null!=this.v&&(this.v=null,Qn(this),rr(this),ce(19))},r.jb=function(t){t?(this.j.info("Successfully pinged google.com"),ce(2)):(this.j.info("Failed to ping google.com"),ce(1))},r=dr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Qa=function(){},pr.prototype.g=function(t,e){return new mr(t,e)},_(mr,It),mr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ce(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=hr(t,null,t.V),Jn(t)},mr.prototype.close=function(){Wn(this.g)},mr.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Dt(t),t=n);e.i.push(new hn(e.$a++,t)),3==e.G&&Jn(e)},mr.prototype.M=function(){this.g.l=null,delete this.j,Wn(this.g),delete this.g,mr.X.M.call(this)},_(gr,ve),_(yr,we),_(vr,dr),vr.prototype.xa=function(){kt(this.g,"a")},vr.prototype.wa=function(t){kt(this.g,new gr(t))},vr.prototype.va=function(t){kt(this.g,new yr(t))},vr.prototype.ua=function(){kt(this.g,"b")},pr.prototype.createWebChannel=pr.prototype.g,mr.prototype.send=mr.prototype.u,mr.prototype.open=mr.prototype.m,mr.prototype.close=mr.prototype.close,he.NO_ERROR=0,he.TIMEOUT=8,he.HTTP_ERROR=6,fe.COMPLETE="complete",me.EventType=ye,ye.OPEN="a",ye.CLOSE="b",ye.ERROR="c",ye.MESSAGE="d",It.prototype.listen=It.prototype.N,Rn.prototype.listenOnce=Rn.prototype.O,Rn.prototype.getLastError=Rn.prototype.Na,Rn.prototype.getLastErrorCode=Rn.prototype.Ea,Rn.prototype.getStatus=Rn.prototype.aa,Rn.prototype.getResponseJson=Rn.prototype.Ra,Rn.prototype.getResponseText=Rn.prototype.fa,Rn.prototype.send=Rn.prototype.da;var wr=u.createWebChannelTransport=function(){return new pr},br=u.getStatEventTarget=function(){return se()},Er=u.ErrorCode=he,_r=u.EventType=fe,Tr=u.Event=ne,Cr=u.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Sr=u.FetchXmlHttpFactory=Sn,Ir=u.WebChannel=me,kr=u.XhrIo=Rn;const Ar="@firebase/firestore";
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
 */class Dr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Dr.UNAUTHENTICATED=new Dr(null),Dr.GOOGLE_CREDENTIALS=new Dr("google-credentials-uid"),Dr.FIRST_PARTY=new Dr("first-party-uid"),Dr.MOCK_USER=new Dr("mock-user");
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
let Nr="9.10.0";
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
 */const xr=new o.Yd("@firebase/firestore");function Rr(){return xr.logLevel}function Or(t,...e){if(xr.logLevel<=o["in"].DEBUG){const n=e.map(Pr);xr.debug(`Firestore (${Nr}): ${t}`,...n)}}function Lr(t,...e){if(xr.logLevel<=o["in"].ERROR){const n=e.map(Pr);xr.error(`Firestore (${Nr}): ${t}`,...n)}}function Mr(t,...e){if(xr.logLevel<=o["in"].WARN){const n=e.map(Pr);xr.warn(`Firestore (${Nr}): ${t}`,...n)}}function Pr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */function Vr(t="Unexpected state"){const e=`FIRESTORE (${Nr}) INTERNAL ASSERTION FAILED: `+t;throw Lr(e),new Error(e)}function Fr(t,e){t||Vr()}function Ur(t,e){return t}
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
 */const jr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Br extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class qr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class $r{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Kr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Dr.UNAUTHENTICATED)))}shutdown(){}}class Hr{constructor(t){this.t=t,this.currentUser=Dr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new qr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new qr,t.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{Or("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Or("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new qr)}}),0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Or("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Fr("string"==typeof e.accessToken),new $r(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Fr(null===t||"string"==typeof t),new Dr(t)}}class Gr{constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r,this.type="FirstParty",this.user=Dr.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Fr(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class zr{constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r}getToken(){return Promise.resolve(new Gr(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(Dr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Wr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Qr{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,e){const n=t=>{null!=t.error&&Or("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,Or("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{Or("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?r(t):Or("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Fr("string"==typeof t.token),this.A=t.token,new Wr(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
function Yr(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */class Jr{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=Yr(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%t.length))}return n}}function Xr(t,e){return t<e?-1:t>e?1:0}function Zr(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
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
class ts{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Br(jr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Br(jr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Br(jr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Br(jr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ts.fromMillis(Date.now())}static fromDate(t){return ts.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new ts(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Xr(this.nanoseconds,t.nanoseconds):Xr(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class es{constructor(t){this.timestamp=t}static fromTimestamp(t){return new es(t)}static min(){return new es(new ts(0,0))}static max(){return new es(new ts(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class ns{constructor(t,e,n){void 0===e?e=0:e>t.length&&Vr(),void 0===n?n=t.length-e:n>t.length-e&&Vr(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===ns.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ns?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),s=e.get(r);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class rs extends ns{construct(t,e,n){return new rs(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Br(jr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new rs(e)}static emptyPath(){return new rs([])}}const ss=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class is extends ns{construct(t,e,n){return new is(t,e,n)}static isValidIdentifier(t){return ss.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),is.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new is(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(0===n.length)throw new Br(jr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new Br(jr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Br(jr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(i=!i,r++):"."!==e||i?(n+=e,r++):(s(),r++)}if(s(),i)throw new Br(jr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new is(e)}static emptyPath(){return new is([])}}
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
 */class os{constructor(t){this.path=t}static fromPath(t){return new os(rs.fromString(t))}static fromName(t){return new os(rs.fromString(t).popFirst(5))}static empty(){return new os(rs.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===rs.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return rs.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new os(new rs(t.slice()))}}
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
 */class as{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}as.UNKNOWN_ID=-1;function cs(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=es.fromTimestamp(1e9===r?new ts(n+1,0):new ts(n,r));return new ls(s,os.empty(),e)}function us(t){return new ls(t.readTime,t.key,-1)}class ls{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new ls(es.min(),os.empty(),-1)}static max(){return new ls(es.max(),os.empty(),-1)}}function hs(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=os.comparator(t.documentKey,e.documentKey),0!==n?n:Xr(t.largestBatchId,e.largestBatchId))}
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
 */const fs="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ds{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
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
 */async function ps(t){if(t.code!==jr.FAILED_PRECONDITION||t.message!==fs)throw t;Or("LocalStore","Unexpectedly lost primary lease")}
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
 */class ms{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Vr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ms(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof ms?e:ms.resolve(e)}catch(t){return ms.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):ms.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):ms.reject(e)}static resolve(t){return new ms(((e,n)=>{e(t)}))}static reject(t){return new ms(((e,n)=>{n(t)}))}static waitFor(t){return new ms(((e,n)=>{let r=0,s=0,i=!1;t.forEach((t=>{++r,t.next((()=>{++s,i&&s===r&&e()}),(t=>n(t)))})),i=!0,s===r&&e()}))}static or(t){let e=ms.resolve(!1);for(const n of t)e=e.next((t=>t?ms.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new ms(((n,r)=>{const s=t.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;e(t[c]).next((t=>{i[c]=t,++o,o===s&&n(i)}),(t=>r(t)))}}))}static doWhile(t,e){return new ms(((n,r)=>{const s=()=>{!0===t()?e().next((()=>{s()}),r):n()};s()}))}}
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
 */function gs(t){return"IndexedDbTransactionError"===t.name}
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
class ys{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}
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
 */function vs(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ws(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function bs(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */ys.at=-1;class Es{constructor(t,e){this.comparator=t,this.root=e||Ts.EMPTY}insert(t,e){return new Es(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ts.BLACK,null,null))}remove(t){return new Es(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ts.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new _s(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new _s(this.root,t,this.comparator,!1)}getReverseIterator(){return new _s(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new _s(this.root,t,this.comparator,!0)}}class _s{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ts{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=null!=n?n:Ts.RED,this.left=null!=r?r:Ts.EMPTY,this.right=null!=s?s:Ts.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new Ts(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===s?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ts.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Ts.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ts.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ts.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Vr();if(this.right.isRed())throw Vr();const t=this.left.check();if(t!==this.right.check())throw Vr();return t+(this.isRed()?0:1)}}Ts.EMPTY=null,Ts.RED=!0,Ts.BLACK=!1,Ts.EMPTY=new class{constructor(){this.size=0}get key(){throw Vr()}get value(){throw Vr()}get color(){throw Vr()}get left(){throw Vr()}get right(){throw Vr()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Ts(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Cs{constructor(t){this.comparator=t,this.data=new Es(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ss(this.data.getIterator())}getIteratorFrom(t){return new Ss(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Cs))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Cs(this.comparator);return e.data=t,e}}class Ss{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class Is{constructor(t){this.fields=t,t.sort(is.comparator)}static empty(){return new Is([])}unionWith(t){let e=new Cs(is.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Is(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Zr(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
class ks{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new ks(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ks(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Xr(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ks.EMPTY_BYTE_STRING=new ks("");const As=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ds(t){if(Fr(!!t),"string"==typeof t){let e=0;const n=As.exec(t);if(Fr(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ns(t.seconds),nanos:Ns(t.nanos)}}function Ns(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function xs(t){return"string"==typeof t?ks.fromBase64String(t):ks.fromUint8Array(t)}
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
 */function Rs(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Os(t){const e=t.mapValue.fields.__previous_value__;return Rs(e)?Os(e):e}function Ls(t){const e=Ds(t.mapValue.fields.__local_write_time__.timestampValue);return new ts(e.seconds,e.nanos)}
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
 */class Ms{constructor(t,e,n,r,s,i,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ps{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Ps("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ps&&t.projectId===this.projectId&&t.database===this.database}}function Vs(t){return null==t}function Fs(t){return 0===t&&1/t==-1/0}function Us(t){return"number"==typeof t&&Number.isInteger(t)&&!Fs(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
 */const js={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Bs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Rs(t)?4:ti(t)?9007199254740991:10:Vr()}function qs(t,e){if(t===e)return!0;const n=Bs(t);if(n!==Bs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ls(t).isEqual(Ls(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Ds(t.timestampValue),r=Ds(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return xs(t.bytesValue).isEqual(xs(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Ns(t.geoPointValue.latitude)===Ns(e.geoPointValue.latitude)&&Ns(t.geoPointValue.longitude)===Ns(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Ns(t.integerValue)===Ns(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Ns(t.doubleValue),r=Ns(e.doubleValue);return n===r?Fs(n)===Fs(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return Zr(t.arrayValue.values||[],e.arrayValue.values||[],qs);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(vs(n)!==vs(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!qs(n[s],r[s])))return!1;return!0}(t,e);default:return Vr()}}function $s(t,e){return void 0!==(t.values||[]).find((t=>qs(t,e)))}function Ks(t,e){if(t===e)return 0;const n=Bs(t),r=Bs(e);if(n!==r)return Xr(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Xr(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Ns(t.integerValue||t.doubleValue),r=Ns(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Hs(t.timestampValue,e.timestampValue);case 4:return Hs(Ls(t),Ls(e));case 5:return Xr(t.stringValue,e.stringValue);case 6:return function(t,e){const n=xs(t),r=xs(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let s=0;s<n.length&&s<r.length;s++){const t=Xr(n[s],r[s]);if(0!==t)return t}return Xr(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Xr(Ns(t.latitude),Ns(e.latitude));return 0!==n?n:Xr(Ns(t.longitude),Ns(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const t=Ks(n[s],r[s]);if(t)return t}return Xr(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===js.mapValue&&e===js.mapValue)return 0;if(t===js.mapValue)return 1;if(e===js.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),s=e.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const t=Xr(r[o],i[o]);if(0!==t)return t;const e=Ks(n[r[o]],s[i[o]]);if(0!==e)return e}return Xr(r.length,i.length)}(t.mapValue,e.mapValue);default:throw Vr()}}function Hs(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Xr(t,e);const n=Ds(t),r=Ds(e),s=Xr(n.seconds,r.seconds);return 0!==s?s:Xr(n.nanos,r.nanos)}function Gs(t){return zs(t)}function zs(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Ds(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?xs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,os.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=zs(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const s of e)r?r=!1:n+=",",n+=`${s}:${zs(t.fields[s])}`;return n+"}"}(t.mapValue):Vr();var e,n}function Ws(t){return!!t&&"integerValue"in t}function Qs(t){return!!t&&"arrayValue"in t}function Ys(t){return!!t&&"nullValue"in t}function Js(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Xs(t){return!!t&&"mapValue"in t}function Zs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ws(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Zs(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Zs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ti(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class ei{constructor(t){this.value=t}static empty(){return new ei({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Xs(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Zs(e)}setAll(t){let e=is.emptyPath(),n={},r=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=s.popLast()}t?n[s.lastSegment()]=Zs(t):r.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());Xs(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return qs(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Xs(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){ws(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new ei(Zs(this.value))}}function ni(t){const e=[];return ws(t.fields,((t,n)=>{const r=new is([t]);if(Xs(n)){const t=ni(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new Is(e)
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
 */}class ri{constructor(t,e,n,r,s,i){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=s,this.documentState=i}static newInvalidDocument(t){return new ri(t,0,es.min(),es.min(),ei.empty(),0)}static newFoundDocument(t,e,n){return new ri(t,1,e,es.min(),n,0)}static newNoDocument(t,e){return new ri(t,2,e,es.min(),ei.empty(),0)}static newUnknownDocument(t,e){return new ri(t,3,e,es.min(),ei.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ei.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ei.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=es.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ri&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ri(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class si{constructor(t,e=null,n=[],r=[],s=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.ht=null}}function ii(t,e=null,n=[],r=[],s=null,i=null,o=null){return new si(t,e,n,r,s,i,o)}function oi(t){const e=Ur(t);if(null===e.ht){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+Gs(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Vs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Gs(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Gs(t))).join(",")),e.ht=t}return e.ht}function ai(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Gs(e.value)}`;var e})).join(", ")}]`),Vs(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Gs(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Gs(t))).join(",")),`Target(${e})`}function ci(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!Ei(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!qs(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ti(t.startAt,e.startAt)&&Ti(t.endAt,e.endAt)}function ui(t){return os.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class li extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.lt(t,e,n):new hi(t,e,n):"array-contains"===e?new mi(t,n):"in"===e?new gi(t,n):"not-in"===e?new yi(t,n):"array-contains-any"===e?new vi(t,n):new li(t,e,n)}static lt(t,e,n){return"in"===e?new fi(t,n):new di(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.ft(Ks(e,this.value)):null!==e&&Bs(this.value)===Bs(e)&&this.ft(Ks(e,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Vr()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class hi extends li{constructor(t,e,n){super(t,e,n),this.key=os.fromName(n.referenceValue)}matches(t){const e=os.comparator(t.key,this.key);return this.ft(e)}}class fi extends li{constructor(t,e){super(t,"in",e),this.keys=pi("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class di extends li{constructor(t,e){super(t,"not-in",e),this.keys=pi("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function pi(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>os.fromName(t.referenceValue)))}class mi extends li{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Qs(e)&&$s(e.arrayValue,this.value)}}class gi extends li{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&$s(this.value.arrayValue,e)}}class yi extends li{constructor(t,e){super(t,"not-in",e)}matches(t){if($s(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!$s(this.value.arrayValue,e)}}class vi extends li{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Qs(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>$s(this.value.arrayValue,t)))}}class wi{constructor(t,e){this.position=t,this.inclusive=e}}class bi{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ei(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function _i(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(r=i.field.isKeyField()?os.comparator(os.fromName(o.referenceValue),n.key):Ks(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function Ti(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qs(t.position[n],e.position[n]))return!1;return!0}
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
 */class Ci{constructor(t,e=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this._t=null,this.wt=null,this.startAt,this.endAt}}function Si(t,e,n,r,s,i,o,a){return new Ci(t,e,n,r,s,i,o,a)}function Ii(t){return new Ci(t)}function ki(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Ai(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Di(t){for(const e of t.filters)if(e.dt())return e.field;return null}function Ni(t){return null!==t.collectionGroup}function xi(t){const e=Ur(t);if(null===e._t){e._t=[];const t=Di(e),n=Ai(e);if(null!==t&&null===n)t.isKeyField()||e._t.push(new bi(t)),e._t.push(new bi(is.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e._t.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new bi(is.keyField(),t))}}}return e._t}function Ri(t){const e=Ur(t);if(!e.wt)if("F"===e.limitType)e.wt=ii(e.path,e.collectionGroup,xi(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of xi(e)){const e="desc"===s.dir?"asc":"desc";t.push(new bi(s.field,e))}const n=e.endAt?new wi(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new wi(e.startAt.position,e.startAt.inclusive):null;e.wt=ii(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.wt}function Oi(t,e,n){return new Ci(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Li(t,e){return ci(Ri(t),Ri(e))&&t.limitType===e.limitType}function Mi(t){return`${oi(Ri(t))}|lt:${t.limitType}`}function Pi(t){return`Query(target=${ai(Ri(t))}; limitType=${t.limitType})`}function Vi(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):os.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=_i(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,xi(t),e))&&!(t.endAt&&!function(t,e,n){const r=_i(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,xi(t),e))}(t,e)}function Fi(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ui(t){return(e,n)=>{let r=!1;for(const s of xi(t)){const t=ji(s,e,n);if(0!==t)return t;r=r||s.field.isKeyField()}return 0}}function ji(t,e,n){const r=t.field.isKeyField()?os.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),s=n.data.field(t);return null!==r&&null!==s?Ks(r,s):Vr()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Vr()}}
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
 */function Bi(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fs(e)?"-0":e}}function qi(t){return{integerValue:""+t}}function $i(t,e){return Us(e)?qi(e):Bi(t,e)}
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
 */class Ki{constructor(){this._=void 0}}function Hi(t,e,n){return t instanceof Wi?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Qi?Yi(t,e):t instanceof Ji?Xi(t,e):function(t,e){const n=zi(t,e),r=to(n)+to(t.yt);return Ws(n)&&Ws(t.yt)?qi(r):Bi(t.It,r)}(t,e)}function Gi(t,e,n){return t instanceof Qi?Yi(t,e):t instanceof Ji?Xi(t,e):n}function zi(t,e){return t instanceof Zi?Ws(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Wi extends Ki{}class Qi extends Ki{constructor(t){super(),this.elements=t}}function Yi(t,e){const n=eo(e);for(const r of t.elements)n.some((t=>qs(t,r)))||n.push(r);return{arrayValue:{values:n}}}class Ji extends Ki{constructor(t){super(),this.elements=t}}function Xi(t,e){let n=eo(e);for(const r of t.elements)n=n.filter((t=>!qs(t,r)));return{arrayValue:{values:n}}}class Zi extends Ki{constructor(t,e){super(),this.It=t,this.yt=e}}function to(t){return Ns(t.integerValue||t.doubleValue)}function eo(t){return Qs(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */function no(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Qi&&e instanceof Qi||t instanceof Ji&&e instanceof Ji?Zr(t.elements,e.elements,qs):t instanceof Zi&&e instanceof Zi?qs(t.yt,e.yt):t instanceof Wi&&e instanceof Wi}(t.transform,e.transform)}class ro{constructor(t,e){this.version=t,this.transformResults=e}}class so{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new so}static exists(t){return new so(void 0,t)}static updateTime(t){return new so(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function io(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class oo{}function ao(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new vo(t.key,so.none()):new fo(t.key,t.data,so.none());{const n=t.data,r=ei.empty();let s=new Cs(is.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),s=s.add(t)}return new po(t.key,r,new Is(s.toArray()),so.none())}}function co(t,e,n){t instanceof fo?function(t,e,n){const r=t.value.clone(),s=go(t.fieldTransforms,e,n.transformResults);r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof po?function(t,e,n){if(!io(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=go(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(mo(t)),s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function uo(t,e,n,r){return t instanceof fo?function(t,e,n,r){if(!io(t.precondition,e))return n;const s=t.value.clone(),i=yo(t.fieldTransforms,r,e);return s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,r):t instanceof po?function(t,e,n,r){if(!io(t.precondition,e))return n;const s=yo(t.fieldTransforms,r,e),i=e.data;return i.setAll(mo(t)),i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return io(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function lo(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),s=zi(r.transform,t||null);null!=s&&(null===n&&(n=ei.empty()),n.set(r.field,s))}return n||null}function ho(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Zr(t,e,((t,e)=>no(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class fo extends oo{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class po extends oo{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function mo(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function go(t,e,n){const r=new Map;Fr(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Gi(o,a,n[s]))}return r}function yo(t,e,n){const r=new Map;for(const s of t){const t=s.transform,i=n.data.field(s.field);r.set(s.field,Hi(t,i,e))}return r}class vo extends oo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wo extends oo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */var Eo,_o;function To(t){switch(t){default:return Vr();case jr.CANCELLED:case jr.UNKNOWN:case jr.DEADLINE_EXCEEDED:case jr.RESOURCE_EXHAUSTED:case jr.INTERNAL:case jr.UNAVAILABLE:case jr.UNAUTHENTICATED:return!1;case jr.INVALID_ARGUMENT:case jr.NOT_FOUND:case jr.ALREADY_EXISTS:case jr.PERMISSION_DENIED:case jr.FAILED_PRECONDITION:case jr.ABORTED:case jr.OUT_OF_RANGE:case jr.UNIMPLEMENTED:case jr.DATA_LOSS:return!0}}function Co(t){if(void 0===t)return Lr("GRPC error has no .code"),jr.UNKNOWN;switch(t){case Eo.OK:return jr.OK;case Eo.CANCELLED:return jr.CANCELLED;case Eo.UNKNOWN:return jr.UNKNOWN;case Eo.DEADLINE_EXCEEDED:return jr.DEADLINE_EXCEEDED;case Eo.RESOURCE_EXHAUSTED:return jr.RESOURCE_EXHAUSTED;case Eo.INTERNAL:return jr.INTERNAL;case Eo.UNAVAILABLE:return jr.UNAVAILABLE;case Eo.UNAUTHENTICATED:return jr.UNAUTHENTICATED;case Eo.INVALID_ARGUMENT:return jr.INVALID_ARGUMENT;case Eo.NOT_FOUND:return jr.NOT_FOUND;case Eo.ALREADY_EXISTS:return jr.ALREADY_EXISTS;case Eo.PERMISSION_DENIED:return jr.PERMISSION_DENIED;case Eo.FAILED_PRECONDITION:return jr.FAILED_PRECONDITION;case Eo.ABORTED:return jr.ABORTED;case Eo.OUT_OF_RANGE:return jr.OUT_OF_RANGE;case Eo.UNIMPLEMENTED:return jr.UNIMPLEMENTED;case Eo.DATA_LOSS:return jr.DATA_LOSS;default:return Vr()}}(_o=Eo||(Eo={}))[_o.OK=0]="OK",_o[_o.CANCELLED=1]="CANCELLED",_o[_o.UNKNOWN=2]="UNKNOWN",_o[_o.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_o[_o.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_o[_o.NOT_FOUND=5]="NOT_FOUND",_o[_o.ALREADY_EXISTS=6]="ALREADY_EXISTS",_o[_o.PERMISSION_DENIED=7]="PERMISSION_DENIED",_o[_o.UNAUTHENTICATED=16]="UNAUTHENTICATED",_o[_o.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_o[_o.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_o[_o.ABORTED=10]="ABORTED",_o[_o.OUT_OF_RANGE=11]="OUT_OF_RANGE",_o[_o.UNIMPLEMENTED=12]="UNIMPLEMENTED",_o[_o.INTERNAL=13]="INTERNAL",_o[_o.UNAVAILABLE=14]="UNAVAILABLE",_o[_o.DATA_LOSS=15]="DATA_LOSS";
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
class So{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){ws(this.inner,((e,n)=>{for(const[r,s]of n)t(r,s)}))}isEmpty(){return bs(this.inner)}size(){return this.innerSize}}
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
 */const Io=new Es(os.comparator);function ko(){return Io}const Ao=new Es(os.comparator);function Do(...t){let e=Ao;for(const n of t)e=e.insert(n.key,n);return e}function No(t){let e=Ao;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function xo(){return Oo()}function Ro(){return Oo()}function Oo(){return new So((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Lo=new Es(os.comparator),Mo=new Cs(os.comparator);function Po(...t){let e=Mo;for(const n of t)e=e.add(n);return e}const Vo=new Cs(Xr);function Fo(){return Vo}
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
 */class Uo{constructor(t,e,n,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,jo.createSynthesizedTargetChangeForCurrentChange(t,e)),new Uo(es.min(),n,Fo(),ko(),Po())}}class jo{constructor(t,e,n,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e){return new jo(ks.EMPTY_BYTE_STRING,e,Po(),Po(),Po())}}
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
 */class Bo{constructor(t,e,n,r){this.Tt=t,this.removedTargetIds=e,this.key=n,this.Et=r}}class qo{constructor(t,e){this.targetId=t,this.At=e}}class $o{constructor(t,e,n=ks.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Ko{constructor(){this.Rt=0,this.bt=zo(),this.Pt=ks.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(t){t.approximateByteSize()>0&&(this.Vt=!0,this.Pt=t)}xt(){let t=Po(),e=Po(),n=Po();return this.bt.forEach(((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Vr()}})),new jo(this.Pt,this.vt,t,e,n)}Nt(){this.Vt=!1,this.bt=zo()}kt(t,e){this.Vt=!0,this.bt=this.bt.insert(t,e)}Mt(t){this.Vt=!0,this.bt=this.bt.remove(t)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Ho{constructor(t){this.Bt=t,this.Lt=new Map,this.Ut=ko(),this.qt=Go(),this.Kt=new Cs(Xr)}Gt(t){for(const e of t.Tt)t.Et&&t.Et.isFoundDocument()?this.Qt(e,t.Et):this.jt(e,t.key,t.Et);for(const e of t.removedTargetIds)this.jt(e,t.key,t.Et)}Wt(t){this.forEachTarget(t,(e=>{const n=this.zt(e);switch(t.state){case 0:this.Ht(e)&&n.Ct(t.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(t.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(e);break;case 3:this.Ht(e)&&(n.$t(),n.Ct(t.resumeToken));break;case 4:this.Ht(e)&&(this.Jt(e),n.Ct(t.resumeToken));break;default:Vr()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Lt.forEach(((t,n)=>{this.Ht(n)&&e(n)}))}Yt(t){const e=t.targetId,n=t.At.count,r=this.Xt(e);if(r){const t=r.target;if(ui(t))if(0===n){const n=new os(t.path);this.jt(e,n,ri.newNoDocument(n,es.min()))}else Fr(1===n);else this.Zt(e)!==n&&(this.Jt(e),this.Kt=this.Kt.add(e))}}te(t){const e=new Map;this.Lt.forEach(((n,r)=>{const s=this.Xt(r);if(s){if(n.current&&ui(s.target)){const e=new os(s.target.path);null!==this.Ut.get(e)||this.ee(r,e)||this.jt(r,e,ri.newNoDocument(e,t))}n.Dt&&(e.set(r,n.xt()),n.Nt())}}));let n=Po();this.qt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Xt(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.Ut.forEach(((e,n)=>n.setReadTime(t)));const r=new Uo(t,e,this.Kt,this.Ut,n);return this.Ut=ko(),this.qt=Go(),this.Kt=new Cs(Xr),r}Qt(t,e){if(!this.Ht(t))return;const n=this.ee(t,e.key)?2:0;this.zt(t).kt(e.key,n),this.Ut=this.Ut.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ne(e.key).add(t))}jt(t,e,n){if(!this.Ht(t))return;const r=this.zt(t);this.ee(t,e)?r.kt(e,1):r.Mt(e),this.qt=this.qt.insert(e,this.ne(e).delete(t)),n&&(this.Ut=this.Ut.insert(e,n))}removeTarget(t){this.Lt.delete(t)}Zt(t){const e=this.zt(t).xt();return this.Bt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ot(t){this.zt(t).Ot()}zt(t){let e=this.Lt.get(t);return e||(e=new Ko,this.Lt.set(t,e)),e}ne(t){let e=this.qt.get(t);return e||(e=new Cs(Xr),this.qt=this.qt.insert(t,e)),e}Ht(t){const e=null!==this.Xt(t);return e||Or("WatchChangeAggregator","Detected inactive target",t),e}Xt(t){const e=this.Lt.get(t);return e&&e.St?null:this.Bt.se(t)}Jt(t){this.Lt.set(t,new Ko),this.Bt.getRemoteKeysForTarget(t).forEach((e=>{this.jt(t,e,null)}))}ee(t,e){return this.Bt.getRemoteKeysForTarget(t).has(e)}}function Go(){return new Es(os.comparator)}function zo(){return new Es(os.comparator)}
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
 */const Wo=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Qo=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class Yo{constructor(t,e){this.databaseId=t,this.gt=e}}function Jo(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xo(t,e){return t.gt?e.toBase64():e.toUint8Array()}function Zo(t,e){return Jo(t,e.toTimestamp())}function ta(t){return Fr(!!t),es.fromTimestamp(function(t){const e=Ds(t);return new ts(e.seconds,e.nanos)}(t))}function ea(t,e){return function(t){return new rs(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function na(t){const e=rs.fromString(t);return Fr(Sa(e)),e}function ra(t,e){return ea(t.databaseId,e.path)}function sa(t,e){const n=na(e);if(n.get(1)!==t.databaseId.projectId)throw new Br(jr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Br(jr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new os(ca(n))}function ia(t,e){return ea(t.databaseId,e)}function oa(t){const e=na(t);return 4===e.length?rs.emptyPath():ca(e)}function aa(t){return new rs(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ca(t){return Fr(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function ua(t,e,n){return{name:ra(t,e),fields:n.value.mapValue.fields}}function la(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Vr()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(t,e){return t.gt?(Fr(void 0===e||"string"==typeof e),ks.fromBase64String(e||"")):(Fr(void 0===e||e instanceof Uint8Array),ks.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?jr.UNKNOWN:Co(t.code);return new Br(e,t.message||"")}(o);n=new $o(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=sa(t,r.document.name),i=ta(r.document.updateTime),o=new ei({mapValue:{fields:r.document.fields}}),a=ri.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Bo(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=sa(t,r.document),i=r.readTime?ta(r.readTime):es.min(),o=ri.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Bo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=sa(t,r.document),i=r.removedTargetIds||[];n=new Bo([],i,s,null)}else{if(!("filter"in e))return Vr();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,s=new bo(r),i=t.targetId;n=new qo(i,s)}}return n}function ha(t,e){let n;if(e instanceof fo)n={update:ua(t,e.key,e.value)};else if(e instanceof vo)n={delete:ra(t,e.key)};else if(e instanceof po)n={update:ua(t,e.key,e.data),updateMask:Ca(e.fieldMask)};else{if(!(e instanceof wo))return Vr();n={verify:ra(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Wi)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Qi)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ji)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Zi)return{fieldPath:e.field.canonicalString(),increment:n.yt};throw Vr()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Zo(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Vr()}(t,e.precondition)),n}function fa(t,e){return t&&t.length>0?(Fr(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?ta(t.updateTime):ta(e);return n.isEqual(es.min())&&(n=ta(e)),new ro(n,t.transformResults||[])}(t,e)))):[]}function da(t,e){return{documents:[ia(t,e.path)]}}function pa(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=ia(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ia(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Js(t.value))return{unaryFilter:{field:ba(t.field),op:"IS_NAN"}};if(Ys(t.value))return{unaryFilter:{field:ba(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Js(t.value))return{unaryFilter:{field:ba(t.field),op:"IS_NOT_NAN"}};if(Ys(t.value))return{unaryFilter:{field:ba(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ba(t.field),op:wa(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:ba(t.field),direction:va(t.dir)}}(t)))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(t,e){return t.gt||Vs(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function ma(t){let e=oa(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Fr(1===r);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=ya(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new bi(Ea(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Vs(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new wi(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new wi(n,e)}(n.endAt)),Si(e,s,o,i,a,"F",c,u)}function ga(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Vr()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function ya(t){return t?void 0!==t.unaryFilter?[Ta(t)]:void 0!==t.fieldFilter?[_a(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>ya(t))).reduce(((t,e)=>t.concat(e))):Vr():[]}function va(t){return Wo[t]}function wa(t){return Qo[t]}function ba(t){return{fieldPath:t.canonicalString()}}function Ea(t){return is.fromServerFormat(t.fieldPath)}function _a(t){return li.create(Ea(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Vr()}}(t.fieldFilter.op),t.fieldFilter.value)}function Ta(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ea(t.unaryFilter.field);return li.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ea(t.unaryFilter.field);return li.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ea(t.unaryFilter.field);return li.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ea(t.unaryFilter.field);return li.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Vr()}}function Ca(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Sa(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */const Ia=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ka=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Aa=ka;
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
class Da{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&co(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=uo(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=uo(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Ro();return this.mutations.forEach((r=>{const s=t.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=e.has(r.key)?null:o;const a=ao(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(es.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Po())}isEqual(t){return this.batchId===t.batchId&&Zr(this.mutations,t.mutations,((t,e)=>ho(t,e)))&&Zr(this.baseMutations,t.baseMutations,((t,e)=>ho(t,e)))}}class Na{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Fr(t.mutations.length===n.length);let r=Lo;const s=t.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new Na(t,e,n,r)}}
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
 */class Ra{constructor(t,e,n,r,s=es.min(),i=es.min(),o=ks.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(t){return new Ra(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Ra(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Ra(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
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
 */class Oa{constructor(t){this.re=t}}function La(t){const e=ma({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Oi(e,e.limit,"L"):e}
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
class Ma{constructor(){}ce(t,e){this.ae(t,e),e.he()}ae(t,e){if("nullValue"in t)this.le(e,5);else if("booleanValue"in t)this.le(e,10),e.fe(t.booleanValue?1:0);else if("integerValue"in t)this.le(e,15),e.fe(Ns(t.integerValue));else if("doubleValue"in t){const n=Ns(t.doubleValue);isNaN(n)?this.le(e,13):(this.le(e,15),Fs(n)?e.fe(0):e.fe(n))}else if("timestampValue"in t){const n=t.timestampValue;this.le(e,20),"string"==typeof n?e.de(n):(e.de(`${n.seconds||""}`),e.fe(n.nanos||0))}else if("stringValue"in t)this._e(t.stringValue,e),this.we(e);else if("bytesValue"in t)this.le(e,30),e.me(xs(t.bytesValue)),this.we(e);else if("referenceValue"in t)this.ge(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.le(e,45),e.fe(n.latitude||0),e.fe(n.longitude||0)}else"mapValue"in t?ti(t)?this.le(e,Number.MAX_SAFE_INTEGER):(this.ye(t.mapValue,e),this.we(e)):"arrayValue"in t?(this.pe(t.arrayValue,e),this.we(e)):Vr()}_e(t,e){this.le(e,25),this.Ie(t,e)}Ie(t,e){e.de(t)}ye(t,e){const n=t.fields||{};this.le(e,55);for(const r of Object.keys(n))this._e(r,e),this.ae(n[r],e)}pe(t,e){const n=t.values||[];this.le(e,50);for(const r of n)this.ae(r,e)}ge(t,e){this.le(e,37),os.fromName(t).path.forEach((t=>{this.le(e,60),this.Ie(t,e)}))}le(t,e){t.fe(e)}we(t){t.fe(2)}}Ma.Te=new Ma;
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
class Pa{constructor(){this.Ye=new Va}addToCollectionParentIndex(t,e){return this.Ye.add(e),ms.resolve()}getCollectionParents(t,e){return ms.resolve(this.Ye.getEntries(e))}addFieldIndex(t,e){return ms.resolve()}deleteFieldIndex(t,e){return ms.resolve()}getDocumentsMatchingTarget(t,e){return ms.resolve(null)}getIndexType(t,e){return ms.resolve(0)}getFieldIndexes(t,e){return ms.resolve([])}getNextCollectionGroupToUpdate(t){return ms.resolve(null)}getMinOffset(t,e){return ms.resolve(ls.min())}getMinOffsetFromCollectionGroup(t,e){return ms.resolve(ls.min())}updateCollectionGroup(t,e,n){return ms.resolve()}updateIndexEntries(t,e){return ms.resolve()}}class Va{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Cs(rs.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Cs(rs.comparator)).toArray()}}
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
 */new Uint8Array(0);class Fa{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Fa(t,Fa.DEFAULT_COLLECTION_PERCENTILE,Fa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */Fa.DEFAULT_COLLECTION_PERCENTILE=10,Fa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Fa.DEFAULT=new Fa(41943040,Fa.DEFAULT_COLLECTION_PERCENTILE,Fa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Fa.DISABLED=new Fa(-1,0,0);
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
class ja{constructor(){this.changes=new So((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ri.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ms.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
class Ba{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
 */class qa{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&uo(n.mutation,t,Is.empty(),ts.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Po()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Po()){const r=xo();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=Do();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=xo();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Po())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let s=ko();const i=Oo(),o=Oo();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof po)?s=s.insert(e.key,e):void 0!==o&&(i.set(e.key,o.mutation.getFieldMask()),uo(o.mutation,e,o.mutation.getFieldMask(),ts.now()))})),this.recalculateAndSaveOverlays(t,s).next((t=>(t.forEach(((t,e)=>i.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Ba(e,null!==(n=i.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Oo();let r=new Es(((t,e)=>t-e)),s=Po();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const s of t)s.keys().forEach((t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||Is.empty();o=s.applyToLocalView(i,o),n.set(t,o);const a=(r.get(s.batchId)||Po()).add(t);r=r.insert(s.batchId,a)}))})).next((()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Ro();c.forEach((t=>{if(!s.has(t)){const r=ao(e.get(t),n.get(t));null!==r&&u.set(t,r),s=s.add(t)}})),i.push(this.documentOverlayCache.saveOverlays(t,a,u))}return ms.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return os.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ni(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-s.size):ms.resolve(xo());let o=-1,a=s;return i.next((e=>ms.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?ms.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,s))).next((()=>this.computeViews(t,a,e,Po()))).next((t=>({batchId:o,changes:No(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new os(e)).next((t=>{let e=Do();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let s=Do();return this.indexManager.getCollectionParents(t,r).next((i=>ms.forEach(i,(i=>{const o=function(t,e){return new Ci(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,i.child(r));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((s=>(r=s,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===r.get(n)&&(r=r.insert(n,ri.newInvalidDocument(n)))}));let n=Do();return r.forEach(((r,s)=>{const i=t.get(r);void 0!==i&&uo(i.mutation,s,Is.empty(),ts.now()),Vi(e,s)&&(n=n.insert(r,s))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):ms.resolve(ri.newInvalidDocument(e))}}
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
 */class $a{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,e){return ms.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:ta(n.createTime)}),ms.resolve()}getNamedQuery(t,e){return ms.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,function(t){return{name:t.name,query:La(t.bundledQuery),readTime:ta(t.readTime)}}(e)),ms.resolve()}}
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
 */class Ka{constructor(){this.overlays=new Es(os.comparator),this.es=new Map}getOverlay(t,e){return ms.resolve(this.overlays.get(e))}getOverlays(t,e){const n=xo();return ms.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.ue(t,e,r)})),ms.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.es.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.es.delete(n)),ms.resolve()}getOverlaysForCollection(t,e,n){const r=xo(),s=e.length+1,i=new os(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===s&&t.largestBatchId>n&&r.set(t.getKey(),t)}return ms.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new Es(((t,e)=>t-e));const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=xo(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=xo(),a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return ms.resolve(o)}ue(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new xa(e,n));let s=this.es.get(e);void 0===s&&(s=Po(),this.es.set(e,s)),this.es.set(e,s.add(n.key))}}
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
 */class Ha{constructor(){this.ns=new Cs(Ga.ss),this.rs=new Cs(Ga.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new Ga(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.cs(new Ga(t,e))}hs(t,e){t.forEach((t=>this.removeReference(t,e)))}ls(t){const e=new os(new rs([])),n=new Ga(e,t),r=new Ga(e,t+1),s=[];return this.rs.forEachInRange([n,r],(t=>{this.cs(t),s.push(t.key)})),s}fs(){this.ns.forEach((t=>this.cs(t)))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new os(new rs([])),n=new Ga(e,t),r=new Ga(e,t+1);let s=Po();return this.rs.forEachInRange([n,r],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new Ga(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Ga{constructor(t,e){this.key=t,this._s=e}static ss(t,e){return os.comparator(t.key,e.key)||Xr(t._s,e._s)}static os(t,e){return Xr(t._s,e._s)||os.comparator(t.key,e.key)}}
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
 */class za{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new Cs(Ga.ss)}checkEmpty(t){return ms.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Da(s,e,n,r);this.mutationQueue.push(i);for(const o of r)this.gs=this.gs.add(new Ga(o.key,s)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return ms.resolve(i)}lookupMutationBatch(t,e){return ms.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ps(n),s=r<0?0:r;return ms.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return ms.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return ms.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Ga(e,0),r=new Ga(e,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([n,r],(t=>{const e=this.ys(t._s);s.push(e)})),ms.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Cs(Xr);return e.forEach((t=>{const e=new Ga(t,0),r=new Ga(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,r],(t=>{n=n.add(t._s)}))})),ms.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;os.isDocumentKey(s)||(s=s.child(""));const i=new Ga(new os(s),0);let o=new Cs(Xr);return this.gs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t._s)),!0)}),i),ms.resolve(this.Is(o))}Is(t){const e=[];return t.forEach((t=>{const n=this.ys(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Fr(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return ms.forEach(e.mutations,(r=>{const s=new Ga(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.gs=n}))}An(t){}containsKey(t,e){const n=new Ga(e,0),r=this.gs.firstAfterOrEqual(n);return ms.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,ms.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
 */class Wa{constructor(t){this.Es=t,this.docs=new Es(os.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,i=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ms.resolve(n?n.document.mutableCopy():ri.newInvalidDocument(e))}getEntries(t,e){let n=ko();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ri.newInvalidDocument(t))})),ms.resolve(n)}getAllFromCollection(t,e,n){let r=ko();const s=new os(e.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){const{key:t,value:{document:s}}=i.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||hs(us(s),n)<=0||(r=r.insert(s.key,s.mutableCopy()))}return ms.resolve(r)}getAllFromCollectionGroup(t,e,n,r){Vr()}As(t,e){return ms.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Qa(this)}getSize(t){return ms.resolve(this.size)}}class Qa extends ja{constructor(t){super(),this.Yn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.Yn.addEntry(t,r)):this.Yn.removeEntry(n)})),ms.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}}
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
 */class Ya{constructor(t){this.persistence=t,this.Rs=new So((t=>oi(t)),ci),this.lastRemoteSnapshotVersion=es.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Ha,this.targetCount=0,this.vs=Ua.Pn()}forEachTarget(t,e){return this.Rs.forEach(((t,n)=>e(n))),ms.resolve()}getLastRemoteSnapshotVersion(t){return ms.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ms.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),ms.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),ms.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new Ua(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,ms.resolve()}updateTargetData(t,e){return this.Dn(e),ms.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,ms.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.Rs.forEach(((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Rs.delete(i),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),ms.waitFor(s).next((()=>r))}getTargetCount(t){return ms.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return ms.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),ms.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach((e=>{s.push(r.markPotentiallyOrphaned(t,e))})),ms.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),ms.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return ms.resolve(n)}containsKey(t,e){return ms.resolve(this.Ps.containsKey(e))}}
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
 */class Ja{constructor(t,e){this.Vs={},this.overlays={},this.Ss=new ys(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Ya(this),this.indexManager=new Pa,this.remoteDocumentCache=function(t){return new Wa(t)}((t=>this.referenceDelegate.xs(t))),this.It=new Oa(e),this.Ns=new $a(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ka,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new za(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){Or("MemoryPersistence","Starting transaction:",t);const r=new Xa(this.Ss.next());return this.referenceDelegate.ks(),n(r).next((t=>this.referenceDelegate.Ms(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Os(t,e){return ms.or(Object.values(this.Vs).map((n=>()=>n.containsKey(t,e))))}}class Xa extends ds{constructor(t){super(),this.currentSequenceNumber=t}}class Za{constructor(t){this.persistence=t,this.Fs=new Ha,this.$s=null}static Bs(t){return new Za(t)}get Ls(){if(this.$s)return this.$s;throw Vr()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),ms.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),ms.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),ms.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach((t=>this.Ls.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ls.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ks(){this.$s=new Set}Ms(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ms.forEach(this.Ls,(n=>{const r=os.fromPath(n);return this.Us(t,r).next((t=>{t||e.removeEntry(r,es.min())}))})).next((()=>(this.$s=null,e.apply(t))))}updateLimboDocument(t,e){return this.Us(t,e).next((t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())}))}xs(t){return 0}Us(t,e){return ms.or([()=>ms.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Os(t,e)])}}
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
class tc{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=r}static Ci(t,e){let n=Po(),r=Po();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new tc(t,e.fromCache,n,r)}}
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
 */class ec{constructor(){this.xi=!1}initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,r){return this.ki(t,e).next((s=>s||this.Mi(t,e,r,n))).next((n=>n||this.Oi(t,e)))}ki(t,e){if(ki(e))return ms.resolve(null);let n=Ri(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=Oi(e,null,"F"),n=Ri(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const s=Po(...r);return this.Ni.getDocuments(t,s).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const i=this.Fi(e,r);return this.$i(e,i,s,n.readTime)?this.ki(t,Oi(e,null,"F")):this.Bi(t,i,e,n)}))))})))))}Mi(t,e,n,r){return ki(e)||r.isEqual(es.min())?this.Oi(t,e):this.Ni.getDocuments(t,n).next((s=>{const i=this.Fi(e,s);return this.$i(e,i,n,r)?this.Oi(t,e):(Rr()<=o["in"].DEBUG&&Or("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Pi(e)),this.Bi(t,i,e,cs(r,-1)))}))}Fi(t,e){let n=new Cs(Ui(t));return e.forEach(((e,r)=>{Vi(t,r)&&(n=n.add(r))})),n}$i(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Oi(t,e){return Rr()<=o["in"].DEBUG&&Or("QueryEngine","Using full collection scan to execute query:",Pi(e)),this.Ni.getDocumentsMatchingQuery(t,e,ls.min())}Bi(t,e,n,r){return this.Ni.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
 */class nc{constructor(t,e,n,r){this.persistence=t,this.Li=e,this.It=r,this.Ui=new Es(Xr),this.qi=new So((t=>oi(t)),ci),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new qa(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ui)))}}function rc(t,e,n,r){return new nc(t,e,n,r)}async function sc(t,e){const n=Ur(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((s=>(r=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const s=[],i=[];let o=Po();for(const t of r){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ji:t,removedBatchIds:s,addedBatchIds:i})))}))}))}function ic(t,e){const n=Ur(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const s=n.batch,i=s.keys();let o=ms.resolve();return i.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const i=n.docVersions.get(t);Fr(null!==i),e.version.compareTo(i)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,s)))}(n,t,e,s).next((()=>s.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Po();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function oc(t){const e=Ur(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Cs.getLastRemoteSnapshotVersion(t)))}function ac(t,e){const n=Ur(t),r=e.snapshotVersion;let s=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const i=n.Gi.newChangeBuffer({trackRemovals:!0});s=n.Ui;const o=[];e.targetChanges.forEach(((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(t,i.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(t,i.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(ks.EMPTY_BYTE_STRING,es.min()).withLastLimboFreeSnapshotVersion(es.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,r)),s=s.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,i)&&o.push(n.Cs.updateTargetData(t,u))}));let a=ko(),c=Po();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(cc(t,i,e.documentUpdates).next((t=>{a=t.Wi,c=t.zi}))),!r.isEqual(es.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next((e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return ms.waitFor(o).next((()=>i.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Ui=s,t)))}function cc(t,e,n){let r=Po(),s=Po();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=ko();return n.forEach(((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(es.min())?(e.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),r=r.insert(n,i)):Or("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{Wi:r,zi:s}}))}function uc(t,e){const n=Ur(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function lc(t,e){const n=Ur(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Cs.getTargetData(t,e).next((s=>s?(r=s,ms.resolve(r)):n.Cs.allocateTargetId(t).next((s=>(r=new Ra(e,s,0,t.currentSequenceNumber),n.Cs.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.Ui.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(t.targetId,t),n.qi.set(e,t.targetId)),t}))}async function hc(t,e,n){const r=Ur(t),s=r.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(t=>r.persistence.referenceDelegate.removeTarget(t,s)))}catch(t){if(!gs(t))throw t;Or("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Ui=r.Ui.remove(e),r.qi.delete(s.target)}function fc(t,e,n){const r=Ur(t);let s=es.min(),i=Po();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=Ur(t),s=r.qi.get(n);return void 0!==s?ms.resolve(r.Ui.get(s)):r.Cs.getTargetData(e,n)}(r,t,Ri(e)).next((e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{i=t}))})).next((()=>r.Li.getDocumentsMatchingQuery(t,e,n?s:es.min(),n?i:Po()))).next((t=>(dc(r,Fi(e),t),{documents:t,Hi:i})))))}function dc(t,e,n){let r=es.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Ki.set(e,r)}class pc{constructor(){this.activeTargetIds=Fo()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class mc{constructor(){this.Lr=new pc,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,e,n){this.Ur[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new pc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
 */class gc{qr(t){}shutdown(){}}
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
 */class yc{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Or("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){Or("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */class bc extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(t,e,n,r,s){const i=this.ao(t,e);Or("RestConnection","Sending: ",i,n);const o={};return this.ho(o,r,s),this.lo(t,i,o,n).then((t=>(Or("RestConnection","Received: ",t),t)),(e=>{throw Mr("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}fo(t,e,n,r,s,i){return this.co(t,e,n,r,s)}ho(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Nr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ao(t,e){const n=vc[t];return`${this.oo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}lo(t,e,n,r){return new Promise(((s,i)=>{const o=new kr;o.listenOnce(_r.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Er.NO_ERROR:const e=o.getResponseJson();Or("Connection","XHR received:",JSON.stringify(e)),s(e);break;case Er.TIMEOUT:Or("Connection",'RPC "'+t+'" timed out'),i(new Br(jr.DEADLINE_EXCEEDED,"Request time out"));break;case Er.HTTP_ERROR:const n=o.getStatus();if(Or("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(jr).indexOf(e)>=0?e:jr.UNKNOWN}(t.status);i(new Br(e,t.message))}else i(new Br(jr.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new Br(jr.UNAVAILABLE,"Connection failed."));break;default:Vr()}}finally{Or("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}_o(t,e,n){const r=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=wr(),i=br(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Sr({})),this.ho(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const a=r.join("");Or("Connection","Creating WebChannel: "+a,o);const c=s.createWebChannel(a,o);let u=!1,l=!1;const h=new wc({Hr:t=>{l?Or("Connection","Not sending because WebChannel is closed:",t):(u||(Or("Connection","Opening WebChannel transport."),c.open(),u=!0),Or("Connection","WebChannel sending:",t),c.send(t))},Jr:()=>c.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(c,Ir.EventType.OPEN,(()=>{l||Or("Connection","WebChannel transport opened.")})),f(c,Ir.EventType.CLOSE,(()=>{l||(l=!0,Or("Connection","WebChannel transport closed"),h.io())})),f(c,Ir.EventType.ERROR,(t=>{l||(l=!0,Mr("Connection","WebChannel transport errored:",t),h.io(new Br(jr.UNAVAILABLE,"The operation could not be completed")))})),f(c,Ir.EventType.MESSAGE,(t=>{var e;if(!l){const n=t.data[0];Fr(!!n);const r=n,s=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(s){Or("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=Eo[t];if(void 0!==e)return Co(e)}(t),n=s.message;void 0===e&&(e=jr.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),l=!0,h.io(new Br(e,n)),c.close()}else Or("Connection","WebChannel received:",n),h.ro(n)}})),f(i,Tr.STAT_EVENT,(t=>{t.stat===Cr.PROXY?Or("Connection","Detected buffering proxy"):t.stat===Cr.NOPROXY&&Or("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.so()}),0),h}}
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
 */function _c(t){return new Yo(t,!0)}class Tc{constructor(t,e,n=1e3,r=1.5,s=6e4){this.Hs=t,this.timerId=e,this.wo=n,this.mo=r,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(t){this.cancel();const e=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),r=Math.max(0,e-n);r>0&&Or("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,r,(()=>(this.To=Date.now(),t()))),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}
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
 */class Cc{constructor(t,e,n,r,s,i,o,a){this.Hs=t,this.Po=n,this.vo=r,this.Vo=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Tc(t,e)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,(()=>this.$o())))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,e){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,4!==t?this.xo.reset():e&&e.code===jr.RESOURCE_EXHAUSTED?(Lr(e.toString()),Lr("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):e&&e.code===jr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}qo(){}auth(){this.state=1;const t=this.Ko(this.So),e=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.So===e&&this.Go(t,n)}),(e=>{t((()=>{const t=new Br(jr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Qo(t)}))}))}Go(t,e){const n=this.Ko(this.So);this.stream=this.jo(t,e),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((t=>{n((()=>this.Qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Mo(){this.state=5,this.xo.Ao((async()=>{this.state=0,this.start()}))}Qo(t){return Or("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return e=>{this.Hs.enqueueAndForget((()=>this.So===t?e():(Or("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Sc extends Cc{constructor(t,e,n,r,s,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,i),this.It=s}jo(t,e){return this.Vo._o("Listen",t,e)}onMessage(t){this.xo.reset();const e=la(this.It,t),n=function(t){if(!("targetChange"in t))return es.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?es.min():e.readTime?ta(e.readTime):es.min()}(t);return this.listener.Wo(e,n)}zo(t){const e={};e.database=aa(this.It),e.addTarget=function(t,e){let n;const r=e.target;return n=ui(r)?{documents:da(t,r)}:{query:pa(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Xo(t,e.resumeToken):e.snapshotVersion.compareTo(es.min())>0&&(n.readTime=Jo(t,e.snapshotVersion.toTimestamp())),n}(this.It,t);const n=ga(this.It,t);n&&(e.labels=n),this.Bo(e)}Ho(t){const e={};e.database=aa(this.It),e.removeTarget=t,this.Bo(e)}}class Ic extends Cc{constructor(t,e,n,r,s,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,i),this.It=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(t,e){return this.Vo._o("Write",t,e)}onMessage(t){if(Fr(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const e=fa(t.writeResults,t.commitTime),n=ta(t.commitTime);return this.listener.Zo(n,e)}return Fr(!t.writeResults||0===t.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=aa(this.It),this.Bo(t)}Xo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>ha(this.It,t)))};this.Bo(e)}}
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
 */class kc extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.Vo=n,this.It=r,this.nu=!1}su(){if(this.nu)throw new Br(jr.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,e,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.Vo.co(t,e,n,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===jr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Br(jr.UNKNOWN,t.toString())}))}fo(t,e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.Vo.fo(t,e,n,s,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===jr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Br(jr.UNKNOWN,t.toString())}))}terminate(){this.nu=!0}}class Ac{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(t){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,"Online"===t&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Lr(e),this.ou=!1):Or("OnlineStateTracker",e)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
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
 */class Dc{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.qr((t=>{n.enqueueAndForget((async()=>{Fc(this)&&(Or("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Ur(t);e._u.add(4),await xc(e),e.gu.set("Unknown"),e._u.delete(4),await Nc(e)}(this))}))})),this.gu=new Ac(n,r)}}async function Nc(t){if(Fc(t))for(const e of t.wu)await e(!0)}async function xc(t){for(const e of t.wu)await e(!1)}function Rc(t,e){const n=Ur(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Vc(n)?Pc(n):nu(n).ko()&&Lc(n,e))}function Oc(t,e){const n=Ur(t),r=nu(n);n.du.delete(e),r.ko()&&Mc(n,e),0===n.du.size&&(r.ko()?r.Fo():Fc(n)&&n.gu.set("Unknown"))}function Lc(t,e){t.yu.Ot(e.targetId),nu(t).zo(e)}function Mc(t,e){t.yu.Ot(e),nu(t).Ho(e)}function Pc(t){t.yu=new Ho({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),nu(t).start(),t.gu.uu()}function Vc(t){return Fc(t)&&!nu(t).No()&&t.du.size>0}function Fc(t){return 0===Ur(t)._u.size}function Uc(t){t.yu=void 0}async function jc(t){t.du.forEach(((e,n)=>{Lc(t,e)}))}async function Bc(t,e){Uc(t),Vc(t)?(t.gu.hu(e),Pc(t)):t.gu.set("Unknown")}async function qc(t,e,n){if(t.gu.set("Online"),e instanceof $o&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.du.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.du.delete(r),t.yu.removeTarget(r))}(t,e)}catch(n){Or("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await $c(t,n)}else if(e instanceof Bo?t.yu.Gt(e):e instanceof qo?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(es.min()))try{const e=await oc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.yu.te(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.du.get(r);s&&t.du.set(r,s.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.du.get(e);if(!n)return;t.du.set(e,n.withResumeToken(ks.EMPTY_BYTE_STRING,n.snapshotVersion)),Mc(t,e);const r=new Ra(n.target,e,1,n.sequenceNumber);Lc(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Or("RemoteStore","Failed to raise snapshot:",e),await $c(t,e)}}async function $c(t,e,n){if(!gs(e))throw e;t._u.add(1),await xc(t),t.gu.set("Offline"),n||(n=()=>oc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Or("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Nc(t)}))}function Kc(t,e){return e().catch((n=>$c(t,n,e)))}async function Hc(t){const e=Ur(t),n=ru(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Gc(e);)try{const t=await uc(e.localStore,r);if(null===t){0===e.fu.length&&n.Fo();break}r=t.batchId,zc(e,t)}catch(t){await $c(e,t)}Wc(e)&&Qc(e)}function Gc(t){return Fc(t)&&t.fu.length<10}function zc(t,e){t.fu.push(e);const n=ru(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Wc(t){return Fc(t)&&!ru(t).No()&&t.fu.length>0}function Qc(t){ru(t).start()}async function Yc(t){ru(t).eu()}async function Jc(t){const e=ru(t);for(const n of t.fu)e.Xo(n.mutations)}async function Xc(t,e,n){const r=t.fu.shift(),s=Na.from(r,e,n);await Kc(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Hc(t)}async function Zc(t,e){e&&ru(t).Yo&&await async function(t,e){if(n=e.code,To(n)&&n!==jr.ABORTED){const n=t.fu.shift();ru(t).Oo(),await Kc(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Hc(t)}var n}(t,e),Wc(t)&&Qc(t)}async function tu(t,e){const n=Ur(t);n.asyncQueue.verifyOperationInProgress(),Or("RemoteStore","RemoteStore received new credentials");const r=Fc(n);n._u.add(3),await xc(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Nc(n)}async function eu(t,e){const n=Ur(t);e?(n._u.delete(2),await Nc(n)):e||(n._u.add(2),await xc(n),n.gu.set("Unknown"))}function nu(t){return t.pu||(t.pu=function(t,e,n){const r=Ur(t);return r.su(),new Sc(e,r.Vo,r.authCredentials,r.appCheckCredentials,r.It,n)
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
 */}(t.datastore,t.asyncQueue,{Yr:jc.bind(null,t),Zr:Bc.bind(null,t),Wo:qc.bind(null,t)}),t.wu.push((async e=>{e?(t.pu.Oo(),Vc(t)?Pc(t):t.gu.set("Unknown")):(await t.pu.stop(),Uc(t))}))),t.pu}function ru(t){return t.Iu||(t.Iu=function(t,e,n){const r=Ur(t);return r.su(),new Ic(e,r.Vo,r.authCredentials,r.appCheckCredentials,r.It,n)}(t.datastore,t.asyncQueue,{Yr:Yc.bind(null,t),Zr:Zc.bind(null,t),tu:Jc.bind(null,t),Zo:Xc.bind(null,t)}),t.wu.push((async e=>{e?(t.Iu.Oo(),await Hc(t)):(await t.Iu.stop(),t.fu.length>0&&(Or("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))}))),t.Iu
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
 */}class su{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,s){const i=Date.now()+n,o=new su(t,e,i,r,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Br(jr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function iu(t,e){if(Lr("AsyncQueue",`${e}: ${t}`),gs(t))return new Br(jr.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class ou{constructor(t){this.comparator=t?(e,n)=>t(e,n)||os.comparator(e.key,n.key):(t,e)=>os.comparator(t.key,e.key),this.keyedMap=Do(),this.sortedSet=new Es(this.comparator)}static emptySet(t){return new ou(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ou))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new ou;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
 */class au{constructor(){this.Tu=new Es(os.comparator)}track(t){const e=t.doc.key,n=this.Tu.get(e);n?0!==t.type&&3===n.type?this.Tu=this.Tu.insert(e,t):3===t.type&&1!==n.type?this.Tu=this.Tu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Tu=this.Tu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Tu=this.Tu.remove(e):1===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):Vr():this.Tu=this.Tu.insert(e,t)}Eu(){const t=[];return this.Tu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class cu{constructor(t,e,n,r,s,i,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new cu(t,e,ou.emptySet(e),s,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Li(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class uu{constructor(){this.Au=void 0,this.listeners=[]}}class lu{constructor(){this.queries=new So((t=>Mi(t)),Li),this.onlineState="Unknown",this.Ru=new Set}}async function hu(t,e){const n=Ur(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new uu),s)try{i.Au=await n.onListen(r)}catch(t){const n=iu(t,`Initialization of query '${Pi(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&mu(n)}async function fu(t,e){const n=Ur(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function du(t,e){const n=Ur(t);let r=!1;for(const s of e){const t=s.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Pu(s)&&(r=!0);e.Au=s}}r&&mu(n)}function pu(t,e,n){const r=Ur(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function mu(t){t.Ru.forEach((t=>{t.next()}))}class gu{constructor(t,e,n){this.query=t,this.vu=e,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new cu(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),e=!0):this.Cu(t,this.onlineState)&&(this.xu(t),e=!0),this.Su=t,e}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let e=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),e=!0),e}Cu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Nu||!n)&&(!t.docs.isEmpty()||"Offline"===e)}Du(t){if(t.docChanges.length>0)return!0;const e=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}xu(t){t=cu.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.Vu=!0,this.vu.next(t)}}
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
class yu{constructor(t){this.key=t}}class vu{constructor(t){this.key=t}}class wu{constructor(t,e){this.query=t,this.Lu=e,this.Uu=null,this.current=!1,this.qu=Po(),this.mutatedKeys=Po(),this.Ku=Ui(t),this.Gu=new ou(this.Ku)}get Qu(){return this.Lu}ju(t,e){const n=e?e.Wu:new au,r=e?e.Gu:this.Gu;let s=e?e.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=Vi(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.zu(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.Ku(l,a)>0||c&&this.Ku(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(o=!0)),d&&(l?(i=i.add(l),s=f?s.add(t):s.delete(t)):(i=i.delete(t),s=s.delete(t)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{Gu:i,Wu:n,$i:o,mutatedKeys:s}}zu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Gu;this.Gu=t.Gu,this.mutatedKeys=t.mutatedKeys;const s=t.Wu.Eu();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Vr()}};return n(t)-n(e)}
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
 */(t.type,e.type)||this.Ku(t.doc,e.doc))),this.Hu(n);const i=e?this.Ju():[],o=0===this.qu.size&&this.current?1:0,a=o!==this.Uu;return this.Uu=o,0!==s.length||a?{snapshot:new cu(this.query,t.Gu,r,s,t.mutatedKeys,0===o,a,!1),Yu:i}:{Yu:i}}bu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new au,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(t){return!this.Lu.has(t)&&!!this.Gu.has(t)&&!this.Gu.get(t).hasLocalMutations}Hu(t){t&&(t.addedDocuments.forEach((t=>this.Lu=this.Lu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Lu=this.Lu.delete(t))),this.current=t.current)}Ju(){if(!this.current)return[];const t=this.qu;this.qu=Po(),this.Gu.forEach((t=>{this.Xu(t.key)&&(this.qu=this.qu.add(t.key))}));const e=[];return t.forEach((t=>{this.qu.has(t)||e.push(new vu(t))})),this.qu.forEach((n=>{t.has(n)||e.push(new yu(n))})),e}Zu(t){this.Lu=t.Hi,this.qu=Po();const e=this.ju(t.documents);return this.applyChanges(e,!0)}tc(){return cu.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.Uu)}}class bu{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Eu{constructor(t){this.key=t,this.ec=!1}}class _u{constructor(t,e,n,r,s,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.nc={},this.sc=new So((t=>Mi(t)),Li),this.ic=new Map,this.rc=new Set,this.oc=new Es(os.comparator),this.uc=new Map,this.cc=new Ha,this.ac={},this.hc=new Map,this.lc=Ua.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return!0===this.fc}}async function Tu(t,e){const n=qu(t);let r,s;const i=n.sc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.tc();else{const t=await lc(n.localStore,Ri(e));n.isPrimaryClient&&Rc(n.remoteStore,t);const i=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,s=await Cu(n,e,r,"current"===i)}return s}async function Cu(t,e,n,r){t.dc=(e,n,r)=>async function(t,e,n,r){let s=e.view.ju(n);s.$i&&(s=await fc(t.localStore,e.query,!1).then((({documents:t})=>e.view.ju(t,s))));const i=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,i);return Pu(t,e.targetId,o.Yu),o.snapshot}(t,e,n,r);const s=await fc(t.localStore,e,!0),i=new wu(e,s.Hi),o=i.ju(s.documents),a=jo.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=i.applyChanges(o,t.isPrimaryClient,a);Pu(t,n,c.Yu);const u=new bu(e,n,i);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function Su(t,e){const n=Ur(t),r=n.sc.get(e),s=n.ic.get(r.targetId);if(s.length>1)return n.ic.set(r.targetId,s.filter((t=>!Li(t,e)))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await hc(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Oc(n.remoteStore,r.targetId),Lu(n,r.targetId)})).catch(ps)):(Lu(n,r.targetId),await hc(n.localStore,r.targetId,!0))}async function Iu(t,e,n){const r=$u(t);try{const t=await function(t,e){const n=Ur(t),r=ts.now(),s=e.reduce(((t,e)=>t.add(e.key)),Po());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=ko(),c=Po();return n.Gi.getEntries(t,s).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((s=>{i=s;const o=[];for(const t of e){const e=lo(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new po(t.key,e,ni(e.value.mapValue),so.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:No(i)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.ac[t.currentUser.toKey()];r||(r=new Es(Xr)),r=r.insert(e,n),t.ac[t.currentUser.toKey()]=r}(r,t.batchId,n),await Uu(r,t.changes),await Hc(r.remoteStore)}catch(t){const e=iu(t,"Failed to persist write");n.reject(e)}}async function ku(t,e){const n=Ur(t);try{const t=await ac(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.uc.get(e);r&&(Fr(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.ec=!0:t.modifiedDocuments.size>0?Fr(r.ec):t.removedDocuments.size>0&&(Fr(r.ec),r.ec=!1))})),await Uu(n,t,e)}catch(t){await ps(t)}}function Au(t,e,n){const r=Ur(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.sc.forEach(((n,r)=>{const s=r.view.bu(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=Ur(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const s of n.listeners)s.bu(e)&&(r=!0)})),r&&mu(n)}(r.eventManager,e),t.length&&r.nc.Wo(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Du(t,e,n){const r=Ur(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.uc.get(e),i=s&&s.key;if(i){let t=new Es(os.comparator);t=t.insert(i,ri.newNoDocument(i,es.min()));const n=Po().add(i),s=new Uo(es.min(),new Map,new Cs(Xr),t,n);await ku(r,s),r.oc=r.oc.remove(i),r.uc.delete(e),Fu(r)}else await hc(r.localStore,e,!1).then((()=>Lu(r,e,n))).catch(ps)}async function Nu(t,e){const n=Ur(t),r=e.batch.batchId;try{const t=await ic(n.localStore,e);Ou(n,r,null),Ru(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Uu(n,t)}catch(t){await ps(t)}}async function xu(t,e,n){const r=Ur(t);try{const t=await function(t,e){const n=Ur(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Fr(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);Ou(r,e,n),Ru(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Uu(r,t)}catch(n){await ps(n)}}function Ru(t,e){(t.hc.get(e)||[]).forEach((t=>{t.resolve()})),t.hc.delete(e)}function Ou(t,e,n){const r=Ur(t);let s=r.ac[r.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),r.ac[r.currentUser.toKey()]=s}}function Lu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc._c(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach((e=>{t.cc.containsKey(e)||Mu(t,e)}))}function Mu(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);null!==n&&(Oc(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Fu(t))}function Pu(t,e,n){for(const r of n)r instanceof yu?(t.cc.addReference(r.key,e),Vu(t,r)):r instanceof vu?(Or("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||Mu(t,r.key)):Vr()}function Vu(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||(Or("SyncEngine","New document in limbo: "+n),t.rc.add(r),Fu(t))}function Fu(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new os(rs.fromString(e)),r=t.lc.next();t.uc.set(r,new Eu(n)),t.oc=t.oc.insert(n,r),Rc(t.remoteStore,new Ra(Ri(Ii(n.path)),r,2,ys.at))}}async function Uu(t,e,n){const r=Ur(t),s=[],i=[],o=[];r.sc.isEmpty()||(r.sc.forEach(((t,a)=>{o.push(r.dc(a,e,n).then((t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),s.push(t);const e=tc.Ci(a.targetId,t);i.push(e)}})))})),await Promise.all(o),r.nc.Wo(s),await async function(t,e){const n=Ur(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>ms.forEach(e,(e=>ms.forEach(e.Si,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>ms.forEach(e.Di,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!gs(t))throw t;Or("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Ui.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.Ui=n.Ui.insert(t,s)}}}(r.localStore,i))}async function ju(t,e){const n=Ur(t);if(!n.currentUser.isEqual(e)){Or("SyncEngine","User change. New user:",e.toKey());const t=await sc(n.localStore,e);n.currentUser=e,function(t,e){t.hc.forEach((t=>{t.forEach((t=>{t.reject(new Br(jr.CANCELLED,e))}))})),t.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Uu(n,t.ji)}}function Bu(t,e){const n=Ur(t),r=n.uc.get(e);if(r&&r.ec)return Po().add(r.key);{let t=Po();const r=n.ic.get(e);if(!r)return t;for(const e of r){const r=n.sc.get(e);t=t.unionWith(r.view.Qu)}return t}}function qu(t){const e=Ur(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ku.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Bu.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Du.bind(null,e),e.nc.Wo=du.bind(null,e.eventManager),e.nc._c=pu.bind(null,e.eventManager),e}function $u(t){const e=Ur(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Nu.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xu.bind(null,e),e}class Ku{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=_c(t.databaseInfo.databaseId),this.sharedClientState=this.mc(t),this.persistence=this.gc(t),await this.persistence.start(),this.localStore=this.yc(t),this.gcScheduler=this.Ic(t,this.localStore),this.indexBackfillerScheduler=this.Tc(t,this.localStore)}Ic(t,e){return null}Tc(t,e){return null}yc(t){return rc(this.persistence,new ec,t.initialUser,this.It)}gc(t){return new Ja(Za.Bs,this.It)}mc(t){return new mc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Hu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Au(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=ju.bind(null,this.syncEngine),await eu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new lu}createDatastore(t){const e=_c(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new bc(r));var r;return function(t,e,n,r){return new kc(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,s=t=>Au(this.syncEngine,t,0),i=yc.C()?new yc:new gc,new Dc(e,n,r,s,i);var e,n,r,s,i}createSyncEngine(t,e){return function(t,e,n,r,s,i,o){const a=new _u(t,e,n,r,s,i);return o&&(a.fc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Ur(t);Or("RemoteStore","RemoteStore shutting down."),e._u.add(5),await xc(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}
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
class Gu{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ac(this.observer.next,t)}error(t){this.observer.error?this.Ac(this.observer.error,t):Lr("Uncaught Error in snapshot listener:",t)}Rc(){this.muted=!0}Ac(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
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
class zu{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Dr.UNAUTHENTICATED,this.clientId=Jr.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Or("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Or("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Br(jr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=iu(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Wu(t,e){t.asyncQueue.verifyOperationInProgress(),Or("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await sc(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function Qu(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Yu(t);Or("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>tu(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>tu(e.remoteStore,n))),t.onlineComponents=e}async function Yu(t){return t.offlineComponents||(Or("FirestoreClient","Using default OfflineComponentProvider"),await Wu(t,new Ku)),t.offlineComponents}async function Ju(t){return t.onlineComponents||(Or("FirestoreClient","Using default OnlineComponentProvider"),await Qu(t,new Hu)),t.onlineComponents}function Xu(t){return Ju(t).then((t=>t.syncEngine))}async function Zu(t){const e=await Ju(t),n=e.eventManager;return n.onListen=Tu.bind(null,e.syncEngine),n.onUnlisten=Su.bind(null,e.syncEngine),n}const tl=new Map;
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
 */function el(t,e,n){if(!n)throw new Br(jr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nl(t,e,n,r){if(!0===e&&!0===r)throw new Br(jr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function rl(t){if(!os.isDocumentKey(t))throw new Br(jr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function sl(t){if(os.isDocumentKey(t))throw new Br(jr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function il(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Vr()}function ol(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Br(jr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=il(t);throw new Br(jr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
class al{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Br(jr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Br(jr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,nl("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
 */class cl{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new al({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Br(jr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Br(jr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new al(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Kr;switch(t.type){case"gapi":const e=t.client;return new zr(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Br(jr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=tl.get(t);e&&(Or("ComponentProvider","Removing Datastore"),tl.delete(t),e.terminate())}(this),Promise.resolve()}}
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
class ul{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hl(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ul(this.firestore,t,this._key)}}class ll{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new ll(this.firestore,t,this._query)}}class hl extends ll{constructor(t,e,n){super(t,e,Ii(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ul(this.firestore,null,new os(t))}withConverter(t){return new hl(this.firestore,t,this._path)}}function fl(t,e,...n){if(t=(0,a.m9)(t),el("collection","path",e),t instanceof cl){const r=rs.fromString(e,...n);return sl(r),new hl(t,null,r)}{if(!(t instanceof ul||t instanceof hl))throw new Br(jr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(rs.fromString(e,...n));return sl(r),new hl(t.firestore,null,r)}}function dl(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=Jr.R()),el("doc","path",e),t instanceof cl){const r=rs.fromString(e,...n);return rl(r),new ul(t,null,new os(r))}{if(!(t instanceof ul||t instanceof hl))throw new Br(jr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(rs.fromString(e,...n));return rl(r),new ul(t.firestore,t instanceof hl?t.converter:null,new os(r))}}
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
class pl{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new Tc(this,"async_queue_retry"),this.jc=()=>{const t=Ec();t&&Or("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.bo()};const t=Ec();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Wc(),this.zc(t)}enterRestrictedMode(t){if(!this.Lc){this.Lc=!0,this.Gc=t||!1;const e=Ec();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.jc)}}enqueue(t){if(this.Wc(),this.Lc)return new Promise((()=>{}));const e=new qr;return this.zc((()=>this.Lc&&this.Gc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Bc.push(t),this.Hc())))}async Hc(){if(0!==this.Bc.length){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(_){if(!gs(_))throw _;Or("AsyncQueue","Operation failed with retryable error: "+_)}this.Bc.length>0&&this.xo.Ao((()=>this.Hc()))}}zc(t){const e=this.$c.then((()=>(this.Kc=!0,t().catch((t=>{this.qc=t,this.Kc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
 */(t);throw Lr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Kc=!1,t))))));return this.$c=e,e}enqueueAfterDelay(t,e,n){this.Wc(),this.Qc.indexOf(t)>-1&&(e=0);const r=su.createAndSchedule(this,t,e,n,(t=>this.Jc(t)));return this.Uc.push(r),r}Wc(){this.qc&&Vr()}verifyOperationInProgress(){}async Yc(){let t;do{t=this.$c,await t}while(t!==this.$c)}Xc(t){for(const e of this.Uc)if(e.timerId===t)return!0;return!1}Zc(t){return this.Yc().then((()=>{this.Uc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Uc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Yc()}))}ta(t){this.Qc.push(t)}Jc(t){const e=this.Uc.indexOf(t);this.Uc.splice(e,1)}}function ml(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}
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
 */(t,["next","error","complete"])}class gl extends cl{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new pl,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||wl(this),this._firestoreClient.terminate()}}function yl(t,e){const n="object"==typeof t?t:(0,s.Mq)(),r="string"==typeof t?t:e||"(default)";return(0,s.qX)(n,"firestore").getImmediate({identifier:r})}function vl(t){return t._firestoreClient||wl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function wl(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Ms(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new zu(t._authCredentials,t._appCheckCredentials,t._queue,r)}
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
class bl{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Br(jr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new is(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class El{constructor(t){this._byteString=t}static fromBase64String(t){try{return new El(ks.fromBase64String(t))}catch(t){throw new Br(jr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new El(ks.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class _l{constructor(t){this._methodName=t}}
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
 */class Tl{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Br(jr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Br(jr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Xr(this._lat,t._lat)||Xr(this._long,t._long)}}
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
 */const Cl=/^__.*__$/;class Sl{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new po(t,this.data,this.fieldMask,e,this.fieldTransforms):new fo(t,this.data,e,this.fieldTransforms)}}function Il(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Vr()}}class kl{constructor(t,e,n,r,s,i){this.settings=t,this.databaseId=e,this.It=n,this.ignoreUndefinedProperties=r,void 0===s&&this.ea(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(t){return new kl(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.sa({path:n,ra:!1});return r.oa(t),r}ua(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.sa({path:n,ra:!1});return r.ea(),r}ca(t){return this.sa({path:void 0,ra:!0})}aa(t){return Fl(t,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}ea(){if(this.path)for(let t=0;t<this.path.length;t++)this.oa(this.path.get(t))}oa(t){if(0===t.length)throw this.aa("Document fields must not be empty");if(Il(this.na)&&Cl.test(t))throw this.aa('Document fields cannot begin and end with "__"')}}class Al{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.It=n||_c(t)}fa(t,e,n,r=!1){return new kl({na:t,methodName:e,la:n,path:is.emptyPath(),ra:!1,ha:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Dl(t){const e=t._freezeSettings(),n=_c(t._databaseId);return new Al(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Nl(t,e,n,r,s,i={}){const o=t.fa(i.merge||i.mergeFields?2:0,e,n,s);Ll("Data must be an object, but it was:",o,r);const a=Rl(r,o);let c,u;if(i.merge)c=new Is(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const r of i.mergeFields){const s=Ml(e,r,n);if(!o.contains(s))throw new Br(jr.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Ul(t,s)||t.push(s)}c=new Is(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Sl(new ei(a),c,u)}function xl(t,e){if(Ol(t=(0,a.m9)(t)))return Ll("Unsupported field value:",e,t),Rl(t,e);if(t instanceof _l)return function(t,e){if(!Il(e.na))throw e.aa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.aa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ra&&4!==e.na)throw e.aa("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const s of t){let t=xl(s,e.ca(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return $i(e.It,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=ts.fromDate(t);return{timestampValue:Jo(e.It,n)}}if(t instanceof ts){const n=new ts(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Jo(e.It,n)}}if(t instanceof Tl)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof El)return{bytesValue:Xo(e.It,t._byteString)};if(t instanceof ul){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.aa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ea(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.aa(`Unsupported field value: ${il(t)}`)}(t,e)}function Rl(t,e){const n={};return bs(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ws(t,((t,r)=>{const s=xl(r,e.ia(t));null!=s&&(n[t]=s)})),{mapValue:{fields:n}}}function Ol(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof ts||t instanceof Tl||t instanceof El||t instanceof ul||t instanceof _l)}function Ll(t,e,n){if(!Ol(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=il(n);throw"an object"===r?e.aa(t+" a custom object"):e.aa(t+" "+r)}}function Ml(t,e,n){if((e=(0,a.m9)(e))instanceof bl)return e._internalPath;if("string"==typeof e)return Vl(t,e);throw Fl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Pl=new RegExp("[~\\*/\\[\\]]");function Vl(t,e,n){if(e.search(Pl)>=0)throw Fl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new bl(...e.split("."))._internalPath}catch(r){throw Fl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Br(jr.INVALID_ARGUMENT,a+t+c)}function Ul(t,e){return t.some((t=>t.isEqual(e)))}
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
 */class jl{constructor(t,e,n,r,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ul(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Bl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ql("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Bl extends jl{data(){return super.data()}}function ql(t,e){return"string"==typeof e?Vl(t,e):e instanceof bl?e._internalPath:e._delegate._internalPath}
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
 */class $l{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Kl extends jl{constructor(t,e,n,r,s,i){super(t,e,n,r,i),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Hl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(ql("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Hl extends Kl{data(t={}){return super.data(t)}}class Gl{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new $l(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Hl(this._firestore,this._userDataWriter,n.key,n,new $l(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Br(jr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new Hl(t._firestore,t._userDataWriter,n.doc.key,n.doc,new $l(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new Hl(t._firestore,t._userDataWriter,e.doc.key,e.doc,new $l(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,i=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:zl(e.type),doc:r,oldIndex:s,newIndex:i}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function zl(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Vr()}}
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
function Wl(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Br(jr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ql{}function Yl(t,...e){for(const n of e)t=n._apply(t);return t}class Jl extends Ql{constructor(t,e){super(),this.wa=t,this.ya=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new Br(jr.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new Br(jr.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new bi(e,n);return function(t,e){if(null===Ai(t)){const n=Di(t);null!==n&&Zl(t,n,e.field)}}(t,r),r}(t._query,this.wa,this.ya);return new ll(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Ci(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function Xl(t,e="asc"){const n=e,r=ql("orderBy",t);return new Jl(r,n)}function Zl(t,e,n){if(!n.isEqual(e))throw new Br(jr.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
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
class th{convertValue(t,e="none"){switch(Bs(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ns(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(xs(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Vr()}}convertObject(t,e){const n={};return ws(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new Tl(Ns(t.latitude),Ns(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Os(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Ls(t));default:return null}}convertTimestamp(t){const e=Ds(t);return new ts(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=rs.fromString(t);Fr(Sa(n));const r=new Ps(n.get(1),n.get(3)),s=new os(n.popFirst(5));return r.isEqual(e)||Lr(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
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
 */function eh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class nh extends th{constructor(t){super(),this.firestore=t}convertBytes(t){return new El(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ul(this.firestore,null,e)}}function rh(t,e){const n=ol(t.firestore,gl),r=dl(t),s=eh(t.converter,e);return ih(n,[Nl(Dl(t.firestore),"addDoc",r._key,s,null!==t.converter,{}).toMutation(r._key,so.exists(!1))]).then((()=>r))}function sh(t,...e){var n,r,s;t=(0,a.m9)(t);let i={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||ml(e[o])||(i=e[o],o++);const c={includeMetadataChanges:i.includeMetadataChanges};if(ml(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[o+2]=null===(s=t.complete)||void 0===s?void 0:s.bind(t)}let u,l,h;if(t instanceof ul)l=ol(t.firestore,gl),h=Ii(t._key.path),u={next:n=>{e[o]&&e[o](oh(l,t,n))},error:e[o+1],complete:e[o+2]};else{const n=ol(t,ll);l=ol(n.firestore,gl),h=n._query;const r=new nh(l);u={next:t=>{e[o]&&e[o](new Gl(l,r,n,t))},error:e[o+1],complete:e[o+2]},Wl(t._query)}return function(t,e,n,r){const s=new Gu(r),i=new gu(e,s,n);return t.asyncQueue.enqueueAndForget((async()=>hu(await Zu(t),i))),()=>{s.Rc(),t.asyncQueue.enqueueAndForget((async()=>fu(await Zu(t),i)))}}(vl(l),h,c,u)}function ih(t,e){return function(t,e){const n=new qr;return t.asyncQueue.enqueueAndForget((async()=>Iu(await Xu(t),e,n))),n.promise}(vl(t),e)}function oh(t,e,n){const r=n.docs.get(e._key),s=new nh(t);return new Kl(t,s,e._key,r,new $l(n.hasPendingWrites,n.fromCache),e.converter)}
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
 */!function(t,e=!0){!function(t){Nr=t}(s.Jn),(0,s.Xd)(new i.wA("firestore",((t,{instanceIdentifier:n,options:r})=>{const s=t.getProvider("app").getImmediate(),i=new gl(new Hr(t.getProvider("auth-internal")),new Qr(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Br(jr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ps(t.options.projectId,e)}
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
 */(s,n),s);return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i}),"PUBLIC").setMultipleInstances(!0)),(0,s.KN)(Ar,"3.5.0",t),(0,s.KN)(Ar,"3.5.0","esm2017")}()},744:function(t,e){"use strict";e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n}},346:function(t,e,n){"use strict";n.d(e,{ZP:function(){return y}});var r=n(252),s=n(262),i=n(963),o=n(577);const a=({modalRef:t,latest:e,show:n})=>{let s;function i(n){const r=n.target.closest(`.${m}`);if(e.value&&(!r||r!==t.value)){if(r&&!r.classList.contains(`${m}-show`))return;s=n.target}}function o(e){e?t.value&&t.value.focus():s&&s.focus()}(0,r.bv)((()=>{document.addEventListener("click",i),(0,r.YP)((()=>n.value),(t=>{(0,r.Y3)((()=>o(t)))}),{immediate:n.value})})),(0,r.Ah)((()=>{document.removeEventListener("click",i)}))},c=({close:t,closeClickDimmed:e,closeKeyCode:n,latest:s})=>{let i=null;function o(t){i=t.target}function a(n){e&&i===n.target&&t.value(),i=null}function c(e){e.keyCode===n&&s.value&&t.value()}return(0,r.bv)((()=>{n&&document.addEventListener("keyup",c)})),(0,r.Ah)((()=>{n&&document.removeEventListener("keyup",c)})),{onMouseDownDimmed:o,onMouseUpDimmed:a}},u=({modalRef:t,show:e})=>{const{visibleModals:n,addVisibleModals:s,removeVisibleModals:i}=(0,r.f3)(p),o=(0,r.Fl)((()=>{const e=[...n.value.values()];return!(!e.length||!t.value)&&e[e.length-1]===t.value}));return(0,r.YP)((()=>e.value),(()=>{(0,r.Y3)((()=>{t.value&&(e.value?s(t.value):i(t.value))}))}),{immediate:!0}),{latest:o}};var l=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};const h=(0,r.aZ)({inheritAttrs:!1,props:{close:{type:Function,default:()=>{}},disabled:{type:Boolean,default:!1},modelValue:{type:Boolean,default:!0},options:{type:Object,default:()=>({})}},emits:["before-enter","enter","after-enter","enter-cancelled","before-leave","leave","after-leave","leave-cancelled"],setup(t,e){const{teleportTarget:n}=(0,r.f3)(p),{close:i,disabled:o,options:l,modelValue:h}=(0,s.BK)(t),f=(0,s.iH)(void 0===h.value||h.value),d=(0,s.iH)(null),g=(0,s.iH)(!o.value),y={transition:300,closeClickDimmed:!0,closeKeyCode:27,styleModalContent:{},...l.value};(0,r.YP)([()=>h.value,()=>o.value],(()=>{const t=h.value&&!o.value;g.value=t,h.value&&(f.value=h.value)}),{immediate:!0});const{latest:v}=u({modalRef:d,show:g});a({latest:v,modalRef:d,show:g});const{onMouseDownDimmed:w,onMouseUpDimmed:b}=c({close:i,closeClickDimmed:y.closeClickDimmed,closeKeyCode:y.closeKeyCode,latest:v}),E={beforeEnter:()=>e.emit("before-enter"),enter:()=>e.emit("enter"),afterEnter:()=>e.emit("after-enter"),enterCancelled:()=>e.emit("enter-cancelled"),beforeLeave:()=>e.emit("before-leave"),leave:()=>e.emit("leave"),afterLeave:()=>{e.emit("after-leave"),!1===h.value&&(f.value=!1)},leaveCancelled:()=>e.emit("leave-cancelled")},_=()=>{i.value&&i.value()};return{CLASS_NAME:m,emitClose:_,inserted:f,latest:v,mergeOptions:y,modalRef:d,onMouseDownDimmed:w,onMouseUpDimmed:b,onTransitionEmit:E,show:g,teleportTarget:n,transition:y.transition?y.transition/1e3+"s":void 0}}});function f(t,e,n,s,a,c){return t.inserted?((0,r.wg)(),(0,r.j4)(r.lR,{key:0,to:t.teleportTarget,disabled:t.disabled},[(0,r.Wm)(i.uT,(0,r.dG)({appear:"",name:t.CLASS_NAME},(0,r.mx)(t.onTransitionEmit)),{default:(0,r.w5)((()=>{var n;return[(0,r.wy)((0,r._)("div",(0,r.dG)({ref:"modalRef",role:"dialog",tabindex:"-1","aria-modal":"true","aria-label":"Modal window",class:[t.CLASS_NAME,{[`${t.CLASS_NAME}-show`]:t.show},{[`${t.CLASS_NAME}-latest`]:t.latest}],style:{transitionDuration:t.transition}},t.$attrs),[(0,r._)("div",{class:(0,o.C_)(`${t.CLASS_NAME}-content`),style:(0,o.j5)({transitionDuration:t.transition,...null==(n=t.mergeOptions)?void 0:n.styleModalContent}),onMousedown:e[0]||(e[0]=(0,i.iM)(((...e)=>t.onMouseDownDimmed&&t.onMouseDownDimmed(...e)),["self"])),onMouseup:e[1]||(e[1]=(...e)=>t.onMouseUpDimmed&&t.onMouseUpDimmed(...e))},[(0,r.WI)(t.$slots,"default",{emitClose:t.emitClose}),(0,r.WI)(t.$slots,"close")],38)],16),[[i.F8,t.show]])]})),_:3},16,["name"])],8,["to","disabled"])):(0,r.kq)("",!0)}var d=l(h,[["render",f]]);const p="VueUniversalModal",m="vue-universal-modal",g=(t,e={})=>{const{teleportTarget:n="",teleportComponent:r="",teleportComponentId:i="",modalComponent:o="Modal"}=e;if(!n)return;if(r||i)return;const a=(0,s.iH)(new Set),c=t=>{a.value.add(t)},u=t=>{a.value.delete(t)};t.provide(p,{teleportTarget:n,visibleModals:(0,s.OT)(a),addVisibleModals:c,removeVisibleModals:u}),t.component(o,d)};var y={install:g}},816:function(t,e,n){"use strict";n.d(e,{Jn:function(){return mt},qX:function(){return ht},Xd:function(){return lt},Mq:function(){return yt},ZF:function(){return gt},KN:function(){return vt}});var r=n(463),s=n(333),i=n(444);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,m=new WeakMap;function g(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",i)},s=()=>{e(_(t.result)),r()},i=()=>{n(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),m.set(e,t),e}function y(t){if(f.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",i),t.removeEventListener("abort",i)},s=()=>{e(),r()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",i),t.addEventListener("abort",i)}));f.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){v=t(v)}function b(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(T(this),e),_(h.get(this))}:function(...e){return _(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return d.set(r,e.sort?e.sort():[e]),_(r)}}function E(t){return"function"===typeof t?b(t):(t instanceof IDBTransaction&&y(t),o(t,u())?new Proxy(t,v):t)}function _(t){if(t instanceof IDBRequest)return g(t);if(p.has(t))return p.get(t);const e=E(t);return e!==t&&(p.set(t,e),m.set(e,t)),e}const T=t=>m.get(t);function C(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=_(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(_(o.result),t.oldVersion,t.newVersion,_(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{i&&t.addEventListener("close",(()=>i())),s&&t.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],k=new Map;function A(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(k.get(e))return k.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=I.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!S.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&i.done]))[0]};return k.set(e,i),i}w((t=>({...t,get:(e,n,r)=>A(e,n)||t.get(e,n,r),has:(e,n)=>!!A(e,n)||t.has(e,n)})));
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
class D{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(N(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function N(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const x="@firebase/app",R="0.7.33",O=new s.Yd("@firebase/app"),L="@firebase/app-compat",M="@firebase/analytics-compat",P="@firebase/analytics",V="@firebase/app-check-compat",F="@firebase/app-check",U="@firebase/auth",j="@firebase/auth-compat",B="@firebase/database",q="@firebase/database-compat",$="@firebase/functions",K="@firebase/functions-compat",H="@firebase/installations",G="@firebase/installations-compat",z="@firebase/messaging",W="@firebase/messaging-compat",Q="@firebase/performance",Y="@firebase/performance-compat",J="@firebase/remote-config",X="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",st="9.10.0",it="[DEFAULT]",ot={[x]:"fire-core",[L]:"fire-core-compat",[P]:"fire-analytics",[M]:"fire-analytics-compat",[F]:"fire-app-check",[V]:"fire-app-check-compat",[U]:"fire-auth",[j]:"fire-auth-compat",[B]:"fire-rtdb",[q]:"fire-rtdb-compat",[$]:"fire-fn",[K]:"fire-fn-compat",[H]:"fire-iid",[G]:"fire-iid-compat",[z]:"fire-fcm",[W]:"fire-fcm-compat",[Q]:"fire-perf",[Y]:"fire-perf-compat",[J]:"fire-rc",[X]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ct=new Map;function ut(t,e){try{t.container.addComponent(e)}catch(n){O.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(ct.has(e))return O.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())ut(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
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
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}
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
 */const mt=st;function gt(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:it,automaticDataCollectionEnabled:!1},e),s=n.name;if("string"!==typeof s||!s)throw dt.create("bad-app-name",{appName:String(s)});const o=at.get(s);if(o){if((0,i.vZ)(t,o.options)&&(0,i.vZ)(n,o.config))return o;throw dt.create("duplicate-app",{appName:s})}const a=new r.H0(s);for(const r of ct.values())a.addComponent(r);const c=new pt(t,n,a);return at.set(s,c),c}function yt(t=it){const e=at.get(t);if(!e)throw dt.create("no-app",{appName:t});return e}function vt(t,e,n){var s;let i=null!==(s=ot[t])&&void 0!==s?s:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${i}" with version "${e}":`];return o&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void O.warn(t.join(" "))}lt(new r.wA(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
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
const wt="firebase-heartbeat-database",bt=1,Et="firebase-heartbeat-store";let _t=null;function Tt(){return _t||(_t=C(wt,bt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Et)}}}).catch((t=>{throw dt.create("idb-open",{originalErrorMessage:t.message})}))),_t}async function Ct(t){var e;try{const e=await Tt();return e.transaction(Et).objectStore(Et).get(It(t))}catch(n){if(n instanceof i.ZR)O.warn(n.message);else{const t=dt.create("idb-get",{originalErrorMessage:null===(e=n)||void 0===e?void 0:e.message});O.warn(t.message)}}}async function St(t,e){var n;try{const n=await Tt(),r=n.transaction(Et,"readwrite"),s=r.objectStore(Et);return await s.put(e,It(t)),r.done}catch(r){if(r instanceof i.ZR)O.warn(r.message);else{const t=dt.create("idb-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message});O.warn(t.message)}}}function It(t){return`${t.name}!${t.options.appId}`}
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
 */const kt=1024,At=2592e6;class Dt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Rt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Nt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=At})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Nt(),{heartbeatsToSend:e,unsentEntries:n}=xt(this._heartbeatsCache.heartbeats),r=(0,i.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Nt(){const t=new Date;return t.toISOString().substring(0,10)}function xt(t,e=kt){const n=[];let r=t.slice();for(const s of t){const t=n.find((t=>t.agent===s.agent));if(t){if(t.dates.push(s.date),Ot(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ot(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Rt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Ct(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Ot(t){return(0,i.L)(JSON.stringify({version:2,heartbeats:t})).length}
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
 */function Lt(t){lt(new r.wA("platform-logger",(t=>new D(t)),"PRIVATE")),lt(new r.wA("heartbeat",(t=>new Dt(t)),"PRIVATE")),vt(x,R,t),vt(x,R,"esm2017"),vt("fire-js","")}Lt("")},463:function(t,e,n){"use strict";n.d(e,{H0:function(){return u},wA:function(){return s}});var r=n(444);class s{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:i})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=i){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=i){return this.instances.has(t)}getOptions(t=i){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,i]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(s);n===t&&i.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=i){return this.component?this.component.multipleInstances?t:i:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===i?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
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
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},333:function(t,e,n){"use strict";n.d(e,{Yd:function(){return u},in:function(){return s}});
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
const r=[];var s;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(s||(s={}));const i={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},o=s.INFO,a={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),s=a[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in s))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?i[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...t),this._logHandler(this,s.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...t),this._logHandler(this,s.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,s.INFO,...t),this._logHandler(this,s.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,s.WARN,...t),this._logHandler(this,s.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...t),this._logHandler(this,s.ERROR,...t)}}}}]);
//# sourceMappingURL=chunk-vendors.d111bd85.js.map