document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginform");
    const loginMessage = document.getElementById("loginMessage");
  
    if (loginForm) {
      loginForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission
  
        // Get the input fields
        const username = document.querySelector('input[type="text"]').value;
        const password = document.querySelector('input[type="password"]').value;
  
        // Create the user object
        const user = {
          username: username,
          password: password
        };
  
        // Log the user object to the console
        console.log("User Login Object:", user);
  
        // Display a message in the loginMessage div
        if (loginMessage) {
          loginMessage.innerHTML = `
            <h3>Welcome, ${user.username}!</h3>
            <p><strong>Username:</strong> ${user.username}</p>
          `;
        }
  
        // Optional: Clear the form fields after submission
        loginForm.reset();
      });
    }
  });
  