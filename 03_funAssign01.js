console.log("========= STEP 1 ========");

function show(){
    console.log("Codemind Technology Pune")
}
show();

function display() {
    console.log("Web Development");
  
}
display();
console.log("_______________________________________");

console.log("======== STEP 2 ========");

function personalDetails (firstName ,lastName, collegeName){
    console.log("My First Name is:" , firstName );
    console.log("My Last Name is:" , lastName );
    console.log("My College Name is:" , collegeName);
}
personalDetails("Rupali" ,"Bichukale", "Fabtech Technical Campus,Sangola");

console.log("_______________________________________");

console.log("======= STEP 3 =======");

console.log("======= Before Swap =======");
function swapValues ( Virat, Anushka){
   console.log ("Virat:",Virat, "Anushka:", Anushka);
}
swapValues("Virat","Anushka");

console.log("======= After Swap =======");
function swapValues( Virat , Anushka){
    var temp = Virat;
    Virat = Anushka;
    Anushka = temp;
    console.log("Virat:",Virat,"Anushka:",Anushka);  
}
swapValues( "Anushka", "Virat");

console.log("_________________________________________");
console.log("======== Before Swap =======");
function swapValues (num1, num2){
   console.log("num1:",num1 , "num2:",num2);
}
swapValues( 2000, 1000);
console.log("======= After Swap =======");
function swapValues(num1,num2){
    var temp = num1;
    num1 = num2;
    num2 = temp;
   console.log("num1:", num1,"num2:",num2);
}
swapValues(1000,2000)

console.log("________________________________________");

console.log("======= STEP 4 =======");
 function addThreeValues(n1 ,n2, n3){
    console.log ("Arguments is:",n1,n2,n3);
    var result = n1+n2+n3;
    console.log("Addition is:", result);
 }
 addThreeValues(10.23, 600,40);
 addThreeValues("Hello" , "Good", "Morning");