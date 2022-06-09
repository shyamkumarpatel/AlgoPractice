/* 
  String: Is Palindrome
  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  
  Do not ignore spaces, punctuation and capitalization
 */

  const str1 = "a x a";
  const expected1 = true;
  
  const str2 = "racecar";
  const expected2 = true;
  
  const str3 = "Dud"; 
  const expected3 = false;
  
  const str4 = "oho!";
  const expected4 = false;
  
  /**
   * Determines if the given str is a palindrome (same forwards and backwards).
   * - Time: O(?).  --> O(N)
   * - Space: O(?). --> O(N)
   * @param {string} str
   * @returns {boolean} Whether the given str is a palindrome or not.
   */
  function isPalindrome(str) {
    for(var i = 0; i < (str.length/2); i++){
        if(str.charAt(i) != str.charAt(str.length-1-i)){
            return false;
        }
    }
    return true;
  }


console.log(isPalindrome(str1));
console.log(expected1);
console.log(isPalindrome(str2));
console.log(expected2);
console.log(isPalindrome(str3));
console.log(expected3);
console.log(isPalindrome(str4));
console.log(expected4);