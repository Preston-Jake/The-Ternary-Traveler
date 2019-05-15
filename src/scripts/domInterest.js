import API from "./dbCalls";

function printInterest() {
    API.getCallWithPlace("interests")
        .then(interests => interests.map(buildInterest))
}
function buildInterest(int) {
    // console.log(int)
    const frag = document.createDocumentFragment();
    const divInt = document.createElement("div");

    const titleInt = document.createElement("h3");
    titleInt.textContent = int.name;
    divInt.appendChild(titleInt);
    const inputTitle = document.createElement("input")
    inputTitle.value = int.name;
    divInt.appendChild(inputTitle)

    const description = document.createElement("p");
    description.textContent = int.description;
    divInt.appendChild(description);
    const inputDes = document.createElement("textarea")
    inputDes.value = int.description;
    divInt.appendChild(inputDes)

    const reviewTitle = document.createElement("h4")
    reviewTitle.textContent = "Review"
    divInt.appendChild(reviewTitle)


    const review = document.createElement("p");
    review.textContent = int.review
    divInt.appendChild(review)
    const inputReview = document.createElement("textarea")
    inputReview.value = int.review;
    divInt.appendChild(inputReview)

    const cost = document.createElement("p");
    cost.textContent = `Cost: $${int.cost}`;
    divInt.appendChild(cost)
    const inputCost = document.createElement("input")
    inputCost.value = int.cost;
    divInt.appendChild(inputCost)

    const btnEdit = document.createElement("button");
    btnEdit.textContent = "Edit"
    btnEdit.setAttribute("class", "edit")
    btnEdit.addEventListener("click", event => {
        const poiObj = {
            placeId: int.place.id,
            name: inputTitle.value,
            description: inputDes.value,
            review: inputReview.value,
            cost: inputCost.value
        }
        API.putCall("interests", int.id, poiObj)
    })
    divInt.appendChild(btnEdit)

    const btnDel = document.createElement("button");
    btnDel.textContent = "Delete";
    btnDel.setAttribute("class", "delete")
    btnDel.addEventListener("click", event => {
        API.deleteCall("interests", int.id)
    })
    divInt.appendChild(btnDel);

    frag.appendChild(divInt)
    document.getElementById(`interest_${int.placeId}`).appendChild(frag)
}

export default printInterest
