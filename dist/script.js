parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mpVp":[function(require,module,exports) {
function e(e,t,n,o,r,a,i){try{var c=e[a](i),s=c.value}catch(l){return void n(l)}c.done?t(s):Promise.resolve(s).then(o,r)}function t(t){return function(){var n=this,o=arguments;return new Promise(function(r,a){var i=t.apply(n,o);function c(t){e(i,r,a,c,s,"next",t)}function s(t){e(i,r,a,c,s,"throw",t)}c(void 0)})}}var n=document.getElementById("video"),o=document.querySelector("#stopStreaming"),r=document.querySelectorAll(".img-avatar"),a=document.querySelector(".img-avatar-start"),i=document.querySelector(".avatar-lamp"),c=document.querySelector("#panelBox"),s=document.querySelector("#expression-txt"),l=document.querySelector("#expression-title"),d=document.querySelector(".loading"),u=document.querySelector("#status"),m=document.querySelector("#statusCode"),y=document.querySelector(".panel"),f=document.querySelector("#date"),p="",g="",v="",h="",x="",F="",L="",S="",q="",k="",b=new Date,w=b.toString(),T=w.split(" ").splice(0,5);f.innerText="".concat(T[0]," ").concat(T[1]," ").concat(T[2]," ").concat(T[3]," ").concat(T[4]),m.innerHTML="loading module...";var E=function(e,t){(e[0]>.6||e[0]>=1)&&("male"===t&&r.forEach(function(t){t.classList[1]==="".concat(e[1],"-male")?t.style.display="block":t.style.display="none"}),"female"===t&&r.forEach(function(t){t.classList[1]==="".concat(e[1],"-female")?t.style.display="block":t.style.display="none"}),s.innerText=e[1])};function M(){navigator.mediaDevices.getUserMedia({video:{facingMode:"user"}}).then(function(e){n.srcObject=e}).catch(function(e){console.error(e)}),m.innerHTML="start video session..."}function U(e){var t=e.srcObject,n=t.getTracks();console.log(t,n),n.forEach(function(e){e.stop()}),e.srcObject=null}Promise.all([faceapi.nets.tinyFaceDetector.loadFromUri("/models"),faceapi.nets.faceLandmark68Net.loadFromUri("/models"),faceapi.nets.faceRecognitionNet.loadFromUri("/models"),faceapi.nets.faceExpressionNet.loadFromUri("/models"),faceapi.nets.ageGenderNet.loadFromUri("/models")]).then(M),n.addEventListener("play",function(){m.innerHTML="initialize detection..",y.style.height="400px",a.style.display="block",s.innerText="...",setInterval(t(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,faceapi.detectAllFaces(n,new faceapi.TinyFaceDetectorOptions).withFaceLandmarks().withFaceExpressions().withAgeAndGender();case 2:(t=e.sent)[0]&&(p=t[0].gender,u.style.visibility="hidden",u.style.dislay="none",m.innerHTML="",d.style.display="none",a.style.display="none",i.style.backgroundColor="lightgreen",v=t[0].expressions,h=[v.angry.toFixed(2),"angry"],x=[v.neutral.toFixed(2),"neutral"],F=[v.happy.toFixed(2),"happy"],L=[v.surprised.toFixed(2),"surprised"],S=[v.disgusted.toFixed(2),"disgusted"],q=[v.fearful.toFixed(2),"fearful"],k=[v.sad.toFixed(2),"sad"],E(h,p),E(x,p),E(F,p),E(L,p),E(S,p),E(k,p));case 4:case"end":return e.stop()}},e)})),500),o.style.display="block",o.addEventListener("click",function(e){var t=e.target,o=e.target.classList[1];"icon-cross"===o&&(t.classList.remove("icon-cross"),t.classList.add("icon-refresh"),U(n)),"icon-refresh"===o&&(t.classList.remove("icon-refresh"),t.classList.add("icon-cross"),location.reload())})});
},{}]},{},["mpVp"], null)
//# sourceMappingURL=/script.js.map