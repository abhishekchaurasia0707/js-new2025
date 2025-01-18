const name="abhishek"
const repo=100;
console.log(`Hey my name is ${name} and my repocount is ${repo}`) // we use backticks ``.....

//another ways to declare string in javascript=======================
const gameName=new String("abhishek-raj");
console.log(gameName);
console.log(gameName.length);
console.log(gameName.__proto__);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('j'));

const newString=gameName.substring(0,4);
console.log(newString);
const anotherName=gameName.slice(-8,4);
console.log(anotherName);

const newStringOne="   abhishek.    ";
console.log(newStringOne);
console.log(newStringOne.trim()) // trim basically remove the extra space  it also work on white space only 

const url="https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20','-'));
console.log(url.includes('abhishek'));
console.log(gameName.split("-")); //convert into the array ont he basis of given argument("-")