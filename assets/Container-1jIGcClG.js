import{o,u as l,v as m,aP as v,bg as R,n as O,aE as _,hT as S,hU as q,hV as w,dO as p,cM as M,ga as V,gS as F,gT as g,fq as I}from"./spike-symbols.js";const u=-1;let d=class extends v{constructor(e){super(e),this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this.duration=R("mapview-transitions-duration"),this.effects=[]}set effect(e){if(this._get("effect")!==(e=e||"")){this._set("effect",e);try{this._transitionTo(b(e))}catch(t){this._transitionTo([]),O.getLogger(this).warn("Invalid Effect",{effect:e,error:t})}}}get final(){return this._final}get hasEffects(){return this.transitioning||!!this.effects.length}set scale(e){this._updateForScale(e)}get transitioning(){return this._to!==null}canTransitionTo(e){try{return this.scale>0&&y(this._current,b(e),this.scale)}catch{return!1}}transitionStep(e,t){this._applyTimeTransition(e),this._updateForScale(t)}endTransition(){this._applyTimeTransition(this.duration)}_transitionTo(e){this.scale>0&&y(this._current,e,this.scale)?(this._final=e,this._to=_(e),C(this._current,this._to,this.scale),this._from=_(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=e),this._set("effects",this._current[0]?_(this._current[0].effects):[])}_applyTimeTransition(e){if(!(this._to&&this._from&&this._current&&this._final))return;this._time+=e;const t=Math.min(1,this._time/this.duration);for(let i=0;i<this._current.length;i++){const s=this._current[i],r=this._from[i],a=this._to[i];s.scale=E(r.scale,a.scale,t);for(let n=0;n<s.effects.length;n++){const c=s.effects[n],h=r.effects[n],T=a.effects[n];c.interpolate(h,T,t)}}t===1&&(this._current=this._final,this._set("effects",this._current[0]?_(this._current[0].effects):[]),this._from=this._to=this._final=null)}_updateForScale(e){if(this._set("scale",e),this._current.length===0)return;const t=this._current,i=this._current.length-1;let s,r,a=1;if(t.length===1||e>=t[0].scale)r=s=t[0].effects;else if(e<=t[i].scale)r=s=t[i].effects;else for(let n=0;n<i;n++){const c=t[n],h=t[n+1];if(c.scale>=e&&h.scale<=e){a=(e-c.scale)/(h.scale-c.scale),s=c.effects,r=h.effects;break}}for(let n=0;n<this.effects.length;n++)this.effects[n].interpolate(s[n],r[n],a)}};function b(e){const t=S(e)||[];return A(t)?[{scale:u,effects:t}]:t}function y(e,t,i){var s,r,a,n;return!((s=e[0])!=null&&s.effects)||!((r=t[0])!=null&&r.effects)?!0:!((((a=e[0])==null?void 0:a.scale)===u||((n=t[0])==null?void 0:n.scale)===u)&&(e.length>1||t.length>1)&&i<=0)&&q(e[0].effects,t[0].effects)}function C(e,t,i){const s=e.length>t.length?e:t,r=e.length>t.length?t:e,a=r[r.length-1],n=(a==null?void 0:a.scale)??i,c=(a==null?void 0:a.effects)??[];for(let h=r.length;h<s.length;h++)r.push({scale:n,effects:[...c]});for(let h=0;h<s.length;h++)r[h].scale=r[h].scale===u?i:r[h].scale,s[h].scale=s[h].scale===u?i:s[h].scale,w(r[h].effects,s[h].effects)}function E(e,t,i){return e+(t-e)*i}function A(e){const t=e[0];return!!t&&"type"in t}o([l()],d.prototype,"_to",void 0),o([l()],d.prototype,"duration",void 0),o([l({value:""})],d.prototype,"effect",null),o([l({readOnly:!0})],d.prototype,"effects",void 0),o([l({readOnly:!0})],d.prototype,"final",null),o([l({readOnly:!0})],d.prototype,"hasEffects",null),o([l({value:0})],d.prototype,"scale",null),o([l({readOnly:!0})],d.prototype,"transitioning",null),d=o([m("esri.layers.effects.EffectView")],d);let f=class extends v{constructor(e){super(e),this.computedOpacity=1,this.computedVisible=!0,this.opacity=1,this.visible=!0,this._fadeOutResolver=null,this._fadeInResolver=null}get transitioning(){return(this._fadeOutResolver||!this.visible?0:this.opacity)!==this.computedOpacity}endTransition(){var e,t;(e=this._fadeInResolver)==null||e.call(this),(t=this._fadeOutResolver)==null||t.call(this),this._fadeInResolver=this._fadeOutResolver=null,this.computedOpacity=this.visible?this.opacity:0}fadeIn(){var e;return this._fadeInResolver||(this.opacity=1,this.computedOpacity=0,(e=this._fadeOutResolver)==null||e.call(this),this._fadeOutResolver=null,this._fadeInResolver=p()),this._fadeInResolver.promise}fadeOut(){var e;return this._fadeOutResolver||(this.opacity=0,(e=this._fadeInResolver)==null||e.call(this),this._fadeInResolver=null,this._fadeOutResolver=p()),this._fadeOutResolver.promise}transitionStep(e,t){var r,a;const i=R("mapview-transitions-duration"),s=i?1/i:0;if(s===0)this.computedOpacity=this.opacity,this.computedVisible=this.visible;else{const n=this._fadeOutResolver||!this.visible?0:this.opacity,c=this.computedOpacity;if(c===n)this.computedVisible=this.visible;else{const h=e*s;this.computedOpacity=c>n?Math.max(n,c-h):Math.min(n,c+h),this.computedVisible=this.computedOpacity>0}}this.transitioning||((r=this._fadeInResolver)==null||r.call(this),(a=this._fadeOutResolver)==null||a.call(this),this._fadeOutResolver=this._fadeInResolver=null)}};o([l()],f.prototype,"computedOpacity",void 0),o([l()],f.prototype,"computedVisible",void 0),o([l()],f.prototype,"opacity",void 0),o([l()],f.prototype,"visible",void 0),o([l()],f.prototype,"transitioning",null),o([l()],f.prototype,"_fadeOutResolver",void 0),o([l()],f.prototype,"_fadeInResolver",void 0),f=o([m("esri.views.2d.engine.transitions.FadeTransition")],f);class D extends M{constructor(){super(...arguments),this._transitionables=null,this._clips=null,this._fadeTransition=null,this._isReady=!1,this._opacity=1,this.parent=null,this._stage=null,this._visible=!0}get computedOpacity(){var t;return((t=this._fadeTransition)==null?void 0:t.computedOpacity)??this.opacity}get clips(){return this._clips}set clips(t){this._clips=t,this.requestRender()}get fadeTransitionEnabled(){return this._fadeTransition!==null}set fadeTransitionEnabled(t){!this._fadeTransition&&t?(this._fadeTransition=new f({opacity:this.opacity,visible:this.visible}),this.addTransitionable(this._fadeTransition)):this._fadeTransition&&!t&&(this.removeTransitionable(this._fadeTransition),this._fadeTransition=null)}get inFadeTransition(){var t;return((t=this._fadeTransition)==null?void 0:t.transitioning)??!1}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(t){this._opacity!==t&&(this._opacity=Math.min(1,Math.max(t,0)),this._fadeTransition&&(this._fadeTransition.opacity=this._opacity),this.requestRender())}get stage(){return this._stage}set stage(t){var s;if(this._stage===t)return;const i=this._stage;this._stage=t,t?(s=this._stage)!=null&&s.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):i==null||i.trashDisplayObject(this)}get transforms(){return this._transforms==null&&(this._transforms=this._createTransforms()),this._transforms}get transitioning(){return this.isTransitioning()}get visible(){return this._visible}set visible(t){this._visible!==t&&(this._visible=t,this._fadeTransition&&(this._fadeTransition.visible=this._visible),this.requestRender())}get hasLabels(){return!1}get hasHighlight(){return!1}get hasBlending(){return!1}addTransitionable(t){this._transitionables??(this._transitionables=[]),this._transitionables.push(t),this.requestRender()}removeTransitionable(t){t.endTransition(),this._transitionables&&V(this._transitionables,t),this.requestRender()}fadeIn(){this.fadeTransitionEnabled=!0;const t=this._fadeTransition.fadeIn();return this.opacity=1,this.requestRender(),t}fadeOut(){this.fadeTransitionEnabled=!0;const t=this._fadeTransition.fadeOut();return this.opacity=0,this.requestRender(),t}endTransitions(){if(this._transitionables){for(const t of this._transitionables)t.endTransition();this.requestRender()}}beforeRender(t){this.transitionStep(t.deltaTime,t.state.scale),this.setTransform(t.state)}afterRender(t){this.transitioning&&this.requestRender()}remove(){var t;(t=this.parent)==null||t.removeChild(this)}setTransform(t){}processRender(t){var i;this.stage&&(((i=this._fadeTransition)==null?void 0:i.computedVisible)??this.visible)&&this.doRender(t)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this.endTransitions(),this.onDetach(),this.emit("detach")}isTransitioning(){var t;return((t=this._transitionables)==null?void 0:t.some(i=>i.transitioning))??!1}transitionStep(t,i){if(this._transitionables)for(const s of this._transitionables)s.transitionStep(t,i)}onAttach(){}onDetach(){}doRender(t){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}}let x=class extends D{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this._children=[],this._childrenObservable=new F,this._effectView=null,this._highlightGradient=null}get blendMode(){return this._blendMode}set blendMode(t){this._blendMode=t,this.requestRender()}get children(){return g(this._childrenObservable),this._children}get clips(){return this._clips}set clips(t){this._clips=t,this.children.forEach(i=>i.clips=t)}get computedEffects(){var t;return((t=this._effectView)==null?void 0:t.effects)??null}get effect(){var t;return((t=this._effectView)==null?void 0:t.effect)??""}set effect(t){(this._effectView||t)&&(this._effectView||(this._effectView=new d,this.addTransitionable(this._effectView)),this._effectView.effect=t,this.requestRender())}get highlightGradient(){return this._highlightGradient}set highlightGradient(t){this._highlightGradient=t,this.requestRender()}get hasBlending(){return!!this.blendMode}get hasHighlight(){return this.children.some(t=>t.hasHighlight)}get hasLabels(){return this.children.some(t=>t.hasLabels)}get requiresDedicatedFBO(){return this.children.some(t=>"blendMode"in t&&t.blendMode&&t.blendMode!=="normal")}get isReady(){return this.children.every(t=>t.isReady)}get sortFunction(){return this._sortFunction}set sortFunction(t){this._sortFunction=t,t&&(this._needsSort=!0)}doRender(t){var r;const i=this.createRenderParams(t),{painter:s}=i;s.beforeRenderLayer(i,(r=this._clips)!=null&&r.length?255:0,this.computedOpacity),this.renderChildren(i),s.afterRenderLayer(i,this.computedOpacity)}addChild(t){return this.addChildAt(t,this.children.length)}addChildAt(t,i=this.children.length){if(!t||this.contains(t))return t;this._needsSort=!0;const s=t.parent;return s&&s!==this&&s.removeChild(t),i>=this.children.length?this.children.push(t):this.children.splice(i,0,t),this._childrenSet.add(t),t.parent=this,t.stage=this.stage,this!==this.stage&&(t.clips=this.clips),this.requestRender(),this._childrenObservable.notify(),t}contains(t){return g(this._childrenObservable),this._childrenSet.has(t)}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const t of this.children)this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null;this.children.length=0,this._childrenObservable.notify()}removeChild(t){return this.contains(t)?this.removeChildAt(this.children.indexOf(t)):t}removeChildAt(t){if(t<0||t>=this.children.length)return null;this._needsSort=!0;const i=this.children.splice(t,1)[0];return this._childrenSet.delete(i),this!==this.stage&&(i.clips=null),i.stage=null,i.parent=null,this._childrenObservable.notify(),i}beforeRender(t){super.beforeRender(t),this.sortFunction&&this._needsSort&&(this.children.sort(this.sortFunction),this._needsSort=!1,this._childrenObservable.notify());for(const i of this.children)i.beforeRender(t)}afterRender(t){super.afterRender(t);for(const i of this.children)i.afterRender(t)}_createTransforms(){return{displayViewScreenMat3:I()}}onAttach(){super.onAttach();const t=this.stage;for(const i of this.children)i.stage=t}onDetach(){super.onDetach();for(const t of this.children)t.stage=null}renderChildren(t){for(const i of this.children)i.processRender(t)}createRenderParams(t){return{...t,requireFBO:this.requiresDedicatedFBO,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:t.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition,highlightGradient:this._highlightGradient||t.highlightGradient}}isTransitioning(){return super.isTransitioning()||this.children.some(t=>t.transitioning)}};export{d as a,D as e,x as n};
//# sourceMappingURL=Container-1jIGcClG.js.map
