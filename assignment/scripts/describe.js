// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// A string variable named 'name' is declared and set to equal "Dane"
// Then the name varible is checked to see if it exactly matches "Mary"
// "Dane" does not exactly match "Mary", so
// We console.log 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// The varible 'secret' is declared but left undefined
// Another varible named 'code' is declared and set to equal "123"
// The varible 'code' is checked to see if it exactly matches "123"
// It does match, so 'secret' is set to equal the string "super" and 'code' is set to equal itself times 2
// The varible 'code' is again checked to see if it is greater than "250", it isnt
// We then console.log 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Three variables are declared the first being a boolean named 'isStudent' and is set to true
// the others are both numbers named 'age' which is set to "34" and 'zip' set to "55407"
// First we check if 'isStudent' equals true and if 'zip' is greater than "80000", which is false
// Then we check if 'isStudent' equals false or 'age' is less than "30", which are both flase
// Finally we check if 'isStudent' is equal to true which it is, so
// We console.log 'Welcome to Prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  // FIX - only colorOne is set to purple and colorTwo is left as 'blue'
  //should be if (mix === true) {
                colorOne = 'purple';
                colorTwo = 'purple';
              }
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
//FIX - conditional statement has the syntax for logical 'or', not 'and'
//should be if (temp > 39 && time >= 4)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.
//FIX - if the code ran as described, we could console.log 'no entry'.

/*
let age = 21;
const minAge = 21;
//FIX - The way its described is not incorrect but reverse of what is shown in the conditional
//description says "age is greater than or equal to minAge" but should be "minAge is less than or equal to age"
//to match the description the code should be if(age >= minAge)
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
//FIX? - In the description it says we console.log enter but even if we used the correction I made before,
// it would still log 'no entry', I think both the description and the code are wrong, if the idea is to check if
// someone is 21, we should check if age is less than minAge, not less than or equal to. the code for that would
//look like this if(age < minAge) {
                   console.log('no entry');
                  } else {
                   console.log('enter');
                  }
*/
