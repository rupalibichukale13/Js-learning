

// Grade Calculation
// Pass or Fail  ==> marks <= 34  fail....else pass
// Marks  >= 35 and < 55 == Grade C
// Marks >= 55 and <= 75 ==> Grade B
//Marks >= 75 and <= 100 ==> Grade A
var marks = 109;
if (marks<35) {
   console.log(`Failed . Marks: ${marks}`);
} else {
      console.log(`congratulation. Passed ${marks}`);
      if (marks >=35 && marks <55) {
        console.log(`congratulation .Marks ${marks} Grade: C`);
      } else {
       if (marks>=55 && marks<75) {
        console.log(`congratulation .Marks ${marks} Grade:B `);
        
       } else {
        if (marks>=75 && marks<100) {
            console.log(`congratulation .Marks ${marks} Grade:A `);
     
        } else {
           console.log(`Invalid Marks percentage`); 
        }
       } 
      }
} 
