// Object
var myDog = {
  name: "Bolinha",
  legs: 4,
  tails: 2,
  friends: ["Vivi", "Nana"]
};

// Accessing object properties with dot notation
var testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

// Accessing object properties with bracket notation
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

// Accessing object properties with variables
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];

// Updating object properties
var myDog = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"]
};

myDog.name = "Happy Coder";

// Add new properties to object
var myDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"]
};

myDog.bark = "woof";

// Delete properties from a object
var myDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
  bark: "woof"
};

delete myDog.tails;

// Objects for lookups
function phoneticLookup(val) {
  var result = "";

  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  };
  result = lookup[val];
  return result;
}

phoneticLookup("charlie");

// Testing objects for properties
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  if (!myObj.hasOwnProperty(checkProp)) {
    return "Not Found";
  }
  return myObj[checkProp];
}

checkObj("gift");

// Manipulating complex objects
var myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true
  },
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true
  }
];

// Accessing nested objects
var myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    outside: {
      trunk: "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"];

// Accessing nested arrays
var myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"]
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"]
  }
];

var secondTree = myPlants[1].list[1];

// Record Collection
var collection = {
  "2548": {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"]
  },
  "2468": {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"]
  },
  "1245": {
    artist: "Robert Palmer",
    tracks: []
  },
  "5439": {
    album: "ABBA Gold"
  }
};
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  var col = collection[id];
  switch (prop) {
    case "tracks":
      if (!col.hasOwnProperty("tracks")) {
        col["tracks"] = [];
      }
      if (value != "") {
        col["tracks"].push(value);
      } else if (value == "") {
        delete col.tracks;
      }
      break;
    default:
      if (value != "") {
        col[prop] = value;
      } else {
        delete col[prop];
      }
      break;
  }

  return collection;
}

updateRecords(5439, "artist", "ABBA");
