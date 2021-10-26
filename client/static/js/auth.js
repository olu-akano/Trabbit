async function requestLogin(e){
    e.preventDefault();
    try {
        // Get login form data
        const email = e.target.email.value;
        const password = e.target.password.value;
        const loginData = { email, password};
        // Make request to server
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginData)
        }
        const r = await fetch('http://localhost:3000/auth/login', options);
        const data = await r.json();
        if (!data.success){ throw new Error('Login not authorised'); };
        if (data.err){ throw new Error(data.err) }
        // Log user in
        login(data.token);
    } catch(err) {
        console.warn(err);
    }
}

async function requestRegistration(e){
    e.preventDefault();
    try {
        // Get form data
        const username = e.target.username.value;
        const email = e.target.newEmail.value;
        const password = e.target.newPassword.value;
        const regData = { username, email, password };
        // Make request to server
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(regData)
        }
        const r = await fetch('http://localhost:3000/auth/register', options);
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