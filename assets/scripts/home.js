// Set the end date
const endDate = new Date("February 17, 2025 00:07:00").getTime();

// Update the countdown every second
const timer = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    if (timeLeft > 0) {
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Display the countdown in their respective divs
        document.getElementById("days").children[0].textContent = days;
        document.getElementById("hours").children[0].textContent = hours;
        document.getElementById("minutes").children[0].textContent = minutes;
        document.getElementById("seconds").children[0].textContent = seconds;
    } else {
        // Show "Day 1" and stop the countdown
        document.querySelector(".timer-container").style.display = "none";
        document.getElementById("message").style.display = "block";
        clearInterval(timer);
    }
}, 1000);




// Function to animate counting
function countUp(element) {
    const target = +element.getAttribute('data-target');
    let current = 0;
    const increment = target / 100; // The number of increments per animation frame

    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            clearInterval(interval);
            current = target;
        }
        element.textContent = Math.floor(current);
    }, 10); // Update every 10 milliseconds
}

// Intersection Observer to detect when the element is in view
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Start the counting animation when the element enters the viewport
            const numElement = entry.target.querySelector('.num');
            countUp(numElement);
            observer.unobserve(entry.target); // Stop observing the element after it has been animated
        }
    });
}, {
    threshold: 0.3 // Trigger animation when 30% of the element is in view
});

// Observe each stat element
document.querySelectorAll('.stat').forEach(stat => {
    observer.observe(stat);
});

