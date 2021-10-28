const classOverview=document.getElementById("classOverview");
const table=document.getElementById('habits-textcontent');

const checkIds=[];
const checkDatas=[];
let count=0;

function welcomeUser(){
    const username = localStorage.getItem('username');
    const welcome = document.getElementById('welcome');
    welcome.textContent = `Welcome to your Profile, ${username}!`;
}

async function renderHabits(){
    try {
        const habits = await getUserHabits();
        // Clear any old renders
        table.innerHTML = "";

        for(var i=0;i< habits.length; i++){
            render(habits[i])
        }

    } catch(err) {
        console.warn(err);
    }
}

async function render(data){

    const tableRow=document.createElement('tr');
    tableRow.className="habit";
    const tableData_1=document.createElement('td');
    tableData_1.textContent=`\u2022`;
    tableData_1.className = "bulletpoint-row";
    const tableData_2=document.createElement('td');
    tableData_2.textContent=data.habitname;
    tableData_2.className = "name-row";
    const tableData_3=document.createElement('td');
    tableData_3.textContent='More info...';
    tableData_3.className='more-info-btn';
    tableData_3.id='more-info-btn-'+count;
    checkIds.push(tableData_3.id);
    const tableData_4=document.createElement('td');
    const emojy="🔥";
    tableData_4.textContent=`Streak: ${data.streak} ${emojy} `;
    tableData_4.className = "emoji-row";

    tableRow.append(tableData_1);
    tableRow.append(tableData_2);
    tableRow.append(tableData_3);
    tableRow.append(tableData_4);

    table.append(tableRow);
    checkDatas.push(data);

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

async function getPostById(givenData){
    const sec=document.getElementById('activity');
    const section=document.createElement('section');
    const newHabitName=document.createElement('h2');
    const description=document.createElement('h2');
    const taskSitiuation=document.createElement('h2');
    const taskCount=document.createElement('h2');
    const newStreak=document.createElement('h2');
    const streakCount=document.createElement('h2');
    const addCount=document.createElement('button');
    const deleteButton=document.createElement('button');
    const btnDiv = document.createElement('div');
    const contentDiv = document.createElement('div')
       

    const habit = await getHabit(givenData.id);
    postHabit(habit)

    function postHabit(data){
        const backButton=document.createElement('button');
    
        let currentCount=data.current_count;
        let streakData = data.streak;
    
        newHabitName.textContent=`${data.habitname} details`;
        if(data.description){
            description.textContent=`${data.description}`;
        }      
        taskSitiuation.textContent=`Tracker:`;
        taskCount.textContent=`${currentCount} of ${data.frequency}`;
        newStreak.textContent=`Streak`;
        streakCount.textContent=data.streak;
    
        newHabitName.style.textAlign='center';
        taskSitiuation.style.textAlign='center';
        description.style.textAlign='center';
        taskCount.style.textAlign='center';
        newStreak.style.textAlign='center';
        streakCount.style.textAlign='center';
        
        section.id='post'
        section.className='showHabit';
        backButton.type='submit';
        backButton.textContent="Back";        
        backButton.className="showHabit";
        
        // Set id/class for each element of the more info page        
        backButton.id="backBtn";

        contentDiv.className = 'center-flex-container'

        newHabitName.id = 'infoHeader';
        newHabitName.className = 'infoPosition infoContent';

        description.id = 'infoDescription';
        description.className = 'infoPosition infoContent';

        taskSitiuation.id = 'infoTrackerHeader';
        taskSitiuation.className = 'infoPosition';

        taskCount.id = 'infoTracker';
        taskCount.className = 'infoPosition infoContent';

        newStreak.id = 'infoStreakHeader';
        newStreak.className = 'infoPosition';

        streakCount.id = 'infoStreak';
        streakCount.className = 'infoPosition infoContent';

        btnDiv.id = 'btnDiv';

        addCount.id = 'increaseCountBtn';
        addCount.className = 'infoBtn';

        deleteButton.id = 'deleteHabitBtn';
        deleteButton.className = 'infoBtn';

    
        addCount.type='submit';
        addCount.textContent="Completed Habit today!";
        deleteButton.type='submit';
        deleteButton.textContent="Delete Habit";
    
        section.append(backButton);
        section.append(newHabitName);
        section.append(description);
        section.append(taskSitiuation);
        section.append(taskCount);
        section.append(newStreak);
        section.append(streakCount);
        section.append(btnDiv);
        btnDiv.append(addCount);        
        btnDiv.append(deleteButton);
        contentDiv.append(section);
        sec.append(contentDiv);
       
        addCount.addEventListener('click', () => {
            currentCount++;
            if (currentCount === data.frequency) {
                currentCount = 0;
                streakData++
                streakCount.textContent = streakData;
            }
            taskCount.textContent=`${currentCount} of ${data.frequency}`;
        })
        
        
        deleteButton.addEventListener('click', async () => {
            await deleteHabit(data);
            goBack();
        })
        
        backButton.addEventListener('click', async () => {
            // Update server with new current_count and streak
            const newData = {"current_count": currentCount, "streak": streakData}
            await addActivityCount(newData, data.id);
            goBack();
        })
    
        function goBack(){
            section.className='hideClass';
            backButton.className='hideClass';
            classOverview.className='showClass';
            renderHabits();
        }
    }  
}

// Run functions on page load
welcomeUser();
renderHabits();