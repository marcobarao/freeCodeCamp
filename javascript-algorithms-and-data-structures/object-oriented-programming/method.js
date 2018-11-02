// Creating a method
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: () => "This dog has 4 legs."
};

dog.sayLegs();

// Make code more reusable using this keyword
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {
    return "This dog has " + this.numLegs + " legs.";
  }
};

dog.sayLegs();

// 
