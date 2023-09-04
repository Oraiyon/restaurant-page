import { mediumMenu } from "../index";

export const displayMenu = () => {
    const name= document.createElement("h1");
    name.classList.add("name");
    name.innerText= "Menu";
    mediumMenu.appendChild(name); 
};