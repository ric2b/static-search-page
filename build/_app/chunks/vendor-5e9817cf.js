function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function o(e){e.forEach(n)}function a(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e,t,n,r){if(e){const o=c(e,t,n,r);return e[0](o)}}function c(e,n,r,o){return e[1]&&o?t(r.ctx.slice(),e[1](o(n))):r.ctx}function u(e,t,n,r,o,a,s){const i=function(e,t,n,r){if(e[2]&&r){const o=e[2](r(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|o[r];return e}return t.dirty|o}return t.dirty}(t,r,o,a);if(i){const o=c(t,n,r,s);e.p(o,i)}}function l(e,t){e.appendChild(t)}function f(e,t,n){e.insertBefore(t,n||null)}function d(e){e.parentNode.removeChild(e)}function p(e){return document.createElement(e)}function h(e){return document.createTextNode(e)}function m(){return h(" ")}function g(){return h("")}function y(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function b(e){return Array.from(e.childNodes)}function v(e,t,n,r){for(let o=0;o<e.length;o+=1){const r=e[o];if(r.nodeName===t){let t=0;const a=[];for(;t<r.attributes.length;){const e=r.attributes[t++];n[e.name]||a.push(e.name)}for(let e=0;e<a.length;e++)r.removeAttribute(a[e]);return e.splice(o,1)[0]}}return r?function(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}(t):p(t)}function w(e,t){for(let n=0;n<e.length;n+=1){const r=e[n];if(3===r.nodeType)return r.data=""+t,e.splice(n,1)[0]}return h(t)}function E(e){return w(e," ")}function $(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let _;function x(e){_=e}function S(){if(!_)throw new Error("Function called outside component initialization");return _}function O(e){S().$$.on_mount.push(e)}function k(e){S().$$.after_update.push(e)}function j(e,t){S().$$.context.set(e,t)}const P=[],M=[],N=[],A=[],L=Promise.resolve();let C=!1;function q(e){N.push(e)}let T=!1;const z=new Set;function D(){if(!T){T=!0;do{for(let e=0;e<P.length;e+=1){const t=P[e];x(t),H(t.$$)}for(x(null),P.length=0;M.length;)M.pop()();for(let e=0;e<N.length;e+=1){const t=N[e];z.has(t)||(z.add(t),t())}N.length=0}while(P.length);for(;A.length;)A.pop()();C=!1,T=!1,z.clear()}}function H(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(q)}}const B=new Set;let I;function W(){I={r:0,c:[],p:I}}function F(){I.r||o(I.c),I=I.p}function R(e,t){e&&e.i&&(B.delete(e),e.i(t))}function G(e,t,n,r){if(e&&e.o){if(B.has(e))return;B.add(e),I.c.push((()=>{B.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function X(e,t){const n={},r={},o={$$scope:1};let a=e.length;for(;a--;){const s=e[a],i=t[a];if(i){for(const e in s)e in i||(r[e]=1);for(const e in i)o[e]||(n[e]=i[e],o[e]=1);e[a]=i}else for(const e in s)o[e]=1}for(const s in r)s in n||(n[s]=void 0);return n}function Y(e){return"object"==typeof e&&null!==e?e:{}}function J(e){e&&e.c()}function K(e,t){e&&e.l(t)}function Q(e,t,r,s){const{fragment:i,on_mount:c,on_destroy:u,after_update:l}=e.$$;i&&i.m(t,r),s||q((()=>{const t=c.map(n).filter(a);u?u.push(...t):o(t),e.$$.on_mount=[]})),l.forEach(q)}function U(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function V(e,t){-1===e.$$.dirty[0]&&(P.push(e),C||(C=!0,L.then(D)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Z(t,n,a,s,i,c,u=[-1]){const l=_;x(t);const f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:i,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:n.context||[]),callbacks:r(),dirty:u,skip_bound:!1};let p=!1;if(f.ctx=a?a(t,n.props||{},((e,n,...r)=>{const o=r.length?r[0]:n;return f.ctx&&i(f.ctx[e],f.ctx[e]=o)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](o),p&&V(t,e)),n})):[],f.update(),p=!0,o(f.before_update),f.fragment=!!s&&s(f.ctx),n.target){if(n.hydrate){const e=b(n.target);f.fragment&&f.fragment.l(e),e.forEach(d)}else f.fragment&&f.fragment.c();n.intro&&R(t.$$.fragment),Q(t,n.target,n.anchor,n.customElement),D()}x(l)}class ee{$destroy(){U(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const te=[];function ne(t,n=e){let r;const o=[];function a(e){if(s(t,e)&&(t=e,r)){const e=!te.length;for(let n=0;n<o.length;n+=1){const e=o[n];e[1](),te.push(e,t)}if(e){for(let e=0;e<te.length;e+=2)te[e][0](te[e+1]);te.length=0}}}return{set:a,update:function(e){a(e(t))},subscribe:function(s,i=e){const c=[s,i];return o.push(c),1===o.length&&(r=n(a)||e),s(t),()=>{const e=o.indexOf(c);-1!==e&&o.splice(e,1),0===o.length&&(r(),r=null)}}}}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;(()=>{var e={870:(e,t,n)=>{n.r(t),n.d(t,{createEndpoint:()=>o,expose:()=>u,proxy:()=>y,proxyMarker:()=>r,releaseProxy:()=>a,transfer:()=>g,transferHandlers:()=>c,windowEndpoint:()=>b,wrap:()=>f});const r=Symbol("Comlink.proxy"),o=Symbol("Comlink.endpoint"),a=Symbol("Comlink.releaseProxy"),s=Symbol("Comlink.thrown"),i=e=>"object"==typeof e&&null!==e||"function"==typeof e,c=new Map([["proxy",{canHandle:e=>i(e)&&e[r],serialize(e){const{port1:t,port2:n}=new MessageChannel;return u(e,t),[n,[n]]},deserialize:e=>(e.start(),f(e))}],["throw",{canHandle:e=>i(e)&&s in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function u(e,t=self){t.addEventListener("message",(function n(r){if(!r||!r.data)return;const{id:o,type:a,path:i}=Object.assign({path:[]},r.data),c=(r.data.argumentList||[]).map(w);let f;try{const t=i.slice(0,-1).reduce(((e,t)=>e[t]),e),n=i.reduce(((e,t)=>e[t]),e);switch(a){case 0:f=n;break;case 1:t[i.slice(-1)[0]]=w(r.data.value),f=!0;break;case 2:f=n.apply(t,c);break;case 3:f=y(new n(...c));break;case 4:{const{port1:t,port2:n}=new MessageChannel;u(e,n),f=g(t,[t])}break;case 5:f=void 0}}catch(d){f={value:d,[s]:0}}Promise.resolve(f).catch((e=>({value:e,[s]:0}))).then((e=>{const[r,s]=v(e);t.postMessage(Object.assign(Object.assign({},r),{id:o}),s),5===a&&(t.removeEventListener("message",n),l(t))}))})),t.start&&t.start()}function l(e){"MessagePort"===e.constructor.name&&e.close()}function f(e,t){return p(e,[],t)}function d(e){if(e)throw new Error("Proxy has been released and is not useable")}function p(e,t=[],n=function(){}){let r=!1;const s=new Proxy(n,{get(n,o){if(d(r),o===a)return()=>E(e,{type:5,path:t.map((e=>e.toString()))}).then((()=>{l(e),r=!0}));if("then"===o){if(0===t.length)return{then:()=>s};const n=E(e,{type:0,path:t.map((e=>e.toString()))}).then(w);return n.then.bind(n)}return p(e,[...t,o])},set(n,o,a){d(r);const[s,i]=v(a);return E(e,{type:1,path:[...t,o].map((e=>e.toString())),value:s},i).then(w)},apply(n,a,s){d(r);const i=t[t.length-1];if(i===o)return E(e,{type:4}).then(w);if("bind"===i)return p(e,t.slice(0,-1));const[c,u]=h(s);return E(e,{type:2,path:t.map((e=>e.toString())),argumentList:c},u).then(w)},construct(n,o){d(r);const[a,s]=h(o);return E(e,{type:3,path:t.map((e=>e.toString())),argumentList:a},s).then(w)}});return s}function h(e){const t=e.map(v);return[t.map((e=>e[0])),(n=t.map((e=>e[1])),Array.prototype.concat.apply([],n))];var n}const m=new WeakMap;function g(e,t){return m.set(e,t),e}function y(e){return Object.assign(e,{[r]:!0})}function b(e,t=self,n="*"){return{postMessage:(t,r)=>e.postMessage(t,n,r),addEventListener:t.addEventListener.bind(t),removeEventListener:t.removeEventListener.bind(t)}}function v(e){for(const[t,n]of c)if(n.canHandle(e)){const[r,o]=n.serialize(e);return[{type:3,name:t,value:r},o]}return[{type:0,value:e},m.get(e)||[]]}function w(e){switch(e.type){case 3:return c.get(e.name).deserialize(e.value);case 0:return e.value}}function E(e,t,n){return new Promise((r=>{const o=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(n){n.data&&n.data.id&&n.data.id===o&&(e.removeEventListener("message",t),r(n.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:o},t),n)}))}},162:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.createDbWorker=void 0;const s=a(n(870));async function i(e){if(e.data&&"eval"===e.data.action){const n=new Int32Array(e.data.notify,0,2),r=new Uint8Array(e.data.notify,8);let o;try{o={ok:await l(e.data.request)}}catch(t){console.error("worker request error",e.data.request,t),o={err:String(t)}}const a=(new TextEncoder).encode(JSON.stringify(o));r.set(a,0),n[1]=a.length,Atomics.notify(n,0)}}function c(e){if("BODY"===e.tagName)return"body";const t=[];for(;e.parentElement&&"BODY"!==e.tagName;){if(e.id){t.unshift("#"+e.id);break}{let n=1,r=e;for(;r.previousElementSibling;)r=r.previousElementSibling,n++;t.unshift(e.tagName.toLowerCase()+":nth-child("+n+")")}e=e.parentElement}return t.join(" > ")}function u(e){return Object.keys(e)}async function l(e){if(console.log("dom vtable request",e),"select"===e.type)return[...document.querySelectorAll(e.selector)].map((t=>{const n={};for(const r of e.columns)"selector"===r?n.selector=c(t):"parent"===r?t.parentElement&&(n.parent=t.parentElement?c(t.parentElement):null):"idx"===r||(n[r]=t[r]);return n}));if("insert"===e.type){if(!e.value.parent)throw Error('"parent" column must be set when inserting');const t=document.querySelectorAll(e.value.parent);if(0===t.length)throw Error(`Parent element ${e.value.parent} could not be found`);if(t.length>1)throw Error(`Parent element ${e.value.parent} ambiguous (${t.length} results)`);const n=t[0];if(!e.value.tagName)throw Error("tagName must be set for inserting");const r=document.createElement(e.value.tagName);for(const o of u(e.value))if(null!==e.value[o]){if("tagName"===o||"parent"===o)continue;if("idx"===o||"selector"===o)throw Error(`${o} can't be set`);r[o]=e.value[o]}return n.appendChild(r),null}if("update"===e.type){const t=document.querySelector(e.value.selector);if(!t)throw Error(`Element ${e.value.selector} not found!`);const n=[];for(const r of u(e.value)){const o=e.value[r];if("parent"!==r){if("idx"!==r&&"selector"!==r&&o!==t[r]){if(console.log("SETTING ",r,t[r],"->",o),"tagName"===r)throw Error("can't change tagName");n.push(r)}}else if(o!==c(t.parentElement)){const e=document.querySelectorAll(o);if(1!==e.length)throw Error(`Invalid target parent: found ${e.length} matches`);e[0].appendChild(t)}}for(const r of n)t[r]=e.value[r];return null}throw Error(`unknown request ${e.type}`)}s.transferHandlers.set("WORKERSQLPROXIES",{canHandle:e=>!1,serialize(e){throw Error("no")},deserialize:e=>(e.start(),s.wrap(e))}),t.createDbWorker=async function(e,t,n){const r=new Worker(t),o=s.wrap(r),a=await o.SplitFileHttpDatabase(n,e);return r.addEventListener("message",i),{db:a,worker:o,configs:e}}},432:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(162),t)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(432)})();export{t as A,W as B,ne as C,i as D,u as E,l as F,e as G,ee as S,b as a,y as b,v as c,d,p as e,f,w as g,$ as h,Z as i,J as j,m as k,g as l,K as m,E as n,Q as o,X as p,Y as q,G as r,s,h as t,F as u,R as v,U as w,j as x,k as y,O as z};
