import{cR as T,aE as z,gF as q,$ as D,s as u,cs as L,o as d,u as y,aP as P,w as S,P as x,k as _,gG as U,gH as I,gI as M,et as C,v as k,f as j,g4 as E,gJ as H}from"./spike-symbols.js";import{E as R}from"./ByteSizeUnit-BsxeN7wM.js";import{e as F}from"./LRUCache-LcfJ3jIy.js";function J(e,t=!1){return e<=T?t?new Array(e).fill(0):new Array(e):new Uint32Array(e)}class w{constructor(t){G(t);const{location:a,data:i}=t;this.location=Object.freeze(z(a));const l=this.location.width,n=this.location.height;let r=!0,o=!0;const c=Math.ceil(l*n/32),s=J(c);let h=0;for(let f=0;f<i.length;f++){const m=f%32;i[f]?(o=!1,s[h]|=1<<m):r=!1,m===31&&++h}o?(this._availability="unavailable",this.byteSize=40):r?(this._availability="available",this.byteSize=40):(this._availability=s,this.byteSize=40+q(s))}getAvailability(t,a){if(this._availability==="unavailable"||this._availability==="available")return this._availability;const i=(t-this.location.top)*this.location.width+(a-this.location.left),l=i%32,n=i>>5,r=this._availability;return n<0||n>r.length?"unknown":r[n]&1<<l?"available":"unavailable"}static fromDefinition(t,a){const i=t.service.request||D,{row:l,col:n,width:r,height:o}=t,c={query:{f:"json"}};return a=a?{...c,...a}:c,i(N(t),a).then(s=>s.data).catch(s=>{var h;if(((h=s==null?void 0:s.details)==null?void 0:h.httpStatus)===422)return{location:{top:l,left:n,width:r,height:o},valid:!0,data:new Array(r*o).fill(0)};throw s}).then(s=>{if(s.location&&(s.location.top!==l||s.location.left!==n||s.location.width!==r||s.location.height!==o))throw new u("tilemap:location-mismatch","Tilemap response for different location than requested",{response:s,definition:{top:l,left:n,width:r,height:o}});return w.fromJSON(s)})}static fromJSON(t){return Object.freeze(new w(t))}}function $(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}function N(e){var i;let t;if((i=e.service.tileServers)!=null&&i.length){const l=e.service.tileServers;t=`${l&&l.length?l[e.row%l.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}else t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;const a=e.service.query;return a&&(t=`${t}?${a}`),t}function G(e){if(!(e!=null&&e.location))throw new u("tilemap:missing-location","Location missing from tilemap response");if(e.valid===!1)throw new u("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new u("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new u("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new u("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}var v;function A(e,t,a){return new u("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:a})}let p=v=class extends P{constructor(e){super(e),this._pendingTilemapRequests={},this.request=D,this.size=32,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new F(2*R.MEGABYTES),this.addHandles(S(()=>{const{layer:e}=this;return[e==null?void 0:e.parsedUrl,e==null?void 0:e.tileServers,e==null?void 0:e.apiKey,e==null?void 0:e.customParameters]},()=>this._initializeTilemapDefinition(),x))}get effectiveMinLOD(){return this.minLOD??this.layer.tileInfo.lods[0].level}get effectiveMaxLOD(){return this.maxLOD??this.layer.tileInfo.lods[this.layer.tileInfo.lods.length-1].level}getAvailability(e,t,a){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return"unavailable";const i=this._tilemapFromCache(e,t,a,this._tmpTilemapDefinition);return i?i.getAvailability(t,a):"unknown"}fetchAvailability(e,t,a,i){return!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD?Promise.reject(A(e,t,a)):this._fetchTilemap(e,t,a,i).catch(l=>l).then(l=>{if(l instanceof w){const n=l.getAvailability(t,a);if(n==="unavailable")throw A(e,t,a);return n}if(_(l))throw l;return"unknown"})}fetchAvailabilityUpsample(e,t,a,i,l){i.level=e,i.row=t,i.col=a;const n=this.layer.tileInfo;n.updateTileInfo(i);const r=this.fetchAvailability(e,t,a,l).catch(o=>{if(_(o))throw o;if(n.upsampleTile(i))return this.fetchAvailabilityUpsample(i.level,i.row,i.col,i,l);throw o});return this._fetchAvailabilityUpsamplePrefetch(i.id,e,t,a,l,r),r}async _fetchAvailabilityUpsamplePrefetch(e,t,a,i,l,n){if(!this._prefetchingEnabled||e==null)return;const r=`prefetch-${e}`;if(this.hasHandles(r))return;const o=new AbortController;n.then(()=>o.abort(),()=>o.abort());let c=!1;const s=j(()=>{c||(c=!0,o.abort())});if(this.addHandles(s,r),await U(10,o.signal).catch(()=>{}),c||(c=!0,this.removeHandles(r)),I(o))return;const h=new E(e,t,a,i),f={...l,signal:o.signal},m=this.layer.tileInfo;for(let O=0;v._prefetches.length<v._maxPrefetch&&m.upsampleTile(h);++O){const b=this.fetchAvailability(h.level,h.row,h.col,f);v._prefetches.push(b);const g=()=>{v._prefetches.removeUnordered(b)};b.then(g,g)}}_fetchTilemap(e,t,a,i){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return Promise.reject(new u("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const l=this._tmpTilemapDefinition,n=this._tilemapFromCache(e,t,a,l);if(n)return Promise.resolve(n);const r=i==null?void 0:i.signal;return i={...i,signal:null},new Promise((o,c)=>{M(r,()=>c(H()));const s=$(l);let h=this._pendingTilemapRequests[s];if(!h){h=w.fromDefinition(l,i).then(m=>(this._tilemapCache.put(s,m,m.byteSize),m));const f=()=>{delete this._pendingTilemapRequests[s]};this._pendingTilemapRequests[s]=h,h.then(f,f)}h.then(o,c)})}_initializeTilemapDefinition(){var i;if(!this.layer.parsedUrl)return;const{parsedUrl:e,apiKey:t,customParameters:a}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:C({...e.query,...a,token:t??((i=e.query)==null?void 0:i.token)}),tileServers:this.layer.tileServers,request:this.request},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,a,i){i.level=e,i.row=t-t%this.size,i.col=a-a%this.size;const l=$(i);return this._tilemapCache.get(l)}get test(){}};p._maxPrefetch=4,p._prefetches=new L({initialSize:v._maxPrefetch}),d([y({constructOnly:!0})],p.prototype,"layer",void 0),d([y({constructOnly:!0})],p.prototype,"minLOD",void 0),d([y({constructOnly:!0})],p.prototype,"maxLOD",void 0),d([y({constructOnly:!0})],p.prototype,"request",void 0),d([y({constructOnly:!0})],p.prototype,"size",void 0),p=v=d([k("esri.layers.support.TilemapCache")],p);export{p as T};
//# sourceMappingURL=TilemapCache-DVeW1Ktn.js.map
