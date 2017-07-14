$(function(){
   $('.nav>ul>li').hover(function(){
     $('.nav>ul>li').children('div').stop().slideDown()
   },function(){
     $('.nav>ul>li').children('div').stop().slideUp()
   })


  //------------------------------------윈도우 리사이징
  // var events = function(){
  //
  //     var ww = $(this).width();
  //     console.log(ww)
  //
  //     if(ww > 1030 ){
  //         //pc
  //         // 창가로  크기가 1030 미만 일경우
  //         $('.nav>ul>li').mouseenter(function(){
  //             $('.nav>ul>li').children('div').stop().slideDown()
  //
  //         }).mouseleave(function(){
  //           $('.nav>ul>li').children('div').stop().slideUp()
  //
  //         })
  //     } else if(ww <= 1030 ){
  //       //mobile
  //       // 창가로  크기가 1030 클 경우
  //       $('.nav>ul>li').mouseenter(function(){
  //           $(this).children('div').stop().slideDown()
  //
  //       }).mouseleave(function(){
  //           $(this).children('div').stop().slideUp()
  //
  //       })
  //
  //     }
  //
  // }
  // $(window).resize(events)
  //  $(window).trigger('resize')
/////////////////////////////////////////윗창 창가로 사이즈 리사이징
// function open_chatroom(){
//         var windowWidth = $( window ).width();
//
//         if(windowWidth < 1030 , windowWidth = 1030) {
//                 console.log('windowWidth');
//           $('.nav>ul>li').onclick(function(){
//              $(this).children('div').css('display','block')
//           })
//            //창 가로 크기가 1030 미만일 경우
//         }else if(windowWidth > 1030){
//           $('.nav>ul>li').click() = null;
//            //창 가로 크기가 1030보다 클 경우
//         }
//       }



      // 마우스 스크롤 탑값 변동

     $(window).scroll(function(){
        var src = $(this).scrollTop();

        if (src >= 70){

          $('.nav').css({
            'marginTop':0
          })
        }else if (src <= 70){
          $('.nav').css({
            'marginTop':'70px'
          })
        }
     })

    var idx = 0;
    var speed = 10000;
    var call = function(){
          $('.next').trigger('click')
        }
    var tt = setInterval(call,speed);

    function slideBanner(start,end,i){

         $('.slide li').eq(i).addClass('on').children('div').css({
            'left':start,
            'display':'block'
        }).stop().animate({
            "left":end
        },'1000').parent('li').siblings().removeClass('on')
    }

    $('.slide .next').click(function(){
        slideBanner("0","-100%",idx);
        idx++
        slideBanner("100%","0",idx);
          $(this).animate(1000);

        if(idx ==$('.slide li').length){
            idx = 0;
             slideBanner("100%","0",idx);
        }
        // console.log(idx);

    })

    $('.slide .prev').click(function(){
        slideBanner("0","100%",idx);
        idx--
        slideBanner("-100%","0",idx);
  $('.slidebanner li').eq(idx).addClass('on').siblings().removeClass('on')

        if(idx < 0){
           idx =4;
          slideBanner("-100%","0",idx);
  $('.slidebanner li').eq(idx).addClass('on').siblings().removeClass('on')

         }
      console.log(idx);
    })
    $('.slide li').mouseenter(function(){
               clearInterval(tt);
              //  console.log('나와라얍');
             })

     $('.slide li').mouseleave(function(){
        tt = setInterval(call,speed)
                })
     $('.slide li>button').click(function(a){
       a.preventDefault();
       var btn =$(this).parent().index();
       console.log(btn)
       var onli=$('.slide li.on').index();
      //  console.log(onli)
       if(btn > onli){
             slideBanner("0","-100%",onli);
             slideBanner("100%","0",btn);
       }else if(btn < onli){
             slideBanner("0","100%",onli);
             slideBanner("-100%","0",btn);
             }
     })

    // 상품 하버 가변그리드(품목 4종)
    $('.contents li').hover(function(){
      $(this).children('span').stop().animate({'margin-left':'60%'}).parent().children('.text').stop().animate({'margin-left':'460px'})
    },function(){
      $(this).children('span').stop().animate({'margin-left':'0%'}).parent().children('.text').stop().animate({'margin-left':'0%'})
    }
  )


  // 상품 하버 가변그리드(품목 3종)
  $('.section1 li').hover(function(){
    $(this).children('span').stop().animate({'margin-left':'60%'}).parent().children('.text').stop().animate({'margin-left':'460px'})
  },function(){
    $(this).children('span').stop().animate({'margin-left':'0%'}).parent().children('.text').stop().animate({'margin-left':'0%'})
  })

  // 상품 하버 가변그리드(품목 5종)
  $('.section2 li').hover(function(){
    $(this).children('span').stop().animate({'margin-left':'60%'}).parent().children('.text').stop().animate({'margin-left':'450px'})
  },function(){
    $(this).children('span').stop().animate({'margin-left':'0%'}).parent().children('.text').stop().animate({'margin-left':'0%'})
  })

  //페럴렉스 구간
    //.parallax(xPosition, speedFactor, outerHeight) options:
    //xPosition - Horizontal position of the element
    //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
    //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
    $('#article').parallax("50%", 0.3);

    //미디어 구간
    $('.text-1 li.view-img a').click(function(i){
      i.preventDefault() //a태그 기능 (링크 )막아줌.
      var url = $(this).attr('href');
      url = "https://www.youtube.com/embed/"+ url +"?rel=0&amp;showinfo=0"
      $('.main-video iframe').attr('src',url);
      $(this).children('img').fadeTo(500,0.5).parent().parent().siblings().find('img').fadeTo(500,1)
    })


 })
