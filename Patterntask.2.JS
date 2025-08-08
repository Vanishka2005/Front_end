//Number pyramid pattern
//1
let rows1 = 7;
let result1 = "";
let cols1 =1;
for (let i = 1; i <= rows1; i++) {
    for (let j= 1; j <= rows1 - i; j++) {
        result1 += " ";
    }
    for (let j = 1; j <= i; j++) {
        result1 += i + " ";
    }
    result1 += "\n";
    cols1 +=2;
  
}
console.log("NumbersPattern 1:\n"+result1);
//2
let rows2 = 7;
let result2 = "";
let cols2 =1
let space2 =rows1-1;
for (let i = 1; i <= rows2; i++) {
    for (let j = 1; j <= rows2 - i; j++) {
        result2 += " ";
    }
    for (let j = 1; j <= i; j++) {
        result2 += j + " ";
    }
    result2 += "\n";
    cols2 +=2;
    space2 -=1;
}
console.log("NumbersPattern 2:\n"+result2);
//3
let rows3 = 7;
let result3 = "";
let cols3 =1;
for (let i = rows3; i >= 1; i--) {
    for (let j = 1; j <= rows3 - i; j++) {
        result3 += " ";
    }
    for (let j = 1; j <= i; j++) {
        result3 += i + " ";
    }
    result3 += "\n";
    cols3 +=2;
}
console.log("NumbersPattern 3:\n"+result3);


