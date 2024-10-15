import { registerUser } from "./userManagement.js";

console.log("I'm in");

const tasks = [
    {
        'id': 1,
        'responsible': 'Rares',
        'description': 'Do the dishes',
        'status': 'Pending'
    },
    {
        'id': 2,
        'responsible': 'Tudor',
        'description': 'Do the homework',
        'status': 'Done'
    },
    {
        'id': 3,
        'responsible': 'Alex',
        'description': 'Do some pushups',
        'status': 'In progress'
    }
]

function printTasks(tasks){
    tasks.forEach(element => {
        console.log(`Responsible: ${element.responsible}`,
        `Description: ${element.description}`)
    });
}


function displayTasks(tasks){
    const container = document.getElementById("task-container")
    if(tasks.length === 0){
        const noTaskWarning = document.createElement('p')
        noTaskWarning.textContent = 'No tasks available'
        container.appendChild(noTaskWarning)
    } else{
        const tasksList = document.createElement("ul")
        tasks.forEach(element => {
            const taskItem = document.createElement("li")
            const taskId = document.createElement('div')
            taskId.textContent = element.id
            taskItem.append(taskId)

            const taskResponsible = document.createElement('div')
            taskResponsible.textContent = element.responsible
            taskItem.append(taskResponsible)

            const taskDescription = document.createElement('div')
            taskDescription.textContent = element.description
            taskItem.append(taskDescription)

            const taskStatus = document.createElement('div')
            taskStatus.textContent = element.status
            taskItem.append(taskStatus)


            tasksList.appendChild(taskItem)
        })
        container.appendChild(tasksList)
    }
}




printTasks(tasks)
displayTasks(tasks)

const registerForm = document.getElementById("register")
registerForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    let user = {}
    user.name = document.getElementById("register-name").value.trim()
    user.email = document.getElementById("register-email").value.trim()
    user.password = document.getElementById("register-password").value.trim()

    registerUser(user)
})