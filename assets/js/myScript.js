
$(document).ready(function(){

  // jQuery methods go here...

/* om man klickar på "hide ?" så försvinner texten i <p> */
  $("p").click(function(){
    $(this).hide("slow");
  });

});

/* här börjar vanlig javascript */

/* för att se att javascript fungerar/skriver till consolen */
console.log("hello");


/* hämtar bodyn från htmlfilen och sätter bodyn i center */
var body = document.querySelector("body");
body.style.textAlign = "center";

/* hämtar button från html för att kunna användas i den här filen */
var button = document.getElementById("mybutton");
console.log(button);

/* hämtar h3an i html för att kunna uppdatera texten */
var myresultdiv = document.querySelector(".myresult");
var count = 0;

/* "anonym funktion" (den har inget namn) som uppdaterar klicken och texten */
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
