import{b8 as n}from"./spike-symbols.js";function f(r,e){let t;if(typeof r=="string")t=n(r+`-seed(${e})`);else{let o=12;t=r^e;do t=107*(t>>8^t)+o|0;while(--o!=0)}return(1+t/(1<<31))/2}function u(r){return Math.floor(f(r,i)*l)}const i=53290320,l=10;export{f as e,u as o};
//# sourceMappingURL=grouping-DiIDlUsI.js.map
