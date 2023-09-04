import "./styles.css"
import { displayHome } from "./tabs/home";
import { displayMenu } from "./tabs/menu";

const header= document.createElement("div");
header.classList.add("header");
container.appendChild(header);

const homeTab= document.createElement("button");
homeTab.classList.add("home");
homeTab.innerText= "Home";
header.appendChild(homeTab);
const menuTab= document.createElement("button");
menuTab.classList.add("menu");
menuTab.innerText= "Menu";
header.appendChild(menuTab);
const contactTab= document.createElement("button");
contactTab.classList.add("contact");
contactTab.innerText= "Contact";
header.appendChild(contactTab);

const main= document.createElement("div");
main.classList.add("main");
container.appendChild(main);

const content=document.createElement("div");
content.classList.add("content");
main.appendChild(content);

export const mediumHome=document.createElement("div");
mediumHome.classList.add("mediumHome");
content.appendChild(mediumHome);
export const mediumMenu=document.createElement("div");
mediumMenu.classList.add("mediumMenu");
content.appendChild(mediumMenu);
export const mediumContact=document.createElement("div");
mediumContact.classList.add("mediumContact");
content.appendChild(mediumMenu);

const footer= document.createElement("div");
footer.classList.add("footer");
container.appendChild(footer);
footer.innerText= "For The Odin Project";

displayHome()

homeTab.addEventListener("click", () => {
    mediumHome.setAttribute("style", "display:flex;");
    mediumMenu.setAttribute("style", "display:none;");
    mediumContact.setAttribute("style", "display:none;");
    homeTab.setAttribute("style", "background-color: black; color: var(--secondary);");
    menuTab.setAttribute("style", "background-color: var(--primary); color: white;");
    contactTab.setAttribute("style", "background-color: var(--primary); color: white;");
});

menuTab.addEventListener("click", () => {
    mediumHome.setAttribute("style", "display:none;");
    mediumMenu.setAttribute("style", "display:flex;");
    mediumContact.setAttribute("style", "display:none;");
    homeTab.setAttribute("style", "background-color: var(--primary); color: white;");
    menuTab.setAttribute("style", "background-color: black; color: var(--secondary);");
    contactTab.setAttribute("style", "background-color: var(--primary); color: white;");
    displayMenu();
});