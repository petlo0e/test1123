$(document).ready(function(){//시작

  //모바일 테블릿 메뉴
  $(".mgnb_bg").hide();
  $(".ham").click(function(){
    $(".mgnb_bg").fadeIn();
    $(".m-gnb-wrap").animate({left: "0"}, 600, "swing");
  });

  $(".mgnb_bg").click(function(){
    $(".mgnb_bg").fadeOut();
    $(".m-gnb-wrap").animate({left: "-295px"}, 600, "swing");
  });


  $(".m-dapth2, .m-dapth3").hide();
  $(".mgnb > li").click(function() {
    if ($(this).children(".m-dapth2").css("display") == "none") {
      $(this).children(".m-dapth2").slideDown();
      $(this).siblings().children(".m-dapth2").slideUp();
    } else {
      $(this).children(".m-dapth2").slideUp();
    }
  });  

  $(".m-dapth2 > li").click(function(event) {
    event.stopPropagation();  
    if ($(this).children(".m-dapth3").css("display") == "none") {
      $(this).children(".m-dapth3").slideDown();
      $(this).siblings().children(".m-dapth3").slideUp();
    } else {
      $(this).children(".m-dapth3").slideUp();
    }
  });

  //피씨 메뉴
  $(".dapth2, .dapth3").hide();
  $(".gnb > li").hover(function(){
    $(this).find(".dapth2").stop().fadeToggle();
  });
  $(".dapth2 > li").hover(function(){
    $(this).find(".dapth3").stop().fadeToggle();
  });

  $(".lan_gnb").hide();
  $(".lan").hover(function(){
    $(".lan_gnb").stop().fadeToggle();
  });






  //탭메뉴
  $(".tab_con > ul > li").hide();
  $(".tab_btn > ul > li").eq(0).addClass("active");
  $(".tab_con > ul > li").eq(0).show();


  $(".tab_btn > ul > li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    
    var Num = $(this).index();
    $(".tab_con > ul > li").eq(Num).show().siblings().hide();        
  });





  //스와이퍼new
  var newitem = new Swiper(".newitem", {
    scrollbar: {
      el: ".swiper-scrollbar",
      dragSize: 200,
      draggable: true,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    loop : true,//슬라이드 마지막이랑 연결
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  //스와이퍼best
  var bestitem = new Swiper(".bestitem", {
    scrollbar: {
      el: ".swiper-scrollbar",
      dragSize: 200,
      draggable: true,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    loop : true,//슬라이드 마지막이랑 연결
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  //스와이퍼sale
  var saleitem = new Swiper(".saleitem", {
    scrollbar: {
      el: ".swiper-scrollbar",
      dragSize: 200,
      draggable: true,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    loop : true,//슬라이드 마지막이랑 연결
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  //스와이퍼uniform
  var uniform = new Swiper(".uniform", {
    scrollbar: {
      el: ".swiper-scrollbar",
      dragSize: 200,
      draggable: true,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    loop : true,//슬라이드 마지막이랑 연결
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });


  //스와이퍼rank
  var rank = new Swiper(".rank", {
    scrollbar: {
      el: ".swiper-scrollbar",
      dragSize: 200,
      draggable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    centeredSlides: true, //중앙에서 시작 대소문자 중요
    loop : true,//슬라이드 마지막이랑 연결
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  //스와이퍼 리뷰
  var reviewlist = new Swiper(".reviewlist", {

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    centeredSlides: true, //중앙에서 시작 대소문자 중요
    loop : true,//슬라이드 마지막이랑 연결
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  
  //스와이퍼 sns
  var snslist = new Swiper(".snslist", {

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    centeredSlides: true, //중앙에서 시작 대소문자 중요
    loop : true,//슬라이드 마지막이랑 연결
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 8,
        spaceBetween: 20,
      },
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  //푸터 모바일 메뉴
  $(".dapth_txt").hide();


   $(".m_menu dl").click(function(){


    if($(this).children(".dapth_txt").css("display") == "none"){//display 상태값이 none일때
      $(this).children(".dapth_txt").slideDown();
      $(this).siblings().children(".dapth_txt").slideUp();
    }else{
      $(this).children(".dapth_txt").slideUp();
    }

  });










});//끝