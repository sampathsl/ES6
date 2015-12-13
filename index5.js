/**
 * Created by SAMPATH on 12/13/2015.
 * Arrow Function usage
 */

/*
Syntax
arr.filter(callback[, thisArg])
*/

function isBigEnough(value) {
    return value >= 10;
}

let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

console.log(filtered);

//ES 6

let filtered_extended = [12, 5, 8, 130, 44].filter((e) => {
        return e >= 10;
    });

console.log(filtered_extended);

