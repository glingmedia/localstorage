window.addEventListener('load', main);

// let x = 3
// console.log(main.js, x)

function main() {
    addEventListeners();
    addAdvancedEventListeners();
}

function addEventListeners() {
    const buttonSave = document.getElementById('save');
    const buttonShow = document.getElementById('show');
    const buttonClear = document.getElementById('clear');

    buttonSave.onclick = saveRandomNumberToLS;
    buttonShow.onclick = printRandomNumberFromLS;
    buttonClear.onclick = clearRandomNumberFromLS;
}

function saveRandomNumberToLS() {
    const randomNumber = Math.random();
    // Samma sak 2 ggr
    // localStorage.randomNumber = randomNumber;
    localStorage.setItem('randomNumber', randomNumber);
}

function printRandomNumberFromLS() {
    const randomNumber = localStorage.getItem('randomNumber');

    const placeholder = document.getElementById('placeholder');
    placeholder.innerText = randomNumber;
    
    //samma? printas dock flera gånger!
    //placeholder.append(randomNumber + ', ');
}

function clearRandomNumberFromLS() {
    localStorage.removeItem('randomNumber');

    const placeholder = document.getElementById('placeholder');
    placeholder.innerText = "";
}