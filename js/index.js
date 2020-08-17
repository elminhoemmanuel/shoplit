// function to show vertical menu on click of hamburger button
function myFunction() {
    var x = document.getElementById("mytopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 

  // function to show vertical menu on click of hamburger button for pop section
$(".pop-icon").click(function(){
  $(".pop-responsive").toggleClass("pop-responsive-show pop-responsive-close");    
})