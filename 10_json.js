

//JSON.parse(): convert json to object
//JSON.stringfy():  convert an object to JSON

let person = {
    name: "Rupali",
    city: "Pune",
    experience: 10,
    isMarried: false,
    skills:["HTML","CSS","JavaScript"],
    address:{
        street: "Wakad",
        city:"Pune"

    }
}
console.log(person.skills[0]);
console.log(`Type of person is before :${typeof person} `);
const result = JSON.stringify(person);
console.log(`Type of person is after :${typeof result} `);
console.log(result);

const personJSON = `
{
    "name": "Gajanan",
    "city": "Pune",
    "experience": 10,
    "isMarried": true,
    "skills": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "address": {
      "street": "Wakad",
      "city": "Pune"
    }
  }
`;


console.log(`=========== Convert JSON to object ============`);
const personObject = JSON.parse(personJSON);
console.log(typeof personObject);
console.log(personObject);
 
