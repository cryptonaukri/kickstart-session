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


// // Array

// for...of to read each item.
const birds = [10, 20, 30];

for(let i=0;i<=10;i++){

}

for (const item of birds) {
    
    console.log(item*2);
}



// map() function
function double(number) {
    return number * 2;
  }

  const numbers = [5, 2, 7, 6];

//   const result = numbers.map(double);
const result = numbers.map((item)=>{
    return item*3;
}); 


  console.log(result);  // [ 10, 4, 14, 12 ]

// filter() function

const arr = ['akshay','ram','sham','bob','gaurave'];

function isLong(name) {
    return name.length > 6;
  }

  const result1 = arr.filter(isLong);
  console.log(result1);  // [gaurave]
  

//syntax of object
const obj = {
    key1:"value1",
    key2:"value2",
    key3:"value3"
}
console.log(obj.key3); //value3  
obj.key1; // access object value 

// ES6 arrow Function 
const square = function (number) {
    return number * number;
  }
  const x = square(4); // x gets the value 16

    console.log(x);

//   // arrow function
  const square1 = (num) => {
    return num*num;
  }

    console.log(square1(2));  

//   anonymous fun or error function
( () =>{ console.log("Inside anonymous function")} )()


//Spread & rest operator
// Spread syntax (...) allows an iterable, such as an array or string,
//  to be expanded in places where zero or more arguments (for function calls) or 
//  elements (for array literals) are expected. In an object literal,
//  the spread syntax enumerates the properties of an object and adds 
//  the key-value pairs to the object being created.

// Spread syntax looks exactly like rest syntax. In a way,
//  spread syntax is the opposite of rest syntax. 
//  Spread syntax "expands" an array into its elements,
//   while rest syntax collects multiple elements and "condenses" them into a single element.
//  See rest parameters and rest property.


// example of rest op
// Define a function with two regular parameters and one rest parameter:
function myBio(firstName, lastName, ...otherInfo) { 
    return otherInfo;
  }

//   example of Spread op
function sum(x, y, z) {
    return x + y + z;
  }
  
  const number = [1, 2, 3];
  
  console.log(sum(...number));
  // expected output: 6

// wrong 
const obj2 = { key1: 'value1' };
const array = [...obj2]; // TypeError: obj is not iterable

//right syntax
const array1 = [1, 2, 3];
const obj1 = { ...array1 }; // { 0: 1, 1: 2, 2: 3 }


//Destructuring

// Here’s an example:

// Define a destructuring array with two regular variables and one rest variable:
const [first, last, ...otherInfo1] = ["first", "second", "last", "Web Developer", "Male"];

// // Invoke the otherInfo variable:
console.log(otherInfo1); 

// The invocation above will return:
["CodeSweetly", "Web Developer", "Male"]

// Define a destructuring object with two regular variables and one rest variable:
const { firstName, lastName, ...otherInfo } = {  firstName: "Oluwatobi", lastName: "Sofela", companyName: "CodeSweetly", profession: "Web Developer",
    gender: "Male"
  }

