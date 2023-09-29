import editSVG from '../assets/circle-edit-outline.svg'
import removeSVG from '../assets/delete-outline.svg'
import deleteSVG from '../assets/delete-circle-outline.svg'

import ProjectManager from './projectManager'
import TodoCreator from './todoCreator'

export default class uiManager {
    constructor() {
        this.project = document.querySelector('.project-section')
        this.addProject = document.querySelector('.add-project')
        this.projectList = document.querySelector('.project-list-container')
        this.todayButton = document.querySelector('.today-button');
        this.weekButton = document.querySelector('.week-button');
        this.monthButton = document.querySelector('.month-button');
        this.currentView = ''
        this.projectManager = new ProjectManager()
    }

    loadUI() {
        // Display onload
        this.setDefaultView()
        this.displayProjects()
        this.setEventListeners()
    }

    setEventListeners() {
        // Event listeners when sidebar buttons are clicked
        this.addProject.addEventListener('click', () => this.createProjectForm());
        this.projectList.addEventListener('click', (e) => {
            console.log(e)
            if (e.target.tagName === 'LI') {
                this.projectManager.selectProject(e.target.textContent)
                this.displayProjectContent()
            }
        })
        this.todayButton.addEventListener('click', () => this.setActiveView('Today'));
        this.weekButton.addEventListener('click', () => this.setActiveView('This Week'));
        this.monthButton.addEventListener('click', () => this.setActiveView('This Month'));
    }

    setDefaultView() {
        this.displayTodoListsByDueDate('Today')
    }

    setActiveView(view){
        this.currentView = view;
        this.displayTodoListsByDueDate(view);
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
            removeButton.src = removeSVG
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

    displayProjectContent() {
        const contentDiv = document.getElementById('content')

        const projectSelected = this.projectManager.selectedProject
        if (projectSelected === null) contentDiv.innerHTML = ''

        if (projectSelected) {
            // Clear the content of the content div
            contentDiv.innerHTML = ''

            const projectHeader = document.createElement('div')
            projectHeader.classList.add('project-header')

            const projectTitle = document.createElement('h2')
            projectTitle.classList.add('header2')
            projectTitle.textContent = projectSelected.name
           
            const addTaskButton = document.createElement('button')
            addTaskButton.classList.add('add-task-btn')
            addTaskButton.textContent = '+'
            addTaskButton.addEventListener('click', () => {
                addTaskButton.classList.toggle('hidden')
                this.createTodoForm(todoInputContainer)  
            }) 
            
            const todoInputContainer = document.createElement('div')
            todoInputContainer.classList.add('todo-input-container')

            const todoListContainer = document.createElement('div')
            todoListContainer.classList.add('todo-list-container')

            projectHeader.append(addTaskButton, projectTitle)
            contentDiv.append(projectHeader, todoInputContainer, todoListContainer)

            // Display all todo lists
            this.displayTodoList(todoListContainer)
        }
    }

    displayTodoList(container) {
        const projectSelected = this.projectManager.selectedProject

        const todoList = document.createElement('ul')
        todoList.classList.add('todo-list')

        projectSelected.todos.forEach((todo) => {
            const todoItem = this.createTodoItem(todo)
            if (todo.status == true) {
                todoItem.classList.toggle('completed')
            }
            todoList.appendChild(todoItem)
        })

        container.appendChild(todoList)
    } 

    displayTodoListsByDueDate(dueDateFilter) {
        const contentDiv = document.getElementById('content')
        contentDiv.innerHTML = ''
    
        const dueDateTitle = document.createElement('h2')
        dueDateTitle.classList.add('header2')
        dueDateTitle.textContent = dueDateFilter +'\'s Tasks'
    
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
                            if (todo.status == true) todoItem.classList.toggle('completed')
                        }
                        break;
                    case 'This Week':
                        if (this.isThisWeek(dueDate)) {
                            const todoItem = this.createTodoItem(todo)
                            todoListContainer.appendChild(todoItem)
                            if (todo.status == true) todoItem.classList.toggle('completed')
                        }
                        break
                    case 'This Month':
                        if (this.isThisMonth(dueDate)) {
                            const todoItem = this.createTodoItem(todo)
                            todoListContainer.appendChild(todoItem)
                            if (todo.status == true) todoItem.classList.toggle('completed')
                        }
                        break
                }
            })
        })
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
            
            this.projectManager.addProject(input.value) // Adding project to array

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
                console.log('Adding task to a project')
                const newTodo = new TodoCreator(
                    titleInput.value, 
                    descriptionInput.value,
                    dueDateInput.value, 
                    prioritySelect.value
                )

                this.projectManager.selectedProject.todos.push(newTodo)
                this.projectManager.saveToLocalStorage() // Save task to local storage
    
                const priorityLabel = document.createElement('div');
                priorityLabel.classList.add('priority-label');
        
                this.updatePriorityColor(priorityLabel, prioritySelect.value)
                this.displayProjectContent() // Update and display todo list in a project
            } else {
                if (titleInput.validity.valueMissing) titleInput.setCustomValidity('Please fill in this field')
                else titleInput.setCustomValidity('')
        
                if (descriptionInput.validity.valueMissing) descriptionInput.setCustomValidity('Please fill in this field')
                else descriptionInput.setCustomValidity('')

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
        todoForm.append(titleInput,descriptionInput,dueDateInput,prioritySelect, confirmButton, cancelButton)
        // Add the form to the todo input container
        container.appendChild(todoForm)
    }

    createTodoItem(todo) {
        const todoItem = document.createElement('li')
        todoItem.classList.add('todo-item')

        // Create a priority label based on the todo's priority
        const priorityLabel = document.createElement('div')
        priorityLabel.classList.add('priority-label')

        this.updatePriorityColor(priorityLabel, todo.priority)
        this.projectManager.saveToLocalStorage()

        const leftContainer = document.createElement('div')
        leftContainer.classList.add('left-container')

        const statusInput = document.createElement('input')
        statusInput.type = 'checkbox'
        statusInput.className = 'status'
        statusInput.required = true
        statusInput.checked = todo.status
        statusInput.addEventListener('click', () => {
            todo.status = statusInput.checked
            todoItem.classList.toggle('completed', todo.status)
            this.projectManager.saveToLocalStorage()
            console.log(todo.status)
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
        editButton.src = editSVG
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
        deleteButton.src = deleteSVG
        deleteButton.width = 30

        deleteButton.addEventListener('click', () => {
            const projectManager = this.projectManager;
            projectManager.projects.forEach((project) => {
                const todoIndex = project.todos.indexOf(todo);
                if (todoIndex !== -1) {
                    project.todos.splice(todoIndex, 1);
                    projectManager.saveToLocalStorage();

                    const header = document.querySelector('.header2')

                    if (header.textContent === project.name) {
                        this.displayProjectContent()
                        return
                    }

                    this.displayTodoListsByDueDate(this.currentView)
                }
            });
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
    
                todo.title = editTitleInput.value 
                todo.description = editDescriptionInput.value 
                todo.dueDate = editDueDateInput.value
                const updatePriority = editPrioritySelect.value
                todo.priority = editPrioritySelect.value  
    
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
                this.projectManager.saveToLocalStorage()

            } else {
                if (editTitleInput.validity.valueMissing) editTitleInput.setCustomValidity('Please fill in this field')
                else editTitleInput.setCustomValidity('');
                
                if (editDescriptionInput.validity.valueMissing) editDescriptionInput.setCustomValidity('Please fill in this field')
                else editDescriptionInput.setCustomValidity('')

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

    // Updating the priority label's color
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