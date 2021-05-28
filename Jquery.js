$(document).ready(function () {
    $('.scrollToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});
$(document).ready(function () {
    $('.scrollToCe').click(function () {
        $('html, body').animate({
            scrollTop: 900
        }, 1500);
        return false;
    });
});
$(document).ready(function () {
    $('.scrollToCon').click(function () {
        $('html, body').animate({
            scrollTop: 500
        }, 1500);
        return false;
    });
});
$(document).ready(function() {
    var $conteudo = $(".trab1");
    var $details = $(".details > p");
    var $show = $(".restaurant");
    $details.hide();
     $show.hover(function(e) {
       e.preventDefault();  
      $details.stop(true, false).slideToggle("fast");
    });
});
$(document).ready(function() {
    var $conteudo = $(".trab2");
    var $detailsM = $(".detailsM > p");
    var $show = $(".mediaquery");
    $detailsM.hide(); 
     $show.hover(function(e) {
       e.preventDefault();  
      $detailsM.stop(true, false).slideToggle("fast");
    });
});
$(document).ready(function() {
    var $conteudo = $(".trab3");
    var $detailsB = $(".detailsB > p");
    var $show = $(".botem");
    $detailsB.hide();
     $show.hover(function(e) {
       e.preventDefault();  
      $detailsB.stop(true, false).slideToggle("fast");
    });
});
$(document).ready(function() {
    var $conteudo = $(".trab4");
    var $detailsS = $(".detailsS > p");
    var $show = $(".santo");
    $detailsS.hide();
     $show.hover(function(e) {
       e.preventDefault();  
      $detailsS.stop(true, false).slideToggle("fast");
    });
});
$(document).ready(function() {
    var $conteudo = $(".trab5");
    var $detailsP = $(".detailsP > p");
    var $show = $(".freela");
    $detailsP.hide();
     $show.hover(function(e) {
       e.preventDefault();  
      $detailsP.stop(true, false).slideToggle("fast");
    });
});