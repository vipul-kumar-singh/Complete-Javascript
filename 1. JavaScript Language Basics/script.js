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