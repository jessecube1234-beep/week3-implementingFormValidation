// Finds the form element
const jsForm = document.getElementById('jsForm');

// Event listener (listens for submit)
jsForm.addEventListener('submit', (e) => {
  // Finds the username input
  const username = document.getElementById('username2').value.trim();

  // Validates if the username is more than 5 characters
  if (username.length < 5) {
    e.preventDefault();
    //Pushes a popup window 
    alert('Username must be at least 5 characters');
  }
});

