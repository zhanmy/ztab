function Ztab(val){
	this.headbox =  document.querySelector(val.head); // 头部盒子
	this.conbox = document.querySelector(val.content); // 头部盒子
	this.activeIndex = val.active || 0;	// 默认选中tab的索引
	
	// console.log(this.conbox.childNodes)
	var contentList = []; // 内容盒子
	for(var  item of this.conbox.childNodes){
		if(item.className && item.className.indexOf('z-tab-content')>=0){
			contentList.push(item)
		}
	};
	// 隐藏掉除去默认显示的内容盒子
	for(var i=0;i<contentList.length;i++){
		if(i!=this.activeIndex){
			contentList[i].style.display = 'none'
		}
	};
	this.contentList = contentList; // 内容盒子赋值
	
	var tabList = []; // tab标签盒子
	for(var  item of this.headbox.childNodes){
		if(item.className && item.className.indexOf('z-tab-head')>=0){
			tabList.push(item)
		}
	};
	this.tabList = tabList; // tab盒子赋值
	
	tabList[this.activeIndex].className += ' active';	// 默认选中tab标签
	
	// tab盒子点击 内容对应显示
	for(let i=0; i<tabList.length; i++){
		tabList[i].onclick=function(){
			if(tabList[i].className.indexOf('active')>=0){ // 当前tab已经被点击
				return false
			};
			// 删除其他点击态
			for(let item of tabList){
				if(item.className.indexOf(' active')>=0){
					item.className = item.className.replace(' active', '');
				}
			}
			tabList[i].className += ' active'; // 点击态
			
			for(let item of contentList){
				item.style.display = 'none'; // 隐藏全部
			};
			
			contentList[i].style.display = 'block';	// 显示对应的条目
		}
	}
};
// 切换tab函数
Ztab.prototype.tab = function(index){
	if(index>=this.tabList.length){ 
		return false	// 索引超过 返回
	};
	for(var i=0;i<this.tabList.length;i++){
		if(this.tabList[i].className.indexOf(' active')>=0){
			if(i == index){
				return false
			};
			this.tabList[i].className = this.tabList[i].className.replace(' active', '');
		}
	};
	this.tabList[index].className += ' active'; // 添加tab点击态
	
	for(var i=0;i<this.contentList.length;i++){
		this.contentList[i].style.display = 'none';
	};
	this.contentList[index].style.display = 'block';
};