

class Student {
    rollNumber
    name
    division

    constructor(rollNumber, name, division){
        this.rollNumber = rollNumber;
        this.name = name;
        this.division  = division;
    }
    getDetail(){
        console.log(`Student Details ==> Roll Number:${this.rollNumber}, Name:${this.name}, Division:${this.division}`);
    }
       
}
const rupali = new Student(2 , "Rupali", "A");
//console.log(jenny);
rupali.getDetail();
const sakshi = new Student(3, "Sakshi" , "B");
//console.log(bill);
sakshi.getDetail();
const snehal = new Student(4 , "Snehal" , "C");
//console.log(elon);
snehal.getDetail();