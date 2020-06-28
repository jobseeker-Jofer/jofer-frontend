// // --------------- ELEMENTS ----------------
// let saveBtn = document.getElementById("button");

// --------------- FUNCTION ----------------
async function saveProfile() {
    try {
        let user = JSON.parse(localStorage.getItem("user"));
        console.log(user);

        let id = user.id;
        console.log(id);
        let endpoint = `https://5ef168ca1faf160016b4d5b5.mockapi.io/api/users/${id}`;
        let response = await fetch(endpoint);
        let results = await response.json();
        console.log(results);

        let title = document.getElementById("title").value;
        let desc = document.getElementById("desc").value;
        let contact = document.getElementById("contact").value;
        let birthday = document.getElementById("birthday").value;
        let city = document.getElementById("city").value;
        let skills = document.getElementById("skills").value;

        if (title == "") {
            title = results.title;
        }
        if (desc == "") {
            desc = results.desc;
        }
        if (contact == "") {
            contact = results.contact;
        }
        if (birthday == "") {
            birthday = results.birthday;
        }
        if (city == "") {
            city = results.city;
        }
        if (skills == "") {
            skills = results.skills;
        }

        let userData = {
            title,
            desc,
            contact,
            birthday,
            city,
            skills,
        };
        console.log(userData);

        let options = {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(userData),
        };

        response = await fetch(endpoint, options);
        console.log(response.json());
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Saved!",
            showConfirmButton: true,
            // timer: 2500,
        });
    } catch (error) {
        console.error(error);
    }
}

// --------------- EVENT LISTENER ----------------
// saveBtn.addEventListener("click", function () {
//     //   Swal.fire({
//     //     position: "top-end",
//     //     icon: "success",
//     //     title: "Your work has been saved",
//     //     showConfirmButton: false,
//     //     timer: 1500,
//     //   });
//     saveProfile();
//     alert("Data Succesfully Saved!");
// });
