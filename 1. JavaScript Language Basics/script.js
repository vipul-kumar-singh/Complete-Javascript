/**********************************************************************************************
 * Variable and Data Types
 */

 /*
//String datatype
var firstName = 'John';
var lastName = 'Smith';
console.log(firstName);

//Numeric datatype
var age = 28;
console.log(age);

//boolean datatype
var fullAge = true;
console.log(fullAge);

//undefined datatype
var job;
console.log(job);

job = 'Teacher';
console.log(job);

//varible names cannot start with a number
//but '$' and '_' are allowed
//and these two are the only special characters allowed in variable name
var $3years = 3;
var _isAdult = false;
*/

//resersed keywords like 'function', 'delete', 'var' are also not allowed



/**********************************************************************************************
 * Variable Mutation and Type Coercion
 */

 /*
 var firstName = 'John'
 var age = 28;

 //Type Coercion
 console.log(firstName + ' '+ age); //javascript automatically converted number to string

 var job, isMarried;// can define two different types of variables together
 job = 'Teacher';
 isMarried = false;
 console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
 

 //Variable Mutation
 age = 'twenty eight';
 job = 'driver';
 console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

 alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

 var middleName = prompt("What is his middle name?");
 var lastName = prompt("What is his last name?", _default='Smith');
 console.log(firstName + ' '+ middleName +' ' + lastName);
 */



/**********************************************************************************************
 * Basic operators
 */
/*
var year, yearJohn, yearMark;

//It's possible to define a variable without any preceding statements (var).
//In such a case, the variable will be global, which means it could be accessed from anywhere in the code.
now = 2010; 
ageJohn = 28; 
ageMark = 33; 


//Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(yearMark);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

 
//Logical Operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);


//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/



/**********************************************************************************************
 * Operator Precedence
 */
/*
 var now = 2018;
 var yearJohn = 1989;
 var fullAge = 18;

 //Multiple operators
 var isFullAge = now - yearJohn >= fullAge;
 console.log(isFullAge);

 //Grouping
 var ageJohn = now - yearJohn;
 var ageMark = 35;
 var average = (ageJohn + ageMark) / 2;
 console.log(average);

 //Multiple assignments
 var x, y;
 x = y = (3 + 5) * 4 - 6;
 console.log(x, y);

 //More operators
 x = x * 2;
 console.log(x); 
 x *= 2;
 console.log(x);
 x++;
 console.log(x);
 x--;
 console.log(x);  
*/


 /**********************************************************************************************
 * If-Else statement
 */


/*
var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else {
    console.log(firstName + ' is a man.');
}
*/


/**********************************************************************************************
* The Ternary Operator
*/

/*
var firstName = 'John';
var age = 16;

console.log('John' + (age >= 18 ? ' drinks beer.' : ' drinks juice.'));
*/


/**********************************************************************************************
* Switch statement
*/
/*
var firstName = 'John';
var age = 16;
var job = 'driver';

switch(job){
    case 'teacher':
    case 'instructor':
        console.log(firstName,'teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName,'drives an uber in Lisbon.');
        break;
    case 'teacher':
        console.log(firstName,'designes beautiful websites.');
        break;
    default : 
        console.log(firstName,'does something else.');
}



switch(true){
    case age < 13:
        console.log(firstName,'is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName,'is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName,'is a young man.');
        break;
    default :
        console.log(firstName,'is a man.');
        
}
*/


/**********************************************************************************************
* Truthy & Falsy values and equality operators
*/

// falsy values : undefined, null, 0, '', NaN
// truthy values : NOT falsy values
/*
var height;
height = 23;

if (height || height === 0) {
    console.log('Varable is defined');    
} else{
    console.log('Variable has NOT been defined');
}


//Equality operators
if (height == '23') {
    console.log('The == operator does type coercion');
}

//Strict equality operator
if (height === '23') {
    console.log('The == operator does type coercion');
} else{
    console.log('The == operator does not type coercion'); //Correct
}
*/


/**********************************************************************************************
* Functions
*/
/*
function calculateAge(birthYear){
    return 2020 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(birthYear, firstName){
    var age = calculateAge(birthYear);
    var retirement = 60 - age;

    if (retirement > 0) {
        console.log(firstName,'retires in',retirement,'years.');        
    } else {
        console.log(firstName,'is already retired.');        
    }
    
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/


/**********************************************************************************************
* Functions Statements and Expressions
*/
/*
//Function Declaration
// function whatDoYouDo(job, firstName) {}

//Function Expression
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designes beautiful websites.';
        default : 
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher','John'));
console.log(whatDoYouDo('designer','Jane'));
console.log(whatDoYouDo('retired','Mike'));
*/


/**********************************************************************************************
* Arrays
*/

//Initialize new Array
var names = ['Mike','Dustin','Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names);
console.log(names.length);

//Mutate Array data
names[2] = 'Will';
console.log(names);

names[names.length] = 'Lucas'
console.log(names);

//Different Data Types
var john = ['John', 'Smith', 1990, 'teacher']

john.push('blue');//Add element to end of array
john.unshift('Mr.');//Add element to start of array
console.log(john);

john.pop();//Remove last element
john.shift();//Remove first element
console.log(john);

console.log(john.indexOf('Smith'));
console.log(john.indexOf('323'));

