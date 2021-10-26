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
    const tableRow=document.createElement('tr');
    tableRow.className="habit";
    const tableData_1=document.createElement('td');
    tableData_1.textContent=`\u2022`;
    const tableData_2=document.createElement('td');
    tableData_2.textContent=data.habitname;
    const tableData_3=document.createElement('td');
    tableData_3.textContent='More info...';
    tableData_3.className='more-info-btn';
    const tableData_4=document.createElement('td');
    const emojy="🔥";
    tableData_4.textContent=`Streak: ${data.streak} ${emojy} `;

    tableRow.append(tableData_1);
    tableRow.append(tableData_2);
    tableRow.append(tableData_3);
    tableRow.append(tableData_4);

    table.append(tableRow);
    




}

renderHabits();

// When page is loaded, render habits
// window.onload = renderHabits