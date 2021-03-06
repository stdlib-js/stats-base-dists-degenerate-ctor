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

'use strict';

// MODULES //

var tape = require( 'tape' );
var isFunction = require( '@stdlib/assert-is-function' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var quantile = require( '@stdlib/stats-base-dists-degenerate-quantile' );
var cdf = require( '@stdlib/stats-base-dists-degenerate-cdf' );
var logcdf = require( '@stdlib/stats-base-dists-degenerate-logcdf' );
var logpdf = require( '@stdlib/stats-base-dists-degenerate-logpdf' );
var logpmf = require( '@stdlib/stats-base-dists-degenerate-logpmf' );
var mgf = require( '@stdlib/stats-base-dists-degenerate-mgf' );
var pdf = require( '@stdlib/stats-base-dists-degenerate-pdf' );
var pmf = require( '@stdlib/stats-base-dists-degenerate-pmf' );
var entropy = require( '@stdlib/stats-base-dists-degenerate-entropy' );
var variance = require( '@stdlib/stats-base-dists-degenerate-variance' );
var median = require( '@stdlib/stats-base-dists-degenerate-median' );
var mode = require( '@stdlib/stats-base-dists-degenerate-mode' );
var stdev = require( '@stdlib/stats-base-dists-degenerate-stdev' );
var mean = require( '@stdlib/stats-base-dists-degenerate-mean' );
var Degenerate = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Degenerate, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a `mu` argument which is not a number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new Degenerate( value );
		};
	}
});

tape( 'the function returns a new distribution instance (default parameters)', function test( t ) {
	var degenerate = new Degenerate();
	t.strictEqual( degenerate instanceof Degenerate, true, 'returns an instance' );
	t.end();
});

tape( 'the function returns a new distribution instance (custom parameters)', function test( t ) {
	var degenerate = new Degenerate( 2.3 );
	t.strictEqual( degenerate instanceof Degenerate, true, 'returns an instance' );
	t.end();
});

tape( 'the function can be invoked without the new operator', function test( t ) {
	// eslint-disable-next-line new-cap
	var degenerate = Degenerate();
	t.strictEqual( degenerate instanceof Degenerate, true, 'returns an instance' );

	// eslint-disable-next-line new-cap
	degenerate = Degenerate( 0.3 );
	t.strictEqual( degenerate instanceof Degenerate, true, 'returns an instance' );

	t.end();
});

tape( 'the created distribution has a property for getting and setting `mu`', function test( t ) {
	var degenerate;

	degenerate = new Degenerate( 4.0 );
	t.strictEqual( hasOwnProp( degenerate, 'mu' ), true, 'has property' );
	t.strictEqual( degenerate.mu, 4.0, 'returns expected value' );

	degenerate.mu = 2.0;
	t.strictEqual( degenerate.mu, 2.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `mu` to a value which is not a number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var degenerate = new Degenerate();
			degenerate.mu = value;
		};
	}
});

