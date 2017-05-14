window.onload = function(){
		//获取页面的元素
	var autoApply = document.getElementById('autoApply');
	//通过父元素获取子元素节点
	var ul = autoApply.children[0];
	var text = autoApply.children[1];
	var btn = autoApply.lastElementChild;
	//问题的数组
	var question = ['你好','在吗','约吗','我有问题'];
	//回答的数组
	var answer = ['雷好啊','在的亲','不闲聊，直接约','如有问题请自行百度或者400-618-0055联系我们'];
	//按钮点击时候，就把内容从输入框添加到ul里面去
	btn.onclick = function(){
		//添加页面元素li
		var li = document.createElement('li');
		//获取输入框的值
		var _text = text.value;
		//获取li的类名样式
		li.className = 'active';
		//li的输出结果就是输入框的内容
		li.innerHTML = _text;
		//ul里面添加li
		ul.appendChild(li);


		//机器人回复（重点）
		//先封装定时器给他
		setTimeout(function(){
		//也是让他把回复的内容添加到ul里面去，所以还是要添加页面元素li
		var li = document.createElement('li');
		//获取到输入内容的东西，有没有在这个question这个数组里面
		var _text1 = question.indexOf(_text);
		//因为indexOf不为-1的时候，就说明里面有这个数组，所以我们就把question所对应的数组索引值对应让li进行输出
		if(_text1 != -1){
			li.innerHTML = answer.indexOf(_text)
		}
		//当indexOf是-1的时候，也就是说这个输入值不在这个数组里面，那我们就得给li输出对应的值
		else{
			li.innerHTML = '请输入有效的内容'
		}
		//然后再把li添加到ul里面去
		ul.appendChild(li);
		// 清空输入框
		text.value = '';

		// 自动获得焦点
		text.focus();
	},500)
	}
	}