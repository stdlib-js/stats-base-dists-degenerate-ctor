/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var defineProperty = require( '@stdlib/utils-define-property' );
var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils-define-nonenumerable-read-only-accessor' );
var isNumber = require( '@stdlib/assert-is-number' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var entropy = require( '@stdlib/stats-base-dists-degenerate-entropy' );
var mean = require( '@stdlib/stats-base-dists-degenerate-mean' );
var mode = require( '@stdlib/stats-base-dists-degenerate-mode' );
var median = require( '@stdlib/stats-base-dists-degenerate-median' );
var stdev = require( '@stdlib/stats-base-dists-degenerate-stdev' );
var variance = require( '@stdlib/stats-base-dists-degenerate-variance' );
var cdf = require( '@stdlib/stats-base-dists-degenerate-cdf' );
var mgf = require( '@stdlib/stats-base-dists-degenerate-mgf' );
var pdf = require( '@stdlib/stats-base-dists-degenerate-pdf' );
var pmf = require( '@stdlib/stats-base-dists-degenerate-pmf' );
var logcdf = require( '@stdlib/stats-base-dists-degenerate-logcdf' );
var logpdf = require( '@stdlib/stats-base-dists-degenerate-logpdf' );
var logpmf = require( '@stdlib/stats-base-dists-degenerate-logpmf' );
var quantile = require( '@stdlib/stats-base-dists-degenerate-quantile' );
var format = require( '@stdlib/string-format' );


// FUNCTIONS //

/**
* Evaluates the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated CDF
*/
function degenerateCDF( x ) {
	return cdf( x, this.mu );
}

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logCDF
*/
function degenerateLogCDF( x ) {
	return logcdf( x, this.mu );
}

/**
* Evaluates the natural logarithm of the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logPDF
*/
function degenerateLogPDF( x ) {
	return logpdf( x, this.mu );
}

/**
* Evaluates the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated PDF
*/
function degeneratePDF( x ) {
	return pdf( x, this.mu );
}

/**
* Evaluates the natural logarithm of the probability mass function (PMF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logPMF
*/
function degenerateLogPMF( x ) {
	return logpmf( x, this.mu );
}

/**
* Evaluates the moment-generating function (MGF).
*
* @private
* @param {number} t - input value
* @returns {number} evaluated MGF
*/
function degenerateMGF( t ) {
	return mgf( t, this.mu );
}

/**
* Evaluates the probability mass function (PMF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated PMF
*/
function degeneratePMF( x ) {
	return pmf( x, this.mu );
}

/**
* Evaluates the quantile function.
*
* @private
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
*/
function degenerateQuantile( p ) {
	return quantile( p, this.mu );
}


// MAIN //

/**
* Degenerate distribution constructor.
*
* @constructor
* @param {number} [mu=0.0] - constant value of distribution
* @throws {TypeError} `mu` must be a number
* @returns {Degenerate} distribution instance
*
* @example
* var degenerate = new Degenerate();
*
* var y = degenerate.cdf( 1.8 );
* // returns 1.0
*
* var v = degenerate.median;
* // returns 0.0
*/
function Degenerate() {
	var mu;
	if ( !(this instanceof Degenerate) ) {
		if ( arguments.length === 0 ) {
			return new Degenerate();
		}
		return new Degenerate( arguments[ 0 ] );
	}
	if ( arguments.length ) {
		mu = arguments[ 0 ];
		if ( !isNumber( mu ) || isnan( mu ) ) {
			throw new TypeError( format( 'invalid argument. Mean parameter `%s` must be a number. Value: `%s`.', 'mu', mu ) );
		}
	} else {
		mu = 0.0;
	}
	defineProperty( this, 'mu', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return mu;
		},
		'set': function set( value ) {
			if ( !isNumber( value ) || isnan( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a number. Value: `%s`.', value ) );
			}
			mu = value;
		}
	});
	return this;
}

/**
* Degenerate distribution differential entropy.
*
* @name entropy
* @memberof Degenerate.prototype
* @type {number}
* @see [differential entropy]{@link https://en.wikipedia.org/wiki/Entropy_%28information_theory%29}
*
* @example
* var degenerate = new Degenerate( 20.0 );
*
* var v = degenerate.entropy;
* // returns 0.0
*/
setReadOnlyAccessor( Degenerate.prototype, 'entropy', function get() {
	return entropy( this.mu );
});

/**
* Degenerate distribution expected value.
*
* @name mean
* @memberof Degenerate.prototype
* @type {number}
* @see [expected value]{@link https://en.wikipedia.org/wiki/Expected_value}
*
* @example
* var degenerate = new Degenerate( 20.0 );
*
* var v = degenerate.mean;
* // returns 20.0
*/
setReadOnlyAccessor( Degenerate.prototype, 'mean', function get() {
	return mean( this.mu );
});

/**
* Degenerate distribution mode.
*
* @name mode
* @memberof Degenerate.prototype
* @type {number}
* @see [mode]{@link https://en.wikipedia.org/wiki/Mode_%28statistics%29}
*
* @example
* var degenerate = new Degenerate( 20.0 );
*
* var v = degenerate.mode;
* // returns 20.0
*/
setReadOnlyAccessor( Degenerate.prototype, 'mode', function get() {
	return mode( this.mu );
});

