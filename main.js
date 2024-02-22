let input = document.querySelector("input[type=text]")
let add = document.querySelector(".add")
let tasksContainer = document.querySelector(".tasks-container")
let colorInput = document.querySelector("input[type=color]")
let mainColor = document.querySelector(":root")

input.focus()

if (mainColor !== null) {
    mainColor.style.setProperty('--main-color', localStorage.getItem('color'))
    colorInput.value = localStorage.getItem('color')
}

colorInput.addEventListener("blur", () => {
    mainColor.style.setProperty('--main-color', colorInput.value)
    localStorage.setItem('color' , colorInput.value)
})

add.addEventListener("click", () => {

    if (input.value === "") {
        alert("please enter a name for your task ^_^")
        input.focus()
    } 
    else {
        let task = document.createElement("div")
        task.setAttribute("class", "task")

        let taskName = document.createElement("p")
        taskName.className = "task-name"

        let taskText = document.createTextNode(input.value)
        taskName.appendChild(taskText)
        task.appendChild(taskName)

        taskName.addEventListener("click", () => {
            let oldText = taskName.innerText
            let NewText = prompt(`Choose a new name for your task ( " ${oldText} " )`, `${oldText}`)
            if (NewText !== "") { taskName.innerText = NewText }
            if (NewText === null) { taskName.innerText = oldText }
        })
        
        let del = document.createElement("button")
        let textDelete = document.createTextNode("Delete")
        del.setAttribute("class", "delete")
        del.appendChild(textDelete)
        task.appendChild(del)
        tasksContainer.appendChild(task)
                
        del.addEventListener("click", () => {
            if (confirm(`Are you sure you want to delete ( " ${taskName.innerText} " ) ?`) === true) {
                task.remove()
            }
        })

        input.value = ""
        input.focus()
    }

})