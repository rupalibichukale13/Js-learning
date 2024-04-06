
console.log(`=============== Program to count Prime Numbers from given array ============`);
const array = [3,9,7,6,19,29,53]
function primeNumbers(num) {
  for (let index = 2; index < num; index++) {
    if (num%index==0) {
        return false;
    }
    
  }  
   return true; 
}

function countPrimeNumber(array) {
    let count = 0;
    let primeNumberArray=[];
    array.forEach(element => {
       if (primeNumbers(element)) {
           count++
           primeNumberArray.push(element);
       } 
    });
    console.log(`Prime Numbers in given array is: ${primeNumberArray}`);
    console.log(`Count of Prime Numbers in given array is: ${count} `);
}
countPrimeNumber(array);

console.log(`============== Program to count Spaces`);

function spaceCount(string) {
    let count = 0;
    for (const iterator of string) {
        if (iterator==" ") {
            count++;
        }
    }
    return count;
}
console.log(`Total Number of Spaces in given String 1 is : ${spaceCount("Rivision is the mother of Success")}`);
console.log(`Total Number of Spaces in given String 2 is : ${spaceCount("Java Script is the laanguage of internet world")}` );   

