function myFunction() {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "You Applied For This Job!",
        showConfirmButton: true,
        // timer: 2500,
    });
}

// -------- EVENT LISTENER ----------
function logout() {
    window.location.href = "/index.html";
    localStorage.removeItem("user");
}
