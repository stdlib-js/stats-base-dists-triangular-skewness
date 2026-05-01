"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=o(function(x,u){
var t=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-pow/dist'),q=require('@stdlib/constants-float64-sqrt-two/dist');function p(e,r,i){var s;return t(e)||t(r)||t(i)||!(e<=i&&i<=r)?NaN:(s=q*(e+r-2*i)*(2*e-r-i)*(e-2*r+i),s/=5*v(e*e+r*r+i*i-e*r-e*i-r*i,1.5),s)}u.exports=p
});var f=n();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
