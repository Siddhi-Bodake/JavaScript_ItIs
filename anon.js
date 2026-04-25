//function statemnet
function a() {
    console.log("a");

}
a();

//function expression

var b = function () {
    console.log("b");

}
b();

//function declaration

function a() {
    console.log("a");

}
a();

//anonymous function

function a() {
    console.log("c");

}

//named function expression
var b = function c() {
    console.log("c");

}

//differnce between parameters and argumnets

function a(param1, param2) {
    console.log(param1, param2);

}
a(1, 2);

//first class functions

var b = function (param1) {
    console.log(param1);

}
function xyz() {

}
b(xyz);
//ability to use function use as values is called first class fucntions
//first class citizens


//arrow functions


