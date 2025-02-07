// A simple script to handle form submission (add your backend integration if needed)
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    if (name && email && message) {
        alert('Thank you for contacting us, ' + name + '. We will get back to you soon.');
        // Here, you can integrate with a backend or email API for real submissions.
    } else {
        alert('Please fill in all fields before submitting.');
    }
});


