import{o as An}from"./_commonjsHelpers-DCkdB7M8.js";var K,Q={exports:{}};function Rn(){return K||(K=1,D=Q,R=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0,W=function(n){var H,S;(n=(n=n||{})!==void 0?n:{}).ready=new Promise(function(e,t){H=e,S=t});var T=Object.assign({},n),C=typeof window=="object",v=typeof importScripts=="function";typeof process=="object"&&typeof process.versions=="object"&&process.versions.node;var I,s="";function V(e){return n.locateFile?n.locateFile(e,s):s+e}(C||v)&&(v?s=self.location.href:typeof document<"u"&&document.currentScript&&(s=document.currentScript.src),R&&(s=R),s=s.indexOf("blob:")!==0?s.substr(0,s.replace(/[?#].*/,"").lastIndexOf("/")+1):"",v&&(I=e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)})),n.print||console.log.bind(console);var m,x,d=n.printErr||console.warn.bind(console);Object.assign(n,T),T=null,n.arguments&&n.arguments,n.thisProgram&&n.thisProgram,n.quit&&n.quit,n.wasmBinary&&(m=n.wasmBinary),n.noExitRuntime,typeof WebAssembly!="object"&&g("no native wasm support detected");var M,_,b,h,p,O,U=!1,B=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function Z(e,t,i){for(var c=t+i,u=t;e[u]&&!(u>=c);)++u;if(u-t>16&&e.buffer&&B)return B.decode(e.subarray(t,u));for(var o="";t<u;){var r=e[t++];if(128&r){var f=63&e[t++];if((224&r)!=192){var $=63&e[t++];if((r=(240&r)==224?(15&r)<<12|f<<6|$:(7&r)<<18|f<<12|$<<6|63&e[t++])<65536)o+=String.fromCharCode(r);else{var J=r-65536;o+=String.fromCharCode(55296|J>>10,56320|1023&J)}}else o+=String.fromCharCode((31&r)<<6|f)}else o+=String.fromCharCode(r)}return o}function P(e,t){return e?Z(b,e,t):""}function k(e){M=e,n.HEAP8=_=new Int8Array(e),n.HEAP16=new Int16Array(e),n.HEAP32=h=new Int32Array(e),n.HEAPU8=b=new Uint8Array(e),n.HEAPU16=new Uint16Array(e),n.HEAPU32=p=new Uint32Array(e),n.HEAPF32=new Float32Array(e),n.HEAPF64=new Float64Array(e)}n.INITIAL_MEMORY;var F=[],q=[],z=[];function nn(){if(n.preRun)for(typeof n.preRun=="function"&&(n.preRun=[n.preRun]);n.preRun.length;)rn(n.preRun.shift());E(F)}function en(){E(q)}function tn(){if(n.postRun)for(typeof n.postRun=="function"&&(n.postRun=[n.postRun]);n.postRun.length;)un(n.postRun.shift());E(z)}function rn(e){F.unshift(e)}function on(e){q.unshift(e)}function un(e){z.unshift(e)}var l=0,y=null;function an(e){l++,n.monitorRunDependencies&&n.monitorRunDependencies(l)}function sn(e){if(l--,n.monitorRunDependencies&&n.monitorRunDependencies(l),l==0&&y){var t=y;y=null,t()}}function g(e){n.onAbort&&n.onAbort(e),d(e="Aborted("+e+")"),U=!0,e+=". Build with -sASSERTIONS for more info.";var t=new WebAssembly.RuntimeError(e);throw S(t),t}var a,cn="data:application/octet-stream;base64,";function L(e){return e.startsWith(cn)}function N(e){try{if(e==a&&m)return new Uint8Array(m);if(I)return I(e);throw"both async and sync fetching of the wasm failed"}catch(t){g(t)}}function fn(){return m||!C&&!v||typeof fetch!="function"?Promise.resolve().then(function(){return N(a)}):fetch(a,{credentials:"same-origin"}).then(function(e){if(!e.ok)throw"failed to load wasm binary file at '"+a+"'";return e.arrayBuffer()}).catch(function(){return N(a)})}function pn(){var e={a:wn};function t(o,r){var f=o.exports;n.asm=f,k((x=n.asm.g).buffer),O=n.asm.m,on(n.asm.h),sn()}function i(o){t(o.instance)}function c(o){return fn().then(function(r){return WebAssembly.instantiate(r,e)}).then(function(r){return r}).then(o,function(r){d("failed to asynchronously prepare wasm: "+r),g(r)})}function u(){return m||typeof WebAssembly.instantiateStreaming!="function"||L(a)||typeof fetch!="function"?c(i):fetch(a,{credentials:"same-origin"}).then(function(o){return WebAssembly.instantiateStreaming(o,e).then(i,function(r){return d("wasm streaming compile failed: "+r),d("falling back to ArrayBuffer instantiation"),c(i)})})}if(an(),n.instantiateWasm)try{return n.instantiateWasm(e,t)}catch(o){return d("Module.instantiateWasm callback failed with error: "+o),!1}return u().catch(S),{}}function E(e){for(;e.length>0;){var t=e.shift();if(typeof t!="function"){var i=t.func;typeof i=="number"?t.arg===void 0?G(i)():G(i)(t.arg):i(t.arg===void 0?null:t.arg)}else t(n)}}L(a="lerc-wasm.wasm")||(a=V(a));var w=[];function G(e){var t=w[e];return t||(e>=w.length&&(w.length=e+1),w[e]=t=O.get(e)),t}function ln(e,t,i,c){g("Assertion failed: "+P(e)+", at: "+[t?P(t):"unknown filename",i,c?P(c):"unknown function"])}function hn(e){return X(e+24)+24}function mn(e){this.excPtr=e,this.ptr=e-24,this.set_type=function(t){p[this.ptr+4>>2]=t},this.get_type=function(){return p[this.ptr+4>>2]},this.set_destructor=function(t){p[this.ptr+8>>2]=t},this.get_destructor=function(){return p[this.ptr+8>>2]},this.set_refcount=function(t){h[this.ptr>>2]=t},this.set_caught=function(t){t=t?1:0,_[this.ptr+12|0]=t},this.get_caught=function(){return _[this.ptr+12|0]!=0},this.set_rethrown=function(t){t=t?1:0,_[this.ptr+13|0]=t},this.get_rethrown=function(){return _[this.ptr+13|0]!=0},this.init=function(t,i){this.set_adjusted_ptr(0),this.set_type(t),this.set_destructor(i),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){var t=h[this.ptr>>2];h[this.ptr>>2]=t+1},this.release_ref=function(){var t=h[this.ptr>>2];return h[this.ptr>>2]=t-1,t===1},this.set_adjusted_ptr=function(t){p[this.ptr+16>>2]=t},this.get_adjusted_ptr=function(){return p[this.ptr+16>>2]},this.get_exception_ptr=function(){if(Y(this.get_type()))return p[this.excPtr>>2];var t=this.get_adjusted_ptr();return t!==0?t:this.excPtr}}function dn(e,t,i){throw new mn(e).init(t,i),e}function _n(){g("")}function yn(e,t,i){b.copyWithin(e,t,t+i)}function gn(){return 2147483648}function vn(e){try{return x.grow(e-M.byteLength+65535>>>16),k(x.buffer),1}catch{}}function bn(e){var t=b.length;e>>>=0;var i=gn();if(e>i)return!1;let c=(r,f)=>r+(f-r%f)%f;for(var u=1;u<=4;u*=2){var o=t*(1+.2/u);if(o=Math.min(o,e+100663296),vn(Math.min(i,c(Math.max(e,o),65536))))return!0}return!1}var wn={a:ln,c:hn,b:dn,d:_n,f:yn,e:bn};pn(),n.___wasm_call_ctors=function(){return(n.___wasm_call_ctors=n.asm.h).apply(null,arguments)},n._lerc_getBlobInfo=function(){return(n._lerc_getBlobInfo=n.asm.i).apply(null,arguments)},n._lerc_getDataRanges=function(){return(n._lerc_getDataRanges=n.asm.j).apply(null,arguments)},n._lerc_decode=function(){return(n._lerc_decode=n.asm.k).apply(null,arguments)},n._lerc_decode_4D=function(){return(n._lerc_decode_4D=n.asm.l).apply(null,arguments)};var X=n._malloc=function(){return(X=n._malloc=n.asm.n).apply(null,arguments)};n._free=function(){return(n._free=n.asm.o).apply(null,arguments)};var A,Y=n.___cxa_is_pointer_type=function(){return(Y=n.___cxa_is_pointer_type=n.asm.p).apply(null,arguments)};function j(e){function t(){A||(A=!0,n.calledRun=!0,U||(en(),H(n),n.onRuntimeInitialized&&n.onRuntimeInitialized(),tn()))}l>0||(nn(),l>0||(n.setStatus?(n.setStatus("Running..."),setTimeout(function(){setTimeout(function(){n.setStatus("")},1),t()},1)):t()))}if(y=function e(){A||j(),A||(y=e)},n.run=j,n.preInit)for(typeof n.preInit=="function"&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return j(),n.ready},D.exports=W),Q.exports;var D,R,W}const Sn=An(Rn()),xn=Object.freeze(Object.defineProperty({__proto__:null,default:Sn},Symbol.toStringTag,{value:"Module"}));export{xn as l};
//# sourceMappingURL=lerc-wasm-CJsbZVip.js.map
