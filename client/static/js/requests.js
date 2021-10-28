// const server = "http://localhost:3000";  // localhost server
const server = "https://trabbit-server.herokuapp.com";  // heroku server
const username = localStorage.getItem('username');

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
async function getUserHabits(){
    try {
        const options = {
            headers: new Headers({'Authorization': localStorage.getItem('token')}),
        }
        const r = await fetch(`${server}/habits/users/${username}`, options);
        const data = await r.json();
        console.log('data');
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
            username: username,
            habitname: habit,
            description: e.target[5].value,
            current_count: 0,
            frequency: parseInt(e.target[4].value),
            streak: 0
        };
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json", "Authorization": localStorage.getItem('token') },
            body: JSON.stringify(newHabit)
        };
        const r = await fetch(`${server}/habits`, options);
        const addedHabit = await r.json();
        console.log(addedHabit);
        window.alert('New habit added!');
        location.reload();
    } catch(err) {
        console.warn('The error is:', err)
    }
}
