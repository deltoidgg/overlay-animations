var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && ((location.protocol.indexOf('http') >= 0 && this.status == 200)) || location.protocol.indexOf('file') >= 0) {        
    myFunction(this);
  }
};
xhttp.open("GET", "../scoreboard/streamcontrol.xml", true);
xhttp.send();

function myFunction(xml) {
var i;
var logo;

// get(teamFromServer && idFromServer)
// team = teamFromServer
// logo = "teams/" + idFromServer + ".png"

var xmlDoc = xml.responseXML;
var player1="", player2="", caster1="", caster2="", p1score="", p2score="", p1team="", p2team="", p1country="", p2country="", round="", bestof="";
var p=["","","",""];
var x = xmlDoc.getElementsByTagName("items");
for (i = 0; i <x.length; i++) { 
  player1 += x[i].getElementsByTagName("player1")[0].childNodes[0].nodeValue;
  player2 += x[i].getElementsByTagName("player2")[0].childNodes[0].nodeValue;
  caster1 += x[i].getElementsByTagName("caster1")[0].childNodes[0].nodeValue;
  caster2 += x[i].getElementsByTagName("caster2")[0].childNodes[0].nodeValue;
  p1score += x[i].getElementsByTagName("p1score")[0].childNodes[0].nodeValue;
  p2score+= x[i].getElementsByTagName("p2score")[0].childNodes[0].nodeValue;
  p1team += x[i].getElementsByTagName("p1team")[0].childNodes[0].nodeValue;
  p2team += x[i].getElementsByTagName("p2team")[0].childNodes[0].nodeValue;
  p1country += x[i].getElementsByTagName("p1country")[0].childNodes[0].nodeValue;
  p2country += x[i].getElementsByTagName("p2country")[0].childNodes[0].nodeValue;
  round += x[i].getElementsByTagName("round")[0].childNodes[0].nodeValue;
  bestof += x[i].getElementsByTagName("bestof")[0].childNodes[0].nodeValue;
  
  p[0] += x[i].getElementsByTagName("p1L")[0].childNodes[0].nodeValue;
  p[1] += x[i].getElementsByTagName("p1W")[0].childNodes[0].nodeValue;
  p[2] += x[i].getElementsByTagName("p2L")[0].childNodes[0].nodeValue;
  p[3] += x[i].getElementsByTagName("p2W")[0].childNodes[0].nodeValue;
  }  

  p1country = "background: url(../assets/flags/" + p1country + ".png);";
  p2country = "background: url(../assets/flags/" + p2country + ".png);";

  if (p[0] == 1) {
    player1 += ' (L)';
  }
  if (p[1] == 1) {
    player1 += ' (W)';
  }
  if (p[2] == 1) {
    player2 += ' (L)';
  }
  if (p[3] == 1) {
    player2 += ' (W)';
  }

  switch (p1team) {
    case 'ELF | TKC':
    case 'DS | ELF':
    case 'ELF':
      p1logo = "../assets/teams/elf.png"
      break;
    case 'DG':
     p1logo = "../assets/teams/districtg.png"
      break;
    case '200K':
      p1logo = "../assets/teams/200k.png"
      break;
    case 'RIZE':
      p1logo = "../assets/teams/rize.png"
      break;
    case 'SWFGC':
      p1logo = "../assets/teams/swfgc.png"
      break;
    case 'NFC':
    case 'NFC3D':
      p1logo = "../assets/teams/nfc.png"
      break;
    case 'NJT':
      p1logo = "../assets/teams/nijota.png"
    break;
    case 'Harriers':
      p1logo = "../assets/teams/harriers.png"
      break;
    default:
      p1logo = "../assets/teams/default.png";
  }

  switch (p2team) {
    case 'ELF | TKC':
    case 'DS | ELF':
    case 'ELF':
      p2logo = "../assets/teams/elf.png"
      break;
    case 'DG':
     p2logo = "../assets/teams/districtg.png"
      break;
    case '200K':
    p2logo = "../assets/teams/200k.png"
      break;
    case 'RIZE':
    p2logo = "../assets/teams/rize.png"
      break;
    case 'SWFGC':
    p2logo = "../assets/teams/swfgc.png"
      break;
    case 'NFC':
    case 'NFC3D':
    p2logo = "../assets/teams/nfc.png"
      break;
    case 'NJT':
    p2logo = "../assets/teams/nijota.png"
    break;
    case 'Harriers':
    p2logo = "../assets/teams/harriers.png"
      break;
    default:
    p2logo = "../assets/teams/default.png";
  }
  
  switch (n) {
    case 0:
    document.getElementById("player1").innerHTML = player1;    
    document.getElementById("p1team").innerHTML = p1team;
    document.getElementById("p1logo").src = p1logo;
      break;
    case 1:
    document.getElementById("player2").innerHTML = player2;
    document.getElementById("p2team").innerHTML = p2team;
    document.getElementById("p2logo").src = p2logo;
      break;
    case 2:
      document.getElementById("caster1").innerHTML = caster1;
      break;
    case 3:
    document.getElementById("caster2").innerHTML = caster2;
      break;
    case 4:
    document.getElementById("p1score").innerHTML = p1score;
      break;
    case 5:
    document.getElementById("p2score").innerHTML = p2score;
      break;
    case 6:
    document.getElementById("round").innerHTML = round;
    document.getElementById("bestof").innerHTML = bestof;
    break;
    case 7:
    document.getElementById("player1").innerHTML = player1;
    document.getElementById("player2").innerHTML = player2;
    document.getElementById("p1team").innerHTML = p1team;
    document.getElementById("p2team").innerHTML = p2team;
    document.getElementById("p1country").style = p1country;
    document.getElementById("p2country").style = p2country;
    document.getElementById("p1score").innerHTML = p1score;
    document.getElementById("p2score").innerHTML = p2score;
    document.getElementById("p1logo").src = p1logo;
    document.getElementById("p2logo").src = p2logo;
    break;
  }
}
