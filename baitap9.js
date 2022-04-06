function js9(){
    var arr = [ 4, 7, 4, 5, 35, 43, 3, 13, 10];
    var arr2 = arr.slice(-1);
    var newArr = [].concat(arr[0], arr2[0]);
    document.getElementById('result9').innerHTML = 'mảng mới là: '+newArr
}