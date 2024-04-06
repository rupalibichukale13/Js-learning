

let show = function(){
      console.log(`function expression.........`);
}
setTimeout(show,3000);

setTimeout(function(){
console.log(`Hello`);
setTimeout(function(){
    console.log(`Good Morning`);
    setTimeout(function(){
        console.log(`How are you?`);

    }, 3000); 
}, 2000)

}, 1000);
