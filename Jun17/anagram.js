/* 
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.
  Is there a quick way to determine if they aren't an anagram before spending more time?
  Given two strings
  return whether or not they are anagrams
*/

const strA1 = "yes";
const strB1 = "eys";
const expected1 = true;

const strA2 = "yes";
const strB2 = "eYs";
const expected2 = true;

const strA3 = "no";
const strB3 = "noo";
const expected3 = false;

const strA4 = "silent";
const strB4 = "listen";
const expected4 = true;

/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * - Time: O(?).   --> O(N)
 * - Space: O(?).  --> O(N)
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 */
function isAnagram(s1, s2) {
    new_dict1 = {}
        for (let i = 0; i < s1.length; i++){
        let index = s1[i].toLowerCase();
        if (new_dict1.hasOwnProperty(index)){
            new_dict1[index]++;
        } else{
            new_dict1[index] = 1;
        }
    }
    new_dict2 = {}
    for (let i = 0; i < s2.length; i++){
        let index = s2[i].toLowerCase();
        if (new_dict2.hasOwnProperty(index)){
            new_dict2[index]++;
        } else{
            new_dict2[index] = 1;
        }
    }
    for (key in new_dict1){
        if (new_dict2.hasOwnProperty(key)){
            if (new_dict1[key] == new_dict2[key]){
                continue;
            } else {
                return false;
            }
        }else {
            return false;
        }
    }
    return true;
}


console.log("Result  :",isAnagram(strA1, strB1));
console.log("Expected:", expected1);

console.log("Result  :",isAnagram(strA2, strB2));
console.log("Expected:", expected2);

console.log("Result  :",isAnagram(strA3, strB3));
console.log("Expected:", expected3);

console.log("Result  :",isAnagram(strA4, strB4));
console.log("Expected:", expected4);