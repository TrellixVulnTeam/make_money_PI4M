
window = this;

var Window = function Window() {
    //容易被检测到 堆栈
    throw new TypeError("Illegal constructor")

};catvm.safefunction(Window)

Object.defineProperties(Window.prototype,{
    [Symbol.toStringTag]:{
        value:"Window",
        configurable:true
    }
});


////////////////////////  补代码

window.setTimeout=function  setTimeout(x,d) { 
    typeof(x)=="function"?x():undefined ;
    typeof(x)=="string"?eval(x):undefined;
    return 0;  
};catvm.safefunction(window.setTimeout)


Window.prototype.PERSISTENT=1
Window.prototype.TEMPORARY=0
window.open=function open() {debugger ;};catvm.safefunction(window.open)
window.osversion="win10"
window.chrome=catvm.proxy(class chrome{});
//////////////////////


Window.prototype.__proto__=WindowProperties.prototype


////////////////////
window.localStorage=class localStorage{}
window.localStorage.getItem=function getItem(arg) {
    if(arg=='tt_scid'){
        return "7reCZ9RRjk76le0t.WaLfEcAhJ0PuPHmhU.d0GWuuRnMmRgpwkMMfBM9.hr9L0v.7725"
    }
    debugger;
}  ;catvm.safefunction(window.localStorage.getItem)
window.localStorage=catvm.proxy(window.localStorage)

///////////////////

window.sessionStorage=class sessionStorage{}
window.sessionStorage.getItem=function getItem(arg) {
    if(arg=='tt_scid'){
        return "7reCZ9RRjk76le0t.WaLfEcAhJ0PuPHmhU.d0GWuuRnMmRgpwkMMfBM9.hr9L0v.7725"
    }
    debugger;
}  ;catvm.safefunction(window.sessionStorage.getItem)
window.sessionStorage=catvm.proxy(window.sessionStorage)



window.__proto__=Window.prototype ;

Window=catvm.proxy(Window)
window=catvm.proxy(window)