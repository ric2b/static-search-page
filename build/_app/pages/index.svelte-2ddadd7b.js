import{S as e,i as s,s as t,e as o,t as r,k as a,c as i,a as n,g as c,d as l,n as u,f as d,F as f,G as p,H as m}from"../chunks/vendor-fe6d23c3.js";function g(e){let s,t,m,g,h,w,k;return{c(){s=o("p"),t=r("Title: "),m=r(title),g=a(),h=o("p"),w=r("Description: "),k=r(description)},l(e){s=i(e,"P",{});var o=n(s);t=c(o,"Title: "),m=c(o,title),o.forEach(l),g=u(e),h=i(e,"P",{});var r=n(h);w=c(r,"Description: "),k=c(r,description),r.forEach(l)},m(e,o){d(e,s,o),f(s,t),f(s,m),d(e,g,o),d(e,h,o),f(h,w),f(h,k)},p:p,i:p,o:p,d(e){e&&l(s),e&&l(g),e&&l(h)}}}function h(e){const{createDbWorker:s}=m;console.log("starting");const t={from:"inline",config:{serverMode:"full",requestChunkSize:4096,url:"example.sqlite3"}};return async function(){const e=await s([t],"sqlite.worker.js".toString(),"sql-wasm.wasm".toString()),o=await e.db.exec("select title, description from documents where title = ?",["10 Years"]);console.log(o),console.log("started")}(),[]}export default class extends e{constructor(e){super(),s(this,e,h,g,t,{})}}
