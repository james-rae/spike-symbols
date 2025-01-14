import{o as n,u as l,v as $,V as S,eI as U,eR as I,f as _,eS as x,n as H,cq as g}from"./spike-symbols.js";import{j as O,y as T}from"./LayerView-Dj9UmBBt.js";import"./Container-1jIGcClG.js";import"./layerViewUtils-BVBGw69c.js";const u=Symbol(),A=p=>{let r=class extends p{constructor(){super(...arguments),this.layerViews=new S,this._debouncedUpdate=U(async()=>{const{layer:e,parent:t}=this,i=t==null?void 0:t.footprintLayerView;let s=[];const d=this._createQuery();if(d&&i){const{features:h}=await i.queryFeatures(d);this.suspended||(s=h.map(c=>e.acquireLayer(c)))}this.removeHandles(u),this.addHandles(s,u)})}get creatingLayerViews(){var e;return((e=this.view)==null?void 0:e.layerViewManager.isCreatingLayerViewsForLayer(this.layer))??!1}isUpdating(){return this.creatingLayerViews||this.layer.updating||this.layerViews.some(e=>e.updating)}enableLayerUpdates(){return I([this._updatingHandles.addWhen(()=>{var e,t;return((t=(e=this.parent)==null?void 0:e.footprintLayerView)==null?void 0:t.dataUpdating)===!1},()=>this.updateLayers()),this._updatingHandles.add(()=>{var e,t,i,s,d;return[this.layer.maximumVisibleSublayers,(e=this.layer.parent)==null?void 0:e.orderBy,(i=(t=this.parent)==null?void 0:t.footprintLayerView)==null?void 0:i.filter,(d=(s=this.parent)==null?void 0:s.footprintLayerView)==null?void 0:d.timeExtent,this.suspended]},()=>this.updateLayers()),_(()=>this.removeHandles(u))])}updateLayers(){this.suspended?this.removeHandles(u):this._updatingHandles.addPromise(x(this._debouncedUpdate()).catch(e=>{H.getLogger(this).error(e)}))}_createQuery(){var V,v;const e=(V=this.parent)==null?void 0:V.footprintLayerView,t=(v=this.layer)==null?void 0:v.parent;if(!e||!t||t.destroyed)return null;const{layer:{maximumVisibleSublayers:i},view:{scale:s}}=this;if(!i)return null;const{itemTypeField:d,itemSourceField:h,itemNameField:c,minScaleField:m,maxScaleField:f,objectIdField:C,orderBy:w}=t,F=g(`${m} IS NULL OR ${s} <= ${m} OR ${m} = 0`,`${f} IS NULL OR ${s} >= ${f}`),o=w==null?void 0:w.find(y=>y.field&&!y.valueExpression),a=e.createQuery();if(a.returnGeometry=!1,a.num=i,a.outFields=[C,h,c],a.where=g(a.where,F),this.unsupportedItemTypes!=null){const y=`${d} NOT IN (${this.unsupportedItemTypes.map(b=>`'${b}'`)})`;a.where=g(a.where,y)}return o!=null&&o.field&&(a.orderByFields=[`${o.field} ${o.order==="descending"?"DESC":"ASC"}`],a.outFields.push(o.field)),a}};return n([l({readOnly:!0})],r.prototype,"creatingLayerViews",null),n([l()],r.prototype,"layer",void 0),n([l()],r.prototype,"layerViews",void 0),n([l({readOnly:!0})],r.prototype,"unsupportedItemTypes",void 0),n([l()],r.prototype,"parent",void 0),n([l({readOnly:!0})],r.prototype,"isUpdating",null),r=n([$("esri.views.layers.CatalogDynamicGroupLayerView")],r),r};let L=class extends A(O(T)){constructor(){super(...arguments),this.unsupportedItemTypes=["Scene Service"],this.layerViews=new S}attach(){this.addAttachHandles([this.layerViews.on("after-changes",()=>this._updateStageChildren()),this.enableLayerUpdates()])}detach(){this.container.removeAllChildren()}update(p){this.updateLayers()}viewChange(){}moveEnd(){this.requestUpdate()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((p,r)=>this.container.addChildAt(p.container,r))}};L=n([$("esri.views.2d.layers.CatalogDynamicGroupLayerView2D")],L);const R=L;export{R as default};
//# sourceMappingURL=CatalogDynamicGroupLayerView2D-D4aYcSHP.js.map