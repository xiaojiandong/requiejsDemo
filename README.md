# requiejsNote
requiejs 模块引入

## 1. 在head部分引入 require.js ：
```html
 <script src="http://cdn.bootcss.com/require.js/2.1.20/require.min.js"></script>
 ```
 
## 2. 引入index.js入口脚本 ：
```html
 <script src="js/index.js"></script>
```

## 3. 在index.js中配置其他模块 ：
```js
  // 配置模块
require.config({
  paths : {
      'jquery' : 'js/jquery2.1.4.min',
      //'jquery' : 'http://cdn.bootcss.com/jquery/2.1.3/jquery.min ', // 引入外部依赖的库
      'model1' : 'js/model1', // 公共模块
      'model2' : 'js/model2',
      'math' : 'js/math',
      'main' : 'js/main' // 本页面中处理逻辑的模块
      // ...
  }
});
// 加载模块
require(['jquery' , 'model1' , 'model2' , 'math','main'] ,
    function(jquery ,model1,model2, math,main){
      console.log(math.addFn(2,4)); // 调用math.js中的方法 addFn()
      console.log('index.js入口模块 全部加载完模块');
});
```

## 4. html页面 ：
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>require</title>
    <!-- 引入require.js -->
    <script src="http://cdn.bootcss.com/require.js/2.1.20/require.min.js"></script>
</head>
<body>
<h1>require.js</h1>
 <div class="js_test"></div>
 <!--其他结构-->
 
  <!-- 引入主模块 index.js -->
  <script src="js/index.js"></script>

</body>
</html>

```

## [JS模块化工具requirejs链接](http://www.runoob.com/w3cnote/requirejs-tutorial-1.html)
