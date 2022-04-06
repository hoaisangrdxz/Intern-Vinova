
function js2(){
    
function js21(){
    let so1 = document.getElementById('so1').value
    if(so1>=40&&so1<=60) document.getElementById('result21').innerHTML = so1+' nằm trong phạm vi 40-60';
    else if(so1>=70&&so1<=100) document.getElementById('result21').innerHTML = so1+' nằm trong phạm vi 70-100';
    else document.getElementById('result21').innerHTML = so1+' không nằm trong 2 phạm vi đề bài'; 
}
function js22(){
    let so2 = document.getElementById('so2').value
    if(so2>=40&&so2<=60) document.getElementById('result22').innerHTML = so2+' nằm trong phạm vi 40-60';
    else if(so2>=70&&so2<=100) document.getElementById('result22').innerHTML = so2+' nằm trong phạm vi 70-100';
    else document.getElementById('result22').innerHTML = so2+' không nằm trong 2 phạm vi đề bài';
}
    js21();
    js22();
}
