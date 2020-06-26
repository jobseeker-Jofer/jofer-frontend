// --------------- ELEMENTS ----------------
let saveBtn = document.getElementById("button");

// --------------- FETCH ----------------
let endpoint = "https://5ef168ca1faf160016b4d5b5.mockapi.io/api/users/1";

// --------------- FUNCTION ----------------
async function saveProfile() {
  try {
    let title = document.getElementById("title").value;
    let desc = document.getElementById("desc").value;
    let contact = document.getElementById("contact").value;
    let birthday = document.getElementById("birthday").value;
    let city = document.getElementById("city").value;

    let userData = {
      title,
      desc,
      contact,
      birthday,
      city,
    };
    console.log(userData);

    let options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    let response = await fetch(endpoint, options);
    console.log(response.json());
  } catch (error) {
    console.error(error);
  }
}

// --------------- EVENT LISTENER ----------------
saveBtn.addEventListener("click", function () {
  //   Swal.fire({
  //     position: "top-end",
  //     icon: "success",
  //     title: "Your work has been saved",
  //     showConfirmButton: false,
  //     timer: 1500,
  //   });
  saveProfile();
  alert("gfd");
});
