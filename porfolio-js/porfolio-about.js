$(function(){

  $('.nav>ul>li').hover(function(){
    $('.nav>ul>li').children('div').stop().slideDown()
  },function(){
    $('.nav>ul>li').children('div').stop().slideUp()
  })


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



})
