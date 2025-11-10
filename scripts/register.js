let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (username === "" || email === "" || password === "") {
    alert("Please fill all fields");
  } else {
    let user = {
      username: username,
      email: email,
      password: password
    };

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLoggedIn", "false");

    alert("Account created! Now you can login.");
    window.location.href = "form-Login.html";
  }
});