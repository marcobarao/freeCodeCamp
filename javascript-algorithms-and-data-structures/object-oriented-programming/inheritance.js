// Use inheritance to don't repeat yourself
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear
};

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Inherit behaviors from a supertype
function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

duck.eat();
beagle.eat();

// Set the child's protype to an Instance of the parent
function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();

// Reset an inherited constructor property
function Animal() {}
function Bird() {}
function Dog() {}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();

// Add methods after inheritance
function Animal() {}
Animal.prototype.eat = () => console.log("nom nom nom nom");

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = () => console.log("Woof!");

let beagle = new Dog();

beagle.eat();
beagle.bark();

// Override inherited methods
function Bird() {}

Bird.prototype.fly = () => "I am flying!";

function Penguin() {}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = () => "Alas, this is a flightless bird.";

let penguin = new Penguin();
console.log(penguin.fly());
