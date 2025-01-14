import{dX as _,dY as S,Z as T,a2 as v,I as b,$ as u,et as w,ej as $,s as m,d as O,b_ as R,dx as U,dd as W,o as s,u as a,bj as j,bm as P,eu as I,v as L,d$ as A}from"./spike-symbols.js";import{S as B}from"./MultiOriginJSONSupport-CF9SEMGl.js";import{i as M}from"./APIKeyMixin-CQcQ7xYE.js";import{p as N}from"./ArcGISCachedService-BrOKsDs1.js";import{m as C,f as k,t as D}from"./SublayersOwner-B1fewVp6.js";import{l as J}from"./ArcGISService-B90ElZ2X.js";import{e as q}from"./CustomParametersMixin-C6za5FFb.js";import{b as G}from"./OperationalLayer-DFF1tvhw.js";import{j as V}from"./PortalLayer-CzvBu_jL.js";import{f as x}from"./RefreshableLayer-Bh-aUUkw.js";import{y as E}from"./commonProperties-Bg_7mhO_.js";import{o as y}from"./imageBitmapUtils-BNbZt8AU.js";import"./TileInfoTilemapCache-DSU4Qt2m.js";import"./TilemapCache-DVeW1Ktn.js";import"./ByteSizeUnit-BsxeN7wM.js";import"./LRUCache-LcfJ3jIy.js";import"./portalItemUtils-CnTMziNf.js";import"./UniqueValueRenderer-DpnAQyVY.js";import"./ColorStop-DbeLVLMk.js";import"./diffUtils-ObaWOk_n.js";import"./colorRamps-D2XGA5co.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-ap8FYP_g.js";import"./jsonUtils-B6BNTLPc.js";import"./defaults-CBYGZvbD.js";import"./defaultsJSON-GKolV7NZ.js";import"./styleUtils-Cj5AxdUy.js";import"./jsonUtils-B7oYZIeQ.js";import"./FieldsIndex-iG3PpdUf.js";import"./UnknownTimeZone-Cjcij_vG.js";import"./OverrideHelper-BY3qVKDN.js";import"./colorUtils-CxpR8kgL.js";import"./vec42-CGd3qQJJ.js";import"./vec4f64-CMoMXWBi.js";import"./utils-Bgq9-INc.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-EnfPALPv.js";import"./heatmapUtils-7-1kyJ5b.js";import"./QueryTask-BrgXkcdQ.js";import"./infoFor3D-CxdEiWhp.js";import"./executeForIds-BZpmuei3.js";import"./query-BbR5Y2Ua.js";import"./pbfQueryUtils-B4wItXS2.js";import"./pbf-CCxG-t_w.js";import"./OptimizedFeature-D3320lj0.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-D-hT_tjP.js";import"./executeQueryJSON-CkNjVEXG.js";import"./FeatureSet-C2IOSXSk.js";import"./featureConversionUtils-BxDN9gkv.js";import"./featureLayerUtils-Cwh8eKuP.js";import"./FeatureType-3wlBENoF.js";import"./FeatureTemplate-DwdLfW6V.js";import"./labelingInfo-BHD6jdLj.js";import"./labelUtils-BzX0145M.js";import"./LayerFloorInfo-CKSnSMnn.js";import"./Relationship-DYSC4HOL.js";import"./serviceCapabilitiesUtils-ljk_p2-0.js";import"./popupUtils-BPDFECES.js";import"./sublayerUtils-CU9E7VJK.js";var d;const f=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let i=d=class extends _(S(C(N(k(G(V(J(B(x(M(q(A)))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(T).then(()=>this._fetchService(r))),Promise.resolve(this)}get attributionDataUrl(){var r;const e=(r=this.parsedUrl)==null?void 0:r.path.toLowerCase();return e?this._getDefaultAttribution(this._getMapName(e)):null}readSpatialReference(e,r){var t;return(e=e||((t=r.tileInfo)==null?void 0:t.spatialReference))&&v.fromJSON(e)}writeSublayers(e,r,t,o){if(!this.loaded||!e)return;const p=e.slice().reverse().flatten(({sublayers:l})=>l&&l.toArray().reverse()).toArray(),n=[],c={writeSublayerStructure:!1,...o};p.forEach(l=>{const h=l.write({},c);n.push(h)}),n.some(l=>Object.keys(l).length>1)&&(r.layers=n)}get tileServers(){var e;return this._getDefaultTileServers((e=this.parsedUrl)==null?void 0:e.path)}castTileServers(e){return Array.isArray(e)?e.map(r=>b(r).path):null}fetchTile(e,r,t,o={}){const{signal:p}=o,n=this.getTileUrl(e,r,t),c={responseType:"image",signal:p,query:{...this.refreshParameters}};return u(n,c).then(l=>l.data)}async fetchImageBitmapTile(e,r,t,o={}){const{signal:p}=o;if(this.fetchTile!==d.prototype.fetchTile){const h=await this.fetchTile(e,r,t,o);return y(h,e,r,t,p)}const n=this.getTileUrl(e,r,t),c={responseType:"blob",signal:p,query:{...this.refreshParameters}},{data:l}=await u(n,c);return y(l,e,r,t,p)}getTileUrl(e,r,t){var c,l;const o=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,p=w({...(c=this.parsedUrl)==null?void 0:c.query,blankTile:!o&&null,...this.customParameters,token:this.apiKey}),n=this.tileServers;return`${n&&n.length?n[r%n.length]:(l=this.parsedUrl)==null?void 0:l.path}/tile/${e}/${r}/${t}${p?"?"+p:""}`}loadAll(){return $(this,e=>{e(this.allSublayers)})}_fetchService(e){return new Promise((r,t)=>{if(this.sourceJSON){if(this.sourceJSON.bandCount!=null&&this.sourceJSON.pixelSizeX!=null)throw new m("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void r({data:this.sourceJSON})}if(!this.parsedUrl)throw new m("tile-layer:undefined-url","layer's url is not defined");const o=O(this.parsedUrl.path);if(o!=null&&o.serverType==="ImageServer")throw new m("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");u(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(r,t)}).then(r=>{let t=this.url;if(r.ssl&&(t=this.url=t.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),this.version===10.1&&!R(t))return this._fetchServerVersion(t,e).then(o=>{this.read({currentVersion:o})}).catch(()=>{})})}_fetchServerVersion(e,r){if(!U(e))return Promise.reject();const t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return u(t,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:r}).then(o=>{if(o.data&&o.data.currentVersion)return o.data.currentVersion;throw new m("tile-layer:version-not-available")})}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^/]+(\/[^/]+)*)\/mapserver/i);return r?r[2]:void 0}_getDefaultAttribution(e){if(e==null)return null;let r;e=e.toLowerCase();for(let t=0,o=f.length;t<o;t++)if(r=f[t],r.toLowerCase().includes(e))return W("//static.arcgis.com/attribution/"+r);return null}_getDefaultTileServers(e){if(e==null)return[];const r=e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i)!==-1,t=e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i)!==-1;return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile[g]}};s([a({readOnly:!0})],i.prototype,"attributionDataUrl",null),s([a({type:["show","hide","hide-children"]})],i.prototype,"listMode",void 0),s([a({json:{read:!0,write:!0}})],i.prototype,"blendMode",void 0),s([a({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],i.prototype,"isReference",void 0),s([a({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],i.prototype,"operationalLayerType",void 0),s([a({type:Boolean})],i.prototype,"resampling",void 0),s([a()],i.prototype,"sourceJSON",void 0),s([a({type:v})],i.prototype,"spatialReference",void 0),s([j("spatialReference",["spatialReference","tileInfo"])],i.prototype,"readSpatialReference",null),s([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),s([a({readOnly:!0})],i.prototype,"sublayers",void 0),s([P("sublayers",{layers:{type:[D]}})],i.prototype,"writeSublayers",null),s([a({json:{read:!1,write:!1}})],i.prototype,"popupEnabled",void 0),s([a()],i.prototype,"tileServers",null),s([I("tileServers")],i.prototype,"castTileServers",null),s([a({readOnly:!0,json:{read:!1}})],i.prototype,"type",void 0),s([a(E)],i.prototype,"url",void 0),i=d=s([L("esri.layers.TileLayer")],i);const g=Symbol("default-fetch-tile");i.prototype.fetchTile[g]=!0;const Ze=i;export{Ze as default};
//# sourceMappingURL=TileLayer-BcaZIKfx.js.map