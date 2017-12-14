$(document).ready(function(){

/* Splash */
  setTimeout(function() {
    $(".intro").fadeOut(800);
    },2500);
    setTimeout(function() {
      $(".title").fadeIn(1000);
    });
  });



/* filtros */
var cont = $('#default');
    
    $('#categorias').on('change', function() {
      var selection = $('#categorias').val();
      //cont.text(selection);
      if( selection === "cerca") {
        cont.html('<img src="assets/img/r_chino_1.jpg"/><img src="assets/img/r_mar_2.jpg"/><img src="assets/img/r_pizzas.png/><img src="assets/img/r_mexicana_1.jpg"/>');