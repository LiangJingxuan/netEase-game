/*首页动画*/
Zepto(function($){
	/*动画*/	
	$('.m_nenavBtn').animate({top:0,opacity:1,transitionDelay:'1s'},700);
	$('.m_neHdBtn').animate({top:0,opacity:1,transitionDelay:'1.5s'},700);
	$('.m_neheL1').animate({top:0,opacity:1,transitionDelay:'2s'},700);
	$('.m_neheL2').animate({top:0,opacity:1,transitionDelay:'2.5s'},700);
	$('.m_neheL3').animate({top:0,opacity:1,transitionDelay:'3s'},700);
	function scrollAi(){		
		$('.m_neCli1').animate({top:0,opacity:1,transitionDelay:'1.5s'},700);
		$('.m_neCli2').animate({top:0,opacity:1,transitionDelay:'2s'},700);
		$('.m_neCli3').animate({top:0,opacity:1,transitionDelay:'2.5s'},700);
		$('.m_neCli4').animate({top:0,opacity:1,transitionDelay:'3s'},700);
		$('.m_neCli5').animate({top:0,opacity:1,transitionDelay:'3.5s'},700);
		$('.m_neCli6').animate({top:0,opacity:1,transitionDelay:'4s'},700);
		$('.m_neCli7').animate({top:0,opacity:1,transitionDelay:'4.5s'},700);
	}
	$(window).scroll(function () {	
		scrollAi();
	});
	/*导航*/
	function hideNav(){
		$('.mB2').css({'opacity':0});	    
	    $('.m_hideNav').animate({opacity:1,left:0},500);
	    $('.mB1').css({
	    	'transition':'all 0.4s',
	    	'transform':'rotate(225deg) translate(-.3rem,-.3rem)'
	    	});
	    $('.mB3').css({
	    	'transition':'all 0.4s',
	    	'transform':'rotate(-225deg) translate(-.35rem,.35rem)'
	    	/*'-webkit-transform':'rotate(-225deg) translate(-.35rem,.35rem)',
	    	'-moz-transform':'rotate(-225deg) translate(-.35rem,.35rem)',
	    	'-ms-transform':'rotate(-225deg) translate(-.35rem,.35rem)'*/
	    	});
	    $('#m_neBg').css({'-webkit-filter':'blur(3px)'});
	}
	function Nav(){
		$('.mB2').css({'opacity':1});	    
	    $('.m_hideNav').animate({opacity:0,left:'100%'},500);
	    $('.mB1').css({
	    	'transition':'all 0.4s',
	    	'transform':'rotate(0deg) translate(0rem,0rem)'
	    	});
	    $('.mB3').css({
	    	'transition':'all 0.4s',
	    	'transform':'rotate(0deg) translate(0rem,0rem)'
	    	});
	    $('#m_neBg').css({'-webkit-filter':''});
	}
	var flag = true;
	$('.m_nenavBtn').tap(function () {
	    if(flag){
	    	hideNav();
	    	flag = false;
	    }else{
	    	Nav();
	    	flag = true;
	    }
	});
	/*分类点击*/
	$('.m_neCul li a').mousedown(function(){
		$(this).css({'background':'rgba(255,255,255,.2)'});
	})
})

