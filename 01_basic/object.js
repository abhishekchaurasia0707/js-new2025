// singleton 

// object literals
//================================ways to create the objects in javascript=============================
// object.create   isi ke ander singleton banta h

const mySym=Symbol("mykey1");

const Jsuser={
    name:"abhishek",
    age:21,
    [mySym]:"mykey1", // correct way to declare the symbol
    email:"abhishek1167.be22@chitkara.edu.in",
    city:"chandigarh",
    isLoggedIn:true,
    lastloggedIn:["Monday","Tuesday"],


}
console.log(Jsuser.email);
console.log(Jsuser["email"]); // treat it as a string to get output otherwise error will be given 
console.log(Jsuser["age"]);
console.log(Jsuser[mySym]);
Jsuser.email="abhishek9097indian@gmail.com";
//Object.freeze(Jsuser) // even do we want to change the value after that things we can't change it 
Jsuser.email="abhishek1167.be22@chitkara.edu.in";
console.log(Jsuser);

Jsuser.greeting =function(){
    console.log("Hello js user");
}
Jsuser.greetingTwo=function(){
    console.log(`Hello js user ${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());