


const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`============= STEP 1 ================`);
console.log(` Length of an given array is:${arrayNumbers.length}`);

console.log(`============= STEP 2 =================`);
console.log(`First Elememt of given array is:${arrayNumbers[0]}`);
console.log(`Last Elememt of given array is:${arrayNumbers[10]}`);

console.log(`============= STEP 3 =================`);
const len =arrayNumbers.length;
const sliceLog = arrayNumbers.slice(len-3);
console.log(`Third Last Elements using length property: ${arrayNumbers[arrayNumbers.length-3]}`);

console.log(`============= STEP 4 =================`);
console.log(`All the even numbers from an array is-`)
for (const iterator of arrayNumbers) {
    if (iterator%2==0) {
        console.log(iterator); 
    }
}

console.log(`============= STEP 5 =================`);
console.log(`All the odd numbers from an array is-`);
for (const iterator of arrayNumbers) {
    if (iterator%2!=0) {
        console.log (iterator) ;                             
    }
}
console.log(`============= STEP 6 =================`);
console.log(`sum of all even positioned elements from arrayNumbers`);
let sumEven= 0;
for (const key in arrayNumbers){
    if (key%2==0) {
     sumEven = sumEven + arrayNumbers[key] ;  
    }
}
console.log(sumEven);

console.log(`============= STEP 7 =================`);
console.log(`sum of all odd positioned elements from arrayNumbers`);
let sumOdd= 0;
for (const key in arrayNumbers){
    if (key%2!=0) {
     sumOdd = sumOdd + arrayNumbers[key] ;  
    }
}
console.log(sumOdd);




console.log(`============= STEP 8 =================`);
let sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    sum = sum + element;   
    
}
console.log(`Sum of an array is:${sum}`);

console.log(`============= STEP 9 =================`);
console.log(`The Numbers Which is Multiple of 5`);
for(const iterator of arrayNumbers){
    if (iterator%5==0) {
        console.log(iterator);
        
    }
}

console.log(`============= STEP 10 =================`);
console.log(`is number 115  available in arrayNumbers ? `);
console.log(arrayNumbers.includes(115));

console.log(`============= STEP 11 =================`);
console.log(`is number 23 available in arrayNumbers? `);
console.log(arrayNumbers.includes(23));

console.log(`============= STEP 12 =================`);
console.log(`Insert a Numbers in an given array at index 3:`);
arrayNumbers.splice(3,0,55,66);
console.log(arrayNumbers);

console.log(`============= STEP 13 =================`);
console.log(`Delete 3 elements starting from index 4:`)
arrayNumbers.splice(4,3);
console.log(arrayNumbers);