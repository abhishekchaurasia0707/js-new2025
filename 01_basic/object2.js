// const obj=new Object() // this is singleton object 
const tinderUser={}  // this is non-singleton object 
tinderUser.id="123abc";
tinderUser.name="abhi";
tinderUser.isLoggedIn=false;
console.log(tinderUser);

const regularUser={
    email:"abhishek1167.be22@chitkara.edu.in",
    fullname:{
        userName:{
            firstName:"abhishek",
            lastName:"choudhary",
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userName);
console.log(regularUser.fullname.userName.firstName);
console.log(regularUser.fullname.userName.lastName);

// how to add two object 
//const obj1={1:"a",2:"b",3:"c"};
//const obj2={4:"d",5:"e"};
//const obj3=Object.assign({},obj1,obj2);
//const obj3 = {...obj1, ...obj2};
//console.log(obj3);
const user=[{},{},{}];
user[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// to check whether this particular property is exist in the following object or not 
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// object destructure in javascript of object =======================================
const course={
    courseName:"javascript in hindi",
    price:"999",
    courseInstructor:"hitesh",
}
//console.log(course.courseInstructor);
//alternative method
const {courseInstructor:inst}=course
//console.log(courseInstructor);
console.log(inst);

// API in javascript : it can be objects and it can also be an array  
/*
{ 
  name:"abhishek",
  courseName:"js in hindi",
  price:"free",
}

in the form of array=================
[
{},
{},
{}
]
*/