$(function(){
	//顶部滚动广告
	var adss = $('.cjClass_new a');
	var k = 0;
	function ads(){
		adss.eq(k).addClass('cjClassA').siblings('a').removeClass('cjClassA');
		k++;
		if(k==adss.length){
			k=0;
		}
		setTimeout(ads,3000);
	}
	ads();

	//网易游戏全目录
	$('.cjClassAll').hover(function(){
		$('#cjhideClass').stop(true,true).slideDown(300).css({'display':'block'});
	},function(){
		$('#cjhideClass').stop(true,true).slideUp(400);
	})

	//chinajoyNews 左轮播***************************************

	var i = 0;
	var imgWidth = $(".Lbanner li").width();

	var clone = $(".Lbanner li").first().clone();//复制第一张图片并且添加到最后达到无缝连接的效果
   	$(".Lbanner").append(clone);

   	var size = $(".Lbanner li").size();//得到所有li的个数

   	//第一步
   	//一开始循环添加按钮
   	for(var j = 0 ; j<size - 1 ; j++){
    	$(".leftA").append("<div></div>");       
   	}
   	//为什么要size - 1？因为最后一张图片只是作一个过渡效果我们显示的始终还是4张图片
  	//所以添加按钮的时候我们也应该添加4个按钮
   	$(".leftA div").eq(0).addClass("onclick");

   	//第二步
   	//左按钮
   	//右按钮


   	//第三步	按钮移出移入事件
   	$(".leftA div").hover(function(){
	    i = $(this).index()-1;
	    clearInterval(timer);
	    $(".Lbanner").stop().animate({left:-i * imgWidth});
	    $(this).addClass("onclick").siblings().removeClass("onclick");
	    //$("#index").html("index的值：" + index);
	},function(){
	    timer = setInterval(function(){
	    Toleft();
	},3000)})

   	//ul鼠标移出移入事件
   	$(".Lbanner").hover(function(){
     	clearInterval(timer);
   	},function(){
      	timer = setInterval(function(){
     	Toleft();
   	},3000)})

   	//定时器
   	var timer = setInterval(function(){
    	Toleft();
   	},3000)

   	/*第2.1步*/
   	//左按钮实现的函数
   	function Toleft(){
	    i++;
	    if(i==size){
	        //当当前图片为最后一张图片的时候（我们一开始复制并且添加到ul最后面的图片）并且再点击了一次左按钮，这时候我们就利用css的快速转换效果把ul移动第一张图片的位置并且第二张图片滑入达到无缝效果（css的变换效果很快我们肉眼是很难看见的）
	        $(".Lbanner").css({left:0});
	        i = 1;
	    }
     	$(".Lbanner").stop().animate({left:-i*imgWidth},500);

	    if(i == size -1){
	       $(".leftA div").eq(0).addClass("onclick").siblings().removeClass("onclick");

	    }else{
	       $(".leftA div").eq(i).addClass("onclick").siblings().removeClass("onclick");

	    }
	}

   	/*第2.2步*/
   	//右按钮实现的函数
   	function Toright(){

      //同理，如果当前图片位置是第一张图片我再按一下右按钮那么我们也利用css的快速变换使它的位置来到最后一张图片的位置（size-1），并且让倒数第二张图片滑动进来
      i--;
      if(i==-1){
        $(".Lbanner").css({left:-(size - 1)*imgWidth});
        i=size-2;
      }
      $(".Lbanner").animate({left:-i*imgWidth},500);
      $(".leftA div").eq(i).addClass("onclick").siblings().removeClass("onclick");

   	}

	//右小选项卡
	$('.L3Btn li').each(function(e,l){
		var Btni = $(this).index();
		$(this).click(function(){
			$(this).addClass('bSelect').siblings('li').removeClass('bSelect');
			$('.L3Con li').each(function(i,v){
				var Coni = $(this).index();
				if(Coni==Btni){
					$(this).addClass('L3ConS').siblings('li').removeClass('L3ConS');
				}
			})
		})
	})


})
