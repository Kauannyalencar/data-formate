
const currentDateParagraph = document.getElementById('current-date')
const dateOptionsSelectElement = document.getElementById("date-options")
const hoursPara = document.querySelector(".hours")
const minutesPara = document.querySelector(".minutes")
const secondsPara = document.querySelector(".seconds")
currentDateParagraph.textContent = setDate()
console.log(dateOptionsSelectElement.value);
dateOptionsSelectElement.addEventListener("change", (e) => {
    switch (dateOptionsSelectElement.value) {
        case 'yyyy-mm-dd':
            currentDateParagraph.textContent = setDate().split("-").reverse().join("-")
            break;
        default:
            currentDateParagraph.textContent = setDate()
            break

const currentDateParagraph = document.getElementById('current-date') 
const dateOptionsSelectElement = document.getElementById("date-options")
const date = new Date()
const day = date.getDate()
const month = date.getMonth() + 1
const year = date.getFullYear()
const hours = date.getHours()
const minutes = date.getMinutes()


const formattedDate = `${day}-${month}-${year}`;

currentDateParagraph.textContent = formattedDate
console.log(dateOptionsSelectElement.value);
dateOptionsSelectElement.addEventListener("change", ()=>{
    switch (dateOptionsSelectElement.value) {
        case 'yyyy-mm-dd':
            currentDateParagraph.textContent = formattedDate.split("-").reverse().join("-")
        
            break;
    
            case "mm-dd-yyyy-h-mm":
       currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
                break;
            default:
                currentDateParagraph.textContent = formattedDate
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

