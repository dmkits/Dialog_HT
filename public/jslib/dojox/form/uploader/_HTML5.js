//>>built
define("dojox/form/uploader/_HTML5",["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo"],function(f,c,g,d){return f("dojox.form.uploader._HTML5",[],{errMsg:"Error uploading files. Try checking permissions",uploadType:"html5",postMixInProperties:function(){this.inherited(arguments)},postCreate:function(){this.connectForm();this.inherited(arguments);this.uploadOnSelect&&this.connect(this,"onChange",function(a){this.upload(a[0])})},_drop:function(a){d.stopEvent(a);this._files=a.dataTransfer.files;
this.onChange(this.getFileList())},upload:function(a){this.onBegin(this.getFileList());this.uploadWithFormData(a)},addDropTarget:function(a,b){b||(this.connect(a,"dragenter",d.stopEvent),this.connect(a,"dragover",d.stopEvent),this.connect(a,"dragleave",d.stopEvent));this.connect(a,"drop","_drop")},uploadWithFormData:function(a){if(this.getUrl()){var b=new FormData,e=this._getFileFieldName();g.forEach(this._files,function(a,c){b.append(e,a)},this);if(a){a.uploadType=this.uploadType;for(var c in a)b.append(c,
a[c])}this.createXhr().send(b)}else console.error("No upload url found.",this)},_xhrProgress:function(a){if(a.lengthComputable){var b={bytesLoaded:a.loaded,bytesTotal:a.total,type:a.type,timeStamp:a.timeStamp};"load"==a.type?(b.percent="100%",b.decimal=1):(b.decimal=a.loaded/a.total,b.percent=Math.ceil(a.loaded/a.total*100)+"%");this.onProgress(b)}},createXhr:function(){var a=new XMLHttpRequest,b;a.upload.addEventListener("progress",c.hitch(this,"_xhrProgress"),!1);a.addEventListener("load",c.hitch(this,
"_xhrProgress"),!1);a.addEventListener("error",c.hitch(this,function(a){this.onError(a);clearInterval(b)}),!1);a.addEventListener("abort",c.hitch(this,function(a){this.onAbort(a);clearInterval(b)}),!1);a.onreadystatechange=c.hitch(this,function(){if(4===a.readyState){clearInterval(b);try{this.onComplete(JSON.parse(a.responseText.replace(/^\{\}&&/,"")))}catch(e){console.error("Error parsing server result:",e),console.error(a.responseText),this.onError("Error parsing server result:",e)}}});a.open("POST",
this.getUrl());a.setRequestHeader("Accept","application/json");b=setInterval(c.hitch(this,function(){}),250);return a}})});
//# sourceMappingURL=_HTML5.js.map