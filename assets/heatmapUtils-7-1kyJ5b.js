import{c1 as u,c2 as l,b7 as m}from"./spike-symbols.js";import{_ as p}from"./vec42-CGd3qQJJ.js";import{n as h}from"./vec4f64-CMoMXWBi.js";const s=2.4;function x(r){return u(r*s)}function b(r){return l(r)/s}function y(r,c,t,a){let{color:e,ratio:i}=c,{color:f,ratio:o}=t;o===i&&(o===1?i-=1e-6:o+=1e-6);const n=m((a-i)/(o-i),0,1);p(r,e.toArray(),f.toArray(),n)}function d(r){const t=new Uint8ClampedArray(2048);if(r=r.filter(({ratio:o})=>o>=0&&o<=1).sort((o,n)=>o.ratio-n.ratio).map(({color:o,ratio:n})=>({color:o,ratio:Math.max(n,.001)})),r.length<1)return t;let a=r[0],e=r[0],i=1;const f=h();for(let o=0;o<512;o++){const n=(o+.5)/512;for(;n>e.ratio&&i<r.length;)a=e,e=r[i++];y(f,a,e,n),t.set(f,4*o)}return t}function q(r,c,t){const a=Math.sqrt(r**2+c**2)/t;return a>1?0:3/(Math.PI*t**2)*(1-a**2)**2}function w(r){return typeof r=="function"?r:r?c=>+c[r]:()=>1}export{b as a,s as c,x as e,d as f,q as l,w as u};
//# sourceMappingURL=heatmapUtils-7-1kyJ5b.js.map