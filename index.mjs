// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-entropy@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-mean@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-mode@v0.0.8-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-median@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-stdev@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-variance@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-cdf@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-mgf@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-pdf@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-pmf@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-logcdf@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-logpdf@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-logpmf@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-quantile@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function y(){var e;if(!(this instanceof y))return 0===arguments.length?new y:new y(arguments[0]);if(arguments.length){if(!n(e=arguments[0])||r(e))throw new TypeError(v("0Tw9E","mu",e))}else e=0;return t(this,"mu",{configurable:!1,enumerable:!0,get:function(){return e},set:function(t){if(!n(t)||r(t))throw new TypeError(v("invalid assignment. Must be a number. Value: `%s`.",t));e=t}}),this}s(y.prototype,"entropy",(function(){return i(this.mu)})),s(y.prototype,"mean",(function(){return d(this.mu)})),s(y.prototype,"mode",(function(){return m(this.mu)})),s(y.prototype,"median",(function(){return o(this.mu)})),s(y.prototype,"stdev",(function(){return p(this.mu)})),s(y.prototype,"variance",(function(){return a(this.mu)})),e(y.prototype,"cdf",(function(t){return l(t,this.mu)})),e(y.prototype,"logcdf",(function(t){return j(t,this.mu)})),e(y.prototype,"logpdf",(function(t){return g(t,this.mu)})),e(y.prototype,"logpmf",(function(t){return c(t,this.mu)})),e(y.prototype,"mgf",(function(t){return u(t,this.mu)})),e(y.prototype,"pdf",(function(t){return f(t,this.mu)})),e(y.prototype,"pmf",(function(t){return h(t,this.mu)})),e(y.prototype,"quantile",(function(t){return b(t,this.mu)}));export{y as default};
//# sourceMappingURL=index.mjs.map
