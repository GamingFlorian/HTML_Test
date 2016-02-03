console.log("Die Webseite wurde gestartet");

var Click = 0;

function Button(){
  Click++;
  document.getElementById("TestButton").value=Click + "x geklickt";
}
