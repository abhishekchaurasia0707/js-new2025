//var c=300
let a=300
if(true){
    let a=30;
    console.log(a);
    
}
console.log(a);

function one(){
    const username="abhishek";
    function two(){
        const website="github";
        console.log(username);  // child can access the parent variable but parent can't access the child variable
    }
    //console.log(website) // this will give error 
    two();
}
one();