import {addprojectinfo,addNewTaskButton} from "./main.js";

const colors = ["red","blue","yellow","green","purple","orange","pink","white"];
let i=0;
function getColor() {
    let givecolor=colors[i%7];
    i++;
    return givecolor;
}

const container = document.querySelector(".pcontainer");

const addpbtn = document.querySelector(".title button");
const pdialog = document.querySelector(".addproject");
const closebtn = document.querySelector(".addproject button");
const pform = document.querySelector(".addproject");
const pnameinform = document.querySelector("#pname");


const rdialog = document.querySelector(".renameproject");
const rclosebtn = document.querySelector(".renameproject button");
const rform = document.querySelector(".renameproject form");
const rnameinform = document.querySelector("#rname");


function addproject(name) {

    const card = document.createElement("div");
    card.classList.add("pcard");

    const info = document.createElement("div");
    info.classList.add("pinfo");
    info.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>circle</title><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>`;
    const svg = info.querySelector("svg");
    svg.style.fill=getColor();
    const h3 = document.createElement("h3");
    h3.textContent=`${name}`;
    info.appendChild(h3);

    const buttons = document.createElement("div");
    buttons.classList.add("pbuttons");
    const rename_btn = document.createElement("button");
    rename_btn.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>rename</title><path d="M15 16L11 20H21V16H15M12.06 7.19L3 16.25V20H6.75L15.81 10.94L12.06 7.19M18.71 8.04C19.1 7.65 19.1 7 18.71 6.63L16.37 4.29C16.17 4.09 15.92 4 15.66 4C15.41 4 15.15 4.1 14.96 4.29L13.13 6.12L16.88 9.87L18.71 8.04Z" /></svg>`;
    const delete_btn = document.createElement("button");
    delete_btn.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>`;
    buttons.appendChild(rename_btn);
    buttons.appendChild(delete_btn);

    card.appendChild(info);
    card.appendChild(buttons);

    container.appendChild(card);

    rename_btn.addEventListener("click",(e)=>{
        const card = e.currentTarget.closest(".pcard");
        renameNode=card.querySelector("h3");
        rdialog.showModal();
    })

    delete_btn.addEventListener("click",(e)=>{
        const card = e.currentTarget.closest(".pcard");
        container.removeChild(card);
    })

    card.addEventListener("click",()=>{
        addprojectinfo(svg.style.fill,h3.textContent);
        addNewTaskButton(svg.style.fill);
    })
}

function takeprojname() {
    pdialog.showModal();
}
addpbtn.addEventListener("click",()=>{
    takeprojname();
})
closebtn.addEventListener("click",()=>{
    pdialog.close();
})
pform.addEventListener("submit",(e)=>{
    e.preventDefault();
    pdialog.close();
    addproject(pnameinform.value);
})

let renameNode;
rform.addEventListener("submit",(e)=>{
    e.preventDefault();
    rdialog.close();
    renameNode.textContent=rnameinform.value;
})
rclosebtn.addEventListener("click",()=>{
    rdialog.close();
})

addproject("Personal");
export {addproject};