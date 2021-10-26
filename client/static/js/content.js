
let count=2;

async function renderHabits(){
    try {
        // Retrieve user's stored habits
        console.log('renderHabits');
        const habits = await getAllHabits();
        // const habits = {"id":"6176be0038f71fecad35da56","habitname":"exercising","streak":2,"current_count":10,"frequency":5};
        // Render habits on page
        console.log(habits.length); 
        // habits.map(d => render(d))
        // console.log(habits.ops[0]);
        for(var i=0;i< habits.length; i++){
            // console.log(habits[i]);
            console.log(`num: ${i}`);
            render(habits[i])
        }
        // console.log('habits[0]');
        // console.log(habits[0]);
        //  console.log(habits[1]);
        // render(habits[0]);
        // render(habits[1]);
        
    } catch(err) {
        console.warn(err);
    }
}

async function render(data){

    count++;

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
    tableData_3.id='more-info-btn-'+count;
    console.log(tableData_3);
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

// for(var i=0; i < count; i++){

//     text.push(`more-info-btn-${i+1}`);
//     textSelect.push(document.getElementById(`${text[i]}`));
//     console.log(text[i]);
//     textSelect[i].addEventListener('click', (e)=> {
//         textSelect[i].style.backgroundColor="red";
//     })
// }



// When page is loaded, render habits
// window.onload = renderHabits