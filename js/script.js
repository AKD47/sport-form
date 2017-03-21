$(document).ready(function () {

    /* var training;*/
    /*select type of training*/
    $(document).on('click', '.individuals', function () {
        $(this).addClass('open');
        $('.group').removeClass('open');
        $('#months, #num-of-tr, #mum-of-pers').detach();
    });

    $(document).on('click', '.group', function () {
        $(this).addClass('open');
        $('.individuals').removeClass('open');
        $('#days-of-week, #time, #trainer').detach();
    });
    /*close select type of training*/
    //steps animation//
    $(document).on('click', '.next', function () {//скрол по клику к следующему шагу
        event.preventDefault();//убираем свойство ссылки по умолчанию
        var scroll_el = $(this),//переменная для ссылки переключения на следующий шаг
            /*sectionTitle = $(this).closest('section').find('.title').text(),
            selectedValues = [],*/
            nextSection = $(this).closest('section').next('section'),//переменная для следующей секции
            nextWrap = $(this).closest('section').next().find('.wrap'),//находим следующий шаг
            box = $(this).closest('section').next('section.fly'),//находим следющую секцию с классом-идентификатором
            inputs = $(this).closest('section').find('input:checkbox:checked, input:radio:checked, input[type="text"]'),//находим в секции с кнопкой все нужные инпуты
            empty = true;//индикатор для переключения на следующий шаг (значение по умолчанию "true")

        if (inputs.length > 0) {//проверяем наличие в секции отмеченых инпутов
            $.each(inputs, function () {//при наличии в секции инпутов идем по ним
                if (typeof $(this).val() == 'undefined' || $(this).val() == '') {//если инпут не отмечен или не заполнен
                    empty = false;//индикатор запрещает переключаться на другой шаг
                } else {
                    /*if ($(this).next('label').text() != '') {
                        selectedValues.push($(this).next('label').text());
                    } else {
                        selectedValues.push($(this).val());
                    }*/
                    /* selectedValues.push($(this).next('label').text());*/
                }

            });
        } else {// если их нет,
            empty = false;//индикатор запрещает переключаться на другой шаг
        }

        /*console.log(sectionTitle);
        console.log(selectedValues);*/

        if ($(scroll_el).length != 0 && empty) {//проверяем наличие кнопки и значение индикатора            
/*
            $('#total').find('.right').append('<div>' + sectionTitle + ': ' + selectedValues.join(', ') + '</div>');
*/
            nextSection.show();
            $('html, body').animate({scrollTop: nextWrap.offset().top - 70}, 1200);//скролим браузер до следующего шага           
            box.animate({right: "0"}, 1500);//показываем поле секции
            optionData();
        }
        return false;
    });

    $(document).on('click', '.prev', function () {//скрол по клику к следующему шагу
        event.preventDefault();//убираем свойство ссылки по умолчанию
        var scroll_el = $(this),//переменная для ссылки переключения на следующий шаг
            prevWrap = $(this).closest('section').prev().find('.wrap');//находим следующий шаг

        if ($(scroll_el).length != 0) {//проверяем наличие кнопки и значение индикатора
            $('html, body').animate({scrollTop: prevWrap.offset().top - 70}, 1200);//скролим браузер до следующего шага
        }
        return false;
    });
    //close steps animation//   

    $(document).on('click', '.input input[type="checkbox"], .input input[type="radio"]', function (e) {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });


    $(document).on('click', '.input', function (e) {

        $("label[type='checkbox']", this);
        var pX = e.pageX,
            pY = e.pageY,
            oX = parseInt($(this).offset().left),
            oY = parseInt($(this).offset().top);

        $(this).addClass('active');

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            if ($(this).hasClass('active-2')) {
                if ($("input", this).attr("type") == "checkbox") {
                    if ($("span", this).hasClass('click-efect')) {
                        $(".click-efect").css({
                            "margin-left": (pX - oX) + "px",
                            "margin-top": (pY - oY) + "px"
                        });
                        $(".click-efect", this).animate({
                            "width": "0",
                            "height": "0",
                            "top": "0",
                            "left": "0"
                        }, 400, function () {
                            $(this).remove();
                        });
                    } else {
                        $(this).append('<span class="click-efect x-' + oX + ' y-' + oY + '" style="margin-left:' + (pX - oX) + 'px;margin-top:' + (pY - oY) + 'px;"></span>');
                        $('.x-' + oX + '.y-' + oY + '').animate({
                            "width": "500px",
                            "height": "500px",
                            "top": "-250px",
                            "left": "-250px"
                        }, 600);
                    }
                }
                if ($("input", this).attr("type") == "radio") {

                    $(".area .input input[type='radio']").parent().removeClass('active-radio').addClass('no-active-radio');
                    $(this).addClass('active-radio').removeClass('no-active-radio');

                    $(".input.no-active-radio").each(function () {
                        $(".click-efect", this).animate({
                            "width": "0",
                            "height": "0",
                            "top": "0",
                            "left": "0"
                        }, 400, function () {
                            $(this).remove();
                        });
                    });

                    if (!$("span", this).hasClass('click-efect')) {
                        $(this).append('<span class="click-efect x-' + oX + ' y-' + oY + '" style="margin-left:' + (pX - oX) + 'px;margin-top:' + (pY - oY) + 'px;"></span>')
                        $('.x-' + oX + '.y-' + oY + '').animate({
                            "width": "500px",
                            "height": "500px",
                            "top": "-250px",
                            "left": "-250px"
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
    });

});

function optionData() {

    /*var sectionTitle = $('.next').closest('section').find('.title').text(),    */
    /*var selectedValues = [];*/

    var data = $('.data');
    
    $('#total').find('.right').html('');

    $.each(data, function () {
        var sectionTitle = $(this).find('.title').text(),
            inputs = $(this).find('input:checkbox:checked, input:radio:checked, input[type="text"]'),//находим в секции с кнопкой все нужные инпуты
            selectedValues = [];

        $.each(inputs, function () {

            if ($(this).next('label').text() != '') {
                selectedValues.push($(this).next('label').text());
            } else {
                selectedValues.push($(this).val());
            }           

        });
       /*console.log( sectionTitle );
       console.log( selectedValues );*/
        $('#total').find('.right').append('<div>' + sectionTitle + ': ' + selectedValues.join(', ') + '</div>');
    });
}

