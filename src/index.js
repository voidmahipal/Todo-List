import {addproject} from "./sidebar.js";
import "./style.css";
import "./sidebar-styles.css";

const addprojectbtn = document.querySelector(".title button");
addprojectbtn.addEventListener("click",()=>{
    addproject();
})