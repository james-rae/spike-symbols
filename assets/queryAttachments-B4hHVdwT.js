import{eP as h,eQ as f,$ as p}from"./spike-symbols.js";import{t as d}from"./query-BbR5Y2Ua.js";import{a as l}from"./AttachmentInfo-Eqbh-ihC.js";import"./pbfQueryUtils-B4wItXS2.js";import"./pbf-CCxG-t_w.js";import"./OptimizedFeature-D3320lj0.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-D-hT_tjP.js";function y(n){const t=n.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function k(n,t){const e={};for(const a of t){const{parentObjectId:o,parentGlobalId:s,attachmentInfos:c}=a;for(const r of c){const{id:i}=r,u=h(f(`${n.path}/${o}/attachments/${i}`)),m=l.fromJSON(r);m.set({url:u,parentObjectId:o,parentGlobalId:s}),e[o]?e[o].push(m):e[o]=[m]}}return e}function w(n,t,e){let a={query:d({...n.query,f:"json",...y(t)})};return e&&(a={...e,...a,query:{...e.query,...a.query}}),p(n.path+"/queryAttachments",a).then(o=>o.data.attachmentGroups)}async function z(n,t,e){const{objectIds:a}=t,o=[];for(const s of a)o.push(p(n.path+"/"+s+"/attachments",e));return Promise.all(o).then(s=>a.map((c,r)=>({parentObjectId:c,attachmentInfos:s[r].data.attachmentInfos})))}export{w as executeAttachmentQuery,z as fetchAttachments,k as processAttachmentQueryResult};
//# sourceMappingURL=queryAttachments-B4hHVdwT.js.map
