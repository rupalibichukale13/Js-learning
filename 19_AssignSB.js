
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
const emp_radha = new Employee(22, "Radha", "HR" , 74000, "Wipro");
const emp_rishi = new Employee(22, "Rishi", "Finance" , 47000, "TCS");
const emp_sonali = new Employee(22, "Sonali", "Finance" , 45000, "Infy");
const emp_monika = new Employee(22, "Monika", "IT" , 40000, "Wipro");
const emp_viny = new Employee(22, "Vinayak", "IT" , 75000, "TCS");
const emp_mahi = new Employee(22, "Mahi", "HR" , 85000, "Infy");

const arrayEmployee = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log(`===== WAP to all the employees working in "TCS" ======`);
arrayEmployee.forEach(employee => {
    if (employee.emp_company=="TCS") {
        
        console.log(`Employee Name: ${employee.emp_name}  Company Name: ${employee.emp_company}`);
    }
});

console.log(`===== WAP to "Finance" department employees ======`);
arrayEmployee.forEach(employee => {
    if (employee.emp_dept=="Finance") {
        
        console.log(`Employee Name: ${employee.emp_name}  Department Name: ${employee.emp_dept}`);
    }
});

console.log(`===== WAP to employees whose name starts with "R" ======`);
arrayEmployee.forEach(employee => {
    if (employee.emp_name.startsWith('R')) {
        console.log(`Name of the Employees Whose name start with "R":${employee.emp_name}`);
        employee.detail();
    }
});


console.log(`===== WAP to employees whose salary is greater than 75000 ======`);
arrayEmployee.forEach(employee =>{
    if (employee.emp_salary >75000) {
        
        console.log(`Employee Name: ${employee.emp_name}  Company Name: ${employee.emp_company}  Salary: ${employee.emp_salary}`);
    }
});


console.log(`===== WAP to  employees whose salary >= 50000 and from "IT" dept ======`);
arrayEmployee.forEach(employee => {
    if (employee.emp_salary>=50000 && employee.emp_dept=="IT") {
        
        console.log(`Employee Name: ${employee.emp_name}  Salary: ${employee.emp_salary} Department Name: ${employee.emp_dept}`);
        employee.detail();
    } 
})

console.log(`===== WAP to all the employees from company "Infy" ======`);
arrayEmployee.forEach(employee => {
    if (employee.emp_company=="Infy") {
        
        console.log(`Employee Name: ${employee.emp_name}  Company Name: ${employee.emp_company}`);
        employee.detail();
    }
});






