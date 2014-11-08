
var big=false;
var mailings=['You have successfully increased your mailing frequency to: every 4 minutes.', 'Error: Unsubscribe Function Not Supported. To unsubscribe, send SASE to 123圣假中国北京', '真的不知道这是怎么回事的', 'Thank you for granting us access to your contacts. Your friends will see you have ssent them special semi-hourly offers!'];

$(document).ready(function(){

// Table Row Filtering
$("tr:odd").css("background-color","#FFFFFF");

  $("#bigimages").click(function(){
      if (big === false) {
         $( ".prodimg" ).animate({width: "400px"}, 900 ); //ends login animation
         big=true;
      } else {
         $( ".prodimg" ).animate({width: "220px"}, 900 ); //ends login animation
         big=false;
       }
  }); //ends entersite click

  $("#spam").click(function(){
    alert(mailings[Math.floor(Math.random() * mailings.length)]);
  }); //ends entersite click

}); // ends document ready


