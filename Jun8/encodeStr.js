/* 
  Given in an alumni interview in 2021.
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
*/

const str1 = "aaaabbcddd";
const expected1 = "a4b2c1d3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a1";

const str4 = "bbcc";
const expected4 = "b2c2";

/**
 * Encodes the given string such that duplicate characters appear once followed
 * by a number representing how many times the char occurs. Only encode strings
 * when the result yields a shorter length.
 * - Time: O(?). --> O(N)
 * - Space: O(?). --> O(N)
 * @param {string} str The string to encode.
 * @returns {string} The given string encoded.
 */
function encodeStr(str) {

    if(str.length < 1){
        return str;
    }
    var rtStr = "";
    var charEncode = str.charAt(0);
    var charCount = 1
    for(var i = 1; i < str.length; i++){
        if(charEncode == str.charAt(i)){
            charCount++;
            //console.log("charEncode=",charEncode,"charCount=",charCount, "charAt",str.charAt(i));
        }
        else {
            rtStr += charEncode+charCount;
            //console.log("charEncode=",charEncode,"charCount=",charCount, "charAt",str.charAt(i), "rtStr=",rtStr);
            charEncode = str.charAt(i);
            charCount = 1
        }
    }
    rtStr += charEncode+charCount;
    //console.log(rtStr);
    return rtStr;
}

console.log(encodeStr(str1));
console.log(expected1);
console.log(encodeStr(str2));
console.log(expected2);
console.log(encodeStr(str3));
console.log(expected3);
console.log(encodeStr(str4));
console.log(expected4);