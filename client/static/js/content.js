const classOverview=document.getElementById("classOverview");
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
        const getIdNum=document.getElementById(checkIds);
        getIdNum.addEventListener('click', (e) => {
            classOverview.className="hideClass";
            getPostById(checkDatas);
        })
    } 
}

renderHabits();

async function getPostById(data){
    console.log(data.habitname);
    console.log('working');
    const sec=document.getElementById('activity');
    const newHabitName=document.createElement('h2');
    const taskSitiuation=document.createElement('h2');
    const taskCount=document.createElement('h2');
    const newStrak=document.createElement('h2');
    const strakCount=document.createElement('h2');
    const addCount=document.createElement('button');

    newHabitName.textContent=`Your ${data.habitname} activity information`;
    taskSitiuation.textContent=`Task situation `;
    taskCount.textContent=`${addCountt} of ${data.frequency}`;
    newStrak.textContent=`Streak`;
    strakCount.textContent=data.streak;

    newHabitName.style.textAlign='center';
    taskSitiuation.style.textAlign='center';
    taskCount.style.textAlign='center';
    newStrak.style.textAlign='center';
    strakCount.style.textAlign='center';

    addCount.type='submit';
    addCount.textContent=data.current_count;


    sec.append(newHabitName);
    sec.append(taskSitiuation);
    sec.append(taskCount);
    sec.append(newStrak);
    sec.append(strakCount);
    // sec.append(addCount);



}


// When page is loaded, render habits
// window.onload = renderHabits