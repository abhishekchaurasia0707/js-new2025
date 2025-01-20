const newArr=new Array(1,2,3,4,5);
newArr.push(6);
newArr.pop();
newArr.unshift(10)//add element at the starting of the array
newArr.shift() // remove the element from the starting
console.log(newArr);

const meArr=newArr.join()//convert array into a string
console.log(typeof meArr);

//+++++++++++++++++++++++++++++++++++++[slice,and splice]

const myArr=new Array(1,2,3,4,5);
const myslice=myArr.slice(1,3);
console.log(myslice); // will give 2,3 as an output and not change the original array

const nyArr=myArr.splice(1,3) 
console.log(meArr);
console.log(nyArr) // will give 2,3,4 as an output and also change the original array as 2,3,4
