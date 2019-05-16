import printPlace from "./domPlaces"
import printInterest from "./domInterest";
import addPOI from "./postPOI";

printPlace()
printInterest()

document.getElementById("btn_submit_poi").addEventListener("click", event => {
    event.preventDefault();
    addPOI()
})

document.getElementById("btn_add_interest").addEventListener("click", event => {
    document.getElementById("wrapper_interest_form").style.display = "block"
})