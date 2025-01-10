let score="33abc"
console.log(typeof score) // give string as an output
console.log(typeof(score))// give string as an output

let valueInNumber= Number(score)
console.log(typeof valueInNumber) // will give number as an output
console.log(valueInNumber) // will give NaN as an output

let m=null // will give 0 as an output
console.log(typeof m)
let n=undefined // will give NaN as an output
console.log(typeof n)

let v=true // will give 1 as an output
console.log(typeof v)

// let c="abhishek" so this can't be convert it into a number so it will give NaN as an output

// 1 =>true;
// 0 =>false;
//""=>false;
// "abhishek" => true

let num=7
let stringNumber=String(num)
console.log(typeof stringNumber)
console.log(stringNumber)