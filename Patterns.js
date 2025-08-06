//Day6 PATTERNS
//left-aligned triangle
let rows = 3;
let result = '';
let cols = 1;
for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
        result += '*';
    }
    result += '\n';
    cols += 2;
}
console.log(result);
//
let rows1 = 3; // Example number of rows
let cols1 = 1; // Starting number of columns
let result1 = '';

for (let i = 1; i <= rows1; i++) {
    for (let j = 1; j <= cols1; j++) {
        result1 += j % 2 !== 0 ? '*' : '';
    }
    result1 += '\n';
    cols1 += 2; // Increase column count by 2 for next row
}
console.log(result1);
//numbers
let rows2 = 3; 
let cols2 = 1;
let num = 1; 
let result2 = '';

for (let i = 1; i <= rows2; i++) {
    for (let j = 1; j <= cols2; j++) {
        result2 += j % 2 !== 0 ? num++ : '';
    }
    result2 += '\n';
    cols2 += 2; // Increase column count by 2 for next row
}
console.log(result2);
//Reverse
let rows3 = 5;
let result3 = '';
let cols3 = 2 * rows3 - 1; // Start with the widest row (9 stars)

for (let i = 1; i <= rows3; i++) {
    for (let j = 1; j <= cols3; j++) {
        result3 += '*';
    }
    result3 += '\n';
    cols3 -= 2; // Decrease star count by 2 each row
}
console.log(result3);
// Right-aligned triangle (increasing stars)
let rows4 = 5;
let result4 = '';
let cols4 = 1;
let spaces = rows4*2-2;
for (let i = 1; i <= rows4; i++) {
   // let spaces = rows4 - i;  // decreasing spaces
    // Add spaces
    for (let j = 1; j <= spaces; j++) {
        result4 += ' ';
    }
    // Add stars
    for (let j = 1; j <= cols4; j++) {
        result4 += '*';
    }
    result4 += '\n';
    cols4 += 1;  // increase stars each row
}
console.log(result4);
