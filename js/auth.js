// Mock auth system (replace with Firebase later)
let currentUser = null;

const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');

// Login function
function login(email, password) {
  // In a real app, this would call your backend
  currentUser = { email, name: email.split('@')[0] };
  updateAuthUI();
}

// Update UI based on auth state
function updateAuthUI() {
  if (currentUser) {
    loginBtn.textContent = currentUser.name;
    signupBtn.textContent = 'Logout';
    signupBtn.onclick = logout;
  } else {
    loginBtn.textContent = 'Log In';
    signupBtn.textContent = 'Sign Up';
    signupBtn.onclick = showSignupModal;
  }
}

function logout() {
  currentUser = null;
  updateAuthUI();
}

// Event listeners
loginBtn.addEventListener('click', () => {
  const email = prompt('Enter email:');
  const password = prompt('Enter password:');
  login(email, password);
});

// Initialize
updateAuthUI();
