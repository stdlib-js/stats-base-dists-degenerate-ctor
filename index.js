// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,r=Object.prototype,e=r.toString,o=r.__defineGetter__,u=r.__defineSetter__,i=r.__lookupGetter__,f=r.__lookupSetter__,a=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,n,a){var c,y,l,p;if("object"!=typeof t||null===t||"[object Array]"===e.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((y="value"in a)&&(i.call(t,n)||f.call(t,n)?(c=t.__proto__,t.__proto__=r,delete t[n],t[n]=a.value,t.__proto__=c):t[n]=a.value),l="get"in a,p="set"in a,y&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(t,n,a.get),p&&u&&u.call(t,n,a.set),t};function c(t,n,r){a(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})}function y(t,n,r){a(t,n,{configurable:!1,enumerable:!1,get:r})}function l(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return p&&"symbol"==typeof Symbol.toStringTag}var N=Object.prototype.toString,m=Object.prototype.hasOwnProperty,b="function"==typeof Symbol?Symbol.toStringTag:"",v=s()?function(t){var n,r,e,o,u;if(null==t)return N.call(t);r=t[b],u=b,n=null!=(o=t)&&m.call(o,u);try{t[b]=void 0}catch(n){return N.call(t)}return e=N.call(t),n?t[b]=r:delete t[b],e}:function(t){return N.call(t)},h=Number,d=h.prototype.toString,w=s();function g(t){return"object"==typeof t&&(t instanceof h||(w?function(t){try{return d.call(t),!0}catch(t){return!1}}(t):"[object Number]"===v(t)))}function A(t){return l(t)||g(t)}function _(t){return t!=t}function U(t,n){return _(t)||_(n)?NaN:t<n?0:1}function j(t){return function(){return t}}c(A,"isPrimitive",l),c(A,"isObject",g),c(U,"factory",(function(t){return _(t)?j(NaN):function(n){return _(n)?NaN:n<t?0:1}}));var I=Math.floor,E=Math.ceil;function O(t){return t<0?E(t):I(t)}var S=h.NEGATIVE_INFINITY,T=Number.POSITIVE_INFINITY;function F(t){return t===T||t===S}var H,G="function"==typeof Uint32Array,P="function"==typeof Uint32Array?Uint32Array:null,V="function"==typeof Uint32Array?Uint32Array:void 0;H=function(){var t,n,r;if("function"!=typeof P)return!1;try{n=new P(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(G&&r instanceof Uint32Array||"[object Uint32Array]"===v(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?V:function(){throw new Error("not implemented")};var L,M=H,W="function"==typeof Float64Array,x="function"==typeof Float64Array?Float64Array:null,k="function"==typeof Float64Array?Float64Array:void 0;L=function(){var t,n,r;if("function"!=typeof x)return!1;try{n=new x([1,3.14,-3.14,NaN]),r=n,t=(W&&r instanceof Float64Array||"[object Float64Array]"===v(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?k:function(){throw new Error("not implemented")};var C,Y=L,q="function"==typeof Uint8Array,D="function"==typeof Uint8Array?Uint8Array:null,R="function"==typeof Uint8Array?Uint8Array:void 0;C=function(){var t,n,r;if("function"!=typeof D)return!1;try{n=new D(n=[1,3.14,-3.14,256,257]),r=n,t=(q&&r instanceof Uint8Array||"[object Uint8Array]"===v(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?R:function(){throw new Error("not implemented")};var z,B=C,J="function"==typeof Uint16Array,K="function"==typeof Uint16Array?Uint16Array:null,Q="function"==typeof Uint16Array?Uint16Array:void 0;z=function(){var t,n,r;if("function"!=typeof K)return!1;try{n=new K(n=[1,3.14,-3.14,65536,65537]),r=n,t=(J&&r instanceof Uint16Array||"[object Uint16Array]"===v(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?Q:function(){throw new Error("not implemented")};var X,Z={uint16:z,uint8:B};(X=new Z.uint16(1))[0]=4660;var $,tt,nt=52===new Z.uint8(X.buffer)[0];!0===nt?($=1,tt=0):($=0,tt=1);var rt={HIGH:$,LOW:tt},et=new Y(1),ot=new M(et.buffer),ut=rt.HIGH,it=rt.LOW;function ft(t,n,r,e){return et[0]=t,n[e]=ot[ut],n[e+r]=ot[it],n}function at(t){return ft(t,[0,0],1,0)}c(at,"assign",ft);var ct,yt,lt=!0===nt?1:0,pt=new Y(1),st=new M(pt.buffer);function Nt(t){return pt[0]=t,st[lt]}!0===nt?(ct=1,yt=0):(ct=0,yt=1);var mt={HIGH:ct,LOW:yt},bt=new Y(1),vt=new M(bt.buffer),ht=mt.HIGH,dt=mt.LOW;function wt(t,n){return vt[ht]=t,vt[dt]=n,bt[0]}var gt=[0,0];function At(t,n,r,e){return _(t)||F(t)?(n[e]=t,n[e+r]=0,n):0!==t&&function(t){return Math.abs(t)}(t)<22250738585072014e-324?(n[e]=4503599627370496*t,n[e+r]=-52,n):(n[e]=t,n[e+r]=0,n)}c((function(t){return At(t,[0,0],1,0)}),"assign",At);var _t=[0,0],Ut=[0,0];function jt(t,n){var r,e,o,u,i,f;return 0===n||0===t||_(t)||F(t)?t:(At(t,_t,1,0),n+=_t[1],n+=function(t){var n=Nt(t);return(n=(2146435072&n)>>>20)-1023|0}(t=_t[0]),n<-1074?(o=0,u=t,at.assign(o,gt,1,0),i=gt[0],i&=2147483647,f=Nt(u),wt(i|=f&=2147483648,gt[1])):n>1023?t<0?S:T:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,at.assign(t,Ut,1,0),r=Ut[0],r&=2148532223,e*wt(r|=n+1023<<20,Ut[1])))}var It=1.4426950408889634,Et=1/(1<<28);function Ot(t){var n;return _(t)||t===T?t:t===S?0:t>709.782712893384?T:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<Et?1+t:function(t,n,r){var e,o,u,i;return jt(1-(n-(e=t-n)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-t),r)}(t-.6931471803691238*(n=O(t<0?It*t-.5:It*t+.5)),1.9082149292705877e-10*n,n)}function St(t,n){return _(t)||_(n)?NaN:Ot(n*t)}function Tt(t,n){return _(t)||_(n)?NaN:t===n?T:0}function Ft(t,n){return _(t)||_(n)?NaN:t===n?1:0}function Ht(t,n){return _(t)||_(n)?NaN:t<n?S:0}function Gt(t,n){return _(t)||_(n)?NaN:t===n?T:S}function Pt(t,n){return _(t)||_(n)?NaN:t===n?0:S}function Vt(t,n){return _(t)||t<0||t>1?NaN:n}function Lt(){var t,n=arguments,r=n[0],e="https://stdlib.io/e/"+r+"?";for(t=1;t<n.length;t++)e+="&arg[]="+encodeURIComponent(n[t]);return e}function Mt(){var t;if(!(this instanceof Mt))return 0===arguments.length?new Mt:new Mt(arguments[0]);if(arguments.length){if(!A(t=arguments[0])||_(t))throw new TypeError(Lt("0Tw9E","mu",t))}else t=0;return a(this,"mu",{configurable:!1,enumerable:!0,get:function(){return t},set:function(n){if(!A(n)||_(n))throw new TypeError(Lt("invalid assignment. Must be a number. Value: `%s`.",n));t=n}}),this}return c(St,"factory",(function(t){return _(t)?j(NaN):function(n){return _(n)?NaN:Ot(t*n)}})),c(Tt,"factory",(function(t){return _(t)?j(NaN):function(n){return _(n)?NaN:n===t?T:0}})),c(Ft,"factory",(function(t){return _(t)?j(NaN):function(n){return _(n)?NaN:n===t?1:0}})),c(Ht,"factory",(function(t){return _(t)?j(NaN):function(n){return _(n)?NaN:n<t?S:0}})),c(Gt,"factory",(function(t){return _(t)?j(NaN):function(n){return _(n)?NaN:n===t?T:S}})),c(Pt,"factory",(function(t){return _(t)?j(NaN):function(n){return _(n)?NaN:n===t?0:S}})),c(Vt,"factory",(function(t){return _(t)?j(NaN):function(n){return _(n)||n<0||n>1?NaN:t}})),y(Mt.prototype,"entropy",(function(){return _(this.mu)?NaN:0})),y(Mt.prototype,"mean",(function(){return this.mu})),y(Mt.prototype,"mode",(function(){return this.mu})),y(Mt.prototype,"median",(function(){return this.mu})),y(Mt.prototype,"stdev",(function(){return _(this.mu)?NaN:0})),y(Mt.prototype,"variance",(function(){return _(this.mu)?NaN:0})),c(Mt.prototype,"cdf",(function(t){return U(t,this.mu)})),c(Mt.prototype,"logcdf",(function(t){return Ht(t,this.mu)})),c(Mt.prototype,"logpdf",(function(t){return Gt(t,this.mu)})),c(Mt.prototype,"logpmf",(function(t){return Pt(t,this.mu)})),c(Mt.prototype,"mgf",(function(t){return St(t,this.mu)})),c(Mt.prototype,"pdf",(function(t){return Tt(t,this.mu)})),c(Mt.prototype,"pmf",(function(t){return Ft(t,this.mu)})),c(Mt.prototype,"quantile",(function(t){return Vt(t,this.mu)})),Mt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).Degenerate=n();
//# sourceMappingURL=index.js.map