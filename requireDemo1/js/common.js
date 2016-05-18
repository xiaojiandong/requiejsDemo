
/**
 * [description]
 * @param  {[type]} jquery  [description]
 * @param  {[type]} echo){               console.log('common.js里面的文件 define');  $('body').css({     'background' : 'red'  }).on('click' , function(){     alert('sss');  });    echo.init({    offset: 100,    throttle: 2500,    unload: false,        callback: function (element, op) {      console.log(element, 'has been', op + 'ed 图片已加载完成！');    }  }); } [description]
 * @return {[type]}         [description]
 * 当前的common.js脚本依赖 jquery,echo这两个模块
 */
define(['jquery' , 'echo'] , function(jquery , echo){
 
  // console.log('common.js里面的文件 define');

  // 在头部引用了 jquery，所以可以用jquery的用法
  $('body').css({
     'background' : 'pink'
  }).on('click' , function(){
     alert('点击了body ! ');
  });

  // 在头部引用了echo，所以可以用echo的用法  
   echo.init({
    offset: 100,
    throttle: 2500,
    unload: false,
    // 图片加载完后的回调函数
    callback: function (element, op) {
      console.log(element, 'has been', op + 'ed 图片已加载完成！');
    }
  });

 
});
  