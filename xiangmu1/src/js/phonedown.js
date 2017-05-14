require(['config1'],function(){
	require(['common','jquery','lazyload'],function(car,$,hb){
		$(function(){
			$('#header').load('../html/header.html');
			 $('#footer').load('../html/footer.html');
			 $('.phonelun').lxcarousel({
				imgs:['../img/slide1.jpg','../img/slide2.jpg'],
				buttons:false
			});
			 $('img.lazy').lazyload({   
				threshold : 1,
				effect : "fadeIn" 
			});
		});
				});
});