import{a2 as a,cS as k,cT as u,cU as U,cV as m,cW as l,cX as r}from"./spike-symbols.js";const C=new a(k),n=new a(u),e=new a(U),T=new a(m);function W(t){const p=f.get(t);if(p)return p;let s=C;if(t)if(t===n)s=n;else if(t===e)s=e;else{const c=t.wkid,o=t.latestWkid;if(c!=null||o!=null)l(c)||l(o)?s=n:(r(c)||r(o))&&(s=e);else{const w=t.wkt2??t.wkt;if(w){const i=w.toUpperCase();i===$?s=n:i===d&&(s=e)}}}return f.set(t,s),s}const f=new Map,$=n.wkt.toUpperCase(),d=e.wkt.toUpperCase();export{W as a,T as w};
//# sourceMappingURL=spatialReferenceEllipsoidUtils-CHH0_lWj.js.map
