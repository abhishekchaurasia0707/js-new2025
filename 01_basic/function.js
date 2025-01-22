function loginUserMessage(username){ // we can pass default value just like username="sam" to avoid undefined case
    if(!username){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())


// rest operator in function =============================
function calculate(...num1){
    return num1;
}
console.log(calculate(100,300,400));


// one more things to do with it
function cal(val1,val2,...num2){
    return num2;
}
console.log(cal(200,300,400,500,600));

const user={
    username:"abhishek",
    price:999,
}
function handle(anyuser){
    console.log(`username is ${anyuser.username} and the price is ${anyuser.price}` )
}
handle(user);
// we can pass the direct object as well
/* 
handle({
username:"abhishek",
price:399
})

*/
const newArray=[200,300,400,500];
function returnsecond(getArray){
    return getArray[2];
}
console.log(returnsecond(newArray));