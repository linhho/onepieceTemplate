$(document).ready(function(){
    /*
    * materialize css framework
    */
    $('.parallax').parallax(); //call parallax
    $('.scrollspy').scrollSpy({scrollOffset: 0}); //call scrollspy
    $(".button-sidenav-trigger").sideNav({
        menuWidth: 300, // Default is 240
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });// call side nav
    $('.slider').slider();//call slider
    
    /*
    *click character avatar item
    */
    $('.character-avatar-list').children().click(function(){
        $('.character-avatar-list').children().css('opacity', 0.4);
        $(this).css('opacity', 1);
        $('.ch_info').hide();
        name = $(this).attr('character-name');
        $(name+'.ch_info').show();
    });
    
    /*
    * Refresh website
    */
    $('#refresh-website').click(function(e) {
        e.preventDefault();
        location.reload();
    });
    
    //Disible touch scroll, fig bug overflow in Iphone Safari
    $('#header-parallax').on('touchmove', function(e){ 
         //prevent native touch activity like scrolling
         e.preventDefault(); 
    });
    
});
