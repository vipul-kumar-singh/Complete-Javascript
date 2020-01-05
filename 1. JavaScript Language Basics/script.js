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