import{I as m,dT as f,$ as y,bu as c,ei as u,d5 as p,i as S,bQ as l}from"./spike-symbols.js";import{t as R}from"./query-BbR5Y2Ua.js";import g from"./BinsQuery-B5Y3RMt6.js";import{d}from"./FeatureSet-C2IOSXSk.js";import"./pbfQueryUtils-B4wItXS2.js";import"./pbf-CCxG-t_w.js";import"./OptimizedFeature-D3320lj0.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-D-hT_tjP.js";import"./queryUtils-C-LTqSVD.js";import"./json-Wa8cmqdu.js";function J(r){const e=r.geometry,i=r.toJSON(),t=i;let n,o,a;return e!=null&&(o=e.spatialReference,a=u(o),t.geometryType=p(e),t.geometry=JSON.stringify(e),t.inSR=a),i.outSR?(t.outSR=u(i.outSR),n=r.outSpatialReference):e&&(t.outSR=t.inSR,n=o),t.bin&&(t.bin=JSON.stringify(t.bin)),t.quantizationParameters&&(t.quantizationParameters=JSON.stringify(t.quantizationParameters)),t.outStatistics&&(t.outStatistics=JSON.stringify(t.outStatistics)),t.outTimeReference&&(t.outTimeReference=JSON.stringify(t.outTimeReference)),r.defaultSpatialReference&&S(o,n)&&(t.defaultSR=t.inSR,delete t.inSR,delete t.outSR),t}async function N(r,e,i){return O(r,e,i)}async function O(r,e,i={}){const t=typeof r=="string"?m(r):r,n=e.geometry?[e.geometry]:[],o=await f(n,null,{signal:i.signal}),a=o==null?void 0:o[0];a!=null&&((e=e.clone()).geometry=a);const s=R({...t.query,f:"json",...J(e)});return y(c(t.path,"queryBins"),{...i,query:{...s,...i.query}})}async function j(r,e,i){const{data:t}=await N(l(r),g.from(e),i);return d.fromJSON(t)}export{j as executeBinsQuery};
//# sourceMappingURL=executeBinsQuery-UHpZ4KnF.js.map