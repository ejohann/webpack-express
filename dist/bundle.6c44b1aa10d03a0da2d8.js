!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/static/",t(t.s=3)}([function(e,n,t){e.exports=t.p+"5f8c50c6b7d8ea22e9f110b707329cc3.png"},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);t(1);function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.buttonCssClass="hello-world-button"}var n,t,o;return n=e,(t=[{key:"render",value:function(){var e=document.createElement("button");e.innerHTML="Hello World",e.classList.add(this.buttonCssClass);var n=document.querySelector("body");e.onclick=function(){var e=document.createElement("p");e.innerHTML="Hello World",e.classList.add("hello-world-text"),n.appendChild(e)},n.appendChild(e)}}])&&r(n.prototype,t),o&&r(n,o),e}();t(2);function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,(t=[{key:"render",value:function(){var e=document.createElement("h1"),n=document.querySelector("body");e.innerHTML="Webpack is awesome",n.appendChild(e)}}])&&u(n.prototype,t),r&&u(n,r),e}();t(0);var c=new a,i=new o;c.render(),i.render(),console.log("production mode")}]);