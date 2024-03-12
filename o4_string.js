var greet = "Good Morning";
var totalChars = greet.length;
console.log("Total number of chars is:" , totalChars);

var charAt0 = greet.charAt(0);
console.log("Character at index 0 is: ", charAt0);

var charAt6 = greet.charAt(6);
console.log("Character at index 6 is: ", charAt6);

var charAt11 = greet.charAt(11);
console.log("Character at index 11 is: ", charAt11);

var sentence = "When you join meetings, webinars, chats or channels hosted on Zoom, your profile information";
var totalChars = sentence.length;
var lastChar = sentence.charAt(totalChars-1);
console.log("Last char is:" , lastChar);

var greet = "Good Morning";
var indexOfM = greet.indexOf('M');
console.log ("Index  of char M is:", indexOfM);


console.log("========concat ==========");

console.log("========Replace==========");
var greet = "Good Morning";
 const afterReplace = greet.replace("Morning","Afternoon");
 console.log(`After replace string is: ${afterReplace}` );

 console.log(`========== toUpperCase ==========`);
 var greet = "Good Morning";
 var  greetInUpperCase =  greet.toUpperCase();
 console.log(`${greet} in upper case is: ${greetInUpperCase}`);

 console.log(`========== trim ==========`);
 var greet = "   Good Morning    ";
 console.log(`${greet} its length is: ${greet.length}`);
 var length = greet.length;
 console.log(`${greet} its length is: ${length}`);
 


 console.log(`=========== includes ==========`);
 var greet = "Good Morning";
 var greetIncludes = greet.includes();
 console.log(`${greet} includes is: ${greetIncludes}`);

 console.log(`========== Slice Method ==========`);
 var greet = "Good Morning";
 var greetSlice = greet.slice();
 console.log(greet.slice(0,5));


