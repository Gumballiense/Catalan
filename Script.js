
function takeansNoucentisme(){
  var puntuacioNoucentisme = 0;
  var x = document.getElementById('1').value;
  if (x=='1') {
    puntuacioNoucentisme++;
  }
 x = document.getElementById('2').value;
 if (x=='4') {
   puntuacioNoucentisme++;
 }
 x = document.getElementById('3').value;
 if (x=='3') {
   puntuacioNoucentisme++;
 }
 x = document.getElementById('4').value;
 if (x=='1') {
   puntuacioNoucentisme++;
 }
 x = document.getElementById('5').value;
 if (x=='1') {
   puntuacioNoucentisme++;
 }
 x = document.getElementById('6').value;
 if (x=='2') {
   puntuacioNoucentisme++;
 }
 x = document.getElementById('7').value;
 if (x=='4') {
   puntuacioNoucentisme++;
 }
 x = document.getElementById('8').value;
 if (x=='4') {
   puntuacioNoucentisme++;
 }
 x = document.getElementById('9').value;
 if (x=='1') {
   puntuacioNoucentisme++;
 }
 x = document.getElementById('10').value;
 if (x=='3') {
   puntuacioNoucentisme++;
 }
 x = document.getElementById('11').value;
 if (x=='1') {
   puntuacioNoucentisme++;
 }
 x = document.getElementById('12').value;
 if (x=='3') {
   puntuacioNoucentisme++;
 }
 x = document.getElementById('13').value;
 if (x=='1') {
   puntuacioNoucentisme++;
 }
 x = document.getElementById('14').value;
 if (x=='1') {
   puntuacioNoucentisme++;
 }
 x = document.getElementById('15').value;
 if (x=='3') {
   puntuacioNoucentisme++;
 }
 x = document.getElementById('16').value;
 if (x=='2') {
   puntuacioNoucentisme++;
 }
 x = document.getElementById('17').value;
 if (x=='1') {
   puntuacioNoucentisme++;
 }
 x = document.getElementById('18').value;
 if (x=='1') {
   puntuacioNoucentisme++;
 }
 document.getElementById('resultatNoucentisme').innerHTML = "La teva puntuació és de " + ((puntuacioNoucentisme/18)*100).toFixed(2) + "%";
}

function takeansModernisme(){
  var puntuacioModernisme = 0;
  var x = document.getElementById('m1').value;
  if (x=='1') {
    puntuacioModernisme++;
  }
 x = document.getElementById('m2').value;
 if (x=='1') {
   puntuacioModernisme++;
 }
 x = document.getElementById('m3').value;
 if (x=='2') {
   puntuacioModernisme++;
 }
 x = document.getElementById('m4').value;
 if (x=='4') {
   puntuacioModernisme++;
 }
 x = document.getElementById('m5').value;
 if (x=='2') {
   puntuacioModernisme++;
 }
 x = document.getElementById('m6').value;
 if (x=='3') {
   puntuacioModernisme++;
 }
 x = document.getElementById('m7').value;
 if (x=='1') {
   puntuacioModernisme++;
 }
 x = document.getElementById('m8').value;
 if (x=='4') {
   puntuacioModernisme++;
 }
 x = document.getElementById('m9').value;
 if (x=='3') {
   puntuacioModernisme++;
 }
 x = document.getElementById('m10').value;
 if (x=='3') {
   puntuacioModernisme++;
 }
 x = document.getElementById('m11').value;
 if (x=='3') {
   puntuacioModernisme++;
 }
 x = document.getElementById('m12').value;
 if (x=='1') {
   puntuacioModernisme++;
 }
 x = document.getElementById('m13').value;
 if (x=='3') {
   puntuacioModernisme++;
 }
 x = document.getElementById('m14').value;
 if (x=='2') {
   puntuacioModernisme++;
 }
 x = document.getElementById('m15').value;
 if (x=='4') {
   puntuacioModernisme++;
 }
 x = document.getElementById('m16').value;
 if (x=='1') {
   puntuacioModernisme++;
 }
 x = document.getElementById('m17').value;
 if (x=='1') {
   puntuacioModernisme++;
 }
 document.getElementById('resultatModernisme').innerHTML = "La teva puntuació és de " + ((puntuacioModernisme/17)*100).toFixed(2) + "%";
}
