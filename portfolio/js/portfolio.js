$('.menu-items').on('click', function(event){
if(event.target.style.left === "300px"){
    $('.header-left').animate({'left':'-300px'},"slow");
    $('.menu-items').animate({'left':'0px'},"slow");
    $('.conteiner').animate({'left': '0px'},"slow");
}else{
    $('.header-left').animate({'left':'0px'},"slow");
    $('.menu-items').animate({'left': '300px'},"slow");
    $('.conteiner').animate({'left':'300px'},"slow")
}
})
$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 500);
    }

});