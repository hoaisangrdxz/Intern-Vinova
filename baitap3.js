function js3(){
    let kytu = document.getElementById('kytu').value
    let chuoi = document.getElementById('chuoi').value
    let vitri = parseFloat(chuoi.indexOf(kytu))
    if(vitri>=1&&vitri<=3){
        document.getElementById('result3').innerHTML ='ký tự có tồn tại ở vị trí thứ 2 đến thứ 4, ký tự ở vị trí: '+(vitri+1)
    }else
        if(vitri==-1) document.getElementById('result3').innerHTML ='Ký tự không tồn tại trong chuỗi'
        else 
            document.getElementById('result3').innerHTML ='ký tự không có tồn tại ở vị trí thứ 2 đến thứ 4, ký tự ở vị trí: '+(vitri+1)


}