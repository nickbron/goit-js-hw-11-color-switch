parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"so7W":[function(require,module,exports) {
const o=(o,t)=>Math.floor(Math.random()*(t-o+1)+o),t=t=>new Promise((n,a)=>{const e=o(200,500);setTimeout(()=>{Math.random()>.3?n({id:t.id,time:e}):a(t.id)},e)}),n=({id:o,time:t})=>{console.log(`Transaction ${o} processed in ${t}ms`)},a=o=>{console.warn(`Error processing transaction ${o}. Please try again later.`)};t({id:70,amount:150}).then(n).catch(a),t({id:71,amount:230}).then(n).catch(a);
},{}]},{},["so7W"], null)
//# sourceMappingURL=/goit-js-hw-11-color-switch/promise_task3.d572cdfd.js.map