// Create a person object that contains three keys: name, age and country
// Use yourself as an example to set the values for name, age, and country
let personEl = document.getElementById('person-el');
let person2El = document.getElementById('person2-el');
let person = {
  name: 'Nelson',
  age: 20,
  country: 'United States',
};
// Create a function, logData(), that uses the person object to create a
// string in the following format:
// "Per is 35 yearls old and lives in Norway"
function logData() {
  personEl.textContent = person.name;
}
// Call the logData() function to verify that it works
logData();

// Scrimba answer
let person2 = {
  name: 'Per',
  age: 35,
  country: 'Norway',
};
function logData2() {
  person2El.textContent =
    person2.name +
    ' is ' +
    person.age +
    ' years old and lives in ' +
    person2.country;
}
logData2();

let conditionalEl = document.querySelector('#conditional-el');
let secondConditional = document.getElementById('second-conditional');
let age = 6;
let age2 = 67;
// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount
// Create a conditional statement (if/else/else if) that logs out the discount
// The passenger will get based upon the value of the age variable
if (age2 <= 5) {
  secondConditional.textContent = 'Free';
} else if (age2 <= 17) {
  secondConditional.textContent = 'Child Discount';
} else if (age2 <= 26) {
  secondConditional.textContent = 'Student Discount';
} else if (age <= 66) {
  secondConditional.textContent = 'Full Price';
} else {
  // The final "else" statement can't have an argument
  // passed through!
  secondConditional.textContent = 'Senior Citizen Discount';
}
// First try
if (age < 6) {
  /* This will NOT work because the logical || (OR) operator
takes the first truthy value and outputs it but if there
is no truthy value it will output the last value entered
meaning you will always be stuck at "Child discount" */
  conditionalEl.textContent = 'free!';
} else if (age >= 6 || age >= 17) {
  conditionalEl.textContent = 'child discount';
} else if (age >= 18 || age >= 26) {
  conditionalEl.textContent = 'student discount';
} else if (age >= 27 || age >= 66) {
  conditionalEl.textContent = 'full price';
} else if (age > 66) {
  conditionalEl.textContent = 'senior citizen discount';
}
// Scrimba answer
if (age < 6) {
  console.log('free');
} else if (age < 18) {
  console.log('child discount');
} else if (age < 27) {
  console.log('student discount');
} else if (age < 67) {
  console.log('full price');
} else {
  console.log('senior citizen discount');
}

let countriesEl = document.getElementById('countries-el');
let largeCountries = ['China', 'India', 'USA', 'Indonesia', 'Pakistan'];
/* Use a for loop to log the following to the console: 
The 5 largest countries in the world:
- China
- India 
- United States 
- Indonesia
- Pakistan
*/
for (let i = 0; i < largeCountries.length; i++) {
  let largeCountry = 'The 5 largest countires in the world are ';
  countriesEl.textContent = largeCountry;
  countriesEl.textContent += largeCountries[i] + ' ';
}
// Scrimba answer
console.log('The 5 largest countries in the world:');
for (let i = 0; i < largeCountries.length; i++) {
  console.log('- ' + largeCountries[i]);
}

let countriesElFix = document.getElementById('countries-el-fix');
let largeCountriesFix = ['Tuvalu', 'India', 'USA', 'Indonesia', 'Monaco'];
// You need to help me fix the largeCountries arry so that
// China and Pakistan are added back into their respective places
// shift() will take the first item out of an array
// shift() will make an array shorter
largeCountriesFix.shift();
// unshift() will insert the string passed through to
// the front of an array
// unshift() will make an array longer
largeCountriesFix.unshift('China');
// pop() will remove the last item in an array
largeCountriesFix.pop();
// push() will insert the string passed through to the
// end of an array
largeCountriesFix.push('Pakistan');
for (let i = 0; i < largeCountriesFix.length; i++) {
  console.log(largeCountriesFix[i]);
}
// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

let spooky = document.getElementById('spooky');
let dayOfMonth = 13;
let weekday = 'Friday';
// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&
if (dayOfMonth === 13 && weekday === 'Friday') {
  spooky.textContent = '😱';
}
