var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && ((location.protocol.indexOf('http') >= 0 && this.status == 200)) || location.protocol.indexOf('file') >= 0) {        
    myFunction(this);
  }
};
xhttp.open("GET", "./scoreboard/streamcontrol.xml", true);
xhttp.send();

function myFunction(xml) {
var i;
var logo = "teams/rize.png";
var team = "rize";

// get(teamFromServer && idFromServer)
// team = teamFromServer
// logo = "teams/" + idFromServer + ".png"

var xmlDoc = xml.responseXML;
var text=["","","","","",""];
var x = xmlDoc.getElementsByTagName("items");
for (i = 0; i <x.length; i++) { 
  text[0] += x[i].getElementsByTagName("player1")[0].childNodes[0].nodeValue;
  text[1] += x[i].getElementsByTagName("player2")[0].childNodes[0].nodeValue;
  text[2] += x[i].getElementsByTagName("caster1")[0].childNodes[0].nodeValue;
  text[3] += x[i].getElementsByTagName("caster2")[0].childNodes[0].nodeValue;
  text[4] += x[i].getElementsByTagName("p1score")[0].childNodes[0].nodeValue;
  text[5] += x[i].getElementsByTagName("p2score")[0].childNodes[0].nodeValue;
  }

document.getElementById("text").innerHTML = text[n];
document.getElementById("team").innerHTML = team;
document.getElementById("logo").src = logo;
}
