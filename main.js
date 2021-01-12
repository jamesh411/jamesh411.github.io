$(document).ready(function() {

  var image;

  $('.popup').click(function(){
      image = $(this).clone();
      image.css("display", "none");
      $("#layout").append(image);
      if(window.innerHeight < window.innerWidth){
        if (image.width() > image.height()) {
          image.css("width", "50vw");
        }
        else{
          image.css("height", "75vh");
        }
      }
      else {
        if(image.width() >= image.height()){
          image.css("width", "80vw");
        }
        else{
          image.css("height", "75vh");
        }
      }
      image.css({
        "z-index": "1000",
        "display": "block",
        "position": "absolute",
        "top": "50%",
        "left": "50%",
        "transform": "translate(-50%, -50%)"
      });
      $("#cover").css("display", 'none').fadeIn("slow");
      image.css("display", 'none').fadeIn("slow");
  });

  $("#cover").click(function(){
    $("#cover").css("display", 'block').fadeOut("slow");
    image.css("display", 'block').fadeOut("slow").empty();
  });

  $( function() {
    $("#bottle").draggable();
  } );

  $("#bottle").mousedown(function(){
    $("#bottle").attr("src","img/spray.png");
  });

  $("#bottle").mouseup(function(){
    $("#bottle").attr("src","img/bottle.png");
  });

  $( function() {
    $("#avo").draggable();
  } );

  $( function() {
    $("#tum").draggable();
  } );

  $( function() {
    $("#pothos").draggable();
  } );

  $(document).ready(function(){
   if (window.location.hash == "#work") {
     $('html, body').animate({
        scrollTop: $("#moreInfo").offset().top
      }, 600);
   }
});

});
