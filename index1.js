/**
 * Created by SAMPATH on 12/13/2015.
 * var vs let
 */

var checkDataVar = 'Test';

console.log('Outside var showES5Features: ' + checkDataVar);

while(true){
    //var key word
    var checkDataVar = 'Poop!';
    console.log('Inside var showES5Features: ' + checkDataVar);
    break;
}

console.log('Outside var showES5Features: ' + checkDataVar);