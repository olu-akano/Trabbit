const checkIds=[];
let count=2;

async function renderHabits(){
    try {
        console.log('renderHabits');
        const habits = await getAllHabits();
        console.log(habits.length); 

        for(var i=0;i< habits.length; i++){
            console.log(`num: ${i}`);
            render(habits[i])
        }

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
    checkIds.push(tableData_3.id);
    const tableData_4=document.createElement('td');
    const emojy="🔥";
    tableData_4.textContent=`Streak: ${data.streak} ${emojy} `;

    tableRow.append(tableData_1);
    tableRow.append(tableData_2);
    tableRow.append(tableData_3);
    tableRow.append(tableData_4);

    table.append(tableRow);
    console.log(`checkId: ${checkIds}`);
    setID(checkIds)

    



    function setID(checkIds){
        for (let i =0 ; checkIds.length > i;  i++) {
            const getIdNum=document.getElementById(checkIds[i]);
            getIdNum.addEventListener('click', (e) => {
                console.log();
                getIdNum.style.backgroundColor="red";
                // getPostById(checkIds[i],selectPostID[i]);
            })
        }
    }

    
}

renderHabits();

async function zoomIn(data){

}

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