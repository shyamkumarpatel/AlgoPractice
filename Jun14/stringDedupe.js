/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aaaaa";
const expected4 = "a";

const str5 = "banana";
const expected5 = "ban";

/**
 * De-dupes the given string.
 * - Time: O(?).  --> O(N)
 * - Space: O(?). --> O(N?)
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
function stringDedupe(str) {
    var rtObj = {};
    var rtStr = "";
    for(var i = 0; i < str.length; i++){
        if(rtObj.hasOwnProperty(str.charAt(i))){
            rtObj[str.charAt(i)] += 1;
        }
        else{
            rtObj[str.charAt(i)] = 1;
        }
    }
    for(key in rtObj){
        rtStr += key;
    }
    return rtStr;
}

console.log("Acutal:   ",stringDedupe(str1));
console.log("Expected: ", expected1);

console.log("Acutal:   ",stringDedupe(str2));
console.log("Expected: ", expected2);

console.log("Acutal:   ",stringDedupe(str3));
console.log("Expected: ", expected3);

console.log("Acutal:   ",stringDedupe(str4));
console.log("Expected: ", expected4);

console.log("Acutal:   ",stringDedupe(str5));
console.log("Expected: ", expected5);

