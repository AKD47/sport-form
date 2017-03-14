jQuery(document).ready(function() {

    var controller = $.superscrollorama();

    controller.addTween('#fade-it', TweenMax.from( $('#fade-it'), 3, {css:{opacity: 0}}));
    controller.addTween('#fade-it-3', TweenMax.from( $('#fade-it-3'), 3, {css:{opacity: 0}}));
    controller.addTween('#fade-it-4', TweenMax.from( $('#fade-it-4'), 3, {css:{opacity: 0}}));
    controller.addTween('#fade-it-5', TweenMax.from( $('#fade-it-5'), 3, {css:{opacity: 0}}));
    controller.addTween('#fade-it-6', TweenMax.from( $('#fade-it-6'), 3, {css:{opacity: 0}}));
    controller.addTween('#fade-it-7', TweenMax.from( $('#fade-it-7'), 3, {css:{opacity: 0}}));
    controller.addTween('#fade-it-8', TweenMax.from( $('#fade-it-8'), 3, {css:{opacity: 0}}));
    controller.addTween('#fade-it-9', TweenMax.from( $('#fade-it-9'), 3, {css:{opacity: 0}}));
    controller.addTween('#fly-it', TweenMax.from( $('#fly-it'), 1, {css:{right:'1000px'}, ease:Quad.easeInOut}));
    controller.addTween('#fly-it-3', TweenMax.from( $('#fly-it-3'), 1, {css:{right:'1000px'}, ease:Quad.easeInOut}));
    controller.addTween('#fly-it-4', TweenMax.from( $('#fly-it-4'), 1, {css:{right:'1000px'}, ease:Quad.easeInOut}));
    controller.addTween('#fly-it-5', TweenMax.from( $('#fly-it-5'), 1, {css:{right:'1000px'}, ease:Quad.easeInOut}));
    controller.addTween('#fly-it-6', TweenMax.from( $('#fly-it-6'), 1, {css:{right:'1000px'}, ease:Quad.easeInOut}));
    controller.addTween('#fly-it-7', TweenMax.from( $('#fly-it-7'), 1, {css:{right:'1000px'}, ease:Quad.easeInOut}));
    controller.addTween('#fly-it-8', TweenMax.from( $('#fly-it-8'), 1, {css:{right:'1000px'}, ease:Quad.easeInOut}));
    controller.addTween('#fly-it-9', TweenMax.from( $('#fly-it-9'), 1, {css:{right:'1000px'}, ease:Quad.easeInOut}));
    controller.addTween('#spin-it', TweenMax.from( $('#spin-it'), .25, {css:{opacity:0, rotation: 720}, ease:Quad.easeOut}));
    controller.addTween('#scale-it', TweenMax.fromTo( $('#scale-it'), .25, {css:{opacity:0, fontSize:'20px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, fontSize:'240px'}, ease:Quad.easeInOut}));
    controller.addTween('#smush-it', TweenMax.fromTo( $('#smush-it'), .25, {css:{opacity:0, 'letter-spacing':'30px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, 'letter-spacing':'-10px'}, ease:Quad.easeInOut}), 0, 100); // 100 px offset for better timing

    $('main.registration a[href^="#"], main.registration a[href^="."]').click(function() {
        var scroll_el = jQuery(this).attr('href');
        if (jQuery(scroll_el).length != 0) {
            jQuery('html, body').animate({
                scrollTop: jQuery(scroll_el).offset().top-70
            }, 1200);
        }
        return false;
    });

        $(".input input[type='checkbox']").click(function(e) {
            e.preventDefault();  
            if($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }
        })
});


/*$("input[type='submit']").click(function() {

    if ( !Array.prototype.filter.call( document.getElementsByName('select-km'), function( elem ){ return elem.checked; } ).length ) {
        alert("Please, choose something!");
    }

});*/ 

$(".input").click(function(e) {

    $("label[type='checkbox']", this)
    var pX = e.pageX,
        pY = e.pageY,
        oX = parseInt($(this).offset().left),
        oY = parseInt($(this).offset().top);

    $(this).addClass('active');

    if ($(this).hasClass('active')) {
        $(this).removeClass('active')
        if ($(this).hasClass('active-2')) {
            if ($("input", this).attr("type") == "checkbox") {
                if ($("span", this).hasClass('click-efect')) {
                    $(".click-efect").css({
                        "margin-left": (pX - oX) + "px",
                        "margin-top": (pY - oY) + "px"
                    })
                    $(".click-efect", this).animate({
                        "width": "0",
                        "height": "0",
                        "top": "0",
                        "left": "0"
                    }, 400, function() {
                        $(this).remove();
                    });
                } else {
                    $(this).append('<span class="click-efect x-' + oX + ' y-' + oY + '" style="margin-left:' + (pX - oX) + 'px;margin-top:' + (pY - oY) + 'px;"></span>')
                    $('.x-' + oX + '.y-' + oY + '').animate({
                        "width": "500px",
                        "height": "500px",
                        "top": "-250px",
                        "left": "-250px",
                    }, 600);
                }
            }

            if ($("input", this).attr("type") == "radio") {

                $(".area .input input[type='radio']").parent().removeClass('active-radio').addClass('no-active-radio');
                $(this).addClass('active-radio').removeClass('no-active-radio');

                $(".input.no-active-radio").each(function() {
                    $(".click-efect", this).animate({
                        "width": "0",
                        "height": "0",
                        "top": "0",
                        "left": "0"
                    }, 400, function() {
                        $(this).remove();
                    });
                });

                if (!$("span", this).hasClass('click-efect')) {
                    $(this).append('<span class="click-efect x-' + oX + ' y-' + oY + '" style="margin-left:' + (pX - oX) + 'px;margin-top:' + (pY - oY) + 'px;"></span>')
                    $('.x-' + oX + '.y-' + oY + '').animate({
                        "width": "500px",
                        "height": "500px",
                        "top": "-250px",
                        "left": "-250px",
                    }, 600);
                }

            }
        }
        if ($(this).hasClass('active-2')) {
            $(this).removeClass('active-2')
        } else {
            $(this).addClass('active-2');
        }
    }

    $(function() {
        $('.step-2 .area').each(function() {
            $(this).find('.item').each(function(i) {
                $(this).click(function(){
                    $(this).addClass('active').siblings().removeClass('active')
                        .closest('div.selections-steps').find('div.select').removeClass('active').eq(i).addClass('active');
                }); 
            });
        });

        $('.step-2 .area .item.group').click(function () {
            $('a.reuse').attr('href', '#step-10');
        });

        $('.step-2 .area .item.one').click(function () {
            $('a.reuse').attr('href', '#step-3');
        }); 
    });
});