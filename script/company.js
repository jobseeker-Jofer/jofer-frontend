// -------- ELEMENT ----------
let navbar = document.querySelector("nav");
let brand = document.getElementById("brand");
// -------- FUNCTIONs ----------
function createNavbar() {
    let div = document.createElement("div");
    let ul = document.createElement("ul");
    ul.setAttribute("class", "nav justify-content-end");
    let activeUser = localStorage.getItem("user");
    if (activeUser == null) {
        brand.setAttribute("href", "/jobboard-nonuser.html");
        // ul.innerHTML = `
        // <li class="nav-item"">
        //     <a class="nav-link" href="/index.html" id="menu">
        //     <i class="fas fa-sign-in-alt"></i> Sign In/Sign Up
        //     </a>
        // </li>`;
    } else {
        ul.innerHTML = `
        <li class="nav-item" onclick="logout()">
            <a class="nav-link" href="#" id="menu">
            <i class="fas fa-sign-out-alt"></i> Sign Out   
            </a>
        </li>`;
    }
    div.appendChild(ul);
    navbar.appendChild(div);
}

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
// -------- MAIN PAGE ----------
createNavbar();
