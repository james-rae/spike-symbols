import{o as a,u as m,v as E,y as F,s as w,T as M,k as S,n as C,w as R,by as q}from"./spike-symbols.js";import{a as $}from"./BitmapContainer-CDhpkKUe.js";import{j as U,y as V}from"./LayerView-Dj9UmBBt.js";import{_ as L}from"./ExportStrategy-Jo4SeAXR.js";import{i as W}from"./RefreshableLayerView-CnIYAbdI.js";import{a as A}from"./ExportWMSImageParameters-BH0dXeCS.js";import{i as H}from"./timeSupport-D7EE4ucc.js";import"./WGLContainer-CImgX_CT.js";import"./LabelMetric-PHKs_pq8.js";import"./enums-CmIX1y88.js";import"./Program-Cxdj17lW.js";import"./BufferObject-CSPERlzr.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./VertexArrayObject-DAMe4oiC.js";import"./ProgramTemplate-DplDQ5RO.js";import"./vec3f32-nZdmKIgz.js";import"./Container-1jIGcClG.js";import"./StyleDefinition-BTt_i6C1.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-BxDN9gkv.js";import"./OptimizedFeature-D3320lj0.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./layerViewUtils-BVBGw69c.js";import"./Bitmap-DnEglIPE.js";const _=r=>{let t=class extends r{initialize(){this.exportImageParameters=new A({layer:this.layer})}destroy(){this.exportImageParameters=F(this.exportImageParameters)}get exportImageVersion(){var e;return(e=this.exportImageParameters)==null||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}get timeExtent(){var e;return H(this.layer,(e=this.view)==null?void 0:e.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(e,s){const{layer:o}=this;if(!e)throw new w("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:o});const{popupEnabled:d}=o;if(!d)throw new w("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:d});const i=this.createFetchPopupFeaturesQuery(e);if(!i)return[];const{extent:n,width:p,height:h,x:c,y}=i;if(!(n&&p&&h))throw new w("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:n,width:p,height:h});const g=await o.fetchFeatureInfo(n,p,h,c,y);return M(s),g}};return a([m()],t.prototype,"exportImageParameters",void 0),a([m({readOnly:!0})],t.prototype,"exportImageVersion",null),a([m()],t.prototype,"layer",void 0),a([m({readOnly:!0})],t.prototype,"timeExtent",null),t=a([E("esri.views.layers.WMSLayerView")],t),t};let u=class extends _(W(U(V))){constructor(){super(...arguments),this.bitmapContainer=new $}supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}update(r){this.strategy.update(r).catch(t=>{S(t)||C.getLogger(this).error(t)})}attach(){const{layer:r}=this,{imageMaxHeight:t,imageMaxWidth:e}=r;this.bitmapContainer=new $,this.container.addChild(this.bitmapContainer),this.strategy=new L({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:e,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(R(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=F(this.strategy),this.container.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(r){const{view:t,bitmapContainer:e}=this,{x:s,y:o}=r,{spatialReference:d}=t;let i,n=0,p=0;if(e.children.some(g=>{const{width:f,height:v,resolution:b,x:l,y:x}=g,I=l+b*f,P=x-b*v;return s>=l&&s<=I&&o<=x&&o>=P&&(i=new q({xmin:l,ymin:P,xmax:I,ymax:x,spatialReference:d}),n=f,p=v,!0)}),!i)return null;const h=i.width/n,c=Math.round((s-i.xmin)/h),y=Math.round((i.ymax-o)/h);return{extent:i,width:n,height:p,x:c,y}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(r,t,e,s){return this.layer.fetchImageBitmap(r,t,e,{timeExtent:this.timeExtent,...s})}};a([m()],u.prototype,"strategy",void 0),a([m()],u.prototype,"updating",void 0),u=a([E("esri.views.2d.layers.WMSLayerView2D")],u);const mt=u;export{mt as default};
//# sourceMappingURL=WMSLayerView2D-BRDqAa9B.js.map