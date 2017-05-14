require(['config'],function(){
	require(['jquery','lazyload','cookie'],function($,hb,ck){
		$(function(){
			$('#header').load('../html/header.html');
			 $('#footer').load('../html/footer.html');
			$('img.lazy').lazyload({   
				threshold : 1,
				effect : "fadeIn" 
			});
			
			//cookie
			// var $goodNum=$('.carnum').text();
			
			// var shoppingCar=$.cookie('shoppingCar');
			// shoppingCar= shoppingCar ? JSON.parse(shoppingCar) : [];

			// var $title = $('.gds').html();
			// var $price = $('.span1').html();
			
			// var $goodimg =$('.lazy').attr('data-original');
			// var hasGood = false;
			// if(shoppingCar.length>0){
			// 	hasGood=true;
			// 	shoppingCar[0].num++;
			// 	console.log(shoppingCar[0]);
			// }
			// console.log($title,$price,$goodimg);
			// if(!hasGood){
			// 	var goods={
			// 		img:$goodimg,
			// 		title:$title,
			// 		price:$price,
			// 		Num:$goodNum
			// 	}
			// 	shoppingCar.push(goods);
			// }
			// $.cookie.raw=true;
			// $.cookie('shoppingCar',JSON.stringify(shoppingCar),{expires:7,path:'/'})
			// console.log($.cookie());

			

			var $index = arguments.callee.num = arguments.callee.num ? arguments.callee.num : 0;
			$(".carlist").click(function(e){

				$(this).next().show(200);
				$('.carnum').text(++$index);
				var $goodNum=$index;
			var $carlist = $.cookie('guid'); 
			console.log($carlist);
			var shoppingCar=$.cookie('shoppingCar');
			shoppingCar= shoppingCar ? JSON.parse(shoppingCar) : [];

			var $title = $('.gds').html();
			var $price = $('.span1').html();
			var $goodimg =$('.ll').attr('data-original');
			var hasGood = false;
			var $currentGUID = $('li.baili').attr('data-guid');
			for($i=0;$i<shoppingCar.length;$i++){
				
				if($currentGUID===$carlist){
				hasGood=true;
				shoppingCar[0].num++;
				console.log(shoppingCar[0]);
				}
				
			}
			console.log($title,$price,$goodimg);
			if(!hasGood){
				var goods={
					guid:$currentGUID,
					img:$goodimg,
					title:$title,
					price:$price,
					Num:$goodNum
				}
				shoppingCar.push(goods);
			}
			$.cookie.raw=true;
			$.cookie('shoppingCar',JSON.stringify(shoppingCar),{expires:7,path:'/'})
			console.log($.cookie());
			

			});

			
		});
});
});