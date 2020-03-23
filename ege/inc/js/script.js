$( document ).ready(function() {
    $(".menu").hide();
    $(".background__darken").hide();

    let coursecount;

    // responive shinanigans
    if($(window).width() < 1000) {
        coursecount = 2;
    } else {
        coursecount = 3;
    }
    

    //highlight second element of the first slider and
    //hide all texts except for corresponding
    $(".slider-desc__element").each(function( index ) {
        $(this).attr('value') == 2 ? $(this).css("border", "2px solid #FCB802") : null;
        $(".pros__description").each(function( index ) {
            $(this).attr('value') != 2 ? $(this).hide() : null;
        });
    });

    //showing more button logic
    $(".slider-desc__more").click(function(){
        let value = $(this).attr('value');
        console.log(value);
        $(".slider-desc__element").each(function( index ) {
            $(this).attr('value') == value ? $(this).css("border", "2px solid #FCB802") : $(this).css("border", "none");
            $(".pros__description").each(function( index ) {
                $(this).attr('value') != value ? $(this).hide() : $(this).fadeIn();
            });
        });
    });

    //showing menu
    if($(window).width() < 1000) {
        $("#showmenu").click(function() {
        $(this).hide();
        $(".background__darken").fadeIn();
        $(".menu_mobile").fadeIn();
    });
    } else{
    $("#showmenu").click(function() {
        $(this).hide();
        $(".menu_pc").fadeIn();
    });
    }

    //closing menu
    $("#closemenu").click(function(){
        $(".menu_mobile").fadeOut();
        $(".background__darken").fadeOut();
        $("#showmenu").show();
    });

    //hiding the elements that dont fit

    $( ".course" ).each(function( index ) {
        $(this).attr('value') > coursecount ? $(this).hide() : null;
      });
      
    $( ".webinar" ).each(function( index ) {
        $(this).attr('value') > coursecount ? $(this).hide() : null;
      });

    //showing and hiding courses logic
    
    $('#showcourses').click(function() {
        $( ".course" ).each(function( index ) {
            $(this).attr('value') > coursecount ? $(this).slideDown() : null;
            });
        $(this).hide()
        $("#hidecourses").fadeIn();
    });
    
    $('#hidecourses').click(function() {
        $( ".course" ).each(function( index ) {
            $(this).attr('value') > coursecount ? $(this).slideUp() : null;
            });
        $(this).hide()
        $("#showcourses").fadeIn();
    });

    //showing and hiding webinars logic


    $('#showwebinars').click(function() {
        $( ".webinar" ).each(function( index ) {
            $(this).attr('value') > coursecount ? $(this).slideDown() : null;
            });
        $(this).hide()
        $("#hidewebinars").fadeIn();
    });
    
    $('#hidewebinars').click(function() {
        $( ".webinar" ).each(function( index ) {
            $(this).attr('value') > coursecount  ? $(this).slideUp() : null;
            });
        $(this).hide()
        $("#showwebinars").fadeIn();
    });

    //scroll animation

    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        $(".menu_mobile").fadeOut();
        $(".background__darken").fadeOut();
        $("#showmenu").show();
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    //slider initialization

    if($(window).width() < 500) {
         $('.slider-desc').slick({
            arrows : true,
            slidesToShow: 1,
            autoplay: true,
            pauseOnFocus: true,
            autoplaySpeed : 4000
        });
      }else if($(window).width() < 760) {
        $('.slider-desc').slick({
            arrows : true,
            slidesToShow: 2,
            autoplay: true,
            pauseOnFocus: true,
            autoplaySpeed : 4000
       });}else if($(window).width() < 1000) {
        $('.slider-desc').slick({
            arrows : true,
            slidesToShow: 1,
            autoplay: true,
            pauseOnFocus: true,
            autoplaySpeed : 4000
       });}else if($(window).width() < 1300) {
        $('.slider-desc').slick({
            arrows : true,
            slidesToShow: 2,
            autoplay: true,
            pauseOnFocus: true,
            autoplaySpeed : 4000
       });} else {
        $('.slider-desc').slick({
            arrows : true,
            slidesToShow: 3,
            autoplay: true,
            pauseOnFocus: true,
            autoplaySpeed : 4000
        });

      }

      $('.about-slider').slick({
        arrows : true,
        slidesToShow: 1
    });
    //Отправка формы
    $('#subForm').submit(function(e) {
        let form = $(this);
        let data = [];

        form.find('input, textearea, select').each(function() {
            // добавим новое свойство к объекту $data
            // имя свойства – значение атрибута name элемента
            // значение свойства – значение свойство value элемента
            data.push($(this).val());
            // console.log($(this).val());
          });
        $.ajax({
            url: 'http://ege1/ajax/ajaxForm.php',
            type: 'post',
            data: {
                type: $('#inputType').val(),
                name: $('#inputName').val(),
                email: $('#inputEmail').val(),
                phone: $('#inputPhone').val()
            }
        });
        alert('Ваша заявка успешно отправлена!');
    });
    

});