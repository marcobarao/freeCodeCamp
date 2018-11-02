// Using prototype properties to reduce duplicate code
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

// Interate over all properties
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];
for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

// Change a prototype to a new object
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs: 4,
  eat: () => console.log("Nhoc nhoc"),
  describe: () => console.log(`My name is ${this.name}`)
};

// Set the constructor to a prototype new object
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  constructor: Dog,
  numLegs: 2,
  eat: () => console.log("nom nom nom"),
  describe: () => console.log("My name is " + this.name)
};

// Understand where an object's prototype comes from
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);

// Understand the prototype chain
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);
Object.prototype.isPrototypeOf(Dog.prototype);
