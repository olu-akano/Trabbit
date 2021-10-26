async function renderHabits(){
    try {
        // Retrieve user's stored habits
        // const habits = await getAllHabits();
        const habits = {"id":"6176be0038f71fecad35da56","habitname":"exercising","streak":2,"current_count":10,"frequency":5};
        // Render habits on page
        render(habits)
    } catch(err) {
        console.warn(err);
    }
}

async function render(data){

    const table=document.getElementById('habits-textcontent');
    const tableRow_1=document.createElement('td');
    tableRow_1.textContent=`\u2022`;
    const tableRow_2=document.createElement('td');
    tableRow_2.textContent=data.habitname;
    const tableRow_3=document.createElement('td');
    tableRow_3.textContent='More info...';
    tableRow_3.className='more-info-btn';
    const tableRow_4=document.createElement('td');
    const emojy="🔥";
    tableRow_4.textContent=`Streak: ${data.streak} ${emojy} `;

    table.append(tableRow_1);
    table.append(tableRow_2);
    table.append(tableRow_3);
    table.append(tableRow_4);
    




}

renderHabits();

// When page is loaded, render habits
// window.onload = renderHabits