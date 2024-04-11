
class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;

    }
    detail(){
        console.log(`Employee Details => Emp_id: ${this.emp_id}, Emp_name: ${this.emp_name}, Emp_Dept: ${this.emp_dept}, Emp_Salary:${this.emp_salary}, Emp_Company:${this.emp_company}`);
}
}
const emp_anil = new Employee(22, "Anil", "IT" , 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR" , 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance" , 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance" , 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT" , 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT" , 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR" , 85000, "Infy");

const arrayEmps = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log(`-------------------------- STEP 1 --------------------------`);

console.log(`============ All the employees from "Wipro" Company ===============`);
const employees =arrayEmps.filter( (currentValue)=>{
    return currentValue.emp_company=="Wipro";

} );
employees.forEach( (element)=>{
    element.detail();
} );
console.log(`-------------------------- STEP 2 --------------------------`);

console.log(`============ All the employees from "IT"  or "HR" dept ===============`);
const empDept =arrayEmps.filter( (currentValue)=>{
    return currentValue.emp_dept=="IT" || currentValue.emp_dept== "HR";

} );
empDept.forEach( (element)=>{
    element.detail();
} );
console.log(`-------------------------- STEP 3 --------------------------`);

console.log(`====== Find out all the employees whose emp id's are greater than 50 ======`);
 const empId = arrayEmps.filter( (currentValue)=>{
    return currentValue.emp_id>50;
} );
empId.forEach((element)=>{
    element.detail();
})



console.log(`-------------------------- STEP 4 --------------------------`);

console.log(`===== Find out all the employees whose names start with letter 'A' or 'V' or 'M' =====`);
const empName =arrayEmps.filter( (currentValue)=>{
    return currentValue.emp_name.startsWith('A') ||  currentValue.emp_name.startsWith('V') ||  currentValue.emp_name.startsWith('M');

} );
empName.forEach( (element)=>{
    element.detail();
} );
console.log(`-------------------------- STEP 5 --------------------------`);

console.log(`======= Find out average salary of the employee for all the Department ========`);
const avgSalary = arrayEmps.filter((emp)=>{
    return emp.emp_dept=="IT", "HR", "Finance";
});

const sumSalary = avgSalary.reduce( (runningTotal, currentValue)=>{
    return runningTotal+currentValue.emp_salary;
},0);
console.log( `Sum of salary of the employees for all department is:${sumSalary}`);
console.log(`Average Salary of the employees for all department is: ${sumSalary/avgSalary.length}`);
//console.log(`Average salary from IT department is: ${sumSalary/avgSalary.length}`);

console.log(`-------------------------- STEP 6 --------------------------`);

console.log(`============ Find out average salary  for  the "IT" Department ==============`);
const avgSalaryOfIT = arrayEmps.filter((emp)=>{
    return emp.emp_dept=="IT";;
});

const sumSalaryOfIT = avgSalaryOfIT.reduce( (runningTotal, currentValue)=>{
    return runningTotal+currentValue.emp_salary;
},0);
console.log(`Sum of salary for IT department is:${sumSalaryOfIT}`);
console.log(`Average salary for IT department is: ${sumSalaryOfIT/avgSalaryOfIT.length}`);








