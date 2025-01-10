const account=12345
let accountemail="abhishek9097indian@gmail.com"//block scope only eg:{} , no redeclaration,redeclaration will give syntax error
var accountpassword="12323" //functional-scope  , can be redeclaration just like var accountpassword can be redeclare 
accountcity="chandigarh"
accountemail="abhishek1167.be22@chitkara.edu.in"
accountpassword="33333"
accountcity="Gurgaon"// variables can also be define as this
let accountState; // this will give undefined value;

console.log(account);
console.table([accountemail,accountpassword,accountcity,accountState])