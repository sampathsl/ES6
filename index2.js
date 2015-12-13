/**
 * Created by SAMPATH on 12/13/2015.
 * var vs let
 */

let checkDataLet = 'Test';

console.log('Outside let showES6Features: ' + checkDataLet);

while(true){
    //let key word
    let checkDataLet = 'Poop!';
    console.log('Inside let showES6Features: ' + checkDataLet);
    break;
}

console.log('Outside let showES6Features: ' + checkDataLet);