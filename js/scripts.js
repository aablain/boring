$(document).ready(function() {
  $("p#p1").click(function(){
    if ($("p#p1").hasClass("introClicked")=== true){
      $("p#p1").removeClass();
    }
    else{
      $("p#p1").addClass("introClicked");
    }
  });
  $("p#p2").click(function(){
    if ($("p#p2").hasClass("introClicked")=== true){
      $("p#p2").removeClass();
    }
    else{
      $("p#p2").addClass("introClicked");
    }
  });
  $("p#p3").click(function(){
    if ($("p#p3").hasClass("introClicked")=== true){
      $("p#p3").removeClass();
    }
    else{
      $("p#p3").addClass("introClicked");
    }
  });
  $("div#p4").click(function(){
    if ($("div#p4").hasClass("introClicked")=== true){
      $("div#p4").removeClass();
    }
    else{
      $("div#p4").addClass("introClicked");
    }
  });
  $("div#p5").click(function(){
    if ($("div#p5").hasClass("introClicked")=== true){
      $("div#p5").removeClass();
    }
    else{
      $("div#p5").addClass("introClicked");
    }
  });
  $("div#p6").click(function(){
    if ($("div#p6").hasClass("introClicked")=== true){
      $("div#p6").removeClass();
    }
    else{
      $("div#p6").addClass("introClicked");
    }
  });

});
