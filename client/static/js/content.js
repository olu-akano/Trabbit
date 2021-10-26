const classOverview=document.getElementById("userpage-habits");
const checkIds=[];
const checkDatas=[];
let count=0;

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

    const table=document.getElementById('habits-textcontent');
    const tableRow=document.createElement('tr');
    tableRow.className="habit";
    const tableData_1=document.createElement('td');
    tableData_1.textContent=`\u2022`;
    tableData_1.style.width='10%';
    const tableData_2=document.createElement('td');
    tableData_2.textContent=data.habitname;
    tableData_2.style.width='50%';
    const tableData_3=document.createElement('td');
    tableData_3.textContent='More info...';
    tableData_3.className='more-info-btn';
    tableData_3.id='more-info-btn-'+count;
    tableData_3.style.width='20%';
    checkIds.push(tableData_3.id);
    const tableData_4=document.createElement('td');
    const emojy="🔥";
    tableData_4.textContent=`Streak: ${data.streak} ${emojy} `;

    tableRow.append(tableData_1);
    tableRow.append(tableData_2);
    tableRow.append(tableData_3);
    tableRow.append(tableData_4);

    table.append(tableRow);
    checkDatas.push(data);
    console.log(`checkData: ${checkDatas[0].streak}`);
    console.log(`checkId: ${checkIds}`);

    setID(checkIds[count],checkDatas[count])
    count++;

    function setID(checkIds,checkDatas){
        // for (let i =0 ; checkIds.length > i;  i++) {
            const getIdNum=document.getElementById(checkIds);
            getIdNum.addEventListener('click', (e) => {
                classOverview.className="hideClass";
                getPostById(checkDatas);
            })
        // }
    }

    
}

renderHabits();

async function getPostById(data){
    console.log(data.habitname);
    console.log('working');
    const div=document.getElementById('activity');
    const newHabitName=document.createElement('h2');
    const newCount=document.createElement('h2');
    const newFrequency=document.createElement('h2');
    const newStrak=document.createElement('h2');

    div.textContent='activity information';
    newHabitName.textContent=data.habitname;
    newCount.textContent=data.current_count;
    newFrequency.textContent=data.frequency;
    newStrak.textContent=data.streak;

    div.append(newHabitName);
    div.append(newCount);
    div.append(newFrequency);
    div.append(newStrak);

}


// When page is loaded, render habits
// window.onload = renderHabits