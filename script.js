$(document).ready(function(){
    $(window).scroll(function (){
        if(this.scrollY > 20){
           $('.navbar').addClass('sticky');
        }
        else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY >500){
            $('.scroll-up-btn').addClass("show");
        }
        else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //typing animation script
    
    var typed = new Typed(".typing",{
        strings: ["Frond-End Developer"] ,
        typeSpeed: 100,
        backDelay: 900,
        backSpeed: 30,
        loop: true,
    })

    var typed2 = new Typed(".typing2",{
        strings: ["Frond-End Developer"] ,
        typeSpeed: 100,
        loop: true,
        backDelay: 900,
        backSpeed: 30,
    })


    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0})
    })

        //toggle menu/navbar  script
        $(".menu-btn").click(function(){
            $('.navbar .menu').toggleClass("active");
            $('.menu-btn i').toggleClass("active");
        });
        // owl carousel script
        $('.carousel').owlCarousel({
            
        })
});