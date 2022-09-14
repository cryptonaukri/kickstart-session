console.log("Hi there..!")

// //var vs Let vs const
// // This means that if you can initialize a variable when you declare it,
// //  and don't need to reassign it later, make it a constant.

// // this works for var

var v1 = 10;
var v1 = 20;
// console.log(v1);

// // in case of let it wont work you can see it will give error;
let l1=10;
let l2=20;

l2=30;

// console.log(l1,l2);

// //this works for let
// let l2=30;
// l2 = 40;

// // but for cont it wont work
const c1=0;
// c1=45;

// console.log(c1); // it will give error  (Uncaught TypeError: Assignment to constant variable.)


// //Objects, array methods and string methods
// // every thing in javascript is object.

// // it will create String type object instance
const str = 'This is my string';
console.log(str);
// const browserType = 'mozilla';

// // includes() function
// if (str.includes('isto')) {
//      console.log('Found !');
// } else {
//   console.log('not Found');
// }

// // startsWith() function
// if (str.startsWith('is')) {
//   console.log('Found ');
// } else {
//   console.log('not found!');
// }

// // // endsWith function
// if (str.endsWith('g')) {
//   console.log('Found !');
// } else {
//   console.log('Not found!');
// }

// // indexOf() function
const tagline = '123456789 developers, by developers';

console.log(tagline.indexOf('developers')); // 10

// Starting at 0, if you count the number of characters (including the whitespace) 
// from the beginning of the string, the first occurrence of the substring "developers" is at index 20.

console.log(tagline.indexOf('xsfsf')); // -1

// This, on the other hand, returns -1 because the character x is not present in the string.

// So now that you know how to find the first occurrence of a substring, how do you go about finding
//  subsequent occurrences? You can do that by passing in a value that's greater than the index of 
// the previous occurrence as the second parameter to the method.


const firstOccurrence = tagline.indexOf('developers'); // 10
const secondOccurrence = tagline.indexOf('developers', firstOccurrence +1); // form 11

console.log(firstOccurrence); // 10
console.log(secondOccurrence); // 25

