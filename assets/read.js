// Read XML file
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
var xmlDoc = xml.responseXML;
var player1="", player2="", caster1="", caster2="", caster3="", twitter1="", twitter2="", twitter3="", p1score="", p2score="", p1team="", p2team="", p1country="", p2country="", round="", bestof="", mText1="", mText2="", mText3="", mScore1="", mScore2="", mScore3="";
var p=["","","",""];

// Loop to get data from XML and place in respective variable
var x = xmlDoc.getElementsByTagName("items");
for (i = 0; i <x.length; i++) { 
  player1 += x[i].getElementsByTagName("player1")[0].childNodes[0].nodeValue;
  player2 += x[i].getElementsByTagName("player2")[0].childNodes[0].nodeValue;
  caster1 += x[i].getElementsByTagName("caster1")[0].childNodes[0].nodeValue;
  caster2 += x[i].getElementsByTagName("caster2")[0].childNodes[0].nodeValue;
  caster3 += x[i].getElementsByTagName("caster3")[0].childNodes[0].nodeValue;
  twitter1 += x[i].getElementsByTagName("twitter1")[0].childNodes[0].nodeValue;
  twitter2 += x[i].getElementsByTagName("twitter2")[0].childNodes[0].nodeValue;
  twitter3 += x[i].getElementsByTagName("twitter3")[0].childNodes[0].nodeValue;
  p1score += x[i].getElementsByTagName("p1score")[0].childNodes[0].nodeValue;
  p2score+= x[i].getElementsByTagName("p2score")[0].childNodes[0].nodeValue;
  p1team += x[i].getElementsByTagName("p1team")[0].childNodes[0].nodeValue;
  p2team += x[i].getElementsByTagName("p2team")[0].childNodes[0].nodeValue;
  mText1 += x[i].getElementsByTagName("mText1")[0].childNodes[0].nodeValue;
  mText2 += x[i].getElementsByTagName("mText2")[0].childNodes[0].nodeValue;
  mText3 += x[i].getElementsByTagName("mText3")[0].childNodes[0].nodeValue;
  mScore1 += x[i].getElementsByTagName("mScore1")[0].childNodes[0].nodeValue;
  mScore2 += x[i].getElementsByTagName("mScore2")[0].childNodes[0].nodeValue;
  mScore3 += x[i].getElementsByTagName("mScore3")[0].childNodes[0].nodeValue;
  p1country += x[i].getElementsByTagName("p1country")[0].childNodes[0].nodeValue;
  p2country += x[i].getElementsByTagName("p2country")[0].childNodes[0].nodeValue;
  round += x[i].getElementsByTagName("round")[0].childNodes[0].nodeValue;
  bestof += x[i].getElementsByTagName("bestof")[0].childNodes[0].nodeValue;
  
  p[0] += x[i].getElementsByTagName("p1L")[0].childNodes[0].nodeValue;
  p[1] += x[i].getElementsByTagName("p1W")[0].childNodes[0].nodeValue;
  p[2] += x[i].getElementsByTagName("p2L")[0].childNodes[0].nodeValue;
  p[3] += x[i].getElementsByTagName("p2W")[0].childNodes[0].nodeValue;
  }  

  // Ammending URL for HTML insertion
  p1country = "background: url(../assets/flags/" + p1country + ".png);";
  p2country = "background: url(../assets/flags/" + p2country + ".png);";


  // Adding on Winner Bracket status based on checkbox values
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

  // Assigning team url affix based on team 1 value
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
    case 'VIT':
      p1logo = "../assets/teams/vit.png"
    break;
    case 'Harriers':
      p1logo = "../assets/teams/harriers.png"
      break;
      case 'SaltyEU':
        p1logo = "../assets/teams/saltyeu.png"
        break;
        case 'UYU':
          p1logo = "../assets/teams/uyu.png"
          break;
          case 'eMg':
            p1logo = "../assets/teams/emg.png"
            break;
            case 'W3D':
              p1logo = "../assets/teams/w3d.png"
              break;
    default:
      p1logo = "../assets/teams/default.png";
  }
  // Repeated for team 2, consider refactor 
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
      case 'SaltyEU':
        p2logo = "../assets/teams/saltyeu.png"
        break;
        case 'UYU':
          p2logo = "../assets/teams/uyu.png"
          break;
          case 'eMg':
            p2logo = "../assets/teams/emg.png"
            break;
            case 'W3D':
              p2logo = "../assets/teams/w3d.png"
              break;
    default:
    p2logo = "../assets/teams/default.png";
  }
  
  // Assigning variables to HTML IDs based on n value
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
      document.getElementById("twitter1").innerHTML = twitter1;
      break;
    case 3:
    document.getElementById("caster2").innerHTML = caster2;
    document.getElementById("twitter2").innerHTML = twitter2;
      break;
      case 10:
        document.getElementById("caster3").innerHTML = caster3;
        document.getElementById("twitter3").innerHTML = twitter3;
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
    document.getElementById("p1score").innerHTML = p1score;
    document.getElementById("p2score").innerHTML = p2score;
    break;
    case 8:
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
      case 9:
        document.getElementById("mText1").innerHTML = mText1;
        document.getElementById("mText2").innerHTML = mText2;
        document.getElementById("mText3").innerHTML = mText3;
        document.getElementById("mScore1").innerHTML = mScore1;
        document.getElementById("mScore2").innerHTML = mScore2;
        document.getElementById("mScore3").innerHTML = mScore3;
        break;
  }
}
