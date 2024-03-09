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


var sweet = "Sweet";
var cute = "Cute";
console.log("=====before Swap=====");
console.log("sweet:",sweet, "cute:",cute);
var temp = sweet;
sweet = cute;
cute = temp;

console.log("=====after Swap======");
console.log("sweet:",sweet, "cute:",cute);


var cityOne = "Pune";
var cityTwo = "Mumbai";
var temp = cityOne;
cityOne = cityTwo;
cityTwo = temp;
console.log();

function swap( oneArg , twoArg){
    console.log("=====before Swap=====");
    var temp = oneArg;
    cityOne = twoArg;
    cityTwo = temp;
    console.log("=====after Swap=====");
    console.log(oneArg ,twoArg);
}
var cityOne = "Pune";
var cityTwo = "Mumbai";
swap(cityOne , cityTwo);

var sweet = "Sweet";
var cute = "Cute";
swap(sweet, cute);

function multiply(num1, num2){       //function body
    var result = num1 * num2;
    console.log("Multiplication result is:", result);

}
multiply(5, 7);  //Invocation or call

multiply (5.9 , 99);  //Invocation or call

multiply(455, 888);    //Invocation or call