tape( 'the distribution prototype has a property for retrieving the distribution entropy', function test( t ) {
	var degenerate;

	t.strictEqual( hasOwnProp( Degenerate.prototype, 'entropy' ), true, 'has property' );

	degenerate = new Degenerate();
	t.strictEqual( degenerate.entropy, entropy( 0.5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mean', function test( t ) {
	var degenerate;

	t.strictEqual( hasOwnProp( Degenerate.prototype, 'mean' ), true, 'has property' );

	degenerate = new Degenerate( 10.0 );
	t.strictEqual( degenerate.mean, mean( 10.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution median', function test( t ) {
	var degenerate;

	t.strictEqual( hasOwnProp( Degenerate.prototype, 'median' ), true, 'has property' );

	degenerate = new Degenerate( 10.0 );
	t.strictEqual( degenerate.median, median( 10.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mode', function test( t ) {
	var degenerate;

	t.strictEqual( hasOwnProp( Degenerate.prototype, 'mode' ), true, 'has property' );

	degenerate = new Degenerate( 10.0 );
	t.strictEqual( degenerate.mode, mode( 10.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution standard deviation', function test( t ) {
	var degenerate;

	t.strictEqual( hasOwnProp( Degenerate.prototype, 'stdev' ), true, 'has property' );

	degenerate = new Degenerate( 0.9 );
	t.strictEqual( degenerate.stdev, stdev( 0.9 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution variance', function test( t ) {
	var degenerate;

	t.strictEqual( hasOwnProp( Degenerate.prototype, 'variance' ), true, 'has property' );

	degenerate = new Degenerate( 0.9 );
	t.strictEqual( degenerate.variance, variance( 0.9 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a method for evaluating the cumulative distribution function (CDF)', function test( t ) {
	var degenerate;
	var y;

	t.strictEqual( hasOwnProp( Degenerate.prototype, 'cdf' ), true, 'has property' );
	t.strictEqual( isFunction( Degenerate.prototype.cdf ), true, 'has method' );

	degenerate = new Degenerate();
	y = degenerate.cdf( 0.5 );

	t.strictEqual( y, cdf( 0.5, 0.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the cumulative distribution function (CDF)', function test( t ) {
	var degenerate;
	var y;

	t.strictEqual( hasOwnProp( Degenerate.prototype, 'logcdf' ), true, 'has property' );
	t.strictEqual( isFunction( Degenerate.prototype.logcdf ), true, 'has method' );

	degenerate = new Degenerate();
	y = degenerate.logcdf( 0.5 );

	t.strictEqual( y, logcdf( 0.5, 0.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the probability density function (PDF)', function test( t ) {
	var degenerate;
	var y;

	t.strictEqual( hasOwnProp( Degenerate.prototype, 'logpdf' ), true, 'has property' );
	t.strictEqual( isFunction( Degenerate.prototype.logpdf ), true, 'has method' );

	degenerate = new Degenerate();
	y = degenerate.logpdf( 0.5 );

	t.strictEqual( y, logpdf( 0.5, 0.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the probability mass function (PMF)', function test( t ) {
	var degenerate;
	var y;

	t.strictEqual( hasOwnProp( Degenerate.prototype, 'logpmf' ), true, 'has property' );
	t.strictEqual( isFunction( Degenerate.prototype.logpmf ), true, 'has method' );

	degenerate = new Degenerate();
	y = degenerate.logpmf( 0.5 );

	t.strictEqual( y, logpmf( 0.5, 0.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the moment-generating function (MGF)', function test( t ) {
	var degenerate;
	var y;

	t.strictEqual( hasOwnProp( Degenerate.prototype, 'mgf' ), true, 'has property' );
	t.strictEqual( isFunction( Degenerate.prototype.mgf ), true, 'has method' );

	degenerate = new Degenerate();
	y = degenerate.mgf( 0.5 );

	t.strictEqual( y, mgf( 0.5, 0.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the probability density function (PDF)', function test( t ) {
	var degenerate;
	var y;

	t.strictEqual( hasOwnProp( Degenerate.prototype, 'pdf' ), true, 'has property' );
	t.strictEqual( isFunction( Degenerate.prototype.pdf ), true, 'has method' );

	degenerate = new Degenerate();
	y = degenerate.pdf( 0.3 );

	t.strictEqual( y, pdf( 0.3, 0.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the probability mass function (PMF)', function test( t ) {
	var degenerate;
	var y;

	t.strictEqual( hasOwnProp( Degenerate.prototype, 'pmf' ), true, 'has property' );
	t.strictEqual( isFunction( Degenerate.prototype.pmf ), true, 'has method' );

	degenerate = new Degenerate();
	y = degenerate.pmf( 0.3 );

	t.strictEqual( y, pmf( 0.3, 0.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the quantile function', function test( t ) {
	var degenerate;
	var y;

	t.strictEqual( hasOwnProp( Degenerate.prototype, 'quantile' ), true, 'has property' );
	t.strictEqual( isFunction( Degenerate.prototype.quantile ), true, 'has method' );

	degenerate = new Degenerate();
	y = degenerate.quantile( 0.8 );

	t.strictEqual( y, quantile( 0.8, 0.0 ), 'returns expected value' );
	t.end();
});
