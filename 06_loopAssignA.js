

console.log(`========== STEP 1 ============`);
const string = "I am very good IT Developer";
const vowels = "aeiou";
let vowelCount = 0;
for (let index = 0; index < string.length; index++) {
    let char = string.charAt(index);
    let lowercase = char.toLowerCase();
    if (vowels.includes(lowercase)) {
        vowelCount++;
        
    }
    
}
console.log(`Total number of vowels in given string are:${vowelCount++}`);

console.log(`=========== STEP 2 ===========`);
let sum = 0;
for (let index = 0; index <= 5; index++) {
   sum = sum+ index * index * index;
    
}
console.log(`Sum of cube of numbers  from 1 to 5 is:${sum}`);

console.log (`=========== STEP 3 ============`);
function oddPositionedChars (word){
 for (let index = 0; index <word.length; index++) {
        const element = word.charAt(index);
        if (index%2!=0 && element != "") {
            console.log(element);
            
          
        }
        
    }
}
console.log(`ODD Positioned Chars of string1`);
oddPositionedChars("Hard Work always pays back");
console.log(`ODD Positioned Chars of string2 `)
oddPositionedChars("Soon I will be UI IT Champ");