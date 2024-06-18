const currentDateParagraph = document.getElementById('current-date')
const dateOptionsSelectElement = document.getElementById("date-options")
const hoursPara = document.querySelector(".hours")
const minutesPara = document.querySelector(".minutes")
const secondsPara = document.querySelector(".seconds")
currentDateParagraph.textContent = setDate()
console.log(dateOptionsSelectElement.value);
dateOptionsSelectElement.addEventListener("change", (e) => {
   
    console.log(e.target.value);
    switch (dateOptionsSelectElement.value) {
        case 'yyyy-mm-dd':
            currentDateParagraph.textContent = setDate().split("-").reverse().join("-")

            break;

        default:
            currentDateParagraph.textContent = setDate()
            break
    }

})

function setDate() {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const formattedDate = `${day}-${month}-${year}`;
    hoursPara.textContent = hours + ":"
    minutesPara.textContent = minutes + ":"
    secondsPara.textContent = seconds;
    return formattedDate
}

setInterval(setDate, 1000);