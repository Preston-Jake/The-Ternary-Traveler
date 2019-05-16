import API from "./dbCalls"

function printPlaces() {
    API.getCall("places").then(places => {
        // console.log(places)
        places.map(buildPlacesNav)
        places.map(buildPlacesDiv)
        places.map(buildLocationSelect)
    })
}
function buildPlacesNav(place) {
    // console.log(place.id)
    // creates nav bar
    const frag = document.createDocumentFragment();
    const placeLi = document.createElement("li")
    const link = document.createElement("a")
    placeLi.setAttribute("class", "nav-item")
    link.setAttribute("href", `link_${place.id}`)
    link.setAttribute("class", "nav-link")
    placeLi.appendChild(link)
    link.textContent = place.name
    frag.appendChild(placeLi)
    document.getElementById("nav_places").appendChild(frag)

    //create place container

}

function buildLocationSelect(place) {
    const frag = document.createDocumentFragment();
    const selectLocation = document.createElement("option")
    selectLocation.textContent = place.name
    selectLocation.setAttribute("id", `location_${place.id}`)
    selectLocation.setAttribute("value", `${place.id}`)
    frag.appendChild(selectLocation)
    document.getElementById("poi_location").appendChild(frag)
}

function buildPlacesDiv(place) {
    // console.log(place.name)
    const frag = document.createDocumentFragment();
    const placeDiv = document.createElement("div");
    const placeTitle = document.createElement("h2");
    placeTitle.textContent = place.name
    placeDiv.appendChild(placeTitle)

    const interest = document.createElement("div");
    interest.setAttribute("id", `interest_${place.id}`)
    placeDiv.appendChild(interest)

    frag.appendChild(placeDiv);
    document.getElementById("wrapper_places").appendChild(frag)
}

export default printPlaces