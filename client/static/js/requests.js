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
        if(data.err){
            console.warn(data.err);
            logout();
        }
        return data;
    } catch(err) {
        console.warn(err);
    }
}

// Get habit by id
async function getHabit(id){
    try {
        const options = {
            method: 'GET',
            headers:new Headers( { 'Authorization': localStorage.getItem('token') }),
        };
        const r = await fetch(`${server}/habits/${id}`, options);
        const habit = await r.json()
        return habit;
    } catch (err) {
        console.warn(`Could not retrieve habit: ${err}`);
    }
}

// Post user's new habit
async function postHabit(habit){
    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json", "Authorization": localStorage.getItem('token') },
            body: JSON.stringify(habit)
        };
        await fetch(`${server}/habits`, options);
        return {success: true}
    } catch(err) {
        console.warn(`Error adding post: ${err}`);
    }
}

// Delete habit
async function deleteHabit(data){
    try{
        const options = {
            method: "DELETE",
            headers:new Headers({"Authorization":localStorage.getItem("token"),
            "Content-Type":"application/json"}),
        };
        await fetch(`${server}/habits/${data.id}`, options);
    } catch(err) {
        console.warn(err);
    }
}

// Update habit counter data
async function addActivityCount(data, id) {
    try{
        const options = {
            method: "PATCH",
            headers:new Headers({"Authorization":localStorage.getItem("token"),
                                "Content-Type":"application/json"}),
            body:JSON.stringify(data)
        };
        await fetch(`${server}/habits/${id}`, options)
    } catch(err) {
        console.warn(err);
    }
};

// Request user login
async function userLogin(loginData){
    try{
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginData)
        }
        const r = await fetch(`${server}/auth/login`, options);
        if (r.status === 403){ 
            window.alert("Invalid login");
            throw new Error('Login not authorised');
        };
        const data = await r.json();
        return data
    } catch(err) {
        console.warn(err);
        return { err }
    }
}

// Request user registration
async function userRegistration(regData){
    try{
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(regData)
        }
        const r = await fetch(`${server}/auth/register`, options);
        if(r.status === 403){
            const e = await r.json();
            window.alert(e.error);
            throw new Error('Registration not authorised');
        };
        const data = await r.json();
        return data
    } catch(err) {
        console.warn(err);
        return { err }
    }
}