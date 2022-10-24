const dogs = [
  { weight: 22, curfood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curfood: 200, owners: ["Matlida"] },
  { weight: 13, curfood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curfood: 340, owners: ["Michael"] },
];
console.log("Recommended food - Calculation")
let rec_food = "";
let rec_food1 = "";
for (let i = 0; i <= dogs.length - 1; i++) {
  let rec_food1 = Math.ceil(dogs[i].weight ** 0.75 * 28);
  console.log(rec_food1);
  dogs[i].rec_food = rec_food1;
}
console.log("Array of objects includes Recommended food ");
console.log(dogs);
console.log("Finding the owner sarah from Array of objects");
let sarah_owner = dogs.slice(2, 3);
console.log(sarah_owner);
console.log("Finding the owner of sarah dog eating too much or too little");
if (sarah_owner[0].curfood > sarah_owner[0].rec_food) {
  console.log("Sarah dog eating too much");
} else {
  console.log("Sarah dog eating too little");
}

let ownersEatTooMuch = ["Alice", "Bob", "Matlida"];
let ownersEatTooLittle = new Array("Sarah", "John", "Michael");
console.log("Create an array dogs eat too Much");
console.log(ownersEatTooMuch, "dogs eat too Much");
console.log("Create an array dogs eat too Little");
console.log(ownersEatTooLittle, "dogs eat too Little");
console.log("dogs eating exactly the amount of food that is recommended (Just true or false)");
for (let j = 0; j <= dogs.length - 1; j++) {
  if (dogs[j].curfood == dogs[j].rec_food) {
    console.log("true");
  } else {
    console.log("false");
  }
}
console.log("dogs eating Okay the amount of food that is recommended (Just true or false)");
for (let k = 0; k <= dogs.length - 1; k++) {
  let accept_amounthigh = Math.ceil(0.1 * dogs[k].rec_food + dogs[k].rec_food);
  let accept_amountlow = Math.ceil(dogs[k].rec_food - 0.1 * dogs[k].rec_food);
  if (
    dogs[k].curfood === accept_amounthigh ||
    dogs[k].curfood === accept_amountlow
  ) {console.log("dogs eating Okay the amount of food that is recommended is true  then creating a array for that");
    console.log("true");
    let okayamountfood = new Array(dogs[k]);
    console.log(okayamountfood);
  }
  console.log("false");
}console.log("Shallow copy of dogs");
let dogs_copy = Array.from(dogs);
console.log(dogs_copy);
console.log("Sort it by recommended food portion in an ascending order");
let dogs_sort = dogs_copy.sort((a, b) => a.rec_food - b.rec_food);
console.log(dogs_sort);
