'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */


function jadenCase(str) {   
    const myArray = [];
    for (let i = 0; i < str.length; i++) {
        myArray.push(str.charAt(i));
    } 
    for (let j = 0; j < myArray.length; j++) {
        myArray[0] = myArray[0].toUpperCase();
        if(myArray[j] == " "){
           myArray[j+1] = myArray[j+1].toUpperCase();
        } 
    } 
    let resultat = myArray.join(";");
    return resultat.replace(/;/g, '');
} 


//* Begin of tests
const assert = require('assert')
assert.deepStrictEqual(jadenCase("How are you ?"), "How Are You ?")
// End of tests */
