Object.prototype.hasOwnProperty||Object.prototype.hasOwnProperty=function(x){
 var e=this,p=String(x),o=e.__proto__||e.constructor.prototype;
 return p in e && (!(p in o)||e[p]!== o[p])
};
