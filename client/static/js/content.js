const classOverview=document.getElementById("classOverview");
const header=document.querySelector("header");

const backButton=document.createElement('button');

const checkIds=[];
const checkDatas=[];
let count=0;

async function renderHabits(){
    try {
        console.log('renderHabits');
        const habits = await getUserHabits();
        console.log(habits.length); 

        for(var i=0;i< habits.length; i++){
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

async function getPostById(givenData){
    const sec=document.getElementById('activity');
    const section=document.createElement('section');
    const newHabitName=document.createElement('h2');
    const description=document.createElement('h2');
    const taskSitiuation=document.createElement('h2');
    const taskCount=document.createElement('h2');
    const newStrak=document.createElement('h2');
    const strakCount=document.createElement('h2');
    const addCount=document.createElement('button');

    const options = {
        method: 'GET',
        headers:new Headers( { 'Authorization': localStorage.getItem('token') }),
    };
    await fetch(`${server}/habits/${givenData.id}`, options)
        .then(d => d.json())
        .then(data => postHabit(data))

    function postHabit(data){
    
        let currentCount=data.current_count;
    
        newHabitName.textContent=`Your ${data.habitname} activity information`;
        if(data.description){
            description.textContent=`*(${data.description})*`;
        }      
        taskSitiuation.textContent=`Task situation `;
        taskCount.textContent=`${currentCount} of ${data.frequency}`;
        newStrak.textContent=`Streak`;
        strakCount.textContent=data.streak;
    
        newHabitName.style.textAlign='center';
        taskSitiuation.style.textAlign='center';
        description.style.textAlign='center';
        taskCount.style.textAlign='center';
        newStrak.style.textAlign='center';
        strakCount.style.textAlign='center';
        addCount.style.textAlign='center';
        addCount.style.transform='translateX(27vw)';
        
        section.id='post'
        section.className='showHabit';
        backButton.type='submit';
        backButton.textContent="Back";
        backButton.id="showButton";
        backButton.className="showHabit";
    
    
        addCount.type='submit';
        addCount.textContent="Add count";
    
        section.append(backButton);
        section.append(newHabitName);
        section.append(description);
        section.append(taskSitiuation);
        section.append(taskCount);
        section.append(newStrak);
        section.append(strakCount);
        section.append(addCount);
        sec.append(section);


        async function addActivityCount(data) {
            try{
                    const v={"current_count": ++data.current_count,"streak": data.streak};
                    const options = {
                    method: "PATCH",
                    headers:new Headers({"Authorization":localStorage.getItem("token"),
                                        "Content-Type":"application/json"}),
                    body:JSON.stringify(v)
                };
              
                const updatedData=await fetch(`${server}/habits/${data.id}`, options)
                const updatedDataJson=await updatedData.json();
                console.log(updatedDataJson);
            }
            catch(err){
                console.log(err);
            }
            
        };
       
        addCount.addEventListener('click', () => {

            addActivityCount(data);
            currentCount++;
            taskCount.textContent=`${currentCount} of ${data.frequency}`;
        })
    
    
        backButton.addEventListener('click',() => {
            goBack();
        })
    
        function goBack(){
            section.className='hideClass';
            backButton.className='hideClass';
            classOverview.className='showClass';
        }
    }
    
   


   
}