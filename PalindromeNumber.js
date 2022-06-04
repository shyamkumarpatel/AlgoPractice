/** Given an integer x, return true if x is palindrome integer.
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    var reverseX =x%10;
    if(x<0) return false;
    //console.log("-----x=",x, "reverseX=", reverseX);
    for(var i = Math.floor(x/10); (i/10)>0; i=Math.floor(i/10)){
        
        //console.log("-----i=",i,"i%10=",i%10, "reverseX=", reverseX);
        reverseX = (reverseX*10) +Math.floor(i%10);
    }

    //console.log("-----x=",x, "reverseX=", reverseX);
    return reverseX === x;
};
console.log(1, isPalindrome(-1));
console.log(1, isPalindrome(1));
console.log(10, isPalindrome(10));
console.log(11, isPalindrome(11));
console.log(102, isPalindrome(102));
console.log(101, isPalindrome(101));
console.log(1112, isPalindrome(1112));
console.log(1001, isPalindrome(1001));
console.log(1111, isPalindrome(1111));
console.log(11112, isPalindrome(11112));
console.log(11111, isPalindrome(11111));