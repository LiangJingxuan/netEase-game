$(function(){
	//顶部隐藏部分 
	var flag = true;
	$('.NEhBtn').click(function(){
		if(flag){
			$(this).css({'background':'#000','transition':'all 0.5s'});
			$('.NEhBtn i').css({'width':'34px','height':'34px','margin':'43px 43px','backgroundPosition':'-34px 0px'});
			$('#NEhide').stop(true,true).slideDown(300).css({'display':'block'});
			flag = false;
		}else{
			$(this).css({'background':'#C80E2F','transition':'all 0.5s'});
			$('.NEhBtn i').css({'width':'35px','height':'23px','margin':'50px 43px','backgroundPosition':'0 -5px'});
			$('#NEhide').stop(true,true).slideUp(400);
			flag = true;
		}		
	});	
	//轮播 
	var k = 0;
	var timer = null;
	//封装轮播
	function ShowBanner(){		
		$('.NEbPic li').eq(k).stop(true,true).animate({opacity: 1},1000).css({"z-index": 1}).siblings().stop(true,true).animate({opacity: 0},1000).css({"z-index": 0});
		$(".neDot dd").eq(k).addClass("Dotselect").siblings().removeClass("Dotselect");
		//左右隐藏条
		if(k==1){
			//prev
			$('#PrevCont o').css({'backgroundImage':'url(img/1-1.jpg)'});
			$('#PrevCont h2').text('《天下》手游');
			$('#PrevCont p').text('今日App Store正式上线');
			//next
			$('#NextCont o').css({'backgroundImage':'url(img/4-4.jpg)'});
			$('#NextCont h2').text('《倩女幽魂》');
			$('#NextCont p').text('倩女幽魂手游正式上线');
		}else if(k==2){
			//prev
			$('#PrevCont o').css({'backgroundImage':'url(img/3-3.jpg)'});
			$('#PrevCont h2').text('《永恒文明》');
			$('#PrevCont p').text('神秘古文明 征战在即！');
			//next
			$('#NextCont o').css({'backgroundImage':'url(img/2-2.jpg)'});
			$('#NextCont h2').text('魔法禁书目录');
			$('#NextCont p').text('正版手游 事前登录开启');
		}else if(k==3){
			//prev
			$('#PrevCont o').css({'backgroundImage':'url(img/4-4.jpg)'});
			$('#PrevCont h2').text('《倩女幽魂》');
			$('#PrevCont p').text('倩女幽魂手游正式上线');
			//next
			$('#NextCont o').css({'backgroundImage':'url(img/5-5.jpg)'});
			$('#NextCont h2').text('520游戏热爱日');
			$('#NextCont p').text('游戏热爱者的节日，释放热爱！');
		}else if(k==4){
			//prev
			$('#PrevCont o').css({'backgroundImage':'url(img/2-2.jpg)'});
			$('#PrevCont h2').text('魔法禁书目录');
			$('#PrevCont p').text('正版手游 事前登录开启');
			//next
			$('#NextCont o').css({'backgroundImage':'url(img/1-1.jpg)'});
			$('#NextCont h2').text('《天下》手游');
			$('#NextCont p').text('今日App Store正式上线');
		}else if(k==0){
			//prev
			$('#PrevCont o').css({'backgroundImage':'url(img/5-5.jpg)'});
			$('#PrevCont h2').text('520游戏热爱日');
			$('#PrevCont p').text('游戏热爱者的节日，释放热爱！');
			//next
			$('#NextCont o').css({'backgroundImage':'url(img/3-3.jpg)'});
			$('#NextCont h2').text('《永恒文明》');
			$('#NextCont p').text('神秘古文明 征战在即！');
		}
		clearInterval(timer);
		timer = setTimeout(ShowBanner,5000);			
		k++;
		if(k==5){k=0}		
	}
	//自动播放
	ShowBanner();
	//圆点切换
	$('.neDot dd').click(function(){
		var i = $(this).index();
		k = i;
		$(".neDot dd").eq(k).addClass("Dotselect").siblings().removeClass("Dotselect");
		clearInterval(timer);
		timer = setTimeout(ShowBanner,0);
		console.log(k);
	});		
	//切换轮播
	/*var o = 0;
	function ShowBanner2(){
		k==o;
		o--;
		$('.NEbPic li').eq(o).stop(true,true).animate({opacity: 1},1000).css({"z-index": 1}).siblings().stop(true,true).animate({opacity: 0},1000).css({"z-index": 0});
		$(".neDot dd").eq(o).addClass("Dotselect").siblings().removeClass("Dotselect");		
		if(o==-1){o=4}
		console.log(o);
	}*/
	//左切换	
	$('.NEbPrev').click(function(){
		clearInterval(timer);
		timer = setTimeout(ShowBanner,0);
	});	
	//右切换
	$('.NEbNext').click(function(){
		clearInterval(timer);
		timer = setTimeout(ShowBanner,0);
	});
	//游戏动态 
	$('#dtBtn2').click(function(){
		$(this).css({'backgroundPosition':'-47px -20px'}).siblings('i').css({'backgroundPosition':'-37px -20px'});
		$('.NEnPic ul').stop(true,true).animate({marginLeft:'-640px'},500);
	})
	$('#dtBtn1').click(function(){
		$(this).css({'backgroundPosition':'-47px -20px'}).siblings('i').css({'backgroundPosition':'-37px -20px'});
		$('.NEnPic ul').stop(true,true).animate({marginLeft:'0'},500);
	})	
	//热点手游  换一批 
	function ListQH1(li1All,li1,li2,li3,li2All,li21,li22,li23){
		li1All.css({'transform':'scale(0,0)','opacity':0,'transition':'all 0.8s'});
		li1.css({'transitionDelay':'0.2s'});
		li2.css({'transitionDelay':'0.4s'});
		li3.css({'transitionDelay':'0.6s'});
		li2All.css({'transform':'scale(1,1)','opacity':1,'transition':'all 0.8s'});
		li21.css({'transitionDelay':'0.8s'});
		li22.css({'transitionDelay':'1.0s'});
		li23.css({'transitionDelay':'1.2s'});
	}
	function ListQH2(li2All,li21,li22,li23,li3All,li31,li32,li33){
		li2All.css({'transform':'scale(0,0)','opacity':0,'transition':'all 0.8s'});
		li21.css({'transitionDelay':'0.2s'});
		li22.css({'transitionDelay':'0.4s'});
		li23.css({'transitionDelay':'0.6s'});
		li3All.css({'transform':'scale(1,1)','opacity':1,'transition':'all 0.8s'});
		li31.css({'transitionDelay':'0.8s'});
		li32.css({'transitionDelay':'1.0s'});
		li33.css({'transitionDelay':'1.2s'});
	}
	function ListQH3(li3All,li31,li32,li33,li1All,li1,li2,li3){
		li3All.css({'transform':'scale(0,0)','opacity':0,'transition':'all 0.8s'});
		li31.css({'transitionDelay':'0.2s'});
		li32.css({'transitionDelay':'0.4s'});
		li33.css({'transitionDelay':'0.6s'});
		li1All.css({'transform':'scale(1,1)','opacity':1,'transition':'all 0.8s'});
		li1.css({'transitionDelay':'0.8s'});
		li2.css({'transitionDelay':'1.0s'});
		li3.css({'transitionDelay':'1.2s'});
	}
	var flagLi = 1;
	$('#changePicA').click(function(){
		if(flagLi==1){
			ListQH1($('#neHotCon1Li li'),$('.neHotCon_1'),$('.neHotCon_2'),$('.neHotCon_3'),$('#neHotCon1Li2 li'),$('.neHotCon_21'),$('.neHotCon_22'),$('.neHotCon_23'));
			flagLi = 2;
		}else if(flagLi==2){
			ListQH2($('#neHotCon1Li2 li'),$('.neHotCon_21'),$('.neHotCon_22'),$('.neHotCon_23'),$('#neHotCon1Li3 li'),$('.neHotCon_31'),$('.neHotCon_32'),$('.neHotCon_33'));
			flagLi = 3;
		}else if(flagLi==3){
			ListQH3($('#neHotCon1Li3 li'),$('.neHotCon_31'),$('.neHotCon_32'),$('.neHotCon_33'),$('#neHotCon1Li li'),$('.neHotCon_1'),$('.neHotCon_2'),$('.neHotCon_3'));
			flagLi=1;
		}
	})
	//玩家热议  切换 
	$('#discussTab').click(function(){
		$(this).css({'color':'#C80E2F'});
		$('#discussVideo').css({'color':'#272a2c'});		
		$('.neGET1Co').css({'color':'#272a2c !important'});
		$('#changePicC').css({'display':'block'});
		$('#changePicB').css({'display':'none'});
		$('.neGE_video').stop(true,true).animate({right:'1366px'},500);
		$('.neGE_hotSay').stop(true,true).animate({left:0},500);		
	})
	$('#discussVideo').click(function(){
		$(this).css({'color':'#C80E2F'});
		$('#discussTab').css({'color':'#272a2c'});
		$('#changePicC').css({'display':'none'});
		$('#changePicB').css({'display':'block'});
		$('.neGE_video').stop(true,true).animate({right:0},500);
		$('.neGE_hotSay').stop(true,true).animate({left:'1366px'},500);
	})
	//游戏视频  换一批 
	var flagLi2 = 1;
	$('#changePicB').click(function(){
		if(flagLi2==1){
			ListQH1($('#videoList1 li'),$('.videoList_1'),$('.videoList_2'),$('.videoList_3'),$('#videoList2 li'),$('.videoList_21'),$('.videoList_22'),$('.videoList_23'));
			flagLi2 = 2;
		}else if(flagLi2==2){
			ListQH2($('#videoList2 li'),$('.videoList_21'),$('.videoList_22'),$('.videoList_23'),$('#videoList3 li'),$('.videoList_31'),$('.videoList_32'),$('.videoList_33'));
			flagLi2 = 3;
		}else if(flagLi2==3){
			ListQH3($('#videoList3 li'),$('.videoList_31'),$('.videoList_32'),$('.videoList_33'),$('#videoList1 li'),$('.videoList_1'),$('.videoList_2'),$('.videoList_3'));
			flagLi2=1;
		}
	})
	//玩家热议  换一批 
	var flagLi3 = 1;
	$('#changePicC').click(function(){
		if(flagLi3==1){
			ListQH1($('#hotList1 li'),$('.hotList_1'),$('.hotList_2'),$('.hotList_3'),$('#hotList2 li'),$('.hotList_21'),$('.hotList_22'),$('.hotList_23'));
			flagLi3 = 2;
		}else if(flagLi3==2){
			ListQH2($('#hotList2 li'),$('.hotList_21'),$('.hotList_22'),$('.hotList_23'),$('#hotList3 li'),$('.hotList_31'),$('.hotList_32'),$('.hotList_33'));
			flagLi3 = 3;
		}else if(flagLi3==3){
			ListQH3($('#hotList3 li'),$('.hotList_31'),$('.hotList_32'),$('.hotList_33'),$('#hotList1 li'),$('.hotList_1'),$('.hotList_2'),$('.hotList_3'));
			flagLi3=1;
		}
	})	
})
