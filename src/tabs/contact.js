import { mediumContact } from "../index.js";

export const displayContact = () => {
    const name= document.createElement("h1");
    name.classList.add("name");
    name.innerText= "Contact Us";
    mediumContact.appendChild(name);

    const contactBox1 = document.createElement("div");
    contactBox1.classList.add("contactBox");
    mediumContact.appendChild(contactBox1);
    
    const contactRes= document.createElement("h2");
    contactRes.innerText= "Contact Food Restaurant";
    contactBox1.appendChild(contactRes);

    const contactInfo1= document.createElement("p");
    contactInfo1.innerText= "Phone Number: 911" + "\n" + "Email: FoodRestaurant@FoodRestaurant.gov"
    contactBox1.appendChild(contactInfo1);

    const contactBox2 = document.createElement("div");
    contactBox2.classList.add("contactBox");
    mediumContact.appendChild(contactBox2);

    const contactOwner= document.createElement("h2");
    contactOwner.innerText= "Contact Owner";
    contactBox2.appendChild(contactOwner);
    
    const contactInfo2= document.createElement("p");
    contactInfo2.innerText= "Phone Number: 000-000-0001" + "\n" + "Email: FoodRestaurantOwner@FoodRestaurant.gov"
    contactBox2.appendChild(contactInfo2);

    const contactBox3 = document.createElement("div");
    contactBox3.classList.add("contactBox");
    mediumContact.appendChild(contactBox3);

    const contactChef= document.createElement("h2");
    contactChef.innerText= "Contact Chef";
    contactBox3.appendChild(contactChef);
    
    const contactInfo3= document.createElement("p");
    contactInfo3.innerText= "Phone Number: 000-000-0010" + "\n" + "Email: FoodRestaurantChef@FoodRestaurant.gov"
    contactBox3.appendChild(contactInfo3);

    const contactBox4 = document.createElement("div");
    contactBox4.classList.add("contactBox");
    mediumContact.appendChild(contactBox4);

    const contactJanitor= document.createElement("h2");
    contactJanitor.innerText= "Contact Janitor";
    contactBox4.appendChild(contactJanitor);
    
    const contactInfo4= document.createElement("p");
    contactInfo4.innerText= "Phone Number: 000-000-0100" + "\n" + "Email: FoodRestaurantJanitor@FoodRestaurant.gov"
    contactBox4.appendChild(contactInfo4);

    const contactBox5 = document.createElement("div");
    contactBox5.classList.add("contactBox");
    mediumContact.appendChild(contactBox5);

    const contactDriver= document.createElement("h2");
    contactDriver.innerText= "Contact Driver";
    contactBox5.appendChild(contactDriver);
    
    const contactInfo5= document.createElement("p");
    contactInfo5.innerText= "Phone Number: 000-000-1000" + "\n" + "Email: FoodRestaurantDriver@FoodRestaurant.gov"
    contactBox5.appendChild(contactInfo5);

    const contactBox6 = document.createElement("div");
    contactBox6.classList.add("contactBox");
    mediumContact.appendChild(contactBox6);

    const contactMasseuse= document.createElement("h2");
    contactMasseuse.innerText= "Contact Masseuse";
    contactBox6.appendChild(contactMasseuse);
    
    const contactInfo6= document.createElement("p");
    contactInfo6.innerText= "Phone Number: 000-001-0000" + "\n" + "Email: FoodRestaurantMasseuse@FoodRestaurant.gov"
    contactBox6.appendChild(contactInfo6);
};