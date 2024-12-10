/*
Learning Objectives:
  1. Manipulate DOM elements based on user input.
  2. Dynamically create and delete elements based on slider values.
  3. Enhance understanding of event-driven programming.

Brief:
You're provided with a slider (ranging from 1 to 5) and an empty space to populate star icons. Your task is to create or remove stars dynamically based on the value of the slider.

Expected Outcomes:
  1. The number of star icons should match the slider's value.
  2. Adjusting the slider should immediately reflect the change in the number of star icons.
*/

// Place your plan and solution below!

// ★

// create const for div containg the stars
// create const for slider
// create function to update div conating stars
// create loop for number of stars
// add eventlistener to listen to slider

const starSpan = document.querySelector(".star-icon");
const slider   = document.querySelector("#starSlider");

function changeStars() {
  starSpan.textContent = null;
  for (let i = 0; i < slider.value; i++) {
    starSpan.textContent += "★";
  }
}

slider.addEventListener("input", changeStars);
