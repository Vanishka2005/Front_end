//Day5
let a=[1,2,3,4,5,6,1,2];
let obj={};
for (let b of a){
    if(!obj[b]){
        obj[b]=1;
    }else{
        obj[b]++;
    }
}
for(let b1 in obj){//duplicate
    if(obj[b1]>1){
    console.log("duplicate number:"+b1);
}
}
for(let b1 in obj){//unique
    if(obj[b1]==1){
    console.log("duplicate number:"+b1);
}
}
//
let numbers=[1,2,3,4,1,2];
let largest =0;
let secondlargest =0;D
for(let i=0;i<numbers.length;i++){
    if(numbers[i]>largest){
        secondlargest=largest;
        largest=numbers[i];
    }else if(numbers[i]>secondlargest && numbers[i]!==largest){
        secondlargest=numbers[i];
    }
}
console.log("largest:"+largest);
console.log("secondlargest:"+secondlargest);