parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"fRxd":[function(require,module,exports) {
var t=document.querySelector("main");function e(t){for(;t.hasChildNodes();)t.lastChild.remove()}function n(n){document.querySelector(".returnToArtist").style.display="none",e(t);var i=document.createElement("h2");i.innerText="Artists",t.appendChild(i),n.forEach(function(e){var n=document.createElement("div");n.classList.add("main_content"),n.innerHTML='\n\t\t\t<img src="/images/'.concat(e.imageURL,'">\n\t\t\t<h2 id="').concat(e.name,'" data-artistId="').concat(e.id,'">\n\t\t\t\t').concat(e.name,"\n\t\t\t</h2>\n\t\t"),u(n,c,e),t.appendChild(n)}),a()}function a(){var e=document.createElement("button");e.innerText="Add Artist",e.addEventListener("click",function(){m("Artist Name:","artistName"),m("Artist Image Location:","artistUrl");var a=document.createElement("button");a.innerText="Submit",t.appendChild(a);var c=document.querySelector("#artistName"),i=document.querySelector("#artistUrl");a.addEventListener("click",function(){fetch("api/artist/add",{method:"post",body:JSON.stringify({name:c.value,imageUrl:i.value})}).then(function(t){return t.json()}).then(function(t){n(t)})}),e.remove()}),t.appendChild(e)}function c(n){document.querySelector(".returnToArtist").style.display="block",e(t),n.albums.forEach(function(e){var n=document.createElement("div");n.classList.add("main_content"),n.innerHTML+='\n\t\t\t<img src="/images/'.concat(e.image,'">\n\t\t\t<h2 id="').concat(e.name,'" data-albumId="').concat(e.id,'">\n\t\t\t\t').concat(e.name,"\n\t\t\t</h2>\n\t\t"),u(n,r,e),t.appendChild(n)}),o(n.name),i(n.tags,n.id)}function i(e,n){e.forEach(function(e){var n=document.createElement("div");n.classList.add("tag"),n.innerHTML+="\n\t\t\t<p>".concat(e.tagName,"</p>\n\t\t"),t.appendChild(n)});var a=document.createElement("button");a.innerText="Add Tag",a.addEventListener("click",function(){m("Tag:","tagName");var e=document.createElement("button"),c=document.querySelector("#tagName");e.innerText="Submit",t.appendChild(e),e.addEventListener("click",function(){fetch("api/".concat(n,"/add-tag"),{method:"post",body:JSON.stringify({name:c.value})}).then(function(t){return t.json()}).then(function(t){i(t)})}),a.remove()}),t.appendChild(a)}function o(e){var n=document.createElement("button");n.innerText="Add Album",n.addEventListener("click",function(){m("Album Name:","albumName"),m("Record Label:","recordLabel"),m("Image Location:","albumUrl");var a=document.createElement("button");a.innerText="Submit",t.appendChild(a);var i=document.querySelector("#albumName"),o=document.querySelector("#recordLabel"),r=document.querySelector("#albumUrl");a.addEventListener("click",function(){fetch("api/album/add",{method:"post",body:JSON.stringify({name:i.value,recordLabel:o.value,imageUrl:r.value,artistName:e})}).then(function(t){return t.json()}).then(function(t){c(t)})}),n.remove()}),t.appendChild(n)}function r(n){document.querySelector(".returnToArtist").style.display="block",e(t),n.songs.forEach(function(e){var n=document.createElement("div");n.classList.add("main_content"),n.innerHTML+='\n\t\t\t<div class="song_item">\n\t\t\t\t<h2 id="'.concat(e.name,'" data-songId="').concat(e.id,'">\n\t\t\t\t\t').concat(e.name,"\n\t\t\t\t</h2>\n\t\t\t\t<h4>").concat(e.time,"</h4>\n\t\t\t\t</div>\n\t\t"),t.appendChild(n)}),d(n.name),i(n.tags,n.id)}function d(e){var n=document.createElement("button");n.innerText="Add Song",n.addEventListener("click",function(){m("Song Name:","songName"),m("Run Time:","songLength");var a=document.createElement("button");a.innerText="Submit",t.appendChild(a);var c=document.querySelector("#songName"),i=document.querySelector("#songLength");a.addEventListener("click",function(){fetch("api/song/add",{method:"post",body:JSON.stringify({name:c.value,length:i.value,album:e})}).then(function(t){return t.json()}).then(function(t){r(t)})}),n.remove()}),t.appendChild(n)}function m(e,n){var a=document.createElement("input"),c=document.createElement("label");c.innerText=e,a.id=n,a.setAttribute("type","text"),c.appendChild(a),t.appendChild(c)}function u(t,e,n){t.addEventListener("click",function(){e(n)})}module.exports={makeArtistMain:n,makeAlbumMain:c,makeSongMain:r,makeForms:m};
},{}],"A2T1":[function(require,module,exports) {
function n(n){return fetch("/api/".concat(n)).then(function(n){return n.json()})}module.exports={fetchCall:n};
},{}],"Focm":[function(require,module,exports) {
var e=require("./dom.js"),t=e.makeArtistMain,n=e.makeAlbumMain,r=e.makeSongMain,i=require("./app.js"),a=i.fetchCall;a("artists").then(function(e){console.log(e),t(e)});var o=document.querySelector(".returnToArtist");o.addEventListener("click",function(){a("artists").then(function(e){t(e)})});
},{"./dom.js":"fRxd","./app.js":"A2T1"}]},{},["Focm"], null)
//# sourceMappingURL=/index.map