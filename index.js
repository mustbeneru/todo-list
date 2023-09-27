class ProjectManager {
    constructor() {
        this.projects = []
        this.selectedProject = null
    }

    addProject(name) {
        if (name.length > 15) {
            alert('Project name is too long!') 
            return
        } else if (name.length === 0)  {
            alert('Field should not be empty')
            return
        } else if (this.projects.some(project => project.name === name)) {
            alert('Project name already exists')
            return 
        }

        const newProject = new Project(name)
        this.projects.push(newProject)
        return newProject
    }

    selectProject(name) {
        this.selectedProject = this.projects.find(project => project.name === name)
        return this.selectedProject
    }

    removeProject(name) {
        console.log('Removing a project')
        this.projects.splice(name, 1)
    }

    saveToLocalStorage() {
        const dataToSave = {
            projects: this.projects,
            selectedProject: this.selectedProject,
        };
        localStorage.setItem('projectData', JSON.stringify(dataToSave));
    }

    // Load projects and selectedProject from local storage
    loadFromLocalStorage() {
        const data = JSON.parse(localStorage.getItem('projectData'));
        if (data) {
            this.projects = data.projects || [];
            this.selectedProject = data.selectedProject || null;
        }
    }

    // Remove data from local storage
    clearLocalStorage() {
        localStorage.removeItem('projectData');
    }

}
  
class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    addTodo(title, description, dueDate, priority) {
        const newTodo = new Todo(title, description, dueDate, priority)
        this.todos.push(newTodo)
        return newTodo
    }
    
    editTodo(index, title, description, dueDate, priority) {
        const edit = this.todos[index]
        edit.title = title
        edit.description = description
        edit.dueDate = dueDate
        edit.priority = priority
    }

    removeTodo(index) {
        this.todos.splice(index, 1)
    }
}

class Todo {
    constructor(title, description, dueDate, priority) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.status = false;
    }
}
 
class UI {
    constructor() {
        this.project = document.querySelector('.project-section')
        this.addProject = document.querySelector('.add-project')
        this.projectList = document.querySelector('.project-list-container')
        this.projectManager = new ProjectManager()
    }

    loadUI() {
        this.projectManager.loadFromLocalStorage();
        
        this.displayProjects()
        this.displayProjectContent()

        this.addProject.addEventListener('click', () => this.createProjectForm());
        this.projectList.addEventListener('click', (e) => {
            console.log(e)
            if (e.target.tagName === 'LI') {
                this.projectManager.selectProject(e.target.textContent)
                this.displayProjectContent()
            }
        })

        const todayButton = document.querySelector('.today-button');
        const thisWeekButton = document.querySelector('.this-week-button');
        const thisMonthButton = document.querySelector('.this-month-button');
    
        todayButton.addEventListener('click', () => this.displayTodoListsByDueDate('Today'));
        thisWeekButton.addEventListener('click', () => this.displayTodoListsByDueDate('This Week'));
        thisMonthButton.addEventListener('click', () => this.displayTodoListsByDueDate('This Month'));
    }

    saveDataToLocalStorage() {
        this.projectManager.saveToLocalStorage();
    }

    displayTodoListsByDueDate(dueDateFilter) {
        const contentDiv = document.getElementById('content')
        contentDiv.innerHTML = ''
    
        const dueDateTitle = document.createElement('h2')
        dueDateTitle.textContent = dueDateFilter
    
        const todoListContainer = document.createElement('div')
        todoListContainer.classList.add('todo-list-container')
    
        contentDiv.append(dueDateTitle, todoListContainer)
    
        // Filter and display todo lists based on its due date
        this.projectManager.projects.forEach((project) => {
            project.todos.forEach((todo) => {
                const dueDate = new Date(todo.dueDate)
                switch (dueDateFilter) {
                    case 'Today':
                        if (this.isToday(dueDate)) {
                            const todoItem = this.createTodoItem(todo)
                            todoListContainer.appendChild(todoItem)
                        }
                        break;
                    case 'This Week':
                        if (this.isThisWeek(dueDate)) {
                            const todoItem = this.createTodoItem(todo)
                            todoListContainer.appendChild(todoItem)
                        }
                        break
                    case 'This Month':
                        if (this.isThisMonth(dueDate)) {
                            const todoItem = this.createTodoItem(todo)
                            todoListContainer.appendChild(todoItem)
                        }
                        break
                }
            })
        })
    }
    

    isToday(date) {
        const today = new Date();
        return (
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
        );
    }
    
