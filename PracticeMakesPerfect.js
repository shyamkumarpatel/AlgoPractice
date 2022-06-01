var inverseString = "Perfect Makes Practice";


var temp = "";

for(var i = inverseString.length-1; i >= 0; i--){
    temp += inverseString.charAt(i);
    console.log(i);
}

console.log(inverseString);
console.log(temp);