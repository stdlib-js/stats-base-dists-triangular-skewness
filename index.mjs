// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-sqrt-two@esm/index.mjs";var r=s,n=t,a=e;var i=function(s,t,e){var i;return r(s)||r(t)||r(e)||!(s<=e&&e<=t)?NaN:(i=a*(s+t-2*e)*(2*s-t-e)*(s-2*t+e),i/=5*n(s*s+t*t+e*e-s*t-s*e-t*e,1.5))};export{i as default};
//# sourceMappingURL=index.mjs.map
