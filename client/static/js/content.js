async function renderHabits(){
    try {
        // Retrieve user's stored habits
        const habits = await getAllHabits();
        // Render habits on page
    } catch(err) {
        console.warn(err);
    }
}

// When page is loaded, render habits
// window.onload = renderHabits