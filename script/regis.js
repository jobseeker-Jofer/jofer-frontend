// --------------- ELEMENTS ----------------
let signupBtn = document.getElementById("signup");

// --------------- FETCH ----------------
let endpoint = `https://5ef168ca1faf160016b4d5b5.mockapi.io/api/users`;

// --------------- Functions ----------------
async function register() {
  try {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let userData = {
      name,
      email,
      password,
    };
    let options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    if (name != "" && email != "" && password != "") {
      let response = await fetch(endpoint);
      let users = await response.json();
      console.log(users);
      let registeredUser = users.filter((user) => user.email === email);

      if (registeredUser.length > 0) {
        alert("Your email has been registered");
      } else {
        let response = await fetch(endpoint, options);
        console.log(response.json());
        alert("You have been registered succesfully");
        window.location.href = "login.html";
      }
    } else {
      alert("You need to complete all information in the registration form!");
    }
  } catch (error) {
    console.error(error);
  }
}
// --------------- EVENT LISTENER ----------------
signupBtn.addEventListener("click", function () {
  register();
});
