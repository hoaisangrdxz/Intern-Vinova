function js5(){
    let chuoi = document.getElementById('chuoi').value
    if(chuoi.length<4){
        document.getElementById('result5').innerHTML ='Chuỗi phải có ít nhất 3 ký tự';
    }else{
    var newstr = chuoi.slice(-3)
    document.getElementById('result5').innerHTML = 'Chuỗi mơi là: '+newstr.repeat(4)
    }


}