$(function () {
    // カーセル
    $('.carousel').slick({
        autoplay: true,
        dots: true,
        infinity: true,
        autoplaySpeed: 1500,
        arrouws: false,
        fade: true,
        pauseOnHover: false,
    });

    // リンクをホバー
    $('a').on('mouseover', function () {
            $(this).animate({
                'opacity': 0.6
            }, 300);
        }),
    $('a').on('mouseout', function () {
            $(this).animate({
                'opacity': 1.0
            }, 300);
        });

    // TOPボタンに戻るボタンの表示・非表示
    $(window).scroll(function () {
        if($(this).scrollTop() > 100) {
            $('#page-top').fadeIn();
        } else {
            $('#page-top').fadeOut();     
        }
    });


    // スクロールを滑らかにする
    $('a[href^="#"]').click(function () {
        const speed = 500;
        // リンクをクリックした時のジャンプ先を取得する
        const href = $(this).attr('href');
        // もしリンク先が#のみ、もしくは、空白の場合はリンク先をhtmlに設定
        const target = $(href == '#' || href == '' ? 'html' : href);

        // let $target;
        // if (href == '#') {
        //   $target = $('html');
        // }
        // else {
        //   $target = $(href);
        // }
        
        // リンク先の座標を取得する
        var position = target.offset().top;
        // スムーズスクロールを実行
        $("html, body").animate({scrollTop:position}, speed, "swing");
    });

    // スクロールで画像をフェードイン
    $(window).scroll(function () {
        const windowHeight = $(window).height();
        const scroll = $(window).scrollTop();

        $('.effect-fade').each(function () {
            const targetPosition = $(this).offset().top;
            if(scroll > targetPosition - windowHeight + 100) {
                $(this).addClass('effect-scroll');
            }
        });
    });

    // 画像をモーダルで拡大
    $('.course-item a').click(function () {
       const imgSrc = $(this).children().attr('src');
       $('.bigimg').children().attr('src', imgSrc);
       $('.modal').fadeIn(); 
       $('body,html').css('overfliow-y', 'hidden');
       return false;
    });

    $('.close-btn').click(function () {
        $('.modal').fadeOut();
        $('body,html').css('overflow-y', 'visible');
        return false;
    });

});