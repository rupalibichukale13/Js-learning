
console.log(`=============================== Step 1 ======================================`);
class Vehicle{
    name
    model
    engineType
    color
    fuelType
    
constructor(name, model, engineType,color,fuelType){
    this.name = name;
    this.model = model;
    this.engineType = engineType;
    this.color = color;
    this.fuelType = fuelType

}
detail(){
    console.log(`Vehicle Details ==> Name:${this.name} , Model:${this.model} , EngineType:${this.engineType} , Color:${this.color} , Fuel Type:${this.fuelType} `);
}

}
const car = new Vehicle("BMW", "BMW M4","V8 engine", "Black","Petrol") ;
car.detail();

const mahindra = new Vehicle("Mahindra Thar" ,"SUV", "BS6 2 engine" , "Red", "Disel");
mahindra.detail();

const aircraft = new Vehicle("AirPlane" ,"Boeing 777x", "Turbofans","White","Jet Fuel" );
aircraft.detail();

const coupe = new Vehicle("Coupe", "Porsche 911", "Petrol Engine","Red", "Petrol");
coupe.detail();

const bus = new Vehicle("Bus" , "Volvo", "Disel Engines","Orange","Disel");
bus.detail();

console.log(`=============== Create an array and Treversing array ================`);
const arrayOfVehicles = [car,mahindra,aircraft,coupe,bus ];
for ( const element of arrayOfVehicles){
       element.detail();
}

console.log(`==================================== STEP 2 ==================================`);
 class College {
    name
    city
    grade
    departments
    constructor(name,city,grade,departments){
        this.name = name;
        this.city = city;
        this.grade = grade;
        this.departments = departments;
    }
    display(){
        console.log(` College Details ==> Name:${this.name} , City:${this.city} , Grade:${this.grade} , Departments:${this.departments}`);

    }
 }
 const ftc = new College("FTC","Sangola","A", 10);
 ftc.display();
 const sveri = new College("Sveri","Pandharpur","A+",15);
 sveri.display();
 const kit = new College("KIT","Kolhapur", "A+" , 12);
 kit.display();
 const coep = new College("COEP","Pune","A++",20);
 coep.display();






