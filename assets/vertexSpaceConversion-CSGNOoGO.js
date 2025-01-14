import{cY as Q,fE as L,fF as Z,fG as z,fu as W,fH as un,di as cn,fI as fn,fJ as pn,fK as mn,c_ as V,dD as h,fL as An,fM as gn,fN as X,fO as U,fP as nn,fQ as Tn,fR as yn,aZ as Rn,n as En,dl as Fn,dF as dn,fS as Nn}from"./spike-symbols.js";import{e as rn}from"./mat3f64-q3fE-ZOt.js";import{e as v,o as tn}from"./mat4f64-CSKppSlJ.js";import{a as en,w as On}from"./spatialReferenceEllipsoidUtils-CHH0_lWj.js";import{C as $}from"./computeTranslationToOriginAndRotation-BOZ_GIsK.js";import{c as q}from"./projectPointToVector--Cyjh7Yj.js";import{a as $n,m as _n}from"./meshVertexSpaceUtils-Bw0fuhv2.js";import{f as D,l as on,i as P,e as b}from"./vec3-Do4v7_LQ.js";import{i as d,T as N}from"./BufferView-Bcke57oO.js";import{n as wn}from"./vec4-Dygmqec3.js";const tr="Projection may be possible after calling projection.load().";function y(n,r,t,e){n.error(`Failed to project from (wkid:${r.wkid}) to (wkid:${t.wkid}).${e?" ":""}${e}`)}function Pn(n,r,t,e,o,l){return M(F.TO_PCPF,d.fromTypedArray(n),E.NORMAL,N.fromTypedArray(r),t,N.fromTypedArray(e),o,d.fromTypedArray(l))?l:null}function Cn(n,r,t,e,o,l){return M(F.FROM_PCPF,d.fromTypedArray(n),E.NORMAL,N.fromTypedArray(r),t,N.fromTypedArray(e),o,d.fromTypedArray(l))?l:null}function Sn(n,r,t,e){return Q(n,r,0,t,e,0)?t:null}function xn(n,r,t,e){return Q(n,r,0,t,e,0)?t:null}function an(n,r,t){return L(p,t),D(r,n,p),Z(p)&&on(r,r),r}function ln(n,r,t){return z(p,t),wn(r,n,p),Z(p)&&on(r,r,4),r}function hn(n,r,t,e,o,l){if(!M(F.TO_PCPF,d.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT),E.TANGENT,N.fromTypedArray(r),t,N.fromTypedArray(e),o,d.fromTypedArray(l,4*Float32Array.BYTES_PER_ELEMENT)))return null;for(let a=3;a<n.length;a+=4)l[a]=n[a];return l}function vn(n,r,t,e,o,l){if(!M(F.FROM_PCPF,d.fromTypedArray(n,16),E.TANGENT,N.fromTypedArray(r),t,N.fromTypedArray(e),o,d.fromTypedArray(l,16)))return null;for(let a=3;a<n.length;a+=4)l[a]=n[a];return l}var E,F;function H(n,r,t,e,o){switch($(e,t,_,e),n===F.FROM_PCPF&&h(_,_),r){case E.NORMAL:return L(o,_);case E.TANGENT:return z(o,_)}}function M(n,r,t,e,o,l,a,i){if(!r)return;const c=e.count;if(Mn(o))for(let s=0;s<c;s++)l.getVec(s,x),r.getVec(s,T),W(T,T,H(n,t,x,a,p)),i.setVec(s,T);else for(let s=0;s<c;s++){l.getVec(s,x),r.getVec(s,T);const f=un(e.get(s,1));let u=Math.cos(f);t===E.TANGENT!=(n===F.TO_PCPF)&&(u=1/u),H(n,t,x,a,p),n===F.TO_PCPF?(p[0]*=u,p[1]*=u,p[2]*=u,p[3]*=u,p[4]*=u,p[5]*=u):(p[0]*=u,p[3]*=u,p[6]*=u,p[1]*=u,p[4]*=u,p[7]*=u),W(T,T,p),cn(T,T),i.setVec(s,T)}return i}function Mn(n){return n.isWGS84||fn(n)||pn(n)||mn(n)}(function(n){n[n.NORMAL=0]="NORMAL",n[n.TANGENT=1]="TANGENT"})(E||(E={})),function(n){n[n.TO_PCPF=0]="TO_PCPF",n[n.FROM_PCPF=1]="FROM_PCPF"}(F||(F={}));const x=V(),T=V(),_=v(),p=rn(),A=()=>En.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");function er(n,r,{vertexSpace:t,spatialReference:e}){if(t.type==="georeferenced"){const s=n;if(!q(r,s,e))return!1;const{origin:f}=t;return Fn(n,s,f),!0}const o=en(e),l=n;if(!q(r,l,o))return!1;const{origin:a}=t,i=K;if(!$(e,a,i,o))return!1;const c=h(K,i);return c!=null&&(dn(n,l,c),!0)}function or(n,r,t){const{vertexSpace:e,transform:o,vertexAttributes:l}=n,a=$n(e)?o:null,i=G(n.spatialReference,t,R.SOURCE_AND_TARGET);if(_n(e,r)&&(!a||An(a.localMatrix,tn))&&C(i)){const{position:c,normal:s,tangent:f}=l,u=t==null?void 0:t.allowBufferReuse;return{position:u?c:c.slice(),normal:u?s:s==null?void 0:s.slice(),tangent:u?f:f==null?void 0:f.slice()}}switch(n.vertexSpace.type){case"local":return r.type==="local"?Dn(n,n.vertexSpace,r.origin,t):Un(n,n.vertexSpace,r.origin,t);case"georeferenced":return r.type==="local"?Ln(n,n.vertexSpace,r.origin,t):Gn(n,n.vertexSpace,r.origin,t)}}function Gn({vertexAttributes:n,transform:r,spatialReference:t},{origin:e},o,l){const a=G(t,l,R.SOURCE_AND_TARGET),i=e||!C(a)?gn(m,(r==null?void 0:r.localMatrix)??tn):null;i&&Y(i,t,l,R.SOURCE_AND_TARGET);const{position:c,normal:s,tangent:f}=i?k(n,i):n,u=l==null?void 0:l.allowBufferReuse,O=u?c:new Float64Array(c.length);let g=c;if(e&&(g=P(O,g,e)),o){const S=X(sn,o);g=P(O,g,S)}return{position:g!==n.position||u?g:g.slice(),normal:s!==n.normal||u?s:s==null?void 0:s.slice(),tangent:f!==n.tangent||u?f:f==null?void 0:f.slice()}}function B(n,r){return r!=null&&r.useEllipsoid&&Nn(n)?On:en(n)}function Un({spatialReference:n,vertexAttributes:r,transform:t},{origin:e},o,l){const a=B(n,l);if(!$(n,e,m,a))return y(A(),n,a),null;t&&U(m,m,t.localMatrix),Y(m,n,l,R.SOURCE);const i=new Float64Array(r.position.length),c=bn(r.position,m,n,i,a);if(!c)return null;const s=Bn(c,n,i,a,r.normal,m);if(r.normal&&!s)return null;const f=kn(c,n,i,a,r.tangent,m);if(r.tangent&&!f)return null;if(o){const u=X(sn,o);P(c,c,u)}return{position:c,normal:s,tangent:f}}function Ln({vertexAttributes:n,spatialReference:r,transform:t},{origin:e},o,l){const a=B(r,l);if(!$(r,o,m,a))return y(A(),r,a),null;const i=1/G(r,l,R.TARGET);nn(m,m,[i,i,i]);const c=h(w,m),{position:s,normal:f,tangent:u}=Vn(n,e,t),O=new Float64Array(s.length),g=Yn(s,r,c,O,a);if(!g)return null;const S=L(Wn,c),j=jn(f,s,r,O,a,S,f!==n.normal?f:void 0);if(!j&&f)return null;const I=In(u,s,r,O,a,S,u!==n.tangent?u:void 0);return!I&&u?null:{position:g,normal:j,tangent:I}}function Vn(n,r,t){if(!r)return n;if(!t){const{position:o,normal:l,tangent:a}=n;return{position:P(new Float64Array(o.length),o,r),tangent:a,normal:l}}const e=k(n,t.localMatrix);return P(e.position,e.position,r),e}function Dn({vertexAttributes:n,spatialReference:r,transform:t},{origin:e},o,l){const a=B(r,l);if(!$(r,e,m,a))return y(A(),r,a),null;if(t&&U(m,m,t.localMatrix),!$(r,o,w,a))return y(A(),a,r),null;h(w,w);const i=U(m,w,m);return Y(i,r,l,R.SOURCE_AND_TARGET),k(n,i)}function k(n,r){const t=new Float64Array(n.position.length);b(t,n.position,r);const e=n.normal?new Float32Array(n.normal.length):null,o=n.tangent?new Float32Array(n.tangent.length):null;return e&&n.normal&&an(n.normal,e,r),o&&n.tangent&&ln(n.tangent,o,r),{position:t,normal:e,tangent:o}}function bn(n,r,t,e,o){b(e,n,r);const l=new Float64Array(n.length);return xn(e,o,l,t)?l:(y(A(),o,t),null)}function Bn(n,r,t,e,o,l){if(o==null)return null;const a=new Float32Array(o.length);return an(o,a,l),Cn(a,n,r,t,e,a)?a:(y(A(),e,r),null)}function kn(n,r,t,e,o,l){if(o==null)return null;const a=new Float32Array(o.length);return ln(o,a,l),vn(a,n,r,t,e,a)?a:(y(A(),e,r),null)}function Y(n,r,t,e){const o=G(r,t,e);C(o)||nn(n,n,[o,o,o])}function G(n,r,t){const e=!!(t&R.SOURCE),o=!!(t&R.TARGET),l=r==null?void 0:r.sourceUnit,a=r==null?void 0:r.targetUnit;if(!l&&!a)return 1;let i=J(l,n);e||!l||C(i)||(A().warn("source unit conversion not supported"),i=1);let c=1/J(a,n);return o||!a||C(c)||(A().warn("target unit conversion not supported"),c=1),i*c}function C(n){return Tn(n,1)}function Yn(n,r,t,e,o){const l=Sn(n,r,e,o);if(!l)return y(A(),r,o),null;const a=new Float64Array(l.length);return b(a,l,t),a}function jn(n,r,t,e,o,l,a){if(n==null)return null;const i=a??new Float32Array(n.length);return Pn(n,r,t,e,o,i)?(D(i,i,l),i):(y(A(),t,o),null)}function In(n,r,t,e,o,l,a){if(n==null)return null;const i=a??new Float32Array(n.length);return hn(n,r,t,e,o,i)?(D(i,i,l,4),i):(y(A(),t,o),null)}function J(n,r){if(n==null)return 1;const t=yn(r);return 1/Rn(t,"meters",n)}const m=v(),w=v(),Wn=rn(),sn=V(),K=v();var R;(function(n){n[n.NONE=0]="NONE",n[n.SOURCE=1]="SOURCE",n[n.TARGET=2]="TARGET",n[n.SOURCE_AND_TARGET=3]="SOURCE_AND_TARGET"})(R||(R={}));export{or as B,Pn as E,y as F,vn as G,tr as O,Cn as R,Sn as g,xn as h,er as k,J as n,hn as w};
//# sourceMappingURL=vertexSpaceConversion-CSGNOoGO.js.map