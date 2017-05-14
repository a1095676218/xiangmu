require(['config1'],function(){
	require(['jquery','cookie'],function($,hg){
		$(function(){
			$('#header').load('../html/header.html');
			 $('#footer').load('../html/footer.html');
			 console.log($(".check"));
			 $(".check").click( 

  function(){ 
    if(this.checked){ 
        $("input[name='checkbox']").attr('checked', true)
    }else{ 
        $("input[name='checkbox']").attr('checked', false)
    } 
  } 
);
			var $goods=$('.carul');
			
			var listCar=$.cookie('shoppingCar');
			
			listCar = listCar ? JSON.parse(listCar) : [];


			// 判断是否有商品
			if(listCar.length>0){

			var $ul=$('<ul/>');

			var totalPrice=0;
		

			$ul.html(listCar.map(function(item){
				totalPrice += item.price * item.num;

				return `
			<li class="carli" data-guid="${item.guid}">
			<span class="car_fgd">
			<span class="car_iblock">
			<input type="checkbox" name="checkbox" id="checkbox2">
			<a href="#" class="carib"><img src="${item.img}" class="ib1"></a>
			</span>
			<span class="car_iblock">
			<span class="car_god"><a href="">${item.title}</a></span>
			</span>
			</span>
			<div class="jiage">${item.price}</div>
			<div class="btnb">
			<button id="btnjian" class="btnjn">-</button>
			<input type="text" name="text" value="0" id="num1">
			<button id="btnjia" class="btnjn">+</button></div>
			<div class="jiage2">${item.price}</div>
			<div class="caozuo"><b class="del">删除</b><br><a href="#" class="shou">收藏</a></div>
			</li>`

			}).join(''));
			$ul.addClass('carul1').appendTo($goods);
			}
			
			// 删除cookie
			$goods.on('click',function(e){
				var target=e.target;
		

				if(target.tagName.toLowerCase()=='b'){
					$.removeCookie('shoppingCar',{path:'/'});
					$(target).parents('.carul1').remove();
				}
			})
			


			 $('#btnjia').click(function(e){
				//获取鼠标点击的次数
				
				var $cishu = $('#num1').val();
				if(arguments.callee.num!=$cishu){
					arguments.callee.num=$cishu;
				}
				arguments.callee.num = arguments.callee.num ? arguments.callee.num : 0;
				$('#num1').val(++arguments.callee.num);
				$('.bb').text(+arguments.callee.num);
				var $kk = '12.8';
				var $u = Math.round($kk*arguments.callee.num);
				$('.bb2').text($u);
				var $index = $('#num1').val();
				$('#btnjian').click(function(){
				var $idx = $index--;
				if($idx<1){
					$('#num1').val(1);
					$('.bb').text(1);
					$('.bb2').text('12.8');
				}else{
					$('#num1').val($idx);
					$('.bb').text($idx);
					$('.bb2').text($u/$idx);
				}
			});

			}); 
			
		});
	});
});