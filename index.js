
  // $(".image").hover(function(){
  //   $(this).next().css("display", "block");
  //   $(this).parent().css("padding", "20px 0 0 0");
  //   $(this).css("transform","rotate(180deg)");
  //   $(this).prev().css("font-weight", "bolder");
  // },
  //   function(){
  //     $(".A").css("display", "none")
  //     $(".Qus").css("padding", "20px 0 20px");
  //     $(this).css("transform","rotate(0deg)");
  //     $(this).prev().css("font-weight", "unset");
  //   });

    $(".Q").hover(function(){
    $(this).parent('div').children('.A').css("display", "block");
    $(this).parent().css("padding", "10px 0 0 0");
    $(this).next().css({"transform":"rotate(180deg)", "margin-right":"50px"});
    $(this).css({"font-weight": "bolder","cursor":"pointer","color":"hsl(14, 88%, 65%)"});  
    
  }, function(){
        $(".A").css("display", "none")
        $(".Qus").css("padding", "10px 0 10px");
        $(this).next().css({"transform":"rotate(0deg)"});
        $(this).css({"font-weight": "unset","color":"unset"});
  });

