//#Polyfill
Object.prototype.hasOwnProperty||(Object.prototype.hasOwnProperty=function(x){var o,e=this,p=String(x);return p in e && (o=e.__proto__||e.constructor.prototype,(p in o ===false)||e[p]!== o[p])});

/*
var obj1={a:1,b:false}, obj2=Object.create(obj1);
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
*/
