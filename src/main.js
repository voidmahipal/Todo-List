const projectHeaderContainer = document.querySelector(".hpinfo");
const addTaskContainer = document.querySelector(".addtask");
const projectdotsvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>circle</title><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />`;
const addBtnSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Add projects</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg> Add Task`;
function addprojectinfo(svgcolor,name) {

    projectHeaderContainer.replaceChildren();
    projectHeaderContainer.innerHTML=projectdotsvg;
    const psvg = projectHeaderContainer.querySelector("svg");
    psvg.style.fill=svgcolor;

    const h2 = document.createElement("h2");
    h2.textContent=name;

    projectHeaderContainer.appendChild(h2);
}

function addNewTaskButton(svgcolor) {
    addTaskContainer.replaceChildren();
    const btn = document.createElement("button");
    btn.style.backgroundColor=svgcolor;
    btn.innerHTML=addBtnSvg;
    addTaskContainer.appendChild(btn);
}
export {addprojectinfo,addNewTaskButton};