// Use closure to protect properties within a object
function Bird() {
  let weight = 15;
  this.getWeight = () => weight;
}
