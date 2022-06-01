/*
*  given a string with the words in reverse order, let's correct the order so that it's "Practice Makes Perfect" 
*/
var outOfOrderString = "Perfect Makes Practice";
console.log(outOfOrderString);

// temp variable to hold the reverse of outOfOrderString
var temp = "";

for(var i = outOfOrderString.length-1; i >= 0; i--){
    temp += outOfOrderString.charAt(i);
}
console.log(temp);

//let's inverse the each word with temp string so that it read correctly.
var correctString = "";
var indexAfterLastWhiteSpace = 0;

for(var i = 0; i < temp.length; i++){
    if(temp.charAt(i) == " "){
        for(var j = i-1; j >=indexAfterLastWhiteSpace; j--){
            correctString += temp.charAt(j);
        }
        correctString += " ";
        indexAfterLastWhiteSpace = i+1;
    }
    else if(i == temp.length-1){
        for(var j = i; j >=indexAfterLastWhiteSpace; j--){
            correctString += temp.charAt(j);
        }
    }
}
console.log(correctString);