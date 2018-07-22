(function(w){
	var isFunction=w.isFunction||(w.isFunction=function(x){return typeof(x)==='function'}),
	has=w.has||(w.has=function(o,p){var e=p in o;return {value:e && (e=o[p]) && true,refer:e,valueOf:function(){return this.value}}}),
	Polyfill=w.PolyfillMethod||(w.PolyfillMethod=function(o,p,x){var e=has(o,p);if(e && (e=isFunction(e.refer))===false){o[p]=x};return e}),
	theProto=w.Object.prototype;

	Polyfill(theProto,'hasOwnProperty',function(x){var o,e=this,p=String(x);return p in e && (o=e.__proto__||e.constructor.prototype,(p in o ===false)||e[p]!== o[p])});

})(window);
