const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./loader-CB94opeI.js","./spike-symbols.js","./spike-symbols.css","./mat4f64-CSKppSlJ.js","./quat-DYDZvbwA.js","./mat3f64-q3fE-ZOt.js","./quatf64-aQ5IuZRd.js","./vec42-CGd3qQJJ.js","./BufferView-Bcke57oO.js","./resourceUtils-BW-pHnpI.js","./basicInterfaces-CZwQPxTp.js"])))=>i.map(i=>d[i]);
import{dy as P,dp as C,dm as L,je as Me,c_ as j,hd as Oe,dF as re,jf as Re,jg as Be,fo as ie,jh as Ce,S as pe,$ as Ee,Z as ge,s as Se,hD as xe,gg as oe,ji as be,ii as K,D as ae,n as Pe,_ as Le,jj as Fe,fE as Ne,fF as ue,fG as je,dD as Ge,dl as ke,jk as le,dA as Ue,di as qe,hr as De}from"./spike-symbols.js";import{a as He}from"./devEnvironmentUtils-CnNDiFMM.js";import{t as ee,e as ye}from"./mat3f64-q3fE-ZOt.js";import{o as ce,r as Ve,e as ze}from"./mat4f64-CSKppSlJ.js";import{r as We,e as V,o as Ke,a as Qe,C as $e,B as Q,s as Ze,t as Je,n as Xe,b as Ye,c as z}from"./AttributeArray-CO21Kz1A.js";import{c as et,x as we,L as tt,i as ve,O as rt,E as st}from"./BufferView-Bcke57oO.js";import{e as nt,f as it,l as he,o as de}from"./vec3-Do4v7_LQ.js";import{n as ot,s as me}from"./vec4-Dygmqec3.js";import{n as at,d as G,o as ut,g as lt,t as ct,h as ht}from"./DefaultMaterial_COLOR_GAMMA-zhNGKw6G.js";import{r as te}from"./resourceUtils-BW-pHnpI.js";import{t as dt}from"./NestedMap-GuqgquCN.js";import{t as mt,l as Te}from"./Indices-BX16Wwbs.js";import{t as ft}from"./requestImageUtils-B2SA1p26.js";import{t as U}from"./orientedBoundingBox-3rKw2mcv.js";import{t as pt,e as se,i as M,n as gt}from"./basicInterfaces-CZwQPxTp.js";import{S as xt}from"./triangle-BAtbGc8Z.js";import{s as bt}from"./Util-Bhx86tqm.js";import{e as I}from"./VertexAttribute-BdZWZuT1.js";import{a as fe}from"./NormalAttribute.glsl-DscT8gSF.js";import"./InterleavedLayout-Cgmkio6O.js";import"./types-D0PSWh4d.js";import"./interfaces-DDtDqZYj.js";import"./BindType-BmZEZMMh.js";import"./AlphaCutoff-UcccL64p.js";import"./boundedPlane-BXyJglgF.js";import"./sphere-Ds6-k66c.js";import"./vec42-CGd3qQJJ.js";import"./vec4f64-CMoMXWBi.js";import"./plane-DEB6D17h.js";import"./quatf64-aQ5IuZRd.js";import"./lineSegment-BdV1phai.js";import"./renderState-CPSwhhVh.js";import"./doublePrecisionUtils-B0owpBza.js";import"./quat-DYDZvbwA.js";import"./spatialReferenceEllipsoidUtils-CHH0_lWj.js";import"./computeTranslationToOriginAndRotation-BOZ_GIsK.js";function yt(n,e){if(!n)return!1;const{size:t,data:r,indices:l}=n;P(e,0,0,0),P(T,0,0,0);let u=0,i=0;for(let o=0;o<l.length-2;o+=3){const c=l[o]*t,s=l[o+1]*t,a=l[o+2]*t;P(g,r[c],r[c+1],r[c+2]),P(E,r[s],r[s+1],r[s+2]),P(W,r[a],r[a+1],r[a+2]);const h=xt(g,E,W);h?(C(g,g,E),C(g,g,W),L(g,g,1/3*h),C(e,e,g),u+=h):(C(T,T,g),C(T,T,E),C(T,T,W),i+=3)}return(i!==0||u!==0)&&(u!==0?(L(e,e,1/u),!0):i!==0&&(L(e,T,1/i),!0))}function $t(n,e){if(!n)return!1;const{size:t,data:r,indices:l}=n;P(e,0,0,0);let u=-1,i=0;for(let o=0;o<l.length;o++){const c=l[o]*t;u!==c&&(e[0]+=r[c],e[1]+=r[c+1],e[2]+=r[c+2],i++),u=c}return i>1&&L(e,e,1/i),i>0}function wt(n,e,t){if(!n)return!1;P(t,0,0,0),P(T,0,0,0);let r=0,l=0;const{size:u,data:i,indices:o}=n,c=o.length-1,s=c+(e?2:0);for(let a=0;a<s;a+=2){const h=a<c?a+1:0,d=o[a<c?a:c]*u,m=o[h]*u;g[0]=i[d],g[1]=i[d+1],g[2]=i[d+2],E[0]=i[m],E[1]=i[m+1],E[2]=i[m+2],L(g,C(g,g,E),.5);const f=Me(g,E);f>0?(C(t,t,L(g,g,f)),r+=f):r===0&&(C(T,T,g),l++)}return r!==0?(L(t,t,1/r),!0):l!==0&&(L(t,T,1/l),!0)}const g=j(),E=j(),W=j(),T=j();class vt{constructor(){this.uid=Oe()}}class Tt extends vt{constructor(e){super(),this.highlightGroupName=e,this.channel=pt.Highlight}}class Z extends We{constructor(e,t,r=null,l=V.Mesh,u=null,i=-1){super(),this.material=e,this.mapPositions=r,this.type=l,this.objectAndLayerIdColor=u,this.edgeIndicesLength=i,this.highlights=new Set,this._highlightGroupCounts=new Map,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[o,c]of t)this._attributes.set(o,{...c,indices:mt(c.indices)}),o===I.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(o).indices.length:this.edgeIndicesLength)}instantiate(e={}){const t=new Z(e.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach((r,l)=>{r.exclusive=!1,t._attributes.set(l,r)}),t._boundingInfo=this._boundingInfo,t.transformation=e.transformation||this.transformation,t}get attributes(){return this._attributes}getMutableAttribute(e){let t=this._attributes.get(e);return t&&!t.exclusive&&(t={...t,exclusive:!0,data:Ke(t.data)},this._attributes.set(e,t)),t}setAttributeData(e,t){const r=this._attributes.get(e);r&&this._attributes.set(e,{...r,exclusive:!0,data:t})}get indexCount(){const e=this._attributes.values().next().value.indices;return(e==null?void 0:e.length)??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return this._boundingInfo==null&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===V.Mesh?this._computeAttachmentOriginTriangles(e):this.type===V.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(this._transformation!=null&&re(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){const t=this.attributes.get(I.POSITION);return yt(t,e)}_computeAttachmentOriginLines(e){const t=this.attributes.get(I.POSITION);return wt(t,It(this.material.parameters,t),e)}_computeAttachmentOriginPoints(e){const t=this.attributes.get(I.POSITION);return $t(t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.attributes.get(I.POSITION);if(!e||e.indices.length===0)return null;const t=this.type===V.Mesh?3:1;bt(e.indices.length%t==0,"Indexing error: "+e.indices.length+" not divisible by "+t);const r=Te(e.indices.length/t);return new Qe(r,t,e)}get transformation(){return this._transformation??ce}set transformation(e){this._transformation=e&&e!==ce?Ve(e):null}get highlightGroups(){return this._highlightGroupCounts}get hasHighlights(){return this._highlightGroupCounts.size>0}foreachHighlightGroup(e){this._highlightGroupCounts.forEach((t,r)=>e(r))}allocateIdAndHighlight(e){const t=new Tt(e);return this.addHighlight(t)}addHighlight(e){this.highlights.add(e);const{highlightGroupName:t}=e,r=(this._highlightGroupCounts.get(t)??0)+1;return this._highlightGroupCounts.set(t,r),e}removeHighlight(e){if(this.highlights.delete(e)){const{highlightGroupName:t}=e,r=this._highlightGroupCounts.get(t)??0;r<=1?this._highlightGroupCounts.delete(t):this._highlightGroupCounts.set(t,r-1)}}}function It(n,e){return!(!("isClosed"in n)||!n.isClosed)&&e.indices.length>2}function D(n){if(n==null)return null;const e=n.offset!=null?n.offset:Re,t=n.rotation!=null?n.rotation:0,r=n.scale!=null?n.scale:Be,l=ee(1,0,0,0,1,0,e[0],e[1],1),u=ee(Math.cos(t),-Math.sin(t),0,Math.sin(t),Math.cos(t),0,0,0,1),i=ee(r[0],0,0,0,r[1],0,0,0,1),o=ye();return ie(o,u,i),ie(o,l,o),o}class At{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class _t{constructor(e,t,r){this.name=e,this.lodThreshold=t,this.pivotOffset=r,this.stageResources=new At,this.numberOfVertices=0}}const B=()=>Pe.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Mt(n,e){const t=await Ot(n,e),r=await St(t.textureDefinitions??{},e);let l=0;for(const u in r)if(r.hasOwnProperty(u)){const i=r[u];l+=i!=null&&i.image?i.image.width*i.image.height*4:0}return{resource:t,textures:r,size:l+Ce(t)}}async function Ot(n,e){const t=e==null?void 0:e.streamDataRequester;if(t)return Rt(n,t,e);const r=await pe(Ee(n,e));if(r.ok===!0)return r.value.data;ge(r.error),Ie(r.error)}async function Rt(n,e,t){const r=await pe(e.request(n,"json",t));if(r.ok===!0)return r.value;ge(r.error),Ie(r.error.details.url)}function Ie(n){throw new Se("",`Request for object resource failed: ${n}`)}function Bt(n){const e=n.params,t=e.topology;let r=!0;switch(e.vertexAttributes||(B().warn("Geometry must specify vertex attributes"),r=!1),e.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const u=e.faces;if(u){if(e.vertexAttributes)for(const i in e.vertexAttributes){const o=u[i];o!=null&&o.values?(o.valueType!=null&&o.valueType!=="UInt32"&&(B().warn(`Unsupported indexed geometry indices type '${o.valueType}', only UInt32 is currently supported`),r=!1),o.valuesPerElement!=null&&o.valuesPerElement!==1&&(B().warn(`Unsupported indexed geometry values per element '${o.valuesPerElement}', only 1 is currently supported`),r=!1)):(B().warn(`Indexed geometry does not specify face indices for '${i}' attribute`),r=!1)}}else B().warn("Indexed geometries must specify faces"),r=!1;break}default:B().warn(`Unsupported topology '${t}'`),r=!1}n.params.material||(B().warn("Geometry requires material"),r=!1);const l=n.params.vertexAttributes;for(const u in l)l[u].values||(B().warn("Geometries with externally defined attributes are not yet supported"),r=!1);return r}function Ct(n,e){var f,$;const t=new Array,r=new Array,l=new Array,u=new dt,i=n.resource,o=xe.parse(i.version||"1.0","wosr");Lt.validate(o);const c=i.model.name,s=i.model.geometries,a=i.materialDefinitions??{},h=n.textures;let d=0;const m=new Map;for(let p=0;p<s.length;p++){const x=s[p];if(!Bt(x))continue;const A=Pt(x),w=x.params.vertexAttributes,q=[],J=b=>{if(x.params.topology==="PerAttributeArray")return null;const _=x.params.faces;for(const R in _)if(R===b)return _[R].values;return null},F=w[I.POSITION],H=F.values.length/F.valuesPerElement;for(const b in w){const _=w[b],R=_.values,Y=J(b)??Te(H);q.push([b,new U(R,Y,_.valuesPerElement,!0)])}const O=A.texture,y=h&&h[O];if(y&&!m.has(O)){const{image:b,parameters:_}=y,R=new $e(b,_);r.push(R),m.set(O,R)}const N=m.get(O),X=N?N.id:void 0,S=A.material;let v=u.get(S,O);if(v==null){const b=a[S.slice(S.lastIndexOf("/")+1)].params;b.transparency===1&&(b.transparency=0);const _=y&&y.alphaChannelUsage,R=b.transparency>0||_==="transparency"||_==="maskAndTransparency",Y=y?Ae(y.alphaChannelUsage):void 0,ne={ambient:oe(b.diffuse),diffuse:oe(b.diffuse),opacity:1-(b.transparency||0),transparent:R,textureAlphaMode:Y,textureAlphaCutoff:.33,textureId:X,initTextureTransparent:!0,doubleSided:!0,cullFace:se.None,colorMixMode:b.externalColorMixMode||"tint",textureAlphaPremultiplied:(y==null?void 0:y.parameters.preMultiplyAlpha)??!1};e!=null&&e.materialParameters&&Object.assign(ne,e.materialParameters),v=new Q(ne,e),u.set(S,O,v)}l.push(v);const _e=new Z(v,q);d+=(($=(f=q.find(b=>b[0]===I.POSITION))==null?void 0:f[1])==null?void 0:$.indices.length)??0,t.push(_e)}return{engineResources:[{name:c,stageResources:{textures:r,materials:l,geometries:t},pivotOffset:i.model.pivotOffset,numberOfVertices:d,lodThreshold:null}],referenceBoundingBox:Et(t)}}function Et(n){const e=be();return n.forEach(t=>{const r=t.boundingInfo;r!=null&&(K(e,r.bbMin),K(e,r.bbMax))}),e}async function St(n,e){const t=new Array;for(const u in n){const i=n[u],o=i.images[0].data;if(!o){B().warn("Externally referenced texture data is not yet supported");continue}const c=i.encoding+";base64,"+o,s="/textureDefinitions/"+u,a=i.channels==="rgba"?i.alphaChannelUsage||"transparency":"none",h={noUnpackFlip:!0,wrap:{s:ae.REPEAT,t:ae.REPEAT},preMultiplyAlpha:Ae(a)!==M.Opaque},d=e!=null&&e.disableTextures?Promise.resolve(null):ft(c,e);t.push(d.then(m=>({refId:s,image:m,parameters:h,alphaChannelUsage:a})))}const r=await Promise.all(t),l={};for(const u of r)l[u.refId]=u;return l}function Ae(n){switch(n){case"mask":return M.Mask;case"maskAndTransparency":return M.MaskBlend;case"none":return M.Opaque;default:return M.Blend}}function Pt(n){const e=n.params;return{id:1,material:e.material,texture:e.texture,region:e.texture}}const Lt=new xe(1,2,"wosr");async function Ir(n,e){var h;const t=Ft(He(n));if(t.fileType==="wosr"){const d=await(e.cache?e.cache.loadWOSR(t.url,e):Mt(t.url,e)),{engineResources:m,referenceBoundingBox:f}=Ct(d,e);return{lods:m,referenceBoundingBox:f,isEsriSymbolResource:!1,isWosr:!0}}let r;if(e.cache)r=await e.cache.loadGLTF(t.url,e,!!e.usePBR);else{const{loadGLTF:d}=await Le(()=>import("./loader-CB94opeI.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url);r=await d(new at(e.streamDataRequester),t.url,e,e.usePBR)}const l=(h=r.model.meta)==null?void 0:h.ESRI_proxyEllipsoid,u=r.meta.isEsriSymbolResource&&l!=null&&r.meta.ESRI_webstyle==="EsriRealisticTreesStyle";u&&!r.customMeta.esriTreeRendering&&(r.customMeta.esriTreeRendering=!0,Ut(r,l));const i=!!e.usePBR,o=r.meta.isEsriSymbolResource?{usePBR:i,isSchematic:!1,treeRendering:u,mrrFactors:Ze}:{usePBR:i,isSchematic:!1,treeRendering:!1,mrrFactors:Je},c={...e.materialParameters,treeRendering:u},{engineResources:s,referenceBoundingBox:a}=Nt(r,o,c,e,t.specifiedLodIndex);return{lods:s,referenceBoundingBox:a,isEsriSymbolResource:r.meta.isEsriSymbolResource,isWosr:!1}}function Ft(n){const e=n.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:e[4]!=null?Number(e[4]):null}:n.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:n,specifiedLodIndex:null}:{fileType:"unknown",url:n,specifiedLodIndex:null}}function Nt(n,e,t,r,l){const u=n.model,i=new Array,o=new Map,c=new Map,s=u.lods.length,a=be();return u.lods.forEach((h,d)=>{const m=r.skipHighLods===!0&&(s>1&&d===0||s>3&&d===1)||r.skipHighLods===!1&&l!=null&&d!==l;if(m&&d!==0)return;const f=new _t(h.name,h.lodThreshold,[0,0,0]);h.parts.forEach($=>{const p=m?new Q({},r):jt(u,$,f,e,t,o,c,r),{geometry:x,vertexCount:A}=Gt($,p??new Q({},r)),w=x.boundingInfo;w!=null&&d===0&&(K(a,w.bbMin),K(a,w.bbMax)),p!=null&&(f.stageResources.geometries.push(x),f.numberOfVertices+=A)}),m||i.push(f)}),{engineResources:i,referenceBoundingBox:a}}function jt(n,e,t,r,l,u,i,o){var f,$;const c=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),s=n.materials.get(e.material),a=e.attributes.texCoord0!=null,h=e.attributes.normal!=null;if(s==null)return null;const d=kt(s.alphaMode);if(!u.has(c)){if(a){const y=(N,X=!1)=>{if(N!=null&&!i.has(N)){const S=n.textures.get(N);if(S!=null){const v=S.data;i.set(N,new $e(te(v)?v.data:v,{...S.parameters,preMultiplyAlpha:!te(v)&&X,encoding:te(v)&&v.encoding!=null?v.encoding:void 0}))}}};y(s.textureColor,d!==M.Opaque),y(s.textureNormal),y(s.textureOcclusion),y(s.textureEmissive),y(s.textureMetallicRoughness)}const p=s.color[0]**(1/G),x=s.color[1]**(1/G),A=s.color[2]**(1/G),w=s.emissiveFactor[0]**(1/G),q=s.emissiveFactor[1]**(1/G),J=s.emissiveFactor[2]**(1/G),F=s.textureColor!=null&&a?i.get(s.textureColor):null,H=Xe({normalTexture:s.textureNormal,metallicRoughnessTexture:s.textureMetallicRoughness,metallicFactor:s.metallicFactor,roughnessFactor:s.roughnessFactor,emissiveTexture:s.textureEmissive,emissiveFactor:s.emissiveFactor,occlusionTexture:s.textureOcclusion}),O=((f=s.normalTextureTransform)==null?void 0:f.scale)!=null?($=s.normalTextureTransform)==null?void 0:$.scale:Fe;u.set(c,new Q({...r,transparent:d===M.Blend,customDepthTest:gt.Lequal,textureAlphaMode:d,textureAlphaCutoff:s.alphaCutoff,diffuse:[p,x,A],ambient:[p,x,A],opacity:s.opacity,doubleSided:s.doubleSided,doubleSidedType:"winding-order",cullFace:s.doubleSided?se.None:se.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normalType:h?fe.Attribute:fe.ScreenDerivative,castShadows:!0,receiveShadows:s.receiveShadows,receiveAmbientOcclusion:s.receiveAmbientOcclustion,textureId:F!=null?F.id:void 0,colorMixMode:s.colorMixMode,normalTextureId:s.textureNormal!=null&&a?i.get(s.textureNormal).id:void 0,textureAlphaPremultiplied:F!=null&&!!F.parameters.preMultiplyAlpha,occlusionTextureId:s.textureOcclusion!=null&&a?i.get(s.textureOcclusion).id:void 0,emissiveTextureId:s.textureEmissive!=null&&a?i.get(s.textureEmissive).id:void 0,metallicRoughnessTextureId:s.textureMetallicRoughness!=null&&a?i.get(s.textureMetallicRoughness).id:void 0,emissiveFactor:[w,q,J],mrrFactors:H?Ye:[s.metallicFactor,s.roughnessFactor,r.mrrFactors[2]],isSchematic:H,colorTextureTransformMatrix:D(s.colorTextureTransform),normalTextureTransformMatrix:D(s.normalTextureTransform),scale:[O[0],O[1]],occlusionTextureTransformMatrix:D(s.occlusionTextureTransform),emissiveTextureTransformMatrix:D(s.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:D(s.metallicRoughnessTextureTransform),...l},o))}const m=u.get(c);if(t.stageResources.materials.push(m),a){const p=x=>{x!=null&&t.stageResources.textures.push(i.get(x))};p(s.textureColor),p(s.textureNormal),p(s.textureOcclusion),p(s.textureEmissive),p(s.textureMetallicRoughness)}return m}function Gt(n,e){const t=n.attributes.position.count,r=ut(n.indices||t,n.primitiveType),l=z(3*t),{typedBuffer:u,typedBufferStride:i}=n.attributes.position;nt(l,u,n.transform,3,i);const o=[[I.POSITION,new U(l,r,3,!0)]];if(n.attributes.normal!=null){const s=z(3*t),{typedBuffer:a,typedBufferStride:h}=n.attributes.normal;Ne(k,n.transform),it(s,a,k,3,h),ue(k)&&he(s,s),o.push([I.NORMAL,new U(s,r,3,!0)])}if(n.attributes.tangent!=null){const s=z(4*t),{typedBuffer:a,typedBufferStride:h}=n.attributes.tangent;je(k,n.transform),ot(s,a,k,4,h),ue(k)&&he(s,s,4),o.push([I.TANGENT,new U(s,r,4,!0)])}if(n.attributes.texCoord0!=null){const s=z(2*t),{typedBuffer:a,typedBufferStride:h}=n.attributes.texCoord0;lt(s,a,2,h),o.push([I.UV0,new U(s,r,2,!0)])}const c=n.attributes.color;if(c!=null){const s=new Uint8Array(4*t);c.elementCount===4?c instanceof et?me(s,c,255):c instanceof we?ct(s,c):c instanceof tt&&me(s,c,1/256):(s.fill(255),c instanceof ve?de(s,c.typedBuffer,255,4,c.typedBufferStride):n.attributes.color instanceof rt?ht(s,c.typedBuffer,4,n.attributes.color.typedBufferStride):n.attributes.color instanceof st&&de(s,c.typedBuffer,1/256,4,c.typedBufferStride)),o.push([I.COLOR,new U(s,r,4,!0)])}return{geometry:new Z(e,o),vertexCount:t}}const k=ye();function kt(n){switch(n){case"BLEND":return M.Blend;case"MASK":return M.Mask;case"OPAQUE":case null:case void 0:return M.Opaque}}function Ut(n,e){for(let t=0;t<n.model.lods.length;++t){const r=n.model.lods[t];for(const l of r.parts){const u=l.attributes.normal;if(u==null)return;const i=l.attributes.position,o=i.count,c=j(),s=j(),a=j(),h=new Uint8Array(4*o),d=new Float64Array(3*o),m=Ge(ze(),l.transform);let f=0,$=0;for(let p=0;p<o;p++){i.getVec(p,s),u.getVec(p,c),re(s,s,l.transform),ke(a,s,e.center),le(a,a,e.radius);const x=a[2],A=Ue(a),w=Math.min(.45+.55*A*A,1);le(a,a,e.radius),m!==null&&re(a,a,m),qe(a,a),t+1!==n.model.lods.length&&n.model.lods.length>1&&De(a,a,c,x>-1?.2:Math.min(-4*x-3.8,1)),d[f]=a[0],d[f+1]=a[1],d[f+2]=a[2],f+=3,h[$]=255*w,h[$+1]=255*w,h[$+2]=255*w,h[$+3]=255,$+=4}l.attributes.normal=new ve(d),l.attributes.color=new we(h)}}}export{Ir as fetch,Ft as parseUrl};
//# sourceMappingURL=objectResourceUtils-CYqDFTcK.js.map
