

var pincode = 413306;
console.log(pincode);
pincode = 413307;  // update / overide
console.log(pincode);

var pincode = 1234; // redeclaration
console.log(pincode);

var city = "Pune";
var typeOfCity = typeof city;
console.log(`type of city:${typeOfCity}`);

var typeOfName = typeof name;
console.log(typeOfName);

var pin = null;
var typeOfPin = typeof pin;
console.log(typeOfPin);


var name = "Rupali";
var city = "Pune";
console.log(`My Name is:${name} `);
console.log(`My City is:${city}`);

//Swapping
var n1 = 100;
var n2 = 200;
console.log("n1:", n1 , "n2:", n2);
var  temp = n1; 
n1 = n2;
n2 = temp;
console.log("n1:", n1 , "n2:", n2);

function multiply(num1 , num2){
    var result = num1 * num2;
    console.log(`Multiply is:${result}`);
}
multiply(10,20);


function show(){
    console.log(`My Name is Rupali.........`);
}
show()


function addition (num1, num2){
    var add = num1 + num2;
    console.log(`addition is:${add}`);
}
addition(12,8)
addition(77.23 , 102568);
addition(23);
addition(2,3,4);

function add (n1 ,n2 ,n3){
    var result = n1 + n2 + n3;
    return result;
}
var value = add (2,3,5)
console.log(value);

var n1 = 20;
var n2 = 12;
var result = n1 % n2;
console.log(result);


var string = "My name is rupali bichukale";
var totalChars = string . length;
console.log("Total characters of given string is: ", totalChars);

var n1 = 10;
var result = ++n1;
console.log(result);


var n1 = 10;
var result = n1++;
console.log(result);

var n1 = 12;
var result = --n1;
console.log(result);


var n1 = 12;
var result = n1--;
console.log(result);

var n1 = 5;
var result = ++n1 + n1++ + +n1;
console.log(result);

var a =24;
var result = a%2 == 0? "Even":"ODD";
console.log(result);


var b = 13;
var result = b%2 ==0 ? "Even":"ODD"
console.log(result);

var value = 100+10;
console.log(value);

var a =+ 10;
console.log(a);


var n1 = 10;
var n2 = "15";
console.log(typeof n1);
console.log(typeof n2);
console.log(`Equal to operator:${n1==n2}`);
console.log(` strict Equal to operator:${n1===n2}`);
console.log(`Greater to operator:${n1>n2}`);
console.log(` greater than Equal to operator:${n1>=n2}`);
console.log(`less to operator:${n1<n2}`);
console.log(` less than Equal to operator:${n1<=n2}`);
console.log(` not Equal to operator:${n1!=n2}`); 


var result = function(word){
    var result = word.length%2==0? "Even":"ODD";
    console.log(`Given string of ${word} with ${result}`);

}
result("I am javascript developer");
result("I am hero");

