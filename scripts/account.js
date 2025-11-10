let card = document.querySelector(".form-card");
let user = JSON.parse(localStorage.getItem("user"));
let isLoggedIn = localStorage.getItem("isLoggedIn");

if (user && isLoggedIn === "true") {
  let message = document.createElement("p");
  message.textContent = "Welcome, " + user.username + "!";
  card.appendChild(message);

  let logoutBtn = document.createElement("button");
  logoutBtn.textContent = "Logout";
  logoutBtn.className = "sub-btn";
  card.appendChild(logoutBtn);

  logoutBtn.addEventListener("click", function() {
    localStorage.setItem("isLoggedIn", "false");
    alert("You have logged out.");
    window.location.href = "form-Login.html";
  });
} else {
  let message = document.createElement("p");
  message.innerHTML = 'You are not logged in. <a href="form-Login.html">Login here</a>.';
  card.appendChild(message);
}