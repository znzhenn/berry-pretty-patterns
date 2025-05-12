document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginform");
    const loginMessage = document.getElementById("loginMessage");
  
    if (loginForm) {
      loginForm.addEventListener("submit", function (e) {
        e.preventDefault(); 
  
        const username = document.querySelector('input[type="text"]').value;
        const password = document.querySelector('input[type="password"]').value;
  
        const user = {
          username: username,
          password: password
        };
  
        console.log("User Login Object:", user);
  
        if (loginMessage) {
          loginMessage.innerHTML = `
            <h3>Welcome, ${user.username}!</h3>`;
        }

        loginForm.reset();
      });
    }
  });
  