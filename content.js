// Made by Regina Bonifacio
// PUPink Chrome Extension - Version 0.1.0

// Get the div element with id 'bgslider'
const bgSlider = document.getElementById("bgslider");

// Function to set the background image for the bgslider div
function setBgSliderImage() {
  const bgImage = chrome.runtime.getURL("assets/pinky.jpg");
  bgSlider.style.backgroundImage = `url(${bgImage})`;
}
setBgSliderImage();
