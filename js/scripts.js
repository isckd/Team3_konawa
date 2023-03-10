// const video = document.querySelector('video');

// video.addEventListener('ended', (event) => {  
//   video.play();
//   video.muted = true;
// });


// 흐려지는 글씨
$(document).ready(function(){
  $(window).scroll(function(){
      var here = $("#sticky-section").offset().top;
      var height = $(document).scrollTop();
      var originHeight = $("#sticky-section").height();
      var scroll = height - here;
      var sc = scroll * 100 / originHeight;
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
        const navbar_nav = document.body.querySelector(".navbar-nav"); 
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
            navbar_nav.style.display = "none";
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
            navbar_nav.style.display = "flex";
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

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
          items:10,
          margin:20
        },
        600:{
            items:8,
            margin:10
        },
        0:{
            items:5,
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

// 대각선 슬라이드
  $(document).ready(function() {

    var curPage = 1;
    var numOfPages = $(".skw-page").length;
    var animTime = 1000;
    var scrolling = false;
    var pgPrefix = ".skw-page-";

    function pagination() {
    scrolling = true;

    $(pgPrefix + curPage).removeClass("inactive").addClass("active");
    $(pgPrefix + (curPage - 1)).addClass("inactive");
    $(pgPrefix + (curPage + 1)).removeClass("active");          
    setTimeout(function() {
        scrolling = false;
    }, animTime);
    };

    function navigateUp() {
      if (curPage === 1) return;
      curPage--;
      pagination();
    };

    function navigateDown() {
      if (curPage === numOfPages) return;
      curPage++;
      pagination();
    };


    $(document).on("mousewheel DOMMouseScroll", function(e) {
      var here2 = $(".skw-pages").offset().top;
      var height2 = $(document).scrollTop();
      var originHeight2 = $(".skw-pages").height();
      var scroll2 = height2 - here2;
      const sc_2 = scroll2 * 100 / originHeight2;
      console.log(sc_2);
      if (scrolling) return;
      if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        if(sc_2 > -30 && sc_2 < 100) {
          navigateUp();
        }
      } else { 
        if(sc_2 > -30 && sc_2 < 100) {
          navigateDown();
        }  
      }
    
    });


    $(document).on("keydown", function(e) {
    if (scrolling) return;
    if (e.which === 38) {
        navigateUp();
    } else if (e.which === 40) {
        navigateDown();
    }
    });
});


// card Hover
$('.card-1').hover(
  function() {
      $('#cardLink-1', this).css('color', 'white');
  },
  function() {
      $('#cardLink-1', this).css('color', 'rgb(109, 102, 102)');
  }
);
$('.card-2').hover(
  function() {
      $('#cardLink-2', this).css('color', 'white');

  },
  function() {
      $('#cardLink-2', this).css('color', 'rgb(109, 102, 102)');
  }
);
$('.card-3').hover(
  function() {
      $('#cardLink-3', this).css('color', 'rgb(0, 0, 0)');

  },
  function() {
      $('#cardLink-3', this).css('color', 'rgb(109, 102, 102)');
  }
);
$('.card-4').hover(
  function() {
      $('#cardLink-4', this).css('color', 'white');
  },
  function() {
      $('#cardLink-4', this).css('color', 'rgb(109, 102, 102)');
  }
);


//   typeit
// new TypeIt("#type-title", {
//     speed: 200,
//     waitUntilVisible: true,
//     loop: false,
//     afterComplete: function (instance) {
//         instance.destroy();
//       }
//   })
//   .type("새ㄹㅗ운") // 타이핑
//   .pause(100) //멈춤
//   .delete(4)
//   .type("특별한 ")
//   .pause(500)
//   .type("복지의")
//   .pause(1000)
//   .type(" 시작")
//   .move(1)
//   .type("<br/>")
//   .pause(1000)
//   .type("<span class='kona-color'>KONA BIZ</span>")
//   .pause(100)
//   .type("로 부터")
//   .go(); // 실행

//   new TypeIt("#tag-title", {
//     speed: 50,
//     waitUntilVisible: true,
//     loop: false,
//     cursor: false,
//   })
//   .pause(10000)
//   .type("<div style='font-size: 1rem'><span class='left-gray'>#도입비0원#연회비0원</span><span style='color: blue;'>#사원증#교통카드</span></div>")
//   .break()
//   .type("<span style='color: blue;'>#식대지원#한번에</span><span class='left-gray'>#복지#MZ오피스#MZ복지</span>")
//   .go();


