import{E as h}from"./BufferObject-CSPERlzr.js";import{r as c}from"./Program-Cxdj17lW.js";import{x as g,s as y}from"./Program-Cxdj17lW.js";import{C as F}from"./spike-symbols.js";import{t as p}from"./NestedMap-GuqgquCN.js";import{e as C,a as O}from"./ProgramTemplate-DplDQ5RO.js";import{o as w}from"./VertexArrayObject-DAMe4oiC.js";class x{constructor(e){this._rctx=e,this._store=new p}dispose(){this._store.forAll(e=>e.dispose()),this._store.clear()}acquire(e,t,o,n){const r=this._store.get(e,t);if(r!=null)return r.ref(),r;const s=new c(this._rctx,e,t,o,n);return s.ref(),this._store.set(e,t,s),s}get test(){}}function l(f){const{options:e,value:t}=f;return typeof e[t]=="number"}function $(f){let e="";for(const t in f){const o=f[t];if(typeof o=="boolean")o&&(e+=`#define ${t}
`);else if(typeof o=="number")e+=`#define ${t} ${o.toFixed()}
`;else if(typeof o=="object")if(l(o)){const{value:n,options:r,namespace:s}=o,i=s?`${s}_`:"";for(const a in r)e+=`#define ${i}${a} ${r[a].toFixed()}
`;e+=`#define ${t} ${i}${n}
`}else{const n=o.options;let r=0;for(const s in n)e+=`#define ${n[s]} ${(r++).toFixed()}
`;e+=`#define ${t} ${n[o.value]}
`}}return e}export{h as BufferObject,g as FramebufferObject,c as Program,x as ProgramCache,y as Renderbuffer,C as ShaderCompiler,F as Texture,w as VertexArrayObject,O as createProgram,$ as glslifyDefineMap};
//# sourceMappingURL=webglDeps-BPFbcozq.js.map