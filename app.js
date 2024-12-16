var myInput = document.querySelector("#myInput");
var myText = document.querySelector("#text");
var main = document.querySelector(".main")
function submitHandler() {
    console.log("Check Kar Raha Hun");
        var myDiv = document.createElement("div")
        myDiv.classList.add("listItem")
        myDiv.innerHTML = `<div class="text">
        <p id="text">${myInput.value}</p>
        </div>
        <div class="btns">
        <button>Edit</button>
        <button onclick="deleteHandler(this)">Delete</button>
        </div>`
        main.appendChild(myDiv)
        myInput.value = ''
}

function deleteHandler(btn) {
    console.log("Check")
    let listItem = btn.parentElement.parentElement.parentElement.children[2].remove()
    listItem.remove()
}