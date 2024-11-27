// Select all .acc elements within the .accommodations section
const accElements = document.querySelectorAll('.accommodations .acc');

// Loop through each .acc element and add a click event listener
accElements.forEach(acc => {
    acc.addEventListener('click', () => {
        // Remove the 'active' class from all .acc elements
        accElements.forEach(el => el.classList.remove('active'));

        // Add the 'active' class to the clicked element
        acc.classList.add('active');
    });
});
