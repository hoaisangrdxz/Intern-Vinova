function js8(){

    let arr1 = [1, 3, 5];
    let arr2 = [2, 4, 6];
    let result = [].concat(arr1.slice(1,-1),arr2.slice(1,-1))
    document.getElementById('result8').innerHTML = 'mảng mới là: '+result;
}