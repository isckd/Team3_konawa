
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
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

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