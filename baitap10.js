function js10(){
    let a = document.getElementById('x').value
    let b = document.getElementById('y').value
    let c = document.getElementById('z').value
    if(a+b==c||a-b==c||a*b==c||a/b==c){
        document.getElementById('result10').innerHTML ='Có thể thay thế $ trong một biểu thức đã cho x $ y = z bằng một trong bốn dấu +, -, * hoặc / ';
    }else{
        document.getElementById('result10').innerHTML ='Không thể thay thế';
    }

}