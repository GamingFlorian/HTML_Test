function Button1(){
  if(document.getElementById("Button1").value == "Thema1"){
    console.log("Update 1: " + document.getElementById("Button1").value);
    document.getElementById("Button1").value = "Teil 1";
  }
}
