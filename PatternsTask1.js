//Task1
//pattern-1
let rows = 5;
let result = '';
let cols1 =1;
for (let i = 1; i <= rows; i++) {
    result += '  '.repeat(rows - i); // spaces
    result += (i + ' ').repeat(2 * i - 1); // numbers
    result += '\n';
    cols1 +=2;
}
console.log("Pattern 1:\n"+result);

//pattern-2
let rows2 = 9;
let result2 = '';
let cols2 = 1;
for (let i = 1; i <= rows2; i++) {
    result2 += ' '.repeat(rows2 - i);
    for (let j = 1; j <= i; j++) {
        result2 += j + ' ';
    }
    result2 += '\n';
     cols2 += 2;
}
console.log("Pattern 2:\n" + result2);

//pattern-3
let rows3 = 9;
let result3 = '';
let cols3 =1;
for (let i = 1; i <= rows3; i++) {
    result3 += ' '.repeat(rows3 - i);
    result3 += '* '.repeat(i);
    result3 += '\n';
    cols3 +=2;
}
console.log("Pattern 3:\n" + result3);

//pattern-4
let rows4 = 9;
let result4 = '';
let cols4 =1;
for (let i = 1; i <= rows4; i++) {
    result4 += ' '.repeat(rows4 - i);
    for (let j = 1; j <= i; j++) {
        result4 += j;
    }
    for (let j = i - 1; j >= 1; j--) {
        result4 += j;
    }
    result4 += '\n';
    cols4 +=2;
}
console.log("Pattern 4:\n" + result4);

//pattern-5
let rows5 = 9;
let result5 = '';
let cols5 =1;
for (let i = 0; i < rows5; i++) {
    let start = 9 - i;
    result5 += ' '.repeat(rows5 - i - 1);
    for (let j = start; j <= 9; j++) {
        result5 += j;
    }
    for (let j = 8; j >= start; j--) {
        result5 += j;
    }
    result5 += '\n';
    cols5 +=2;
}
console.log("Pattern 5:\n" + result5);

//pattern-6
let rows6 = 7;
let result6 = '';
let cols6 =1;
for (let i = rows6; i >= 1; i--) {
    let spaces = rows6 - i;
    let stars = 2 * i - 1;

    result6 += ' '.repeat(spaces);
    result6 += '*'.repeat(stars);
    result6 += '\n';
    cols6 +=2;
}
console.log("Pattern 6:\n" + result6);

//pattern-7
let rows7 = 9;
let result7 = '';
let cols7 =1;
for (let i = rows7; i >= 1; i--) {
    result7 += ' '.repeat(rows7 - i);
    for (let j = 1; j <= i; j++) {
        result7 += i + ' ';
    }
    result7 += '\n';
    cols7 +=2;
}
console.log("Pattern 7:\n" + result7);




