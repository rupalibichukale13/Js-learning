console.log("WAP to swap variable values using third variable")


var n1 = 100;
var n2 = 200;
console.log("==========Before Swap ============");
console.log("n1:", n1,"n2:" , n2);

console.log("========== After Swap ============");
var temp = n1;  //num1 
n1 = n2;   //num1=num2  
n2 = temp;
console.log("n1:", n1,"n2:" , n2);


console.log("=======Variable Re-Declaration=========");
var pinCode = "413307";
console.log(pinCode);
pincode = "112233";  //variable update or override

var pinCode= " 445533"; //variable re-declaration
