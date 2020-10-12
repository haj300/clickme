console.log("hello");


$(document).ready(function(){

  // jQuery methods go here...

  $("p").click(function(){
    $(this).hide("slow");
  });

});

var body = document.querySelector("body");
body.style.textAlign = "center";

var button = document.getElementById("mybutton");
console.log(button);

var myresultdiv = document.querySelector(".myresult");
var count = 0;

button.onclick = function() {
  count = count + 1;

  console.log(count);

  if (count == 1){
    myresultdiv.innerHTML = "You clicked " + count + " time";
  } else {
    myresultdiv.innerHTML = "You clicked " + count + " times";
  }

  if (count == 21) {
    myresultdiv.innerHTML = "Success";
  } else if (count == 22) {
    myresultdiv.innerHTML = "Play Again";
  } else if (count == 23) {
    count = 0;
    myresultdiv.innerHTML = "Begin";
  }
}
