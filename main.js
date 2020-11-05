window.onload = main;

function main() {
    console.log('its working..')
}

function addEventListeners() {
    const buttonSave = document.getElementById('save');
    const buttonShow = document.getElementById('show');

    buttonSave.onclick = saveRandomNumberToLS;
    buttonShow.onclick = printRandomNumberFromLS;
}

function saveRandomNumberToLS() {
    const randomNumber = Math.random();
    // Samma sak 2 ggr
    // localStorage.randomNumber = randomNumber;
    localStorage.setItem('randomNumber', randomNumber);
}

function printRandomNumberFromLS() {

}