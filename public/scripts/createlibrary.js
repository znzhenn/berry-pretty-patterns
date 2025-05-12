document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupform");
    const signupMessage = document.getElementById("signupMessage");
  
    if (signupForm) {
      signupForm.addEventListener("submit", function (e) {
        e.preventDefault(); 
  
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
  
        const user = {
          name: name,
          email: email,
          username: username,
          password: password
        };
  
        console.log("User Object:", user);
  
        if (signupMessage) {
          signupMessage.innerHTML = `
            <h3>Account Created!</h3>
            <p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Username:</strong> ${user.username}</p>
          `;
        }
  
        signupForm.reset();
      });
    }
  });
  