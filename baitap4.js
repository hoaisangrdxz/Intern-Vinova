function js4(){
    let so1 = parseInt(document.getElementById('so1').value)
    let so2 = parseInt(document.getElementById('so2').value)

    let tong=so1+so2;
    if(tong>=50&&tong<=80){
        document.getElementById('result4').innerHTML = 'Tổng là: '+tong+', giá trị trả về: 65'; 
    }else{
        document.getElementById('result4').innerHTML = 'Tổng là: '+tong+', giá trị trả về: 80'; 
    }
}