//In order for first test to return green(pass) (see spec.js) we need to define the function and perform the minimum to ensure green(pass) - i.e. return 42.
// function add() {
//     return 42;
// }

//In order for second test to return green(pass) (see spec.js) we need to ensure both specs return green(pass).
// function add(num1, num2) {
//     return num1 + num2;
// }

//In order for thrid test to return green(pass) (see spec.js) we need to ensure all three specs return green(pass).
function add(num1, num2) {
    if(typeof(num1) !== "number" || typeof(num2) !== "number") {
        return "Error";
    }
    return num1 + num2;
}

//Relates to Subtraction tests. Also, 'return' changed to 'alert' to test for 'alert' box.
function sub(num1, num2) {
    if(typeof(num1) !== "number" || typeof(num2) !== "number") {
        alert("Error");
    }
    return num1 - num2;
}

//Relates to Multiplication tests.
function mul(num1, num2) {
    if(typeof(num1) !== "number" || typeof(num2) !== "number") {
        return "Error";
    }
    return num1 * num2;
}