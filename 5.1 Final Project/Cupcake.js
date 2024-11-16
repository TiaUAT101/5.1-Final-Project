// Get references to the input field, button, and secret content
var secretInput = document.getElementById("secret-input");
var revealButton = document.getElementById("reveal-button");
var secretContent = document.getElementById("secret-content");

// Initially hide the secret content
secretContent.style.display = "none";

// Function to reveal the content if the correct word is typed
function checkAndReveal() {
  // Check if the input is 'cupcake'
  if (secretInput.value.toLowerCase() === "cupcake") {
    secretContent.style.display = "block";  // Reveal the secret content
  } else {
    secretContent.style.display = "none";   // Keep it hidden if the input is incorrect
  }
}

// Check the input and reveal the content when the button is clicked
if (revealButton) {
  revealButton.onclick = function() {
    checkAndReveal(); // Call the function when the button is clicked
  };
}
