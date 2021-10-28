///----Form selectors load based on what is chosen----\\\

//All the required selectors
const categorySelector = document.getElementById('habit-category-selector');
const exerciseDiv = document.getElementById('exercise-habit');
const dietDiv = document.getElementById('diet-habit');
const hobbyDiv = document.getElementById('hobby-habit');
const frequencyDiv = document.getElementById('frequency-selector');
const description = document.getElementById('new-habit-description');
const submit = document.getElementById('new-habit-submit');
const exercise = document.getElementById('exercise-name');
const diet = document.getElementById('dietary-name');
const hobby = document.getElementById('hobby-name');
const frequency = document.getElementById('frequency');


//Shows the correct habits after category chosen
categorySelector.onchange = () => { 
    let categoryType = categorySelector.value;       
    switch(categoryType) {
        case 'Exercise':
            exerciseDiv.style.display = 'initial';
            dietDiv.style.display = 'none';
            hobbyDiv.style.display = 'none';
            diet.value = "";
            hobby.value = "";
            break;
        case 'Dietary':
            exerciseDiv.style.display = 'none';
            dietDiv.style.display = 'initial';
            hobbyDiv.style.display = 'none';     
            exercise.value = "";      
            hobby.value = "";
            break;
        case 'Hobby':
            exerciseDiv.style.display = 'none';
            dietDiv.style.display = 'none';
            hobbyDiv.style.display = 'initial'; 
            exercise.value = "";
            diet.value = "";           
            break;
        default:
            console.log('number 4', categoryType);
            break;        
    }        
} 

//Show the frequency div after a habbit is chosen
exercise.onchange = () => {
    frequencyDiv.style.display = 'initial'; 
    location.hash = 'bottom';
}

diet.onchange = () => {
    frequencyDiv.style.display = 'initial'; 
    location.hash = 'bottom';
}

hobby.onchange = () => {
    frequencyDiv.style.display = 'initial'; 
    location.hash = 'bottom';
}


//Show the description text field and submit button once frequncy is selected
frequency.onchange = () => {
    description.style.display = 'initial';
    submit.style.display = 'initial';
    location.hash = 'bottom';
}

///----Text counter for description box----\\\
const mainDiv = document.getElementById('character-counter');

countChars = (div) => {
    let len = description.value.length;
    div.innerHTML = `${len}/500`
}


///----Add new habit functionality----\\\

const form = document.getElementById('habit-form');

form.addEventListener('submit', addNewHabit)


///---On load reset the selectors to their defaults---\\\
window.onload = resetValues;

function resetValues() {
    categorySelector.value = "";
    exercise.value = "";
    diet.value = "";
    hobby.value = "";
    frequency.value = "";
    description.value = "";
}

///---When a drop down is loaded, bring the window down to the previous one---\\\

