import{a1 as l,a2 as E,a3 as f,a4 as d}from"./spike-symbols.js";async function p(t){const n=t.spatialReference;if(n.isWGS84)return t.clone();if(n.isWebMercator)return l(t);const e=E.WGS84;return await f(n,e),d(t,e)}function A(t,n){if(!u(t,n)){const e=t.typeKeywords;e?e.push(n):t.typeKeywords=[n]}}function u(t,n){var e;return!!((e=t.typeKeywords)!=null&&e.includes(n))}function L(t){return u(t,I.HOSTED_SERVICE)}function y(t,n){const e=t.typeKeywords;if(e){const r=e.indexOf(n);r>-1&&e.splice(r,1)}}function R(t,n,e){e?A(t,n):y(t,n)}async function M(t){const n=t.clone().normalize();let e;if(n.length>1)for(const r of n)e?r.width>e.width&&(e=r):e=r;else e=n[0];return p(e)}const I={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table",HOSTED_SERVICE:"Hosted Service",LOCAL_SCENE:"ViewingMode-Local",TILED_IMAGERY:"Tiled Imagery",GROUP_LAYER_MAP:"Map",ORIENTED_IMAGERY_LAYER:"OrientedImageryLayer"};function _(t){var c;const{portal:n,isOrgItem:e,itemControl:r}=t,i=(c=n.user)==null?void 0:c.privileges;let s=!i||i.includes("features:user:edit"),a=!!e&&!!(i!=null&&i.includes("features:user:fullEdit"));const o=r==="update"||r==="admin";return o?a=s=!0:a&&(s=!0),{features:{edit:s,fullEdit:a},content:{updateItem:o}}}export{_ as E,y as a,L as c,I as f,A as i,M as l,u as s,R as u};
//# sourceMappingURL=portalItemUtils-CnTMziNf.js.map