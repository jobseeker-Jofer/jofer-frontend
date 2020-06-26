function toggleForm() {
    var container = document.querySelector('.container');
    container.classList.toggle('active')
}

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "geral" && password == "123") {
        alert("Login successfully");
        window.location = "./dashboard.html"; // Redirecting to other page.
        return false;
    } else {
        attempt--; // Decrementing by one.
        alert("You have left " + attempt + " attempt;");
        // Disabling fields after 3 attempts.
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}

// register validasi 
function validasi() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var createPassword = document.getElementById("createPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if (username != "" && email != "" && createPassword != "" && confirmPassword != "") {
        alert("Login successfully");
        window.location = "login.html";
        return true;
    } else {
        alert('Anda harus mengisi data dengan lengkap !');
    }
}