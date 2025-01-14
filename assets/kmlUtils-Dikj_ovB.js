import{aE as d,a0 as I,ck as w,bn as k,$ as x,cl as P,cm as h,cn as g,co as S,cp as E,a2 as v,x as M}from"./spike-symbols.js";import{t as O}from"./jsonUtils-B7oYZIeQ.js";import{d as F}from"./FeatureSet-C2IOSXSk.js";const $={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function T(s){var u;const r=s.folders||[],e=r.slice(),o=new Map,i=new Map,f=new Map,a=new Map,c=new Map,l={esriGeometryPoint:i,esriGeometryPolyline:f,esriGeometryPolygon:a};(((u=s.featureCollection)==null?void 0:u.layers)||[]).forEach(t=>{const p=d(t);p.featureSet.features=[];const y=t.featureSet.geometryType;o.set(y,p);const m=t.layerDefinition.objectIdField;y==="esriGeometryPoint"?G(i,m,t.featureSet.features):y==="esriGeometryPolyline"?G(f,m,t.featureSet.features):y==="esriGeometryPolygon"&&G(a,m,t.featureSet.features)}),s.groundOverlays&&s.groundOverlays.forEach(t=>{c.set(t.id,t)}),r.forEach(t=>{t.networkLinkIds.forEach(p=>{const y=C(p,t.id,s.networkLinks);y&&e.push(y)})}),e.forEach(t=>{var p;if(t.featureInfos){t.points=d(o.get("esriGeometryPoint")),t.polylines=d(o.get("esriGeometryPolyline")),t.polygons=d(o.get("esriGeometryPolygon")),t.mapImages=[];for(const y of t.featureInfos)switch(y.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const m=l[y.type].get(y.id);m&&((p=t[$[y.type]])==null||p.featureSet.features.push(m));break}case"GroundOverlay":{const m=c.get(y.id);m&&t.mapImages.push(m);break}}t.fullExtent=b([t])}});const n=b(e);return{folders:r,sublayers:e,extent:n}}function q(s,r,e,o){var a;const i=(a=I)==null?void 0:a.findCredential(s);s=w(s,{token:i==null?void 0:i.token});const f=k.kmlServiceUrl;return x(f,{query:{url:s,model:"simple",folders:"",refresh:e!==0||void 0,outSR:JSON.stringify(r)},responseType:"json",signal:o})}function z(s,r,e=null,o=[]){const i=[],f={},a=r.sublayers,c=new Set(r.folders.map(l=>l.id));return a.forEach(l=>{var u;const n=new s;if(e?n.read(l,e):n.read(l),o.length&&c.has(n.id)&&(n.visible=o.includes(n.id)),f[l.id]=n,l.parentFolderId!=null&&l.parentFolderId!==-1){const t=f[l.parentFolderId];t.sublayers||(t.sublayers=[]),(u=t.sublayers)==null||u.unshift(n)}else i.unshift(n)}),i}function G(s,r,e){e.forEach(o=>{s.set(o.attributes[r],o)})}function j(s,r){let e;return r.some(o=>o.id===s&&(e=o,!0)),e}function C(s,r,e){const o=j(s,e);return o&&(o.parentFolderId=r,o.networkLink=o),o}async function D(s){const r=F.fromJSON(s.featureSet).features,e=s.layerDefinition,o=O(e.drawingInfo.renderer),i=M.fromJSON(s.popupInfo),f=[];for(const a of r){const c=await o.getSymbolAsync(a);a.symbol=c,a.popupTemplate=i,a.visible=!0,f.push(a)}return f}function b(s){var o,i,f,a,c,l;const r=P(h),e=P(h);for(const n of s){if((i=(o=n.polygons)==null?void 0:o.featureSet)!=null&&i.features)for(const u of n.polygons.featureSet.features)g(r,u.geometry),S(e,r);if((a=(f=n.polylines)==null?void 0:f.featureSet)!=null&&a.features)for(const u of n.polylines.featureSet.features)g(r,u.geometry),S(e,r);if((l=(c=n.points)==null?void 0:c.featureSet)!=null&&l.features)for(const u of n.points.featureSet.features)g(r,u.geometry),S(e,r);if(n.mapImages)for(const u of n.mapImages)g(r,u.extent),S(e,r)}return E(e,h)?void 0:{xmin:e[0],ymin:e[1],zmin:e[2],xmax:e[3],ymax:e[4],zmax:e[5],spatialReference:v.WGS84}}export{z as S,D as b,T as d,q as g,b as j};
//# sourceMappingURL=kmlUtils-Dikj_ovB.js.map
