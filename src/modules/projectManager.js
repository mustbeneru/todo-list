import Storage from "./storage"
import ProjectCreator from './projectCreator'

export default class ProjectManager {
    constructor() {
        this.projects = Storage.loadProjects()
        this.selectedProject = null
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
}