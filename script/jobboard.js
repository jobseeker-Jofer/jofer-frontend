// --------------- ELEMENTS ----------------
let ul = document.querySelector(".list-unstyled");
let images = [
    "/img/logo/mitramas.png",
    "/img/logo/binar.png",
    "/img/logo/garena.png",
    "/img/logo/zenroom.png",
    "/img/logo/warpin.png",
    "/img/logo/shopee.png",
    "/img/logo/m2.png",
    "/img/logo/sirclo.png",
    "/img/logo/gojek.png",
    "/img/logo/zenius.png",
];

// --------------- FETCH ----------------
let endpoint = "https://5ef168ca1faf160016b4d5b5.mockapi.io/api/jobList";

// ----------- FUCNTION -----------
async function getJobList() {
    try {
        let response = await fetch(endpoint);
        let results = await response.json();
        console.log(results);
        // job list
        results.forEach((job, index) => {
            let li = document.createElement("li");
            li.setAttribute("class", "media");

            let logoCom = document.createElement("img");
            logoCom.setAttribute("src", images[index]);
            logoCom.setAttribute("class", "mr-3");

            let mediaBody = document.createElement("div");
            mediaBody.setAttribute("class", "media-body");

            // title
            let title = document.createElement("a");
            let jobTitle = document.createTextNode(`${job.title}`);
            title.setAttribute("class", "mt-0 mb-1 title");
            title.setAttribute("href", `/job-offer/${job.tag}.html`);
            title.appendChild(jobTitle);
            // company
            let company = document.createElement("p");
            company.setAttribute("id", `${job.title}`);
            let companyText = document.createTextNode(`${job.company}`);
            company.appendChild(companyText);
            // company location
            let location = document.createElement("p");
            location.setAttribute("id", `${job.location}`);
            let locText = document.createTextNode(`${job.location}`);
            location.appendChild(locText);
            // saved job
            // let divFlex = document.createElement("div");
            // divFlex.setAttribute(
            //   "class",
            //   "d-flex justify-content-end align-items-center"
            // );
            // let divButton = document.createElement("div");
            // divButton.setAttribute("class", "btn-group");
            // let button = document.createElement("button");
            // button.setAttribute("type", "button");
            // button.setAttribute("class", "btn btn-sm btn-outline-primary");
            // let span = document.createElement("span");
            // span.setAttribute("data-feather", "heart");
            // let save = document.createTextNode(" Save");
            // button.appendChild(span);
            // button.appendChild(save);

            // fitur save job
            // divButton.innerHTML = `<button type="button" class="btn btn-sm btn-outline-primary">
            // <span data-feather="heart"></span> Save</button>`;
            // feather.replace();
            // divButton.appendChild(button);
            // divFlex.appendChild(divButton);

            mediaBody.appendChild(title);
            mediaBody.appendChild(company);
            mediaBody.appendChild(location);
            // fitur save job
            // mediaBody.appendChild(divFlex);

            li.appendChild(logoCom);
            li.appendChild(mediaBody);

            ul.appendChild(li);

            // button.addEventListener("click", function (index) {
            //   fetch(users, {
            //     method: "PUT",
            //     headers: {
            //       "Content-type": "application/json",
            //     },
            //     body: JSON.stringify({ job: [index] }),
            //   });
            // });
        });
    } catch (error) {
        console.log(error);
    }
}
async function filter() {
    try {
        // Declare variables
        let input, filter, li, a, i, txtValue;
        input = document.getElementById("search");
        filter = input.value.toUpperCase();
        li = ul.getElementsByTagName("li");

        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    } catch (error) {
        console.error(error);
    }
}
async function filterBtn() {
    try {
        // Declare variables
        let input, filter, li, a, i, txtValue;
        input = document.getElementById("search");
        filter = input.value.toUpperCase();
        li = ul.getElementsByTagName("li");

        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
                Swal.fire({
                    position: "center",
                    icon: "info",
                    title: "Your Search Didn't Match Any",
                    showConfirmButton: true,
                    // timer: 5000,
                });
            }
        }
    } catch (error) {
        console.error(error);
    }
}
// ----------- EVENT LISTENER -----------
let searchBar = document.getElementById("search");
let searchBtn = document.getElementById("button");

searchBar.addEventListener("keyup", filter);
searchBtn.addEventListener("keyup", filterBtn);

// ----------- MAIN JOBBOARD -----------
getJobList();
