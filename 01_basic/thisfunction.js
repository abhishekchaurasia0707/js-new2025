const user={
    username:"abhishek",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}
user.welcomeMessage();
user.username="Kumar";
user.welcomeMessage();

// this arrow function in javascript==============================
/*const chai=function(){
    let username="hitesh"
    console.log(this.username);
}*/
//chai();

const chai=()=>{
    let username="abhishek"
    console.log(this.username);
}
chai();
const addTwo=(num1,num2)=> {
    return num1+num2;
}
// implicite return type where we assume that the return type is of one line
const adtwo=(n1,n2)=>(n1+n2); 
console.log(addTwo(3,6));
console.log(adtwo(2,4));
// how to return the value as an object of the arrow function
const ad=(m1,m2)=>({username:"abhishek"});
console.log(ad(4,5));
