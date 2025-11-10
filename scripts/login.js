let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let savedUser = JSON.parse(localStorage.getItem("user"));

  if (username === "" || password === "") {
    alert("Please fill all fields");
  } else if (!savedUser) {
    alert("No user found. Please register first.");
    window.location.href = "form-Register.html";
  } else if (username === savedUser.username && password === savedUser.password) {
    alert("Welcome back " + username + "!");
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "account.html";
  } else {
    alert("Wrong username or password");
  }
});