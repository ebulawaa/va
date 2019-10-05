$( document ).ready(function() {
    var color = $("#myModal").css( "background-color" );
    var metaThemeColor = document.querySelector("meta[name=theme-color]");
    metaThemeColor.setAttribute("content", color);
});


function enter() {
  var audio = document.getElementById("audio");
  audio.play();
  $('#myModal').fadeOut(2000);
}