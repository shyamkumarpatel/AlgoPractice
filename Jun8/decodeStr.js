/* 
  String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

const str2 = "a3b2c12d10";
const expected2 = "aaabbccccccccccccdddddddddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).   -> O(N^2)
 * - Space: O(?).   -> O(N)
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
function decodeStr(str) {
    var rtStr = "";
    var charIndex = '';
    var counter = '';

    if(str.length < 2) return str;

    for(var i = 0; i < str.length; i++){
        if(str.charCodeAt(i) >= 48  && str.charCodeAt(i) <=57){
            if(i == (str.length -1)){
                counter += str.charAt(i);
                for(var j = 0; j < parseInt(counter); j++){
                    rtStr += charIndex;
                }
            }
            else if(str.charCodeAt(i+1) >= 48  && str.charCodeAt(i+1) <=57){
                counter += str.charAt(i);
            }
            else{
                counter += str.charAt(i);
                for(var j = 0; j < parseInt(counter); j++){
                    rtStr += charIndex;
                }
                counter = '';
            }
        }
        else{
            charIndex = str.charAt(i);
        }
    }


    return rtStr;
}
console.log(decodeStr(str1));
console.log(expected1);

console.log(decodeStr(str2));
console.log(expected2);