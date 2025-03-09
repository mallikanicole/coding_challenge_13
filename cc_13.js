//Task 2 Adding Employee Cards Dynamically

function addEmployeeCard(name,position){//building employee card
    const employeeContainer=document.getElementById("employeeContainer")
    const card=document.createElement('div');
    card.setAttribute("class","employee-card");
    card.classList.add('employee-card');

    //creating heading of employee card
    const employeeName=document.createElement('h2');
    employeeName.textContent=name;

    //creating paragraph for employee position
    const employeePosition=document.createElement('p');
    employeePosition.textContent=position;

    //creating remove button
    const removeButton=document.createElement('button');
    removeButton.textContent='Remove';
    removeButton.setAttribute("class","remove-button");
    removeButton.addEventListener('click',()=>{
        employeeContainer.removeChild(card);
    });

    card.appendChild(employeeName);
    card.appendChild(employeePosition);
    card.appendChild(removeButton);

    employeeContainer.appendChild(card);

};

//adding employees
addEmployeeCard("Johnny Walker","Technician");
addEmployeeCard("Jim Beam","Advisor");
addEmployeeCard("Jack Daniels","Researcher");
addEmployeeCard("Elijah Craig","Analyst");

//Task 4 Implementing Removal of Employee Cards with Event Bubbling

document.querySelectorAll(".employee-card").forEach(card=>{
    card.addEventListener("click",(event)=>{
        console.log("Employee Card Clicked");
        event.stopPropagation();//prevents bubbling to parent
    });
})


//Task 5 Inline Editing of Employee Details

const editButton=createElement("button");
editButton.textContent="Edit";

editButton.addEventListener("click",function(){
    const inputName=document.createElement("input");
    inputName.value=heading.textContent;
    const inputPosition=document.createElement("input");
    inputPosition.value=paragraph.textContent;
    const saveButton=document.createElement("button");
    saveButton.textContent='Save';
    card.appendChild(inputPosition);

    card.appendChild(inputName);
    card.appendChild(inputPosition);
    card.appendChild(saveButton);
    card.appendChild(removeButton);

    saveButton.addEventListener("click",function(){
        heading.textContent=inputName.value;
        paragraph.textContent=inputPosition.value;

        card.inner.HTML="";
        card.appendChild(heading)
        card.appendChild(paragraph)
        card.appendChild(removeButton)
        card.appendChild(editButton)
    })
})
editButton();


//Task 3 Converting NodeLists to Arrays for Bulk Updates

function addBorderCards(){
    const employeeCards=document.querySelectorAll('employee-card');
    const employeeCardsArray=Array.from(employeeCards);

    employeeCardsArray.forEach(card=>{
       const p=card.querySelector("p");
       if (p){
        p.style.backgroundColor=backgroundColor
       };

    });

};
addBorderCards();