const arr=new Array(1,2,3,4,5);
const num=new Array(6,7,8,9,10);
num.push(arr);
console.log(num);

const a=new Array(1,2,3,4);
const b=new Array(5,6,7);
b.concat(a);
console.log(b);

// use of spreat methods===========================
const c=new Array(8,9,10);
const d=new Array(6,7,0);
const spread=[...c,...d];
console.log(spread);

const ar=[1,2,3,[4,5],[6,[7,8]]];
const ar2=ar.flat(Infinity);
console.log(ar2);

console.log(Array.isArray("abhishek"));
// converting "abhishek" into a array
console.log(Array.from("abhishek"));
console.log(Array.from ({name:"abhishek"})) //interesting give []

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));