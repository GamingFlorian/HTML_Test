console.log("Die Webseite wurde gestartet");

var Click = 0;

function Button(){
  Click++;
  document.getElementById("Button").value=Click + "x geklickt";
}
