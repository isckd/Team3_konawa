$(document).ready(function(){
  $(window).scroll(function(){
      var here = $("#sticky-section").offset().top;
      var height = $(document).scrollTop();
      var originHeight = $("#sticky-section").height();
      var scroll = height - here;
      var sc = scroll * 100 / originHeight;
      console.log("sticky section scroll% = " + scroll * 100 / originHeight + "%");
        if(sc < 10){
          $("#sticky-span").css("opacity", "0.1");
        } else if (sc < 20) {
          $("#sticky-span").css("opacity", "0.2");
        } else if (sc < 30) {
          $("#sticky-span").css("opacity", "0.3");
        } else if (sc < 40) {
          $("#sticky-span").css("opacity", "0.4");
        } else if (sc < 50) {
          $("#sticky-span").css("opacity", "0.5");
        } else if (sc < 60) {
          $("#sticky-span").css("opacity", "0.6");
        } else if (sc < 70) {
          $("#sticky-span").css("opacity", "0.7");
        } else if (sc < 80) {
          $("#sticky-span").css("opacity", "0.8");
        } else if (sc < 90) {
          $("#sticky-span").css("opacity", "0.9");
        } else {
          $("#sticky-span").css("opacity", "0.9");
        }
  })
})
// dd
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    // const mainNav = document.body.querySelector('#mainNav');
    // if (mainNav) {
    //     new bootstrap.ScrollSpy(document.body, {
    //         target: '#mainNav',
    //         offset: 74,
    //     });
    // };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});



// owl carousel js
function MySlider1__init() {
    $('.my-slider-1 > .owl-carousel').owlCarousel({
      responsive:{
        1000:{
          items:5,
          margin:50
        },
        600:{
            items:4,
            margin:20
        },
        0:{
            items:3,
            margin:5
        }
      },
      autoWidth:false,
      autoplay:true, // 오토 플레이
      autoplayTimeout:1500, // 오토 플레이 시에 다음 슬라이드로 넘어가는 주기
      autoplayHoverPause:false, /* 필수 */
      smartSpeed: 2000,
      loop:true,
      dots:false,
      
    });
  }
  MySlider1__init();

  // owl carousel js
function MySlider2__init() {
    $('.my-slider-2 > .owl-carousel').owlCarousel({
      responsive:{
        1000:{
          items:5,
          margin:50
        },
        600:{
            items:4,
            margin:20
        },
        0:{
            items:3,
            margin:5
        }
      },
      autoWidth:false,
      autoplay:true, // 오토 플레이
      autoplayTimeout:1500, // 오토 플레이 시에 다음 슬라이드로 넘어가는 주기
      autoplayHoverPause:false, /* 필수 */
      smartSpeed: 2000,
      loop:true,
      dots:false,
      rtl:true
      
    });
  }
  MySlider2__init();

//   typeit
new TypeIt("#type-title", {
    speed: 200,
    waitUntilVisible: true,
    loop: false,
    afterComplete: function (instance) {
        instance.destroy();
      }
  })
  .type("새ㄹㅗ운") // 타이핑
  .pause(100) //멈춤
  .delete(4)
  .type("특별한 ")
  .pause(500)
  .type("복지의")
  .pause(1000)
  .type(" 시작")
  .move(1)
  .type("<br/>")
  .pause(1000)
  .type("<span class='kona-color'>KONA BIZ</span>")
  .pause(100)
  .type("로 부터")
  .go(); // 실행

  new TypeIt("#tag-title", {
    speed: 50,
    waitUntilVisible: true,
    loop: false,
    cursor: false,
  })
  .pause(10000)
  .type("<div style='font-size: 1rem'><span class='left-gray'>#도입비0원#연회비0원</span><span style='color: blue;'>#사원증#교통카드</span></div>")
  .break()
  .type("<span style='color: blue;'>#식대지원#한번에</span><span class='left-gray'>#복지#MZ오피스#MZ복지</span>")
  .go();


