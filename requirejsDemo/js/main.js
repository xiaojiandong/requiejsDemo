/**
 * Created by Lihu on 2016/5/5.
 */

$(function(){
    console.log('my_main.js中的逻辑，jquery的写法');

    $('.js_test').css({
        'width' : '300px',
        'height' : '200px',
        'background' : 'red',
        'font-size' : '30px'
    }).html('在main.js中操作节点')

});