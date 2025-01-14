//Primitive
// 7 types:String,Number,Boolean,null,undefined,Symbol,BigInt


const id=Symbol('123')
const anotherId=Symbol('123')
// although the value of the above is same but these two are different
console.log(id==anotherId);
const bigNumber=1233456958585848n;

//Reference (Non Primitive)
//Array,Objects,Functions

// arrays declaration in javascript
const heros= ["batman","superman","aquaman"];
// object declaration 
let myObj={
    name:"abhishek",
    age:22,
}
const myFunction=function(){
    console.log("hello duniya");
}

]