/**
* Degenerate distribution median.
*
* @name median
* @memberof Degenerate.prototype
* @type {number}
* @see [median]{@link https://en.wikipedia.org/wiki/Median}
*
* @example
* var degenerate = new Degenerate( -0.4 );
*
* var v = degenerate.median;
* // returns -0.4
*/
setReadOnlyAccessor( Degenerate.prototype, 'median', function get() {
	return median( this.mu );
});

/**
* Degenerate distribution standard deviation.
*
* @name stdev
* @memberof Degenerate.prototype
* @type {PositiveNumber}
* @see [standard deviation]{@link https://en.wikipedia.org/wiki/Standard_deviation}
*
* @example
* var degenerate = new Degenerate( 40.0 );
*
* var v = degenerate.stdev;
* // returns 0.0
*/
setReadOnlyAccessor( Degenerate.prototype, 'stdev', function get() {
	return stdev( this.mu );
});

/**
* Degenerate distribution variance.
*
* @name variance
* @memberof Degenerate.prototype
* @type {PositiveNumber}
* @see [variance]{@link https://en.wikipedia.org/wiki/Variance}
*
* @example
* var degenerate = new Degenerate( 40.0 );
*
* var v = degenerate.variance;
* // returns 0.0
*/
setReadOnlyAccessor( Degenerate.prototype, 'variance', function get() {
	return variance( this.mu );
});

/**
* Evaluates the cumulative distribution function (CDF).
*
* @name cdf
* @memberof Degenerate.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated CDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var degenerate = new Degenerate( -0.5 );
*
* var v = degenerate.cdf( 1.5 );
* // returns 1.0
*/
setReadOnly( Degenerate.prototype, 'cdf', degenerateCDF );

/**
* Evaluates the natural logarithm of the cumulative distribution function (logCDF).
*
* @name logcdf
* @memberof Degenerate.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logCDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var degenerate = new Degenerate( 3.0 );
*
* var v = degenerate.logcdf( 4.0 );
* // returns 0.0
*/
setReadOnly( Degenerate.prototype, 'logcdf', degenerateLogCDF );

/**
* Evaluates the natural logarithm of the probability density function (logPDF).
*
* @name logpdf
* @memberof Degenerate.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logPDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var degenerate = new Degenerate( -4.0 );
*
* var v = degenerate.logpdf( 4.0 );
* // returns -Infinity
*/
setReadOnly( Degenerate.prototype, 'logpdf', degenerateLogPDF );

/**
* Evaluates the natural logarithm of the probability mass function (logPMF).
*
* @name logpdf
* @memberof Degenerate.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logPMF
* @see [pmf]{@link https://en.wikipedia.org/wiki/Probability_mass_function}
*
* @example
* var degenerate = new Degenerate( 20.0 );
*
* var v = degenerate.logpmf( 20.0 );
* // returns 0.0
*/
setReadOnly( Degenerate.prototype, 'logpmf', degenerateLogPMF );

/**
* Evaluates the moment-generating function (MGF).
*
* @name mgf
* @memberof Degenerate.prototype
* @type {Function}
* @param {number} t - input value
* @returns {number} evaluated MGF
* @see [mgf]{@link https://en.wikipedia.org/wiki/Moment-generating_function}
*
* @example
* var degenerate = new Degenerate( 2.0 );
*
* var v = degenerate.mgf( -3.0 );
* // returns ~0.002
*/
setReadOnly( Degenerate.prototype, 'mgf', degenerateMGF );

/**
* Evaluates the probability density function (PDF).
*
* @name pdf
* @memberof Degenerate.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PDF
* @see [pmf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var degenerate = new Degenerate( 0.2 );
*
* var v = degenerate.pdf( 0.2 );
* // returns +Infinity
*
* v = degenerate.pdf( 0.4 );
* // returns 0.0
*/
setReadOnly( Degenerate.prototype, 'pdf', degeneratePDF );

/**
* Evaluates the probability mass function (PMF).
*
* @name pmf
* @memberof Degenerate.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PMF
* @see [pmf]{@link https://en.wikipedia.org/wiki/Probability_mass_function}
*
* @example
* var degenerate = new Degenerate( 0.2 );
*
* var v = degenerate.pmf( 0.4 );
* // returns 0.0
*
* v = degenerate.pmf( 0.2 );
* // returns 1.0
*/
setReadOnly( Degenerate.prototype, 'pmf', degeneratePMF );

/**
* Evaluates the quantile function.
*
* @name quantile
* @memberof Degenerate.prototype
* @type {Function}
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
* @see [quantile function]{@link https://en.wikipedia.org/wiki/Quantile_function}
*
* @example
* var degenerate = new Degenerate( 0.2 );
*
* var v = degenerate.quantile( 0.9 );
* // returns 0.2
*/
setReadOnly( Degenerate.prototype, 'quantile', degenerateQuantile );


// EXPORTS //

module.exports = Degenerate;
