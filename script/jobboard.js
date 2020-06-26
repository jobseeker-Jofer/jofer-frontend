// --------------- ELEMENTS ----------------
let ul = document.querySelector(".list-unstyled");
// let zenius = "/img/zenius-list.png";
// let node = "/img/node-list.png";
// let ibm = "/img/ibm-list.png";
let images = [
  "/img/logo/ibm-list.png",
  "/img/logo/zenius-list.png",
  "/img/logo/node-list.png",
];
// <li class="media">
//   <img src="/img/zenius-list.png" class="mr-3" alt="...">
//   <div class="media-body">
//     <h5 class="mt-0 mb-1">List-based media object</h5>
//     <p id="">a</p>
//     <p>c</p>
//   </div>
// </li>

// --------------- FETCH ----------------
// let endpoint = "https://5ef168d71faf160016b4d5c1.mockapi.io/api/todoapp/users";
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

      let title = document.createElement("a");
      let jobTitle = document.createTextNode(`${job.title}`);
      title.setAttribute("class", "mt-0 mb-1 title");
      title.setAttribute("href", "#");
      title.appendChild(jobTitle);
      let company = document.createElement("p");
      company.setAttribute("id", `${job.title}`);
      let companyText = document.createTextNode(`${job.company}`);
      company.appendChild(companyText);
      let location = document.createElement("p");
      location.setAttribute("id", `${job.location}`);
      let locText = document.createTextNode(`${job.location}`);
      location.appendChild(locText);

      mediaBody.appendChild(title);
      mediaBody.appendChild(company);
      mediaBody.appendChild(location);

      li.appendChild(logoCom);
      li.appendChild(mediaBody);

      ul.appendChild(li);
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
// ----------- EVENT LISTENER -----------
let searchBar = document.getElementById("search");
searchBar.addEventListener("keyup", filter);

// ----------- MAIN JOBBOARD -----------
getJobList();
