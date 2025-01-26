//Immediately invoked function expression IIFE
(function chai(){
    // named iife
    console.log(`DB CONNECTED`);
})(); // here ; this mandatory to do if we want to start the next iife function if we don't do so then function will not end and next function will give error..
((name)=>{
    // not a named iife
    console.log(`DB connected two ${name}`);
}) ("abhishek");