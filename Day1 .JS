//array
let a=[2,3,5,6,7,9,"abcd",true,false,null];
console.log(a[6]);
console.log(a[5]);
//updating or adding new index
a[4]=1;
console.log(a);
a[5]=7;
console.log(a);
console.log(a[10]);//undefinded index
let a1=a;
//shallow copy using array
a1[3]=1;//a1
console.log(a[3]);
a1[2]="Abc";
console.log(a1[2]);
console.log(a[5]);//find the index
console.log(a1);//new array a1
//object
let b={"java":50,"frontend":55,"mySQL":56}
console.log(b);
b["frontend"]=70;//update
console.log(b);
b["mySQL"]=65;
console.log(b);
let b1=b; //Adding new obj
b1["java"]=90;
console.log(b1);