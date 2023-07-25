$(document).ready(function() {

  var image;

  $('.popup').click(function(){
      image = $(this).clone();
      image.css("display", "none");
      $("body").append(image);
      if(window.innerHeight < window.innerWidth){
        if (image.width()/image.height() < window.innerHeight/window.innerWidth) {
          image.css("width", "90vw");
          image.css("height", "auto");
        }
        else{
          image.css("height", "90vh");
          image.css("width", "auto");
        }
      }
      else {
        if(image.width() >= image.height()){
          image.css("width", "80vw");
          image.css("height", "auto");
        }
        else{
          image.css("height", "75vh");
          image.css("width", "auto");
        }
      }
      image.css({
        "z-index": "10000",
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

function scaleElement() {
  const container = document.querySelector('.solar');
  const box = document.querySelector('#solar');
  const containerWidth = container.offsetWidth;
  const scaleFactor = (containerWidth - 20) / 800;
  box.style.transform = `scale(${scaleFactor})`;
}

scaleElement();

window.addEventListener('resize', scaleElement);
