function getIt(){
  $("p").on('click', function() {
    alert('Hey!');
  }
)}

function frameIt(){
  $(document).on('load', function(key) {
  $("img").addClass("tasty");
});
}

$(document).ready(function(){

// call functions here

});
