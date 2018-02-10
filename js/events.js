function getIt(){
  $("p").on('click', function() {
    alert('Hey!');
  }
)}

function frameIt(){
  $("img").on('load', function() {
  $("img").addClass("tasty");
});
}

function pressIt(){
  $("form").on("keydown", function(){
    if($("input:first").val()=== 71){
      alert("You have pressed the G key.");
    }
  });
}

$(document).ready(function(){

// call functions here

});
