// Change user greeting message based on input
function changeName() {
    let nameInput = document.getElementById("nameInput").value;
    let greetingMessage = document.getElementById("greetingMessage");

    if (nameInput.trim() === "") {
        alert("Please enter your name.");
    } else {
        greetingMessage.textContent = `Hello, ${nameInput}! Welcome to Gabriel, Joshua, and Zion Teach Tech.
