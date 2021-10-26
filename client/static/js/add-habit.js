////Form selectors load based on what is chosen
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
        case 'exercise':
            exerciseDiv.style.display = 'initial';
            dietDiv.style.display = 'none';
            hobbyDiv.style.display = 'none';            
            break;
        case 'dietary':
            exerciseDiv.style.display = 'none';
            dietDiv.style.display = 'initial';
            hobbyDiv.style.display = 'none';           
            break;
        case 'hobby':
            exerciseDiv.style.display = 'none';
            dietDiv.style.display = 'none';
            hobbyDiv.style.display = 'initial';
            
            break;
        default:
            console.log('number 4', categoryType);
            break;        
    }        
} 


//Show the frequency div after a habbit is chosen
exercise.onchange = () => frequencyDiv.style.display = 'initial';
diet.onchange = () => frequencyDiv.style.display = 'initial';
hobby.onchange = () => frequencyDiv.style.display = 'initial';


//Show the description text field and submit button once frequncy is selected
frequency.onchange = () => {
    description.style.display = 'initial';
    submit.style.display = 'initial';
}