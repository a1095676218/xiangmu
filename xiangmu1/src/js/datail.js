require(['config_gdszoom'],function(){
	require(['gdszoom','lazyload','jquery','cookie'],function(c,car,$,hb){
		$(function(){
			$('#header').load('../html/header.html');
			 $('#footer').load('../html/footer.html');
			$('.zoom').gdszoom({
				position:'right',
			});
			$('img.lazy').lazyload({   
				
				threshold : 1,
				effect : "fadeIn" 
			});
			
		var $index = arguments.callee.num = arguments.callee.num ? arguments.callee.num : 0;
			//购物车飞入
		$('#carlist').on('click',function(){
			$.cookie.raw=true;
		var $goodNum=$index;
			
			var shoppingCar=$.cookie('shoppingCar');
			shoppingCar= shoppingCar ? JSON.parse(shoppingCar) : [];

			var $title = $('.beixu').html();
			var $price = $('.bd2').html();
			
			var $goodimg =$('img.voom1').attr('src');
			var hasGood = false;
			if(shoppingCar.length>0){
				hasGood=true;
				shoppingCar[0].num++;
				console.log(shoppingCar[0]);
			}
			console.log($title,$price,$goodimg);
			if(!hasGood){
				var goods={
					img:$goodimg,
					title:$title,
					price:$price,
					Num:$goodNum
				}
				shoppingCar.push(goods);
			}
			
			$.cookie('shoppingCar',JSON.stringify(shoppingCar),{expires:7,path:'/'})
			console.log($.cookie());
		arguments.callee.num = arguments.callee.num ? arguments.callee.num : 0;
		$('#num1').val(++arguments.callee.num);
		var $shumu = $('#num1').val();
		$('.carnum').text($shumu);
		var flyElm = $('.voom1').clone().css('opacity', 0.75);
		$('body').append(flyElm);
		flyElm.css({
			'z-index': 9000,
			'display': 'block',
			'position': 'absolute',
			'top': $('.voom1').offset().top +'px',
			'left': $('.voom1').offset().left +'px',
			'width': $('.voom1').width() +'px',
			'height': $('.voom1').height() +'px'
		});
		flyElm.animate({
			top: $('.car').offset().top,
			left: $('.car').offset().left,
			width: 20,
			height: 32
		}, 'slow', function() {
			flyElm.remove();
		});
		
	});
		// 点击的时候就减
			
			//点击的时候就增加
	$('#btnjia').click(function(e){
				//获取鼠标点击的次数
				var $cishu = $('#num1').val();
				if(arguments.callee.num!=$cishu){
					arguments.callee.num=$cishu;
				}
				arguments.callee.num = arguments.callee.num ? arguments.callee.num : 0;
				$('#num1').val(++arguments.callee.num);
				var $index = $('#num1').val();
				$('#btnjian').click(function(){
				var $idx = $index--;
				if($idx<0){
					$('#num1').val(0);
				}else{
					$('#num1').val($idx);
				}
			});

			}); 

		var $bottomimg = $('.bottomimg');
		var $item = $bottomimg.find('.item');
		var $itemul = $item.find('.itemul');
		var $itemli = $item.find('.itemli');
		var $zoom = $('.zoom');
		$itemul.on('click','li',function(){
			var $img1 = $(this).children();
			$(this).addClass('active').siblings().removeClass('active');
		});
		});
		});
});