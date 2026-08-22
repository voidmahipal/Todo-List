import { projectlist } from "./sidebar.js";

const projectHeaderContainer = document.querySelector(".hpinfo");
const addTaskContainer = document.querySelector(".addtask");
const projectdotsvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>circle</title><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />`;
const addBtnSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Add projects</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg> Add Task`;

class task{
    constructor(title,description,dueDate,priority,completed,projectId,notes) {
        this.title=title;
        this.description=description;
        this.dueDate=dueDate;
        this.priority=priority;
        this.completed=completed;
        this.projectId=projectId;
        this.notes=notes;
    }
}

function addprojectinfo(svgcolor,name) {

    projectHeaderContainer.replaceChildren();
    projectHeaderContainer.innerHTML=projectdotsvg;
    const psvg = projectHeaderContainer.querySelector("svg");
    psvg.style.fill=svgcolor;

    const h2 = document.createElement("h2");
    h2.textContent=name;

    projectHeaderContainer.appendChild(h2);
}

function addNewTaskButton(svgcolor,name) {
    addTaskContainer.replaceChildren();
    const btn = document.createElement("button");
    btn.style.backgroundColor=svgcolor;
    btn.innerHTML=addBtnSvg;
    addTaskContainer.appendChild(btn);

    btn.addEventListener("click",()=>{
        createNewTask(name);
    })
}

function getProjectObj(projectname) {
    let project;
    for(let obj in projectlist) {
        if(obj.name===projectname) {
            project=obj;
            break;
        }
    }
    return project;
}

function showTask(projectname) {
    
    let project = getProjectObj(projectname);
    let tasklist = project.task;
    for(let task in tasklist) {
        addtotaskcontainer(task);
    }
}

let taskdetails;
function createNewTask(projectname) {

    //showModal;
    let project = getProjectObj(projectname);
    let task = new task(taskdetails[0],taskdetails[1],taskdetails[2],taskdetails[3],taskdetails[4],taskdetails[5],taskdetails[6]);
    project.task.push(task);
    showTask(projectname);
}
export {addprojectinfo,addNewTaskButton,showTask};