/*
Learning Objectives:
  1. Understand and utilize DOM element selection.
  2. Implement mouse event listeners.
  3. Manipulate CSS properties through JavaScript.

Brief:
Chris is eager to perform a magic trick — to vanish before your eyes! By harnessing the power of CSS and JavaScript, make Chris disappear when the mouse hovers over his image. 

Expected Outcomes:
  1. When the user hovers over Chris's image, he should disappear.
  2. When the user moves the mouse away, Chris should reappear.

Hint: You can achieve this in multiple ways e.g. via the opacity or style property, etc. 
*/

// Place your plan and solution below!

// creating a variable, id = chris image
// function to implement disappearing act
// make opacity to 0
// event listener mouse enter
// additional function making chris reappear, set opacity to 1
//event listener mouse leave

const chrisImage = document.getElementById ("chrisImage");
function disappear(){
  chrisImage.style.opacity = 0
}
chrisImage.addEventListener("mouseenter", disappear);
function appear() {
  chrisImage.style.opacity = 1
}
chrisImage.addEventListener("mouseleave", appear);

