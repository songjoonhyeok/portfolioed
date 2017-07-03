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

      $('.banner-btn li:eq(1)').hover(function(){
         $('.banner-btn li:eq(1)').css({'background-color':'#50c2f4',
                                         'border':'3px #fff solid'}).find('a').css('color','#fff')
      },function(){
          $('.banner-btn li:eq(1)').css({'background-color':'',
                                          'border':''}).find('a').css('color','')
      })

      $('.banner-btn li:eq(2)').hover(function(){
         $('.banner-btn li:eq(2)').css({'background-color':'#50c2f4',
                                         'border':'3px #fff solid'}).find('a').css('color','#fff')
      },function(){
          $('.banner-btn li:eq(2)').css({'background-color':'',
                                          'border':''}).find('a').css('color','')
      })






        //sub 서브 카테고리란
          $('.sub-nav .sub1').hover(function(){
             $('.sub-nav .sub1').css({
                'background-color':'#ecefce',
                'border':'3px #a8e5cc solid'
             }).find('a').css("color",'#131313')
          },function(){
            $('.sub-nav .sub1').css({
              'background-color':'#ffd6d6',
              'border':'3px #ffa7a7 solid'
            }).find('a').css("color",'')
          })
          $('.sub-nav .sub2').hover(function(){
             $('.sub-nav .sub2').css({
                'background-color':'#ecefce',
                'border':'3px #a8e5cc solid'
             }).find('a').css("color",'#131313')
          },function(){
            $('.sub-nav .sub2').css({
              'background-color':'#ffd6d6',
              'border':'3px #ffa7a7 solid'
            }).find('a').css("color",'')
          })
          $('.sub-nav .sub3').hover(function(){
             $('.sub-nav .sub3').css({
                'background-color':'#ecefce',
                'border':'3px #a8e5cc solid'
             }).find('a').css("color",'#131313')
          },function(){
            $('.sub-nav .sub3').css({
              'background-color':'#ffd6d6',
              'border':'3px #ffa7a7 solid'
            }).find('a').css("color",'')
          })






})
