	require(['config'],function(){
	require(['common','jquery','lazyload'],function(car,$,hb){
		$(function(){
			$('#header').load('html/header_index.html');
			 $('#footer').load('html/footer_index.html');
			 $('.lunbotu').lxcarousel({
				imgs:['img/01.jpg','img/02.jpg','img/03.jpg','img/04.jpg','img/05.jpg'],
				buttons:false
			});
			 $('img.lazy').lazyload({   
				
				threshold : 1,
				effect : "fadeIn" 
			});
		});
		});
});