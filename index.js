// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function i(r,t,n){var i=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):o.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var c=Math.abs,f=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,l=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,m=/\.0*e/,b=/(\..*[^0])0*e/;function w(r){var t,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((t=r.precision)>0&&(t-=1),e=i.toExponential(t)):e=i.toPrecision(r.precision),r.alternate||(e=s.call(e,b,"$1e"),e=s.call(e,m,"e"),e=s.call(e,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=s.call(e,l,"e+0$1"),e=s.call(e,y,"e-0$1"),r.alternate&&(e=s.call(e,g,"$1."),e=s.call(e,d,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===p.call(r.specifier)?p.call(e):f.call(e)}function v(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}var N=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function U(r){var t,n,e,o,a,c,f,p,s,l,y,g,d;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,p=0;p<r.length;p++)if("string"==typeof(e=r[p]))c+=e;else{if(t=void 0!==e.precision,!(e=E(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+e+"`.");for(e.mapping&&(f=e.mapping),n=e.flags,s=0;s<n.length;s++)switch(o=n.charAt(s)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[f],10),f+=1,_(e.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[f],10),f+=1,_(e.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[f],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1,e.arg=String(e.arg);break;case"c":if(!_(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=_(a)?String(e.arg):N(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=w(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(l=e.arg,y=e.width,g=e.padRight,d=void 0,(d=y-l.length)<0?l:l=g?l+v(d):v(d)+l)),c+=e.arg||"",f+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function j(r){var t,n,e,i;for(n=[],i=0,e=S.exec(r);e;)(t=r.slice(i,S.lastIndex-e[0].length)).length&&n.push(t),n.push(I(e)),i=S.lastIndex,e=S.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function x(r){var t,n;if("string"!=typeof r)throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[j(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return U.apply(null,t)}var k=Object.prototype,F=k.toString,T=k.__defineGetter__,O=k.__defineSetter__,V=k.__lookupGetter__,$=k.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===F.call(n))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,t)||$.call(r,t)?(e=r.__proto__,r.__proto__=k,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&T&&T.call(r,t,n.get),a&&O&&O.call(r,t,n.set),r};function C(r,t,n){G(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function H(r,t,n){G(r,t,{configurable:!1,enumerable:!1,get:n})}function P(r){return"number"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function L(){return W&&"symbol"==typeof Symbol.toStringTag}var R=Object.prototype.toString,Z=Object.prototype.hasOwnProperty,M="function"==typeof Symbol?Symbol:void 0,X="function"==typeof M?M.toStringTag:"",Y=L()?function(r){var t,n,e,i,o;if(null==r)return R.call(r);n=r[X],o=X,t=null!=(i=r)&&Z.call(i,o);try{r[X]=void 0}catch(t){return R.call(r)}return e=R.call(r),t?r[X]=n:delete r[X],e}:function(r){return R.call(r)},q=Number,z=q.prototype.toString,D=L();function B(r){return"object"==typeof r&&(r instanceof q||(D?function(r){try{return z.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Y(r)))}function J(r){return P(r)||B(r)}function K(r){return r!=r}function Q(r,t){return K(r)||K(t)?NaN:r<t?0:1}function rr(r){return function(){return r}}C(J,"isPrimitive",P),C(J,"isObject",B),C(Q,"factory",(function(r){return K(r)?rr(NaN):function(t){return K(t)?NaN:t<r?0:1}}));var tr=Math.floor,nr=Math.ceil;function er(r){return r<0?nr(r):tr(r)}var ir=q.NEGATIVE_INFINITY,or=Number.POSITIVE_INFINITY,ar=1023,ur=1023,cr=-1023,fr=-1074;function pr(r){return r===or||r===ir}var sr,lr=2147483648,yr=2147483647,gr="function"==typeof Uint32Array,dr="function"==typeof Uint32Array?Uint32Array:null,hr="function"==typeof Uint32Array?Uint32Array:void 0;sr=function(){var r,t,n;if("function"!=typeof dr)return!1;try{t=new dr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(gr&&n instanceof Uint32Array||"[object Uint32Array]"===Y(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var mr,br=sr,wr="function"==typeof Float64Array,vr="function"==typeof Float64Array?Float64Array:null,Nr="function"==typeof Float64Array?Float64Array:void 0;mr=function(){var r,t,n;if("function"!=typeof vr)return!1;try{t=new vr([1,3.14,-3.14,NaN]),n=t,r=(wr&&n instanceof Float64Array||"[object Float64Array]"===Y(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var Ar,_r=mr,Er="function"==typeof Uint8Array,Ur="function"==typeof Uint8Array?Uint8Array:null,Sr="function"==typeof Uint8Array?Uint8Array:void 0;Ar=function(){var r,t,n;if("function"!=typeof Ur)return!1;try{t=new Ur(t=[1,3.14,-3.14,256,257]),n=t,r=(Er&&n instanceof Uint8Array||"[object Uint8Array]"===Y(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Sr:function(){throw new Error("not implemented")};var Ir,jr=Ar,xr="function"==typeof Uint16Array,kr="function"==typeof Uint16Array?Uint16Array:null,Fr="function"==typeof Uint16Array?Uint16Array:void 0;Ir=function(){var r,t,n;if("function"!=typeof kr)return!1;try{t=new kr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(xr&&n instanceof Uint16Array||"[object Uint16Array]"===Y(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Fr:function(){throw new Error("not implemented")};var Tr,Or={uint16:Ir,uint8:jr};(Tr=new Or.uint16(1))[0]=4660;var Vr,$r,Gr=52===new Or.uint8(Tr.buffer)[0];!0===Gr?(Vr=1,$r=0):(Vr=0,$r=1);var Cr={HIGH:Vr,LOW:$r},Hr=new _r(1),Pr=new br(Hr.buffer),Wr=Cr.HIGH,Lr=Cr.LOW;function Rr(r,t,n,e){return Hr[0]=r,t[e]=Pr[Wr],t[e+n]=Pr[Lr],t}function Zr(r){return Rr(r,[0,0],1,0)}C(Zr,"assign",Rr);var Mr,Xr,Yr=!0===Gr?1:0,qr=new _r(1),zr=new br(qr.buffer);function Dr(r){return qr[0]=r,zr[Yr]}!0===Gr?(Mr=1,Xr=0):(Mr=0,Xr=1);var Br={HIGH:Mr,LOW:Xr},Jr=new _r(1),Kr=new br(Jr.buffer),Qr=Br.HIGH,rt=Br.LOW;function tt(r,t){return Kr[Qr]=r,Kr[rt]=t,Jr[0]}var nt=[0,0],et=22250738585072014e-324,it=4503599627370496;function ot(r,t,n,e){return K(r)||pr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<et?(t[e]=r*it,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}C((function(r){return ot(r,[0,0],1,0)}),"assign",ot);var at=2146435072,ut=2220446049250313e-31,ct=2148532223,ft=[0,0],pt=[0,0];function st(r,t){var n,e,i,o,a,u;return 0===t||0===r||K(r)||pr(r)?r:(ot(r,ft,1,0),r=ft[0],t+=ft[1],t+=function(r){var t=Dr(r);return(t=(t&at)>>>20)-ar|0}(r),t<fr?(i=0,o=r,Zr.assign(i,nt,1,0),a=nt[0],a&=yr,u=Dr(o),tt(a|=u&=lr,nt[1])):t>ur?r<0?ir:or:(t<=cr?(t+=52,e=ut):e=1,Zr.assign(r,pt,1,0),n=pt[0],n&=ct,e*tt(n|=t+ar<<20,pt[1])))}var lt=.6931471803691238,yt=1.9082149292705877e-10,gt=1.4426950408889634,dt=709.782712893384,ht=-745.1332191019411,mt=1/(1<<28),bt=-mt;function wt(r){var t;return K(r)||r===or?r:r===ir?0:r>dt?or:r<ht?0:r>bt&&r<mt?1+r:function(r,t,n){var e,i,o,a;return st(1-(t-(e=r-t)*(o=e-(i=e*e)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),n)}(r-(t=er(r<0?gt*r-.5:gt*r+.5))*lt,t*yt,t)}function vt(r,t){return K(r)||K(t)?NaN:wt(t*r)}function Nt(r,t){return K(r)||K(t)?NaN:r===t?or:0}function At(r,t){return K(r)||K(t)?NaN:r===t?1:0}function _t(r,t){return K(r)||K(t)?NaN:r<t?ir:0}function Et(r,t){return K(r)||K(t)?NaN:r===t?or:ir}function Ut(r,t){return K(r)||K(t)?NaN:r===t?0:ir}function St(r,t){return K(r)||r<0||r>1?NaN:t}function It(){var r,t=arguments,n="https://stdlib.io/e/"+t[0]+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}function jt(){var r;if(!(this instanceof jt))return 0===arguments.length?new jt:new jt(arguments[0]);if(arguments.length){if(!J(r=arguments[0])||K(r))throw new TypeError(It("0y58r","mu",r))}else r=0;return G(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!J(t)||K(t))throw new TypeError(It("0y58d",t));r=t}}),this}return C(vt,"factory",(function(r){return K(r)?rr(NaN):function(t){return K(t)?NaN:wt(r*t)}})),C(Nt,"factory",(function(r){return K(r)?rr(NaN):function(t){return K(t)?NaN:t===r?or:0}})),C(At,"factory",(function(r){return K(r)?rr(NaN):function(t){return K(t)?NaN:t===r?1:0}})),C(_t,"factory",(function(r){return K(r)?rr(NaN):function(t){return K(t)?NaN:t<r?ir:0}})),C(Et,"factory",(function(r){return K(r)?rr(NaN):function(t){return K(t)?NaN:t===r?or:ir}})),C(Ut,"factory",(function(r){return K(r)?rr(NaN):function(t){return K(t)?NaN:t===r?0:ir}})),C(St,"factory",(function(r){return K(r)?rr(NaN):function(t){return K(t)||t<0||t>1?NaN:r}})),H(jt.prototype,"entropy",(function(){return K(this.mu)?NaN:0})),H(jt.prototype,"mean",(function(){return this.mu})),H(jt.prototype,"mode",(function(){return this.mu})),H(jt.prototype,"median",(function(){return this.mu})),H(jt.prototype,"stdev",(function(){return K(this.mu)?NaN:0})),H(jt.prototype,"variance",(function(){return K(this.mu)?NaN:0})),C(jt.prototype,"cdf",(function(r){return Q(r,this.mu)})),C(jt.prototype,"logcdf",(function(r){return _t(r,this.mu)})),C(jt.prototype,"logpdf",(function(r){return Et(r,this.mu)})),C(jt.prototype,"logpmf",(function(r){return Ut(r,this.mu)})),C(jt.prototype,"mgf",(function(r){return vt(r,this.mu)})),C(jt.prototype,"pdf",(function(r){return Nt(r,this.mu)})),C(jt.prototype,"pmf",(function(r){return At(r,this.mu)})),C(jt.prototype,"quantile",(function(r){return St(r,this.mu)})),jt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).Degenerate=t();
//# sourceMappingURL=index.js.map
