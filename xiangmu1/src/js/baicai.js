require(['config1'],function(){
	require(['jquery','lazyload'],function($,hb){
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