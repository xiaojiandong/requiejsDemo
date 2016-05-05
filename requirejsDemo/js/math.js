/**
 * Created by Lihu on 2016/5/5.
 */

console.log('第3个模块加法');

define(function(){
  var addFn = function(x , y){
    return x + y;
  };

    return {
        addFn : addFn
    }
});