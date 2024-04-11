

const arrayFrnds = ["Stew","Elon" , "Jenny" , "Bill"];
console.log(arrayFrnds);
console.log(`Sorting friends name in ascending order`);
arrayFrnds.sort();
console.log(arrayFrnds);
console.log(`-----------------------------------------------------------`);
console.log(`Sorting friends name in desending order`);
arrayFrnds.reverse();
console.log(arrayFrnds);

console.log(`-----------------------------------------------------------`);
let array = [2, 40, 19, 79, 8, 9];
console.log(array);
console.log(`custom sorting on array numbers in ascending order`);
array.sort((n1, n2)=>{
    return n1>n2 ? 1 : -1;
});
console.log(array);

//array.reverse();
//console.log(array);
console.log(`-----------------------------------------------------------`);
let arrayNew = [2, 40, 19, 79, 8, 9];
console.log(arrayNew);
console.log(`custom sorting on array numbers in descending order`);
array.sort((n1, n2)=>{
    return n1>n2 ? -1 : 1;
});
console.log(arrayNew);