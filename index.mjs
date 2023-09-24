// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.0.7-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-sqrt-two@v0.1.0-esm/index.mjs";function n(n,i,r){var m;return s(n)||s(i)||s(r)||!(n<=r&&r<=i)?NaN:(m=e*(n+i-2*r)*(2*n-i-r)*(n-2*i+r),m/=5*t(n*n+i*i+r*r-n*i-n*r-i*r,1.5))}export{n as default};
//# sourceMappingURL=index.mjs.map
