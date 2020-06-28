// --------------- ELEMENTS ----------------
let name = document.getElementById("name");
let title = document.getElementById("title");
let desc = document.getElementById("desc");
let contact = document.getElementById("contact");
let email = document.getElementById("email");
let birthday = document.getElementById("birthday");
let residence = document.getElementById("residence");
let skills = document.getElementById("skills");

// --------------- FUNCTION ----------------
async function getProfile() {
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
        name.innerHTML = `${results.name}`;
        title.innerHTML = `${results.title}`;
        desc.innerHTML = `${results.desc}`;
        contact.innerHTML = `${results.contact}`;
        birthday.innerHTML = `${results.birthday}`;
        residence.innerHTML = `${results.city}, Indonesia`;
        email.innerHTML = `${results.email}`;
        skills.innerHTML = `${results.skills}`;
    } catch (error) {
        console.log(error);
    }
}

getProfile();
