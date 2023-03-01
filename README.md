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

# Skewness

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Triangular][triangular-distribution] distribution [skewness][skewness].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [skewness][skewness] for a [triangular][triangular-distribution] random variable is

<!-- <equation class="equation" label="eq:triangular_skewness" align="center" raw="\operatorname{skew}\left( X \right) = \frac{{\sqrt 2}(a\!+\!b\!-\!2c)(2a\!-\!b\!-\!c)(a\!-\!2b\!+\!c)}{5(a^{2}\!+\!b^{2}\!+\!c^{2}\!-\!ab\!-\!ac\!-\!bc)^{{\frac{3}{2}}}}" alt="Skewness for a triangular distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{skew}\left( X \right) = \frac{{\sqrt 2}(a\!+\!b\!-\!2c)(2a\!-\!b\!-\!c)(a\!-\!2b\!+\!c)}{5(a^{2}\!+\!b^{2}\!+\!c^{2}\!-\!ab\!-\!ac\!-\!bc)^{{\frac{3}{2}}}}" data-equation="eq:triangular_skewness">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@556e0ebc42f54244079cecc91c0883bb6c442244/lib/node_modules/@stdlib/stats/base/dists/triangular/skewness/docs/img/equation_triangular_skewness.svg" alt="Skewness for a triangular distribution.">
    <br>
</div>

<!-- </equation> -->

where `a` is the lower limit, `b` is the upper limit and `c` is the mode.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
skewness = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-triangular-skewness@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var skewness = require( 'path/to/vendor/umd/stats-base-dists-triangular-skewness/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-triangular-skewness@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.skewness;
})();
</script>
```

#### skewness( a, b, c )

Returns the [skewness][skewness] of a [triangular][triangular-distribution] distribution with minimum support `a`, maximum support`b`, and mode `c`.

```javascript
var v = skewness( 0.0, 1.0, 0.8 );
// returns ~-0.476

v = skewness( 4.0, 12.0, 5.0 );
// returns ~0.532

v = skewness( 2.0, 8.0, 5.0 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = skewness( NaN, 4.0, 2.0 );
// returns NaN

v = skewness( 0.0, NaN, 2.0 );
// returns NaN

v = skewness( 0.0, 4.0, NaN );
// returns NaN
```

If provided parameters not satisfying `a <= c <= b`, the function returns `NaN`.

```javascript
var y = skewness( 1.0, 0.0, 1.5 );
// returns NaN

y = skewness( 0.0, 1.0, -1.0 );
// returns NaN

y = skewness( 0.0, -1.0, 0.5 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-triangular-skewness@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var a;
var b;
var c;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    a = ( randu()*10.0 );
    b = ( randu()*10.0 ) + a;
    c = ( randu()*( b-a ) ) + a;
    v = skewness( a, b, c );
    console.log( 'a: %d, b: %d, c: %d, skew(X;a,b,c): %d', a.toFixed( 4 ), b.toFixed( 4 ), c.toFixed( 4 ), v.toFixed( 4 ) );
}

})();
</script>
</body>
</html>
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

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-triangular-skewness.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-triangular-skewness

[test-image]: https://github.com/stdlib-js/stats-base-dists-triangular-skewness/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-triangular-skewness/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-triangular-skewness/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-triangular-skewness?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-triangular-skewness.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-triangular-skewness/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-triangular-skewness/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-triangular-skewness/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-triangular-skewness/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-triangular-skewness/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-triangular-skewness/main/LICENSE

[triangular-distribution]: https://en.wikipedia.org/wiki/Triangular_distribution

[skewness]: https://en.wikipedia.org/wiki/Skewness

</section>

<!-- /.links -->
