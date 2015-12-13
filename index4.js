/**
 * Created by SAMPATH on 12/13/2015.
 * Class Support
 */

class Vehicle {
    constructor(){
        this.type = 'Vehicle';
    }
    getBrand(val){
        console.log('Type: ' + val + ', This is a ' + this.type);
    }
}

class Car extends Vehicle{
    constructor(){
        super();
        this.type = 'Car';
    }
}

let vehicle = new Vehicle();
vehicle.getBrand('Toyota');

let car = new Car();
car.getBrand('BMW');

