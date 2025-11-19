const number = document.getElementById("genNumber")

function generateNumber() {
    let generatedNumber = Math.floor(Math.random() * 11)
    number.innerHTML = generatedNumber
}