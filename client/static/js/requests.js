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
        console.log('data');
        console.log(data[0]);
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
async function addNewHabit(e) {
    e.preventDefault();
    try {
        
        //for loop to get the right habit form
        let habit = "";
        for(i = 1; i < form.length - 3; i++) {            
            if(!!e.target[i].value) {
                habit = e.target[i].value
            }
        }

        newHabit = {
            habitname: habit,
            frequency: e.target[4].value,
            current_count: 0,
            streak: 0,
            description: e.target[5].value
        };
        console.log(newHabit);
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json", "Authorization": localStorage.getItem('token') },
            body: JSON.stringify(newHabit)
        };
        await fetch('http://localhost:3000/habits', options);
        console.alert('New habit added!')

    } catch(err) {
        console.warn('The error is:', err)
    }
}
