async function requestLogin(e){
    try {
        // Get login form data
        const email = e.target.email.value;
        const password = e.target.password.value;
        const loginData = { email, password };
        // Make request to server
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
        if (data.err){ throw new Error(data.err) }
        // Log user in
        login(data.token);
    } catch(err) {
        console.warn(err);
    }
}

async function requestRegistration(e){
    try {
        // Get form data
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const regData = { username, email, password };
        // Make request to server
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(regData)
        }
        const r = await fetch(`${server}/auth/register`, options);
        if(r.status === 403){
            window.alert("Email already has an account!");
            throw new Error('Registration not authorised');
        };
        const data = await r.json();
        if (data.err){ throw new Error(data.err) }
        requestLogin(e);
    } catch(err) {
        console.warn(err);
    }
}

function login(token){
    try{
        const user = jwt_decode(token);
        localStorage.setItem("token", token);
        localStorage.setItem("username", user.username);
        localStorage.setItem("userEmail", user.email);
        window.location.href = "./userpage.html"
    } catch(err) {
        console.warn(`Error in logging in: ${err}`);
    }
}