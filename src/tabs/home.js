import { content } from "../index";

export const displayHome= () => {
    const name= document.createElement("h1");
    name.classList.add("name");
    name.innerText= "Food Restaurant";
    content.appendChild(name);

    const descriptionBox= document.createElement("div");
    descriptionBox.classList.add("descriptionBox");
    content.appendChild(descriptionBox);
    const title1= document.createElement("h2");
    title1.innerText= "Description";
    descriptionBox.appendChild(title1);
    const description= document.createElement("div");
    description.innerText= "This restaurant serves food! Our food, unlike most restaurants, can be eaten. Food eaten here will result in you eating food in this restaurant! The food in our restaurant will feed you food so you don't have to be hungry until the next time you need to eat food. Our food is made of 100% natural food. WOW!";
    descriptionBox.appendChild(description);

    const hoursBox= document.createElement("div");
    hoursBox.classList.add("hoursBox");
    content.appendChild(hoursBox);
    const title2= document.createElement("h2");
    title2.innerText= "Hours";
    hoursBox.appendChild(title2);
    const hours= document.createElement("div");
    hours.innerText= "Sunday: 4am - 5am" + "\n" + "Monday: 4am - 5am" + "\n" + "Tuesday: 4am - 5am" + "\n" + "Wednesday: 4am - 5am" + "\n" + "Thursday: 4am - 5am" + "\n" + "Friday: 4am - 5am" + "\n" + "Saturday: 4am - 5am";
    hoursBox.appendChild(hours);

    const locationBox= document.createElement("div");
    locationBox.classList.add("locationBox");
    content.appendChild(locationBox);
    const title3= document.createElement("h2");
    title3.innerText="Location";
    locationBox.appendChild(title3);
    const location= document.createElement("div");
    location.innerText= "123 Unknown Street, Knowhere, Mars";
    locationBox.appendChild(location);
};