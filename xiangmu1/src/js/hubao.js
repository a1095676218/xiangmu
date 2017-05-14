require(['confighb'],function(){
	require(['common','jquery','lazyload'],function(car,$,hb){
		$(function(){
			$('#header').load('../html/header.html');
			 $('#footer').load('../html/footer.html');
			$('img.lazy').lazyload({   
				
				threshold : 1,
				effect : "fadeIn" 
			});
			
		});
});
});