    isThisWeek(date) {
        const today = new Date();
        const nextWeek = new Date(today);
        nextWeek.setDate(today.getDate() + 7);
        return date >= today && date <= nextWeek;
    }
    
    isThisMonth(date) {
        const today = new Date();
        const nextMonth = new Date(today);
        nextMonth.setMonth(today.getMonth() + 1);
        return date >= today && date <= nextMonth;
    }
    

    displayProjectContent() {
        const contentDiv = document.getElementById('content')

        let projectSelected = this.projectManager.selectedProject
        if (projectSelected === null) contentDiv.innerHTML = ''

        if (projectSelected) {
            // Clear the content of the content div
            contentDiv.innerHTML = ''

            const projectTitle = document.createElement('h2')
            projectTitle.textContent = projectSelected.name
           
            const addTaskButton = document.createElement('button')
            addTaskButton.classList.add('add-task-btn')
            addTaskButton.textContent = 'Add Task'
            addTaskButton.addEventListener('click', () => {
                addTaskButton.classList.toggle('hidden')
                this.createTodoForm(todoInputContainer)  
            }) 
            
            const todoInputContainer = document.createElement('div')
            todoInputContainer.classList.add('todo-input-container')

            const todoListContainer = document.createElement('div')
            todoListContainer.classList.add('todo-list-container')

            contentDiv.append(projectTitle, addTaskButton, todoInputContainer, todoListContainer)

            // Display all todo lists
            this.displayTodoList(todoListContainer)
        }
    }

    displayTodoList(container) {
        let projectSelected = this.projectManager.selectedProject

        const todoList = document.createElement('ul')
        todoList.classList.add('todo-list')

        projectSelected.todos.forEach((todo) => {
            const todoItem = this.createTodoItem(todo)
            todoList.appendChild(todoItem)
        })

        container.appendChild(todoList)
    } 
            
