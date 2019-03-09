$(document).ready(function () {



    //FILL ELEMENTS DEPENDS OF CATEGORY
    $('[data-category]').each(function () {
        var color = $(this).data('category');
        $(this).find('.category-bg').css('background', color);
        $(this).find('.category-border').css('border-color', color);
        $(this).find('.category-color').css('color', color);
    });


    // EASE SCROLL

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });


    //ANIMATION 

    function animation() {
        var windowHight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            var position = $(this).offset().top;
            var animation = $(this).attr('data-animation');
            //var delay = $(this).attr('data-delay');
            if (position < scroll + windowHight - 60) {
                $(this).addClass(animation);
                //$(this).css('animation-delay', delay);
            }
            console.log(position);
        });

    }

    animation();

    $(window).scroll(function () {
        animation();
    });

    //SEARCH

    $('.search-icon').click(function () {
        $(this).next().slideToggle();
    });

    //HAMBURGER
    $('.navbar-toggler').click(function () {
        $(this).toggleClass('active');
    });


    //  OWL-CAROUSEL
    if ($('.owl-carousel').length > 0) {

        $('.lead-slider').owlCarousel({
            dots: false,
            nav: true,
            loop: true,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            items: 1
        });
        $('.newest-comments-slider').owlCarousel({
            dots: true,
            nav: false,
            loop: true,
            responsive: {
                0: {
                    items: 1
                },
                450: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        });
    }


    /*FORM VALIDATION   COMMENTS-FORM*/
    $(function () {
        $(".comments-form").validate({
            highlight: function (element) {
                $(element).closest('.form-group').addClass("has-danger");
                $(element).addClass("form-control-danger");
            },
            unhighlight: function (element) {
                $(element).closest('.form-group').removeClass('has-danger').addClass('has-success');
                $(element).removeClass('form-control-danger').addClass('form-control-success');
            },
            rules: {
                name: {
                    required: true,
                    minlength: 5,
                    maxlength: 15
                },
                message: {
                    required: true,
                    minlength: 20,
                    maxlength: 150
                },

            },
            messages: {
                name: {
                    required: "Polje je obavezno.",
                    minlength: "Morate uneti najmanje 5 karaktera.",
                    maxlength: "Maksimalan unos karaktera je 15."
                },
                message: {
                    required: 'Polje je obavezno.',
                    minlength: "Morate uneti najmanje 20 karaktera.",
                    maxlength: "Maksimalan unos karaktera je 150."
                },
            },
            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo($(element).closest('.form-group').find('.error-msg'));
            }

        });
    });

    /*FORM VALIDATION  COMMENTS-ITEM-FORM*/
    $(function () {
        $(".comments-item-form").validate({
            highlight: function (element) {
                $(element).closest('.form-group').addClass("has-danger");
                $(element).addClass("form-control-danger");
            },
            unhighlight: function (element) {
                $(element).closest('.form-group').removeClass('has-danger').addClass('has-success');
                $(element).removeClass('form-control-danger').addClass('form-control-success');
            },
            rules: {
                answer: {
                    required: true,
                    minlength: 20,
                    maxlength: 150
                }

            },
            messages: {
                answer: {
                    required: 'Polje Odgovor je obavezno polje.',
                    minlength: "Morate uneti najmanje 20 karaktera.",
                    maxlength: "Maksimalan unos karaktera je 150."
                }
            },
            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo($(element).closest('.form-group').find('.error-msg'));
            }

        });
    });



});//end document.ready


