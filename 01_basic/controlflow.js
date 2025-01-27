// if
const isLoggedIn=true;

if(2!=3){
    console.log("executed");
}
// <,>,<=,>=,!=,===,!==
const score=200;
if(score>100){
    let power="fly";
    console.log(`user power: ${power}`);
}


// switch statement ==========================
const month=3;
switch(month){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("March");
        break;
    default:
        console.log("default");
        break;    
            

        
}

// falsy values  
/* false ,0,-0,BigInt 0n,"",null,undefined,NaN*/

// truthy values  
/* "0",'false'," ",[],{},function(){}*/
const userEmail=[];
if(userEmail.length==0){
    console.log("Array is empty");
}
const user={};
if(Object.keys(user).length===0){
    console.log("object is empty");
}
// Nullish Coalescing  Operator(??):null undefined
let var1;
// var1 =5??10
/* 
var1=null??15;*/
var1=null??10??20 // will assign the first value of the given value;
console.log(var1);

// Terniary Operator
// condition ? true : false
const iceTeaPrice =100
iceTeaPrice <=80? console.log("less than 80") : console.log("more than 80");