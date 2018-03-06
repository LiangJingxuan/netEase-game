Zepto(function($){
	/*头部视频*/
	var VissAll = $('.m_neiVideo');
	var issCon = $('#m_neissueAll');
	$('.m_neiV').tap(function(){
		VissAll.css({'visibility':'visible','opacity':1,'transition':'all 0.5s'});	
		VissAll.append('<video class="Videoiss" autoplay="autoplay" preload="auto" controls="controls" webkit-playsinline=""><source src="../m.img/m.neIssue_Video.mp4"></video>');
		issCon.css({'-webkit-filter':'blur(3px)'});
	})
	$('.m_neiVclose').tap(function(){
		VissAll.css({'visibility':'hidden','opacity':0,'transition':'all 0.5s'});
		$('.Videoiss').remove();		
		issCon.css({'-webkit-filter':''});		
	})
	/*热门资讯轮播*/
	var slider = $('.banner');
    slider.find(".slide-trigger").find("li").eq(0).addClass("cur");
    window.mySwipe = new Swipe(document.getElementById('slider'), {
        speed: 400,
        auto: 3000,
        continuous:true,
        callback: function(index, elem) {
            slider.find(".slide-trigger").find("li").eq(index).addClass("cur").siblings().removeClass("cur");           
        }        
    });
    $('.slide-trigger li').tap(function(){
        mySwipe.slide($(this).index());
    });
    /*现场嘉宾轮播*/
   var Gslider = $('.Guest');
   Gslider.find(".Gslide-trigger").find("li").eq(0).addClass("Gcur");
    window.Gswipe = new Swipe(document.getElementById('Gslider'), {
        speed: 400,
        continuous:false,
        callback: function(index, elem) {
            Gslider.find(".Gslide-trigger").find("li").eq(index).addClass("Gcur").siblings().removeClass("Gcur");           
        }        
    });    
    $('.Gslide-trigger li').tap(function(){
        Gswipe.slide($(this).index());
        
    });
})

