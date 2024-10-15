// Function to display value on the calculator
function inputValue(value) {
    document.getElementById("display").value += value;
    playSound(); // Play sound on button press
}

// Function to clear the display
function clearDisplay() {
    document.getElementById("display").value = "";
    playSound(); // Play sound on button press
}

// Function to delete the last character in the display
function deleteLast() {
    var display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
    playSound(); // Play sound on button press
}

// Function to calculate the result
function calculateResult() {
    var display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
    playSound(); // Play sound on button press
}

// Function to play button sound
function playSound() {
    var sound = document.getElementById("buttonSound");
    sound.currentTime = 0; // Reset sound to start
    sound.play(); // Play sound
}
