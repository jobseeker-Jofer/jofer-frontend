function myFunction() {
    if (localStorage.getItem("user") == null) {
        Swal.fire({
            position: "center",
            icon: "warning",
            title: "Login For Apply This Job!",
            showConfirmButton: true,
            // timer: 5000,
        });
        let ok = document.querySelector(".swal2-confirm");
        ok.addEventListener("click", function () {
            window.location.href = "/login.html";
        });
    } else {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "You Applied For This Job!",
            showConfirmButton: true,
            // timer: 2500,
        });
    }
}

// -------- EVENT LISTENER ----------
function logout() {
    window.location.href = "/index.html";
    localStorage.removeItem("user");
}
