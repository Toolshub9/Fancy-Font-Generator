function inputValue(value) {
    document.getElementById("display").value += value;
    playSound();
}

function clearDisplay() {
    document.getElementById("display").value = "";
    playSound();
}

function deleteLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
    playSound();
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
    playSound();
}

// Function to play sound
function playSound() {
    const sound = document.getElementById("buttonSound");
    sound.currentTime = 0; // Reset the sound to play from the start
    sound.play();
}
