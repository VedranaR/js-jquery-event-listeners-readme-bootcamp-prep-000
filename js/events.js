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
  $("form input:first-child").on("keydown", function(){
    
  })
}

$(document).ready(function(){

// call functions here

});
