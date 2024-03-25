console.log( `================= STEP 1 ===============`);
function greaterNumber(num1, num2) {
   var result = num1 > num2 ? num1 : num2;
   console.log(`The Greatest number among ${num1} and ${num2} is: ${result}`);
}   
greaterNumber(10, -10);
greaterNumber(800, 899);

console.log( `================= STEP 2 ===============`);
function isEvenOrOddNum(n1) {
    var result = n1 % 2 == 0 ; 
    console.log(`is the number Even: ${result}`);
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log( `================= STEP 3 ===============`);
function wordLength(word) {
    var result = word.length%2==0 ? "even" :"odd";
    console.log(`Is the lenght of word ${word} Even or ODD: ${result} `);
}
wordLength("JavaScript");
wordLength("develpoer");
wordLength("Google");

