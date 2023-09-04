import "./styles.css"
import { displayHome } from "./tabs/home";

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

export const content=document.createElement("div");
content.classList.add("content");
main.appendChild(content);

const footer= document.createElement("div");
footer.classList.add("footer");
container.appendChild(footer);
footer.innerText= "For The Odin Project";

displayHome()