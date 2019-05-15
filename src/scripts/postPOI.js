import API from "./dbCalls";

function addPOI() {
    const poiLocation = document.getElementById("poi_location").value
    const poiName = document.getElementById("input_poi_name").value
    const poiDescription = document.getElementById("text_poi_description").value
    const poiReview = document.getElementById("text_poi_review").value
    const poiCost = document.getElementById("input_poi_cost").value
    const poiObj = {
        placeId: poiLocation,
        name: poiName,
        description: poiDescription,
        review: poiReview,
        cost: poiCost
    }
    API.postCall("interests", poiObj)
}

export default addPOI