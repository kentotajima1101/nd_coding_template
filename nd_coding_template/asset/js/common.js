/*使う分だけ使用してください

//アコーディオン
$(function(){
    $(".faq_list dt").on("click", function() {
    $(this).next().slideToggle();
    $(this).toggleClass("active");
    });
});

//モーダル
$(function(){
    $('.modal_open').each(function(){
        $(this).on('click',function(){
            var target = $(this).data('target');
            var modal = document.getElementById(target);
            $(modal).fadeIn();
            return false;
        });
    });
    $('.modal_bg').on('click',function(){
        $('.modal_content').fadeOut();
        return false;
    }); 
    $('.modal_close').on('click',function(){
        $('.modal_content').fadeOut();
        return false;
    }); 
});

//スマホメニュー
$(function() {
    $('.sp_navi').click(function() {
        $(this).toggleClass("active");
        $('.sp_menu').toggleClass('active');
 
        if ($('.sp_menu').hasClass('active')) {
            $('.sp_menu').addClass('active');
        } else {
            $('.sp_menu').removeClass('active');
        }
    });
});

//スムーススクロール
$(function(){
    $('a[href^="#"]').click(function(){
      let speed = 500;
      let href= $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });

//スクロール位置を取得し、クラスを付与
$(function(){
	$(window).on('load scroll',function (){
		$('.animation,.animation_slow').each(function(){
			var target = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var height = $(window).height();
			if (scroll > target - height){
				$(this).addClass('active');
			}
		});
	});
});
*/