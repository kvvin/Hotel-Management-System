const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');
navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event){
    if(event.target === modal){
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