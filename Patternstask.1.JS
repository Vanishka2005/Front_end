//Star Patterns
//1
let rows1 = 5;
let result1 = "";

for (let i = 1; i <= rows1; i++) {
    for (let j = 1; j <= i; j++) {
        result1 += "*";
    }
    result1 += "\n";
}
console.log("StarPattern 1:\n"+result1);
//2
let rows2 = 5;
let result2 = "";

for (let i = rows2; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        result2 += "*";
    }
    result2 += "\n";
}
console.log("StarPattern 2:\n"+result2);
//3
let rows3 = 5;
let result3 = "";

for (let i = 1; i <= rows3; i++) {
    for (let j = 1; j <= rows3 - i; j++) {
        result3 += "*";
    }
    result3 += "\n";
}
console.log("StarPattern 3:\n"+result3);
//4
let rows4 = 5;
let result4 = "";

for (let i = rows4; i >= 1; i--) {
    for (let space =1; space <= rows4 -i; space++) {
        result4 += " ";
    }
    for(let j =1;j<= i;j++){
    result4 += "*"
    }
    result4 +="\n"
}
console.log("StarPattern 4:\n"+result4);
//5
let rows5 = 5;
let result5 = "";

for (let i = 1; i <= rows5; i++) {
    for (let j = 1; j <= rows5 - i; j++) {
        result5 += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        result5 += "*";
    }
    result5 += "\n";
}
console.log("StarPattern 5:\n"+result5);
//6
let rows6 = 5;
let result6 = "";

for (let i = rows6; i >= 1; i--) {
    for (let j = 1; j <= rows6 - i; j++) {
        result6 += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        result6 += "*";
    }
    result6 += "\n";
}
console.log("StarPattern 6:\n"+result6);
//7
let rows7 = 5;
let result7 = "";
// Top half
for (let i = 1; i <= rows7; i++) {
    for (let j = 1; j <= rows7 - i; j++) {
        result7 += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        result7 += "*";
    }
    result7 += "\n";
}
// Bottom half
for (let i = rows7 - 1; i >= 1; i--) {
    for (let j = 1; j <= rows7 - i; j++) {
        result7 += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        result7 += "*";
    }
    result7 += "\n";
}
console.log("StarPattern 7:\n"+result7);

