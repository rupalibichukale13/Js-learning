

let person = `{
    "name": "Aleix Melon",
    "id": "E00245",
    "role": ["Dev", "DBA"],
    "age": 23,
    "doj": "11-12-2019",
    "married": false,
    "address": {
        "street":"32,Laham St.",
        "city": "Innsbruck",
     "country": "Austria"},
    "referred-by": "E0012" 
}`
console.log(`JSON Person is:${person}`);
console.log(`============ Converting  JSON to Object ===============`);
const personObject = JSON.parse(person);
console.table(personObject)
console.log(`================== console log ----> "DEV" ================`);
const role = (`Role:${personObject.role[0]}`);
console.log(role);
console.log(`================= Last name ---> "Melon" ===============`);
const melon = personObject.name.split(" ");
console.log(`Last Name:${melon[1]}`);
console.log(`================ Joining year og employee ==============`);
const year = personObject.doj.split("-");
console.log(`Joining Year of Employee:${year[2]}`);

