function Button1(){
  if(document.getElementById("Button1").value == "Finde deinen Buchstaben"){
    document.getElementById("Thema").innerHTML = "Wo bist du lieber?";
    document.getElementById("Button1").value = "Oben";
    console.log("Button 1/1");
  }else if(document.getElementById("Thema").innerHTML == "Wo bist du lieber?"){
    document.getElementById("Thema").innerHTML = "Welche Seite?";
    document.getElementById("Button1").value = "Rechts";
    console.log("Button 1/2");
  }else if(document.getElementById("Button1").value == "Rechts"){
    document.getElementById("Thema").innerHTML = "Du bist A!";
    document.getElementById("Button1").style.display = "none";
    document.getElementById("Button2").style.display = "none";
    document.getElementById("Button3").style.display = "none";
    console.log("Button 1/3");
  }
}
