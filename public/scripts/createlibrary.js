document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupform");
    const signupMessage = document.getElementById("signupMessage");
  
    if (signupForm) {
      signupForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission
  
        // Get the input fields
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
  
        // Create the user object
        const user = {
          name: name,
          email: email,
          username: username,
          password: password
        };
  
        // Log the user object to the console
        console.log("User Object:", user);
  
        // Display a message in the signupMessage div
        if (signupMessage) {
          signupMessage.innerHTML = `
            <h3>Account Created!</h3>
            <p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Username:</strong> ${user.username}</p>
          `;
        }
  
        // Optional: Clear the form fields after submission
        signupForm.reset();
      });
    }
  });
  