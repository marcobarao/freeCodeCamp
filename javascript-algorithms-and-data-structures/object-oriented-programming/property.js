// Add properties
let dog = {
  name: "Bolinha",
  numLegs: 4
};

// Get properties values
let dog = {
  name: "Spot",
  numLegs: 4
};
console.log(dog.name, dog.numLegs);

// Understand own properties
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);
