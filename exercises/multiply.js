'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */

// Your code :
function multiply (number1,number2){
    let sign1='';
    let sign2='';
    let result='';
    let somme=0;
    if(number1>=0){
        sign1="+";
    }
    else{
        sign1="-";
        number1=-number1;
    }
    if(number2>=0){
        sign2="+";
    }
    else{
        sign2="-";
        number2=-number2;
    }

    if(sign1 =="+" && sign2 =="-" || sign2 =="+" && sign1 =="-"  ){
        result="-";
    }
    

    for (let i=0;i<number2;i++){
        somme+=number1;
    }
    return parseInt(result+=somme);
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
