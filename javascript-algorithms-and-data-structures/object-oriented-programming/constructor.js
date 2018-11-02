// Creating a constructor
function Dog() {
  this.name = "Toby";
  this.color = "brown";
  this.numLegs = 4;
}

// Creating instance of object
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
let hound = new Dog();

// Set parameters for a constructor
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog("Toby", "Brown");

// Verify an object's constructor with instanceof
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let myHouse = new House(2);
myHouse instanceof House;

// Understand the constructor property
function Dog(name) {
  this.name = name;
}

function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}
