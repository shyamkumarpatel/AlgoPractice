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
