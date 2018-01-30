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



// make a flashy yoda ascci art
var yodaImage = document.getElementById("theYoda");

// change color
document.getElementById("change-color").addEventListener("click", () => {
    yodaImage.classList.toggle("flashy");
});

// make bigger
document.getElementById("force-lots-of")
    .addEventListener("click", () => {
        yodaImage.classList.toggle("moreforce");
});

// add border
document.getElementById("add-border").addEventListener("click", () => {
    yodaImage.classList.toggle("bordered");
});

// use an event listener to show where you clicked (on a list item)
document.getElementById("starwars").addEventListener("click", (event) => {
    if (event.target.tagName.toLowerCase() === "li"){
        console.log("You clicked on an <li> item");
    }

    if (event.target.className == "list-item") {
        console.log("you clicked on a list-item element")
    }
});

var quotesArray = [
    "A long time ago in a galaxy far, far away…",
    "Use the force, Luke.",
    "The force is strong with this one.",
    "Do. Or do not. There is no try.",
    "Fear is the path to the dark side.",
    "Someday I will be the most powerful Jedi ever.",
    "You were the chosen one!"
]


quotesArray.forEach( (quote, index) => {
    // creating a div for our quotes that gives each quote a unique ID
    let quoteBlock = `<div id="quote--${index}">
                    <h3>"${quote}" - Star Wars</h3>
                    </div>`;

    // setting inner html equal to the quoteBlock 
    let quoteDiv = document.createElement("div");
    quoteDiv.innerHTML = quoteBlock;

    // uses info from the dom to give the quoteDiv somewhere to go
    document.getElementById("sickItHere").appendChild(quoteDiv);

    // finds the unique ID divs on the DOM and gives them a variable name
    let quoteDom = document.getElementById(`quote--${index}`);

    // adds accent style onto the unique divs from directly above
    quoteDom.addEventListener("click", () => {
        event.currentTarget.classList.add("accent");
    });
});