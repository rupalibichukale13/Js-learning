


console.log("=============== Addition + Operator=================");
var n1 = 10;
var n2 = 20;
var result = n1+ n2 ; 
console.log(`Addition is:${result}`);


console.log("=============== Substraction - Operator =============");
var n1 = 30;
var n2 = 20;
var result = n1 - n2 ; 
console.log(`Substraction is:${result}`);


console.log("=============== Multiplication * Operator =============");
var n1 = 5;
var n2 = 6;
var result = n1 * n2 ; 
console.log(`Multiplication is:${result}`);


console.log("=============== Exponential ** Operator =============");
var n1 = 5;
var n2 = 3;
var result = n1 ** n2 ; 
console.log(`Exponential is:${result}`);


console.log("=============== Modulus % Operator =============");
var n1 = 10;
var n2 = 6;
var result = n1 % n2 ; 
console.log(`Modulus is:${result}`);


console.log("=============== Division / Operator =============");
var n1 = 10;
var n2 = 2;
var result = n1 / n2 ; 
console.log(`Division is:${result}`);

console.log("============ Increamental Operato r===========");
var n1 = 10;
var result = ++ n1;  // n1 =  n1+1 //Prefix
console.log(`Result of "Prefix" is:${result}`);
var n2 = 10;
var result = n2++ ;  //postfix  n2 = n2+1
console.log(`Result of "Postfix" is:${result}`);


console.log("============ Decreamental Operator ===========");
var n1 = 10;
var result = -- n1;  //n1 =  n1-1
console.log(`Result of "Prefix" is:${result}`);

var n2 = 10;
var result =  n2 --;  //n2 =  n2-1
console.log(`Result of "Postfix" is:${result}`);


var a = 5;
var b = a++
console.log(`value of a is:${a} `);
console.log(`value of b is:${b} `);

var n1 = 5;
var res = n1++ + ++n1 + n1++;
console.log(`value of n is:${res} `);

var a = 2;
var b = ++a + ++a + a++ - --a;
console.log(`value of a is:${a} `);
console.log(`value of b is:${b} `);

var a = 4;
var b= a-- + ++a + ++a + a++;
console.log(`value of a is:${a} `);
console.log(`value of b is:${b} `);

console.log("==========Ternary Operator=========");
var a = 7;
var res = a%2==0 ? "EVEN":"ODD";
console.log(`value of a is:${res} `);

var a = 8;
var res = a%2==0 ? "EVEN":"ODD";
console.log(`value of a is:${res} `);