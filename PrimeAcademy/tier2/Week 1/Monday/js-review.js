/*
Jargon

. - dot
() - parenthesis, parens
[] - brackets, square brackets/bracks, square braces
{} - curly bracks/brackets, braces, curlys
< - less than, bird, angle brackets
> - greater than, gator, angle brackets
/ - whack, forward slash, slash
\ - back slash
! - not, bang
# - pound, hash, number
* - splat, star
|| - pipes, double pipes, or
$ - bling, dollar sign, cash, Johnny
NaN - not a number, bread
*/

/*
Data Types

numbers - 0, 1, 2, 3, 100, 123123

strings - '' - has quotes around them

booleans(flag) - true or false
*/

//VARIABLES
//const - cannot reset value
//let - can reset value
//var - DO NOT USE

const product = 'orange';
let firstName = ' John';

let myNumber = 3;
// myNumber = myNumber + 1;
//myNumber + 1; // does go to for but doesnt store value
//myNumber += 1;
myNumber++; //++ auto adds 1

// Concatenation

const myNewNumber = 1 + 2; //3
console.log(myNewNumber);

// NaN - not a number
// null - falsy value. string false
let lastName = '';

// CONDITIONALS

if (lastName != null) {
  console.log('Yippy');
} else {
  console.log('it was falsy');
}

// FALLSY values
// ''
// 0
// null
// undefined
//NaN

//LOOPS

let whileValue = 8;
//while
while (/*expression - if evaluated to truthy run code block*/ whileValue > 0) {
  //code block that runs every iteration through loop
  whileValue--;
  console.log(whileValue);
}

//for i
let hatList = ['stocking cap', 'baseball cap', 'fedora', 'bowler cap'];
for (let i = 0; i < hatList.length; i++) {
  console.log(hatList[i]);
  //Perform code
}

// for in
for (let itemIndex in hatList) {
  console.log(itemIndex);
}

// for of
for (let itemValue of hatList) {
  console.log(itemValue);
}

//FUNCTIONS

// fucntion declaration - these are hoisted/in a global space
function doubleIt(
  magicNumber /* parameters to be passed into funciton. this is optional*/
) {
  //code block
  //what happens when called

  // return is optinal
  return magicNumber * 2;
}
console.log(doubleIt(15));

// function expression - not hoisted, can only be called after it is defined
let halveIt = function (aNumber) {
  return aNumber / 2;
};

console.log(halveIt(32));

//Built in functions

//parseInt(); - checks if numbers forces into whole numbers
//parseFload(); - checks if numbers for numbers with decimals
console.log(parseInt('220'));
// Number();
console.log(Number('226'));

// String();
console.log(String(123));

const myValueIs = 'John';
console.log(typeof myValueIs); //typeof checks the type

const person = {
  name: 'John',
  height: '6ft 3in',
  food: 'pizza',
};

console.log(Object.keys(person));
console.log(person.toString());
console.log(JSON.stringify(person));

const petName = 'snickers';
console.log(petName.charAt(1));
console.log(petName.length);

//hatList

// push(); - adds to end of array
// pop(); - delete last item in array
// .shift(); - delete first item in array
// unshift(); - adds to beginning
hatList.push('helmet');
console.log(hatList);

hatList.unshift('beanie');
console.log(hatList);

hatList.pop();
console.log(hatList);

console.log(petName.split(''));

console.log('2' * 3);
