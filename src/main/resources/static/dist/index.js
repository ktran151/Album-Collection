parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"fRxd":[function(require,module,exports) {
function t(t){var e=document.createElement("main");t.forEach(function(t){var a=document.createElement("div");a.innerHTML='\n\t\t\t<h2 id="'.concat(t.name,'" data-artistId="').concat(t.id,'">\n\t\t\t\t').concat(t.name,"\n\t\t\t</h2>\n\t\t"),a.addEventListener("click",function(){console.log("click"),n(t.albums)}),e.appendChild(a)}),document.body.appendChild(e)}function n(t){var n=document.createElement("main");t.forEach(function(t){var a=document.createElement("div");a.innerHTML+='\n\t\t\t<h2 id="'.concat(t.name,'" data-albumId="').concat(t.id,'">\n\t\t\t\t').concat(t.name,"\n\t\t\t</h2>\n\t\t"),a.addEventListener("click",function(){e(t.songs)}),n.appendChild(a)}),document.querySelector("main").remove(),document.body.appendChild(n)}function e(t){console.log(t);var n=document.createElement("main");t.forEach(function(t){var e=document.createElement("div");e.innerHTML+='\n\t\t\t<h2 id="'.concat(t.name,'" data-songId="').concat(t.id,'">\n\t\t\t\t').concat(t.name,"\n\t\t\t</h2>\n\t\t"),n.appendChild(e)}),document.querySelector("main").remove(),document.body.append(n)}module.exports={makeArtistMain:t,makeAlbumMain:n,makeSongMain:e};
},{}],"A2T1":[function(require,module,exports) {
function n(n){return fetch("/api/".concat(n)).then(function(n){return n.json()})}module.exports={fetchCall:n};
},{}],"Focm":[function(require,module,exports) {
var a=require("./dom.js"),e=a.makeArtistMain,i=a.makeAlbumMain,n=a.makeSongMain,r=require("./app.js"),t=r.fetchCall;t("artists").then(function(a){console.log(a),e(a)});
},{"./dom.js":"fRxd","./app.js":"A2T1"}]},{},["Focm"], null)
//# sourceMappingURL=/index.map