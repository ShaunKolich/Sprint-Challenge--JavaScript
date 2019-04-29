// ==== Callbacks ====

/* Step 1: Create a higher-order function that accepts a callback
 * Create a higher-order function named consume that can take 3 parameters.
 * The first two parameters can accept any argument
 * The last parameter accepts a callback
 * In the body of the function return the callback with the two parameters that you created
 */
let a = 'Shaun';
let b = ' and I am a decent programmer! ';
let greetingCB = function () {
  return 'My name is ';
}

function message(a, b, greetingCB) {
  console.log(greetingCB() + a + b)

}

message(a, b, greetingCB);

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */

let addCB = function (x, y) {
  return x + y;
}
let multiplyCB = function (x, y) {
  return x * y;
}
let greeting = function (x, y) {
  return `Hello ${x} ${y}, nice to meet you!`
}

function consume(x, y, addCB) {
  console.log(addCB(x, y));
}

function consume(x, y, multiplyCB) {
  console.log(multiplyCB(x, y));
}

function consume(x, y, greeting) {
  console.log(greeting(x, y));
}
/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2, 2, addCB); // 4
consume(10, 16, multiplyCB); // 160
consume("Mary", "Poppins", greeting);

// Hello Mary Poppins, nice to meet you!


// ==== Closures ====

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation:
// Neste function is having child functions inside of a
// function. This will allow you to pass variables to the children such as internal.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();