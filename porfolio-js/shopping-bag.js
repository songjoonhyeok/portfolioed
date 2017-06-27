$(function(){

  $('.nav>ul>li').hover(function(){
    $('.nav>ul>li').children('div').stop().slideDown()
  },function(){
    $('.nav>ul>li').children('div').stop().slideUp()
  })

  $('.arcticle .left').hover(function(){
     $('.arcticle .left').children('a').css({
        'background-color':'#ecefce',
        'color':'#131313',
        'border':'5px #a8e5cc solid'
     })
  },function(){
    $('.arcticle .left').children('a').css({
      'background-color':'#ffd6d6',
      'color':'#ff4545',
      'border':'5px #ffa7a7 solid'
    })
  })
  $('.arcticle .right').hover(function(){
     $('.arcticle .right').children('a').css({
        'background-color':'#ecefce',
        'color':'#131313',
        'border':'5px #a8e5cc solid'
     })
  },function(){
    $('.arcticle .right').children('a').css({
      'background-color':'#ffd6d6',
      'color':'#ff4545',
      'border':'5px #ffa7a7 solid'
    })
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







})
