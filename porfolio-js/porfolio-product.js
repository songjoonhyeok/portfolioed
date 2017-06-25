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






    // 상품 리스트 변동
        $('.product_menu li a').click(function(e){
            e.preventDefault();



            var item =  $(this).attr('id');
            console.log(item);

            // var idx= $(this).pa

            $('.product_photo li').each(function(i,e){


                if(item == $(e).find('img').attr('alt')){
                  $(e).show()

                }else if(item == 'All'){
                  $(e).show()

                }else{
                   $(e).hide()
                }


            })

        })


          // var menu = {
          //     "food":
          //         [{
          //             "url":"../스크롤&스크린/images/1.jpg",
          //             "menuName":"스테이크",
          //             "price":"12,000",
          //             "time":"dinner"
          //         },{
          //             "url":"../스크롤&스크린/images/2.jpg",
          //             "menuName":"스테이크",
          //             "price":"13,000",
          //             "time":"dinner"
          //         },{
          //             "url":"../스크롤&스크린/images/3.jpg",
          //             "menuName":"스테이크",
          //             "price":"14,000",
          //             "time":"dinner"
          //         },{
          //             "url":"../스크롤&스크린/images/4.jpg",
          //             "menuName":"돼지갈비정식",
          //             "price":"10,000",
          //             "time":"dinner"
          //         },{
          //             "url":"../스크롤&스크린/images/5.jpg",
          //             "menuName":"스파게티",
          //             "price":"9,000",
          //             "time":"lunch"
          //         },{
          //             "url":"../스크롤&스크린/images/6.jpg",
          //             "menuName":"스파게티",
          //             "price":"9,900",
          //             "time":"lunch"
          //         },{
          //             "url":"../스크롤&스크린/images/7.jpg",
          //             "menuName":"스파게티",
          //             "price":"11,000",
          //             "time":"lunchr"
          //         },{
          //             "url":"../스크롤&스크린/images/8.jpg",
          //             "menuName":"오리스테이크",
          //             "price":"12,000",
          //             "time":"lunch"
          //         },{
          //             "url":"../스크롤&스크린/images/9.jpg",
          //             "menuName":"피자",
          //             "price":"10,000",
          //             "time":"dinner"
          //         },{
          //             "url":"../스크롤&스크린/images/10.jpg",
          //             "menuName":"빵",
          //             "price":"1,500",
          //             "time":"brunch"
          //         },{
          //             "url":"../스크롤&스크린/images/11.jpg",
          //             "menuName":"아이스커피",
          //             "price":"2,000",
          //             "time":"drink"
          //         },{
          //             "url":"../스크롤&스크린/images/d1.jpg",
          //             "menuName":"칵테일",
          //             "price":"5,000",
          //             "time":"drink"
          //         },{
          //             "url":"../스크롤&스크린/images/d2.jpg",
          //             "menuName":"칵테일",
          //             "price":"5,000",
          //             "time":"drink"
          //         },{
          //             "url":"../스크롤&스크린/images/d3.jpg",
          //             "menuName":"칵테일",
          //             "price":"5,000",
          //             "time":"drink"
          //         },{
          //             "url":"../스크롤&스크린/images/d4.jpg",
          //             "menuName":"칵테일",
          //             "price":"5,000",
          //             "time":"drink"
          //         },{
          //             "url":"../스크롤&스크린/images/d5.jpg",
          //             "menuName":"칵테일",
          //             "price":"5,000",
          //             "time":"drink"
          //         }]
          // }
          //
          // $.each(menu.food,function(i,e){
          //
          //   var a = "";
          //
          //   a += "<li class='"+e.time+" all'>";
          //   a += "<img src='"+e.url+"'/>"
          //   a += "<span>"+e.menuName+"<span>";
          //   a += "<span>"+e.price+"<span>";
          //   a += "</li>";
          //
          //   $('.list').append(a)
          //
        // })














})
