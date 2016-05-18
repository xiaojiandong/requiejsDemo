 

// 提取一些公共的工具类
define(['jquery'] , function(jquery){
    
   //console.log('提取一些公共的工具类'); 
   // 返回一个对象，对象里面有很多属性跟方法
   return SUBJ = {
      geturlstr:function(name){
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
            var r = window.location.search.substr(1).match(reg);
            if (r!=null) return decodeURI((r[2])); return null;
        },
      testData : '1000测试数据',
      getSomeValue : function(){
      	alert('返回一个方法getSomeValue');
      }  
   };

});