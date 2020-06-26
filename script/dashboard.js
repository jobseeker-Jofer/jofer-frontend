// --------------- ELEMENTS ----------------
let name = document.getElementById("name");
let title = document.getElementById("title");
let desc = document.getElementById("desc");
let contact = document.getElementById("contact");
let birthday = document.getElementById("birthday");
let residence = document.getElementById("residence");
let skills = document.getElementById("skills");

// --------------- FETCH ----------------
let id = 1;
let endpoint = `https://5ef168ca1faf160016b4d5b5.mockapi.io/api/users/${id}`;
let options = {
  method: "GET",
};

async function getProfile() {
  try {
    let response = await fetch(endpoint, options);
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

    let skillsArr = results.skills;
    skillsArr.forEach((skill) => {
      const li = document.createElement("li");
      const text = document.createTextNode(skill);

      li.appendChild(text);

      skills.appendChild(li);
    });
  } catch (error) {
    console.log(error);
  }
}

getProfile();
