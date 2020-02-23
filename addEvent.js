let addEB = document.getElementById("acceptEvent");
let exportDisplay = document.getElementById("displayID");

let exportDisplay2 = document.getElementById("displayID").textContent;

function clickButton()
{
    let getTextInput = document.getElementById("exportInput").value;

    console.log(getTextInput);
    console.log(exportDisplay2);

    exportDisplay.innerText = getTextInput;
}
addEB.addEventListener("click", clickButton);






