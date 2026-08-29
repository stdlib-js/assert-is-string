"use strict";var t=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(O){throw (e=0, O)}};};var i=t(function(R,u){
function S(r){return typeof r=="string"}u.exports=S
});var c=t(function(k,a){
var x=String.prototype.valueOf;a.exports=x
});var f=t(function(w,o){
var b=c();function j(r){try{return b.call(r),!0}catch(e){return!1}}o.exports=j
});var s=t(function(z,v){
var l=require('@stdlib/assert-has-tostringtag-support/dist'),y=require('@stdlib/utils-native-class/dist'),m=f(),P=l();function h(r){return typeof r=="object"?r instanceof String?!0:P?m(r):y(r)==="[object String]":!1}v.exports=h
});var q=t(function(A,p){
var T=i(),d=s();function C(r){return T(r)||d(r)}p.exports=C
});var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),n=q(),F=i(),G=s();g(n,"isPrimitive",F);g(n,"isObject",G);module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
