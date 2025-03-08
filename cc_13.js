//Task 2 Adding Employee Cards Dynamically

function addEmployeeCard(name,position){
    const employeeContainer=document.getElementById("employeeContainer")
    const card=document.createElement('div');
    card.setAttribute("class","employee-card");
    card.classList.add('employee-card');

    const employeeName=document.createElement('h2');
    employeeName.textContent=name;

    const employeePosition=document.createElement('p');
    employeePosition.textContent=position;

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

addEmployeeCard("Johnny Walker","Technician");
addEmployeeCard("Jim Beam","Advisor");
addEmployeeCard("Jack Daniels","Researcher");
addEmployeeCard("Elijah Craig","Analyst");
