// For login form submission
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting normally
  
    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Create an object with the form data
    const loginData = {
      email: email,
      password: password
    };
  
    // Make a POST request to your backend using fetch
    fetch('http://localhost:8081/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response from your backend
      // For example, you can redirect the user to a dashboard page
      // or display an error message if login failed
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
  
  // For sign up form submission
  document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting normally
  
    // Get form values
    const name = document.getElementById('name').value;
    const userId = document.getElementById('userId').value;
    const signupEmail = document.getElementById('signupEmail').value;
    const signupPassword = document.getElementById('signupPassword').value;
  
    // Create an object with the form data
    const signupData = {
      name: name,
      userId: userId,
      email: signupEmail,
      password: signupPassword
    };
  
    // Make a POST request to your backend using fetch
    fetch('http://localhost:8081/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(signupData)
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response from your backend
      // For example, you can show a success message or redirect the user to a login page
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
  