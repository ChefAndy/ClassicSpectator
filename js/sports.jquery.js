

$(document).ready(function(){



  $("#entersite").hover(function(){
        $(this).css("background-color","white");
        $(this).css("color","black");
    }, function(){
        $(this).css("background-color","rgba(128,128,128,0.8)");
        $(this).css("color","white");
    }); // ends enter button hover

  //this just hides the fields because it was being weird about
  //fading them in otherwise
  $(".fields").hide();
 

//this creates an frame animation effect by fading out several overlapping divs
//leaving the last freeze frame. I wanted to just replace the background 
// image of the div with an animated gif that didn't loop, but it would always
// load up with the last frame showing. I'm assuming it's because it was preloaded
  $("#entersite").click(function(){
   $("#splashframe1").fadeOut(80,
    function(){
       $("#splashframe2").fadeOut(80,
        function(){
          $("#splashframe3").fadeOut(80,
            function(){
              $("#splashframe4").fadeOut(80,
                function(){
                 $( "#ballform" ).animate({
                    width: "400px",
                    height: "400px",
                    top: "20%",
                    left: "20%"
                }, 900, function(){ 
                  $(".fields").fadeIn('9000');
                }); //ends login animation and fields display callback function
             }); //ends frame 4 fadeout. Will leave only frame 5 showing and display login form.
          }); //ends frame 3 fadeout
      }); //ends frame 2 fadeout
   }); //ends frame 1 fadeout
  }); //ends entersite click



    //Logic for the ball form

    //For the red/green colors on the box
    $('input').blur(function()
    {
      if( !this.value ) {
            $(this).css("border","thick groove red");
      } else {
            $(this).css("border","medium solid green");
      }
    }); //ends input blur

    //To "prevent" heading to the products page without giving us their juicy personal info
   $("#ballsubmit").click(function(){
    if ($('#name').val() && $('#email').val()) {
        window.location.replace("./products.html");
    } else {
        alert('Spam is critical to our business model. Please fill out the form. If you really want to, click the unsubscribe button on the next page.');
    }
  }); //ends enterinfo click


}); // ends document ready


