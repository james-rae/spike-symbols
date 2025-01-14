import{o as t,u as e,v as S,aP as J,db as q,bW as O,dV as M,bX as G,bV as k,aE as Q,bT as Z,s as tt,bS as et}from"./spike-symbols.js";import it from"./FeatureLayer-CSLVU9vS.js";import{f as ot}from"./TemporalLayer-f50zMkoH.js";import{A as X}from"./interfaces-CL2NbQte.js";import"./UniqueValueRenderer-DpnAQyVY.js";import"./ColorStop-DbeLVLMk.js";import"./diffUtils-ObaWOk_n.js";import"./colorRamps-D2XGA5co.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-ap8FYP_g.js";import"./jsonUtils-B6BNTLPc.js";import"./defaults-CBYGZvbD.js";import"./defaultsJSON-GKolV7NZ.js";import"./styleUtils-Cj5AxdUy.js";import"./jsonUtils-B7oYZIeQ.js";import"./LRUCache-LcfJ3jIy.js";import"./FieldsIndex-iG3PpdUf.js";import"./UnknownTimeZone-Cjcij_vG.js";import"./OverrideHelper-BY3qVKDN.js";import"./colorUtils-CxpR8kgL.js";import"./vec42-CGd3qQJJ.js";import"./vec4f64-CMoMXWBi.js";import"./utils-Bgq9-INc.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-EnfPALPv.js";import"./heatmapUtils-7-1kyJ5b.js";import"./MultiOriginJSONSupport-CF9SEMGl.js";import"./commonProperties-Bg_7mhO_.js";import"./FeatureLayerBase-D8a01MTD.js";import"./featureLayerUtils-Cwh8eKuP.js";import"./LayerFloorInfo-CKSnSMnn.js";import"./Relationship-DYSC4HOL.js";import"./serviceCapabilitiesUtils-ljk_p2-0.js";import"./editsZScale-BVzk2_66.js";import"./queryZScale-D-hT_tjP.js";import"./FeatureSet-C2IOSXSk.js";import"./APIKeyMixin-CQcQ7xYE.js";import"./ArcGISService-B90ElZ2X.js";import"./CustomParametersMixin-C6za5FFb.js";import"./EditBusLayer-Bv_F4e5M.js";import"./FeatureEffectLayer-D5B0ef_V.js";import"./FeatureEffect-CGoK9m7D.js";import"./FeatureReductionLayer-w2DTDWFa.js";import"./FeatureReductionSelection-ZSpOH3PJ.js";import"./labelingInfo-BHD6jdLj.js";import"./labelUtils-BzX0145M.js";import"./MD5-C9MwAd2G.js";import"./OperationalLayer-DFF1tvhw.js";import"./OrderedLayer-Bd_0ZRO3.js";import"./OrderByInfo-lVyN74vC.js";import"./PortalLayer-CzvBu_jL.js";import"./portalItemUtils-CnTMziNf.js";import"./RefreshableLayer-Bh-aUUkw.js";import"./FeatureTemplate-DwdLfW6V.js";import"./FeatureType-3wlBENoF.js";import"./fieldProperties-BV6LyrWQ.js";import"./TimeInfo-Co3vZhp5.js";import"./versionUtils-BC3iB0PG.js";import"./styleUtils-5eICvDCs.js";import"./popupUtils-BPDFECES.js";import"./AlphaCutoff-UcccL64p.js";let N=class extends J{set horizontalWKID(o){o?q({wkid:+o})?this._set("horizontalWKID",+o):this._set("horizontalWKID",o):this._set("horizontalWKID",null)}set verticalWKID(o){o?this._set("verticalWKID",isFinite(o)&&q({wkid:+o})?+o:null):this._set("verticalWKID",null)}get isAdvanced(){const{affineTransformations:o,focalLength:r,principalOffsetPoint:n,radialDistortionCoefficients:l,tangentialDistortionCoefficients:a}=this;return(o==null?void 0:o.length)>1&&!Number.isNaN(r)&&(n==null?void 0:n.length)>1&&(l==null?void 0:l.length)>1&&(a==null?void 0:a.length)>1}};t([e({json:{write:!0}})],N.prototype,"affineTransformations",void 0),t([e({json:{write:!0}})],N.prototype,"focalLength",void 0),t([e({json:{write:!0}})],N.prototype,"principalOffsetPoint",void 0),t([e({json:{write:!0}})],N.prototype,"radialDistortionCoefficients",void 0),t([e({json:{write:!0}})],N.prototype,"tangentialDistortionCoefficients",void 0),t([e({json:{write:!0}})],N.prototype,"horizontalWKID",null),t([e({json:{write:!0}})],N.prototype,"verticalWKID",null),t([e({json:{write:!0}})],N.prototype,"x",void 0),t([e({json:{write:!0}})],N.prototype,"y",void 0),t([e({json:{write:!0}})],N.prototype,"z",void 0),t([e({json:{write:!0}})],N.prototype,"type",void 0),N=t([S("esri.layers.orientedImagery.core.CameraOrientation")],N);const F=N;let w=class extends O(M(F)){constructor(){super(...arguments),this.type=1}toString(){const{type:o,horizontalWKID:r,verticalWKID:n,x:l,y:a,z:c,heading:y,pitch:f,roll:b,affineTransformations:h,focalLength:x,principalOffsetPoint:d,radialDistortionCoefficients:g,tangentialDistortionCoefficients:v}=this,u=[o,r,n,l,a,c,y,f,b];return this.isAdvanced&&(h==null||h.forEach(s=>u.push(s)),u.push(x),d==null||d.forEach(s=>u.push(s)),g==null||g.forEach(s=>u.push(s)),v==null||v.forEach(s=>u.push(s))),u.map(s=>Number.isNaN(s)?"":s).join("|")}};t([e({json:{write:!0}})],w.prototype,"type",void 0),t([e({type:[Number],json:{write:!0}})],w.prototype,"affineTransformations",void 0),t([e({type:Number,json:{write:!0}})],w.prototype,"focalLength",void 0),t([e({type:[Number],json:{write:!0}})],w.prototype,"principalOffsetPoint",void 0),t([e({type:[Number],json:{write:!0}})],w.prototype,"radialDistortionCoefficients",void 0),t([e({type:[Number],json:{write:!0}})],w.prototype,"tangentialDistortionCoefficients",void 0),t([e({type:Number,json:{write:!0}})],w.prototype,"heading",void 0),t([e({type:Number,json:{write:!0}})],w.prototype,"pitch",void 0),t([e({type:Number,json:{write:!0}})],w.prototype,"roll",void 0),t([e({type:Number,json:{write:!0}})],w.prototype,"x",void 0),t([e({type:Number,json:{write:!0}})],w.prototype,"y",void 0),t([e({type:Number,json:{write:!0}})],w.prototype,"z",void 0),w=t([S("esri.layers.orientedImagery.core.CameraOrientationHPR")],w);const rt=w;let I=class extends O(M(F)){constructor(){super(...arguments),this.type=4}toString(){const{type:o,latitude:r,longitude:n,ellipsoidRadius:l,squaredEccentricity:a,properties:c}=this,y=`${c}`.split("|");return y.splice(1,1),`${o}|${r}|${n}|${l}|${a}|${y.join("|")}`}};t([e({json:{write:!0}})],I.prototype,"type",void 0),t([e({json:{write:!0},type:Number})],I.prototype,"latitude",void 0),t([e({json:{write:!0},type:Number})],I.prototype,"longitude",void 0),t([e({json:{write:!0},type:Number})],I.prototype,"ellipsoidRadius",void 0),t([e({json:{write:!0},type:Number})],I.prototype,"squaredEccentricity",void 0),t([e({json:{write:!0}})],I.prototype,"properties",void 0),I=t([S("esri.layers.orientedImagery.core.CameraOrientationLTP")],I);const nt=I;let j=class extends O(M(F)){constructor(){super(...arguments),this.type=2}toString(){const{type:o,horizontalWKID:r,verticalWKID:n,x:l,y:a,z:c,omega:y,phi:f,kappa:b,affineTransformations:h,focalLength:x,principalOffsetPoint:d,radialDistortionCoefficients:g,tangentialDistortionCoefficients:v}=this,u=[o,r,n,l,a,c,y,f,b];return this.isAdvanced&&(h==null||h.forEach(s=>u.push(s)),u.push(x),d==null||d.forEach(s=>u.push(s)),g==null||g.forEach(s=>u.push(s)),v==null||v.forEach(s=>u.push(s))),u.map(s=>isNaN(s)?"":s).join("|")}};t([e({json:{write:!0}})],j.prototype,"type",void 0),t([e({type:[Number],json:{write:!0}})],j.prototype,"affineTransformations",void 0),t([e({type:Number,json:{write:!0}})],j.prototype,"focalLength",void 0),t([e({type:[Number],json:{write:!0}})],j.prototype,"principalOffsetPoint",void 0),t([e({type:[Number],json:{write:!0}})],j.prototype,"radialDistortionCoefficients",void 0),t([e({type:[Number],json:{write:!0}})],j.prototype,"tangentialDistortionCoefficients",void 0),t([e({type:Number,json:{write:!0}})],j.prototype,"omega",void 0),t([e({type:Number,json:{write:!0}})],j.prototype,"phi",void 0),t([e({type:Number,json:{write:!0}})],j.prototype,"kappa",void 0),t([e({type:Number,json:{write:!0}})],j.prototype,"x",void 0),t([e({type:Number,json:{write:!0}})],j.prototype,"y",void 0),t([e({type:Number,json:{write:!0}})],j.prototype,"z",void 0),j=t([S("esri.layers.orientedImagery.core.CameraOrientationOPK")],j);const st=j;let P=class extends O(M(F)){constructor(){super(...arguments),this.type=3}get isAdvanced(){const{affineTransformations:o,focalLength:r,principalOffsetPoint:n,radialDistortionCoefficients:l,tangentialDistortionCoefficients:a}=this;return(o==null?void 0:o.length)>1||!Number.isNaN(r)||(n==null?void 0:n.length)>1||(l==null?void 0:l.length)>1||(a==null?void 0:a.length)>1}toString(){const{type:o,horizontalWKID:r,verticalWKID:n,x:l,y:a,z:c,yaw:y,pitch:f,roll:b,affineTransformations:h,focalLength:x,principalOffsetPoint:d,radialDistortionCoefficients:g,tangentialDistortionCoefficients:v}=this,u=[o,r,n,l,a,c,y,f,b];return this.isAdvanced&&(h==null||h.forEach(s=>u.push(s)),u.push(x),d==null||d.forEach(s=>u.push(s)),d==null||d.forEach(s=>u.push(s)),g==null||g.forEach(s=>u.push(s)),v==null||v.forEach(s=>u.push(s))),u.map(s=>Number.isNaN(s)?"":s).join("|")}};t([e({json:{write:!0}})],P.prototype,"type",void 0),t([e({type:[Number],json:{write:!0}})],P.prototype,"affineTransformations",void 0),t([e({type:Number,json:{write:!0}})],P.prototype,"focalLength",void 0),t([e({type:[Number],json:{write:!0}})],P.prototype,"principalOffsetPoint",void 0),t([e({type:[Number],json:{write:!0}})],P.prototype,"radialDistortionCoefficients",void 0),t([e({type:[Number],json:{write:!0}})],P.prototype,"tangentialDistortionCoefficients",void 0),t([e({type:Number,json:{write:!0}})],P.prototype,"yaw",void 0),t([e({type:Number,json:{write:!0}})],P.prototype,"pitch",void 0),t([e({type:Number,json:{write:!0}})],P.prototype,"roll",void 0),t([e({type:Number,json:{write:!0}})],P.prototype,"x",void 0),t([e({type:Number,json:{write:!0}})],P.prototype,"y",void 0),t([e({type:Number,json:{write:!0}})],P.prototype,"z",void 0),P=t([S("esri.layers.orientedImagery.core.CameraOrientationYPR")],P);const at=P;var D;(function(i){i[i.HPR=1]="HPR",i[i.OPK=2]="OPK",i[i.YPR=3]="YPR",i[i.LTP=4]="LTP"})(D||(D={}));const W=new Map;W.set(`${D.OPK}`,{desc:"Using Omega Phi Kappa",constructor:st}),W.set(`${D.HPR}`,{desc:"Using Heading, Pitch and Roll",constructor:rt}),W.set(`${D.YPR}`,{desc:"Using Yaw, Pitch and Roll",constructor:at}),W.set(`${D.LTP}`,{desc:"Using Local Tangent Plane",constructor:nt});let $=class extends O(G){constructor(){super(...arguments),this.url=null}};t([e({type:Number,json:{write:!0}})],$.prototype,"lod",void 0),t([e({type:String,json:{write:!0}})],$.prototype,"rasterFunction",void 0),t([e({type:String,json:{write:!0}})],$.prototype,"url",void 0),$=t([S("esri.layers.orientedImagery.core.ElevationSourceDefinitions.ElevationSource")],$);let H=class extends O(G){constructor(){super(...arguments),this.constantElevation=null}};t([e({type:Number,json:{write:!0}})],H.prototype,"constantElevation",void 0),H=t([S("esri.layers.orientedImagery.core.ElevationSourceDefinitions.ConstantElevation")],H);const pt=i=>i!=null&&typeof i.constantElevation=="number";function lt(i,o,r){return o&&(i=`${o}${i}`),r&&(i+=`${r}`),i}function yt(i,o,r){let{url:n}=i;return n?(n=lt(n,o,r),new $({...i,url:n})):null}function ut(i,o,r){return i&&(pt(i)?new H(i):yt(i,o,r))}const V=new k({Minutes:"minutes",Hours:"hours",Days:"days",Weeks:"weeks",Months:"months",Years:"years"}),A=new k({Feet:"feet",Meter:"meter"}),_=new k({360:"360",Horizontal:"horizontal",Inspection:"inspection",Nadir:"nadir",Oblique:"oblique","":null}),R=new Map;function mt(i){const[o,r,n,l,a,c,y,f,b,h,x,d,g,v,u,s,z,T,E,K,C,L]=i.slice(1);return{horizontalWKID:o,verticalWKID:r,x:n,y:l,z:a,omega:c,phi:y,kappa:f,...Y([b,h,x,d,g,v],[s,z],[T,E,K],[C,L],u)}}R.set(`${D.HPR}`,ct),R.set(`${D.YPR}`,dt),R.set(`${D.OPK}`,mt),R.set(`${D.LTP}`,ft);const U=i=>{const o=i.map(r=>parseFloat(r)).filter(r=>!isNaN(r));if(o.length===i.length)return o};function Y(i,o,r,n,l){const a=U(i),c=U(o),y=U(r),f=U(n);return{affineTransformations:(a==null?void 0:a.length)===6?a:void 0,focalLength:(a==null?void 0:a.length)===6?parseFloat(l):void 0,principalOffsetPoint:(c==null?void 0:c.length)!==2?[0,0]:c,radialDistortionCoefficients:(y==null?void 0:y.length)!==3?[0,0,0]:y,tangentialDistortionCoefficients:(f==null?void 0:f.length)!==2?[0,0]:f}}function ct(i){const[o,r,n,l,a,c,y,f,b,h,x,d,g,v,u,s,z,T,E,K,C,L]=i.slice(1);return{horizontalWKID:o,verticalWKID:r,x:n,y:l,z:a,heading:c,pitch:y,roll:f,...Y([b,h,x,d,g,v],[s,z],[T,E,K],[C,L],u)}}function dt(i){const[o,r,n,l,a,c,y,f,b,h,x,d,g,v,u,s,z,T,E,K,C,L]=i.slice(1);return{horizontalWKID:o,verticalWKID:r,x:n,y:l,z:a,yaw:c,pitch:y,roll:f,...Y([b,h,x,d,g,v],[s,z],[T,E,K],[C,L],u)}}function ft(i){var b;const[o,r,n,l,a,...c]=i.slice(1),y=R.get(a),f=(b=W.get(a))==null?void 0:b.constructor;return!y||!f?null:{latitude:o,longitude:r,ellipsoidRadius:n,squaredEccentricity:l,properties:new f(y([a,"",...c]))}}function ht(i){return Array.isArray(i)&&(i==null?void 0:i.length)===9&&!i.some(isNaN)}const gt=new Set(["demPathPrefix","demPathSuffix","depthImagePathPrefix","depthImagePathSuffix","elevationSource","horizontalMeasurementUnit","verticalMeasurementUnit","videoPathPrefix","videoPathSuffix","timeAnimation","visibilityTimeExtent"]),B=(i,o)=>!gt.has(o)&&i,vt=(i,o,r)=>{const n=`orientedImageryProperties.${i}`;return{name:n,write:o?{ignoreOrigin:!0,target:n,writer:o}:{ignoreOrigin:!0},read:r?{ignoreOrigin:!0,source:n,reader:r}:{ignoreOrigin:!0}}};function wt(i){return i.json&&(i.json.origins=i.json.origins??{},i.json.origins["web-scene"]={write:!1,read:!1}),i}function m(i,o,r,n){const{name:l,write:a,read:c}=vt(i,o,r),y={name:l,write:a,read:c,origins:{service:{name:`orientedImageryInfo.${l}`,write:o,read:r},"web-scene":{name:l,write:B(a,i),read:B(c,i)},"web-map":{name:l,write:a,read:c}}};return n&&y.origins&&(y.type=n,y.origins["web-map"].type=n,y.origins["web-scene"].type=n),y}let p=class extends it{constructor(){super(...arguments),this.cameraHeading=null,this.cameraHeight=null,this.cameraPitch=null,this.cameraRoll=null,this.coveragePercent=null,this.demPathPrefix=null,this.demPathSuffix=null,this.depthImagePathPrefix=null,this.depthImagePathSuffix=null,this.elevationSource=null,this.farDistance=null,this.geometryType="point",this.horizontalFieldOfView=null,this.horizontalMeasurementUnit=null,this.imagePathPrefix=null,this.imagePathSuffix=null,this.imageRotation=null,this.maximumDistance=null,this.nearDistance=null,this.operationalLayerType="OrientedImageryLayer",this.orientationAccuracy=null,this.orientedImageryType=null,this.supportedSourceTypes=new Set(["Oriented Imagery Layer"]),this.type="oriented-imagery",this.timeIntervalUnit="days",this.useViewTime=!0,this.verticalFieldOfView=null,this.verticalMeasurementUnit=null,this.videoPathPrefix=null,this.videoPathSuffix=null,this.visibilityTimeExtent=null}get effectiveElevationSource(){const{elevationSource:i,demPathPrefix:o,demPathSuffix:r}=this;return ut(i,o,r)}async save(i){return this._debouncedSaveOperations(X.SAVE,i)}async saveAs(i,o){return this._debouncedSaveOperations(X.SAVE_AS,o,i)}findFirstValidLayerId(i){var o,r;return(r=(o=i.layers)==null?void 0:o.find(n=>this.supportedSourceTypes.has(n.type)))==null?void 0:r.id}_verifySource(){if(super._verifySource(),this.geometryType!=="point")throw new tt("oriented-imagery-layer:invalid-geometry-type","OrientedImageryLayer only supports point geometry type")}};t([e({type:Number,json:m("cameraHeading")})],p.prototype,"cameraHeading",void 0),t([e({type:Number,json:m("cameraHeight")})],p.prototype,"cameraHeight",void 0),t([e({type:Number,json:m("cameraPitch")})],p.prototype,"cameraPitch",void 0),t([e({type:Number,json:m("cameraRoll")})],p.prototype,"cameraRoll",void 0),t([e({type:Number,json:m("coveragePercent")})],p.prototype,"coveragePercent",void 0),t([e({type:String,json:m("demPathPrefix")})],p.prototype,"demPathPrefix",void 0),t([e({type:String,json:m("demPathSuffix")})],p.prototype,"demPathSuffix",void 0),t([e({type:String,json:m("depthImagePathPrefix")})],p.prototype,"depthImagePathPrefix",void 0),t([e({type:String,json:m("depthImagePathSuffix")})],p.prototype,"depthImagePathSuffix",void 0),t([e({type:Object,json:m("elevationSource")})],p.prototype,"elevationSource",void 0),t([e({readOnly:!0})],p.prototype,"effectiveElevationSource",null),t([e({type:Number,json:m("farDistance")})],p.prototype,"farDistance",void 0),t([e()],p.prototype,"geometryType",void 0),t([e({type:Number,json:m("horizontalFieldOfView")})],p.prototype,"horizontalFieldOfView",void 0),t([e({type:String,json:m("horizontalMeasurementUnit")})],p.prototype,"horizontalMeasurementUnit",void 0),t([e({type:String,json:m("imagePathPrefix")})],p.prototype,"imagePathPrefix",void 0),t([e({type:String,json:m("imagePathSuffix")})],p.prototype,"imagePathSuffix",void 0),t([e({type:Number,json:m("imageRotation")})],p.prototype,"imageRotation",void 0),t([e({type:Number,json:m("maximumDistance")})],p.prototype,"maximumDistance",void 0),t([e({type:Number,json:m("nearDistance")})],p.prototype,"nearDistance",void 0),t([e({type:["OrientedImageryLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],p.prototype,"operationalLayerType",void 0),t([e({json:{...m("orientationAccuracy",(i,o,r)=>{et(r,i.join(";"),o)},i=>{var r;const o=(r=i==null?void 0:i.split(";"))==null?void 0:r.map(Number);return ht(o)?o:[0,0,0,0,0,0,0,0,0]},String)}})],p.prototype,"orientationAccuracy",void 0),t([e({json:{...m("orientedImageryType",_.write,_.read,_.jsonValues.slice(1))}})],p.prototype,"orientedImageryType",void 0),t([e({json:{read:!1},value:"oriented-imagery",readOnly:!0})],p.prototype,"type",void 0),t([e({type:V.apiValues,json:{...m("timeIntervalUnit",V.write,V.read,V.jsonValues)}})],p.prototype,"timeIntervalUnit",void 0),t([e(wt(Q(ot)))],p.prototype,"useViewTime",void 0),t([e({type:Number,json:m("verticalFieldOfView")})],p.prototype,"verticalFieldOfView",void 0),t([e({type:A.apiValues,json:{...m("verticalMeasurementUnit",A.write,A.read,A.jsonValues)}})],p.prototype,"verticalMeasurementUnit",void 0),t([e({type:String,json:m("videoPathPrefix")})],p.prototype,"videoPathPrefix",void 0),t([e({type:String,json:m("videoPathSuffix")})],p.prototype,"videoPathSuffix",void 0),t([e({type:Z,json:{origins:{"web-scene":{write:!1,read:!1}}}})],p.prototype,"visibilityTimeExtent",void 0),p=t([S("esri.layers.OrientedImageryLayer")],p);const Ce=p;export{Ce as default};
//# sourceMappingURL=OrientedImageryLayer-BNSH2aK7.js.map
