 

// 当前页面开发，独立的脚本;依赖jquery，subj_util这个模块
require(['jquery' , 'subj_util'] , function(jquery , subj_util){
   // todo 处理当前页面的逻辑 
   var shareFriend = SUBJ.geturlstr('shareFriend');
   if(shareFriend == 1 || shareFriend){
   	  console.log('浏览器地址栏参数 shareFriend=1');
   }else{
   	  console.log('浏览器地址栏是空的');
   } 

});