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

      //상품 슬라이드

              var idx = 0;
              var speed = 10000;
              var call = function(){
                    $('.next').trigger('click')
                  }
              var tt = setInterval(call,speed);

              // function slideBanner(start,end,i){
              //
              //      $('.product').eq(i).children('ul').css({
              //         'left':start,
              //
              //     }).stop().animate({
              //         "left":end
              //     },'1000')
              // }
              var handier = 0;

              $('.product .next').click(function(){
                handier ++;
                console.log(handier)
              $('.product ul').animate({
                  'right': "+=1024px"
              })
              if( handier >4){
                  handier = 0;
                 $('.product ul').eq(handier).animate({'right': "0px"})
                  console.log('1234');
               }
                  // console.log(idx);
              })

              $('.product .prev').click(function(){
                handier --;
                console.log(handier)
              $('.product ul').animate({
                  'right': "-=1024px"
              })
              if( handier < 0){
                  handier = 0
                return($('.product ul').eq(handier).animate({'right': "0px"}))
                 $('.product ul').eq(handier).animate({'right': "0px"})
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
