/*------ Sticky Navigation ------*/

$(function() {
    $('#features').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
        } else{
            $('nav').removeClass('sticky');
        }
    },{
        offset: '70'
    });
    
   
});

/*------ Mobile Navigation ------*/
$(function() {
   $('.mobile-nav-icon').click(function(){
    // Nav slide
       var nav = $('ul.main-nav');
       nav.slideToggle(200);
       
    // Nav-icon toggle
       var icon = $('.mobile-nav-icon i');
       if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');   
       } else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');

       }          
       
   });
    
     // Hide navbar on clicking a navigation link
       $('ul.main-nav li a').on("click touch", function(){
            $('.mobile-nav-icon').click();
       });
});

/*------ animation ------*/

$(function() {
    $('#features').waypoint(function(direction){
        $('#features').addClass('animated, zoomIn');
    },{
        offset: '50%'
    });
    
   
});
/*------ Scroll to that section (2nd Method) ------*/
/*$(function() {
   $('.scroll-to-plans').click(function(){
       $('html, body').animate({
           scrollTop : $('#plans').offset().top
       }, 1250);
   });
});*/

/*------ Scroll to that Section ------*/
$(function() {
   $('a.smooth-scroll').click(function(event){
       event.preventDefault();
      
       //  get / return Id like #about, #team, #stats
       var section = $(this).attr('href');
       $("html, body").animate({
           scrollTop : $(section).offset().top - 70
       }, 1100, "easeInOutExpo");
   });
});

/*------ iniate wow.js to support animate on scroll ------*/
$(function() {
    new WOW().init();    
});
