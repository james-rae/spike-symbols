import{dX as w,dY as T,Z as O,e9 as v,ca as g,ei as P,$ as f,by as E,bT as L,ej as F,s as x,k as M,o,u as a,ek as S,bj as R,bm as j,v as _,el as J,d$ as N}from"./spike-symbols.js";import{S as U}from"./MultiOriginJSONSupport-CF9SEMGl.js";import{i as q}from"./scaleUtils-YKMhrdEs.js";import{i as k}from"./APIKeyMixin-CQcQ7xYE.js";import{m as A,f as V,t as Z}from"./SublayersOwner-B1fewVp6.js";import{l as z}from"./ArcGISService-B90ElZ2X.js";import{e as B}from"./CustomParametersMixin-C6za5FFb.js";import{b as C}from"./OperationalLayer-DFF1tvhw.js";import{j as D}from"./PortalLayer-CzvBu_jL.js";import{f as G}from"./RefreshableLayer-Bh-aUUkw.js";import{l as H}from"./TemporalLayer-f50zMkoH.js";import{y as K}from"./commonProperties-Bg_7mhO_.js";import{y as W}from"./ExportImageParameters-Cm37Ug4c.js";import{t as X}from"./imageBitmapUtils-BNbZt8AU.js";import{e as I}from"./sublayerUtils-CU9E7VJK.js";import{t as Y}from"./versionUtils-BC3iB0PG.js";import"./portalItemUtils-CnTMziNf.js";import"./UniqueValueRenderer-DpnAQyVY.js";import"./ColorStop-DbeLVLMk.js";import"./diffUtils-ObaWOk_n.js";import"./colorRamps-D2XGA5co.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-ap8FYP_g.js";import"./jsonUtils-B6BNTLPc.js";import"./defaults-CBYGZvbD.js";import"./defaultsJSON-GKolV7NZ.js";import"./styleUtils-Cj5AxdUy.js";import"./jsonUtils-B7oYZIeQ.js";import"./LRUCache-LcfJ3jIy.js";import"./FieldsIndex-iG3PpdUf.js";import"./UnknownTimeZone-Cjcij_vG.js";import"./OverrideHelper-BY3qVKDN.js";import"./colorUtils-CxpR8kgL.js";import"./vec42-CGd3qQJJ.js";import"./vec4f64-CMoMXWBi.js";import"./utils-Bgq9-INc.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-EnfPALPv.js";import"./heatmapUtils-7-1kyJ5b.js";import"./QueryTask-BrgXkcdQ.js";import"./infoFor3D-CxdEiWhp.js";import"./executeForIds-BZpmuei3.js";import"./query-BbR5Y2Ua.js";import"./pbfQueryUtils-B4wItXS2.js";import"./pbf-CCxG-t_w.js";import"./OptimizedFeature-D3320lj0.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-D-hT_tjP.js";import"./executeQueryJSON-CkNjVEXG.js";import"./FeatureSet-C2IOSXSk.js";import"./featureConversionUtils-BxDN9gkv.js";import"./featureLayerUtils-Cwh8eKuP.js";import"./FeatureType-3wlBENoF.js";import"./FeatureTemplate-DwdLfW6V.js";import"./labelingInfo-BHD6jdLj.js";import"./labelUtils-BzX0145M.js";import"./LayerFloorInfo-CKSnSMnn.js";import"./Relationship-DYSC4HOL.js";import"./serviceCapabilitiesUtils-ljk_p2-0.js";import"./popupUtils-BPDFECES.js";import"./TimeInfo-Co3vZhp5.js";import"./floorFilterUtils-DZ5C6FQv.js";let i=class extends w(H(T(A(V(z(C(D(U(G(k(B(N)))))))))))){constructor(...e){super(...e),this._exportImageParameters=new W({layer:this}),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(O).then(()=>this._fetchService(r))),Promise.resolve(this)}destroy(){this._exportImageParameters.destroy()}readImageFormat(e,r){const n=r.supportedImageFormatTypes;return n&&n.includes("PNG32")?"png32":"png24"}writeSublayers(e,r,n,t){var l,c,b;if(!this.loaded||!e)return;const s=e.slice().reverse().flatten(({sublayers:m})=>m&&m.toArray().reverse()).toArray();let p=!1;const h=v(t.origin);if((l=this.capabilities)!=null&&l.operations.supportsExportMap&&((b=(c=this.capabilities)==null?void 0:c.exportMap)!=null&&b.supportsDynamicLayers)){if(h===g.PORTAL_ITEM){const m=this.createSublayersForOrigin("service").sublayers;p=I(s,m,g.SERVICE)}else if(h>g.PORTAL_ITEM){const m=this.createSublayersForOrigin("portal-item");p=I(s,m.sublayers,v(m.origin))}}const d=[],u={writeSublayerStructure:p,...t};let y=p||this.hasVisibleLayersForOrigin(h);s.forEach(m=>{const $=m.write({},u);d.push($),y=y||m.originOf("visible")==="user"}),d.some(m=>Object.keys(m).length>1)&&(r.layers=d),y&&(r.visibleLayers=s.filter(m=>m.visible).map(m=>m.id))}createExportImageParameters(e,r,n,t){const s=(t==null?void 0:t.pixelRatio)||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian()),this._exportImageParameters.floors=(t==null?void 0:t.floors)??null,this._exportImageParameters.scale=q({extent:e,width:r})*s;const p=this._exportImageParameters.toJSON(),h=!(t!=null&&t.rotation)||this.version<10.3?{}:{rotation:-t.rotation},d=e==null?void 0:e.spatialReference,u=P(d);p.dpi*=s;const y={};if(t!=null&&t.timeExtent){const{start:l,end:c}=t.timeExtent.toJSON();y.time=l&&c&&l===c?""+l:`${l??"null"},${c??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(y.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:u,imageSR:u,size:r+","+n,...p,...h,...y}}async fetchImage(e,r,n,t){const{data:s}=await this._fetchImage("image",e,r,n,t);return s}async fetchImageBitmap(e,r,n,t){const{data:s,url:p}=await this._fetchImage("blob",e,r,n,t);return X(s,p,t==null?void 0:t.signal)}async fetchRecomputedExtents(e={}){const r={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:n}=await f(this.url,r),{extent:t,fullExtent:s,timeExtent:p}=n,h=t||s;return{fullExtent:h&&E.fromJSON(h),timeExtent:p&&L.fromJSON({start:p[0],end:p[1]})}}loadAll(){return F(this,e=>{e(this.allSublayers),e(this.subtables)})}serviceSupportsSpatialReference(e){return Y(this,e)}async _fetchImage(e,r,n,t,s){var d,u,y;const p={responseType:e,signal:(s==null?void 0:s.signal)??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(r,n,t,s),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},h=this.parsedUrl.path+"/export";if(((d=p.query)==null?void 0:d.dynamicLayers)!=null&&!((y=(u=this.capabilities)==null?void 0:u.exportMap)!=null&&y.supportsDynamicLayers))throw new x("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:p.query});try{const{data:l}=await f(h,p);return{data:l,url:h}}catch(l){throw M(l)?l:new x("mapimagelayer:image-fetch-error",`Unable to load image: ${h}`,{error:l})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:r,ssl:n}=await f(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});n&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r,this.read(r,{origin:"service",url:this.parsedUrl})}hasVisibleLayersForOrigin(e){var r;return!(e==null||!((r=this.sublayersSourceJSON[e])!=null&&r.visibleLayers))}};o([a(S("dateFieldsTimeReference"))],i.prototype,"dateFieldsTimeZone",void 0),o([a({type:Boolean})],i.prototype,"datesInUnknownTimezone",void 0),o([a()],i.prototype,"dpi",void 0),o([a()],i.prototype,"gdbVersion",void 0),o([a()],i.prototype,"imageFormat",void 0),o([R("imageFormat",["supportedImageFormatTypes"])],i.prototype,"readImageFormat",null),o([a({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],i.prototype,"imageMaxHeight",void 0),o([a({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],i.prototype,"imageMaxWidth",void 0),o([a()],i.prototype,"imageTransparency",void 0),o([a({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],i.prototype,"isReference",void 0),o([a({json:{read:!1,write:!1}})],i.prototype,"labelsVisible",void 0),o([a({type:["ArcGISMapServiceLayer"]})],i.prototype,"operationalLayerType",void 0),o([a({json:{read:!1,write:!1}})],i.prototype,"popupEnabled",void 0),o([a(S("preferredTimeReference"))],i.prototype,"preferredTimeZone",void 0),o([a()],i.prototype,"sourceJSON",void 0),o([a({json:{write:{ignoreOrigin:!0}}})],i.prototype,"sublayers",void 0),o([j("sublayers",{layers:{type:[Z]},visibleLayers:{type:[J]}})],i.prototype,"writeSublayers",null),o([a({type:["show","hide","hide-children"]})],i.prototype,"listMode",void 0),o([a({json:{read:!1},readOnly:!0,value:"map-image"})],i.prototype,"type",void 0),o([a(K)],i.prototype,"url",void 0),i=o([_("esri.layers.MapImageLayer")],i);const pt=i;export{pt as default};
//# sourceMappingURL=MapImageLayer-DX876cXE.js.map