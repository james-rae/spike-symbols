import{c7 as h,bZ as m}from"./spike-symbols.js";async function T(e,d=e.popupTemplate){var n,o;if(d==null)return[];const t=await d.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:r}=d,{objectIdField:p,typeIdField:a,globalIdField:u,relationships:i}=e;if(t.includes("*"))return["*"];const c=r?h(e):[],l=m(e.fieldsIndex,[...t,...c]);return a&&l.push(a),l&&p&&((n=e.fieldsIndex)!=null&&n.has(p))&&!l.includes(p)&&l.push(p),l&&u&&((o=e.fieldsIndex)!=null&&o.has(u))&&!l.includes(u)&&l.push(u),i&&i.forEach(I=>{var f;const{keyField:s}=I;l&&s&&((f=e.fieldsIndex)!=null&&f.has(s))&&!l.includes(s)&&l.push(s)}),l}function b(e,d){return e.popupTemplate?e.popupTemplate:d!=null&&d.defaultPopupTemplateEnabled&&e.defaultPopupTemplate!=null?e.defaultPopupTemplate:null}export{T as n,b as p};
//# sourceMappingURL=popupUtils-Dx_dBhNf.js.map
