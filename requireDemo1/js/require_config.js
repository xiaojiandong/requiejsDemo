
 
// 配置引入公共的脚本文件
require.config({
   // 'baseUrl' : '/js/',
   'paths' : {
      'jquery':'js/jquery-1.11.1.min',
      'echo':'js/echo.min', // 延迟加载
      'common' : 'js/common', // 公共类库
      'subj_util' : 'js/subj_util', // 工具类库
      'wxjs':'js/jweixin-1.0.0' // 微信分享接口
      // 'wxjs':'https://res.wx.qq.com/open/js/jweixin-1.0.0'
   }
   /*
   'shim' : {
     	  'wxjs' : {
    	  	'exports' : 'wxjs'
   	  }
   }
   */
}); 

// 加载模块
require(['jquery' , 'echo' , 'common' , 'wxjs' ,'subj_util'] ,
    function(jquery ,echo, common , wxjs ,subj_util){
      //console.log('require_config.js入口模块，里面有全部需要的其他模块');
});

