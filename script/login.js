// --------------- ELEMENTS ----------------
let button = document.getElementById("button");

// --------------- FETCH ----------------
let endpoint = `https://5ef168ca1faf160016b4d5b5.mockapi.io/api/users`;

// --------------- Functions ----------------
async function login() {
  try {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let response = await fetch(endpoint);
    let results = await response.json();

    // check email dari user data dan value email
    let user = results.filter((result) => result.email === email);
    if (user.length > 0) {
      //email terdaftar
      // check password dari user data dan value password
      if (user[0].password === password) {
        // simpan data ke localStorage
        localStorage.setItem("user", JSON.stringify(user[0]));
        // redirect ke dashboard
        window.location.href = "dashboard.html";
      } else {
        alert("Wrong email or password!");
      }
    } else {
      // ketika email tidak ketemu by filter method
      alert("Your email has not been registered yet");
    }
  } catch (error) {
    console.error(error);
  }
}
// --------------- EVENT LISTENER ----------------
button.addEventListener("click", function () {
  login();
});
