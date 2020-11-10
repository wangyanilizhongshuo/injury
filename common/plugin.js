! function(root, factory) {  
if (typeof exports == 'object' && typeof module != 'undefined') {  
    module.exports = factory()  
} else if (typeof define == 'function' && define.amd) {  
    define(factory)  
} else {  
    document.addEventListener('plusready', function(){  
    // 修改此处为插件命名  注释---1
    var moduleName = 'elitetyc';   
    
    root.plus[moduleName] = factory()  
    },false);  
}  
}(this, function() {  
//在此处定义自己的方法  注释---2
var _BARCODE = 'elitetyc';  
var plugintest = {  
    // 这里定义了一个名叫CalcNameAddNumFunction的方法，传递三个参数，后面两个是回调函数
    CalcNameAddNumFunction: function(num, successCallback, errorCallback) {
        var success = typeof successCallback !== 'function' ? null : function(args) {
                successCallback(args);
            },
            fail = typeof errorCallback !== 'function' ? null : function(code) {
                errorCallback(code);
            };
      // 注释---3
        var callbackID = plus.bridge.callbackId(success, fail);
    // 注释---4
        return plus.bridge.exec(_BARCODE, "calcMyNameAddNum", [callbackID, num]);
    }
};  
return plugintest;  
});  