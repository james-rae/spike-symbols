import{r as l,t as d,l as o,j as u,n as p}from"./spike-symbols.js";const m=()=>p.getLogger("esri.intl.substitute");function h(e,t,r={}){const{format:n={}}=r;return l(e,i=>b(i,t,n))}function b(e,t,r){let n,i;const a=e.indexOf(":");if(a===-1?n=e.trim():(n=e.slice(0,a).trim(),i=e.slice(a+1).trim()),!n)return"";const s=d(n,t);if(s==null)return"";const f=(i?r==null?void 0:r[i]:null)??(r==null?void 0:r[n]);return f?g(s,f):i?w(s,i):c(s)}function g(e,t){switch(t.type){case"date":return u(e,t.intlOptions);case"number":return o(e,t.intlOptions);default:return m().warn("missing format descriptor for key {key}"),c(e)}}function w(e,t){switch(t.toLowerCase()){case"dateformat":return u(e);case"numberformat":return o(e);default:return m().warn(`inline format is unsupported since 4.12: ${t}`),/^(dateformat|datestring)/i.test(t)?u(e):/^numberformat/i.test(t)?o(e):c(e)}}function c(e){switch(typeof e){case"string":return e;case"number":return o(e);case"boolean":return""+e;default:return e instanceof Date?u(e):""}}export{h as s};
//# sourceMappingURL=substitute-DKD-8mSu.js.map
