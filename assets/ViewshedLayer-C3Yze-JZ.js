import{dV as C,hJ as H,o as t,u as s,bw as K,eu as G,gL as b,hK as U,v as _,hL as X,V as D,K as k,w as A,gn as P,J as B,hM as I,by as Q,f_ as j,b7 as q,bm as W,d$ as Y}from"./spike-symbols.js";import{c as Z,b as ee}from"./featureReferenceUtils-DxbMD3iS.js";import{c as te}from"./Analysis-BWxWE_OW.js";import{S as ie}from"./MultiOriginJSONSupport-CF9SEMGl.js";import{b as se}from"./OperationalLayer-DFF1tvhw.js";import"./sphere-Ds6-k66c.js";import"./vec42-CGd3qQJJ.js";import"./vec4f64-CMoMXWBi.js";import"./mat3f64-q3fE-ZOt.js";import"./plane-DEB6D17h.js";import"./mat4f64-CSKppSlJ.js";import"./quatf64-aQ5IuZRd.js";import"./IntersectorInterfaces-dI_rFEZm.js";import"./boundedPlane-BXyJglgF.js";import"./lineSegment-BdV1phai.js";import"./commonProperties-Bg_7mhO_.js";let a=class extends C(X){constructor(e){super(e),this.observer=null,this.farDistance=1e3,this.heading=0,this.tilt=90,this.horizontalFieldOfView=45,this.verticalFieldOfView=45,this.feature=null}isValid(){return this.observer!=null&&this.farDistance>0}equals(e){return H(this.observer,e.observer)&&this.farDistance===e.farDistance&&this.heading===e.heading&&this.tilt===e.tilt&&this.horizontalFieldOfView===e.horizontalFieldOfView&&this.verticalFieldOfView===e.verticalFieldOfView&&Z(this.feature,e.feature)}};t([s({type:K,json:{write:!0}})],a.prototype,"observer",void 0),t([s({type:Number,nonNullable:!0,range:{min:0},json:{write:{isRequired:!0}}})],a.prototype,"farDistance",void 0),t([s({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),G(i=>b.normalize(U(i),void 0,!0))],a.prototype,"heading",void 0),t([s({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],a.prototype,"tilt",void 0),t([s({type:Number,nonNullable:!0,range:{min:0,max:360},json:{write:{isRequired:!0}}})],a.prototype,"horizontalFieldOfView",void 0),t([s({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],a.prototype,"verticalFieldOfView",void 0),t([s(ee)],a.prototype,"feature",void 0),t([s({json:{read:!1}})],a.prototype,"isValid",null),a=t([_("esri.analysis.Viewshed")],a);const J=a,F=D.ofType(J);let p=class extends te{constructor(e){super(e),this.type="viewshed",this._extent=null}initialize(){this.addHandles(A(()=>this._computeExtent(),e=>{e.pending==null&&(this._extent=e.extent)},P))}get viewsheds(){return this._get("viewsheds")||new F}set viewsheds(e){this._set("viewsheds",B(e,this.viewsheds,F))}get spatialReference(){for(const e of this.viewsheds)if(e.observer!=null)return e.observer.spatialReference;return null}get extent(){return this._extent}get requiredPropertiesForEditing(){return this.viewsheds.items.map(({observer:e})=>e)}async waitComputeExtent(){const e=this._computeExtent();e.pending!=null&&await e.pending}_computeExtent(){const{spatialReference:e}=this;if(e==null)return{pending:null,extent:null};const u=this.viewsheds.filter(r=>r.observer!=null),y=u.map(r=>r.observer).toArray(),o=I(y,e);return o.pending!=null?{pending:o.pending,extent:null}:{pending:null,extent:o.geometries.map((r,d)=>{const V=u.at(d);return r!=null&&V!=null?this._computeViewshedExtent(this.viewsheds.at(d),r):null}).filter(r=>r!=null).reduce((r,d)=>re(r,d),null)}}_computeViewshedExtent(e,u){const{farDistance:y,heading:o,tilt:r,horizontalFieldOfView:d,verticalFieldOfView:V}=e,{spatialReference:v}=u,O=d/2,$=V/2,z=y/v.metersPerUnit,S=[b.normalize(o-O),o,b.normalize(o+O)],h=Q.fromPoint(u),g=f=>{const c=S.map(l=>b.normalize(l-f));if(c[0]>c[2]||d===360)return z;const m=c.map(l=>Math.abs(l>180?360-l:l)).reduce((l,x)=>l>x?x:l);return m>90?0:z*Math.cos(j(m))};h.xmax+=g(90),h.xmin-=g(-90),h.ymax+=g(0),h.ymin-=g(180);const w=u.z;if(w!=null){let f=w,c=w;const m=r-90,l=q(m+$,-90,90),x=q(m-$,-90,90),N=v!=null&&v.isGeographic?y:z;f+=N*R(l),c+=N*R(x);const T=M($)*N,E=R(m)*T*(1-M(O));r<90&&(f-=E),r>90&&(c-=E),h.zmax=Math.max(f,w),h.zmin=Math.min(c,w)}return h}clear(){this.viewsheds.removeAll()}};function re(i,e){return i==null?e:e==null?i:i.union(e)}function M(i){return Math.cos(j(i))}function R(i){return Math.sin(j(i))}t([s({type:["viewshed"]})],p.prototype,"type",void 0),t([s({cast:k,type:F,nonNullable:!0})],p.prototype,"viewsheds",null),t([s({readOnly:!0})],p.prototype,"spatialReference",null),t([s()],p.prototype,"_extent",void 0),t([s({readOnly:!0})],p.prototype,"extent",null),t([s({readOnly:!0})],p.prototype,"requiredPropertiesForEditing",null),p=t([_("esri.analysis.ViewshedAnalysis")],p);const L=p;let n=class extends se(ie(Y)){constructor(i){super(i),this.type="viewshed",this.operationalLayerType="ViewshedLayer",this.source=new L,this.opacity=1}initialize(){this.addHandles(A(()=>this.source,(i,e)=>{e!=null&&e.parent===this&&(e.parent=null),i!=null&&(i.parent=this)},P))}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get fullExtent(){return this.source.extent}releaseAnalysis(i){this.source===i&&(this.source=new L)}get analysis(){return this.source}set analysis(i){this.source=i}get viewsheds(){return this.source.viewsheds}set viewsheds(i){this.source.viewsheds=i}writeViewsheds(i,e,u,y){e.viewsheds=i.filter(o=>o.isValid()).map(o=>o.toJSON(y)).toJSON()}};t([s({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),t([s({type:["ViewshedLayer"]})],n.prototype,"operationalLayerType",void 0),t([s({nonNullable:!0})],n.prototype,"source",void 0),t([s({readOnly:!0})],n.prototype,"spatialReference",null),t([s({readOnly:!0})],n.prototype,"fullExtent",null),t([s({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],n.prototype,"opacity",void 0),t([s({type:["show","hide"]})],n.prototype,"listMode",void 0),t([s({type:D.ofType(J),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],n.prototype,"viewsheds",null),t([W("web-scene","viewsheds")],n.prototype,"writeViewsheds",null),n=t([_("esri.layers.ViewshedLayer")],n);const Oe=n;export{Oe as default};
//# sourceMappingURL=ViewshedLayer-C3Yze-JZ.js.map