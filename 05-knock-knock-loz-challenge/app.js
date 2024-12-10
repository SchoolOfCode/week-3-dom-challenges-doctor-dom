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

const doors = document.querySelectorAll(".doors");

const randomDoor = Math.floor(Math.random() * doors.length);

/* function revealDoor () {
  for (const [i, doors] of doors) {
    if (i === randomDoor) {
      doors.src = "door-open-loz.png";
    } else {
      doors.src = "door-open-empty.png";
    }
  }
}

function doorEventListeners() {
  for (const door of doors) {
  door.addEventListener("click", revealDoor);
}
}

doorEventListeners(); */ 