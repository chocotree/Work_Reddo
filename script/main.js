$(function(){
    // *****************************
    // ======= Page Loading ========
    // *****************************
    $('#loading').delay(400)
                 .fadeOut(300);


    // *****************************
    // ========== wow.js ===========
    // *****************************
    new WOW().init();

    // *****************************
    // ============ NAV ============
    // *****************************
    var menu = $('#menu');
    var linkList = menu.find('ul');
    var btnBar = $(menu.find('.btn-bar'));
    // var windowOffset = window.pageYOffset;

        // Click event: toggle the NAV bar
    btnBar.click(function() {
        linkList.slideToggle();
    })


    // *****************************
    // ====== Text Animation =======
    // *****************************
    var $textBox = $('#top .text-animation-box');
    var $textTitle = $textBox.find('h1')
    var count = 0;
    textAnimation();
        // (transition: 1sec) * 2 (cuz addClass, removeClass) + interval(1.2 sec) ==> 3.2 sec
    var infinite = setInterval(textAnimation, 3200)
    function textAnimation() {
        $textBox.addClass('move-left');
        $textTitle.addClass('move-right');
        var timer;
        clearTimeout(timer);
        timer = setTimeout(function() {  // the two elements have attr : transition 1s
            count ++;
            // console.log(count);
            if (count % 3 == 1) {
                $textTitle.text('Friendly People');
            }
            else if (count % 3 == 2) {
                $textTitle.text('Be Creative')
            }
            else {
                $textTitle.text('Digital Agency')
            }
            $textBox.removeClass('move-left');
            $textTitle.removeClass('move-right');
        }, 1200)
    }

    

    // *****************************
    // ======== Media Query ========
    // *****************************
    const mediaScreen_768 = window.matchMedia('(max-width: 768px)'); // is an  object
        // if match the screen max-width
    if (mediaScreen_768.matches) {
        linkList.hide();
    }        
    function hideNav(e) {
        if (e.matches) {
            linkList.hide();
        }
        else {
            linkList.show();
        }
    }
    mediaScreen_768.addListener(hideNav);



    // *****************************
    // ========== Isotope ==========
    // *****************************
    var portfolioContainer = $('#two .portfolio-item');
    var portfolioButtons = $('#two .portfolio-menu li');
    
    $(portfolioButtons).click(function() { // change button color
        $(portfolioButtons).removeClass('active');
        $(this).addClass('active');
        let selectorItem = $(this).attr('data-filter');
        portfolioContainer.isotope({
            filter: selectorItem
        });
    })

    portfolioContainer.isotope({
        itemSelector: '.item',
        layoutMode: 'masonry',
        masonry: {
                // columnWidth: 50,
                isFitWidth: true
            },     
    })


    // *****************************
    // ====== Magnific Popup =======
    // *****************************
    $('.view').magnificPopup({
        type: 'image',
        gallery: {enabled: true}
    })

    $('.view-youtube').magnificPopup({
        type: 'iframe',
        fixedContentOn: true,
    })


    // *****************************
    // ========= appear.js =========
    // *****************************        
    var barContainer = $('#six .inner');
    var barContent = barContainer.find('.content');
    barContent.appear();    // very important, I don't know why delete this line and the appear function won't execute correctly.
    barContent.one('appear', barContent, function() {
        let status = $(this).find('span').text();
        // console.log(status);
        let bar = $(this).find('.bar div');
        // console.log(bar.css('width'));
        bar.animate({
            width: status
        }, 3000)
    });    


    // *****************************
    // ==== window scroll event ====
    // *****************************
    // $.stellar();
    var $bgTop = $('#top .bg');
    var $btnToTop = $('#to-top')
    const $parallex = $($('#seven .inner'));
    $(window).on('scroll', function() {        
            // parallax effect
        let offset = this.pageYOffset;
        $bgTop.css('backgroundPositionY', offset * 0.3);
        $parallex.css('backgroundPositionY', offset * 0.6);
            // show / hide the to-top button
        if (offset > 250) {
            $btnToTop.fadeIn();
        }
        else {
            $btnToTop.fadeOut();
        }
    })
    

    // *****************************
    // ======= owl carousel ========
    // *****************************    
    $('#seven .owl-carousel').owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 2000,
        loop: true,
        autoplayHoverPause: true,
    });

    $('#eight .owl-carousel').owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 2000,
        loop: true,
        autoplayHoverPause: true,
        margin: 10,
        responsive:{
            0:{items: 2},
            990:{items: 1},
            1200:{items: 3}
        }
    });
})