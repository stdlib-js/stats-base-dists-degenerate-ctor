"use strict";var f=function(e,n){return function(){return n||e((n={exports:{}}).exports,n),n.exports}};var m=f(function(Q,p){
var g=require('@stdlib/utils-define-property/dist'),t=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=require('@stdlib/utils-define-nonenumerable-read-only-accessor/dist'),o=require('@stdlib/assert-is-number/dist'),a=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/stats-base-dists-degenerate-entropy/dist'),d=require('@stdlib/stats-base-dists-degenerate-mean/dist'),v=require('@stdlib/stats-base-dists-degenerate-mode/dist'),q=require('@stdlib/stats-base-dists-degenerate-median/dist'),h=require('@stdlib/stats-base-dists-degenerate-stdev/dist'),y=require('@stdlib/stats-base-dists-degenerate-variance/dist'),l=require('@stdlib/stats-base-dists-degenerate-cdf/dist'),b=require('@stdlib/stats-base-dists-degenerate-mgf/dist'),F=require('@stdlib/stats-base-dists-degenerate-pdf/dist'),w=require('@stdlib/stats-base-dists-degenerate-pmf/dist'),D=require('@stdlib/stats-base-dists-degenerate-logcdf/dist'),M=require('@stdlib/stats-base-dists-degenerate-logpdf/dist'),P=require('@stdlib/stats-base-dists-degenerate-logpmf/dist'),L=require('@stdlib/stats-base-dists-degenerate-quantile/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function x(e){return l(e,this.mu)}function C(e){return D(e,this.mu)}function E(e){return M(e,this.mu)}function O(e){return F(e,this.mu)}function R(e){return P(e,this.mu)}function T(e){return b(e,this.mu)}function V(e){return w(e,this.mu)}function A(e){return L(e,this.mu)}function r(){var e;if(!(this instanceof r))return arguments.length===0?new r:new r(arguments[0]);if(arguments.length){if(e=arguments[0],!o(e)||a(e))throw new TypeError(s('0y58r',"mu",e))}else e=0;return g(this,"mu",{configurable:!1,enumerable:!0,get:function(){return e},set:function(i){if(!o(i)||a(i))throw new TypeError(s('0y58d',i));e=i}}),this;}u(r.prototype,"entropy",function(){return c(this.mu)});u(r.prototype,"mean",function(){return d(this.mu)});u(r.prototype,"mode",function(){return v(this.mu)});u(r.prototype,"median",function(){return q(this.mu)});u(r.prototype,"stdev",function(){return h(this.mu)});u(r.prototype,"variance",function(){return y(this.mu)});t(r.prototype,"cdf",x);t(r.prototype,"logcdf",C);t(r.prototype,"logpdf",E);t(r.prototype,"logpmf",R);t(r.prototype,"mgf",T);t(r.prototype,"pdf",O);t(r.prototype,"pmf",V);t(r.prototype,"quantile",A);p.exports=r
});var G=m();module.exports=G;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map