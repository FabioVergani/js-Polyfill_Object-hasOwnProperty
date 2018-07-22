(function(w){
	function isFunction(x){return typeof(x)==='function'}
	function has(o,p){var e=p in o;return {value:e && (e=o[p]) && true,refer:e,valueOf:function(){return this.value}}}

	var Polyfill=function(o,p,x){var e=has(o,p);if(e && (e=isFunction(e.refer))===false){o[p]=x};return e};

	Polyfill(w.Object.prototype,'hasOwnProperty',function(x){var o,e=this,p=String(x);return p in e && (o=e.__proto__||e.constructor.prototype,(p in o ===false)||e[p]!== o[p])});

	Polyfill=null;

})(window);



/*//test:
	(function(){
		function changeO() {o.newprop = o.prop;delete o.prop;}

		var obj1={a:1,b:false}, obj2=Object.create(obj1), o=new Object();
		obj2.a=2;
		obj2.c='yeah';
		//Polyfilled & Native:
		console.dir([
			obj1.hasOwnProperty('a'),//true
			obj1.hasOwnProperty('b'),//true
			obj1.hasOwnProperty('c'),//false
			obj2.hasOwnProperty('a'),//true
			obj2.hasOwnProperty('b'),//false
			obj2.hasOwnProperty('c')//true
		]);

		Object.prototype.hasOwnProperty.call(Object.create(null),'a')//false

		o.prop = 'exists';
		console.log(o.hasOwnProperty('prop'));//true
		changeO();
		console.log(o.hasOwnProperty('prop'));//false
		o = new Object();
		o.prop = 'exists';
		console.log(o.hasOwnProperty('prop'));//true
		console.log(o.hasOwnProperty('toString'));//false
		console.log(o.hasOwnProperty('hasOwnProperty'));//false
	})();
*/
