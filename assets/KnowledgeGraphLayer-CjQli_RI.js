import{dX as T,dY as _,V as f,w as S,eg as D,Z as L,s as b,ca as u,eh as v,n as g,cw as E,e9 as A,e7 as w,ea as C,ap as N,o as r,u as h,bj as k,bm as $,v as I,dK as R,bu as G,d$ as O}from"./spike-symbols.js";import{S as U}from"./MultiOriginJSONSupport-CF9SEMGl.js";import{u as c,c as M,E as j,F,R as P}from"./KnowledgeGraphSublayer-CDfXzWR3.js";import{l as z}from"./ArcGISService-B90ElZ2X.js";import{e as K}from"./CustomParametersMixin-C6za5FFb.js";import{b as x}from"./OperationalLayer-DFF1tvhw.js";import{j as H}from"./PortalLayer-CzvBu_jL.js";import{f as V}from"./RefreshableLayer-Bh-aUUkw.js";import{y as Y}from"./commonProperties-Bg_7mhO_.js";import{F as B}from"./knowledgeGraphService-CKrVJN-A.js";import"./featureConversionUtils-BxDN9gkv.js";import"./OptimizedFeature-D3320lj0.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./GraphQueryStreaming-DRLV05NV.js";import"./UniqueValueRenderer-DpnAQyVY.js";import"./ColorStop-DbeLVLMk.js";import"./diffUtils-ObaWOk_n.js";import"./colorRamps-D2XGA5co.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-ap8FYP_g.js";import"./jsonUtils-B6BNTLPc.js";import"./defaults-CBYGZvbD.js";import"./defaultsJSON-GKolV7NZ.js";import"./styleUtils-Cj5AxdUy.js";import"./jsonUtils-B7oYZIeQ.js";import"./LRUCache-LcfJ3jIy.js";import"./FieldsIndex-iG3PpdUf.js";import"./UnknownTimeZone-Cjcij_vG.js";import"./OverrideHelper-BY3qVKDN.js";import"./colorUtils-CxpR8kgL.js";import"./vec42-CGd3qQJJ.js";import"./vec4f64-CMoMXWBi.js";import"./utils-Bgq9-INc.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-EnfPALPv.js";import"./heatmapUtils-7-1kyJ5b.js";import"./FeatureStore-k6EEOmhU.js";import"./BoundsStore-C725ZusS.js";import"./PooledRBush-DZxXC49k.js";import"./timeSupport-C5fg3loK.js";import"./queryUtils-C-LTqSVD.js";import"./json-Wa8cmqdu.js";import"./optimizedFeatureQueryEngineAdapter-BiRGmhIT.js";import"./QueryEngine-Be-GotER.js";import"./WhereClause-CdjqOpWH.js";import"./TimeOnly-CLsZxU64.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./utils-BmCdcwSX.js";import"./utils-SHizMRFZ.js";import"./utils-BIMTktEB.js";import"./ClassBreaksDefinition-BDriidlr.js";import"./clientSideDefaults-CkAjXC4A.js";import"./capabilities-Y9lFlGVh.js";import"./fieldProperties-BV6LyrWQ.js";import"./FeatureEffectLayer-D5B0ef_V.js";import"./FeatureEffect-CGoK9m7D.js";import"./FeatureReductionLayer-w2DTDWFa.js";import"./FeatureReductionSelection-ZSpOH3PJ.js";import"./featureLayerUtils-Cwh8eKuP.js";import"./labelingInfo-BHD6jdLj.js";import"./labelUtils-BzX0145M.js";import"./MD5-C9MwAd2G.js";import"./OrderedLayer-Bd_0ZRO3.js";import"./OrderByInfo-lVyN74vC.js";import"./TemporalLayer-f50zMkoH.js";import"./TimeInfo-Co3vZhp5.js";import"./FeatureSet-C2IOSXSk.js";import"./popupUtils-BPDFECES.js";import"./portalItemUtils-CnTMziNf.js";let s=class extends T(_(V(z(x(H(U(K(O)))))))){constructor(e){super(e),this._graphTypeLookup=new Map,this._namedTypesModified=!1,this.dataManager=null,this.definitionSetMap=null,this.knowledgeGraph=null,this.layers=new(f.ofType(c)),this.memberEntityTypes=null,this.memberRelationshipTypes=null,this.operationalLayerType="KnowledgeGraphLayer",this.sublayerIdsCache=new Map,this.tables=new(f.ofType(c)),this.type="knowledge-graph",this.url=null,this.addHandles(S(()=>this.layers.concat(this.tables),(t,i)=>this._handleSublayersChange(t,i),D))}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){try{await this.loadFromPortal({supportedTypes:["Knowledge Graph Layer"]},e)}catch(t){L(t)}await this._fetchMetadata(),await this._initializeLayerProperties(),this.loadLayerAssumingLocalCache(),await M(this)}async _fetchMetadata(){if(!this.url)throw new b("knowledge-graph:missing-url","KnowledgeGraphLayer must be created with a url");const e=await B(this.url);this.knowledgeGraph=e,this._forEachGraphType(t=>{t.name&&this._graphTypeLookup.set(t.name,t)})}async _initializeLayerProperties(){this.originIdOf("inclusionModeDefinition")===u.USER?this._validateInclusionModeDefinition():await this._initializeInclusionModeDefinition(),this._setMemberTypes(),this.dataManager=new j({knowledgeGraph:this.knowledgeGraph,inclusionModeDefinition:this.inclusionModeDefinition})}async _initializeInclusionModeDefinition(){const e=this.definitionSetMap?await F(this.definitionSetMap,!0):{generateAllSublayers:!0,namedTypeDefinitions:new Map};[...this.layers.toArray(),...this.tables.toArray()].forEach(t=>{const i=this._graphTypeLookup.get(t.graphTypeName);i&&!e.namedTypeDefinitions.has(i.name)&&e.namedTypeDefinitions.set(i.name,{useAllData:!0})}),this.setAtOrigin("inclusionModeDefinition",e,v(this.originIdOf("definitionSetMap")))}_validateInclusionModeDefinition(){const{inclusionModeDefinition:e}=this;if(!e)return;const{namedTypeDefinitions:t}=e;if((t==null?void 0:t.size)>0)t.forEach((i,a)=>{const o=this._graphTypeLookup.get(a);if(!o)return g.getLogger(this).warn(`A named type, ${a}, was in the inclusion list that wasn't in the data model and will be removed`),void t.delete(a);o.type!=="relationship"&&o.type!=="entity"&&(g.getLogger(this).warn(`A named type, ${a}, was in the inclusion list that wasn't properly modeled and will be removed`),t.delete(a))});else if(!e.generateAllSublayers)throw new b("knowledge-graph:composite-layer-constructor","If an explicit inclusion definition is defined, at least one namedTypeDefinition must also be defined")}_setMemberTypes(){var o,n;let e=[],t=[];const{inclusionModeDefinition:i}=this,a=i==null?void 0:i.namedTypeDefinitions;!i||i.generateAllSublayers?(e=((o=this.knowledgeGraph.dataModel)==null?void 0:o.entityTypes)??[],t=((n=this.knowledgeGraph.dataModel)==null?void 0:n.relationshipTypes)??[]):a&&a.size>0&&a.forEach((p,l)=>{const d=this._graphTypeLookup.get(l);switch(d==null?void 0:d.type){case"relationship":t.push(d);break;case"entity":e.push(d)}}),this.memberEntityTypes=e,this.memberRelationshipTypes=t}_forEachGraphType(e){var t,i;[...((t=this.knowledgeGraph.dataModel)==null?void 0:t.entityTypes)??[],...((i=this.knowledgeGraph.dataModel)==null?void 0:i.relationshipTypes)??[]].forEach(a=>{e(a)})}_refreshNamedTypes(){this._namedTypesModified=!0;for(const e of this.layers)e.emit("refresh",{dataChanged:!0});for(const e of this.tables)e.emit("refresh",{dataChanged:!0})}async _handleNewRecords(e){const t=[];this.dataManager.addToLayer(e);for(const i of e)this.sublayerIdsCache.has(i.typeName)||(this.sublayerIdsCache.set(i.typeName,new Set),t.push(i.typeName)),this.sublayerIdsCache.get(i.typeName).add(i.id);for(const i of t){const a=this._graphTypeLookup.get(i);a&&(this._addSublayer(a),a.type==="entity"?this.dataManager.entityTypeNames.add(i):this.dataManager.relationshipTypeNames.add(i),this.dataManager.sublayerCaches.set(i,new Map))}await M(this,t),this._refreshNamedTypes()}_createSublayers(e,t,i){e.forEach(a=>{const o=this._createSublayer(a);i(o)&&t.push(o),this._updateSublayerCaches(a)})}_addSublayer(e){const t=this._createSublayer(e);return t.geometryType?this.layers.push(t):this.tables.push(t),t}_createSublayer(e){return new c({objectType:e,parentCompositeLayer:this,graphType:e.type})}_updateSublayers(e,t){t.forEach(i=>{i.parentCompositeLayer=this;const a=e.find(o=>o.type===i.graphType&&o.name===i.graphTypeName);a&&(i.objectType=a,this._updateSublayerCaches(a))})}_updateSublayerCaches(e){const t=this.dataManager.sublayerCaches;t.has(e.name)||t.set(e.name,new Map)}_saveUrlAsNewResource(e,t,i,a){e[t]="<pending>",i.pendingOperations.push(X(this.inclusionModeDefinition).then(o=>{const n=Z(a);e[t]=n.itemRelativeUrl,i.toAdd.push({resource:n,content:{type:"blob",blob:o},compress:!1,finish:p=>{this.definitionSetMap=p.url}})}))}_displaysAllRecords(e){for(const[,{useAllData:t}]of e.namedTypeDefinitions)if(!t)return!1;return!0}_handleSublayersChange(e,t){t&&(t.forEach(i=>{i.parent=null}),this.removeHandles("sublayers-owner")),e&&(e.forEach(i=>{i.parent=this}),this.addHandles([e.on("after-add",({item:i})=>{i.parent=this}),e.on("after-remove",({item:i})=>{i.parent=null})],"sublayers-owner"))}readDefinitionSetMap(e,t,i){return E(e,i)}writeDefinitionSetMap(e,t,i,a){const o=a==null?void 0:a.portalItem,n=a==null?void 0:a.resources,p=A(a==null?void 0:a.origin);if(!o||!n||p==null)return void(e&&(t[i]=w(e,a)));const{inclusionModeDefinition:l}=this;if(!l||this._displaysAllRecords(l))return void(this.definitionSetMap=null);const d=this.originIdOf("inclusionModeDefinition");if(d===u.USER||this._namedTypesModified||p<d)this._saveUrlAsNewResource(t,i,n,o);else if(p===d&&e){const m=w(e,a);C(m)?this._saveUrlAsNewResource(t,i,n,o):t[i]=m}}set inclusionModeDefinition(e){this.loadStatus!=="loaded"&&this.loadStatus!=="failed"?this._set("inclusionModeDefinition",e):g.getLogger(this).error("#inclusionModeDefinition","inclusionModeDefinition cannot be changed after the layer is loaded.")}loadLayerAssumingLocalCache(){var t,i;const e=[...this.memberEntityTypes,...this.memberRelationshipTypes];this.originIdOf("layers")===u.DEFAULTS?this._createSublayers(e,this.layers,a=>!!a.geometryType):this._updateSublayers(e,this.layers),this.originIdOf("tables")===u.DEFAULTS?this._createSublayers(e,this.tables,a=>!a.geometryType):this._updateSublayers(e,this.tables),(i=(t=this.dataManager.inclusionModeDefinition)==null?void 0:t.namedTypeDefinitions)==null||i.forEach((a,o)=>{var p;const n=N(this.sublayerIdsCache,o,()=>new Set);(p=a.members)==null||p.forEach(l=>{n.add(l.id)})})}async addRecords(e){await this._handleNewRecords(e)}async removeRecords(e){var i,a,o,n,p,l,d,m;const t=[];for(const y of e)((o=(a=(i=this.dataManager.inclusionModeDefinition)==null?void 0:i.namedTypeDefinitions)==null?void 0:a.get(y.typeName))==null?void 0:o.useAllData)===!1&&((d=(l=(p=(n=this.dataManager.inclusionModeDefinition)==null?void 0:n.namedTypeDefinitions)==null?void 0:p.get(y.typeName))==null?void 0:l.members)!=null&&d.has(y.id))&&t.push(y);this.dataManager.removeFromLayer(t);for(const y of t)(m=this.sublayerIdsCache.get(y.typeName))==null||m.delete(y.id);return this._refreshNamedTypes(),t}};r([h()],s.prototype,"dataManager",void 0),r([h({json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0}}})],s.prototype,"definitionSetMap",void 0),r([k("definitionSetMap")],s.prototype,"readDefinitionSetMap",null),r([$("definitionSetMap")],s.prototype,"writeDefinitionSetMap",null),r([h()],s.prototype,"inclusionModeDefinition",null),r([h()],s.prototype,"knowledgeGraph",void 0),r([h({type:f.ofType(c),json:{write:{ignoreOrigin:!0}}})],s.prototype,"layers",void 0),r([h()],s.prototype,"memberEntityTypes",void 0),r([h()],s.prototype,"memberRelationshipTypes",void 0),r([h({type:["KnowledgeGraphLayer"]})],s.prototype,"operationalLayerType",void 0),r([h()],s.prototype,"sublayerIdsCache",void 0),r([h({type:f.ofType(c),json:{write:{ignoreOrigin:!0}}})],s.prototype,"tables",void 0),r([h({json:{read:!1}})],s.prototype,"type",void 0),r([h(Y)],s.prototype,"url",void 0),s=r([I("esri.layers.KnowledgeGraphLayer")],s);const lt=s;async function X(e){const t=await P(e);return new Blob([t],{type:"application/x-protobuf"})}function Z(e){const t=`definitionSetMap-${R()}.dat`,i=G("knowledgeGraphLayer",t);return e.resourceFromPath(i)}export{lt as default};
//# sourceMappingURL=KnowledgeGraphLayer-CjQli_RI.js.map