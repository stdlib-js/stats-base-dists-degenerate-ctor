<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Degenerate

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Degenerate distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-degenerate-ctor
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var Degenerate = require( '@stdlib/stats-base-dists-degenerate-ctor' );
```

#### Degenerate( \[mu] )

Returns a [Degenerate][degenerate-distribution] distribution object.

```javascript
var degenerate = new Degenerate();

var mean = degenerate.mean;
// returns 0.0
```

By default, `mu = 0.0`. To create a distribution having a different mean value `mu`, provide a parameter value.

```javascript
var degenerate = new Degenerate( 20.0 );

var mean = degenerate.mean;
// returns 20.0
```

* * *

## degenerate

A [Degenerate][degenerate-distribution] distribution object has the following properties and methods...

### Writable Properties

#### degenerate.mu

Constant value of the distribution.

```javascript
var degenerate = new Degenerate( 2.0 );

var mu = degenerate.mu;
// returns 2.0

degenerate.mu = -2.0;

mu = degenerate.mu;
// returns -2.0
```

* * *

### Computed Properties

#### Degenerate.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var degenerate = new Degenerate( 4.0 );

var entropy = degenerate.entropy;
// returns 0.0
```

#### Degenerate.prototype.mean

Returns the [mean][expected-value].

```javascript
var degenerate = new Degenerate( 10.0 );

var mu = degenerate.mean;
// returns 10.0
```

#### Degenerate.prototype.median

Returns the [median][median].

```javascript
var degenerate = new Degenerate( 10.0 );

var median = degenerate.median;
// returns 10.0
```

#### Degenerate.prototype.mode

Returns the [mode][mode].

```javascript
var degenerate = new Degenerate( 10.0 );

var mode = degenerate.mode;
// returns 10.0
```

#### Degenerate.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var degenerate = new Degenerate( 4.0 );

var s = degenerate.stdev;
// returns 0.0
```

#### Degenerate.prototype.variance

Returns the [variance][variance].

```javascript
var degenerate = new Degenerate( 4.0 );

var s2 = degenerate.variance;
// returns 0.0
```

* * *

### Methods

#### Degenerate.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var degenerate = new Degenerate( 0.2 );

var y = degenerate.cdf( 0.5 );
// returns 1.0
```

#### Degenerate.prototype.logcdf( x )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (logCDF).

```javascript
var degenerate = new Degenerate( 0.2 );

var y = degenerate.logcdf( 0.5 );
// returns 0.0
```

#### Degenerate.prototype.logpdf( x )

Evaluates the natural logarithm of the [probability density function][pdf] (logPDF).

```javascript
var degenerate = new Degenerate( 10.0 );

var y = degenerate.logpdf( 9.0 );
// returns -Infinity

y = degenerate.logpdf( 10.0 );
// returns Infinity
```

#### Degenerate.prototype.logpmf( x )

Evaluates the natural logarithm of the [probability mass function][pmf] (logPMF).

```javascript
var degenerate = new Degenerate( 10.0 );

var y = degenerate.logpmf( 9.0 );
// returns -Infinity

y = degenerate.logpmf( 10.0 );
// returns 0.0
```

#### Degenerate.prototype.mgf( t )

Evaluates the [moment-generating function][mgf] (MGF).

```javascript
var degenerate = new Degenerate( 10.0 );

var y = degenerate.mgf( 0.1 );
// returns ~2.718
```

#### Degenerate.prototype.pdf( x )

Evaluates the [probability density function][pdf] (PDF).

```javascript
var degenerate = new Degenerate( 10.0 );

var y = degenerate.pdf( 2.0 );
// returns 0.0

y = degenerate.pdf( 10.0 );
// returns +Infinity
```

#### Degenerate.prototype.pmf( x )

Evaluates the [probability mass function][pmf] (PMF).

```javascript
var degenerate = new Degenerate( 10.0 );

var y = degenerate.pmf( 2.0 );
// returns 0.0

y = degenerate.pmf( 10.0 );
// returns 1.0
```

#### Degenerate.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var degenerate = new Degenerate( 10.0 );

var y = degenerate.quantile( 0.5 );
// returns 10.0

y = degenerate.quantile( 0.9 );
// returns 10.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Degenerate = require( '@stdlib/stats-base-dists-degenerate-ctor' );

var degenerate = new Degenerate( 0.5 );

var mu = degenerate.mean;
// returns 0.5

var s2 = degenerate.variance;
// returns 0.0

var y = degenerate.cdf( 2.0 );
// returns 1.0
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-degenerate-ctor.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-degenerate-ctor

[test-image]: https://github.com/stdlib-js/stats-base-dists-degenerate-ctor/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-degenerate-ctor/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-degenerate-ctor/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-degenerate-ctor?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-degenerate-ctor.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-degenerate-ctor/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-degenerate-ctor/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-degenerate-ctor/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-degenerate-ctor/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-degenerate-ctor/main/LICENSE

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

[median]: https://en.wikipedia.org/wiki/Median

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->
