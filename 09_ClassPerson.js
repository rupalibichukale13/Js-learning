

class Person {
    //name
    //city
    //age
    constructor(myName, myCity, myAge){
        this.name = myName;
        this.city = myCity;
        this.age  = myAge;

    }
    detail(){
        console.log(`Person Details ==> Name:${this.name}, City:${this.city}, Age:${this.age}`);
    }
}

const jenny = new Person("Jenny","Pune",22);
//console.log(jenny);
jenny.detail();
const bill = new Person("Bill", "Mumbai", 24);
//console.log(bill);
bill.detail();
const elon = new Person("Elon","Solapur", 26);
//console.log(elon);
elon.detail();

console.log(`=========== Traversing Array objects ===============`);
const array = [jenny ,bill,elon];
for ( const element of array){
       element.detail();
}

