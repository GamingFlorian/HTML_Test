function Button1(){
  if(document.getElementById("Button1").value == "Finde deinen Buchstaben"){
    document.getElementById("Thema").innerHTML = "Wo bist du lieber?";
    document.getElementById("Button1").value = "Oben";
  }else if(document.getElementById("Thema").innerHTML == "Wo bist du lieber?"){
    document.getElementById("Thema").innerHTML = "Welche Seite?";
    document.getElementById("Button1").value = "Rechts";
  }else if(document.getElementById("Thema").innnerHTML == "Welche Seite?"){
    document.getElementById("Thema").innerHTML = "Du bist A!";
  }
}
