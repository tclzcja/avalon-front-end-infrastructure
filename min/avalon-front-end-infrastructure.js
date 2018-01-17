window.HTMLElement.prototype.importCustomElementTemplateFromHTMLImport=function(){this.innerHTML=document.querySelector('link[href*="'+this.tagName.toLowerCase()+'.html"]').import.querySelector("template").innerHTML};{const t=this.require?require("fs"):null,n=this.require?require("url").URL:null;window.HTMLScriptElement.prototype.loadSameNameHTML=function(e){let o=document.currentScript.src.substr(0,document.currentScript.src.lastIndexOf("."))+".html";t?(o=new n(decodeURI(o)),t.readFile(o,function(t,n){if(t)throw t;e(n)})):fetch(o).then(function(t){t.text().then(function(t){e(t)},function(t){throw t})},function(t){throw t})}}if(HTMLTemplateElement.prototype.getFirstElementChild=function(){let t=document.createElement("div");return t.innerHTML=this.innerHTML,t.firstElementChild},window.location.staticAssign=function(t){window.history.pushState(null,null,t),window.dispatchEvent(new Event("popstate"))},window.location.getPathLastSegment=function(){window.location.path;return window.location.pathname.split("/").pop()},window.location.getParam=function(t){let n={},e=window.location.search.substr(1).split("&");for(let t=0;t<e.length;t++){let o=e[t].split("=");n[o[0]]=o[1]}return n[t]||""},window.Math.randomRange=function(t,n){return Math.floor(Math.random()*(n-t+1))+t},window.Number.prototype.toRad=function(){return this*Math.PI/180},window.Math.calculateDistance=function(t,n,e,o){let a=(e-t).toRad(),r=(o-n).toRad(),i=Math.sin(a/2)*Math.sin(a/2)+Math.cos(t.toRad())*Math.cos(e.toRad())*Math.sin(r/2)*Math.sin(r/2);return 6371*(2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i)))},window.avalon={},window.avalon.api={},window.avalon.api.targetUrl="",window.avalon.api.processResultByContentType=async function(t){if(200!==t.status)throw window.avalon.error.trigger("Avalon Front End Infrastructure API",t.statusText),new Error(t.statusText);switch(t.headers.get("Content-Type")){case"application/json":return await t.json();case"multipart/form-data":return await t.formData();case"text/plain":case"text/html":return await t.text();default:return await t.blob()}},window.avalon.api.get=async function(t,n){const e=window.avalon.auth;let o=Object.keys(n).map(t=>t+"="+n[t]).join("&"),a=new Headers;a.append("Content-Type","text/plain"),a.append("Authorization",e.get());let r={method:"GET",mode:"cors",headers:a},i=await fetch(window.avalon.api.targetUrl+t+"?"+o,r);return window.avalon.api.processResultByContentType(i)},window.avalon.api.put=async function(t,n){const e=window.avalon.auth;let o=new Headers;switch(!0){case n instanceof window.File:o.set("Content-Type",n.type);break;case"object"==typeof n:o.set("Content-Type","application/json"),n=JSON.stringify(n);break;case"string"==typeof n:o.set("Content-Type","text/plain")}o.append("Authorization",e.get());let a={method:"PUT",mode:"cors",headers:o,body:n},r=await fetch(window.avalon.api.targetUrl+t,a);return window.avalon.api.processResultByContentType(r)},window.avalon.api.delete=async function(t,n){const e=window.avalon.auth;let o=new Headers;o.append("Content-Type","application/json"),o.append("Authorization",e.get());let a={method:"DELETE",mode:"cors",headers:o,body:JSON.stringify(n)},r=await fetch(window.avalon.api.targetUrl+t,a);return window.avalon.api.processResultByContentType(r)},document.head.querySelector('meta[name="avalon-front-end-infrastructure-api-url"]')){let t=document.head.querySelector('meta[name="avalon-front-end-infrastructure-api-url"]').content.split(",");for(let n of t){let t=new window.URL(n);window.location.hostname===t.hostname&&(window.avalon.api.targetUrl=n)}window.avalon.api.targetUrl||(window.avalon.api.targetUrl=t[0])}window.avalon.auth={};{let t=null;window.avalon.auth.set=function(n){t=n},window.avalon.auth.get=function(){return t}}window.avalon.error={},window.avalon.error.e=new Set,window.avalon.error.register=function(t){window.avalon.error.e.add(t)},window.avalon.error.unregister=function(t){window.avalon.error.e.delete(t)},window.avalon.error.trigger=function(t,n){for(let e of window.avalon.error.e)e.dispatchEvent(new CustomEvent("ERROR",{detail:{source:t,text:n}}))},window.avalon.util={},window.avalon.util.sleep=function(t){return new Promise(n=>setTimeout(n,t))};