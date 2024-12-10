/*
Learning Objectives:
  1. Understand and utilize DOM element selection.
  2. Implement event listeners on images.
  3. Manipulate image attributes dynamically based on user interactions and randomness.

Brief:
You're presented with two closed doors. Your task is to choose one to reveal what's behind both. Will you find Loz behind the door you chose or the other one? The outcome should be random.

Expected Outcomes:
  1. Initially, both doors are closed.
  2. When one door is clicked, both doors should open, revealing either an empty room or Loz behind them.
*/

// Place your plan and solution below!

// plan 
// create door variable
// randomise assigning loz to a door using math.random
// add click event listeners to each door
// if else loop revealing outcomes 
// show randomised door with src
// 

const doors = document.querySelectorAll(".door");

const randomDoor = Math.floor(Math.random() * doors.length);

// [i, door] destructuring assignment extracts the values from the NodeList returned by the querySelectorAll (not exactly an array but array like as it behaves like an array, cant use .map() etc but can use .entries() and .forEach() which can be used to iterate through)
// .entries aquires both index and door element, index (or key) of the NodeList and generates an iterator that returns pairs of values containing the index (position) of the element in the NodeList, and the actual DOM element (in this case the door <img>)
function revealDoor () {
  for (const [i, door] of doors.entries()) { 
    if (i === randomDoor) {
      door.src = "door-open-loz.png";
      // include alerts
    } else {
      door.src = "door-open-empty.png";
    }
  }
}

function doorEventListeners() {
  for (const door of doors) {
  door.addEventListener("click", revealDoor);
}
}

doorEventListeners();


// used a destructuring assignment [i, door] to extract the returned nodelist from querySelectorAll then .entries to return an iterator of the index and element door 