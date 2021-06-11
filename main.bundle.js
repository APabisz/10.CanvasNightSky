!function(){"use strict";var e,t,r,n,i,o,a,s={159:function(e,t,r){r(180);class n{constructor(e){this.canvas=e,this.ctx=e.getContext("2d"),this.width=window.innerWidth,this.height=window.innerHeight,this.lastConstellation=0,this.nextConstellation=3e3*Math.random(),this.constellation={stars:[],isClosed:!1,width:null},this.lastUpdate=0}initCanvas(){this.canvas.width=this.width,this.canvas.height=this.height,this.ctx.fillStyle="#000000",this.ctx.fillRect(0,0,this.width,this.height)}generateStars(e){let t=[];for(let r=0;r<e;r++){const e=3*Math.random()+3;t.push({x:Math.random()*this.width,y:Math.random()*this.height,radius:e,originalRadius:e,rotation:360*Math.random()*(Math.PI/180),color:"#e3bc4f",speed:Math.random()/8+.1})}this.stars=t}drawStars(){this.stars.forEach((e=>this.drawStar(e)))}generateRandomConstellation(){const e=this.width/2+.8*Math.random()*this.width-this.width/2,t=this.height/2+.8*Math.random()*this.height-this.height/2,r=this.height/2*Math.random()*.5+.5,n=this.stars.filter((n=>n.x>e-r&&n.x<e+r&&n.y>t-r&&n.y<t+r)).sort((()=>Math.random()-.5)).slice(0,Math.round(5*Math.random()+3));this.constellation={stars:n,drawBack:n.map((()=>Math.random()>.8)),isClosed:Math.random()>.5,width:4}}updateConstellation(){this.constellation.width>0?this.constellation.width-=this.delta/8*.015:this.constellation.width=0}drawConstellation(){const{stars:e,isClosed:t,width:r,drawBack:n}=this.constellation,i=e.length;if(i>2){const o=e[0];this.ctx.beginPath(),this.ctx.moveTo(o.x,o.y),this.ctx.lineTo(e[1].x,e[1].y);for(let t=1;t<i-1;t++){const r=e[t],i=e[t+1];this.ctx.lineTo(i.x,i.y),n[t]&&this.ctx.lineTo(r.x,r.y)}t&&this.ctx.lineTo(o.x,o.y),this.ctx.lineWidth=r,this.ctx.strokeStyle="#d4a642",this.ctx.stroke()}}drawOverlayer(){let e=this.ctx.createRadialGradient(this.width/2,this.height/2,Math.min(this.height/4,this.width/4,250),this.width/2,this.height/2,this.width/2);e.addColorStop(0,"rgba(0,0,0,0)"),this.width>1e3&&this.height>600?e.addColorStop(1,"rgba(0,0,0,0.65)"):this.width>500&&this.height>500?e.addColorStop(1,"rgba(0,0,0,0.50)"):e.addColorStop(1,"rgba(0,0,0,0.35)"),this.ctx.fillStyle=e,this.ctx.fillRect(0,0,this.width,this.height)}clearCanvas(){this.ctx.fillStyle="#000",this.ctx.fillRect(0,0,this.width,this.height)}drawStar(e){this.ctx.save(),this.ctx.fillStyle=e.color,this.ctx.beginPath(),this.ctx.translate(e.x,e.y),this.ctx.rotate(e.rotation),this.ctx.moveTo(0,0-e.radius);for(let t=0;t<5;t++)this.ctx.rotate(Math.PI/180*36),this.ctx.lineTo(0,0-.6*e.radius),this.ctx.rotate(Math.PI/180*36),this.ctx.lineTo(0,0-e.radius);this.ctx.fill(),this.ctx.restore()}updateStars(){this.stars.forEach((e=>{e.x+=e.speed*(this.delta/8),e.y-=e.speed*(this.delta/8)*(this.width/2-e.x)/2e3,e.radius=e.originalRadius*(Math.random()/5+.9),e.x>this.width+2*e.radius&&(e.x=-2*e.radius),e.y<-2*e.radius?e.y=this.height+2*e.radius:e.y>this.height+2*e.radius&&(e.y=-2*e.radius)}))}draw(e){this.delta=e-this.lastUpdate,this.clearCanvas(),this.drawStars(),this.updateStars(),this.drawConstellation(),this.updateConstellation(),this.drawOverlayer(),e-this.lastConstellation>this.nextConstellation&&(this.lastConstellation=e,this.nextConstellation=1500*Math.random()+3e3,this.generateRandomConstellation()),this.lastUpdate=e,window.requestAnimationFrame((e=>this.draw(e)))}run(e){this.initCanvas(),this.generateStars(e),this.draw(0)}}document.addEventListener("DOMContentLoaded",(()=>{const e=new n(document.querySelector("#canvas")),t=Math.floor(window.innerHeight*window.innerWidth/1200);e.run(t)}))},783:function(e,t,r){var n=r(618),i=Object.create(null),o="undefined"==typeof document,a=Array.prototype.forEach;function s(){}function c(e,t){if(!t){if(!e.href)return;t=e.href.split("?")[0]}if(l(t)&&!1!==e.isLoaded&&t&&t.indexOf(".css")>-1){e.visited=!0;var r=e.cloneNode();r.isLoaded=!1,r.addEventListener("load",(function(){r.isLoaded||(r.isLoaded=!0,e.parentNode.removeChild(e))})),r.addEventListener("error",(function(){r.isLoaded||(r.isLoaded=!0,e.parentNode.removeChild(e))})),r.href="".concat(t,"?").concat(Date.now()),e.nextSibling?e.parentNode.insertBefore(r,e.nextSibling):e.parentNode.appendChild(r)}}function d(){var e=document.querySelectorAll("link");a.call(e,(function(e){!0!==e.visited&&c(e)}))}function l(e){return!!/^https?:/i.test(e)}e.exports=function(e,t){if(o)return console.log("no window.document found, will not HMR CSS"),s;var r,h,u=function(e){var t=i[e];if(!t){if(document.currentScript)t=document.currentScript.src;else{var r=document.getElementsByTagName("script"),o=r[r.length-1];o&&(t=o.src)}i[e]=t}return function(e){if(!t)return null;var r=t.split(/([^\\/]+)\.js$/),i=r&&r[1];return i&&e?e.split(",").map((function(e){var r=new RegExp("".concat(i,"\\.js$"),"g");return n(t.replace(r,"".concat(e.replace(/{fileName}/g,i),".css")))})):[t.replace(".js",".css")]}}(e);return r=function(){var e=u(t.filename),r=function(e){if(!e)return!1;var t=document.querySelectorAll("link"),r=!1;return a.call(t,(function(t){if(t.href){var i=function(e,t){var r;return e=n(e,{stripWWW:!1}),t.some((function(n){e.indexOf(t)>-1&&(r=n)})),r}(t.href,e);l(i)&&!0!==t.visited&&i&&(c(t,i),r=!0)}})),r}(e);if(t.locals)return console.log("[HMR] Detected local css modules. Reload all css"),void d();r?console.log("[HMR] css reload %s",e.join(" ")):(console.log("[HMR] Reload all css"),d())},50,h=0,function(){var e=this,t=arguments,n=function(){return r.apply(e,t)};clearTimeout(h),h=setTimeout(n,50)}}},618:function(e){e.exports=function(e){if(e=e.trim(),/^data:/i.test(e))return e;var t=-1!==e.indexOf("//")?e.split("//")[0]+"//":"",r=e.replace(new RegExp(t,"i"),"").split("/"),n=r[0].toLowerCase().replace(/\.$/,"");return r[0]="",t+n+r.reduce((function(e,t){switch(t){case"..":e.pop();break;case".":break;default:e.push(t)}return e}),[]).join("/")}},180:function(e,t,r){var n=r(783)(e.id,{locals:!1});e.hot.dispose(n),e.hot.accept(void 0,n)}},c={};function d(e){var t=c[e];if(void 0!==t){if(void 0!==t.error)throw t.error;return t.exports}var r=c[e]={id:e,exports:{}};try{var n={id:e,module:r,factory:s[e],require:d};d.i.forEach((function(e){e(n)})),r=n.module,n.factory.call(r.exports,r,r.exports,n.require)}catch(e){throw r.error=e,e}return r.exports}d.m=s,d.c=c,d.i=[],d.hu=function(e){return e+"."+d.h()+".hot-update.js"},d.miniCssF=function(e){},d.hmrF=function(){return"main."+d.h()+".hot-update.json"},d.h=function(){return"1eab81ac51c494e0bdb4"},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},t="wp-minimalist-boilerplate:",d.l=function(r,n,i,o){if(e[r])e[r].push(n);else{var a,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var h=c[l];if(h.getAttribute("src")==r||h.getAttribute("data-webpack")==t+i){a=h;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,d.nc&&a.setAttribute("nonce",d.nc),a.setAttribute("data-webpack",t+i),a.src=r),e[r]=[n];var u=function(t,n){a.onerror=a.onload=null,clearTimeout(f);var i=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),s&&document.head.appendChild(a)}},function(){var e,t,r,n,i={},o=d.c,a=[],s=[],c="idle";function l(e){c=e;for(var t=0;t<s.length;t++)s[t].call(null,e)}function h(e){if(0===t.length)return e();var r=t;return t=[],Promise.all(r).then((function(){return h(e)}))}function u(e){if("idle"!==c)throw new Error("check() is only allowed in idle status");return l("check"),d.hmrM().then((function(n){if(!n)return l(m()?"ready":"idle"),null;l("prepare");var i=[];return t=[],r=[],Promise.all(Object.keys(d.hmrC).reduce((function(e,t){return d.hmrC[t](n.c,n.r,n.m,e,r,i),e}),[])).then((function(){return h((function(){return e?p(e):(l("ready"),i)}))}))}))}function f(e){return"ready"!==c?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):p(e)}function p(e){e=e||{},m();var t=r.map((function(t){return t(e)}));r=void 0;var i,o=t.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return l("abort"),Promise.resolve().then((function(){throw o[0]}));l("dispose"),t.forEach((function(e){e.dispose&&e.dispose()})),l("apply");var a=function(e){i||(i=e)},s=[];return t.forEach((function(e){if(e.apply){var t=e.apply(a);if(t)for(var r=0;r<t.length;r++)s.push(t[r])}})),i?(l("fail"),Promise.resolve().then((function(){throw i}))):n?p(e).then((function(e){return s.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e})):(l("idle"),Promise.resolve(s))}function m(){if(n)return r||(r=[]),Object.keys(d.hmrI).forEach((function(e){n.forEach((function(t){d.hmrI[e](t,r)}))})),n=void 0,!0}d.hmrD=i,d.i.push((function(p){var m,v,g,y,w=p.module,x=function(r,n){var i=o[n];if(!i)return r;var s=function(t){if(i.hot.active){if(o[t]){var s=o[t].parents;-1===s.indexOf(n)&&s.push(n)}else a=[n],e=t;-1===i.children.indexOf(t)&&i.children.push(t)}else console.warn("[HMR] unexpected require("+t+") from disposed module "+n),a=[];return r(t)},d=function(e){return{configurable:!0,enumerable:!0,get:function(){return r[e]},set:function(t){r[e]=t}}};for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&"e"!==u&&Object.defineProperty(s,u,d(u));return s.e=function(e){return function(e){switch(c){case"ready":return l("prepare"),t.push(e),h((function(){l("ready")})),e;case"prepare":return t.push(e),e;default:return e}}(r.e(e))},s}(p.require,p.id);w.hot=(m=p.id,v=w,y={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:g=e!==m,_requireSelf:function(){a=v.parents.slice(),e=g?void 0:m,d(m)},active:!0,accept:function(e,t,r){if(void 0===e)y._selfAccepted=!0;else if("function"==typeof e)y._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)y._acceptedDependencies[e[n]]=t||function(){},y._acceptedErrorHandlers[e[n]]=r;else y._acceptedDependencies[e]=t||function(){},y._acceptedErrorHandlers[e]=r},decline:function(e){if(void 0===e)y._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)y._declinedDependencies[e[t]]=!0;else y._declinedDependencies[e]=!0},dispose:function(e){y._disposeHandlers.push(e)},addDisposeHandler:function(e){y._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=y._disposeHandlers.indexOf(e);t>=0&&y._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,c){case"idle":r=[],Object.keys(d.hmrI).forEach((function(e){d.hmrI[e](m,r)})),l("ready");break;case"ready":Object.keys(d.hmrI).forEach((function(e){d.hmrI[e](m,r)}));break;case"prepare":case"check":case"dispose":case"apply":(n=n||[]).push(m)}},check:u,apply:f,status:function(e){if(!e)return c;s.push(e)},addStatusHandler:function(e){s.push(e)},removeStatusHandler:function(e){var t=s.indexOf(e);t>=0&&s.splice(t,1)},data:i[m]},e=void 0,y),w.parents=a,w.children=[],a=[],p.require=x})),d.hmrC={},d.hmrI={}}(),function(){var e;d.g.importScripts&&(e=d.g.location+"");var t=d.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),d.p=e}(),r=function(e,t,r,n){var i=document.createElement("link");return i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=function(o){if(i.onerror=i.onload=null,"load"===o.type)r();else{var a=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=s,i.parentNode.removeChild(i),n(c)}},i.href=t,document.head.appendChild(i),i},n=function(e,t){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var i=(a=r[n]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(i===e||i===t))return a}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){var a;if((i=(a=o[n]).getAttribute("data-href"))===e||i===t)return a}},i=[],o=[],a=function(e){return{dispose:function(){for(var e=0;e<i.length;e++){var t=i[e];t.parentNode&&t.parentNode.removeChild(t)}i.length=0},apply:function(){for(var e=0;e<o.length;e++)o[e].rel="stylesheet";o.length=0}}},d.hmrC.miniCss=function(e,t,s,c,l,h){l.push(a),e.forEach((function(e){var t=d.miniCssF(e),a=d.p+t,s=n(t,a);s&&c.push(new Promise((function(t,n){var c=r(e,a,(function(){c.as="style",c.rel="preload",t()}),n);i.push(s),o.push(c)})))}))},function(){var e,t,r,n,i={179:0},o={};function a(e){return new Promise((function(t,r){o[e]=t;var n=d.p+d.hu(e),i=new Error;d.l(n,(function(t){if(o[e]){o[e]=void 0;var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading hot update chunk "+e+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,r(i)}}))}))}function s(o){function a(e){for(var t=[e],r={},n=t.map((function(e){return{chain:[e],id:e}}));n.length>0;){var i=n.pop(),o=i.id,a=i.chain,c=d.c[o];if(c&&(!c.hot._selfAccepted||c.hot._selfInvalidated)){if(c.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:o};if(c.hot._main)return{type:"unaccepted",chain:a,moduleId:o};for(var l=0;l<c.parents.length;l++){var h=c.parents[l],u=d.c[h];if(u){if(u.hot._declinedDependencies[o])return{type:"declined",chain:a.concat([h]),moduleId:o,parentId:h};-1===t.indexOf(h)&&(u.hot._acceptedDependencies[o]?(r[h]||(r[h]=[]),s(r[h],[o])):(delete r[h],t.push(h),n.push({chain:a.concat([h]),id:h})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}d.f&&delete d.f.jsonpHmr,e=void 0;var c={},l=[],h={},u=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var f in t)if(d.o(t,f)){var p,m=t[f],v=!1,g=!1,y=!1,w="";switch((p=m?a(f):{type:"disposed",moduleId:f}).chain&&(w="\nUpdate propagation: "+p.chain.join(" -> ")),p.type){case"self-declined":o.onDeclined&&o.onDeclined(p),o.ignoreDeclined||(v=new Error("Aborted because of self decline: "+p.moduleId+w));break;case"declined":o.onDeclined&&o.onDeclined(p),o.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+p.moduleId+" in "+p.parentId+w));break;case"unaccepted":o.onUnaccepted&&o.onUnaccepted(p),o.ignoreUnaccepted||(v=new Error("Aborted because "+f+" is not accepted"+w));break;case"accepted":o.onAccepted&&o.onAccepted(p),g=!0;break;case"disposed":o.onDisposed&&o.onDisposed(p),y=!0;break;default:throw new Error("Unexception type "+p.type)}if(v)return{error:v};if(g)for(f in h[f]=m,s(l,p.outdatedModules),p.outdatedDependencies)d.o(p.outdatedDependencies,f)&&(c[f]||(c[f]=[]),s(c[f],p.outdatedDependencies[f]));y&&(s(l,[p.moduleId]),h[f]=u)}t=void 0;for(var x,b=[],E=0;E<l.length;E++){var C=l[E],_=d.c[C];_&&(_.hot._selfAccepted||_.hot._main)&&h[C]!==u&&!_.hot._selfInvalidated&&b.push({module:C,require:_.hot._requireSelf,errorHandler:_.hot._selfAccepted})}return{dispose:function(){var e;r.forEach((function(e){delete i[e]})),r=void 0;for(var t,n=l.slice();n.length>0;){var o=n.pop(),a=d.c[o];if(a){var s={},h=a.hot._disposeHandlers;for(E=0;E<h.length;E++)h[E].call(null,s);for(d.hmrD[o]=s,a.hot.active=!1,delete d.c[o],delete c[o],E=0;E<a.children.length;E++){var u=d.c[a.children[E]];u&&(e=u.parents.indexOf(o))>=0&&u.parents.splice(e,1)}}}for(var f in c)if(d.o(c,f)&&(a=d.c[f]))for(x=c[f],E=0;E<x.length;E++)t=x[E],(e=a.children.indexOf(t))>=0&&a.children.splice(e,1)},apply:function(e){for(var t in h)d.o(h,t)&&(d.m[t]=h[t]);for(var r=0;r<n.length;r++)n[r](d);for(var i in c)if(d.o(c,i)){var a=d.c[i];if(a){x=c[i];for(var s=[],u=[],f=[],p=0;p<x.length;p++){var m=x[p],v=a.hot._acceptedDependencies[m],g=a.hot._acceptedErrorHandlers[m];if(v){if(-1!==s.indexOf(v))continue;s.push(v),u.push(g),f.push(m)}}for(var y=0;y<s.length;y++)try{s[y].call(null,x)}catch(t){if("function"==typeof u[y])try{u[y](t,{moduleId:i,dependencyId:f[y]})}catch(r){o.onErrored&&o.onErrored({type:"accept-error-handler-errored",moduleId:i,dependencyId:f[y],error:r,originalError:t}),o.ignoreErrored||(e(r),e(t))}else o.onErrored&&o.onErrored({type:"accept-errored",moduleId:i,dependencyId:f[y],error:t}),o.ignoreErrored||e(t)}}}for(var w=0;w<b.length;w++){var E=b[w],C=E.module;try{E.require(C)}catch(t){if("function"==typeof E.errorHandler)try{E.errorHandler(t,{moduleId:C,module:d.c[C]})}catch(r){o.onErrored&&o.onErrored({type:"self-accept-error-handler-errored",moduleId:C,error:r,originalError:t}),o.ignoreErrored||(e(r),e(t))}else o.onErrored&&o.onErrored({type:"self-accept-errored",moduleId:C,error:t}),o.ignoreErrored||e(t)}}return l}}}self.webpackHotUpdatewp_minimalist_boilerplate=function(e,r,i){for(var a in r)d.o(r,a)&&(t[a]=r[a]);i&&n.push(i),o[e]&&(o[e](),o[e]=void 0)},d.hmrI.jsonp=function(e,i){t||(t={},n=[],r=[],i.push(s)),d.o(t,e)||(t[e]=d.m[e])},d.hmrC.jsonp=function(o,c,l,h,u,f){u.push(s),e={},r=c,t=l.reduce((function(e,t){return e[t]=!1,e}),{}),n=[],o.forEach((function(t){d.o(i,t)&&void 0!==i[t]&&(h.push(a(t)),e[t]=!0)})),d.f&&(d.f.jsonpHmr=function(t,r){e&&!d.o(e,t)&&d.o(i,t)&&void 0!==i[t]&&(r.push(a(t)),e[t]=!0)})},d.hmrM=function(){if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(d.p+d.hmrF()).then((function(e){if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}}(),d(159)}();