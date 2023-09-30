import Storage from "./storage"
import ProjectCreator from './projectCreator'

export default class ProjectManager {
    constructor() {
        this.projects = Storage.loadProjects()
        this.selectedProject = null

        if (this.projects.length === 0) {
            this.createDefaultProjects()
            this.saveToLocalStorage()
        }  

    }

    addProject(name) {
        if (name.length >= 15) {
            alert('Project name is too long!') 
            return
        } else if (name.length === 0)  {
            alert('Field should not be empty')
            return
        } else if (this.projects.some(project => project.name === name)) {
            alert('Project name already exists')
            return
        }

        const newProject = new ProjectCreator(name)
        this.projects.push(newProject)

        this.saveToLocalStorage() // Save projects to local storage

        return newProject
    }

    selectProject(name) {
        this.selectedProject = this.projects.find(project => project.name === name)

        this.saveToLocalStorage() // Save projects to local storage
        
        return this.selectedProject
    }

    removeProject(name) {
        this.projects.splice(name, 1)

        this.saveToLocalStorage() // Save projects to local storage
    }

    saveToLocalStorage() {
        Storage.saveProjects(this.projects) // Save projects to local storage
    }

    createDefaultProjects() {
        const defaultProject1 = new Project('Demo Project');
        const defaultProject2 = new Project('Test Project');

        const project1Todo1 = new Todo('Demo Todo 1', 'This is the first demo todo', '2023-10-15', 'Medium');
        const project1Todo2 = new Todo('Demo Todo 2', 'This is the second demo todo', '2023-11-13', 'Low');
        defaultProject1.todos.push(project1Todo1, project1Todo2);

        const project2Todo1 = new Todo('Test Todo 1', 'This is the first test todo', '2023-11-15', 'High');
        const project2Todo2 = new Todo('Test Todo 2', 'This is the second test todo', '2023-12-13', 'Low');
        const project2Todo3 = new Todo('Test Todo 3', 'This is the third test todo', '2023-09-30', 'Low');
        defaultProject2.todos.push(project2Todo1, project2Todo2, project2Todo3);

        this.projects.push(defaultProject1, defaultProject2);
    }
}