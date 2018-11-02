// Use mixin to add common behavior between unrelated objects
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

let glideMixin = obj => {
    obj.glide = () => console.log("Yeeeah, I'm glinding")
}

glideMixin(bird);
glideMixin(boat);
