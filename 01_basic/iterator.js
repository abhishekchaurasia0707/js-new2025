for(let a=0;a<10;a++){
    const element=a;
    if(element==5){
        console.log("5 is best number");
    }
    console.log(element);
}
for(let b=0;b<=10;b++){
    if(b==5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`value of b  is ${b}`);
}
for(let i=0;i<=10;i++){
    if(i==5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`value of i  is ${i}`);
}
for(let j=0;j<=10;j++){
    if(j==5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`value of j  is ${j}`);
}
