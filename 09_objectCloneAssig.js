

const bankSbi = {
    name: "Bank Of India",
    city: "Solapur",
    branch: "Sangola",
    establishment: "1906",


}
console.log(`=============== Object 1 ================`);
console.log(bankSbi);

const bankLocation = {
    street: "Vijapur Road",
    city: "Sangali",
    pin: "413307",

}
console.log(`=============== Object 2 ================`);
console.log(bankLocation);

console.log(`========== Cloning an 2 Object using Object.assign()=========`);
//console.log(`======== Cloning Of object 1 =========`);
const cloneObjet1 = Object.assign({}, bankSbi);
console.log(`Cloning Of object 1:` ,cloneObjet1); 

//console.log(`======== Cloning Of object 2 =========`);
const cloneObjet2 = Object.assign({}, bankLocation);
console.log( ` Cloning Of object 2:` ,cloneObjet2); 

console.log(`============= Object 3 ==========`);
 const rateOfInterest = {
    homeLoanInterest: "8.30%",
    personalLoanInterest: "10.75%",
    duelInterest: "7.25%",
}
console.log(rateOfInterest);

console.log(`============ Merging 3 Objects ==========`);
const sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest);
console.table(sbiDetails);

console.log(`=============== Traverse the Merged Objects =============`);
const mergedObject = sbiDetails
for (const key in sbiDetails) {
    console.log(`${key} : ${sbiDetails[key]}`);
     
 }
 


