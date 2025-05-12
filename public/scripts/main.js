console.log("main.js loaded");

const signupForm = document.getElementById("signupform");

if (signupForm) {
  signupForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Collect input values
    const inputs = signupForm.querySelectorAll("input");

    const user = {
      FirstName: inputs[0].value, // Assuming "Name" field maps to FirstName
      Email: inputs[1].value,
      Username: inputs[2].value,
      Password: inputs[3].value,
    };

    const messageDiv = document.getElementById("signupMessage");

    try {
      // Send POST request to backend to register user
      const res = await fetch("/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Registration failed.");

      // Save user to localStorage
      localStorage.setItem("user", JSON.stringify(data));

      // Display welcome message
      if (messageDiv) {
        messageDiv.innerText = `Welcome to the Berry Grove, ${data.Username}!`;
        messageDiv.style.color = "green";
      }
    } catch (err) {
      console.error("Registration error:", err);
      if (messageDiv) {
        messageDiv.innerText = err.message;
        messageDiv.style.color = "red";
      }
    }

    // Clear form
    inputs.forEach((input) => (input.value = ""));
  });
}
