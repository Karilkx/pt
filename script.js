function acceptLove() {
    document.body.classList.add('celebration');
    alert("🎉✨");
}

// Function to add and replace 'No' buttons
function addNoButton(existingButton) {
    // Remove the clicked No button
    if (existingButton) {
        existingButton.remove();
    }

    // Create a new No button
    let noButton = document.createElement("button");
    noButton.innerText = "No";
    noButton.classList.add("no-button");

    // Set random position (upper part only)
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight / 2);

    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;

    // When clicked, replace it with a new No button + add a second one randomly
    noButton.onclick = function() {
        addNoButton(noButton); // Replace current
        if (Math.random() < 0.6) { // 60% chance na may dagdag na isa
            addNoButton();
        }
    };

    document.getElementById("no-container").appendChild(noButton);
}

// Start with one No button
window.onload = function() {
    addNoButton();
};
