import{d as q}from"./ClassBreaksDefinition-BDriidlr.js";import{n as C}from"./spike-symbols.js";const w=()=>C.getLogger("esri.rest.support.generateRendererUtils");function v(n,t){return Number(n.toFixed(t))}function E(n){const{normalizationTotal:t}=n;return{classBreaks:B(n),normalizationTotal:t}}function B(n){const t=n.definition,{classificationMethod:e,normalizationType:l,definedInterval:i}=t,o=t.breakCount??1,r=[];let a=n.values;if(a.length===0)return[];a=a.sort((f,d)=>f-d);const m=a[0],p=a[a.length-1];if(e==="equal-interval")if(a.length>=o){const f=(p-m)/o;let d=m;for(let s=1;s<o;s++){const u=v(m+s*f,6);r.push({minValue:d,maxValue:u,label:b(d,u,l)}),d=u}r.push({minValue:d,maxValue:p,label:b(d,p,l)})}else a.forEach(f=>{r.push({minValue:f,maxValue:f,label:b(f,f,l)})});else if(e==="natural-breaks"){const f=O(a),d=n.valueFrequency||f.valueFrequency,s=U(f.uniqueValues,d,o);let u=m;for(let c=1;c<o;c++)if(f.uniqueValues.length>c){const h=v(f.uniqueValues[s[c]],6);r.push({minValue:u,maxValue:h,label:b(u,h,l)}),u=h}r.push({minValue:u,maxValue:p,label:b(u,p,l)})}else if(e==="quantile")if(a.length>=o&&m!==p){let f=m,d=Math.ceil(a.length/o),s=0;for(let u=1;u<o;u++){let c=d+s-1;c>a.length&&(c=a.length-1),c<0&&(c=0),r.push({minValue:f,maxValue:a[c],label:b(f,a[c],l)}),f=a[c],s+=d,d=Math.ceil((a.length-s)/(o-u))}r.push({minValue:f,maxValue:p,label:b(f,p,l)})}else{let f=-1;for(let d=0;d<a.length;d++){const s=a[d];s!==f&&(f=s,r.push({minValue:f,maxValue:s,label:b(f,s,l)}),f=s)}}else if(e==="standard-deviation"){const f=G(a),d=A(a,f);if(d===0)r.push({minValue:a[0],maxValue:a[0],label:b(a[0],a[0],l)});else{const s=L(m,p,o,f,d)*d;let u=0,c=m;for(let g=o;g>=1;g--){const V=v(f-(g-.5)*s,6);r.push({minValue:c,maxValue:V,label:b(c,V,l)}),c=V,u++}let h=v(f+.5*s,6);r.push({minValue:c,maxValue:h,label:b(c,h,l)}),c=h,u++;for(let g=1;g<=o;g++)h=u===2*o?p:v(f+(g+.5)*s,6),r.push({minValue:c,maxValue:h,label:b(c,h,l)}),c=h,u++}}else if(e==="defined-interval"){if(!i)return r;const f=a[0],d=a[a.length-1],s=Math.ceil((d-f)/i);let u=f;for(let c=1;c<s;c++){const h=v(f+c*i,6);r.push({minValue:u,maxValue:h,label:b(u,h,l)}),u=h}r.push({minValue:u,maxValue:d,label:b(u,d,l)})}return r}function b(n,t,e){let l=null;return l=n===t?e&&e==="percent-of-total"?n+"%":n.toString():e&&e==="percent-of-total"?n+"% - "+t+"%":n+" - "+t,l}function O(n){const t=[],e=[];let l=Number.MIN_VALUE,i=1,o=-1;for(let r=0;r<n.length;r++){const a=n[r];a===l?(i++,e[o]=i):a!==null&&(t.push(a),l=a,i=1,e.push(i),o++)}return{uniqueValues:t,valueFrequency:e}}function U(n,t,e){const l=n.length,i=[];e>l&&(e=l);for(let r=0;r<e;r++)i.push(Math.round(r*l/e-1));i.push(l-1);let o=I(i,n,t,e);return P(o.mean,o.sdcm,i,n,t,e)&&(o=I(i,n,t,e)),i}function I(n,t,e,l){let i=[],o=[],r=[],a=0;const m=[],p=[];for(let u=0;u<l;u++){const c=x(u,n,t,e);m.push(c.sbMean),p.push(c.sbSdcm),a+=p[u]}let f,d=a,s=!0;for(;s||a<d;){s=!1,i=[];for(let u=0;u<l;u++)i.push(n[u]);for(let u=0;u<l;u++)for(let c=n[u]+1;c<=n[u+1];c++)if(f=t[c],u>0&&c!==n[u+1]&&Math.abs(f-m[u])>Math.abs(f-m[u-1]))n[u]=c;else if(u<l-1&&n[u]!==c-1&&Math.abs(f-m[u])>Math.abs(f-m[u+1])){n[u+1]=c-1;break}d=a,a=0,o=[],r=[];for(let u=0;u<l;u++){o.push(m[u]),r.push(p[u]);const c=x(u,n,t,e);m[u]=c.sbMean,p[u]=c.sbSdcm,a+=p[u]}}if(a>d){for(let u=0;u<l;u++)n[u]=i[u],m[u]=o[u],p[u]=r[u];a=d}return{mean:m,sdcm:p}}function P(n,t,e,l,i,o){let r=0,a=0,m=0,p=0,f=!0;for(let d=0;d<2&&f;d++){d===0&&(f=!1);for(let s=0;s<o-1;s++)for(;e[s+1]+1!==e[s+2];){e[s+1]=e[s+1]+1;const u=x(s,e,l,i);m=u.sbMean,r=u.sbSdcm;const c=x(s+1,e,l,i);if(p=c.sbMean,a=c.sbSdcm,!(r+a<t[s]+t[s+1])){e[s+1]=e[s+1]-1;break}t[s]=r,t[s+1]=a,n[s]=m,n[s+1]=p,f=!0}for(let s=o-1;s>0;s--)for(;e[s]!==e[s-1]+1;){e[s]=e[s]-1;const u=x(s-1,e,l,i);m=u.sbMean,r=u.sbSdcm;const c=x(s,e,l,i);if(p=c.sbMean,a=c.sbSdcm,!(r+a<t[s-1]+t[s])){e[s]=e[s]+1;break}t[s-1]=r,t[s]=a,n[s-1]=m,n[s]=p,f=!0}}return f}function L(n,t,e,l,i){let o=Math.max(l-n,t-l)/i/e;return o=o>=1?1:o>=.5?.5:.25,o}function G(n){let t=0;for(let e=0;e<n.length;e++)t+=n[e];return t/=n.length,t}function A(n,t){let e=0;for(let l=0;l<n.length;l++){const i=n[l];e+=(i-t)*(i-t)}return e/=n.length,Math.sqrt(e)}function x(n,t,e,l){let i=0,o=0;for(let m=t[n]+1;m<=t[n+1];m++){const p=l[m];i+=e[m]*p,o+=p}o<=0&&w().warn("Exception in Natural Breaks calculation");const r=i/o;let a=0;for(let m=t[n]+1;m<=t[n+1];m++)a+=l[m]*(e[m]-r)**2;return{sbMean:r,sbSdcm:a}}const _="<Null>",Y="equal-interval",j=1,Q=5,R=10,H=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,J=new Set(["esriFieldTypeDate","esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeOID","esriFieldTypeBigInteger"]),K=new Set(["esriFieldTypeTimeOnly","esriFieldTypeDateOnly"]),W=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function T(n){return n==null||typeof n=="string"&&!n?_:n}function X(n){const t=n.normalizationField!=null||n.normalizationType!=null,e=n.minValue!=null||n.maxValue!=null,l=!!n.sqlExpression&&n.supportsSQLExpression;return!t&&!e&&!l}function bn(n){var r,a;const{outStatisticTypes:t}=n,e=n.returnDistinct?[...new Set(n.values)]:n.values,l=e.filter(m=>m!=null).sort(),i=l.length,o={count:i,min:l[0],max:l[i-1]};return n.supportsNullCount&&(o.nullcount=e.length-i),!n.percentileParams||(r=t==null?void 0:t.include)!=null&&r.length&&!t.include.includes("median")||(a=t==null?void 0:t.exclude)!=null&&a.length&&t.exclude.includes("median")||(o.median=N(e,n.percentileParams)),o}function Z(n){var h,g;const{values:t,useSampleStdDev:e,supportsNullCount:l,outStatisticTypes:i}=n;let o=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY,a=null,m=null,p=null,f=null,d=0;const s=n.minValue==null?-1/0:n.minValue,u=n.maxValue==null?1/0:n.maxValue;for(const V of t)Number.isFinite(V)?V>=s&&V<=u&&(a=a===null?V:a+V,o=Math.min(o,V),r=Math.max(r,V),d++):typeof V=="string"&&d++;if(d&&a!=null){m=a/d;let V=0;for(const y of t)Number.isFinite(y)&&y>=s&&y<=u&&(V+=(y-m)**2);f=e?d>1?V/(d-1):0:d>0?V/d:0,p=Math.sqrt(f)}else o=null,r=null;const c={avg:m,count:d,max:r,min:o,stddev:p,sum:a,variance:f};return l&&(c.nullcount=t.length-d),!n.percentileParams||(h=i==null?void 0:i.include)!=null&&h.length&&!i.include.includes("median")||(g=i==null?void 0:i.exclude)!=null&&g.length&&i.exclude.includes("median")||(c.median=N(t,n.percentileParams)),c}function N(n,t){const{fieldType:e,value:l,orderBy:i,isDiscrete:o}=t,r=nn(e,i==="desc");if((n=[...n].filter(u=>u!=null).sort((u,c)=>r(u,c))).length===0)return null;if(l<=0)return n[0];if(l>=1)return n[n.length-1];const a=(n.length-1)*l,m=Math.floor(a),p=m+1,f=a%1,d=n[m],s=n[p];return p>=n.length||o||typeof d=="string"||typeof s=="string"?d:d*(1-f)+s*f}function nn(n,t){if(n){if(J.has(n))return D(t);if(K.has(n))return z(t,!1);if(n==="esriFieldTypeTimestampOffset")return ln(t);const r=z(t,!0);if(n==="esriFieldTypeString")return r;if(n==="esriFieldTypeGUID"||n==="esriFieldTypeGlobalID")return(a,m)=>r($(a),$(m))}const e=t?1:-1,l=D(t),i=z(t,!0),o=k(t);return(r,a)=>typeof r=="number"&&typeof a=="number"?l(r,a):typeof r=="string"&&typeof a=="string"?i(r,a):o(r,a)??e}const F=(n,t)=>n==null?t==null?0:1:t==null?-1:null,M=(n,t)=>n==null?t==null?0:-1:t==null?1:null;function k(n){return n?F:M}const tn=(n,t)=>M(n,t)??(n===t?0:new Date(n).getTime()-new Date(t).getTime()),en=(n,t)=>F(n,t)??(n===t?0:new Date(t).getTime()-new Date(n).getTime());function ln(n){return n?en:tn}const an=(n,t)=>M(n,t)??(n===t?0:n<t?-1:1),un=(n,t)=>F(n,t)??(n===t?0:n<t?1:-1);function z(n,t){if(!t)return n?un:an;const e=k(n);return n?(l,i)=>{const o=e(l,i);return o??((l=l.toUpperCase())>(i=i.toUpperCase())?-1:l<i?1:0)}:(l,i)=>{const o=e(l,i);return o??((l=l.toUpperCase())<(i=i.toUpperCase())?-1:l>i?1:0)}}const on=(n,t)=>F(n,t)??t-n,rn=(n,t)=>M(n,t)??n-t;function D(n){return n?on:rn}function $(n){return n.slice(24,36)+n.slice(19,23)+n.slice(16,18)+n.slice(14,16)+n.slice(11,13)+n.slice(9,11)+n.slice(6,8)+n.slice(4,6)+n.slice(2,4)+n.slice(0,2)}function gn(n,t,e){var i,o;let l;for(l in n)(i=t==null?void 0:t.include)!=null&&i.length&&!t.include.includes(l)||(o=t==null?void 0:t.exclude)!=null&&o.length&&t.exclude.includes(l)?delete n[l]:W.includes(l)&&(Number.isFinite(n[l])||(n[l]=null));return e&&["avg","stddev","variance"].forEach(r=>{n[r]!=null&&(n[r]=Math.ceil(n[r]??0))}),n}function vn(n){const t={};for(let e of n)(e==null||typeof e=="string"&&e.trim()==="")&&(e=null),t[e]==null?t[e]={count:1,data:e}:t[e].count++;return{count:t}}function S(n){return(n==null?void 0:n.type)!=="coded-value"?[]:n.codedValues.map(t=>t.code)}function xn(n,t,e,l){const i=n.count,o=[];if(e&&t){const r=[],a=S(t[0]);for(const m of a)if(t[1]){const p=S(t[1]);for(const f of p)if(t[2]){const d=S(t[2]);for(const s of d)r.push(`${T(m)}${l}${T(f)}${l}${T(s)}`)}else r.push(`${T(m)}${l}${T(f)}`)}else r.push(m);for(const m of r)i.hasOwnProperty(m)||(i[m]={data:m,count:0})}for(const r in i){const a=i[r];o.push({value:a.data,count:a.count,label:a.label})}return{uniqueValueInfos:o}}function Tn(n,t,e,l){let i=null;switch(t){case"log":n!==0&&(i=Math.log(n)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(l)&&l!==0&&(i=n/l*100);break;case"field":Number.isFinite(e)&&e!==0&&(i=n/e);break;case"natural-log":n>0&&(i=Math.log(n));break;case"square-root":n>0&&(i=n**.5)}return i}function sn(n,t){const e=mn({field:t.field,normalizationType:t.normalizationType,normalizationField:t.normalizationField,classificationMethod:t.classificationMethod,standardDeviationInterval:t.standardDeviationInterval,breakCount:t.numClasses||Q});return n=cn(n,t.minValue,t.maxValue),E({definition:e,values:n,normalizationTotal:t.normalizationTotal})}function cn(n,t,e){const l=t??-1/0,i=e??1/0;return n.filter(o=>Number.isFinite(o)&&o>=l&&o<=i)}function mn(n){const{breakCount:t,field:e,normalizationField:l,normalizationType:i}=n,o=n.classificationMethod||Y,r=o==="standard-deviation"?n.standardDeviationInterval||j:void 0,a=o==="defined-interval"?n.definedInterval:void 0;return new q({breakCount:t,classificationField:e,classificationMethod:o,normalizationField:i==="field"?l:void 0,normalizationType:i,standardDeviationInterval:r,definedInterval:a})}function yn(n,t){var m,p;let e=n.classBreaks;const l=e.length,i=(m=e[0])==null?void 0:m.minValue,o=(p=e[l-1])==null?void 0:p.maxValue,r=t==="standard-deviation",a=H;return e=e.map(f=>{const d=f.label,s={minValue:f.minValue,maxValue:f.maxValue,label:d};if(r&&d){const u=d.match(a),c=(u==null?void 0:u.map(h=>+h.trim()))??[];c.length===2?(s.minStdDev=c[0],s.maxStdDev=c[1],c[0]<0&&c[1]>0&&(s.hasAvg=!0)):c.length===1&&(d.includes("<")?(s.minStdDev=null,s.maxStdDev=c[0]):d.includes(">")&&(s.minStdDev=c[0],s.maxStdDev=null))}return s}),{minValue:i,maxValue:o,classBreakInfos:e,normalizationTotal:n.normalizationTotal}}function Fn(n,t){const e=fn(n,t);if(e.min==null&&e.max==null)return{bins:[],minValue:e.min,maxValue:e.max,normalizationTotal:t.normalizationTotal};const l=e.intervals,i=e.min??0,o=e.max??0,r=l.map((a,m)=>({minValue:l[m][0],maxValue:l[m][1],count:0}));for(const a of n)if(a!=null&&a>=i&&a<=o){const m=dn(l,a);m>-1&&r[m].count++}return{bins:r,minValue:i,maxValue:o,normalizationTotal:t.normalizationTotal}}function fn(n,t){const{field:e,classificationMethod:l,standardDeviationInterval:i,normalizationType:o,normalizationField:r,normalizationTotal:a,minValue:m,maxValue:p}=t,f=t.numBins||R;let d=null,s=null,u=null;if((!l||l==="equal-interval")&&!o){if(m!=null&&p!=null)d=m,s=p;else{const c=Z({values:n,minValue:m,maxValue:p,useSampleStdDev:!o,supportsNullCount:X({normalizationType:o,normalizationField:r,minValue:m,maxValue:p})});d=c.min??null,s=c.max??null}u=pn(d??0,s??0,f)}else{const{classBreaks:c}=sn(n,{field:e,normalizationType:o,normalizationField:r,normalizationTotal:a,classificationMethod:l,standardDeviationInterval:i,minValue:m,maxValue:p,numClasses:f});d=c[0].minValue,s=c[c.length-1].maxValue,u=c.map(h=>[h.minValue,h.maxValue])}return{min:d,max:s,intervals:u}}function dn(n,t){let e=-1;for(let l=n.length-1;l>=0;l--)if(t>=n[l][0]){e=l;break}return e}function pn(n,t,e){const l=(t-n)/e,i=[];let o,r=n;for(let a=1;a<=e;a++)o=r+l,o=Number(o.toFixed(16)),i.push([r,a===e?t:o]),r=o;return i}export{xn as $,Tn as B,gn as C,sn as E,yn as P,Fn as U,X as d,bn as f,nn as g,vn as k,T as m,Z as p,N as v};
//# sourceMappingURL=utils-BIMTktEB.js.map
