// for of loop in javascript

const arr=[1,2,3,4,5];

for(const num of arr){
    console.log(num);
}
const greeting="hello duniya!";
for(const greet of greeting){
    console.log(greet);
}

// map

const map= new Map();
map.set('IN','India');
map.set('USA','United State of America');
map.set('In','India');
//console.log(map)

for(const [key,value] of map){
    console.log(key,':-',value);
}

const obj={
    'game1':'NFS',
    'game2':'Spiderman'
}

// we use for in loop for the iteration of the objects in javascript
for(const key in obj){
    console.log(`${key} shortcut is for ${obj[key]}`);
}

// for in loop for  array
 const ar=["js","array","ram","shyam","mohan","sita"];
 for(const num in ar){
    console.log(ar[num]);
 }

