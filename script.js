function acceptLove() {
    document.body.classList.add('celebration');
    alert("🎉🌈");
}

function addNoButton() {
    let noButton = document.createElement("button");
    noButton.innerText = "No";
    noButton.onclick = function() {
        noButton.remove();
        addNoButton();
        addNoButton();
    };
    
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight / 2); // Restrict no buttons to top half

    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;

    document.getElementById("no-container").appendChild(noButton);
}

// Start with 2 No buttons
addNoButton();
addNoButton();
