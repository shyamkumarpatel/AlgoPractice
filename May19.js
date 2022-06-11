var x = 5;
    
function setX(newValue) {
    x = newValue; 
}
    
console.log(x); // 5
setX(15);       // x = 15
console.log(x); // 15 









var x = 5;
    
function addToX(amount) {        // amount = -10
    return x + amount;           // return 5 + -10 --> -5
    console.log("hello there");  // this line never executes.
}
    
console.log(x);             // 5
var result = addToX(-10);   //result = -5
console.log(result);        // -5
console.log(x);             // 5









function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) { //left = 0            left = 1           left = 2          
        var right = arr.length-1-left;           //right = 6-1-0 =5    right = 6-1-1 = 4  right = 6-1-2 = 3
        if(arr[left] != arr[right]) {            // 3 != 3 --> false   2 != 2 --> false   1!=1 --> false
            return "Not a pal-indrome!"; 
        }
    }
    return "Pal-indrome!";
}    
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);
