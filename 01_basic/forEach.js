const coding=["js","ruby","java","python","cpp"];
// another way of printing array
coding.forEach(function(val){
    console.log(val);
})
// another way of printing array
coding.forEach((item)=>{
    console.log(item);
})

// another way of printing array by making function
function printMe(item){
    console.log(item);
}

coding.forEach(printMe);
coding.forEach((item,index,coding)=>{
    console.log(item,index,coding)
})

const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js",
    },
    {
        languageName:"C++",
        languageFileName:"cpp",
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
})