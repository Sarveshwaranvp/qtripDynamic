import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();
  console.log(config.backendEndpoint + "/cities");
  console.log(cities);

  //Updates the DOM with the cities
  cities.forEach((key) => {
    addCityToDOM(key.id, key.city, key.description, key.image);
  });
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  try{
    let fetchRes = await fetch( config.backendEndpoint+"/cities");
    let res = fetchRes.json();
    return res;
  }
  catch{
    return null;
  }


}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
  let rowDiv = document.getElementById("data");
  let colDiv = document.createElement("div");
  colDiv.className = "col-6 col-md-4 col-lg-3 mb-5";
  colDiv.innerHTML = `
  <a href = "./pages/adventures/?city=${id}" id = ${id}> 
   <div class = "tile"> 
   <img src = ${image}> 
   <div class = "tile-text text-center"> 
    <h5>${city}</h5>
     <p>${description}</p>
      </div>
         </div>
           </a>  `;
  rowDiv.appendChild(colDiv);
}

export { init, fetchCities, addCityToDOM };
