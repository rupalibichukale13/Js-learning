


let person = {
    name: "Rupali",
    city: "Pune",
    experience: 10
}
console.log(person);
console.table(person);

console.log(`The type of person is:${typeof person}`);


console.log(`============ Accessing the object properties=========`);

let personCity = person["city"];  //[] notation
console.log(`Person city is: ${personCity}`);

const personExp = person.experience;
console.log(`Person Experience is: ${personExp}`);


console.log(`============ Add properties in object ==========`);
person.isMarried = true;
console.log(person);

console.log(`============ Delete properties from an object ==========`);
delete person.experience;
console.log(person);



console.log(`============ Creating an empty object ==========`);
let address = {

}
address.pin = 413307;
console.log(address);

console.log(`=========== Creating method or function inside an object ============`);

const  bankSbi = {
    name: "SBI bank Wakad",
    city: "Pune",
    totalStaff: 90,
    homeLoanROI: 9.5,
   bankDetail: function(){
    console.log(`Bank Details`);
    console.log(`Name: ${this.name}, City: ${this.city}, totalStaff: ${this.totalStaff}, homeLoanROI: ${this.homeLoanROI}`);
   },
  //amountToPay: function(amount){
    //return amount * 9.5;

   }


bankSbi.bankDetail()
//const amountPayable = person.amountToPay(50000);
  

console.log(`======== Nested Object============`);
const jennyPerson = {
    name: "Jenny",
    age: 25,
    country: "USA",
    address: {
        flatNo: 102,
        floorNumber: 3,
        street: "Bergen road",
        city: "LA",
        state: "ABC",
        getAddress: function(){
            const address =  `Flat Number: ${this.flatNo}, Floor Number: ${this.floorNumber}, Street: ${this.street}, City: ${this.city}, State: ${this.state}`;
            return address;
        }
    }
}
console.log(`Type of jennyPerson : ${typeof jennyPerson}`);
console.log(`Type of address : ${typeof address}`);

console.log(`City: ${jennyPerson.address.city}`);
jennyPerson.address.state = "XYZ";

console.log(`===== Jenny complete address to courier is======`);
const jennyAddress = jennyPerson.address.getAddress();
console.log(jennyAddress);