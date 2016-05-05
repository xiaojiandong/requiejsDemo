/**
 * Created by Lihu on 2016/5/5.
 */


// require.js 异步加载

// 配置模块
require.config({
  paths : {
      'jquery' : 'js/jquery2.1.4.min',
      //'jquery' : 'http://cdn.bootcss.com/jquery/2.1.3/jquery.min ', // 引入外部依赖的库
      'model1' : 'js/model1', // 公共模块
      'model2' : 'js/model2',
      'math' : 'js/math',
      'main' : 'js/main'
  }
});
// 加载模块
require(['jquery' , 'model1' , 'model2' , 'math','main'] ,
    function(jquery ,model1,model2, math,main){
      console.log(math.addFn(2,4)); // 调用math.js中的方法 addFn()
      console.log('index.js入口模块 全部加载完模块');
});