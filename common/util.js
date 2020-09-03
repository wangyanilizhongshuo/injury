/**
 * 工具类
 */
var minute = 1000 * 60;
var hour = minute * 60;
var day = hour * 24;
var halfamonth = day * 15;
var month = day * 30;
module.exports = {
  
     //   * 对象转URL
    urlEncode: function(data) {
      var _result = [];
      for (var key in data) {
        var value = data[key];
        if (value.constructor == Array) {
          value.forEach(function(_value) {
             _result.push(key + "=" + _value);
          });
        } else {
          _result.push(key + '=' + value);
        }
       }
      return _result.join('&');
    },
	
	
	}
 