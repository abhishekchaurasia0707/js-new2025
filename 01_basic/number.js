const score=400
console.log(score);

const balance=new Number(100);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(1));//to fix the value of decimal till 1 position
const otherName=123.8966
console.log(otherName.toPrecision(4));

const hundreds=100000;
console.log(hundreds.toLocaleString()); // convert the number into USA string separated by commas...
console.log(hundreds.toLocaleString('en-IN')) // convert the number into Indian value string separated by commas...

// +++++++++++++++++++++++++++++++++  MATHS========================================
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.2));
console.log(Math.ceil(4.2)) // always pick the higher value eg 4.2 will give 5.
console.log(Math.floor(4.2)) // always pick the lower value eg 4.9 will give 4.
console.log(Math.min(4,3,5,6,2,8));
console.log(Math.max(4,5,6,8,9));

console.log(Math.random())//always give random value between 0 and 1.
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min +1))+min);