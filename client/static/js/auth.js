async function requestLogin(e){
    try {
        // Get login form data
        const email = e.target.email.value;
        const password = e.target.password.value;
        const loginData = { email, password };
        // Make request to server
        const data = await userLogin(loginData);
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
        const data = await userRegistration(regData);
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