window.addEventListener('load', start);

function start() {
    addEventListeners();
}

function addEventListeners() {
    const saveButton = document.getElementById('saveObject');
    const showButton = document.getElementById('showObject');

    saveButton.onclick = savePersonToLS;
    showButton.onclick = showPersonFromLS;
}

function savePersonToLS() {
    // console.log('save')
    const person = {
        firstname: "Jonas",
        lastname: "Glingert",
        age: 36,
        likesBeer: true,
        friends: ["Timmy", "Thaksin", "Daniel"]
    };

    localStorage.setItem('person', person);
}

function showPersonFromLS() {
    console.log('show')
}

// console.log('advanced.js');

//export function och import function mellan olika js.
//moduler. kommer senare. 