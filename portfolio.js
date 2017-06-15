$(function(){

  $('.nav>ul>li').hover(function(){
      $('.nav>ul>li').children('div').stop().slideDown()

  },function(){
      $('.nav>ul>li').children('div').stop().slideUp()
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
      // console.log(idx);
    })
    $('.slide li').mouseenter(function(){
               clearInterval(tt);
              //  console.log('나와라얍');
             })

     $('.slide li').mouseleave(function(){
        tt = setInterval(call,speed)
                })
     $('.slide li>a').click(function(a){
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
      $(this).children('span').stop().animate({'margin-left':'60%'}).parent().children('.text').stop().animate({'margin-left':'500px'})
    },function(){
      $(this).children('span').stop().animate({'margin-left':'0%'}).parent().children('.text').stop().animate({'margin-left':'0%'})
    }
  )


  // 상품 하버 가변그리드(품목 3종)
  $('.section1 li').hover(function(){
    $(this).children('span').stop().animate({'margin-left':'60%'}).parent().children('.text').stop().animate({'margin-left':'500px'})
  },function(){
    $(this).children('span').stop().animate({'margin-left':'0%'}).parent().children('.text').stop().animate({'margin-left':'0%'})
  })

  // 상품 하버 가변그리드(품목 5종)
  $('.section2 li').hover(function(){
    $(this).children('span').stop().animate({'margin-left':'60%'}).parent().children('.text').stop().animate({'margin-left':'500px'})
  },function(){
    $(this).children('span').stop().animate({'margin-left':'0%'}).parent().children('.text').stop().animate({'margin-left':'0%'})
  })

  //페럴렉스 구간
    //.parallax(xPosition, speedFactor, outerHeight) options:
    //xPosition - Horizontal position of the element
    //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
    //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
    $('#article').parallax("50%", 0.3);

 })
