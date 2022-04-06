let so1
let so2
function js1(){
  so1 = document.getElementById('so1').value
  so2 = document.getElementById('so2').value
  if(Math.abs(100-so1)<=Math.abs(100-so2)){
    document.getElementById('result').innerHTML = so1+' gần với 100 hơn '+so2;
  }else
    document.getElementById('result').innerHTML = so2+' gần với 100 hơn '+so1;     }      