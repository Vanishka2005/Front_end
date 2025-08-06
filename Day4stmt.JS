//STATEMENTS
if(""){
    console.log("True");
}else{
    console.log("False");
}
if("Hello"){
    console.log("True");
}else{
    console.log("False");
}
if("null"){
    console.log("True");
}else{
    console.log("False");
}
if("undefined"){
    console.log("True");
}else{
    console.log("False");
}
if(4){//true
    console.log("condition is true");
}else{
   console.log("condition is true"); 
}
if(5){//false
    console.log("condition is false")
}else{
    console.log("condition is false")
}
if(7<3)//without{}
    console.log("True");
else
    console.log("False");
if(7>3){//using{}
    console.log("True");
}else{
    console.log("False");
}
if(null){//null
    console.log("True");
}else{
    console.log("False");
}
if(undefined){//undefined
    console.log("True");
}else{
    console.log("False");
}
//else if
let mark=100;
if(mark>=90){
    console.log("Grade is "+"O+");
}else if(mark>=80){
    console.log("Grade is "+"A+");
}else if(mark>=65){
    console.log("Grade is "+"B+");
}else if(mark>=50){
    console.log("Fail");
}

let marks=100;
if(marks>=90){
    console.log("Grade is "+"O+");
}if(marks>=80){
    console.log("Grade is "+"A+");
}if(marks>=65){
    console.log("Grade is "+"B+");
}if(marks>=50){
    console.log("Fail");
}
//nested if
let Mark=100;
    if(Mark>=90){
        if(Mark>=50){
            console.log("A");
    }else{
        console.log("F");
    }
}
//iterative stmts
//for,while,do-while loops:
let arr=[1,2,3,4,5];
for(let i=0;i<5;i++){
    console.log("Iteration:"+arr[1]);
}
let i=0;
while(i<7){
    console.log("While Array element:"+arr[1]);//array element
    i++;
}
let j=0;
do{
    console.log("Do while element:"+j);
    j++;
}
while(j<3);
