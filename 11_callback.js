

//Jenny : Solve the homework by own
function jennyHomework(callbacks){
    console.log(`Jenny Started homework.......`);
    console.log(`Jenny took sometime let's consider 2 hours........`);
    console.log(`Finally Jenny Completed homework.......`);
    callbacks();
}
//Elon: Copy homework from jenny
let elonCopyHomework = function(){
console.log(`Playing Cricket`);
console.log(`Copying homework.....`);
console.log(`After 10 mins, Elon coped all homework`);
}

jennyHomework(elonCopyHomework);