// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,o=r.toString,n=r.__defineGetter__,i=r.__defineSetter__,l=r.__lookupGetter__,u=r.__lookupSetter__,c=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,c){var a,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof c||null===c||"[object Array]"===o.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((f="value"in c)&&(l.call(t,e)||u.call(t,e)?(a=t.__proto__,t.__proto__=r,delete t[e],t[e]=c.value,t.__proto__=a):t[e]=c.value),p="get"in c,y="set"in c,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&n&&n.call(t,e,c.get),y&&i&&i.call(t,e,c.set),t};function a(t,e,r){c(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(t){return"string"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,_=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol.toStringTag:"",d=y()?function(t){var e,r,o,n,i;if(null==t)return b.call(t);r=t[s],i=s,e=null!=(n=t)&&_.call(n,i);try{t[s]=void 0}catch(e){return b.call(t)}return o=b.call(t),e?t[s]=r:delete t[s],o}:function(t){return b.call(t)},g=String.prototype.valueOf,m=y();function v(t){return"object"==typeof t&&(t instanceof String||(m?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object String]"===d(t)))}function j(t){return f(t)||v(t)}return a(j,"isPrimitive",f),a(j,"isObject",v),j},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isString=e();
//# sourceMappingURL=browser.js.map
