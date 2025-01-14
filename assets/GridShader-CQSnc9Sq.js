import{d as R}from"./WGLContainer-CImgX_CT.js";import{o as c,h8 as I,bg as Yt,cM as Te,b7 as V,iY as ke,kR as Fe,kS as Se,kT as De,aP as Y,u as f,v as X,eK as Jt,fD as Ee,kU as he,c_ as ce,dy as Ve,dA as ze,dm as me,kV as xt,bw as Mt,fB as de,kW as ft,kX as Le,dj as Re,fw as Nt,kY as Ie,jM as Pe,kZ as Ae,fA as nt,k_ as Ze,k$ as Bt,l0 as Ne,l1 as Be,y as mt,l2 as Kt}from"./spike-symbols.js";import{h as Ct,g as w,K as Oe,I as $t,P as ot,b as Tt,H as y,z as qe,l as j,x as $,U as S,j as h,y as Z,G as x,D as p,Y as pe,A as Ot,B as k,E as P,F as ge,J as te,L as ee,M as Ue,N as Xt,m as A,C as F,S as G,w as kt,O as je,c as Ge,Q as _e,v as Ft,V as Ye,R as Xe,T as We,X as He,_ as Qe,$ as Je,a0 as Ke,a1 as ti,a2 as qt,a3 as ie,a4 as se,a5 as ei,a6 as ii,a as si}from"./UpdateTracking2D-CrEvi5Z7.js";import{t as ni}from"./CircularArray-CujHzHWW.js";import{a as oi}from"./testSVGPremultipliedAlpha-CAT16COA.js";import{t as ai}from"./AttributeStore-Cj_89wZQ.js";const Ei={shaders:{vertexShader:R("bitBlit/bitBlit.vert"),fragmentShader:R("bitBlit/bitBlit.frag")},attributes:new Map([["a_pos",0],["a_tex",1]])},Vi={shaders:{vertexShader:R("stencil/stencil.vert"),fragmentShader:R("stencil/stencil.frag")},attributes:new Map([["a_pos",0]])};class ye extends $t{}c([Ct(0,F)],ye.prototype,"position",void 0);class ri extends Ft{}class K extends ot{}c([w(G)],K.prototype,"layerTexture",void 0),c([w(G)],K.prototype,"backbufferTexture",void 0),c([w(h)],K.prototype,"opacity",void 0),c([w(h)],K.prototype,"inFadeOpacity",void 0);class dt extends Tt{vertex(t){return{uv:t.position,glPosition:new y(qe(t.position),0,1)}}fragment(t){const e=new kt,i=j(this.config.layerTexture,t.uv),o=j(this.config.backbufferTexture,t.uv),s=$(S(i.a,new h(0)),i.rgb,i.rgb.divide(i.a)),n=$(S(o.a,new h(0)),o.rgb,o.rgb.divide(o.a)),l=this.config.opacity.multiply(i.a),a=o.a;switch(this.blendMode){case"destination-over":e.glFragColor=new y(s.multiply(l).multiply(p(a)).add(n.multiply(a)),l.add(a).subtract(l.multiply(a)));break;case"source-in":{const u=new y(s.multiply(l).multiply(a),l.multiply(a)),m=new y(n.multiply(a),a).multiply(p(this.config.opacity)).multiply(this.config.inFadeOpacity);e.glFragColor=u.add(m)}break;case"destination-in":{const u=new y(n.multiply(a).multiply(l),a.multiply(l)),m=new y(n.multiply(a),a).multiply(new y(p(this.config.opacity).multiply(this.config.inFadeOpacity)));e.glFragColor=u.add(m)}break;case"source-out":e.glFragColor=new y(s.multiply(l).multiply(p(a)),l.multiply(p(a)));break;case"destination-out":e.glFragColor=new y(n.multiply(a).multiply(p(l)),a.multiply(p(l)));break;case"source-atop":e.glFragColor=new y(s.multiply(l).multiply(a).add(n.multiply(a.multiply(p(l)))),a);break;case"destination-atop":e.glFragColor=new y(s.multiply(l.multiply(p(a))).add(n.multiply(a).multiply(l)),l);break;case"xor":e.glFragColor=new y(s.multiply(l.multiply(p(a))).add(n.multiply(a.multiply(p(l)))),l.multiply(p(a)).add(a.multiply(p(l))));break;case"multiply":e.glFragColor=new y(s.multiply(l).multiply(n.multiply(a)).add(s.multiply(l).multiply(p(a))).add(n.multiply(a).multiply(p(l))),l.add(a.multiply(p(l))));break;case"screen":e.glFragColor=new y(s.add(n).subtract(s.multiply(n)).multiply(l.multiply(a)).add(s.multiply(l).multiply(p(a))).add(n.multiply(a).multiply(p(l))),l.add(a.multiply(p(l))));break;case"overlay":{const u=new x(St(n.r,s.r),St(n.g,s.g),St(n.b,s.b));e.glFragColor=M(u,s,n,l,a)}break;case"darken":{const u=k(s,n);e.glFragColor=M(u,s,n,l,a)}break;case"lighter":e.glFragColor=new y(s.multiply(l).add(n.multiply(a)),l.add(a));break;case"lighten":{const u=Ot(s,n);e.glFragColor=M(u,s,n,l,a)}break;case"color-dodge":{const u=Z(new x(vt(n.r,s.r),vt(n.g,s.g),vt(n.b,s.b)),new x(0),new x(1));e.glFragColor=M(u,s,n,l,a)}break;case"color-burn":{const u=new x(wt(n.r,s.r),wt(n.g,s.g),wt(n.b,s.b));e.glFragColor=M(u,s,n,l,a)}break;case"hard-light":{const u=new x(Dt(n.r,s.r),Dt(n.g,s.g),Dt(n.b,s.b));e.glFragColor=M(u,s,n,l,a)}break;case"soft-light":{const u=new x(Et(n.r,s.r),Et(n.g,s.g),Et(n.b,s.b));e.glFragColor=M(u,s,n,l,a)}break;case"difference":{const u=pe(n.subtract(s));e.glFragColor=M(u,s,n,l,a)}break;case"exclusion":{const u=s.add(n).subtract(new h(2).multiply(s).multiply(n));e.glFragColor=M(u,s,n,l,a)}break;case"invert":e.glFragColor=new y(new x(1).subtract(n).multiply(l).multiply(a).add(n.multiply(a).multiply(p(l))),a);break;case"vivid-light":{const u=new x(Z(Vt(n.r,s.r),new h(0),new h(1)),Z(Vt(n.g,s.g),new h(0),new h(1)),Z(Vt(n.b,s.b),new h(0),new h(1)));e.glFragColor=M(u,s,n,l,a)}break;case"hue":{const u=oe(s,n,n);e.glFragColor=M(u,s,n,l,a)}break;case"saturation":{const u=oe(n,s,n);e.glFragColor=M(u,s,n,l,a)}break;case"color":{const u=jt(s,n);e.glFragColor=M(u,s,n,l,a)}break;case"luminosity":{const u=jt(n,s);e.glFragColor=M(u,s,n,l,a)}break;case"plus":e.glFragColor=Z(new y(i.r.add(n.r),i.g.add(n.g),i.b.add(n.b),l.add(a)),new y(0),new y(1));break;case"minus":e.glFragColor=new y(Z(new x(n.r.subtract(i.r),n.g.subtract(i.g),n.b.subtract(i.b)),new x(0),new x(1)),a.multiply(l));break;case"average":{const u=n.add(s).divide(2);e.glFragColor=M(u,s,n,l,a)}break;case"reflect":{const u=Z(new x(zt(n.r,s.r),zt(n.g,s.g),zt(n.b,s.b)),new x(0),new x(1));e.glFragColor=M(u,s,n,l,a)}break;default:e.glFragColor=i.multiply(this.config.opacity)}return e}}function M(r,t,e,i,o){return new y(r.multiply(i).multiply(o).add(t.multiply(i).multiply(p(o))).add(e.multiply(o).multiply(p(i))),i.add(o.multiply(p(i))))}function St(r,t){return new h(1).subtract(P(new h(.5),t)).multiply(p(new h(2).multiply(p(t).multiply(p(r))))).add(P(new h(.5),t).multiply(new h(2).multiply(t).multiply(r)))}function vt(r,t){return $(S(r,new h(0)),new h(0),$(S(t,new h(1)),new h(1),k(new h(1),r.divide(new h(1).subtract(t)))))}function wt(r,t){return $(S(r,new h(1)),new h(1),$(S(t,new h(0)),new h(0),p(k(new h(1),p(r).divide(t)))))}function Dt(r,t){return new h(1).subtract(P(new h(.5),t)).multiply(new h(2).multiply(t).multiply(r)).add(P(new h(.5),t).multiply(p(new h(2).multiply(p(t).multiply(p(r))))))}function Et(r,t){return ge([te(t,new h(.5)),()=>{const e=new h(2).multiply(t),i=p(e),o=p(r);return r.subtract(i.multiply(r).multiply(o))}],[te(r,new h(.25)),()=>{const e=new h(2).multiply(t),i=ee(e).multiply(r),o=new h(16).multiply(r).subtract(new h(12)).multiply(r).add(new h(3));return r.add(i.multiply(o))}],[!0,()=>{const e=new h(2).multiply(t),i=ee(e),o=je(r).subtract(r);return r.add(i.multiply(o))}])}function Vt(r,t){const e=p(P(new h(.5),t)).multiply(wt(r,new h(2).multiply(t))),i=P(new h(.5),t).multiply(vt(r,new h(2).multiply(Ue(t,.5))));return e.add(i)}function Wt(r){return k(k(r.r,r.g),r.b)}function ve(r){return Ot(Ot(r.r,r.g),r.b)}function Ut(r){return Ge(r,new x(.3,.59,.11))}function ne(r){return ve(r).subtract(Wt(r))}function li(r){const t=Ut(r),e=Wt(r),i=ve(r);return ge([_e(e,new h(0)),()=>{const o=r.subtract(t).multiply(t),s=t.subtract(e);return t.add(o.divide(s))}],[Xt(i,new h(1)),()=>{const o=r.subtract(t),s=p(t),n=o.multiply(s),l=i.subtract(t);return t.add(n.divide(l))}],[!0,r])}function jt(r,t){const e=Ut(r),i=Ut(t).subtract(e);return li(r.add(new x(i)))}function oe(r,t,e){const i=Wt(r),o=ne(r),s=ne(t);return jt($(Xt(o,new h(0)),()=>r.subtract(i).multiply(s).divide(o),new x(0)),e)}function zt(r,t){return $(S(t,new h(1)),t,()=>{const e=p(t),i=r.multiply(r).divide(e);return k(i,new h(1))})}c([Oe],dt.prototype,"blendMode",void 0),c([w(K)],dt.prototype,"config",void 0),c([I(0,A(ye))],dt.prototype,"vertex",null),c([I(0,A(ri))],dt.prototype,"fragment",null);class we extends $t{}c([Ct(0,F)],we.prototype,"position",void 0);class ui extends Ft{}let Gt=class extends ot{};c([w(G)],Gt.prototype,"layerTexture",void 0),c([w(h)],Gt.prototype,"opacity",void 0);let Lt=class extends Tt{vertex(t){return{uv:t.position,glPosition:new y(t.position.subtract(new F(.5)).multiply(2),0,1)}}fragment(t){const e=new kt;return e.glFragColor=j(this.config.layerTexture,t.uv).multiply(this.config.opacity),e}};c([w(Gt)],Lt.prototype,"config",void 0),c([I(0,A(we))],Lt.prototype,"vertex",null),c([I(0,A(ui))],Lt.prototype,"fragment",null);const Ri={shaders:{vertexShader:R("highlight/textured.vert"),fragmentShader:R("highlight/highlight.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])},Ii={shaders:{vertexShader:R("highlight/textured.vert"),fragmentShader:R("highlight/blur.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])},T=!!Yt("esri-2d-profiler");let Pi=class{constructor(t,e){if(this._events=new Te,this._entries=new Map,this._timings=new ni(10),this._currentContainer=null,this._currentPass=null,this._currentBrush=null,this._currentSummary=null,!T)return;this._ext=oi(t.gl,{}),this._debugOutput=e;const i=t.gl;if(!this.enableCommandLogging)return;let o;for(o in i)if(typeof i[o]=="function"){const s=i[o],n=o.includes("draw");i[o]=(...l)=>(this._events.emit("command",{container:this._currentContainer,pass:this._currentPass,brush:this._currentBrush,method:o,args:l,isDrawCommand:n}),this._currentSummary&&(this._currentSummary.commands++,n&&this._currentSummary.drawCommands++),s.apply(i,l))}}get enableCommandLogging(){return!(typeof T=="object"&&T.disableCommands)}recordContainerStart(t){T&&(this._currentContainer=t)}recordContainerEnd(){T&&(this._currentContainer=null)}recordPassStart(t){T&&(this._currentPass=t,this._initSummary())}recordPassEnd(){T&&(this._currentPass=null,this._emitSummary())}recordBrushStart(t){T&&(this._currentBrush=t)}recordBrushEnd(){T&&(this._currentBrush=null)}recordStart(t){if(T&&this._ext!=null){if(this._entries.has(t)){const i=this._entries.get(t),o=this._ext.resultAvailable(i.query),s=this._ext.disjoint();if(o&&!s){const n=this._ext.getResult(i.query)/1e6;let l=0;if(this._timings.enqueue(n)!=null){const m=this._timings.entries,g=m.length;let v=0;for(const d of m)v+=d;l=v/g}const a=n.toFixed(2),u=l?l.toFixed(2):"--";this.enableCommandLogging?(console.groupCollapsed(`Frame report for ${t}, ${a} ms (${u} last 10 avg)
${i.commandsLen} Commands (${i.drawCommands} draw)`),console.log("RenderPass breakdown: "),console.table(i.summaries),console.log("Commands: ",i.commands),console.groupEnd()):console.log(`Frame report for ${t}, ${a} ms (${u} last 10 avg)`),this._debugOutput.innerHTML=`${a} (${u})`}for(const n of i.handles)n.remove();this._ext.deleteQuery(i.query),this._entries.delete(t)}const e={name:t,query:this._ext.createQuery(),commands:[],commandsLen:0,drawCommands:0,summaries:[],handles:[]};this.enableCommandLogging&&(e.handles.push(this._events.on("command",i=>{e.commandsLen++,e.commands.push(i),i.isDrawCommand&&e.drawCommands++})),e.handles.push(this._events.on("summary",i=>{e.summaries.push(i)}))),this._ext.beginTimeElapsed(e.query),this._entries.set(t,e)}}recordEnd(t){T&&this._ext!=null&&this._entries.has(t)&&this._ext.endTimeElapsed()}_initSummary(){this.enableCommandLogging&&(this._currentSummary={container:this._currentContainer,pass:this._currentPass,drawCommands:0,commands:0})}_emitSummary(){this.enableCommandLogging&&this._currentSummary&&this._events.emit("summary",this._currentSummary)}};const D=1,bt=0,it=1,st=2;let hi=class{constructor(t,e,i){this._width=t*i,this._height=e*i,this._pixelRatio=i;const o=Math.ceil(this._width/D),s=Math.ceil(this._height/D);this._cols=o,this._rows=s,this._cells=ai.create(o*s)}insertMetrics(t){this._markMetrics(t)}hasCollision(t){let e=0;for(const{transformedX:i,transformedY:o,width:s,height:n}of t.bounds){const l=s*this._pixelRatio,a=n*this._pixelRatio,u=i*this._pixelRatio,m=o*this._pixelRatio;switch(this._collide(u,m,l,a)){case st:return st;case it:e++}}return e===t.bounds.length?it:bt}getCellId(t,e){return t+e*this._cols}has(t){return this._cells.has(t)}hasRange(t,e){return this._cells.hasRange(t,e)}set(t){this._cells.set(t)}setRange(t,e){this._cells.setRange(t,e)}_collide(t,e,i,o){const s=t-i/2,n=e-o/2,l=s+i,a=n+o;if(l<0||a<0||s>this._width||n>this._height)return it;const u=V(Math.floor(s/D),0,this._cols),m=V(Math.floor(n/D),0,this._rows),g=V(Math.ceil(l/D),0,this._cols),v=V(Math.ceil(a/D),0,this._rows);for(let d=m;d<=v;d++)for(let _=u;_<=g;_++){const b=this.getCellId(_,d);if(this.has(b))return st}return bt}_mark(t,e,i,o){const s=t-i/2,n=e-o/2,l=s+i,a=n+o,u=V(Math.floor(s/D),0,this._cols),m=V(Math.floor(n/D),0,this._rows),g=V(Math.ceil(l/D),0,this._cols),v=V(Math.ceil(a/D),0,this._rows);for(let d=m;d<=v;d++)for(let _=u;_<=g;_++){const b=this.getCellId(_,d);this.set(b)}return!1}_markMetrics(t){for(const{transformedX:e,transformedY:i,width:o,height:s}of t.bounds){const n=o*this._pixelRatio,l=s*this._pixelRatio,a=e*this._pixelRatio,u=i*this._pixelRatio;this._mark(a,u,n,l)}}};const H=254,pt=255,Q=0;function B(r,t){const e=r.children.slice();e.sort((i,o)=>i.tileAge-o.tileAge),e.forEach(i=>{i.labelMetrics!=null&&i.isReady&&t(i,i.labelMetrics)})}function ae(r,t){return(!r.minScale||r.minScale>=t)&&(!r.maxScale||r.maxScale<=t)}class ci{run(t,e,i,o){var n;const s=[];for(let l=t.length-1;l>=0;l--){const a=t[l];(n=a.labelingCollisionInfos)!=null&&n.length&&s.push(...a.labelingCollisionInfos)}Yt("esri-2d-update-debug")&&s.length&&console.debug("CollisionEngine.run"),this._transformMetrics(s),this._runCollision(s,e,i,o);for(const l of s)l.container.requestRender()}_runCollision(t,e,i,o){const[s,n]=e.state.size,l=new hi(s,n,e.pixelRatio);for(const{container:a,deconflictionEnabled:u,visible:m}of t){const g=a.attributeView;u?m?(this._prepare(a),this._collideVisible(l,a,i,o),this._collideInvisible(l,a)):B(a,(v,d)=>{for(const _ of d)g.setLabelMinZoom(_.entityTexel,pt)}):B(a,(v,d)=>{for(const _ of d)ae(_,i)?(g.setLabelMinZoom(_.entityTexel,Q),m&&l.insertMetrics(_)):g.setLabelMinZoom(_.entityTexel,H)})}}_isFiltered(t,e,i){const o=e.getFilterFlags(t),s=!i.hasFilter||!!(o&ke),n=i.featureEffect==null||i.featureEffect.excludedLabelsVisible||!!(o&Fe);return!(s&&n)}_prepare(t){const e=t.attributeView,i=new Set;B(t,(o,s)=>{for(const n of s){const l=n.entityTexel;if(!i.has(l)){if(i.add(l),this._isFiltered(l,e,t.layerView)){e.setLabelMinZoom(l,H);continue}e.getLabelMinZoom(l)!==Q?e.setLabelMinZoom(l,pt):e.setLabelMinZoom(l,Q)}}})}_collideVisible(t,e,i,o){const s=e.attributeView,n=new Set;B(e,(l,a)=>{for(let u=0;u<a.length;u++){const m=a[u].entityTexel;if(n.has(m))continue;if(l.key.level!==o){s.setLabelMinZoom(m,H),n.add(m);continue}if(!ae(a[u],i)){s.setLabelMinZoom(m,H),n.add(m);continue}if(s.getLabelMinZoom(m)!==0){n.add(m);continue}let g=!1,v=!0;const d=u;let _=u;for(;_<a.length;_++){const b=a[_];if(b.entityTexel!==m)break;if(!g)switch(t.hasCollision(b)){case it:break;case st:g=!0,v=!1;break;case bt:v=!1}}if(!g)for(let b=d;b<_;b++)t.insertMetrics(a[b]);u=_-1,v||(n.add(m),s.setLabelMinZoom(m,g?H:Q))}})}_collideInvisible(t,e){const i=e.attributeView,o=new Set;B(e,(s,n)=>{for(let l=0;l<n.length;l++){const a=n[l].entityTexel;if(o.has(a))continue;if(i.getLabelMinZoom(a)!==pt){o.add(a);continue}let u=!1,m=!0;const g=l;let v=l;for(;v<n.length;v++){const d=n[v];if(d.entityTexel!==a)break;if(!u)switch(t.hasCollision(d)){case it:break;case st:u=!0,m=!1;break;case bt:m=!1}}if(!u)for(let d=g;d<v;d++)t.insertMetrics(n[d]);l=v-1,m||(o.add(a),i.setLabelMinZoom(a,u?pt:Q))}})}_transformMetrics(t){for(const{container:e,geometryType:i,vvEvaluators:o}of t)B(e,(s,n)=>{var m;const l=e.attributeView,a=s.transforms.labelMat2d;a[4]=Math.round(a[4]),a[5]=Math.round(a[5]);const u=i==="polyline";for(const g of n){const{entityTexel:v,anchorX:d,anchorY:_}=g;let b=((m=g.referenceBounds)==null?void 0:m.size)??0;const at=o[0];if(at!=null){const C=at(l.getVisualVariableData(v,Se.SIZE));b=isNaN(C)||C==null||C===1/0?b:C}const rt=De+b/2,W=g.directionX*rt,Qt=g.directionY*rt;for(const C of g.bounds){let lt=d,ut=_;if(u){const ht=d+C.x+W,ct=_+C.y+Qt;lt=a[0]*ht+a[2]*ct+a[4],ut=a[1]*ht+a[3]*ct+a[5];const Ce=lt,$e=ut;C.transformedX=Math.floor(Ce),C.transformedY=Math.floor($e)}else{lt=a[0]*d+a[2]*_+a[4],ut=a[1]*d+a[3]*_+a[5];const ht=lt+C.x+W,ct=ut+C.y+Qt;C.transformedX=ht,C.transformedY=ct}}}})}}const mi=32;let J=class extends Y{constructor(t){super(t),this._lastUpdate=0,this.collisionEngine=new ci,this.lastUpdateId=-1,this.updateRequested=!1,this.view=null}get updating(){return Yt("esri-2d-log-updating")&&console.log(`Updating LabelManager ${this.updateRequested}:
-> updateRequested: ${this.updateRequested}`),this.updateRequested}update(t){const e=performance.now();e-this._lastUpdate>=mi?(this._lastUpdate=e,this.doUpdate(t)):this.requestUpdate()}viewChange(){this.requestUpdate()}requestUpdate(){var t;this.updateRequested||(this.updateRequested=!0,(t=this.view)==null||t.requestUpdate())}processUpdate(t){this.updateRequested&&(this.updateRequested=!1,this.update(t))}doUpdate(t){const e=this.view;if(e)try{const i=t.state.scale,o=e.featuresTilingScheme.getClosestInfoForScale(i).level;this.collisionEngine.run(e.allLayerViews.items,t,i,o)}catch{}}};c([f()],J.prototype,"updateRequested",void 0),c([f()],J.prototype,"updating",null),c([f()],J.prototype,"view",void 0),J=c([X("esri.views.2d.LabelManager")],J);const gt="esri-zoom-box",_t={container:`${gt}__container`,overlay:`${gt}__overlay`,background:`${gt}__overlay-background`,box:`${gt}__outline`},Rt={zoom:"Shift",counter:"Control"};let tt=class extends Y{constructor(t){super(t),this._container=null,this._overlay=null,this._backgroundShape=null,this._boxShape=null,this._box={x:0,y:0,width:0,height:0},this._rafId=null,this._redraw=this._redraw.bind(this)}destroy(){this.view=null}set view(t){this.removeAllHandles(),this._destroyOverlay(),this._set("view",t),t&&this.addHandles([t.on("drag",[Rt.zoom],e=>this._handleDrag(e,1),Jt.INTERNAL),t.on("drag",[Rt.zoom,Rt.counter],e=>this._handleDrag(e,-1),Jt.INTERNAL)])}_start(){this._createContainer(),this._createOverlay(),this.navigation.begin()}_update(t,e,i,o){this._box.x=t,this._box.y=e,this._box.width=i,this._box.height=o,this._rafId||(this._rafId=requestAnimationFrame(this._redraw))}_end(t,e,i,o,s){const n=this.view,l=n.toMap(Ee(t+.5*i,e+.5*o));let a=Math.max(i/n.width,o/n.height);s===-1&&(a=1/a),this._destroyOverlay(),this.navigation.end(),n.goTo({center:l,scale:n.scale*a},{animationMode:"always",duration:he()})}_updateBox(t,e,i,o){const s=this._boxShape;s.setAttributeNS(null,"x",""+t),s.setAttributeNS(null,"y",""+e),s.setAttributeNS(null,"width",""+i),s.setAttributeNS(null,"height",""+o),s.setAttributeNS(null,"class",_t.box)}_updateBackground(t,e,i,o){this._backgroundShape.setAttributeNS(null,"d",this._toSVGPath(t,e,i,o,this.view.width,this.view.height))}_createContainer(){const t=document.createElement("div");t.className=_t.container,this.view.root.appendChild(t),this._container=t}_createOverlay(){const t=this.view.width,e=this.view.height,i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttributeNS(null,"d","M 0 0 L "+t+" 0 L "+t+" "+e+" L 0 "+e+" Z"),i.setAttributeNS(null,"class",_t.background);const o=document.createElementNS("http://www.w3.org/2000/svg","rect"),s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),s.setAttributeNS(null,"class",_t.overlay),s.appendChild(i),s.appendChild(o),this._container.appendChild(s),this._backgroundShape=i,this._boxShape=o,this._overlay=s}_destroyOverlay(){this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container),this._container=this._backgroundShape=this._boxShape=this._overlay=null}_toSVGPath(t,e,i,o,s,n){const l=t+i,a=e+o;return"M 0 0 L "+s+" 0 L "+s+" "+n+" L 0 "+n+" ZM "+t+" "+e+" L "+t+" "+a+" L "+l+" "+a+" L "+l+" "+e+" Z"}_handleDrag(t,e){const i=t.x,o=t.y,s=t.origin.x,n=t.origin.y;let l,a,u,m;switch(i>s?(l=s,u=i-s):(l=i,u=s-i),o>n?(a=n,m=o-n):(a=o,m=n-o),t.action){case"start":this._start();break;case"update":this._update(l,a,u,m);break;case"end":this._end(l,a,u,m,e)}t.stopPropagation()}_redraw(){if(!this._rafId||(this._rafId=null,!this._overlay))return;const{x:t,y:e,width:i,height:o}=this._box;this._updateBox(t,e,i,o),this._updateBackground(t,e,i,o),this._rafId=requestAnimationFrame(this._redraw)}};c([f()],tt.prototype,"navigation",void 0),c([f()],tt.prototype,"view",null),tt=c([X("esri.views.2d.navigation.ZoomBox")],tt);const di=tt;let L=class{constructor(t){this._gain=t,this.lastValue=void 0,this.filteredDelta=void 0}update(t){if(this.hasLastValue()){const e=this.computeDelta(t);this._updateDelta(e)}this.lastValue=t}reset(){this.lastValue=void 0,this.filteredDelta=void 0}hasLastValue(){return this.lastValue!==void 0}hasFilteredDelta(){return this.filteredDelta!==void 0}computeDelta(t){return this.lastValue===void 0?NaN:t-this.lastValue}_updateDelta(t){this.filteredDelta!==void 0?this.filteredDelta=(1-this._gain)*this.filteredDelta+this._gain*t:this.filteredDelta=t}};class Ht{constructor(t,e,i){this._initialVelocity=t,this._stopVelocity=e,this._friction=i,this._duration=Math.abs(Math.log(Math.abs(this._initialVelocity)/this._stopVelocity)/Math.log(1-this._friction))}get duration(){return this._duration}isFinished(t){return t>this.duration}get friction(){return this._friction}value(t){return this.valueFromInitialVelocity(this._initialVelocity,t)}valueDelta(t,e){const i=this.value(t);return this.value(t+e)-i}valueFromInitialVelocity(t,e){e=Math.min(e,this.duration);const i=1-this.friction;return t*(i**e-1)/Math.log(i)}}class pi extends Ht{constructor(t,e,i,o,s){super(t,e,i),this._sceneVelocity=o,this.direction=s}value(t){return super.valueFromInitialVelocity(this._sceneVelocity,t)}}class gi{constructor(t=300,e=12,i=.84){this._minimumInitialVelocity=t,this._stopVelocity=e,this._friction=i,this.enabled=!0,this._time=new L(.6),this._screen=[new L(.4),new L(.4)],this._scene=[new L(.6),new L(.6),new L(.6)],this._tmpDirection=ce()}add(t,e,i){if(this.enabled){if(this._time.hasLastValue()&&this._time.computeDelta(i)<.015)return;this._screen[0].update(t[0]),this._screen[1].update(t[1]),this._scene[0].update(e[0]),this._scene[1].update(e[1]),this._scene[2].update(e[2]),this._time.update(i)}}reset(){this._screen[0].reset(),this._screen[1].reset(),this._scene[0].reset(),this._scene[1].reset(),this._scene[2].reset(),this._time.reset()}evaluateMomentum(){if(!this.enabled||!this._screen[0].hasFilteredDelta()||!this._time.hasFilteredDelta())return null;const t=this._screen[0].filteredDelta,e=this._screen[1].filteredDelta,i=t==null||e==null?0:Math.sqrt(t*t+e*e),o=this._time.filteredDelta,s=o==null||i==null?0:i/o;return Math.abs(s)<this._minimumInitialVelocity?null:this.createMomentum(s,this._stopVelocity,this._friction)}createMomentum(t,e,i){Ve(this._tmpDirection,this._scene[0].filteredDelta??0,this._scene[1].filteredDelta??0,this._scene[2].filteredDelta??0);const o=ze(this._tmpDirection);o>0&&me(this._tmpDirection,this._tmpDirection,1/o);const s=this._time.filteredDelta;return new pi(t,e,i,s==null?0:o/s,this._tmpDirection)}}let q=class extends Y{constructor(t){super(t),this.animationTime=0,this.momentumEstimator=new gi(500,6,.92),this.momentum=null,this.tmpMomentum=ce(),this.momentumFinished=!1,this.viewpoint=new xt({targetGeometry:new Mt,scale:0,rotation:0}),this._previousDrag=null,de(()=>this.momentumFinished,()=>this.navigation.stop())}begin(t,e){this.navigation.begin(),this.momentumEstimator.reset(),this.addToEstimator(e),this._previousDrag=e}update(t,e){this.addToEstimator(e);let i=e.center.x,o=e.center.y;const s=this._previousDrag;i=s?s.center.x-i:-i,o=s?o-s.center.y:o,t.viewpoint=ft(this.viewpoint,t.viewpoint,[i||0,o||0]),this._previousDrag=e}end(t,e){this.addToEstimator(e);const i=t.navigation.effectiveMomentumEnabled;this.momentum=i?this.momentumEstimator.evaluateMomentum():null,this.animationTime=0,this.momentum&&this.onAnimationUpdate(t),this._previousDrag=null,this.navigation.end()}addToEstimator(t){const e=t.center.x,i=t.center.y,o=Le(-e,i),s=Re(-e,i,0);this.momentumEstimator.add(o,s,.001*t.timestamp)}onAnimationUpdate(t){var e;(e=this.navigation.animationManager)==null||e.animateContinuous(t.viewpoint,(i,o)=>{const{momentum:s,animationTime:n,tmpMomentum:l}=this,a=.001*o;if(!(this.momentumFinished=!s||s.isFinished(n))){const u=s.valueDelta(n,a);me(l,s.direction,u),ft(i,i,l),t.constraints.constrainByGeometry(i)}this.animationTime+=a})}stopMomentumNavigation(){this.momentum&&(this.momentumEstimator.reset(),this.momentum=null,this.navigation.stop())}};c([f()],q.prototype,"momentumFinished",void 0),c([f()],q.prototype,"viewpoint",void 0),c([f()],q.prototype,"navigation",void 0),q=c([X("esri.views.2d.navigation.actions.Pan")],q);const _i=q;let fe=class{constructor(t=2.5,e=.01,i=.95,o=12){this._minimumInitialVelocity=t,this._stopVelocity=e,this._friction=i,this._maxVelocity=o,this.enabled=!0,this.value=new L(.8),this.time=new L(.3)}add(t,e){if(this.enabled&&e!=null){if(this.time.hasLastValue()){if(this.time.computeDelta(e)<.01)return;if(this.value.hasFilteredDelta()){const i=this.value.computeDelta(t);this.value.filteredDelta*i<0&&this.value.reset()}}this.time.update(e),this.value.update(t)}}reset(){this.value.reset(),this.time.reset()}evaluateMomentum(){if(!this.enabled||!this.value.hasFilteredDelta()||!this.time.hasFilteredDelta())return null;let t=this.value.filteredDelta/this.time.filteredDelta;return t=V(t,-this._maxVelocity,this._maxVelocity),Math.abs(t)<this._minimumInitialVelocity?null:this.createMomentum(t,this._stopVelocity,this._friction)}createMomentum(t,e,i){return new Ht(t,e,i)}};class yi extends fe{constructor(t=3,e=.01,i=.95,o=12){super(t,e,i,o)}add(t,e){const i=this.value.lastValue;if(i!=null){let o=t-i;for(;o>Math.PI;)o-=2*Math.PI;for(;o<-Math.PI;)o+=2*Math.PI;t=i+o}super.add(t,e)}}class vi extends Ht{constructor(t,e,i){super(t,e,i)}value(t){const e=super.value(t);return Math.exp(e)}valueDelta(t,e){const i=super.value(t),o=super.value(t+e)-i;return Math.exp(o)}}class wi extends fe{constructor(t=2.5,e=.01,i=.95,o=12){super(t,e,i,o)}add(t,e){super.add(Math.log(t),e)}createMomentum(t,e,i){return new vi(t,e,i)}}let U=class extends Y{constructor(t){super(t),this._animationTime=0,this._momentumFinished=!1,this._previousAngle=0,this._previousRadius=0,this._previousCenter=null,this._rotationMomentumEstimator=new yi(.6,.15,.95),this._rotationDirection=1,this._startAngle=0,this._startRadius=0,this._updateTimestamp=null,this._zoomDirection=1,this._zoomMomentumEstimator=new wi,this._zoomOnly=null,this.viewpoint=new xt({targetGeometry:new Mt,scale:0,rotation:0}),this.zoomMomentum=null,this.rotateMomentum=null,this.addHandles(de(()=>this._momentumFinished,()=>this.navigation.stop()))}begin(t,e){this.navigation.begin(),this._rotationMomentumEstimator.reset(),this._zoomMomentumEstimator.reset(),this._zoomOnly=null,this._previousAngle=this._startAngle=e.angle,this._previousRadius=this._startRadius=e.radius,this._previousCenter=e.center,this._updateTimestamp=null,t.constraints.rotationEnabled&&this.addToRotateEstimator(0,e.timestamp),this.addToZoomEstimator(e,1)}update(t,e){this._updateTimestamp===null&&(this._updateTimestamp=e.timestamp);const i=e.angle,o=e.radius,s=e.center,n=Math.abs(180*(i-this._startAngle)/Math.PI),l=Math.abs(o-this._startRadius),a=this._startRadius/o;if(this._previousRadius&&this._previousCenter){const u=o/this._previousRadius;let m=180*(i-this._previousAngle)/Math.PI;this._rotationDirection=m>=0?1:-1,this._zoomDirection=u>=1?1:-1,t.constraints.rotationEnabled?(this._zoomOnly===null&&e.timestamp-this._updateTimestamp>200&&(this._zoomOnly=l-n>0),this._zoomOnly===null||this._zoomOnly?m=0:this.addToRotateEstimator(i-this._startAngle,e.timestamp)):m=0,this.addToZoomEstimator(e,a),this.navigation.setViewpoint([s.x,s.y],1/u,m,[this._previousCenter.x-s.x,s.y-this._previousCenter.y])}this._previousAngle=i,this._previousRadius=o,this._previousCenter=s}end(t){this.rotateMomentum=this._rotationMomentumEstimator.evaluateMomentum(),this.zoomMomentum=this._zoomMomentumEstimator.evaluateMomentum(),this._animationTime=0,(this.rotateMomentum||this.zoomMomentum)&&this.onAnimationUpdate(t),this.navigation.end()}addToRotateEstimator(t,e){this._rotationMomentumEstimator.add(t,.001*e)}addToZoomEstimator(t,e){this._zoomMomentumEstimator.add(e,.001*t.timestamp)}canZoomIn(t){const e=t.scale,i=t.constraints.effectiveMaxScale;return i===0||e>i}canZoomOut(t){const e=t.scale,i=t.constraints.effectiveMinScale;return i===0||e<i}onAnimationUpdate(t){var e;(e=this.navigation.animationManager)==null||e.animateContinuous(t.viewpoint,(i,o)=>{const s=!this.canZoomIn(t)&&this._zoomDirection>1||!this.canZoomOut(t)&&this._zoomDirection<1,n=!this.rotateMomentum||this.rotateMomentum.isFinished(this._animationTime),l=s||!this.zoomMomentum||this.zoomMomentum.isFinished(this._animationTime),a=.001*o;if(this._momentumFinished=n&&l,!this._momentumFinished){const u=this.rotateMomentum?Math.abs(this.rotateMomentum.valueDelta(this._animationTime,a))*this._rotationDirection*180/Math.PI:0;let m=this.zoomMomentum?Math.abs(this.zoomMomentum.valueDelta(this._animationTime,a)):1;const g=nt(),v=nt();if(this._previousCenter){Nt(g,this._previousCenter.x,this._previousCenter.y),Ie(v,t.size,t.padding),Pe(g,g,v);const{constraints:d,scale:_}=t,b=_*m;m<1&&!d.canZoomInTo(b)?(m=_/d.effectiveMaxScale,this.zoomMomentum=null,this.rotateMomentum=null):m>1&&!d.canZoomOutTo(b)&&(m=_/d.effectiveMinScale,this.zoomMomentum=null,this.rotateMomentum=null),Ae(i,t.viewpoint,m,u,g,t.size),t.constraints.constrainByGeometry(i)}}this._animationTime+=a})}stopMomentumNavigation(){(this.rotateMomentum||this.zoomMomentum)&&(this.rotateMomentum&&(this._rotationMomentumEstimator.reset(),this.rotateMomentum=null),this.zoomMomentum&&(this._zoomMomentumEstimator.reset(),this.zoomMomentum=null),this.navigation.stop())}};c([f()],U.prototype,"_momentumFinished",void 0),c([f()],U.prototype,"viewpoint",void 0),c([f()],U.prototype,"navigation",void 0),U=c([X("esri.views.2d.navigation.actions.Pinch")],U);const fi=U,It=nt(),re=nt();let et=class extends Y{constructor(t){super(t),this._previousCenter=nt(),this.viewpoint=new xt({targetGeometry:new Mt,scale:0,rotation:0})}begin(t,e){this.navigation.begin(),Nt(this._previousCenter,e.center.x,e.center.y)}update(t,e){const{state:{size:i,padding:o}}=t;Nt(It,e.center.x,e.center.y),Ze(re,i,o),t.viewpoint=Bt(this.viewpoint,t.state.paddedViewState.viewpoint,Ne(re,this._previousCenter,It)),Be(this._previousCenter,It)}end(){this.navigation.end()}};c([f()],et.prototype,"viewpoint",void 0),c([f()],et.prototype,"navigation",void 0),et=c([X("esri.views.2d.navigation.actions.Rotate")],et);const bi=et,O=10,le=1,Pt=new xt({targetGeometry:new Mt}),At=[0,0],ue=250;let E=class extends Y{constructor(r){super(r),this._endTimer=null,this._lastEventTimestamp=null,this.animationManager=null,this.interacting=!1}initialize(){this.pan=new _i({navigation:this}),this.rotate=new bi({navigation:this}),this.pinch=new fi({navigation:this}),this.zoomBox=new di({view:this.view,navigation:this})}destroy(){this.pan=mt(this.pan),this.rotate=mt(this.rotate),this.pinch=mt(this.pinch),this.zoomBox=mt(this.zoomBox),this.animationManager=null}begin(){this.stop(),this._set("interacting",!0)}end(){this._lastEventTimestamp=performance.now(),this._startTimer(ue)}async zoom(r,t=this._getDefaultAnchor()){if(this.begin(),this.view.constraints.snapToZoom&&this.view.constraints.effectiveLODs)return r<1?this.zoomIn(t):this.zoomOut(t);this.setViewpoint(t,r,0,[0,0])}async zoomIn(r){const t=this.view,e=t.constraints.snapToNextScale(t.scale);return this._zoomToScale(e,r)}async zoomOut(r){const t=this.view,e=t.constraints.snapToPreviousScale(t.scale);return this._zoomToScale(e,r)}setViewpoint(r,t,e,i){this.begin(),this.view.stateManager.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,r,t,e,i),this.end()}setViewpointImmediate(r,t=0,e=[0,0],i=this._getDefaultAnchor()){this.view.stateManager.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,i,r,t,e)}continuousRotateClockwise(){var t;const r=this.view.viewpoint;(t=this.animationManager)==null||t.animateContinuous(r,e=>{Bt(e,e,-le)})}continuousRotateCounterclockwise(){var t;const r=this.view.viewpoint;(t=this.animationManager)==null||t.animateContinuous(r,e=>{Bt(e,e,le)})}resetRotation(){this.view.constraints.rotationEnabled&&(this.view.rotation=0)}continuousPanLeft(){this._continuousPan([-O,0])}continuousPanRight(){this._continuousPan([O,0])}continuousPanUp(){this._continuousPan([0,O])}continuousPanDown(){this._continuousPan([0,-O])}continuousPanVector({x:r,y:t}){this._continuousPan([r*O,t*O])}stop(){var r;this.pan.stopMomentumNavigation(),(r=this.animationManager)==null||r.stop(),this.end(),this._endTimer!==null&&(clearTimeout(this._endTimer),this._endTimer=null,this._set("interacting",!1))}_continuousPan(r){var e;const t=this.view.viewpoint;(e=this.animationManager)==null||e.animateContinuous(t,i=>{ft(i,i,r),this.view.constraints.constrainByGeometry(i)})}_startTimer(r){return this._endTimer!==null||(this._endTimer=setTimeout(()=>{this._endTimer=null;const t=performance.now()-(this._lastEventTimestamp??0);t<ue?this._endTimer=this._startTimer(t):this._set("interacting",!1)},r)),this._endTimer}_getDefaultAnchor(){const{size:r,padding:{left:t,right:e,top:i,bottom:o}}=this.view;return At[0]=.5*(r[0]-e+t),At[1]=.5*(r[1]-o+i),At}async _zoomToScale(r,t=this._getDefaultAnchor()){const{view:e}=this,{constraints:i,scale:o,viewpoint:s,size:n,padding:l}=e,a=i.canZoomInTo(r),u=i.canZoomOutTo(r);if(!(r<o&&!a||r>o&&!u))return Kt(Pt,s,r/o,0,t,n,l),i.constrainByGeometry(Pt),e.goTo(Pt,{animate:!0,animationMode:"always",duration:he(),pickClosestTarget:!1})}_scaleRotateTranslateViewpoint(r,t,e,i,o){const{view:s}=this,{size:n,padding:l,constraints:a,scale:u,viewpoint:m}=s,g=u*e,v=a.canZoomInTo(g),d=a.canZoomOutTo(g);return(e<1&&!v||e>1&&!d)&&(e=1),ft(m,m,o),Kt(r,m,e,i,t,n,l),a.constrainByGeometry(r)}};c([f()],E.prototype,"animationManager",void 0),c([f({type:Boolean,readOnly:!0})],E.prototype,"interacting",void 0),c([f()],E.prototype,"pan",void 0),c([f()],E.prototype,"pinch",void 0),c([f()],E.prototype,"rotate",void 0),c([f()],E.prototype,"view",void 0),c([f()],E.prototype,"zoomBox",void 0),E=c([X("esri.views.2d.navigation.MapViewNavigation")],E);const Yi=E;class be extends $t{}c([Ct(0,F)],be.prototype,"position",void 0);class xi extends Ft{}class z extends ot{}c([w(G)],z.prototype,"readbackTexture",void 0),c([w(G)],z.prototype,"maskTexture",void 0),c([w(G)],z.prototype,"overlayTexture",void 0),c([w(y)],z.prototype,"background",void 0),c([w(y)],z.prototype,"drawPos",void 0),c([w(h)],z.prototype,"maskEnabled",void 0),c([w(h)],z.prototype,"overlayEnabled",void 0);class Zt extends Tt{vertex(t){const e=t.position,i=t.position.subtract(new F(.5)).multiply(this.config.drawPos.zw),o=this.config.drawPos.xy.add(i);return{glPosition:new y(o,0,1),texCoord:e}}fragment(t){let e=j(this.config.readbackTexture,Mi(t.texCoord));e=e.add(new h(1).subtract(e.a)).multiply(this.config.background);const i=$(S(this.config.maskEnabled,new h(1)),j(this.config.maskTexture,t.texCoord).a,new h(1));e=e.multiply(i);const o=$(S(this.config.overlayEnabled,new h(1)),j(this.config.overlayTexture,t.texCoord),new y(0)),s=new kt;return s.glFragColor=o.add(new h(1).subtract(o.a).multiply(e)),s}}function Mi(r){const t=r.multiply(new F(2)).subtract(1);return $(S(t.x,new h(0)).and(S(t.y,new h(0))),new F(.5),()=>{const e=Ye(t.y,t.x),i=Xe(He(t),new h(We)),o=new F(Qe(e),Je(e));return i.multiply(o).multiply(new F(.5)).add(new h(.5))})}c([w(z)],Zt.prototype,"config",void 0),c([I(0,A(be))],Zt.prototype,"vertex",null),c([I(0,A(xi))],Zt.prototype,"fragment",null);class xe extends $t{}c([Ct(0,F)],xe.prototype,"position",void 0);class Ci extends Ft{}class Me extends ot{}c([w(si)],Me.prototype,"dvs",void 0);class N extends ot{}c([w(h)],N.prototype,"halfWidth",void 0),c([w(h)],N.prototype,"aaWidth",void 0),c([w(h)],N.prototype,"pxPerCell",void 0),c([w(y)],N.prototype,"minorLineColor",void 0),c([w(y)],N.prototype,"majorLineColor",void 0),c([w(qt)],N.prototype,"majorLineInterval",void 0);class yt extends Tt{vertex(t){const e=t.position.multiply(2).subtract(1);return{gridPos:this.transform.dvs.multiply(new x(e,1)).xy,glPosition:new y(e,0,1)}}fragment(t){const e=pe(t.gridPos),i=Ke(e),o=k(i.x,new h(1).subtract(i.x)),s=k(i.y,new h(1).subtract(i.y)),n=new F(o,s).multiply(this.config.pxPerCell).subtract(this.config.halfWidth),l=k(n.x,n.y),a=new h(1).subtract(ti(new h(0),this.config.aaWidth,l)),u=new qt(ie(e.x)),m=new qt(ie(e.y)),g=new h(se(u,this.config.majorLineInterval)),v=new h(se(m,this.config.majorLineInterval)),d=$(_e(n.x,n.y),g,v),_=Xt(ei(P(n.x,this.config.aaWidth),P(n.y,this.config.aaWidth)),new h(.5)),b=k(g,v),at=$(_,b,d),rt=ii(this.config.majorLineColor,this.config.minorLineColor,k(at,new h(1))),W=new kt;return W.glFragColor=rt.multiply(a),W}}c([w(Me)],yt.prototype,"transform",void 0),c([w(N)],yt.prototype,"config",void 0),c([I(0,A(xe))],yt.prototype,"vertex",null),c([I(0,A(Ci))],yt.prototype,"fragment",null);export{dt as D,Zt as E,yt as S,Ii as a,J as b,Ei as e,Pi as n,Vi as r,Ri as t,Lt as v,Yi as y};
//# sourceMappingURL=GridShader-CQSnc9Sq.js.map
