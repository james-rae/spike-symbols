const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./featureLayerUtils-DN42YB8O.js","./spike-symbols.js","./spike-symbols.css","./originUtils-D69mHv66.js","./multiOriginJSONSupportUtils-C0wm8_Yw.js","./utils-DkjCtb5D.js","./jsonContext-BDpgn6DJ.js","./portalItemUtils-CnTMziNf.js","./saveUtils-CtQBSRUc.js","./fetchService-82N6TycT.js","./FeatureLayerSource-BXZt0Czu.js","./MeshLocalVertexSpace-Bu4zF7me.js","./meshVertexSpaceUtils-Bw0fuhv2.js","./External-Bdd8bCaL.js","./infoFor3D-CxdEiWhp.js","./MeshTransform-D1cKbbiS.js","./mat4f64-CSKppSlJ.js","./quat-DYDZvbwA.js","./mat3f64-q3fE-ZOt.js","./quatf64-aQ5IuZRd.js","./vec42-CGd3qQJJ.js","./editingSupport-GoQ_ocjo.js","./EditBusLayer-Bv_F4e5M.js","./clientSideDefaults-CkAjXC4A.js","./QueryEngineCapabilities-DjYb9CEb.js","./capabilities-Y9lFlGVh.js","./defaultsJSON-GKolV7NZ.js","./QueryTask-BrgXkcdQ.js","./executeForIds-BZpmuei3.js","./query-BbR5Y2Ua.js","./pbfQueryUtils-B4wItXS2.js","./pbf-CCxG-t_w.js","./OptimizedFeature-D3320lj0.js","./OptimizedFeatureSet-Blu9Ckm7.js","./queryZScale-D-hT_tjP.js","./executeQueryJSON-CkNjVEXG.js","./FeatureSet-C2IOSXSk.js","./featureConversionUtils-BxDN9gkv.js","./featureLayerUtils-Cwh8eKuP.js","./jsonUtils-B7oYZIeQ.js","./UniqueValueRenderer-DpnAQyVY.js","./ColorStop-DbeLVLMk.js","./diffUtils-ObaWOk_n.js","./colorRamps-D2XGA5co.js","./sizeVariableUtils-Cmcuvw-4.js","./visualVariableUtils-ap8FYP_g.js","./jsonUtils-B6BNTLPc.js","./defaults-CBYGZvbD.js","./styleUtils-Cj5AxdUy.js","./LRUCache-LcfJ3jIy.js","./FieldsIndex-iG3PpdUf.js","./UnknownTimeZone-Cjcij_vG.js","./OverrideHelper-BY3qVKDN.js","./colorUtils-CxpR8kgL.js","./vec4f64-CMoMXWBi.js","./utils-Bgq9-INc.js","./enums-CmIX1y88.js","./quantizationUtils-EnfPALPv.js","./heatmapUtils-7-1kyJ5b.js","./editsZScale-BVzk2_66.js"])))=>i.map(i=>d[i]);
import{hH as K,bW as G,dW as X,gi as P,aE as F,bS as Y,n as ee,a2 as te,s as b,cq as x,o as s,u as n,bm as re,x as ie,bj as I,v as N,bR as k,g5 as se,dX as ne,dY as oe,V as q,eI as ae,w as le,eg as pe,Z as ue,I as de,bu as ye,hu as ce,hI as he,_ as D,ej as me,bU as fe,d$ as be}from"./spike-symbols.js";import{S as M}from"./MultiOriginJSONSupport-CF9SEMGl.js";import{i as ge}from"./APIKeyMixin-CQcQ7xYE.js";import{l as ve}from"./ArcGISService-B90ElZ2X.js";import{e as we}from"./CustomParametersMixin-C6za5FFb.js";import{F as Fe}from"./EditBusLayer-Bv_F4e5M.js";import{V as Se,B as $e}from"./FeatureLayerBase-D8a01MTD.js";import{b as Ie}from"./OperationalLayer-DFF1tvhw.js";import{j as Oe}from"./PortalLayer-CzvBu_jL.js";import{f as je}from"./RefreshableLayer-Bh-aUUkw.js";import{l as Ee}from"./TemporalLayer-f50zMkoH.js";import{e as Te,p as Ce,d as _e,j as Ae,v as qe,l as Le,u as xe}from"./commonProperties-Bg_7mhO_.js";import{M as Q,T as U,J as Pe,Z as De,I as Re,F as Ve,q as Ge,A as Ne,v as ke,Q as Me,S as Qe,O as Ue,P as He,E as Be,L as Je,C as ze,R as We}from"./featureLayerUtils-Cwh8eKuP.js";import{s as H}from"./fieldProperties-BV6LyrWQ.js";import{p as Ze,A as Ke,z as Xe}from"./UniqueValueRenderer-DpnAQyVY.js";import{p as C}from"./jsonUtils-B7oYZIeQ.js";import{O as Ye}from"./colorUtils-CxpR8kgL.js";import{I as et}from"./cimSymbolUtils-sW4dnx__.js";import{h as tt,g as rt}from"./utils-C-AEPX7f.js";import{p as B}from"./FeatureTemplate-DwdLfW6V.js";import{C as it,n as st}from"./labelingInfo-BHD6jdLj.js";import{p as nt}from"./popupUtils-BPDFECES.js";import{c as ot,u as at,S as lt}from"./defaults-CBYGZvbD.js";import{d as pt}from"./TimeInfo-Co3vZhp5.js";import{t as ut}from"./versionUtils-BC3iB0PG.js";import{A as E}from"./interfaces-CL2NbQte.js";import"./LayerFloorInfo-CKSnSMnn.js";import"./Relationship-DYSC4HOL.js";import"./serviceCapabilitiesUtils-ljk_p2-0.js";import"./portalItemUtils-CnTMziNf.js";import"./FieldsIndex-iG3PpdUf.js";import"./UnknownTimeZone-Cjcij_vG.js";import"./ColorStop-DbeLVLMk.js";import"./diffUtils-ObaWOk_n.js";import"./colorRamps-D2XGA5co.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-ap8FYP_g.js";import"./jsonUtils-B6BNTLPc.js";import"./defaultsJSON-GKolV7NZ.js";import"./styleUtils-Cj5AxdUy.js";import"./LRUCache-LcfJ3jIy.js";import"./OverrideHelper-BY3qVKDN.js";import"./utils-Bgq9-INc.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-EnfPALPv.js";import"./heatmapUtils-7-1kyJ5b.js";import"./vec42-CGd3qQJJ.js";import"./vec4f64-CMoMXWBi.js";import"./labelUtils-BzX0145M.js";const J={key:"type",base:Ze,errorContext:"renderer",typeMap:{simple:C,"unique-value":Ke,"class-breaks":Xe}},L=K({types:J});function dt(e,t){var o;const r=(o=e.drawingInfo)==null?void 0:o.renderer,i=r?L(r,e,t):null;if((i==null?void 0:i.type)==="simple")return tt(i.symbol,null)?i.symbol.clone():null}const yt=["#ed5151","#149ece","#a7c636","#9e559c","#fc921f","#ffde3e","#f789d8","#b7814a","#3caf99","#6b6bd6","#b54779","#7f7f7f"];function ct(e,t){return Ye(yt,e,{offset:!0,shuffle:!0}).reverse().map(r=>{const i=t.clone();return i.type==="cim"?et(i,r):rt(i,r),new C({symbol:i})})}const R=H();let ht=0;function $(e){const t=e.json.write;return typeof t=="object"?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function mt(e){return new C({symbol:ft(e)})}function ft(e){switch(e){case"point":case"multipoint":return lt.clone();case"polyline":return at.clone();case"polygon":case"multipatch":return ot.clone();default:return null}}function bt(e,t){return!!t&&(e==null?void 0:e.type)==="unique-value"&&e.field!=null&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression}function z(e,t){var r;return e==null?null:(r=t.subtypes)==null?void 0:r.find(i=>i.code===e)}function gt(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const i={},o=z(e,t);if(o!=null){const{defaultValues:l}=o;for(const p in l)i[p]=l[p]}return i[t.subtypeField]=e,new B({name:"New Feature",drawingTool:r,prototype:{attributes:i}})}let a=class extends M(G(X(se))){constructor(e){super(e),this.attributeTableTemplate=null,this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${ht++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}load(e){return P(this.renderer,this.fieldsIndex),Promise.resolve(this)}get capabilities(){var e;return(e=this.parent)==null?void 0:e.capabilities}get effectiveCapabilities(){var e;return(e=this.parent)==null?void 0:e.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){var e;return(e=this.parent)==null?void 0:e.elevationInfo}writeFieldOverrides(e,t,r){const{fields:i,parent:o}=this;let l;if(i){l=[];let p=0;i.forEach(({name:d,alias:c,editable:g,visible:v})=>{var O;if(!v)return;const y=(O=o==null?void 0:o.fields)==null?void 0:O.find(S=>S.name===d);if(!y)return;const f={name:d};let w=!1;c!==y.alias&&(f.alias=c,w=!0),g!==y.editable&&(f.editable=g,w=!0),l.push(f),w&&p++}),p===0&&l.length===i.length&&(l=null)}else l=F(e);l!=null&&l.length&&Y(r,l,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,i=e==null?void 0:e.fields;if(!e||!(i!=null&&i.length))return null;const{subtypes:o,subtypeField:l}=e,p=o==null?void 0:o.find(v=>v.code===r),d=p==null?void 0:p.defaultValues,c=p==null?void 0:p.domains,g=[];for(const v of i){const y=v.clone(),{name:f}=y,w=t==null?void 0:t.find(j=>j.name===f);if(y.visible=!t||!!w,w){const{alias:j,editable:Z}=w;j&&(y.alias=j),Z===!1&&(y.editable=!1)}const O=(d==null?void 0:d[f])??null;y.defaultValue=f===l?r:O;const S=(c==null?void 0:c[f])??null;y.domain=f===l?null:S?S.type==="inherited"?y.domain:S.clone():null,g.push(y)}return g}get floorInfo(){var e;return(e=this.parent)==null?void 0:e.floorInfo}get geometryType(){var e;return(e=this.parent)==null?void 0:e.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){var e;return this.parent||ee.getLogger(this).error(h("objectIdField")),(e=this.parent)==null?void 0:e.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}get relationships(){var e;return(e=this.parent)==null?void 0:e.relationships}set renderer(e){P(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&e.geometryType!=="mesh"?mt(e.geometryType):null}readRendererFromService(e,t,r){var d,c,g;if(t.type==="Table")return null;const i=(d=t.drawingInfo)==null?void 0:d.renderer,o=L(i,t,r);let l;const{subtypeCode:p}=this;if(p!=null&&bt(o,t.subtypeField)){const v=(c=o.uniqueValueInfos)==null?void 0:c.find(({value:y})=>(y=typeof y=="number"?String(y):y)===String(p));v&&(l=new C({symbol:v.symbol}))}else(o==null?void 0:o.type)!=="simple"||(g=o.visualVariables)!=null&&g.length||(l=o);return l}readRenderer(e,t,r){var l,p,d;const i=(p=(l=t==null?void 0:t.layerDefinition)==null?void 0:l.drawingInfo)==null?void 0:p.renderer;return i?((d=i.visualVariables)==null?void 0:d.some(c=>c.type!=="rotationInfo"))?void 0:L(i,t,r)||void 0:void 0}get spatialReference(){var e;return((e=this.parent)==null?void 0:e.spatialReference)??te.WGS84}get subtypeField(){var e;return(e=this.parent)==null?void 0:e.subtypeField}readTemplatesFromService(e,t){return[gt(this.subtypeCode,t)]}readTitleFromService(e,t){const r=z(this.subtypeCode,t);return r!=null?r.name:null}get url(){var e;return(e=this.parent)==null?void 0:e.url}get userHasUpdateItemPrivileges(){var e;return!!((e=this.parent)!=null&&e.userHasUpdateItemPrivileges)}async addAttachment(e,t){const{parent:r}=this;if(!r)throw h("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new b("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:i}=this;if(!i)throw h("updateAttachment");if(e.getAttribute(i.subtypeField)!==this.subtypeCode)throw new b("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return i.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw h("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new b("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw h("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:i,title:o}=this;if(r){const{displayField:l,editFieldsInfo:p,objectIdField:d}=r;t={displayField:l,editFieldsInfo:p,fields:i,objectIdField:d,title:o}}return nt(t,e)}createQuery(){if(!this.parent)throw h("createQuery");const e=Q(this.parent),t=`${this.parent.subtypeField}=${this.subtypeCode}`;return e.where=x(t,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){if(!(t!=null&&t.excludeImpliedDomains)&&this.parent){const r=U(this.parent,e);if(r)return r}return this._getLayerDomain(e)}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw h("queryAttachments");const i=e.clone();return i.where=W(i.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatureCount(e,t){const r=await this.load();if(!r.parent)throw h("queryFeatureCount");return r.parent.queryFeatureCount(_(r.parent,r,e),t)}async queryFeatures(e,t){const r=await this.load();if(!r.parent)throw h("queryFeatures");return r.parent.queryFeatures(_(r.parent,r,e),t)}async queryObjectIds(e,t){const r=await this.load();if(!r.parent)throw h("queryObjectIds");return r.parent.queryObjectIds(_(r.parent,r,e),t)}async queryRelatedFeatures(e,t){const r=await this.load();if(!r.parent)throw h("queryRelatedFeatures");return r.parent.queryRelatedFeatures(e,t)}async queryRelatedFeaturesCount(e,t){const r=await this.load();if(!r.parent)throw h("queryRelatedFeaturesCount");return r.parent.queryRelatedFeaturesCount(e,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};s([n({type:Te,json:{name:"attributeTableInfo",write:{ignoreOrigin:!0}}})],a.prototype,"attributeTableTemplate",void 0),s([n({readOnly:!0,json:{read:!1}})],a.prototype,"capabilities",null),s([n({readOnly:!0,json:{read:!1}})],a.prototype,"effectiveCapabilities",null),s([n({json:{write:{ignoreOrigin:!0}}})],a.prototype,"charts",void 0),s([n({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],a.prototype,"editingEnabled",void 0),s([n({type:Boolean,readOnly:!0})],a.prototype,"effectiveEditingEnabled",null),s([n({readOnly:!0,json:{read:!1}})],a.prototype,"elevationInfo",null),s([n({json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],a.prototype,"fieldOverrides",void 0),s([re("fieldOverrides")],a.prototype,"writeFieldOverrides",null),s([n({...R.fields,readOnly:!0,json:{read:!1}})],a.prototype,"fields",null),s([n(R.fieldsIndex)],a.prototype,"fieldsIndex",void 0),s([n({readOnly:!0,json:{read:!1}})],a.prototype,"floorInfo",null),s([n({type:Se,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],a.prototype,"formTemplate",void 0),s([n({type:String,clonable:!1,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0}}})],a.prototype,"id",void 0),s([n({readOnly:!0,json:{read:!1}})],a.prototype,"geometryType",null),s([n({readOnly:!0,json:{read:!1}})],a.prototype,"type",void 0),s([n($(F(Ce)))],a.prototype,"labelsVisible",void 0),s([n({type:[it],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:st},write:{ignoreOrigin:!0}}})],a.prototype,"labelingInfo",void 0),s([n({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],a.prototype,"layerType",void 0),s([n($(F(_e)))],a.prototype,"legendEnabled",void 0),s([n({type:["show","hide"]})],a.prototype,"listMode",void 0),s([n((()=>{const e=F(Ae);return e.json.origins.service.read=!1,$(e)})())],a.prototype,"minScale",void 0),s([n((()=>{const e=F(qe);return e.json.origins.service.read=!1,$(e)})())],a.prototype,"maxScale",void 0),s([n({readOnly:!0})],a.prototype,"effectiveScaleRange",null),s([n({readOnly:!0,json:{read:!1}})],a.prototype,"objectIdField",null),s([n({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],a.prototype,"opacity",void 0),s([n({clonable:!1})],a.prototype,"parent",void 0),s([n($(F(Le)))],a.prototype,"popupEnabled",void 0),s([n({type:ie,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],a.prototype,"popupTemplate",void 0),s([n({readOnly:!0})],a.prototype,"defaultPopupTemplate",null),s([n({readOnly:!0,json:{read:!1}})],a.prototype,"relationships",null),s([n({types:J,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],a.prototype,"renderer",null),s([I("service","renderer",["drawingInfo.renderer","subtypeField","type"])],a.prototype,"readRendererFromService",null),s([I("renderer",["layerDefinition.drawingInfo.renderer"])],a.prototype,"readRenderer",null),s([n({readOnly:!0,json:{read:!1}})],a.prototype,"spatialReference",null),s([n({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],a.prototype,"subtypeCode",void 0),s([n({readOnly:!0,json:{read:!1}})],a.prototype,"subtypeField",null),s([n({type:[B],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],a.prototype,"templates",void 0),s([I("service","templates",["geometryType","subtypeField","subtypes","type"])],a.prototype,"readTemplatesFromService",null),s([n({type:String,json:{write:{ignoreOrigin:!0}}})],a.prototype,"title",void 0),s([I("service","title",["subtypes"])],a.prototype,"readTitleFromService",null),s([n({readOnly:!0,json:{read:!1}})],a.prototype,"url",null),s([n({readOnly:!0})],a.prototype,"userHasUpdateItemPrivileges",null),s([n({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],a.prototype,"visible",void 0),a=s([N("esri.layers.support.SubtypeSublayer")],a);const _=(e,t,r)=>{if(!r)return t.createQuery();const i=k.from(r);return i.where=W(i.where,e.subtypeField,t.subtypeCode),i},W=(e,t,r)=>{const i=new RegExp(`${t}\\s*=\\s*\\d+`),o=`${t}=${r}`,l=e??"";return i.test(l)?l.replace(i,o):x(o,l)},h=e=>new b(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),T=a,m="SubtypeGroupLayer",vt="esri.layers.SubtypeGroupLayer";function V(e,t){return new b("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}const A=H();let u=class extends $e(Fe(ne(Ee(oe(je(ve(Ie(Oe(M(we(ge(G(be))))))))))))){constructor(...e){super(...e),this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.sublayers=new(q.ofType(T)),this.useUniqueColorsForSublayers=!0,this.supportedSourceTypes=new Set(["Feature Layer"]),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this._debouncedSaveOperations=ae(async(t,r,i)=>{const{save:o,saveAs:l}=await D(()=>import("./featureLayerUtils-DN42YB8O.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url);switch(t){case E.SAVE:return o(this,r);case E.SAVE_AS:return l(this,i,r)}}),this.addHandles(le(()=>this.sublayers,(t,r)=>this._handleSublayersChange(t,r),pe))}destroy(){var e;(e=this.source)==null||e.destroy()}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=e!=null?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(ue).then(async()=>{if(!this.url)throw new b("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(this.layerId==null)throw new b("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))}).then(()=>Pe(this,"load",e));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&this.capabilities!=null&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return De(this)}get parsedUrl(){const e=de(this.url);return e!=null&&this.layerId!=null&&(e.path=ye(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:t}){return this.url?ce(this.url,t):t}async addAttachment(e,t){const r=await Re(this,e,t,m);return this.lastEditsEventDate=new Date,r}async updateAttachment(e,t,r){const i=await Ve(this,e,t,r,m);return this.lastEditsEventDate=new Date,i}async applyEdits(e,t){return Ge(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:t}=await he(D(()=>import("./FeatureLayerSource-BXZt0Czu.js"),__vite__mapDeps([10,1,2,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59]),import.meta.url),e);return new t({layer:this,supportedSourceTypes:this.supportedSourceTypes}).load({signal:e})}createQuery(){const e=Q(this),t=this.sublayers.map(r=>r.subtypeCode);return e.where=x(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,t){const r=await Ne(this,e,t,m);return this.lastEditsEventDate=new Date,r}async fetchRecomputedExtents(e){return ke(this,e,m)}findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.findSublayerForSubtypeCode(r)}findSublayerForSubtypeCode(e){return this._sublayerLookup.get(e)}getFieldDomain(e,t){var i;if(!(t!=null&&t.excludeImpliedDomains)){const o=U(this,e);if(o)return o}const r=Me(this,t==null?void 0:t.feature);if(r){const o=(i=r.domains)==null?void 0:i[e];return(o==null?void 0:o.type)==="inherited"?this._getLayerDomain(e):o}return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}loadAll(){return me(this,e=>{e(this.sublayers)})}async queryAttachments(e,t){return Qe(this,e,t,m)}async queryFeatures(e,t){const r=await this.load(),i=k.from(e)??r.createQuery(),o=i.outFields??[];o.includes(this.subtypeField)||(o.push(this.subtypeField),i.outFields=o);const l=await r.source.queryFeatures(i,t);if(l!=null&&l.features)for(const p of l.features)p.layer=p.sourceLayer=this.findSublayerForFeature(p);return l}async queryObjectIds(e,t){return Ue(this,e,t,m)}async queryFeatureCount(e,t){return He(this,e,t,m)}async queryExtent(e,t){return Be(this,e,t,m)}async queryRelatedFeatures(e,t){return Je(this,e,t,m)}async queryRelatedFeaturesCount(e,t){return ze(this,e,t,m)}async save(e){return this._debouncedSaveOperations(E.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(E.SAVE_AS,t,e)}write(e,t){var l;const{origin:r,layerContainerType:i,messages:o}=t;if(this.isTable){if(r==="web-scene"||r==="web-map"&&i!=="tables")return o==null||o.push(V(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&r==="web-map"&&i==="tables")return o==null||o.push(V(this,"using a non-table source cannot be written to tables in web maps")),null;return(l=this.sublayers)!=null&&l.length?super.write(e,t):(o==null||o.push(new b("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&ut(this,e)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){var r;this._set("source",e);const{sourceJSON:t}=e;if(t&&(this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})),!((r=this.subtypes)!=null&&r.length))throw new b("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),fe(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return We(this)}_verifyFields(){var t,r;const e=((t=this.parsedUrl)==null?void 0:t.path)??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||e.search(/\/FeatureServer\//i)!==-1||(r=this.fields)!=null&&r.some(i=>i.type==="geometry")||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach(r=>{r.parent=null}),this.removeHandles("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach(r=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),this.addHandles([e.on("after-add",({item:r})=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),e.on("after-remove",({item:r})=>{r.parent=null,this._sublayerLookup.delete(r.subtypeCode)})],"sublayers-owner"))}};s([n({readOnly:!0})],u.prototype,"createQueryVersion",null),s([n({readOnly:!0})],u.prototype,"editingEnabled",null),s([n({readOnly:!0})],u.prototype,"effectiveEditingEnabled",null),s([n({...A.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],u.prototype,"fields",void 0),s([n(A.fieldsIndex)],u.prototype,"fieldsIndex",void 0),s([n(xe)],u.prototype,"id",void 0),s([n({type:["show","hide","hide-children"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],u.prototype,"listMode",void 0),s([n({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],u.prototype,"operationalLayerType",void 0),s([n(A.outFields)],u.prototype,"outFields",void 0),s([n({readOnly:!0})],u.prototype,"parsedUrl",null),s([n({clonable:!1})],u.prototype,"source",null),s([n({type:q.ofType(T),json:{origins:{service:{read:{source:"subtypes",reader(e,t,r){let i=null;if(this.useUniqueColorsForSublayers){const l=dt(t,r);i=l?ct(e.length,l):null}const o=e.map(({code:l},p)=>{const d=new T({subtypeCode:l});d.read(t,r);const c=i==null?void 0:i[p];return c&&d.read({drawingInfo:{renderer:c.toJSON()}},r),d});return new(q.ofType(T))(o)}}}},name:"layers",write:{ignoreOrigin:!0}}})],u.prototype,"sublayers",void 0),s([n()],u.prototype,"useUniqueColorsForSublayers",void 0),s([n({type:pt})],u.prototype,"timeInfo",void 0),s([n({json:{origins:{"portal-item":{write:{enabled:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],u.prototype,"title",void 0),s([I("service","title",["name"])],u.prototype,"readTitleFromService",null),s([n({json:{read:!1}})],u.prototype,"type",void 0),u=s([N(vt)],u);const mr=u;export{mr as default};
//# sourceMappingURL=SubtypeGroupLayer-DM20FLaz.js.map
