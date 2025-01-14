import{o as n,u as y,bj as g,bm as s,bT as m,el as v,f5 as w,v as G,f6 as A,s as l,f7 as h,ec as M}from"./spike-symbols.js";import{I as E,a as L,f as O}from"./commonProperties-Bg_7mhO_.js";const u={ArcGISAnnotationLayer:!0,ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,CatalogLayer:!0,CSV:!0,GeoJSON:!0,GeoRSS:!0,GroupLayer:!0,KML:!0,KnowledgeGraphLayer:!0,MediaLayer:!0,OGCFeatureLayer:!0,OrientedImageryLayer:!0,SubtypeGroupLayer:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},b={ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0},I={ArcGISFeatureLayer:!0,SubtypeGroupTable:!0},C={"web-scene/operational-layers":{ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,CatalogLayer:!0,CSV:!0,GeoJSON:!0,GroupLayer:!0,IntegratedMesh3DTilesLayer:!0,IntegratedMeshLayer:!0,KML:!0,LineOfSightLayer:!0,MediaLayer:!0,OGCFeatureLayer:!0,OrientedImageryLayer:!0,PointCloudLayer:!0,RasterDataLayer:!0,VectorTileLayer:!0,ViewshedLayer:!0,Voxel:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},"web-scene/basemap":{ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-scene/tables":{ArcGISFeatureLayer:!0},"web-map/operational-layers":u,"web-map/basemap":b,"web-map/tables":I,"link-chart/operational-layers":{...u,LinkChartLayer:!0},"link-chart/basemap":b,"link-chart/tables":I,"portal-item/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,BuildingSceneLayer:!0,IntegratedMesh3DTilesLayer:!0,IntegratedMeshLayer:!0,MediaLayer:!0,OrientedImageryLayer:!0,PointCloudLayer:!0,SubtypeGroupLayer:!0}},B=T=>{let i=class extends T{constructor(){super(...arguments),this.persistenceEnabled=!0,this.title=null}readId(r,e,t){var a;return((a=t==null?void 0:t.portalItem)==null?void 0:a.type)==="Group Layer"?void 0:r}writeListMode(r,e,t,a){(a&&a.layerContainerType==="ground"||r&&A(this,t,{},a))&&(e[t]=r)}writeOperationalLayerType(r,e,t,a){r&&(a==null?void 0:a.layerContainerType)!=="tables"&&(e.layerType=r)}writeTitle(r,e){e.title=r??"Layer"}readTimeExtent(r){return r?m.fromArray(r):null}writeTimeExtent(r,e,t,a){r&&a.layerContainerType!=="tables"&&(r.isEmpty?a!=null&&a.messages&&a.messages.push(new l("layer:invalid-visibilityTimeExtent","visibilityTimeExtent cannot be empty")):e[t]=r.toArray())}read(r,e){e&&(e.layer=this),h(this,r,t=>super.read(r,t),e)}write(r,e){var S,d;if(!this.persistenceEnabled&&!(e!=null&&e.ignorePersistenceEnabled))return null;if(e!=null&&e.origin){const o=`${e.origin}/${e.layerContainerType||"operational-layers"}`,p=C[o];let c=!!(p!=null&&p[this.operationalLayerType]);if(this.operationalLayerType==="ArcGISTiledElevationServiceLayer"&&o==="web-scene/operational-layers"&&(c=!1),this.operationalLayerType==="ArcGISDimensionLayer"&&o==="web-map/operational-layers"&&(c=!1),!c)return(S=e.messages)==null||S.push(new l("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${o}'`,{layer:this})),null}const t=super.write(r,{...e,layer:this}),a=!!e&&!!e.messages&&!!e.messages.filter(o=>o instanceof l&&o.name==="web-document-write:property-required").length;return M(t==null?void 0:t.url)?((d=e==null?void 0:e.messages)==null||d.push(new l("layer:invalid-url",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`,{layer:this})),null):!this.url&&a?null:t}beforeSave(){}};return n([y({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],i.prototype,"id",void 0),n([g("id",["id"])],i.prototype,"readId",null),n([y(E)],i.prototype,"listMode",void 0),n([s("listMode")],i.prototype,"writeListMode",null),n([y({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1},"web-scene":{name:"layerType",read:!1,write:{enabled:!0,ignoreOrigin:!0,layerContainerTypes:L}}}}})],i.prototype,"operationalLayerType",void 0),n([s("operationalLayerType")],i.prototype,"writeOperationalLayerType",null),n([y(O)],i.prototype,"opacity",void 0),n([y({type:Boolean,readOnly:!1})],i.prototype,"persistenceEnabled",void 0),n([y({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],i.prototype,"title",void 0),n([s("title"),s(["web-scene"],"title")],i.prototype,"writeTitle",null),n([y({type:m,json:{origins:{"web-scene":{write:{layerContainerTypes:L}}}}})],i.prototype,"visibilityTimeExtent",void 0),n([g("visibilityTimeExtent")],i.prototype,"readTimeExtent",null),n([s(["portal-item","web-map","web-scene"],"visibilityTimeExtent",{visibilityTimeExtent:{type:[[v,w]]}})],i.prototype,"writeTimeExtent",null),n([y({type:Boolean,json:{origins:{"web-scene":{name:"visibility",write:{enabled:!0,layerContainerTypes:L}}},name:"visibility",write:!0}})],i.prototype,"visible",void 0),i=n([G("esri.layers.mixins.OperationalLayer")],i),i};export{B as b};
//# sourceMappingURL=OperationalLayer-DFF1tvhw.js.map
