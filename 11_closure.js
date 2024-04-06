var global = 300;
function outer(){
    let num2 = 200;
    let inner = function(){
        let num1 = 100;
        console.log(`Inner Function Expression`);
        console.log(`Num1:${num1}`);
        console.log(`Num2:${num2}`);
        console.log(`global:${global}`);

    }
    return inner;
}
outer()();
//let result = outer();
//result();