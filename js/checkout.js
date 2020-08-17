// save and continue
$(".save-btn").click(function(){
    $(".address-initial").hide();
    $(".address-after").show();
    $(".delivery-initial-content").show();
    
  })


// continue to next step 
$(".continue-btn").click(function(){
    $(".delivery-initial").hide();
    $(".delivery-final").show();
    $(".payment-initial-content").show();
})


// // functions
// function hideDiv(givenClass){
//     document.getElementsByClassName(givenClass)[0].style.display="none";
// }

// function showDiv(givenClass){
//     document.getElementsByClassName(givenClass)[0].style.display="block";
// }
