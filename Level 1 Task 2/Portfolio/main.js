    $(document).ready(function(){
        $('#menu').click(function(){
            $(this).toggleClass('fa-times');
            $('header').toggleClass('toggle');    
        });

        $(window).on('scroll load',function(){
            $('#menu').removeClass('fa-times');
            $('header').removeClass('toggle');

        });

        //Smooth Scrolling

        $('a[href*="#"]').on('click',function(e){
            e.preventDefault();

            $('html, body').animate({

                scrollTop : $($(this).attr('href')).offset().top,

            },
            500, 
            'linear'
            );
        });

    });


    //top-scroll
    const toTop=document.querySelector(".top");

    window.addEventListener("scroll", () => {
        if(window.pageYOffset > 100){
            toTop.classList.add("active");
        }
        else{
            toTop.classList.remove("active");
        }
    });