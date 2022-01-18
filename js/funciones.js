$(document).ready(function()
{

   $(".hamb").click(function(e){
       e.preventDefault();
       $("header .container nav").toggleClass("open");
   });

   $("header .container nav a").click(function() 
   {
        $("header .container nav").removeClass("open");
        var dev = jQuery(this).attr("href");
        jQuery("html,body").animate({
            "scrollTop": jQuery(dev).offset().top -76
        });
   });
});



