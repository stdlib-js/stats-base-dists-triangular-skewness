"use strict";var o=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var n=o(function(x,u){
var t=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-pow/dist'),q=require('@stdlib/constants-float64-sqrt-two/dist');function p(i,r,e){var s;return t(i)||t(r)||t(e)||!(i<=e&&e<=r)?NaN:(s=q*(i+r-2*e)*(2*i-r-e)*(i-2*r+e),s/=5*v(i*i+r*r+e*e-i*r-i*e-r*e,1.5),s)}u.exports=p
});var f=n();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
