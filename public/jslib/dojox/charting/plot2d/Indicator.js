//>>built
define("dojox/charting/plot2d/Indicator","dojo/_base/lang dojo/_base/array dojo/_base/declare ./CartesianBase ./_PlotEvents ./common ../axis2d/common dojox/gfx dojox/lang/utils dojox/gfx/fx dojo/has".split(" "),function(C,G,t,I,J,w,K,u,D,L,H){var M=function(b,c){var e=b.declaredClass,a;if(-1!=e.indexOf("svg"))try{return C.mixin({},b.rawNode.getBBox())}catch(E){}else{if(-1!=e.indexOf("vml")){var d=b.rawNode,g=d.style.display;d.style.display="inline";e=u.pt2px(parseFloat(d.currentStyle.width));a=u.pt2px(parseFloat(d.currentStyle.height));
e={x:0,y:0,width:e,height:a};z(b,e);d.style.display=g;return e}if(-1!=e.indexOf("silverlight"))return z(b,{width:b.rawNode.actualWidth,height:b.rawNode.actualHeight},.75);if(b.getTextWidth)return e=b.getTextWidth(),d=b.getFont(),a=u.normalizedLength(d?d.size:u.defaultFont.size),e={width:e,height:a},z(b,e,.75),e}return null},z=function(b,c,e){var a=c.width,d=c.height;b=b.getShape();switch(b.align){case "end":c.x=b.x-a;break;case "middle":c.x=b.x-a/2;break;default:c.x=b.x}c.y=b.y-d*(e||1);return c};
t=t("dojox.charting.plot2d.Indicator",[I,J],{defaultParams:{vertical:!0,fixed:!0,precision:0,lines:!0,labels:"line",markers:!0},optionalParams:{lineStroke:{},outlineStroke:{},shadowStroke:{},lineFill:{},stroke:{},outline:{},shadow:{},fill:{},fillFunc:null,labelFunc:null,font:"",fontColor:"",markerStroke:{},markerOutline:{},markerShadow:{},markerFill:{},markerSymbol:"",values:[],offset:{},start:!1,animate:!1},constructor:function(b,c){this.opt=C.clone(this.defaultParams);D.updateWithObject(this.opt,
c);"number"==typeof c.values&&(c.values=[c.values]);D.updateWithPattern(this.opt,c,this.optionalParams);this.animate=this.opt.animate},render:function(b,c){if(this.zoom)return this.performZoom(b,c);if(!this.isDirty())return this;this.cleanGroup(null,!0);if(!this.opt.values)return this;this._updateIndicator();return this},_updateIndicator:function(){var b=this.chart.theme,c=this._hAxis.name,e=this._vAxis.name,a=this._hAxis.getScaler().bounds,d=this._vAxis.getScaler().bounds,g={};g[c]=a.from;g[e]=d.from;
var E=this.toPage(g);g[c]=a.to;g[e]=d.to;var F=this.toPage(g),l=this.events(),a=G.map(this.opt.values,function(a,b){return this._renderIndicator(a,b,c,e,E,F,l,this.animate)},this),d=a.length;if("trend"==this.opt.labels){var g=this.opt.vertical,h=this._data[0][0],k=this._data[d-1][0]-h,h=this.opt.labelFunc?this.opt.labelFunc(-1,this.values,this._data,this.opt.fixed,this.opt.precision):w.getLabel(k,this.opt.fixed,this.opt.precision)+" ("+w.getLabel(100*k/h,!0,2)+"%)";this._renderText(this.getGroup(),
h,this.chart.theme,g?(a[0].x+a[d-1].x)/2:a[1].x,g?a[0].y:(a[1].y+a[d-1].y)/2,-1,this.opt.values,this._data)}(b=void 0!=this.opt.lineFill?this.opt.lineFill:b.indicator.lineFill)&&1<d&&(g=Math.min(a[0].x1,a[d-1].x1),h=Math.min(a[0].y1,a[d-1].y1),this.getGroup().createRect({x:g,y:h,width:Math.max(a[0].x2,a[d-1].x2)-g,height:Math.max(a[0].y2,a[d-1].y2)-h}).setFill(b).moveToBack())},_renderIndicator:function(b,c,e,a,d,g,E,F){var l=this.chart.theme,h=this.chart.getCoords(),k=this.opt.vertical,v=this.getGroup().createGroup(),
f={};f[e]=k?b:0;f[a]=k?0:b;H("dojo-bidi")&&(f.x=this._getMarkX(f.x));var f=this.toPage(f),q=k?f.x>=d.x&&f.x<=g.x:f.y>=g.y&&f.y<=d.y,t=f.x-h.x,u=f.y-h.y,m=k?t:d.x-h.x,n=k?d.y-h.y:u,A=k?m:g.x-h.x,x=k?g.y-h.y:n;if(this.opt.lines&&q){var r=this.opt.hasOwnProperty("lineShadow")?this.opt.lineShadow:l.indicator.lineShadow,y=this.opt.hasOwnProperty("lineStroke")?this.opt.lineStroke:l.indicator.lineStroke,p=this.opt.hasOwnProperty("lineOutline")?this.opt.lineOutline:l.indicator.lineOutline;r&&v.createLine({x1:m+
r.dx,y1:n+r.dy,x2:A+r.dx,y2:x+r.dy}).setStroke(r);p&&(p=w.makeStroke(p),p.width=2*p.width+(y?y.width:0),v.createLine({x1:m,y1:n,x2:A,y2:x}).setStroke(p));v.createLine({x1:m,y1:n,x2:A,y2:x}).setStroke(y)}var z;if(this.opt.markers&&q){var B=this._data[c],D=this;B&&(z=G.map(B,function(c,q){f[e]=k?b:c;f[a]=k?c:b;H("dojo-bidi")&&(f.x=D._getMarkX(f.x));f=this.toPage(f);if(k?f.y<=d.y&&f.y>=g.y:f.x>=d.x&&f.x<=g.x){t=f.x-h.x;u=f.y-h.y;var m=this.opt.markerSymbol?this.opt.markerSymbol:l.indicator.markerSymbol,
n="M"+t+" "+u+" "+m;r=void 0!=this.opt.markerShadow?this.opt.markerShadow:l.indicator.markerShadow;y=void 0!=this.opt.markerStroke?this.opt.markerStroke:l.indicator.markerStroke;p=void 0!=this.opt.markerOutline?this.opt.markerOutline:l.indicator.markerOutline;r&&v.createPath("M"+(t+r.dx)+" "+(u+r.dy)+" "+m).setFill(r.color).setStroke(r);p&&(p=w.makeStroke(p),p.width=2*p.width+(y?y.width:0),v.createPath(n).setStroke(p));m=v.createPath(n);n=this._shapeFill(void 0!=this.opt.markerFill?this.opt.markerFill:
l.indicator.markerFill,m.getBoundingBox());m.setFill(n).setStroke(y)}return c},this))}B=this.opt.start?{x:m,y:k?n:x}:{x:k?m:A,y:k?x:n};this.opt.labels&&"trend"!=this.opt.labels&&q&&(this.opt.labelFunc?q=this.opt.labelFunc(c,this.opt.values,this._data,this.opt.fixed,this.opt.precision,this.opt.labels):"markers"==this.opt.labels?(q=G.map(z,function(a){return w.getLabel(a,this.opt.fixed,this.opt.precision)},this),q=1!=q.length?"[ "+q.join(", ")+" ]":q[0]):q=w.getLabel(b,this.opt.fixed,this.opt.precision),
this._renderText(v,q,l,B.x,B.y,c,this.opt.values,this._data));E&&this._connectEvents({element:"indicator",run:this.run?this.run[c]:void 0,shape:v,value:b});F&&this._animateIndicator(v,k,k?n:m,k?n+x:m+A,F);return C.mixin(B,{x1:m,y1:n,x2:A,y2:x})},_animateIndicator:function(b,c,e,a,d){L.animateTransform(C.delegate({shape:b,duration:1200,transform:[{name:"translate",start:c?[0,e]:[e,0],end:[0,0]},{name:"scale",start:c?[1,1/a]:[1/a,1],end:[1,1]},{name:"original"}]},d)).play()},clear:function(){this.inherited(arguments);
this._data=[]},addSeries:function(b){this.inherited(arguments);this._data.push(b.data)},_renderText:function(b,c,e,a,d,g,t,u){this.opt.offset&&(a+=this.opt.offset.x,d+=this.opt.offset.y);c=K.createText.gfx(this.chart,b,a,d,this.opt.vertical?"middle":this.opt.start?"start":"end",c,this.opt.font?this.opt.font:e.indicator.font,this.opt.fontColor?this.opt.fontColor:e.indicator.fontColor);a=M(c,c.getShape().text);this.opt.vertical&&!this.opt.start&&(a.y+=a.height/2,c.setShape({y:d+a.height/2}));a.x-=2;
--a.y;a.width+=4;a.height+=2;a.r=this.opt.radius?this.opt.radius:e.indicator.radius;var l=void 0!=this.opt.shadow?this.opt.shadow:e.indicator.shadow;d=void 0!=this.opt.stroke?this.opt.stroke:e.indicator.stroke;var h=void 0!=this.opt.outline?this.opt.outline:e.indicator.outline;l&&b.createRect(a).setFill(l.color).setStroke(l);h&&(h=w.makeStroke(h),h.width=2*h.width+(d?d.width:0),b.createRect(a).setStroke(h));e=this.opt.fillFunc?this.opt.fillFunc(g,t,u):void 0!=this.opt.fill?this.opt.fill:e.indicator.fill;
b.createRect(a).setFill(this._shapeFill(e,a)).setStroke(d);c.moveToFront()},getSeriesStats:function(){return C.delegate(w.defaultStats)}});H("dojo-bidi")&&t.extend({_getMarkX:function(b){return this.chart.isRightToLeft()?this.chart.axes.x.scaler.bounds.to+this.chart.axes.x.scaler.bounds.from-b:b}});return t});
//# sourceMappingURL=Indicator.js.map