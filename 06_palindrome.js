//madam dad mom level nitin radar amma mam nayan
// hello
  
function isPalindrome(word){
 const arrayChars = word.split("");
   arrayChars.reverse();
   const reverseWord = arrayChars.join("");
  const result= reverseWord==word;
   return result;


}
 var result = isPalindrome("madam");
 console.log(`is word "madam" palindrome:${result}`);

 var result = isPalindrome("nitini");
 console.log(`is word "nitini" palindrome:${result}`);

 var result = isPalindrome("dad");
 console.log(`is word "dad" palindrome:${result}`);

 var result = isPalindrome("hello");
 console.log(`is word "hello" palindrome:${result}`);
