


//7
function isPrime(num){
    for (let index = 2; index <num ; index++) {
        if (num%index==0) {
            return false;
            
        }
        
    }
    return true;
}
const result = isPrime(7);
console.log(`Is 7 is Prime Number:${result}`);

const result1 = isPrime(9);
console.log(`Is 9 is Prime Number:${result1}`);

const array = [3, 9, 7, 6, 19, 29, 53];
function arrayNumbers(array){
for (const index of array) 
    if (array%index==0) {
        console.log(index); 
    }
}
const array1 = [3, 9, 7, 6, 19, 29, 53];



