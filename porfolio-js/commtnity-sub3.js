$(function(){

  $('.nav>ul>li').hover(function(){
    $('.nav>ul>li').children('div').stop().slideDown()
  },function(){
    $('.nav>ul>li').children('div').stop().slideUp()
  })


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

   // banner-btn 하버

      $('.banner-btn li:eq(0)').hover(function(){
         $('.banner-btn li:eq(0)').css({'background-color':'#50c2f4',
                                         'border':'3px #fff solid'}).find('a').css('color','#fff')
      },function(){
          $('.banner-btn li:eq(0)').css({'background-color':'',
                                          'border':''}).find('a').css('color','')
      })
      //
      // $('.banner-btn li:eq(1)').hover(function(){
      //    $('.banner-btn li:eq(1)').css({'background-color':'#50c2f4',
      //                                    'border':'3px #fff solid'}).find('a').css('color','#fff')
      // },function(){
      //     $('.banner-btn li:eq(1)').css({'background-color':'',
      //                                     'border':''}).find('a').css('color','')
      // })

      $('.banner-btn li:eq(2)').hover(function(){
         $('.banner-btn li:eq(2)').css({'background-color':'#50c2f4',
                                         'border':'3px #fff solid'}).find('a').css('color','#fff')
      },function(){
          $('.banner-btn li:eq(2)').css({'background-color':'',
                                          'border':''}).find('a').css('color','')
      })

      var idx = 0;
      var speed = 10000;
      var call = function(){
            $('.next').trigger('click')
          }
      var tt = setInterval(call,speed);

      var handier = 0;

      $('.slide-product .next').click(function(){
        handier ++;
        console.log(handier)
      $('.slide-product ul').animate({
          'right': "+=1000px"
      })
      if( handier >2){
          handier = 0;
         $('.slide-product ul').eq(handier).animate({'right': "0px"})
          console.log('1234');
       }
          // console.log(idx);
      })

      $('.slide-product .prev').click(function(){
        handier --;
        console.log(handier)
      $('.slide-product ul').animate({
          'right': "-=1000px"
      })
      if( handier < 0){
          handier = 0
        return($('.slide-product ul').eq(handier).animate({'right': "0px"}))
         $('.slide-product ul').eq(handier).animate({'right': "0px"})
          console.log('1234');
       }
          // console.log(idx);
      })




      //sub 서브 카테고리란
        $('.sub-nav .sub1').hover(function(){
           $('.sub-nav .sub1').css({
              'background-color':'#5fd0f5',
              'border':'1px #33bdef solid;'
           }).find('a').css("color",'#fff')
        },function(){
          $('.sub-nav .sub1').css({
            'background-color':'',
            'border':''
          }).find('a').css("color",'')
        })
        $('.sub-nav .sub2').hover(function(){
          $('.sub-nav .sub2').css({
             'background-color':'#5fd0f5',
             'border':'1px #33bdef solid;'
          }).find('a').css("color",'#fff')
        },function(){
          $('.sub-nav .sub2').css({
            'background-color':'',
            'border':''
          }).find('a').css("color",'')
        })
        $('.sub-nav .sub3').hover(function(){
          $('.sub-nav .sub3').css({
             'background-color':'#5fd0f5',
             'border':'1px #33bdef solid;'
          }).find('a').css("color",'#fff')
        },function(){
          $('.sub-nav .sub3').css({
            'background-color':'',
            'border':''
          }).find('a').css("color",'')
        })





})
