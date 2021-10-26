// Retrieve random inspirational quote
async function getQuote(){
    try {
        const quotesJSON = await fetch("https://type.fit/api/quotes");
        const quotes = await quotesJSON.json();
        const quote = quotes[Math.floor(Math.random()*quotes.length)];
        return quote
    } catch(err) {
        console.warn(err);
    }
}

// Get user's habits
async function getAllHabits(){
    try {
        const options = {
            headers: new Headers({'Authorization': localStorage.getItem('token')}),
        }
        const r = await fetch('http://localhost:3000/habits', options);
        const data = await r.json();
        console.log(data);
        if(data.err){
            console.warn(data.err);
            logout();
        }
        return data;
    } catch(err) {
        console.warn(err);
    }
}

//Post user's new habit
const form = document.getElementById('habit-form');

form.addEventListener('submit', addNewHabit)

async function addNewHabit(e) {
    e.preventDefault();
    try {
        
        //for loop to get the right habit form
        let habit = "";
        for(i = 1; i < form.length - 4; i++) {
            if(!!e.target[i].value) {
                habit = e.target[i].value
            }
        }

        newHabit = {
            habitname: habit,
            frequency: e.target[4].value,
            currentcount: 0,
            streak: 0,
            // description: e.target[5].value ---Commented out for now
        };
        console.log(newHabit);
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newHabit)
        };

        const response = await fetch('http://localhost:3000/habits', options);
        const data = await response.json();

    } catch(err) {
        console.warn('The error is:', err)
    }
}
