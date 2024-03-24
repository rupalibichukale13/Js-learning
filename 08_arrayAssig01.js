


fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`=========== Original Array ============`);
console.log(fruits_seasonal);


console.log(`============== STEP 1 =================`);
console.log(`${fruits_seasonal.length-1}`);

console.log(`============== STEP 2 =================`);
fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal);
fruits_seasonal.unshift("Papaya");
console.log(fruits_seasonal);

console.log(`============== STEP 3 =================`);
fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal);
const removeElements = fruits_seasonal.splice(3,1, "Mango");
console.log(removeElements);
console.log(fruits_seasonal);


console.log(`================= STEP 4 ================`);
fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal);
fruits_seasonal.push("Pineapple");
console.log(fruits_seasonal);

console.log(`================= STEP 5 ================`);
fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal);
fruits_seasonal.splice(4,0,"Dragon Fruit");
 console.log(fruits_seasonal);

 console.log(`================= STEP 6 ================`);
fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal);
fruits_seasonal[1] = "Kiwi"
console.log(fruits_seasonal);

console.log(`================= STEP 7 ================`);
fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal);
const subArray = fruits_seasonal.slice(1,5);
console.log(subArray);
    

console.log(`================= STEP 8 ================`);
fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal);
const len =fruits_seasonal.length;
const sliceLog = fruits_seasonal.slice(len-3);
console.log(sliceLog);





