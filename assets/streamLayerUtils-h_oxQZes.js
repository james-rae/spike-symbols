import{P as m,$ as c}from"./utils-DkjCtb5D.js";import{l as u,a as y,f as i,i as p}from"./portalItemUtils-CnTMziNf.js";import"./spike-symbols.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./jsonContext-BDpgn6DJ.js";import"./saveUtils-CtQBSRUc.js";const n="Stream Service",f="Feed",d="stream-layer-save",v="stream-layer-save-as";function s(r){return{isValid:r.type==="stream"&&!!r.url&&!r.webSocketUrl,errorMessage:"Stream layer should be created using a url to a stream service"}}function o(r){const e=r.layerJSON;return Promise.resolve(e&&Object.keys(e).length?e:null)}async function x(r,e){const{parsedUrl:t,title:l,fullExtent:a}=r;e.url=t.path,e.title||(e.title=l),e.extent=null,a!=null&&(e.extent=await u(a)),y(e,i.METADATA),p(e,i.SINGLE_LAYER)}async function N(r,e){return m({layer:r,itemType:n,additionalItemType:f,validateLayer:s,createItemData:o,errorNamePrefix:d},e)}async function b(r,e,t){return c({layer:r,itemType:n,validateLayer:s,createItemData:o,errorNamePrefix:v,newItem:e,setItemProperties:x},t)}export{N as save,b as saveAs};
//# sourceMappingURL=streamLayerUtils-h_oxQZes.js.map
