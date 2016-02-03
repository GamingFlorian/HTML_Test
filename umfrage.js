console.log("Die Webseite wurde gestartet!");

var ende = 0;
var buchstabe;

function Button1(){
  if(document.getElementById("Button1").value == "Finde deinen Buchstaben"){
    document.getElementById("Thema").innerHTML = "Wo bist du lieber?";
    document.getElementById("Button1").value = "Oben";
    document.getElementById("Button2").value = "Mitte";
    document.getElementById("Button3").value = "Rechts";
    console.log("Button 1/1");
  }else if(document.getElementById("Thema").innerHTML == "Wo bist du lieber?"){
    ende = ende + 1;
    document.getElementById("Thema").innerHTML = "Welche Seite?";
    document.getElementById("Button1").value = "Rechts";
    document.getElementById("Button2").value = "Mitte";
    document.getElementById("Button3").value = "Links";
    console.log("Button 1/2");
  }else if(document.getElementById("Button1").value == "Rechts"){
    ende = ende + 1;
    char();
    document.getElementById("Thema").innerHTML = "Du bist " + buchstabe + "!";
    document.getElementById("Button1").style.display = "none";
    document.getElementById("Button2").style.display = "none";
    document.getElementById("Button3").style.display = "none";
    console.log("Button 1/3");
  }
}

function Button2(){
  if(document.getElementById("Button1").value == "Finde deinen Buchstaben"){
    document.getElementById("Thema").innerHTML = "Wo bist du lieber?";
    document.getElementById("Button1").value = "Oben";
    document.getElementById("Button2").value = "Mitte";
    document.getElementById("Button3").value = "Rechts";
    console.log("Button 1/1");
  }else if(document.getElementById("Thema").innerHTML == "Wo bist du lieber?"){
    ende = ende + 2;
    document.getElementById("Thema").innerHTML = "Welche Seite?";
    document.getElementById("Button1").value = "Rechts";
    document.getElementById("Button2").value = "Mitte";
    document.getElementById("Button3").value = "Links";
    console.log("Button 1/2");
  }else if(document.getElementById("Button1").value == "Rechts"){
    ende = ende + 2;
    char();
    document.getElementById("Thema").innerHTML = "Du bist " + buchstabe + "!";
    document.getElementById("Button1").style.display = "none";
    document.getElementById("Button2").style.display = "none";
    document.getElementById("Button3").style.display = "none";
    console.log("Button 1/3");
  }
}

function Button3(){
  if(document.getElementById("Button1").value == "Finde deinen Buchstaben"){
    document.getElementById("Thema").innerHTML = "Wo bist du lieber?";
    document.getElementById("Button1").value = "Oben";
    document.getElementById("Button2").value = "Mitte";
    document.getElementById("Button3").value = "Rechts";
    console.log("Button 1/1");
  }else if(document.getElementById("Thema").innerHTML == "Wo bist du lieber?"){
    ende = ende + 3;
    document.getElementById("Thema").innerHTML = "Welche Seite?";
    document.getElementById("Button1").value = "Rechts";
    document.getElementById("Button2").value = "Mitte";
    document.getElementById("Button3").value = "Links";
    console.log("Button 1/2");
  }else if(document.getElementById("Button1").value == "Rechts"){
    ende = ende + 3;
    char();
    document.getElementById("Thema").innerHTML = "Du bist " + buchstabe + "!";
    document.getElementById("Button1").style.display = "none";
    document.getElementById("Button2").style.display = "none";
    document.getElementById("Button3").style.display = "none";
    console.log("Button 1/3");
  }
}

function char(){
  if(ende == 2){
    buchstabe = "A";
  }else if(ende == 3){
    buchstabe = "B";
  }else if(ende == 4){
    buchstabe = "C";
  }else if(ende == 5){
    buchstabe = "D";
  }else if(ende == 6){
    buchstabe = "E";
  }
}
