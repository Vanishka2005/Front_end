// Pattern-1
let rows1 = 5;
let result1 = '';
let cols1 =1;
for (let i = 1; i <= rows1; i++) {
    result1 += '* '.repeat(i) + '\n';
    cols1 +=2;
}
console.log("Pattern 1:\n" + result1);

// Pattern-2
let rows2 =5;
let result2 = '';
let cols2 =1;
for (let i = rows2; i >= 1; i--) {
    result2 += '* '.repeat(i) + '\n';
    cols2 +=2;
}
console.log("Pattern 2:\n" + result2);

//pattern-3
let rows3 =5;
let result3 = '';
let cols3 =1;
for (let i = 1; i <= rows3; i++) {
    result3 += '  '.repeat(rows3 - i) + '* '.repeat(i) + '\n';
    cols3 +=2;
}
console.log("Pattern 3:\n" + result3);

//pattern-4
let rows4 =5;
let result4 = '';
let cols4 =1;
for (let i = rows4; i >= 1; i--) {
    result4 += '  '.repeat(rows4 - i) + '* '.repeat(i) + '\n';
    cols4 +=2;
}
console.log("Pattern 4:\n" + result4);

//pattern-5
let rows5 =5;
let result5 = '';
let cols5 =1;
for (let i = 1; i <= rows5; i++) {
    result5 += '  '.repeat(rows5 - i);
    result5 += '* '.repeat(2 * i - 1);
    result5 += '\n';
    cols5 +=2;
}
console.log("Pattern 5:\n" + result5);

//pattern-6
let rows6 =5;
let result6 = '';
let cols6 =1;
for (let i = rows6; i >= 1; i--) {
    result6 += '  '.repeat(rows6 - i);
    result6 += '* '.repeat(2 * i - 1);
    result6 += '\n';
    cols6 +=2;
}
console.log("Pattern 6:\n" + result6);

//pattern-7
let rows7 = 5;
let result7 = '';
let cols7 =1;
// Top half
for (let i = 1; i <= rows7; i++) {
    result7 += '  '.repeat(rows7 - i);
    result7 += '* '.repeat(2 * i - 1);
    result7 += '\n';
    cols7 +=2;
}
// Bottom half
for (let i = rows7 - 1; i >= 1; i--) {
    result7 += '  '.repeat(rows7 - i);
    result7 += '* '.repeat(2 * i - 1);
    result7 += '\n';
    cols7 +=2;
}
console.log("Pattern 7:\n" + result7);






