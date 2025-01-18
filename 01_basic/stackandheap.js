//stack(primitive) and heap(non-primitive)
// stack ke ander copy ka reference hota h and heap ke ander original value ka reference milta h.

let name="abhishek";
let anotherName=name;
anotherName="kumar";
console.log(name);
console.log(anotherName);

let userOne={
    email:"abhishek9097indian@gmail.com",
    upi:"paytm@6205562141"
}
let userTwo=userOne
userTwo.email="abhishek1167.be22@chitkara.edu.in";
console.log(userOne.email);
console.log(userTwo.email);