

console.log(`========== charAt() ============`);
var txt = "Hello World";
console.log(txt.charAt(0));

console.log(`=========== concat() =============`);
var str1 = "Hello ";
var str2 = "codingtute!";
console.log(str1.concat(str2));

console.log(`=========== indexOf() =============`);
var txt = "Lets find where 'pen' occurs!";
console.log(txt.indexOf("pen"));

console.log(`=========== lastIndexOf() =============`);
var str = "A dev knows a dev";
console.log(str.lastIndexOf("dev"));

console.log(`=========== replace() =============`);
var str = "Hello dev!";
console.log(str.replace("dev","World"));

console.log(`=========== toUpperCase() =============`);
var sentence = "CodingTute";
console.log(sentence.toLocaleUpperCase());

//console.log(`=========== valueOf() =============`);
const s = new String (`test`);
typeof s;   //object
s.valueOf();  //test
typeof s.valueOf();  //string

console.log(`=========== trim() =============`);
var str = "   Trim Both Side   ";
console.log(str.trim());

console.log(`=========== toString() =============`);
var num = 15;
console.log(num.toString());

console.log(`=========== includes() =============`);
var str = "My name is CodingTute.";
console.log(str.includes("name"));

console.log(`=========== search() =============`);
var str = "hello dev!";
console.log(str.search("dev"));

console.log(`=========== slice(start,end) =============`);
var str = "Developers world!";
console.log(str.slice(0,10));

console.log(`=========== substr(start,length) =============`);
var str = "JavaScript";
console.log(str.substr(4,6));

console.log(`=========== substring(start,end) =============`);
var str = "Hello dev!";
console.log(str.substring(1,4));

console.log(`=========== charCodeAt() =============`);
var str = "TEST";
console.log(str.charCodeAt(0));

console.log(`=========== match() =============`);
var str = "lopersum lopersum lopersum lopersum. ";
console.log(str.match(/sum/g));

console.log(`=========== split() =============`);
var str = "1, 2, 3, 4, 5";
console.log(str.split(","));

console.log(`=========== toLowerCase() =============`);
var sentence = "CodingTute";
console.log(sentence.toLowerCase());
