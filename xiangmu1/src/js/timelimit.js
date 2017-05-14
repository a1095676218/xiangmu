require(['config1'],function(){
	require(['common','jquery','lazyload'],function(car,$,hb){
		$(function(){
			$('#header').load('../html/header.html');
			 $('#footer').load('../html/footer.html');
			 $('#timelimitimg').lxcarousel({
				imgs:['../img/xian1.jpg','../img/xian2.jpg','../img/xian3.jpg','../img/xian4.jpg'],
				buttons:false
			});
			 $('img.lazy').lazyload({   
				
				threshold : 1,
				effect : "fadeIn" 
			});
		});
	});
});