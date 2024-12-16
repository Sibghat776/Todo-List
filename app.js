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
        <button onclick="editHandler()">Edit</button>
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

function editHandler() {
    console.log("Checking Ho rha ha edit handler")
    let myText = document.querySelector("#text")
    let myInput = document.querySelector("#myInput")
    console.log(myText.innerHTML)
    myInput.value = myText.innerHTML
    myText.innerHTML = ''
    let input = document.querySelector(".input")
    input.children[1].innerHTML = "UPDATE"
    input.children[1].setAttribute("onclick", "updateHandler()")
}
function updateHandler() {
    let myText = document.querySelector("#text")
    let input = document.querySelector(".input")
    let myInput = document.querySelector("#myInput")
    myText.innerHTML = myInput.value
    myInput.value = ''
    input.children[1].innerHTML = "SUBMIT"
    input.children[1].setAttribute("onclick", "submitHandler()")
}