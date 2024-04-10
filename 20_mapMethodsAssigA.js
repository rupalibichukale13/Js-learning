
const arrayNumbers =[20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`============= STEP 1: add 10 into each given array element ===============`);
let arrayTransform = [];
arrayNumbers.forEach(element=>{
    arrayTransform.push(element+10);
});
console.log(arrayNumbers);
console.log(arrayTransform);

console.log(`============= STEP 2: Cube the each given array element ===============`);
arrayNumbersCube = arrayNumbers.map( (currentValue)=>{
    return currentValue * currentValue * currentValue;
});
console.log(arrayNumbersCube);


console.log(`============= STEP 3: Add the index value into its corresponding each array element ===============`);
const arrayNew = arrayNumbers.map( (currentValue, index)=>{
    return currentValue+index;  
});
console.log(arrayNew);