    createTodoItem(todo) {
        let projectSelected = this.projectManager.selectedProject

        const todoItem = document.createElement('li')
        todoItem.classList.add('todo-item')

        // Create a priority label based on the todo's priority
        const priorityLabel = document.createElement('div')
        priorityLabel.classList.add('priority-label')

        this.updatePriorityColor(priorityLabel, todo.priority)

        const leftContainer = document.createElement('div')
        leftContainer.classList.add('left-container')

        const statusInput = document.createElement('input')
        statusInput.type = 'checkbox'
        statusInput.id = 'status'
        statusInput.required = true
        statusInput.addEventListener('click', () => {
            todoItem.classList.toggle('completed')
        })
        
        // Create a div to hold the task details
        const taskDetails = document.createElement('div')
        taskDetails.classList.add('task-details')

        const todoTitle = document.createElement('div')
        const todoDescription = document.createElement('div')
        const todoDuedate = document.createElement('div')

        todoTitle.textContent = todo.title
        todoDescription.textContent = todo.description
        todoDuedate.textContent = todo.dueDate

        // Create container for edit and delete buttons
        const editDeleteButtons = document.createElement('div')
        editDeleteButtons.classList.add('edit-delete-btn')

        // Create edit button
        const editButton = document.createElement('img')
        editButton.src = './assets/circle-edit-outline.svg'
        editButton.width = 30
        // When the Edit button is clicked, show the edit form
        editButton.addEventListener('click', () => {
            editForm.style.display = 'flex'
            taskDetails.style.display = 'none'
            priorityLabel.classList.add('hidden')
            statusInput.classList.add('hidden')
            editButton.classList.add('hidden')
            deleteButton.classList.add('hidden')
            todoItem.style.backgroundColor = 'transparent'

            
        })

        // Create a delete button
        const deleteButton = document.createElement('img')
        deleteButton.src = './assets/delete-circle-outline.svg'
        deleteButton.width = 30

        deleteButton.addEventListener('click', () => {
            projectSelected.removeTodo(projectSelected.todos.indexOf(todo))
            this.displayProjectContent()
        })

        editDeleteButtons.append(editButton, deleteButton)

        // Create an edit form
        const editForm = document.createElement('form')
        editForm.classList.add('edit-form')
        editForm.style.display = 'none' // Hide the form initially

        const editTitleInput = document.createElement('input')
        editTitleInput.type = 'text'
        editTitleInput.placeholder  = 'Task Title'
        editTitleInput.required = true
        editTitleInput.value = todo.title

        const editDescriptionInput = document.createElement('input')
        editDescriptionInput.type = 'text'
        editDescriptionInput.classList.add('description-input')
        editDescriptionInput.placeholder  = 'Description'
        editDescriptionInput.required = true
        editDescriptionInput.value = todo.description

        const editDueDateInput = document.createElement('input')
        editDueDateInput.type = 'date'
        editDueDateInput.value = todo.dueDate
        editDueDateInput.required = true

        const editPrioritySelect = document.createElement('select')

        const highOption = document.createElement('option')
        highOption.value = 'High'
        highOption.text = 'High'
        
        const mediumOption = document.createElement('option')
        mediumOption.value = 'Medium'
        mediumOption.text = 'Medium'
        
        const lowOption = document.createElement('option')
        lowOption.value = 'Low'
        lowOption.text = 'Low'

        editPrioritySelect.append(highOption, mediumOption, lowOption)
        editPrioritySelect.classList.add('priority-select')
        editPrioritySelect.value = todo.priority
    
        const saveButton = document.createElement('button')
        saveButton.classList.add('save-button')
        saveButton.textContent = 'Save'
        
        // When the Save button is clicked, update the task details
        saveButton.addEventListener('click', (e) => {
            e.preventDefault()
            
            if (editForm.checkValidity()) {
                deleteButton.classList.remove('hidden')
                editButton.classList.remove('hidden')
                statusInput.classList.remove('hidden')
                todoItem.style.backgroundColor = 'gray'
    
                const updatePriority = editPrioritySelect.value
    
                projectSelected.editTodo(
                    projectSelected.todos.indexOf(todo),
                    editTitleInput.value,
                    editDescriptionInput.value,
                    editDueDateInput.value, 
                    editPrioritySelect.value
                )
        
                this.updatePriorityColor(priorityLabel, updatePriority)
    
                todoTitle.textContent = todo.title
                todoDescription.textContent = todo.description
                todoDuedate.textContent = todo.dueDate
    
                // Update the displayed task details
                taskDetails.append(todoTitle, todoDescription, todoDuedate)
                
                // Hide the edit form and show the task details
                editForm.style.display = 'none'
                taskDetails.style.display = 'flex'
    
                priorityLabel.classList.remove('hidden')
            } else {
                if (editTitleInput.validity.valueMissing) {
                    editTitleInput.setCustomValidity('Please fill in this field');
                } else {
                    editTitleInput.setCustomValidity('');
                }
        
                if (editDescriptionInput.validity.valueMissing) {
                    editDescriptionInput.setCustomValidity('Please fill in this field');
                } else {
                    editDescriptionInput.setCustomValidity('');
                }

                // Trigger form validation to show the custom messages
                editForm.reportValidity();
            }

        });

        // Append elements to the edit form
        editForm.append(editTitleInput, editDescriptionInput, editDueDateInput, editPrioritySelect, saveButton)
        leftContainer.append(priorityLabel, statusInput,taskDetails)
        taskDetails.append(todoTitle, todoDescription, todoDuedate)
        // Append elements to the todo item
        todoItem.append(leftContainer, editDeleteButtons, editForm)  

        return todoItem
    }
         

