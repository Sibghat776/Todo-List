var myInput = document.querySelector("#myInput");
var myText = document.querySelector("#text");
var main = document.querySelector(".main")
function submitHandler() {
    console.log("Check Kar Raha Hun submit handler");
    var myDiv = document.createElement("div")
    myDiv.classList.add("listItem")
    myDiv.innerHTML = `<div class="text">
        <p id="text">${myInput.value}</p>
        </div>
        <div class="btns">
        <button onclick="editHandler(this)">Edit</button>
        <button onclick="deleteHandler(this)">Delete</button>
        </div>`
    main.appendChild(myDiv)
    myInput.value = ''
}

function deleteHandler(btn) {
    console.log("Checking delete Handler")
    let listItem = btn.closest(".listItem")
    listItem.remove()
    console.log(listItem)
    myInput.value = ''
}

function editHandler(btn) {
    let listItem = btn.closest(".listItem"); // Find the closest list item
    let myText = listItem.querySelector("#text"); // Get its text
    let myInput = document.querySelector("#myInput"); // Input field
    myInput.value = myText.innerHTML; // Copy text into input field
    myText.innerHTML = ''; // Clear the text temporarily

    // Set the button to UPDATE mode
    let input = document.querySelector(".input");
    input.children[1].innerHTML = "UPDATE";
    input.children[1].setAttribute("onclick", "updateHandler()");

    // Mark this list item as being edited
    listItem.setAttribute("data-editing", "true");
}
function updateHandler() {
    // Find the list item currently being edited
    let editingItem = document.querySelector('[data-editing="true"]');

    if (editingItem) {
        let myText = editingItem.querySelector("#text"); // Find its text element
        let myInput = document.querySelector("#myInput"); // Input field

        // Update the text with input value
        myText.innerHTML = myInput.value;

        // Clear the input field
        myInput.value = '';

        // Reset the button back to SUBMIT mode
        let input = document.querySelector(".input");
        input.children[1].innerHTML = "SUBMIT";
        input.children[1].setAttribute("onclick", "submitHandler()");

        // Remove the editing marker
        editingItem.removeAttribute("data-editing");
    }
}

// function editHandler(oneBtn) {
//     console.log("Checking Ho rha ha edit handler")
//     let myInput = document.querySelector("#myInput")
//     let listItem = oneBtn.closest(".listItem")
//     let myText = listItem.querySelector("#text")
//     console.log(myText.innerHTML)
//     myInput.value = myText.innerHTML
//     myText.innerHTML = ''
//     let input = document.querySelector(".input")
//     input.children[1].innerHTML = "UPDATE"
//     input.children[1].setAttribute("onclick", "updateHandler()")
// }
// function updateHandler() {
//     let myText = document.querySelector("#text")
//     let input = document.querySelector(".input")
//     let myInput = document.querySelector("#myInput")
//     myText.innerHTML = myInput.value
//     myInput.value = ''
//     input.children[1].innerHTML = "SUBMIT"
//     input.children[1].setAttribute("onclick", "submitHandler()")
// }
