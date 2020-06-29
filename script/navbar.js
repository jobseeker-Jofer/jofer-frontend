let menu = document.getElementById("menu");
// // SIDEBAR
let signoutNav = document.getElementById("signoutNav");
// -------- EVENT LISTENER ----------
signoutNav.addEventListener("click", function () {
    localStorage.removeItem("user");
    window.location.href = "index.html";
});

// --------------- FUNCTION ----------------
async function getUser() {
    try {
        let user = JSON.parse(localStorage.getItem("user"));
        console.log(user);

        let id = user.id;
        console.log(id);
        let endpoint = `https://5ef168ca1faf160016b4d5b5.mockapi.io/api/users/${id}`;

        let response = await fetch(endpoint);
        let results = await response.json();
        console.log(results);
        // profile
        menu.innerHTML = `<i class="fas fa-user-circle"></i> ${results.name}`;
    } catch (error) {
        console.log(error);
    }
}

getUser();
