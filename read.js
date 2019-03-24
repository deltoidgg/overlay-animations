var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myFunction(this);
  }
};
xhttp.open("GET", "scoreboard.xml", true);
xhttp.send();

function myFunction(xml) {
var i;
var xmlDoc = xml.responseXML;
var text="";
var x = xmlDoc.getElementsByTagName("scores");
for (i = 0; i <x.length; i++) { 
  text += x[i].getElementsByTagName("label")[0].childNodes[0].nodeValue;
}
document.getElementById("text").innerHTML = text;
}