    createTodoForm(container) {
        // Create a form for adding tasks
        const todoForm = document.createElement('form')
        todoForm.classList.add('task-form')

        // Create input fields for task details
        const titleInput = document.createElement('input')
        titleInput.type = 'text'
        titleInput.required = true
        titleInput.placeholder = 'Task Title'

        const descriptionInput = document.createElement('input')
        descriptionInput.type = 'text'
        descriptionInput.required = true
        descriptionInput.classList.add('description-input')
        descriptionInput.placeholder = 'Task Description'

        const dueDateInput = document.createElement('input')
        dueDateInput.type = 'date'
        dueDateInput.required = true

        // Create a select dropdown for priority
        const prioritySelect = document.createElement('select')
        prioritySelect.classList.add('priority-select')
        prioritySelect.required = true
        prioritySelect.placeholder = 'Priority'
        
        const highOption = document.createElement('option')
        highOption.value = 'High'
        highOption.text = 'High'
        
        const mediumOption = document.createElement('option')
        mediumOption.value = 'Medium'
        mediumOption.text = 'Medium'
        
        const lowOption = document.createElement('option')
        lowOption.value = 'Low'
        lowOption.text = 'Low'

        prioritySelect.append(highOption, mediumOption, lowOption)

        // Create a submit button for the task form
        const confirmButton = document.createElement('button')
        confirmButton.classList.add('confirm-btn')
        confirmButton.type = 'button';
        confirmButton.textContent = 'Confirm';
        confirmButton.addEventListener('click', (e) => {
            e.preventDefault()

            if (todoForm.checkValidity()) {
                this.projectManager.selectedProject.addTodo(
                    titleInput.value, 
                    descriptionInput.value,
                    dueDateInput.value, 
                    prioritySelect.value
                )
    
                const priorityLabel = document.createElement('div');
                priorityLabel.classList.add('priority-label');
        
                this.updatePriorityColor(priorityLabel, prioritySelect.value)
    
                // Update and display todo list in a project
                this.displayProjectContent()
            } else {
                if (titleInput.validity.valueMissing) {
                    titleInput.setCustomValidity('Please fill in this field');
                } else {
                    titleInput.setCustomValidity('');
                }
        
                if (descriptionInput.validity.valueMissing) {
                    descriptionInput.setCustomValidity('Please fill in this field');
                } else {
                    descriptionInput.setCustomValidity('');
                }

                // Trigger form validation to show the custom messages
                todoForm.reportValidity();
            }
        })

        const cancelButton = document.createElement('button');
        cancelButton.classList.add('cancel-btn')
        cancelButton.type = 'button'
        cancelButton.textContent = 'Cancel'

        cancelButton.addEventListener('click', () => {
            document.querySelector('.add-task-btn').classList.toggle('hidden')
            todoForm.remove()
        })

        // Append input fields, checkbox, and submit button to the form
        todoForm.append(titleInput,descriptionInput,dueDateInput,prioritySelect,
                        confirmButton, cancelButton)

        // Add the form to the todo input container
        container.appendChild(todoForm)
    }

    createProjectForm() {
        console.log('Creating Project Form')
        
        const form = document.createElement('form')
        
        const input = document.createElement('input')
        input.type = 'text'
        input.minLength = 10
        input.placeholder = 'Project Name'
        input.classList.add('add-project-input')

        const projectButtons = document.createElement('div')
        projectButtons.classList.add('project-buttons')

        const addButton = document.createElement('button')
        addButton.classList.add('add-project-button')
        addButton.textContent = 'Add'

        const cancelButton = document.createElement('button')
        cancelButton.classList.add('cancel-project-button')
        cancelButton.textContent = 'Cancel'

        projectButtons.append(addButton, cancelButton)
        form.append(input, projectButtons)

        this.project.insertBefore(form, this.addProject)
        this.addProject.classList.toggle('hidden')
        addButton.addEventListener('click', (e) => {
            e.preventDefault()
            
            this.projectManager.addProject(input.value)

            form.remove()
            this.addProject.classList.toggle('hidden')    
            console.log(this.projectManager.projects)

            this.displayProjects()
        })

        cancelButton.addEventListener('click', ( ) => {
            form.remove()
            this.addProject.classList.toggle('hidden')    
        })
    }

    displayProjects() {  
        const projectItems = document.createElement('ul')
        projectItems.classList.add('project-items')

        this.projectList.innerHTML = ''
    
        // Iterate through the projects and create list items for each project
        this.projectManager.projects.forEach((project) => {
            const itemContainer = document.createElement('div')
            itemContainer.classList.add('item-container')

            const listStyle = document.createElement('div')
            listStyle.textContent = '>>> '

            const item = document.createElement('li')
            item.classList.add('item')
            item.textContent =  project.name
            
            const removeButton = document.createElement('img')
            removeButton.classList.add('remove-btn')
            removeButton.src = './assets/delete-outline.svg'
            removeButton.width = 30

            removeButton.addEventListener('click', () => {
                this.projectManager.removeProject(project.name)
                this.projectManager.selectedProject = null
                this.displayProjects()
                this.displayProjectContent()
            })

            itemContainer.append(listStyle, item, removeButton)
            projectItems.append(itemContainer)
        })
        this.projectList.append(projectItems)
    }

    // Update the priority label's color
    updatePriorityColor(priorityLabel, priority) {
        switch (priority) {
            case 'High':
                priorityLabel.style.backgroundColor = 'red';
                break;
            case 'Medium':
                priorityLabel.style.backgroundColor = 'orange';
                break;
            case 'Low':
                priorityLabel.style.backgroundColor = 'green';
                break;
            default:
                priorityLabel.style.backgroundColor = 'gray';
        }
    }
}

const uiManager = new UI()
uiManager.loadUI()