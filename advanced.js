function addAdvancedEventListeners() {
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
    // En strängifiering. Viktig kunskap
    const personAsString = JSON.stringify(person);
    localStorage.setItem('person', personAsString);
}

function showPersonFromLS() {
    const personAsString = localStorage.getItem('person');
    const person = JSON.parse(personAsString);

    const placeholder = document.getElementById('placeholderObject');
    //OBS
    //placeholder.innerText = personAsString;
    placeholder.innerText = person.age;
    //console.log(personAsString)
}

// console.log('advanced.js');

//export function och import function mellan olika js.
//moduler. kommer senare. 