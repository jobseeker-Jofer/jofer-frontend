// bawaan template
(function () {
    "use strict";

    feather.replace();
})();

// // SIDEBAR
let signout = document.getElementById("signout");
// -------- EVENT LISTENER ----------
signout.addEventListener("click", function () {
    localStorage.removeItem("user");
    window.location.href = "index.html";
});
