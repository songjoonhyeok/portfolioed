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
