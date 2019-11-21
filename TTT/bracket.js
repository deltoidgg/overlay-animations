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
var slot1="",score1="", slot2="", score2="", slot3="", score3="", slot4="", score4="", slot5="", score5="", slot6="", score6="", slot7="", score7="", slot8="", score8="", slot9="", score9="", slot10="", score10="", slot11="", score11="", slot12="", score12="", slot13="", score13="", slot14="", score14="";
var player1="", player2="", p1score="", p2score="", p1team="", p2team="", round="", bestof="", caster1="", caster2="";
// Loop to get data from XML and place in respective variable
var x = xmlDoc.getElementsByTagName("items");
for (i = 0; i <x.length; i++) { 
  player1 += x[i].getElementsByTagName("player1")[0].childNodes[0].nodeValue;
  player2 += x[i].getElementsByTagName("player2")[0].childNodes[0].nodeValue;
  p1score += x[i].getElementsByTagName("p1score")[0].childNodes[0].nodeValue;
  p2score += x[i].getElementsByTagName("p2score")[0].childNodes[0].nodeValue;
  p1team += x[i].getElementsByTagName("p1team")[0].childNodes[0].nodeValue;
  p2team += x[i].getElementsByTagName("p2team")[0].childNodes[0].nodeValue;
  round += x[i].getElementsByTagName("round")[0].childNodes[0].nodeValue;
  bestof += x[i].getElementsByTagName("bestof")[0].childNodes[0].nodeValue;
  caster1 += x[i].getElementsByTagName("caster1")[0].childNodes[0].nodeValue;
  caster2 += x[i].getElementsByTagName("caster2")[0].childNodes[0].nodeValue;
    slot1 += x[i].getElementsByTagName("slot1")[0].childNodes[0].nodeValue;
    score1 += x[i].getElementsByTagName("score1")[0].childNodes[0].nodeValue;
    slot2 += x[i].getElementsByTagName("slot2")[0].childNodes[0].nodeValue;
    score2 += x[i].getElementsByTagName("score2")[0].childNodes[0].nodeValue;
    slot3 += x[i].getElementsByTagName("slot3")[0].childNodes[0].nodeValue;
    score3 += x[i].getElementsByTagName("score3")[0].childNodes[0].nodeValue;
    slot4 += x[i].getElementsByTagName("slot4")[0].childNodes[0].nodeValue;
    score4 += x[i].getElementsByTagName("score4")[0].childNodes[0].nodeValue;
    slot5 += x[i].getElementsByTagName("slot5")[0].childNodes[0].nodeValue;
    score5 += x[i].getElementsByTagName("score5")[0].childNodes[0].nodeValue;
    slot6 += x[i].getElementsByTagName("slot6")[0].childNodes[0].nodeValue;
    score6 += x[i].getElementsByTagName("score6")[0].childNodes[0].nodeValue;
    slot7 += x[i].getElementsByTagName("slot7")[0].childNodes[0].nodeValue;
    score7 += x[i].getElementsByTagName("score7")[0].childNodes[0].nodeValue;
    slot8 += x[i].getElementsByTagName("slot8")[0].childNodes[0].nodeValue;
    score8 += x[i].getElementsByTagName("score8")[0].childNodes[0].nodeValue;
    slot9 += x[i].getElementsByTagName("slot9")[0].childNodes[0].nodeValue;
    score9 += x[i].getElementsByTagName("score9")[0].childNodes[0].nodeValue;
    slot10 += x[i].getElementsByTagName("slot10")[0].childNodes[0].nodeValue;
    score10 += x[i].getElementsByTagName("score10")[0].childNodes[0].nodeValue;
    slot11 += x[i].getElementsByTagName("slot11")[0].childNodes[0].nodeValue;
    score11 += x[i].getElementsByTagName("score11")[0].childNodes[0].nodeValue;
    slot12 += x[i].getElementsByTagName("slot12")[0].childNodes[0].nodeValue;
    score12 += x[i].getElementsByTagName("score12")[0].childNodes[0].nodeValue;
    slot13 += x[i].getElementsByTagName("slot13")[0].childNodes[0].nodeValue;
    score13 += x[i].getElementsByTagName("score13")[0].childNodes[0].nodeValue;
    slot14 += x[i].getElementsByTagName("slot14")[0].childNodes[0].nodeValue;
    score14 += x[i].getElementsByTagName("score14")[0].childNodes[0].nodeValue;
  }  

 
  // Assigning variables to HTML IDs based on n value
  switch (n) {
    case 0:
    document.getElementById("slot1").innerHTML = slot1;    
    document.getElementById("score1").innerHTML = score1;
    document.getElementById("slot2").innerHTML = slot2;    
    document.getElementById("score2").innerHTML = score2;
    document.getElementById("slot3").innerHTML = slot3;    
    document.getElementById("score3").innerHTML = score3;
    document.getElementById("slot4").innerHTML = slot4;    
    document.getElementById("score4").innerHTML = score4;
    document.getElementById("slot5").innerHTML = slot5;    
    document.getElementById("score5").innerHTML = score5;
    document.getElementById("slot6").innerHTML = slot6;    
    document.getElementById("score6").innerHTML = score6;
    document.getElementById("slot7").innerHTML = slot7;    
    document.getElementById("score7").innerHTML = score7;
    document.getElementById("slot8").innerHTML = slot8;    
    document.getElementById("score8").innerHTML = score8;
    document.getElementById("slot9").innerHTML = slot9;    
    document.getElementById("score9").innerHTML = score9;
    document.getElementById("slot10").innerHTML = slot10;    
    document.getElementById("score10").innerHTML = score10;
    document.getElementById("slot11").innerHTML = slot11;    
    document.getElementById("score11").innerHTML = score11;
    document.getElementById("slot12").innerHTML = slot12;    
    document.getElementById("score12").innerHTML = score12;
    document.getElementById("slot13").innerHTML = slot13;    
    document.getElementById("score13").innerHTML = score13;
    document.getElementById("slot14").innerHTML = slot14;    
    document.getElementById("score14").innerHTML = score14;
    break;
    case 2:
      document.getElementById("player1").innerHTML = player1;    
      document.getElementById("player2").innerHTML = player2;
        break;
        case 3:   
          document.getElementById("p1team").innerHTML = p1team;
          document.getElementById("p1score").innerHTML = p1score;
          document.getElementById("p2team").innerHTML = p2team;
          document.getElementById("p2score").innerHTML = p2score;
            break;
            case 4:
              document.getElementById("round").innerHTML = round;
              document.getElementById("bestof").innerHTML = bestof;
              break;
              case 5:
                document.getElementById("caster1").innerHTML = caster1;
                document.getElementById("caster2").innerHTML = caster2;
                break;
  }
}
