console.log("========== STEP 1==========");

function squareOfWorldLength( value){
  
    var stringLength = value.length ;
    var lengthSquare = stringLength ** 2;
    return lengthSquare;
}
 var lengthSquare  = squareOfWorldLength("JavaScript");
 console.log (`Length square of word "JavaScript" is: ${lengthSquare}`);
 var lengthSquare  = squareOfWorldLength("Google Chrome");
 console.log (`Length square of word "Google Chrome" is: ${lengthSquare}`);
 var lengthSquare = squareOfWorldLength("Developer Smart");
 console.log (`Length square of word "Developer Smart" is: ${lengthSquare}`);

 console.log("========== STEP 2 ==========");
 var sentence = "I am Angular Developer";
var totalChars = sentence.length;
console.log(`Length of Given String is: ${totalChars}`);

var totalWords = sentence.split(" ")
//console.log(totalWords);
console.log(`Total Words Available in Given string is: ${totalWords.length}`);

var divideValue =  totalChars / totalWords.length;
console.log (`Divide by total Number words available in string is: ${divideValue}`);

var multipleValue = totalChars * totalWords.length;
console.log(`Multiple by total Number words available in string is: ${multipleValue}`);

   





  

