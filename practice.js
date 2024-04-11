

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


