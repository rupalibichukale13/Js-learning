console.log(`==================== STEP 1 ======================`);
let show = () => {
    
    console.log(`Good Morning , Today is Monday`);
}
show();


console.log(`==================== STEP 2 ======================`);
let mul = (n1, n2 , n3) => {
    console.log(`Multiplication is : ${n1 * n2 * n3}`);
}
console.log(`a. values to be passed ==> 5 , 5 , 2`);
mul(5 , 5 , 2);
console.log(`b. values to be passed ==> 10 , 4 , default 3rd arg as 1`);
mul(10,4,n3=1);

console.log(`==================== STEP 3 ======================`);
let addition = (n1 , n2 , n3 , n4, n5) => {
    let result = n1+n2+n3+n4+n5;
    return result;
  }
  console.log(`a. values to be passed  ==> 100 , 100, 200, 349 , 756 `);
  let additionResult = addition(100 , 100, 200, 349 , 756);
  console.log(`Addition of  Arguments is: ${additionResult}`);
  console.log(`c. values to be passed  ==> "I am ", "learning",  "ES6" , "features", "in depth"  `);
  let additionResult1 = addition("I am ", "learning",  "ES6" , "features", "in depth");
  console.log(`Addition of Arguments is: ${additionResult1}`);
  
