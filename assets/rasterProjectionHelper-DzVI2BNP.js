const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./geometryEngine-m0UFtRDh.js","./spike-symbols.js","./spike-symbols.css","./geometryEngineBase-yFIvKOkM.js","./_commonjsHelpers-DCkdB7M8.js","./hydrated-CUaNMSUx.js"])))=>i.map(i=>d[i]);
import{cb as B,cc as Nn,_ as _n,by as A,a4 as W,az as $,F as vn,b4 as en,bw as N,ba as Tn,cd as Cn,s as dn,ce as C,cf as T,cg as an,ch as zn,ci as Ln,a2 as wn,cj as ln}from"./spike-symbols.js";var tn;function Mn(n,t,i){return!Cn(n,t,i)}function O(n,t,i){const o=Mn(n,t,i);if(o&&!B())throw new dn("rasterprojectionhelper-project","projection engine is not loaded");return o}(function(n){n[n.None=0]="None",n[n.North=1]="North",n[n.South=2]="South",n[n.Both=3]="Both"})(tn||(tn={}));const cn=(n,t,i,o=0)=>{if(i[0]===1)return[0,0];let r=1,e=-1,s=1,c=-1;for(let l=0;l<n.length;l+=2)isNaN(n[l])||(r=r>n[l]?n[l]:r,e=e>n[l]?e:n[l],s=s>n[l+1]?n[l+1]:s,c=c>n[l+1]?c:n[l+1]);const{cols:a,rows:f}=t,u=(e-r)/a/i[0],d=(c-s)/f/i[1],m=2*o;let x=0,h=!1,g=[0,0];for(let l=0;l<a-3;l++){for(let R=0;R<f-3;R++){const y=l*f*2+2*R,p=(n[y]+n[y+4]+n[y+4*f]+n[y+4*f+4])/4,w=(n[y+1]+n[y+5]+n[y+4*f+1]+n[y+4*f+5])/4,M=Math.abs((p-n[y+2*f+2])/u),b=Math.abs((w-n[y+2*f+3])/d);if(M+b>x&&(x=M+b,g=[M,b]),m&&x>m){h=!0;break}}if(h)break}return g},Wn={3395:20037508342789244e-9,3410:17334193943686873e-9,3857:20037508342788905e-9,3975:17367530445161372e-9,4087:20037508342789244e-9,4088:20015108787169147e-9,6933:17367530445161372e-9,32662:20037508342789244e-9,53001:2001508679602057e-8,53002:1000754339801029e-8,53003:2001508679602057e-8,53004:2001508679602057e-8,53016:14152803599503474e-9,53017:17333573624304302e-9,53034:2001508679602057e-8,53079:20015114352186374e-9,53080:20015114352186374e-9,54001:20037508342789244e-9,54002:10018754171394624e-9,54003:20037508342789244e-9,54004:20037508342789244e-9,54016:14168658027268292e-9,54017:1736753044516137e-8,54034:20037508342789244e-9,54079:20037508342789244e-9,54080:20037508342789244e-9,54100:20037508342789244e-9,54101:20037508342789244e-9},Y=32,q=4,H=q,Q=new Map,Z=new Map,J=500;let K=null;async function Jn(){K&&B()||(B()||await Nn(),K=await _n(()=>import("./geometryEngine-m0UFtRDh.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url))}function On(n,t,i){return O(n.spatialReference,t),i?ln(t,n.spatialReference,n):ln(n.spatialReference,t,n)}function Kn(n,t,i,o=null){const r=n.spatialReference;if(!r||!t||r.equals(t))return n;O(r,t,o);const e=i.center,s=new A({xmin:e.x-n.x/2,xmax:e.x+n.x/2,ymin:e.y-n.y/2,ymax:e.y+n.y/2,spatialReference:r}),c=W(s,t,o),a=_(t);return c==null||a!=null&&c.width>=a?F(n,r,t):{x:c.width,y:c.height}}function F(n,t,i){const o=$(t)/$(i);return{x:n.x*o,y:n.y*o}}function fn(n,t,i){const{spatialReference:o}=i;if(!o||!t||o.equals(t))return n;if(o.isGeographic&&t.isGeographic)return F(n,o,t);if(O(o,t),!K)throw new dn("raster-projection-helper:project-dataset-resolution","geometry engine is not loaded");let{x:r,y:e}=n;const s=(r+e)/2*$(o);let c=1;s>30&&(c=30/s,r*=c,e*=c);const a=256,f=r*a/2,u=e*a/2,{x:d,y:m}=i.center,x=[];for(let P=0;P<=a;P++)x.push([d-f,m-u+P*e]);for(let P=1;P<=a;P++)x.push([d-f+P*r,m+u]);for(let P=1;P<=a;P++)x.push([d+f,m+u-P*e]);for(let P=1;P<a;P++)x.push([d+f-P*r,m-u]);x.push(x[0]);const h=new en({rings:[x],spatialReference:o}),g=W(h,t);if(!g)return F(n,o,t);const l=g.extent,R=_(t);if(l==null||R!=null&&l.width>=R)return F(n,o,t);const y=K.planarArea(g),p=r*e*a*a,w=Math.sqrt(y/p)/c,M={x:l.width/c/a,y:l.height/c/a},b={x:r*w,y:e*w},k=M.x*M.y;return Math.abs(k-b.x*b.y)/k<.1?M:b}function E(n,t=.01){return $(n)?t/$(n):0}function un(n,t,i=null,o=!0){const r=n.spatialReference;if(r.equals(t))return n;O(r,t,i);const e=W(n,t,i);return o&&e&&Rn([n],[e],r,t),e}function Rn(n,t,i,o){const r=X(i,!0),e=X(o,!0),s=E(i,J),c=E(o,J);if(s&&r!=null&&e!=null)for(let a=0;a<n.length;a++){const f=t[a];if(!f)continue;const{x:u}=n[a],{x:d}=f;d>=e[1]-c&&Math.abs(u-r[0])<s?f.x-=e[1]-e[0]:d<=e[0]+c&&Math.abs(u-r[1])<s&&(f.x+=e[1]-e[0])}}function $n(n){const{inSR:t,outSR:i,datumTransformation:o,preferPE:r}=n;if(t.equals(i)){const{points:e}=on(n,null);return e}return t.isWebMercator&&i.isWGS84||t.isWGS84&&i.isWebMercator?jn(n):O(t,i,o)&&r&&(t.isGeographic||I(t)!=null)?xn(n):In(n)}function In(n){const{points:t}=on(n,null),{inSR:i,outSR:o,datumTransformation:r}=n,e=t.map(c=>new N(c[0],c[1],i)),s=W(e,o,r);return r&&Rn(e,s,i,o),s.map(c=>c?[c.x,c.y]:[NaN,NaN])}function xn(n){const{inSR:t,outSR:i,datumTransformation:o}=n,r=I(t),{points:e,mask:s}=on(n,r);if(!t.isGeographic){const a=t.wkid?C.coordsys(t.wkid):C.fromString(t.isGeographic?T.PE_TYPE_GEOGCS:T.PE_TYPE_PROJCS,t.wkt2||t.wkt);an.projToGeog(a,e.length,e)}if(o!=null&&o.steps.length){let a;if(i.isGeographic&&(a=e.map(([u])=>u>179.9955?1:u<-179.9955?-1:0)),o.steps.forEach(u=>{const d=u.wkid?C.geogtran(u.wkid):C.fromString(T.PE_TYPE_GEOGTRAN,u.wkt);zn.geogToGeog(d,e.length,e,null,u.isInverse?T.PE_TRANSFORM_2_TO_1:T.PE_TRANSFORM_1_TO_2)}),a)for(let u=0;u<e.length;u++){const d=a[u],m=e[u][0],x=m>179.9955?1:m<-179.9955?-1:0;d&&x&&d!==x&&(e[u][0]=d>0?m+360:m-360)}}if(!i.isGeographic){const a=I(i,!0),f=a!=null&&a.isEnvelope?[a.bbox[1],a.bbox[3]]:[-90,90];An(e,f);const u=i.wkid?C.coordsys(i.wkid):C.fromString(i.isGeographic?T.PE_TYPE_GEOGCS:T.PE_TYPE_PROJCS,i.wkt2||i.wkt);an.geogToProj(u,e.length,e)}let c=e;if(s&&e.length!==s.length){c=[];for(let a=0,f=0;a<s.length;a++)s[a]?c.push(e[f++]):c.push([NaN,NaN])}return c}function jn(n){const{cols:t,rows:i,xres:o,yres:r,usePixelCenter:e,inSR:s,outSR:c}=n;let{xmin:a,ymax:f}=n;e&&(a+=o/2,f-=r/2);const u=[],d=[],m=Math.max(t,i);for(let h=0;h<m;h++){const g=a+o*Math.min(t,h),l=f-r*Math.min(i,h),R=W(new N({x:g,y:l,spatialReference:s}),c);h<=t&&u.push(R.x),h<=i&&d.push(R.y)}const x=[];for(let h=0;h<t;h++)for(let g=0;g<i;g++)x.push([u[h],d[g]]);return x}function I(n,t=!1){let i=n.wkid||n.wkt2||n.wkt;if(!i||n.isGeographic)return null;if(i=String(i),Q.has(i)){const s=Q.get(i);return t?s==null?void 0:s.gcs:s==null?void 0:s.pcs}const o=n.wkid?C.coordsys(n.wkid):C.fromString(n.isGeographic?T.PE_TYPE_GEOGCS:T.PE_TYPE_PROJCS,n.wkt2||n.wkt),r=hn(o,E(n,1e-4)),e=hn(o,0,!0);return Q.set(i,{pcs:r,gcs:e}),t?e:r}function hn(n,t=0,i=!1){const o=Ln.generate(n),r=i?n.horizonGcsGenerate():n.horizonPcsGenerate();if(!o||!(r!=null&&r.length))return null;let e=!1,s=r.find(l=>l.getInclusive()===1&&l.getKind()===1);if(!s){if(s=r.find(l=>l.getInclusive()===1&&l.getKind()===0),!s)return null;e=!0}const c=i?0:(o.getNorthPoleLocation()===2?1:0)|(o.getSouthPoleLocation()===2?2:0),a=o.isPannableRectangle(),f=s.getCoord();if(e)return{isEnvelope:e,isPannable:a,vertices:f,coef:null,bbox:[f[0][0]-t,f[0][1]-t,f[1][0]+t,f[1][1]+t],poleLocation:c};let u=0;const d=[];let[m,x]=f[0],[h,g]=f[0];for(let l=0,R=f.length;l<R;l++){u++,u===R&&(u=0);const[y,p]=f[l],[w,M]=f[u];if(M===p)d.push([y,w,p,M,2]);else{const b=(w-y)/(M-p||1e-4),k=y-b*p;p<M?d.push([b,k,p,M,0]):d.push([b,k,M,p,1])}m=m<y?m:y,x=x<p?x:p,h=h>y?h:y,g=g>p?g:p}return{isEnvelope:!1,isPannable:a,vertices:f,coef:d,bbox:[m,x,h,g],poleLocation:c}}function on(n,t){const i=[],{cols:o,rows:r,xres:e,yres:s,usePixelCenter:c}=n;let{xmin:a,ymax:f}=n;if(c&&(a+=e/2,f-=s/2),t==null){for(let x=0;x<o;x++)for(let h=0;h<r;h++)i.push([a+e*x,f-s*h]);return{points:i}}const u=new Uint8Array(o*r);if(t.isEnvelope){const{bbox:[x,h,g,l]}=t;for(let R=0,y=0;R<o;R++){const p=a+e*R,w=t.isPannable||p>=x&&p<=g;for(let M=0;M<r;M++,y++){const b=f-s*M;w&&b>=h&&b<=l&&(i.push([p,b]),u[y]=1)}}return{points:i,mask:u}}const d=t.coef,m=[];for(let x=0;x<r;x++){const h=f-s*x,g=[],l=[];for(let y=0;y<d.length;y++){const[p,w,M,b,k]=d[y];if(h===M&&M===b)g.push(p),g.push(w),l.push(2),l.push(2);else if(h>=M&&h<=b){const P=p*h+w;g.push(P),l.push(k)}}let R=g;if(g.length>2){let y=l[0]===2?0:l[0],p=g[0];R=[];for(let w=1;w<l.length;w++)l[w]===2&&w!==l.length-1||(l[w]!==y&&(R.push(y===0?Math.min(p,g[w-1]):Math.max(p,g[w-1])),y=l[w],p=g[w]),w===l.length-1&&R.push(l[w]===0?Math.min(p,g[w]):Math.max(p,g[w])));R.sort((w,M)=>w-M)}else g[0]>g[1]&&(R=[g[1],g[0]]);m.push(R)}for(let x=0,h=0;x<o;x++){const g=a+e*x;for(let l=0;l<r;l++,h++){const R=f-s*l,y=m[l];if(y.length===2)g>=y[0]&&g<=y[1]&&(i.push([g,R]),u[h]=1);else if(y.length>2){let p=!1;for(let w=0;w<y.length;w+=2)if(g>=y[w]&&g<=y[w+1]){p=!0;break}p&&(i.push([g,R]),u[h]=1)}}}return{points:i,mask:u}}function An(n,t){const[i,o]=t;for(let r=0;r<n.length;r++){const e=n[r][1];(e<i||e>o)&&(n[r]=[NaN,NaN])}}function bn(n,t){const i=_(n[0].spatialReference);if(n.length<2||i==null||(t=t??E(n[0].spatialReference),(n=n.filter(c=>c.width>t)).length===1))return n[0];let{xmin:o,xmax:r,ymin:e,ymax:s}=n[0];for(let c=1;c<n.length;c++){const a=n[c];r=a.xmax+i*c,e=Math.min(e,a.ymin),s=Math.max(s,a.ymax)}return new A({xmin:o,xmax:r,ymin:e,ymax:s,spatialReference:n[0].spatialReference})}function Pn(n,t,i=null,o=!0){const r=n.spatialReference;if(r.equals(t))return n;const e=Sn(n),s=_(r,!0),c=_(t);if(e===0||s==null||c==null){const f=mn(n,t,i,o);if(s==null&&c!=null&&Math.abs(f.width-c)<E(t)&&B()){const u=I(r);if(u!=null&&u.poleLocation===tn.None&&n.width<(u.bbox[2]-u.bbox[0])/2)return Fn(n,t)||f}return f}const a=n.clone().normalize();if(a.length===1&&n.xmax<s&&n.xmax-s/2>E(r)){const{xmin:f,xmax:u}=n;for(let d=0;d<=e;d++){const m=d===0?f:-s/2,x=d===e?u-s*d:s/2;a[d]=new A({xmin:m,xmax:x,ymin:n.ymin,ymax:n.ymax,spatialReference:r})}}return bn(a.map(f=>mn(f,t,i,o)).filter(vn))}function Xn(n,t,i){if(n.type==="extent"){const{xmin:o,ymin:r,xmax:e,ymax:s,spatialReference:c}=n;n=new en({rings:[[[o,s],[e,s],[e,r],[o,r],[o,s]]],spatialReference:c})}return n.spatialReference.equals(t)?n:(O(n.spatialReference,t,i),W(n,t,i))}function Fn(n,t){const i=_(t);if(i==null)return null;let{xmin:o,ymin:r,xmax:e,ymax:s}=n;const c=n.spatialReference,a=new en({spatialReference:c,rings:[[[o,r],[e,r],[e,s],[o,s],[o,r]]]}),f=W(a,t);if(f.rings.length!==2||!f.rings[0].length||!f.rings[1].length)return null;const{rings:u}=f,d=E(c),m=new A({spatialReference:t});for(let x=0;x<2;x++){o=e=u[x][0][0],r=s=u[x][0][1];for(let h=0;h<u[x].length;h++)o=o>u[x][h][0]?u[x][h][0]:o,e=e<u[x][h][0]?u[x][h][0]:e,r=r>u[x][h][1]?u[x][h][1]:r,s=s<u[x][h][1]?u[x][h][1]:s;if(x===0)m.ymin=r,m.ymax=s,m.xmin=o,m.xmax=e;else if(m.ymin=Math.min(m.ymin,r),m.ymax=Math.max(m.ymax,s),Math.abs(e-i/2)<d)m.xmin=o,m.xmax=m.xmax+i;else{if(!(Math.abs(o+i/2)<d))return null;m.xmax=e+i}}return m}function mn(n,t,i=null,o=!0,r=!0){const e=n.spatialReference;if(e.equals(t)||!t)return n;O(e,t,i);const s=W(n,t,i);if(r&&t.isWebMercator&&s&&(s.ymax=Math.min(20037508342787e-6,s.ymax),s.ymin=Math.max(-20037508342787e-6,s.ymin),s.ymin>=s.ymax))return null;if(!o||!s)return s;const c=X(e,!0),a=X(t,!0);if(c==null||a==null)return s;const f=E(e,.001),u=E(e,J),d=E(t,.001);if(Math.abs(s.xmin-a[0])<d&&Math.abs(s.xmax-a[1])<d){const m=Math.abs(n.xmin-c[0]),x=Math.abs(c[1]-n.xmax);if(m<f&&x>u){s.xmin=a[0];const h=[];h.push(new N(n.xmax,n.ymin,e)),h.push(new N(n.xmax,(n.ymin+n.ymax)/2,e)),h.push(new N(n.xmax,n.ymax,e));const g=h.map(l=>un(l,t,i)).filter(l=>!isNaN(l==null?void 0:l.x)).map(l=>l.x);s.xmax=Math.max.apply(null,g)}if(x<f&&m>u){s.xmax=a[1];const h=[];h.push(new N(n.xmin,n.ymin,e)),h.push(new N(n.xmin,(n.ymin+n.ymax)/2,e)),h.push(new N(n.xmin,n.ymax,e));const g=h.map(l=>un(l,t,i)).filter(l=>!isNaN(l==null?void 0:l.x)).map(l=>l.x);s.xmin=Math.min.apply(null,g)}}else{const m=E(t,.001);Math.abs(s.xmin-a[0])<m&&(s.xmin=a[0]),Math.abs(s.xmax-a[1])<m&&(s.xmax=a[1])}return s}function _(n,t=!1){if(!n)return null;const i=t?20037508342787e-6:20037508342788905e-9;return n.isWebMercator?2*i:n.wkid&&n.isGeographic?360:2*Wn[n.wkid]||null}function X(n,t=!1){if(n.isGeographic)return[-180,180];const i=_(n,t);return i!=null?[-i/2,i/2]:null}function pn(n,t,i,o){let r=(n-t)/i;return r-Math.floor(r)!=0?r=Math.floor(r):o&&(r-=1),r}function Sn(n,t=!1){const i=_(n.spatialReference);if(i==null)return 0;const o=t?0:-(i/2),r=E(n.spatialReference),e=!t&&Math.abs(n.xmax-i/2)<r?i/2:n.xmax,s=!t&&Math.abs(n.xmin+i/2)<r?-i/2:n.xmin;return pn(e,o,i,!0)-pn(s,o,i,!1)}function Dn(n){const t=n.storageInfo.origin.x,i=_(n.spatialReference,!0);if(i==null)return{originX:t,halfWorldWidth:null,pyramidsInfo:null};const o=i/2,{nativePixelSize:r,storageInfo:e,extent:s}=n,{maximumPyramidLevel:c,blockWidth:a,pyramidScalingFactor:f}=e;let u=r.x;const d=[],m=n.transform!=null&&n.transform.type==="gcs-shift",x=t+(m?0:o),h=m?i-t:o-t;for(let g=0;g<=c;g++){const l=(s.xmax-t)/u/a,R=l-Math.floor(l)==0?l:Math.ceil(l),y=h/u/a,p=y-Math.floor(y)==0?y:Math.ceil(y),w=Math.floor(x/u/a),M=Math.round(x/u)%a,b=(a-Math.round(h/u)%a)%a;d.push({resolutionX:u,blockWidth:a,datasetColumnCount:R,worldColumnCountFromOrigin:p,leftMargin:M,rightPadding:b,originColumnOffset:w}),u*=f}return{originX:t,halfWorldWidth:o,pyramidsInfo:d,hasGCSSShiftTransform:m}}function Bn(n){if(!n||n.isGeographic)return n;const t=String(n.wkid||n.wkt2||n.wkt);let i;return Z.has(t)?i=Z.get(t):(i=(n.wkid?C.coordsys(n.wkid):C.fromString(T.PE_TYPE_PROJCS,n.wkt2||n.wkt)).getGeogcs().getCode(),Z.set(t,i)),new wn({wkid:i})}function Un(n){const t=n.isAdaptive&&n.spacing==null;let i=n.spacing||[Y,Y],o=nn(n),r={cols:o.size[0]+1,rows:o.size[1]+1};const e=o.outofBoundPointCount>0&&o.outofBoundPointCount<o.offsets.length/2;let s=o.outofBoundPointCount===o.offsets.length/2||t&&e?[0,0]:cn(o.offsets,r,i,H);const c=(s[0]+s[1])/2,a=n.projectedExtent.spatialReference,f=n.srcBufferExtent.spatialReference;if(t&&(e||c>H)&&(Mn(a,f,n.datumTransformation)&&(a.isGeographic||I(a)),i=[q,q],o=nn({...n,spacing:i}),r={cols:o.size[0]+1,rows:o.size[1]+1},s=cn(o.offsets,r,i,H)),o.error=s,i[0]>1&&(o.coefficients=gn(o.offsets,r,e)),n.includeGCSGrid&&!a.isGeographic&&!a.isWebMercator)if(f.isGeographic)o.gcsGrid={offsets:o.offsets,coefficients:o.coefficients,spacing:i};else{const u=I(a);if(u!=null&&!u.isEnvelope){const d=Bn(a),m=Pn(n.projectedExtent,d),{offsets:x}=nn({...n,srcBufferExtent:m,spacing:i}),h=gn(x,r,e);o.gcsGrid={offsets:x,coefficients:h,spacing:i}}}return o}function nn(n){const{projectedExtent:t,srcBufferExtent:i,pixelSize:o,datumTransformation:r,rasterTransform:e}=n,s=t.spatialReference,c=i.spatialReference,a=O(s,c),{xmin:f,ymin:u,xmax:d,ymax:m}=t,x=_(c),h=x!=null&&(n.hasWrapAround||(e==null?void 0:e.type)==="gcs-shift"),g=n.spacing||[Y,Y],l=g[0]*o.x,R=g[1]*o.y,y=g[0]===1,p=Math.ceil((d-f)/l-.1/g[0])+(y?0:1),w=Math.ceil((m-u)/R-.1/g[1])+(y?0:1),M=$n({cols:p,rows:w,xmin:f,ymax:m,xres:l,yres:R,inSR:s,outSR:c,datumTransformation:r,preferPE:g[0]<=q,usePixelCenter:y}),b=[];let k,P=0;const G=y?-1:NaN,{xmin:v,xmax:z,ymax:D,width:U,height:Gn}=i,kn=E(c,J),En=x!=null&&v>0&&z>x/2;let sn=!1;if(a){const L=I(s);sn=L!=null&&L.poleLocation>0}for(let L=0;L<p;L++){const V=[];for(let j=0;j<w;j++){let S=M[L*w+j];if(h&&S[0]>z&&S[0]>x/2-kn?S[0]-=x:h&&L===0&&S[0]<0&&En&&!e&&(S[0]+=x),!S||isNaN(S[0])||isNaN(S[1]))b.push(G),b.push(G),V.push(null),P++;else{if(e){const rn=e.inverseTransform(new N({x:S[0],y:S[1],spatialReference:c}));S=[rn.x,rn.y]}V.push(S),L>0&&h&&k[j]&&S[0]<k[j][0]&&(S[0]+=x,sn&&S[0]>z&&S[0]>x&&(S[0]-=x)),b.push((S[0]-v)/U),b.push((D-S[1])/Gn)}}k=V}return{offsets:b,error:null,coefficients:null,outofBoundPointCount:P,spacing:g,size:y?[p,w]:[p-1,w-1]}}function gn(n,t,i){const{cols:o,rows:r}=t,e=new Float32Array((o-1)*(r-1)*2*6),s=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),c=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let a=0;a<o-1;a++){for(let f=0;f<r-1;f++){let u=a*r*2+2*f;const d=n[u],m=n[u+1],x=n[u+2],h=n[u+3];u+=2*r;const g=n[u],l=n[u+1],R=n[u+2],y=n[u+3];let p=0,w=12*(f*(o-1)+a);for(let M=0;M<3;M++)e[w++]=s[p++]*d+s[p++]*x+s[p++]*R;p=0;for(let M=0;M<3;M++)e[w++]=s[p++]*m+s[p++]*h+s[p++]*y;p=0;for(let M=0;M<3;M++)e[w++]=c[p++]*d+c[p++]*g+c[p++]*R;p=0;for(let M=0;M<3;M++)e[w++]=c[p++]*m+c[p++]*l+c[p++]*y}if(i)for(let f=0;f<e.length;f++)isNaN(e[f])&&(e[f]=-1)}return e}function Yn(n,t){const i=n.clone().normalize();return i.length===1?i[0]:bn(i,t)}function Vn(n){const{spatialReference:t}=n,i=Tn(t);if(!i)return n;const[o,r]=i.valid,e=r-o;let s=0;if(n.xmin<o){const c=o-n.xmin;s=Math.ceil(c/e)}else if(n.xmin>r){const c=n.xmin-r;s=-Math.ceil(c/e)}return new A({spatialReference:n.spatialReference,xmin:n.xmin+s*e,ymin:n.ymin,xmax:n.xmax+s*e,ymax:n.ymax})}function Hn(n,t,i){var h;const{storageInfo:o,pixelSize:r}=t;let e=0,s=!1;const{pyramidResolutions:c}=o,a=((h=o.tileInfo.format)==null?void 0:h.toLowerCase())==="mixed"?Math.max(1,Math.min(3,o.tileInfo.dpi/96)):1,f=(n.x+n.y)/2/a;if(c!=null&&c.length){const g=c[c.length-1],l=(g.x+g.y)/2,R=(r.x+r.y)/2;if(f<=R)e=0;else if(f>=l)e=c.length,s=f/l>8;else{let p,w=R;for(let M=1;M<=c.length;M++){if(p=(c[M-1].x+c[M-1].y)/2,f<=p){f===p?e=M:i==="down"?(e=M-1,s=f/w>8):e=i==="up"||f-w>p-f||f/w>2?M:M-1;break}w=p}}const y=e===0?r:c[e-1];return s&&Math.min(y.x,y.y)*$(t.spatialReference)>19567&&(s=!1),{pyramidLevel:e,pyramidResolution:new N({x:y.x,y:y.y,spatialReference:t.spatialReference}),excessiveReading:s}}const u=Math.log(n.x/r.x)/Math.LN2,d=Math.log(n.y/r.y)/Math.LN2,m=t.storageInfo.maximumPyramidLevel||0;e=i==="down"?Math.floor(Math.min(u,d)):i==="up"?Math.ceil(Math.max(u,d)):Math.round((u+d)/2),e<0?e=0:e>m&&(s=e>m+3,e=m);const x=2**e;return{pyramidLevel:e,pyramidResolution:new N({x:x*t.nativePixelSize.x,y:x*t.nativePixelSize.y,spatialReference:t.spatialReference}),excessiveReading:s}}function yn(n,t){const{pixelSize:i,extent:o}=n,r=On(o,t,!1);return Pn(Yn(o,(i.x+i.y)/16),t,r)}function Qn(n,t,i){var P;const o=i==null?void 0:i.tileSize,r=i==null?void 0:i.alignGlobalDatasetWithAGOL,{extent:e,spatialReference:s,pixelSize:c}=n,a=fn(c,t,e);if(a==null)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};const f=(a.x+a.y)/2,u=$(t),d=f*u*96*39.37,m=t.isGeographic?256/o*2958287637958547e-7:256/o*591657527591555e-6;let x=n.dataType==="vector-magdir"||n.dataType==="vector-uv";const h=yn(n,t),g=Math.min(Math.ceil(Math.log(Math.min(n.width,n.height)/32)/Math.LN2),Math.ceil(Math.log(m/2/d)/Math.LN2));if(!x&&r&&(t.isGeographic||t.isWebMercator)){const G=_(t);if(x=Sn(h)>0||G!=null&&h.width>G/4,!x&&G!=null){let v=-1;if(g<3)v=2**g*f*o;else if(n.storageInfo){const{maximumPyramidLevel:D=0,pyramidScalingFactor:U=2}=n.storageInfo;v=U**D*f*o}const z=Math.ceil(G/v);x=z===1||z===2&&G/2-h.xmax<v}}let l,R=d;const y=1.001,p=Math.min(2,Math.max(1.414,((P=n.storageInfo)==null?void 0:P.pyramidScalingFactor)||2));if(x){R=m;const G=t.isGeographic?1341104507446289e-21:.29858214164761665,v=G*(96*u*39.37),z=t.isGeographic?4326:3857;l=fn({x:G,y:G},s,yn(n,new wn({wkid:z}))),l.x*=R/v,l.y*=R/v}else{l={x:c.x,y:c.y};let G=0;for(;R<m*(y/2)&&G<g;)G++,R*=p,l.x*=p,l.y*=p;Math.max(R,m)/Math.min(R,m)<=y&&(R=m)}const w=[R],M=[{x:l.x,y:l.y}],b=70.5310735,k=Math.min(b,d)/y;for(;R>=k;)R/=p,l.x/=p,l.y/=p,w.push(R),M.push({x:l.x,y:l.y});return{projectedPixelSize:a,scales:w,srcResolutions:M,isCustomTilingScheme:!x}}export{Kn as C,Xn as D,un as I,Pn as K,_ as V,Vn as a,yn as c,Sn as e,Qn as f,Un as i,On as j,Hn as l,Dn as t,Jn as v,Mn as w};
//# sourceMappingURL=rasterProjectionHelper-DzVI2BNP.js.map
