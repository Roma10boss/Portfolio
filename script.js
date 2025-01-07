const phone = document.getElementById("phone");

let isDragging = false;
let startX = 0;
let currentRotation = 0;

// Reference the Enter button
const enterButton = document.getElementById("enter-button");

// Add event listener for the click event
enterButton.addEventListener("click", () => {
    // Redirect to full-site.html
    window.location.href = "full-site.html";
});


// Mouse Down: Start dragging
phone.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    phone.style.animation = "none"; // Stop floating animation during drag
});

// Mouse Move: Rotate phone
document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - startX;
    const newRotation = currentRotation + deltaX / 5; // Adjust sensitivity
    phone.style.transform = `rotate(${newRotation}deg)`;
});

// Mouse Up: End dragging
document.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;

    // Snap to nearest 90 degrees
    const snappedRotation = Math.round(currentRotation / 90) * 90;
    currentRotation = snappedRotation;

    phone.style.transform = `rotate(${currentRotation}deg)`;
    phone.style.animation = "float 4s ease-in-out infinite"; // Resume floating animation

    // Add or remove landscape class based on rotation
    if (Math.abs(currentRotation) % 180 === 90) {
        phone.classList.add("landscape");
    } else {
        phone.classList.remove("landscape");
    }
});
