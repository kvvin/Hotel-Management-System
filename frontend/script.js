const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');

document.querySelector('.book-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form values
    const checkInDate = document.getElementById('checkin-date').value;
    const checkOutDate = document.getElementById('checkout-date').value;
    const adults = document.getElementById('adults').value;
    const children = document.getElementById('children').value;
    const roomType = document.getElementById('room-type').value;
    const rooms = document.getElementById('rooms').value;

    // Create a booking object with the form data
    const bookingData = {
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        adults: adults,
        children: children,
        roomType: roomType,
        rooms: rooms
    };

    // Make a POST request to the backend API
    fetch('/booking', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingData)
    })
        .then(response => response.text())
        .then(data => {
            // Handle the response from the backend
            console.log(data); // Log the response message
            // Perform any additional actions as needed
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

    navBtn.addEventListener("click", function () {
        sideNav.classList.add('show');
        modal.classList.add('showModal');
    });

    cancelBtn.addEventListener('click', function () {
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            sideNav.classList.remove('show');
            modal.classList.remove('showModal');
        }
    });

    function openLoginPage() {
        window.open('login.html', '_blank');
    }

    // Function to open the signup page
    function openSignupPage() {
        window.open('signup.html', '_blank');
    }

    // Function to handle successful login and redirect back to the main webpage
    function handleSuccessfulLogin() {
        // Redirect back to the main webpage
        window.location.href = 'index.html'; // Update with the appropriate URL of your main webpage
    }
