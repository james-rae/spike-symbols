import{c8 as E,c9 as S}from"./spike-symbols.js";const x={ar:[".",","],bg:[","," "],bs:[",","."],ca:[",","."],cs:[","," "],da:[",","."],de:[",","."],"de-ch":[".","’"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[","," "],fi:[","," "],fr:[","," "],"fr-ch":[","," "],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[","," "],id:[",","."],it:[",","."],"it-ch":[".","’"],ja:[".",","],ko:[".",","],lt:[","," "],lv:[","," "],mk:[",","."],nb:[","," "],nl:[",","."],pl:[","," "],pt:[",","."],"pt-pt":[","," "],ro:[",","."],ru:[","," "],sk:[","," "],sl:[",","."],sr:[",","."],sv:[","," "],th:[".",","],tr:[",","."],uk:[","," "],vi:[",","."],zh:[".",","]};function w(e=E()){let t=(e=e.toLowerCase())in x;if(!t){const s=e.split("-");s.length>1&&s[0]in x&&(e=s[0],t=!0),t||(e="en")}const[n,r,l="#,##0.###"]=x[e];return{decimal:n,group:r,pattern:l}}function k(e,t){const n=w((t={...t}).locale);t.customs=n;const r=t.pattern||n.pattern;return isNaN(e)||Math.abs(e)===1/0?null:v(e,r,t)}const N=/[#0,]*[#0](?:\.0*#*)?/;function v(e,t,n){const r=(n=n||{}).customs.group,l=n.customs.decimal,s=t.split(";"),c=s[0];if((t=s[e<0?1:0]||"-"+c).includes("%"))e*=100;else if(t.includes("‰"))e*=1e3;else{if(t.includes("¤"))throw new Error("currency notation not supported");if(t.includes("E"))throw new Error("exponential notation not supported")}const d=N,u=c.match(d);if(!u)throw new Error("unable to find a number expression in pattern: "+t);return n.fractional===!1&&(n.places=0),t.replace(d,z(e,u[0],{decimal:l,group:r,places:n.places,round:n.round}))}function z(e,t,n){(n=n||{}).places===!0&&(n.places=0),n.places===1/0&&(n.places=6);const r=t.split("."),l=typeof n.places=="string"&&n.places.indexOf(",");let s=n.places;l?s=n.places.slice(l+1):+s>=0||(s=(r[1]||[]).length),n.round<0||(e=Number(e.toFixed(Number(s))));const c=String(Math.abs(e)).split("."),d=c[1]||"";if(r[1]||n.places){l&&(n.places=n.places.slice(0,Math.max(0,l)));const o=n.places!==void 0?n.places:r[1]&&r[1].lastIndexOf("0")+1;+o>d.length&&(c[1]=d.padEnd(Number(o),"0")),+s<d.length&&(c[1]=d.slice(0,Math.max(0,Number(s))))}else c[1]&&c.pop();const u=r[0].replace(",","");let f=u.indexOf("0");f!==-1&&(f=u.length-f,f>c[0].length&&(c[0]=c[0].padStart(f,"0")),u.includes("#")||(c[0]=c[0].slice(-f)));let p,i,a=r[0].lastIndexOf(",");if(a!==-1){p=r[0].length-a-1;const o=r[0].slice(0,a);a=o.lastIndexOf(","),a!==-1&&(i=o.length-a-1)}const g=[];for(let o=c[0];o;){const m=o.length-p;g.push(m>0?o.slice(Math.max(0,m)):o),o=m>0?o.slice(0,m):"",i&&(p=i,i=void 0)}return c[0]=g.reverse().join(n.group||","),c.join(n.decimal||".")}function y(e){const t=w((e=e||{}).locale),n=e.pattern||t.pattern,r=t.group,l=t.decimal;let s=1;if(n.includes("%"))s/=100;else if(n.includes("‰"))s/=1e3;else if(n.includes("¤"))throw new Error("currency notation not supported");const c=n.split(";");return c.length===1&&c.push("-"+c[0]),{regexp:h(c,u=>(u="(?:"+S(u,".")+")").replace(N,f=>{const p={signed:!1,separator:e.strict?r:[r,""],fractional:e.fractional,decimal:l,exponent:!1},i=f.split(".");let a=e.places;i.length===1&&s!==1&&(i[1]="###"),i.length===1||a===0?p.fractional=!1:(a===void 0&&(a=e.pattern?i[1].lastIndexOf("0")+1:1/0),a&&e.fractional==null&&(p.fractional=!0),!e.places&&+a<i[1].length&&(a+=","+i[1].length),p.places=a);const g=i[0].split(",");return g.length>1&&(p.groupSize=g.pop().length,g.length>1&&(p.groupSize2=g.pop().length)),"("+O(p)+")"}),!0).replaceAll(/[\xa0 ]/g,"[\\s\\xa0]"),group:r,decimal:l,factor:s}}function A(e,t){const n=y(t),r=new RegExp("^"+n.regexp+"$").exec(e);if(!r)return NaN;let l=r[1];if(!r[1]){if(!r[2])return NaN;l=r[2],n.factor*=-1}return l=l.replaceAll(new RegExp("["+n.group+"\\s\\xa0]","g"),"").replace(n.decimal,"."),Number(l)*n.factor}function O(e){"places"in(e=e||{})||(e.places=1/0),typeof e.decimal!="string"&&(e.decimal="."),"fractional"in e&&!String(e.places).startsWith("0")||(e.fractional=[!0,!1]),"exponent"in e||(e.exponent=[!0,!1]),"eSigned"in e||(e.eSigned=[!0,!1]);const t=b(e),n=h(e.fractional,l=>{let s="";return l&&e.places!==0&&(s="\\"+e.decimal,e.places===1/0?s="(?:"+s+"\\d+)?":s+="\\d{"+e.places+"}"),s},!0);let r=t+n;return n&&(r="(?:(?:"+r+")|(?:"+n+"))"),r+h(e.exponent,l=>l?"([eE]"+b({signed:e.eSigned})+")":"")}function b(e){return"signed"in(e=e||{})||(e.signed=[!0,!1]),"separator"in e?"groupSize"in e||(e.groupSize=3):e.separator="",h(e.signed,t=>t?"[-+]":"",!0)+h(e.separator,t=>{if(!t)return"(?:\\d+)";(t=S(t))===" "?t="\\s":t===" "&&(t="\\s\\xa0");const n=e.groupSize,r=e.groupSize2;if(r){const l="(?:0|[1-9]\\d{0,"+(r-1)+"}(?:["+t+"]\\d{"+r+"})*["+t+"]\\d{"+n+"})";return n-r>0?"(?:"+l+"|(?:0|[1-9]\\d{0,"+(n-1)+"}))":l}return"(?:0|[1-9]\\d{0,"+(n-1)+"}(?:["+t+"]\\d{"+n+"})*)"},!0)}const h=(e,t,n)=>{if(!Array.isArray(e))return t(e);const r=[];for(let l=0;l<e.length;l++)r.push(t(e[l]));return M(r.join("|"),!!n)},M=(e,t)=>"("+(t?"?:":"")+e+")";export{y as c,k as l,A as p};
//# sourceMappingURL=number-ColPpShx.js.map
