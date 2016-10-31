$(function(){
	
	
	
	//------------------------banner图轮播效果---------------------------------------				
				var $img=$(".ads");
				//console.log($img.size());
				var $nav3_li=$(".nav3 .yuan>li");
				var $goleft=$(".goleft");
				var $goright=$(".goright");
				var i=0;
				var $nav3=$(".nav3");
				$nav3.hover(function(){
					clearInterval(timer);
				},function(){
					timer= setInterval(fn1,2000);
				})
				//默认自动轮播
				var timer= setInterval(fn1,2000);
				//$(document).click(fn1);
				//左右按钮点击事件				
				$goleft.click(function(){					
					i--;
					if(i==-1)
					{
						i=$img.size()-1;
					}
					play(i);
				})
				$goright.click(fn1);
				//缩略图点击事件
				 $nav3_li.click(function(){
					clearInterval(timer);
					//主要工作：获取当前缩略图的下标
					i=$(this).index();					
					play(i);					
					timer= setInterval(fn1,2000);
				});
				function fn1()
				{
					i++;
					if(i==$img.size())
					{
						i=0;
					}
					play(i);
				}
				function play(i){
					//修改第k张的透明度=1，其他张=0;
					$img.eq(i).animate({opacity:1},500).siblings("img").animate({opacity:0},500);
//					$d2Li.eq(k).css({background:"yellow"}).siblings().css({background:""});
					$nav3_li.eq(i).addClass("active").siblings().removeClass("active");
				}
				
//-------------------------------------购物车划入--------------------------------------
					var $txt2=$("#txt2");
					var $none=$("#none");
					//console.log($txt2);
					$txt2.hover(function(){
						$none.show();
					},function(){
						$none.hide();
					})				
					
//---------------------------微信图标划入-------------------------------------------------------					
					var $weixin=$(".weixin");
					var $hide=$(".hide");
					//console.log($weixin);
					$weixin.hover(function(){
						$hide.animate({height:147});
					},function(){
						$hide.animate({height:0});
					})							
					
//------------------------左右移动轮播效果---------------------------------------
				var timer2=setInterval(movePic,8000);			
				function movePic()
				{
					var $move=$(".move");				
					$move.animate({left:-1200},1000,fn1);//运动函数animate
					function fn1()
					{
						$move.delay(3000).animate({left:0},1000);
						
					}
				}
//-----------------------左侧导航划入划出效果-----------------------------
				var $li=$(".nav3 .ul2>li");
				var $n3_hide=$(".n3-hide");
				var $nav3_ul=$(".n3-hide ul")
				//console.log($nav3_ul);
				//console.log($li);
				$li.mouseover(function(){
					$n3_hide.show();
					var i=$(this).index();//当前li的下标
				$nav3_ul.eq(i).show().siblings().hide();//对应的ul出现，其他兄弟ul消失
				});
				$li.mouseout(function(){
					$n3_hide.hide();
				})
//----------------------------------------------------				
				
				
				
				
				
				
		})
		
