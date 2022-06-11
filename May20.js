var fruit1 = "apples";                          // fruit1 = "apples"
var fruit2 = "oranges";                         // fruit2 = "oranges"
    
fruit2 = fruit1;                               //  fruit2 = fruit1 = "apples"
    
console.log(fruit2 + " and " + fruit1);        // apples and apples













var fruit1 = "apples";                                    // fruit1 = "apples"
var fruit2 = "oranges";                                   // fruit2 = "oranges"
    
var temp = fruit1; // temp is a common name for this         temp = fruit1 = "apples"
fruit1 = fruit2;                                          // fruit1 = "oranges"
fruit2 = temp;                                            // fruit2 = "apples"
    
console.log(fruit2 + " and " + fruit1);                   // apples and oranges












var start = 0;
var end = 12;
    
while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}

/*
0 < 12 is True           2 < 10 is True        4 < 8 is True          6 < 6 is False so loop doesn't execute
start: 0, end: 12        start: 2, end: 10     start: 4, end: 8     
start = 2, end = 10      start = 4, end = 8    start = 6, end = 6
*/






var arr = ["a", "b", "c", "d", "e", "f"];

function reverse(arrInFunction){
    var temp = "";
    
    for(var left =0; left < arrInFunction.length/2; left++){  
        var right = arrInFunction.length - 1 - left;   //left = 0, right = 4
        temp = arrInFunction[left];                    //temp = a
        arrInFunction[left] = arrInFunction[right];              //arr[left] = e, arr[right] = e
        arrInFunction[right] = temp;                   // arr[right] = a
    }
     return arrInFunction;
}
console.log(arr);
console.log(reverse(arr));