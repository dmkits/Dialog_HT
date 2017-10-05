//>>built
define("dojox/charting/DataSeries",["dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/_base/connect","dojox/lang/functional"],function(d,g,f,e,h){return g("dojox.charting.DataSeries",null,{constructor:function(a,b,c){this.store=a;this.kwArgs=b;c?d.isFunction(c)?this.value=c:d.isObject(c)?this.value=d.hitch(this,"_dictValue",h.keys(c),c):this.value=d.hitch(this,"_fieldValue",c):this.value=d.hitch(this,"_defaultValue");this.data=[];this._events=[];this.store.getFeatures()["dojo.data.api.Notification"]&&
this._events.push(e.connect(this.store,"onNew",this,"_onStoreNew"),e.connect(this.store,"onDelete",this,"_onStoreDelete"),e.connect(this.store,"onSet",this,"_onStoreSet"));this._initialRendering=!0;this.fetch()},destroy:function(){f.forEach(this._events,e.disconnect)},setSeriesObject:function(a){this.series=a},_dictValue:function(a,b,c,d){var e={};f.forEach(a,function(a){e[a]=c.getValue(d,b[a])});return e},_fieldValue:function(a,b,c){return b.getValue(c,a)},_defaultValue:function(a,b){return a.getValue(b,
"value")},fetch:function(){if(!this._inFlight){this._inFlight=!0;var a=d.delegate(this.kwArgs);a.onComplete=d.hitch(this,"_onFetchComplete");a.onError=d.hitch(this,"onFetchError");this.store.fetch(a)}},_onFetchComplete:function(a,b){this.items=a;this._buildItemMap();this.data=f.map(this.items,function(a){return this.value(this.store,a)},this);this._pushDataChanges();this._inFlight=!1},onFetchError:function(a,b){this._inFlight=!1},_buildItemMap:function(){if(this.store.getFeatures()["dojo.data.api.Identity"]){var a=
{};f.forEach(this.items,function(b,c){a[this.store.getIdentity(b)]=c},this);this.itemMap=a}},_pushDataChanges:function(){this.series&&(this.series.chart.updateSeries(this.series.name,this,this._initialRendering),this._initialRendering=!1,this.series.chart.delayedRender())},_onStoreNew:function(){this.fetch()},_onStoreDelete:function(a){this.items&&f.some(this.items,function(b,c){return b===a?(this.items.splice(c,1),this._buildItemMap(),this.data.splice(c,1),!0):!1},this)&&this._pushDataChanges()},
_onStoreSet:function(a){if(this.itemMap){var b=this.store.getIdentity(a),b=this.itemMap[b];"number"==typeof b&&(this.data[b]=this.value(this.store,this.items[b]),this._pushDataChanges())}else this.items&&f.some(this.items,function(b,d){return b===a?(this.data[d]=this.value(this.store,b),!0):!1},this)&&this._pushDataChanges()}})});
//# sourceMappingURL=DataSeries.js.map