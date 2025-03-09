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


//Task 3 Converting NodeLists to Arrays for Bulk Updates

function addBorderCards(){
    const employeeCards=document.querySelectorAll('employee-card');
    const employeeCardsArray=Array.from(employeeCards);

    employeeCardsArray.forEach(card=>{
       const p=card.querySelector("p");
       if (p){
        p.style.backgroundColor='aqua'
       };

    });

};
addBorderCards();