let header = document.getElementById("page-header");
let saywhat = document.getElementById("output");

// mouse over on yoda to display text
function handleHeaderMouseEvent(event){
    // console.log("event", event.target);
    saywhat.innerHTML = "the force is strong with this one"
}

// mouseout to display other text
function handleHeaderMouseOut(event) {
    saywhat.innerHTML = "remember the force will be with you always."
}

let listItems = document.getElementsByClassName("list-item");

// take a movie from the list and make it ready to listen for a click
for(var i = 0; i < listItems.length; i++){
    listItems.item(i).addEventListener("click", handleClick);
}

// return the yoda quote pluse variables upon a MouseEvent, in this case, on "click"
function handleClick(MouseEvent) {
    let elementText = MouseEvent.target.innerHTML
    saywhat.innerHTML = "humm, " + elementText + " clicked you have";
}

// listens for events to happen
header.addEventListener("mouseover", handleHeaderMouseEvent);
header.addEventListener("mouseout", handleHeaderMouseOut)