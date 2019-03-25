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
var text=["","","",""];
var x = xmlDoc.getElementsByTagName("scores");

for (i = 0; i <x.length; i++) { 
  text[0] += x[i].getElementsByTagName("P1")[0].childNodes[0].nodeValue;
  text[1] += x[i].getElementsByTagName("P2")[0].childNodes[0].nodeValue;
  text[2] += x[i].getElementsByTagName("label")[0].childNodes[0].nodeValue;
  text[3] += x[i].getElementsByTagName("misc")[0].childNodes[0].nodeValue;
  }

  window.onload = startInterval();

  function startInterval()
  {
      setInterval("loadXMLDoc();", 500);
  }

document.getElementById("text").innerHTML = text[n];
}