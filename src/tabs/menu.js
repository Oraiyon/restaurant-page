import { mediumMenu } from "../index";
import waterImageUrl from "../assets/water.jpg"
import pizzaImageUrl from "../assets/pizza.jpg"

export const displayMenu = () => {
    const name= document.createElement("h1");
    name.classList.add("name");
    name.innerText= "Menu";
    mediumMenu.appendChild(name);

    const drinks= document.createElement("h1");
    drinks.classList.add("drinks");
    drinks.innerText= "Drinks";
    mediumMenu.appendChild(drinks);

    const drink1 = document.createElement("div");
    drink1.classList.add("drinkBox");
    mediumMenu.appendChild(drink1);
    const water= document.createElement("h2");
    water.innerText= "Water: $50";
    drink1.appendChild(water);
    const waterDescription= document.createElement("p");
    waterDescription.innerText= "100% safe to drink water! Taken directly from the lost city of Atlantis, this cool and refreshing glass of water is proven to be safe to drink!";
    drink1.appendChild(waterDescription);
    const waterImg= document.createElement("img");
    waterImg.src=waterImageUrl;
    drink1.appendChild(waterImg);

    const food= document.createElement("h1");
    food.classList.add("foods");
    food.innerText= "Food";
    mediumMenu.appendChild(food);
    const food1= document.createElement("div");
    food1.classList.add("foodBox");
    mediumMenu.appendChild(food1);
    const grub= document.createElement("h2");
    grub.innerText= "Good Food: $5";
    food1.appendChild(grub);
    const grubDescription = document.createElement("p");
    grubDescription.innerText= "Our best-selling dish! Good Food in this restaurant is good food! Made from the finest ingredients Good Food is sure to delight. Cooked to perfection, this dish will be the LAST dish you need!";
    food1.appendChild(grubDescription);
    const pizzaImg= document.createElement("img");
    pizzaImg.src= pizzaImageUrl;
    food1.appendChild(pizzaImg);
};