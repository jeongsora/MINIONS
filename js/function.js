$(function(){
	
	var	$container=$("#main_1>.slides>.slides_container");
	var intervalID=null;
	
	//메인 슬라이드
	$(window).load(function(){
		intervalID=setInterval(function(){
			var $slides=$("#main_1>.slides>.slides_container>li");
			var $first_slides=$slides.eq(0);
			var $second_slides=$slides.eq(1);
			
			$second_slides.stop().animate({
				"left":0
			},1000,function(){
				$first_slides.css("left",1200).appendTo($container);
			});			
		},2000);
	});
	
	//미니언즈_라이트박스
	var img = $("#main_2>.minions>.img>p>a");
	var box = $(".lightbox");
	
	img.click(function(evt){
		evt.preventDefault();
		var src = img.eq(this).css({"background-images":"url('../images/minions.jpg')"});
		$(".shadow").toggle();
		$(".lightbox>img").attr({"src":src});
	});	
	
	$("button").click(function(){
		$(".shadow").hide();		
	});
	
	$(".shadow").click(function(){
		$(this).hide();
	});
	
	box.click(function(evt){
		evt.stopPropagation();	
	});

	$(document).keyup(function(evt){
		if(evt.which==27){$(".shadow").hide();};
	});

	//스튜어트_라이트박스
	var stuart=$("#main_3>.stuart>.img>.gallery>ul>li>a");
	var Idx=0;
	var stGallery=$(".lightbox_2");
	
	stuart.click(function(evt){
		evt.preventDefault();
		Idx=stuart.index(this);
		var bgurl=stuart.eq(Idx).attr("href");
		$(".shadow_2").toggle();
		$(".lightbox_2>.shadow_img").css("background-image","url("+bgurl+")");
	});
	
	$(".lightbox_2>button").click(function(){
		$(".shadow_2").hide();		
	});
	
	$(".shadow_2").click(function(){
		$(this).hide();
	});
	
	stGallery.click(function(evt){
		evt.stopPropagation();	
	});

	$(document).keyup(function(evt){
		if(evt.which==27){$(".shadow_2").hide();};
	});
	
	//케빈_라이트박스
	var kevin=$("#main_4>.kevin>.img>.gallery>ul>li>a");
	var Idx=0;
	var kvGallery=$(".lightbox_3");
	
	kevin.click(function(evt){
		evt.preventDefault();
		Idx=kevin.index(this);
		var bgurl=kevin.eq(Idx).attr("href");
		$(".shadow_3").toggle();
		$(".lightbox_3>.shadow_img").css("background-image","url("+bgurl+")");
	});
	
	$(".lightbox_3>button").click(function(){
		$(".shadow_3").hide();		
	});
	
	$(".shadow_3").click(function(){
		$(this).hide();
	});
	
	kvGallery.click(function(evt){
		evt.stopPropagation();	
	});

	$(document).keyup(function(evt){
		if(evt.which==27){$(".shadow_3").hide();};
	});
	
	//밥_라이트박스
	var bob=$("#main_5>.bob>.img>.gallery>ul>li>a");
	var Idx=0;
	var bGallery=$(".lightbox_4");
	
	bob.click(function(evt){
		evt.preventDefault();
		Idx=bob.index(this);
		var bgurl=bob.eq(Idx).attr("href");
		$(".shadow_4").toggle();
		$(".lightbox_4>.shadow_img").css("background-image","url("+bgurl+")");
	});
	
	$(".lightbox_4>button").click(function(){
		$(".shadow_4").hide();		
	});
	
	$(".shadow_4").click(function(){
		$(this).hide();
	});
	
	bGallery.click(function(evt){
		evt.stopPropagation();	
	});

	$(document).keyup(function(evt){
		if(evt.which==27){$(".shadow_4").hide();};
	});
	
	//트레일러-슬라이드
	var $slide=$("#main_6>.trailer>.slides_container>ul>li");
	var $slide_btn=$("#main_6>.trailer>.slides_pagination>ul>li>a");
	var slide_idx=0;
	
	$slide_btn.click(function(evt){
		evt.preventDefault();
		slide_idx=$slide_btn.index(this);
		
		$slide.eq(slide_idx).stop().fadeIn(500);
		$slide.eq(slide_idx).siblings().stop().fadeOut(500);
		$slide_btn.eq(slide_idx).parent().addClass("on").siblings().removeClass("on");
	});
	
    //트레일러-비디오
    var $video=$("#main_6>.video_container>.img_btn>.video>a");
    var vIdx=0;
    
    $video.click(function(evt){
        evt.preventDefault();
        vIdx=$video.index(this);
        var vsrc=$video.eq(vIdx).attr("href");
		$("#play").attr({"src":vsrc,"autoplay":"autoplay"});
    });
    
    //스크롤
    $(document).scroll(function(){
        var scr=$("html,body").scrollTop();   
        if(scr>1){
            $("header").css({"box-shadow":"0 3px 5px gray"});
        }else{
            $("header").css({"box-shadow":"none"});
        }
    });
    
    var $mnu=$("header>.gnb>nav>ul>li>a");
    var nowIdx=0;
    var arrTopVal=[];
	arrTopVal[0]=$("#main_2").offset().top;
	arrTopVal[1]=$("#main_3").offset().top;
	arrTopVal[2]=$("#main_4").offset().top;
	arrTopVal[3]=$("#main_5").offset().top;
	arrTopVal[4]=$("#main_6").offset().top;
    
    var pageAni=function(topVal){
		$("html,body").stop().animate({
			"scrollTop":topVal
		});
	};

    $mnu.click(function(evt){
		evt.preventDefault();
		nowIdx=$mnu.index(this);
        console.log(nowIdx);
		pageAni(arrTopVal[nowIdx]-80);
	});
    
    $(window).load(function(){
		$("html,body").stop().animate({
			"scrollTop":0
		});
	});
    
    $(window).scroll(function(){
		var scrollTop=$(window).scrollTop();
        for(var i=0;i<5;i++){
			if(scrollTop>=arrTopVal[i]-200){
                $mnu.eq(i).parent().addClass("on").siblings().removeClass("on");
			}
        }
        $mnu.eq(0).scrollTop(function(){
            if(scrollTop<525){
                $mnu.eq(0).parent().removeClass("on");
            }
        });
    });
    
    $("header>.gnb>h1>a").click(function(evt){
        evt.preventDefault();
        $("html,body").stop().animate({
			"scrollTop":0
		});
    });
});
	