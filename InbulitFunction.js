//Day6
//Inbuilt Functions:- String & Array
//String
let str ="Hello JavaScript";
console.log(str.split(" "));//with space
let str1 ="Javascript";
console.log(str1.split("l"));//using l
let str2 ="Hello JavaScript";
console.log(str2.split(""));//without space
console.log(str.toUpperCase());//Uppercase
console.log(str.toLowerCase());//Lowercase
console.log(str.indexOf("o"));//indexOf-front to last
console.log(str.indexOf("a"));
console.log(str.lastIndexOf("L"));//lastindexOf-last to front
console.log(str.lastIndexOf("J"));
console.log(str.search(/ /i));//search
console.log(str.search(/S/i));
console.log(str.replace("javaScript","World"));//replace
console.log(str.slice("3"));//slice +
console.log(str.slice("5"));
console.log(str.slice("-7"));//slice -
console.log(str.slice("-6"));
console.log(str.substring("6"));//substringI
console.log(str.substring("-7"));
//day 7
//matchAll
console.log(Array.from(str.matchAll("h")));
console.log(Array.from(str.matchAll("e")));
console.log(Array.from(str.matchAll("l")));
console.log(Array.from(str.matchAll("o")));
console.log(Array.from(str.matchAll("j")));
console.log(Array.from(str.matchAll("a")));
console.log(Array.from(str.matchAll("v")));
console.log(Array.from(str.matchAll("s")));
console.log(Array.from(str.matchAll("c")));
console.log(Array.from(str.matchAll("r")));
console.log(Array.from(str.matchAll("i")));
console.log(Array.from(str.matchAll("p")));
console.log(Array.from(str.matchAll("t")));
console.log(str.padStart(20,"x"));//padstart
console.log(str.padStart(20,"abcdefgh"));
console.log(str.padEnd(21,"abcdefgh"));//padend
let letter ="Java";
//console.log(str.padStart(letter.length + 2,"Mr"));
console.log(letter.repeat(2));//repeat
let words ="JavaScricpt";//11-word starts to end
console.log(words.length)
console.log(words.trim().length);//trim whitespace
console.log(letter.includes("Ja"));//includes
console.log(letter.includes("m"));
console.log(letter.includes("va"));
console.log(letter.startsWith("Ja"));//check if startswith
console.log(letter.startsWith("va"));
console.log(letter.endsWith("va"));//check if endswith
console.log(letter.endsWith("ja"));
console.log(letter.charAt(2));//get char at letter
console.log(letter.charCodeAt(2));//get char code at index

//2a3b4c
let word1 = "2a3b4c";
let result1 = "";
let digit = 0;
for (let i = 0; i < word1.length; i++) {
    if (!isNaN(word1[i])) {
        digit = parseInt(word1[i]);
    } else {
        result1 += word1[i].repeat(digit);
        digit = 0; // reset digit after using it
    }
}
console.log(result1); // Output: aabbbcccc
//aabbbcccc
let word2 = "aabbbcccc"; 
let result2 = "";
let count = 1;
for (let i = 1; i <= word2.length; i++) {
    if (word2[i] == word2[i - 1]) {
        count++;
    } else {
        result2 += count + word2[i - 1];
        count = 1;
    }
}
console.log(result2);  // Output: 2a3b4c
