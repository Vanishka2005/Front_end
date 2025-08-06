//advanced for loop
let arr=[1,2,3,4,5,6,7,8]
for(let a1 of arr){
    console.log("For of Array element:"+a1)
}
//advanced for using obj 
let object={a:1,b:2,c:3};
for(let a1 of arr){
    console.log("For of Array element:"+a1);
}
for(let key in object){
    console.log("For in Object:"+key+",value:"+object[key]);
}
//using arr
let obj={a:1,b:2,c:3};
for(let a1 of arr){
    console.log("For of Array element:"+a1);
}
for(let key in arr){
    console.log("For in Object:"+key+",value:"+arr[key]);//-obj-undefined
}
//jumping stmts
//break & continue
let Obj={a:1,b:2,c:3};
for(let a1 of arr){
    if(a1==3){
        break;// break stmt
    }
    console.log("For of Array element:"+a1);
}

let Obj1={a:1,b:2,c:3};
for(let a1 of arr){
    if(a1==3){
        continue;// break stmt
    }
    console.log("For of Array element:"+a1);
}

for (let i=0;i<5;){//uncompleted loop
    if(i==1)
    continue;//break
    console.log("hi");
    i++;
}
//switch
