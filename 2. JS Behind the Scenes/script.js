/********************************
*  Lecture: Hoisting
*/
/*
//functions
calculateAge(1965);

function calculateAge(year) {
    console.log(2020-year);
}

// retirement(1965); Not work because hoisting on functions only work on function declarations

var retirement = function(year){
    console.log(65 - (2020 - year));
}


//variables
console.log(age); //undefined because var isinitialized after this statement
var age = 11;
console.log(age);

function foo() {
    var age = 65; // scope of variable age is inside the function
    console.log(age);
}
foo();
console.log(age);
*/


/********************************
* Lecture: Scoping
*/
/*
// First scoping example


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}




// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



/********************************
* Lecture: The this keyword
*/

// console.log(this); //window information

calculateAge(1985)

function calculateAge(year){
    console.log(2020-year);
    console.log(this);
}


var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function () {
        console.log(this); //information about john object
        console.log(2016 - this.yearOfBirth);

        // function innerFuntion() {
        //     console.log(this); //Window Object
        // }
        // innerFuntion();//when a regular function calls happens, then the default object is the window object
    }
}

john.calculateAge();


var mike = {
    name: 'mike',
    yearOfBirth:1956
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();