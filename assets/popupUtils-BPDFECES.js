import{x as u,bz as f,bA as b,bB as m,bC as d,bD as p,bE as F,bF as g,bG as y}from"./spike-symbols.js";function B({displayField:e,editFieldsInfo:i,fields:t,objectIdField:s,title:l},a){if(!t)return null;const r=L({editFieldsInfo:i,fields:t,objectIdField:s},a);if(!r.length)return null;const o=S({titleBase:l,fields:t,displayField:e}),n=N();return new u({title:o,content:n,fieldInfos:r})}function D(e){var n;const{title:i,graphic:t}=e??{},{attributes:s,sourceLayer:l}=t??{},a=l&&"displayField"in l?l.displayField:null,r=a?s==null?void 0:s[a]:null,o=(n=t==null?void 0:t.getObjectId())==null?void 0:n.toString();return i||r||o||""}const w=(e,i)=>i.visibleFieldNames?i.visibleFieldNames.has(e.name):y(e,i);function v({fields:e,ignoreFieldTypes:i,sortDisabled:t}){const s=e;return i&&(e=e.filter(l=>!i.includes(l.type))),e===s&&(e=e.slice()),t!==!0&&e.sort(I),e}function I(e,i){return e.type==="oid"?-1:i.type==="oid"?1:c(e)?-1:c(i)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((i.alias||i.name).toLocaleLowerCase())}function L(e,i){const t=i==null?void 0:i.visibleFieldNames;return v({fields:e.fields??[],ignoreFieldTypes:(i==null?void 0:i.ignoreFieldTypes)||h,sortDisabled:i==null?void 0:i.sortDisabled}).map(s=>new f({fieldName:s.name,isEditable:b(s,e),label:s.alias,format:C(s),visible:w(s,{...e,visibleFieldNames:t})}))}function C(e){switch(e.type){case"small-integer":case"integer":case"single":return new d({digitSeparator:!0,places:0});case"double":return new d({digitSeparator:!0,places:2});case"string":return m(e.name)?new d({digitSeparator:!0,places:0}):void 0;default:return}}function N(){return[new p,new F]}function S(e){const i=g(e),{titleBase:t}=e;return i?`${t}: {${i.trim()}}`:t??""}function c(e){var t;return(e.name&&e.name.toLowerCase())==="name"?!0:((t=e.alias)==null?void 0:t.toLowerCase())==="name"}const h=["geometry","blob","raster","guid","xml"];export{D as c,B as p};
//# sourceMappingURL=popupUtils-BPDFECES.js.map
