//123
	var url="http://www.konkamobile.com/";
	var shareTitle="康佳商场";
	var pic="{$pics}";

	function weibo(){
		window.open("http://weibo.com/konka");
	}
	/*function weixin(){
		window.open("http://www.jiathis.com/send/?webid=weixin&url="+url+"&title="+shareTitle+"&uid=69830b72-0d99-41aa-a3fd-48634b616ffe"+"&pics"+pic);
	} */

	jQuery(function(){
	
	/*微信展开，二维码出现开始*/
		jQuery(".weixin").hover(function(){
			jQuery('.ewm').stop().slideDown();
		},function(){
			jQuery('.ewm').stop().slideUp();
		})
		
		/*微信展开，二维码出现结束*/
	
		/*js控制最后一个li的右边距为零开始*/
		jQuery('.topbar-right ul li:last-child').css('border-right','none');
		jQuery('.hot_bd_bottom ul li:last-child').css('margin-right','0px');
		jQuery('.active_bd ul li:last-child').css('margin-right','0px');
		/*js控制最后一个li的右边距为零结束*/

		jQuery('.search-text').focus(function(){
			jQuery('.search-hot-words').hide();
		});
		jQuery('.search-text').blur(function(){
			jQuery('.search-hot-words').show();
		});


		/*购物车特效开始*/
  		jQuery('.topbar-cart').hover(function(){
			jQuery(this).children('.cart_con').stop().slideDown();
		},function(){
			jQuery(this).children('.cart_con').stop().slideUp();
		})
		/*购物车特效结束*/
		
		
		/*各种商品分类开始*/
		jQuery('.site-category>ul>li').hover(function(){
			jQuery(this).addClass('red');
			jQuery(this).siblings().removeClass('red');
			jQuery(this).children('.category_children').show();
			jQuery(this).siblings().children('.category_children').hide();
		},function(){
			jQuery(this).children('.category_children').hide();
			jQuery(this).removeClass('red');
		})
		/*各种商品分类结束*/
		
		/*各种商品名称字符串截取开始*/
		var str, str_s;
		jQuery('span.text').each(function(){
			if( jQuery(this).text().length >10 ){
				var str = jQuery(this).text();
				var str_s = str.substr(0,10);
				str_s = str_s+'......';
				jQuery(this).text(str_s);	
			 }
		})
		/*各种商品名称字符串截取结束*/
		
	 	/*新品轮播开始*/
	 	var new_lb = 0;
	 	var i = 4; 
	 	var len = jQuery("ul.fl.new_lb  li").length;
	 	//var page_count = Math.ceil(len / i) ;   //只要不是整数，就往大的方向取最小的
	 	var page_count = 2 ;   //只要不是整数，就往大的方向取最小的
		jQuery('.new_lf').click(function(){
			jQuery('.new_rt').removeClass('new_rt_after');
			new_lb--;
			if(new_lb < 0){
				new_lb = 0;
			}
			if( new_lb <= 0){
				jQuery('.new_lf').addClass('new_lf_after');
			}
			var zhi = -new_lb*1210;
			jQuery('.new_lb').animate({left:zhi},'slow');
		});
		jQuery('.new_rt').click(function(){
			jQuery('.new_lf').removeClass('new_lf_after');
			new_lb++;
			var zhi = -new_lb*1210;
			if( new_lb >= page_count){
				var zhi = -(page_count-1)*1210;
				new_lb = page_count-1;
				jQuery('.new_lb').animate({left:zhi},'slow');	
			}
			if( new_lb == page_count-1 ){
				jQuery('.new_rt').addClass('new_rt_after');
			}
			jQuery('.new_lb').animate({left:zhi},'slow');
		})
		/*setInterval(function(){
			jQuery('.new_rt').trigger('click');
		},6000);
		setInterval(function(){
			jQuery('.new_lf').trigger('click');
		},10000);*/
		function new_time (){
			jQuery('.new_rt').removeClass('new_rt_after');
			jQuery('.new_lf ').removeClass('new_lf_after');
			new_lb++;
		 	var i =  4;
		 	var len = jQuery("ul.fl.new_lb  li").length;
		 	var page_count = 2 ; //只要不是整数，就往大的方向取最小的
		 	var page_zhi = page_count-1;
		 	var zhi = -new_lb*1210;
			if( new_lb >= page_zhi ){
				var zhi = -(page_zhi)*1210;
				new_lb = -1;	
			} 
			jQuery('.new_lb').stop().animate({left:zhi},'slow');		
		}
		    
		
		function star_new_lb_time(){
			//clearInterval(new_lb_time);
			new_lb_time = setInterval(new_time,8000);
		}
		star_new_lb_time();
		/*jQuery('.kj-new-box .box_bd ul li').hover(function(){
			jQuery(this).addClass('li-active');
		},function(){
			jQuery(this).removeClass('li-active');
		})*/
		jQuery('.hot_bd_top .banner').hover(function(){
			jQuery(this).addClass('li-active');
		},function(){
			jQuery(this).removeClass('li-active');
		})
		jQuery('.box_bd_left').hover(function(){
			jQuery(this).addClass('li-active');
		},function(){
			jQuery(this).removeClass('li-active');
		})
		/*新品轮播结束*/
		
		/*热销产品经过时 3d显示 开始*/
		jQuery('.hot_bd_bottom ul li').hover(function(){
			jQuery(this).addClass('li-active');
		},function(){
			jQuery(this).removeClass('li-active');
		})
		/*热销产品经过时 3d显示 结束*/
		/*底部二维码展示开始*/
		jQuery('.link_ul li').hover(function(){
			
			jQuery(this).children('.link_children').show();
		},function(){
			jQuery(this).children('.link_children').hide();
		})
		/*底部二维码展示结束*/
		/*商品详情页开始*/
		jQuery('.instructions, .pic').click(function(){
			jQuery(this).addClass('red_border');
			jQuery(this).siblings().removeClass('red_border');
		})
		jQuery('.thumbnail-list ul li').hover(function(){
			jQuery(this).addClass('red_border');
			jQuery(this).siblings().removeClass('red_border');
		})
		jQuery('.spec>ul>a>li ').eq(1).css({'border-left':'1px solid #e5e5e5','border-right':'1px solid #e5e5e5'});
		jQuery('.comb>ul>li').eq(1).css({'border-left':'1px solid #e5e5e5','border-right':'1px solid #e5e5e5'});
		jQuery('.children_con ul li:last-child').children('.add').remove();
		jQuery('.com_hd ul li').click(function(){
			jQuery(this).children('.com_hd_title').addClass('font_red');
			jQuery(this).siblings().children('.com_hd_title').removeClass('font_red');
			jQuery(this).children('.com_hd_children').addClass('show');
			jQuery(this).siblings().children('.com_hd_children').removeClass('show');
		})
	
		/*jQuery('.bt ul a').click(function(){
			jQuery(this).addClass('font_red');
			jQuery(this).siblings().removeClass('font_red');
		})
	*/
	
		jQuery(window).scroll(function(){
			try{
				var spec_totop = jQuery('.product-tags').offset().top - jQuery(document).scrollTop();
				var product_totop = jQuery('#product_section').offset().top - jQuery(document).scrollTop();
				if( spec_totop < 0 ){
					jQuery('.product-tags').addClass('fixed');
				}
				if( product_totop > 60){
					jQuery('.product-tags').removeClass('fixed');
				}
			}catch(err){

			}
			
		})
		
       var count= jQuery(".tab-trigger").length;
       var pawidth=jQuery(".tab-triggers").width();
       var chwidth=(pawidth/count)-count;
       jQuery(".tab-trigger").css("width",chwidth);

       jQuery('.action-buynow').click(function(){
       	   jQuery('.action-buynow span').css('background','#ff5d59');
       })
		//alert(chwidth);
		
/*		$(window).scroll(function(){
			
			try{
					
				var spec_totop = $('.bt').offset().top - $(document).scrollTop();
				var product_totop = $('.product_details').offset().top - $(document).scrollTop();
				var sppl_totop = $('.sppl').offset().top - $(document).scrollTop();
				var xq_totop =  $('.xq').offset().top - $(document).scrollTop();
				if( spec_totop < 0 ){
					$('.bt').addClass('fixed');
				}
				if( product_totop > 60){
					$('.bt').removeClass('fixed');
				}
				
			}
			catch(err){
   				
			}
			
			
		})
		*/
		/*商品详情页结束*/
		
		/*jQuery(".goods-item").hover(function(){
			jQuery(".goods-others").css("visibility","visible");
		})*/
		jQuery(".sc-acd").mouseover(function(){
		    var title=jQuery(this).attr('title');
		    jQuery(this).addClass('acdhover');
		    jQuery(this).removeClass('sc-acd');
		    if(title=="微信服务"){
		    	jQuery(this).removeClass('huad2');
		    	jQuery(this).addClass('sashare-srap-new1');
		    	jQuery(".acd-wechat").css("display","block");
		    }
		    if(title=="购物车"){
		    	jQuery(this).removeClass('huad1');
		    }
		    if(title=="售后服务"){
		    	jQuery(this).removeClass('hua4');
		    }
		    jQuery(this).html(title);
		    //alert(title);
		})
		jQuery(".sc-acd").mouseout(function(){
			var title=jQuery(this).attr('title');
			jQuery(this).addClass('sc-acd');
		    jQuery(this).removeClass('acdhover');
		    if(title=="微信服务"){
		    	jQuery(this).addClass('huad2');
		    	jQuery(this).removeClass('sashare-srap-new1');
		    	jQuery(".acd-wechat").css("display","none");;
		    }
		    if(title=="购物车"){
		    	jQuery(this).addClass('huad1');
		    }
		    if(title=="售后服务"){
		    	jQuery(this).addClass('hua4');
		    }
		    jQuery(this).html('');
		})
	})
	