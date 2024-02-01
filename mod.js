// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function i(r,t,n){var i=!1,a=t-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+e(a):e(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===o.call(r.specifier)?o.call(e):a.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function c(r){return"string"==typeof r}var f=Math.abs,p=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,h=/^(\d+)$/,d=/^(\d+)e/,v=/\.0$/,m=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var t,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((t=r.precision)>0&&(t-=1),e=i.toExponential(t)):e=i.toPrecision(r.precision),r.alternate||(e=l.call(e,w,"$1e"),e=l.call(e,m,"e"),e=l.call(e,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=l.call(e,y,"e+0$1"),e=l.call(e,g,"e-0$1"),r.alternate&&(e=l.call(e,h,"$1."),e=l.call(e,d,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):p.call(e)}function N(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function A(r,t,n){var e=t-r.length;return e<0?r:r=n?r+N(e):N(e)+r}var _=String.fromCharCode,E=isNaN,U=Array.isArray;function S(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function I(r){var t,n,e,a,o,f,p,s,l;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",p=1,s=0;s<r.length;s++)if(c(e=r[s]))f+=e;else{if(t=void 0!==e.precision,!(e=S(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(p=e.mapping),n=e.flags,l=0;l<n.length;l++)switch(a=n.charAt(l)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===e.width){if(e.width=parseInt(arguments[p],10),p+=1,E(e.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[p],10),p+=1,E(e.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[p],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!E(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=E(o)?String(e.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=b(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=A(e.arg,e.width,e.padRight)),f+=e.arg||"",p+=1}return f}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function x(r){var t,n,e,i;for(n=[],i=0,e=j.exec(r);e;)(t=r.slice(i,j.lastIndex-e[0].length)).length&&n.push(t),n.push(k(e)),i=j.lastIndex,e=j.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function F(r){return"string"==typeof r}function T(r){var t,n,e;if(!F(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=x(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return I.apply(null,n)}var V=Object.prototype,O=V.toString,$=V.__defineGetter__,G=V.__defineSetter__,H=V.__lookupGetter__,P=V.__lookupSetter__;var W=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===O.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(r,t)||P.call(r,t)?(e=r.__proto__,r.__proto__=V,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,t,n.get),o&&G&&G.call(r,t,n.set),r};function C(r,t,n){W(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function L(r,t,n){W(r,t,{configurable:!1,enumerable:!1,get:n})}function M(r){return"number"==typeof r}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return R&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;var q="function"==typeof Symbol?Symbol:void 0,z="function"==typeof q?q.toStringTag:"";var B=Z()?function(r){var t,n,e,i,a;if(null==r)return X.call(r);n=r[z],a=z,t=null!=(i=r)&&Y.call(i,a);try{r[z]=void 0}catch(t){return X.call(r)}return e=X.call(r),t?r[z]=n:delete r[z],e}:function(r){return X.call(r)},D=Number,J=D.prototype.toString;var K=Z();function Q(r){return"object"==typeof r&&(r instanceof D||(K?function(r){try{return J.call(r),!0}catch(r){return!1}}(r):"[object Number]"===B(r)))}function rr(r){return M(r)||Q(r)}function tr(r){return r!=r}function nr(r,t){return tr(r)||tr(t)?NaN:r<t?0:1}function er(r){return function(){return r}}C(rr,"isPrimitive",M),C(rr,"isObject",Q),C(nr,"factory",(function(r){return tr(r)?er(NaN):function(t){if(tr(t))return NaN;return t<r?0:1}}));var ir=Math.floor,ar=Math.ceil;function or(r){return r<0?ar(r):ir(r)}var ur=D.NEGATIVE_INFINITY,cr=Number.POSITIVE_INFINITY;function fr(r){return r===cr||r===ur}var pr="function"==typeof Uint32Array;var sr="function"==typeof Uint32Array?Uint32Array:null;var lr,yr="function"==typeof Uint32Array?Uint32Array:void 0;lr=function(){var r,t,n;if("function"!=typeof sr)return!1;try{t=new sr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(pr&&n instanceof Uint32Array||"[object Uint32Array]"===B(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var gr=lr,hr="function"==typeof Float64Array;var dr="function"==typeof Float64Array?Float64Array:null;var vr,mr="function"==typeof Float64Array?Float64Array:void 0;vr=function(){var r,t,n;if("function"!=typeof dr)return!1;try{t=new dr([1,3.14,-3.14,NaN]),n=t,r=(hr&&n instanceof Float64Array||"[object Float64Array]"===B(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var wr=vr,br="function"==typeof Uint8Array;var Nr="function"==typeof Uint8Array?Uint8Array:null;var Ar,_r="function"==typeof Uint8Array?Uint8Array:void 0;Ar=function(){var r,t,n;if("function"!=typeof Nr)return!1;try{t=new Nr(t=[1,3.14,-3.14,256,257]),n=t,r=(br&&n instanceof Uint8Array||"[object Uint8Array]"===B(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Er=Ar,Ur="function"==typeof Uint16Array;var Sr="function"==typeof Uint16Array?Uint16Array:null;var Ir,jr="function"==typeof Uint16Array?Uint16Array:void 0;Ir=function(){var r,t,n;if("function"!=typeof Sr)return!1;try{t=new Sr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Ur&&n instanceof Uint16Array||"[object Uint16Array]"===B(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?jr:function(){throw new Error("not implemented")};var kr,xr={uint16:Ir,uint8:Er};(kr=new xr.uint16(1))[0]=4660;var Fr,Tr,Vr=52===new xr.uint8(kr.buffer)[0];!0===Vr?(Fr=1,Tr=0):(Fr=0,Tr=1);var Or={HIGH:Fr,LOW:Tr},$r=new wr(1),Gr=new gr($r.buffer),Hr=Or.HIGH,Pr=Or.LOW;function Wr(r,t,n,e){return $r[0]=r,t[e]=Gr[Hr],t[e+n]=Gr[Pr],t}function Cr(r){return Wr(r,[0,0],1,0)}C(Cr,"assign",Wr);var Lr,Mr,Rr=!0===Vr?1:0,Zr=new wr(1),Xr=new gr(Zr.buffer);function Yr(r){return Zr[0]=r,Xr[Rr]}!0===Vr?(Lr=1,Mr=0):(Lr=0,Mr=1);var qr={HIGH:Lr,LOW:Mr},zr=new wr(1),Br=new gr(zr.buffer),Dr=qr.HIGH,Jr=qr.LOW;function Kr(r,t){return Br[Dr]=r,Br[Jr]=t,zr[0]}var Qr=[0,0];function rt(r,t,n,e){return tr(r)||fr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}C((function(r){return rt(r,[0,0],1,0)}),"assign",rt);var tt=[0,0],nt=[0,0];function et(r,t){var n,e,i,a,o,u;return 0===t||0===r||tr(r)||fr(r)?r:(rt(r,tt,1,0),t+=tt[1],t+=function(r){var t=Yr(r);return(t=(2146435072&t)>>>20)-1023|0}(r=tt[0]),t<-1074?(i=0,a=r,Cr.assign(i,Qr,1,0),o=Qr[0],o&=2147483647,u=Yr(a),Kr(o|=u&=2147483648,Qr[1])):t>1023?r<0?ur:cr:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Cr.assign(r,nt,1,0),n=nt[0],n&=2148532223,e*Kr(n|=t+1023<<20,nt[1])))}function it(r){var t;return tr(r)||r===cr?r:r===ur?0:r>709.782712893384?cr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,t,n){var e,i,a,o;return et(1-(t-(e=r-t)*(a=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(t=or(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*t,t)}function at(r,t){return tr(r)||tr(t)?NaN:it(t*r)}function ot(r,t){return tr(r)||tr(t)?NaN:r===t?cr:0}function ut(r,t){return tr(r)||tr(t)?NaN:r===t?1:0}function ct(r,t){return tr(r)||tr(t)?NaN:r<t?ur:0}function ft(r,t){return tr(r)||tr(t)?NaN:r===t?cr:ur}function pt(r,t){return tr(r)||tr(t)?NaN:r===t?0:ur}function st(r,t){return tr(r)||r<0||r>1?NaN:t}function lt(){var r;if(!(this instanceof lt))return 0===arguments.length?new lt:new lt(arguments[0]);if(arguments.length){if(!rr(r=arguments[0])||tr(r))throw new TypeError(T("invalid argument. Mean parameter `%s` must be a number. Value: `%s`.","mu",r))}else r=0;return W(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!rr(t)||tr(t))throw new TypeError(T("invalid assignment. Must be a number. Value: `%s`.",t));r=t}}),this}C(at,"factory",(function(r){return tr(r)?er(NaN):function(t){if(tr(t))return NaN;return it(r*t)}})),C(ot,"factory",(function(r){return tr(r)?er(NaN):function(t){if(tr(t))return NaN;return t===r?cr:0}})),C(ut,"factory",(function(r){return tr(r)?er(NaN):function(t){if(tr(t))return NaN;return t===r?1:0}})),C(ct,"factory",(function(r){return tr(r)?er(NaN):function(t){if(tr(t))return NaN;return t<r?ur:0}})),C(ft,"factory",(function(r){return tr(r)?er(NaN):function(t){if(tr(t))return NaN;return t===r?cr:ur}})),C(pt,"factory",(function(r){return tr(r)?er(NaN):function(t){if(tr(t))return NaN;return t===r?0:ur}})),C(st,"factory",(function(r){return tr(r)?er(NaN):function(t){if(tr(t)||t<0||t>1)return NaN;return r}})),L(lt.prototype,"entropy",(function(){return tr(this.mu)?NaN:0})),L(lt.prototype,"mean",(function(){return this.mu})),L(lt.prototype,"mode",(function(){return this.mu})),L(lt.prototype,"median",(function(){return this.mu})),L(lt.prototype,"stdev",(function(){return tr(this.mu)?NaN:0})),L(lt.prototype,"variance",(function(){return tr(this.mu)?NaN:0})),C(lt.prototype,"cdf",(function(r){return nr(r,this.mu)})),C(lt.prototype,"logcdf",(function(r){return ct(r,this.mu)})),C(lt.prototype,"logpdf",(function(r){return ft(r,this.mu)})),C(lt.prototype,"logpmf",(function(r){return pt(r,this.mu)})),C(lt.prototype,"mgf",(function(r){return at(r,this.mu)})),C(lt.prototype,"pdf",(function(r){return ot(r,this.mu)})),C(lt.prototype,"pmf",(function(r){return ut(r,this.mu)})),C(lt.prototype,"quantile",(function(r){return st(r,this.mu)}));export{lt as default};
//# sourceMappingURL=mod.js.map