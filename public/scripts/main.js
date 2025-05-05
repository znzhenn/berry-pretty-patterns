console.log("main.js loaded");
const signupForm = document.getElementById("signupform");
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = signupForm.querySelectorAll("input");

    const user = {
      Name: inputs[0].value,
      Email: inputs[1].value,
      Username: inputs[2].value,
      Password: inputs[3].value,
    };

    const messageDiv = document.getElementById("loginMessage");

    if (messageDiv) {
      messageDiv.innerHTML = `User ${user.Username} has joined the  berry grove!.`;
    }

    inputs.forEach((input) => input.value = "");
  });
}
  
