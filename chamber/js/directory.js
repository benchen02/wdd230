const requestURL =
  "https://raw.githubusercontent.com/benchen02/wdd230/master/chamber/json/data.json";
const cards = document.querySelector(".items");

async function getInfo (){
    const response = await fetch (requestURL);
    const data = await response.json();
    data.business.forEach(business => { displayInfo(business)  });
}

function displayInfo(business){
    //Create HTML Elements
    let card = document.createElement("section");
    let h4 = document.createElement("h4");
    let logo = document.createElement("img");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let site = document.createElement("a");
    let phrase = document.createElement("p")

    //Change respective textcontent to contain business name, full address, and phone number
    h4.textContent = `${business.name}`;
    address.textContent = `${business.street} ${business.city} ${business.state} ${business.zip}`;
    phone.textContent = `${business.phone}`
    site.innerHTML = business.siteURL;
    phrase.innerHTML = `"${business.phrase}"`;

    //Building attrubutes for img and link
    logo.setAttribute("src", business.logoURL);
    logo.setAttribute(
      "alt",
      `${business.name} logo`
    );
    logo.setAttribute("loading", "lazy");
    site.setAttribute("href", business.siteURL);
    card.setAttribute("class", 'card')

    //Append section with information
    card.appendChild(logo);
    card.appendChild(h4);
    card.appendChild(phrase);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(site);

    cards.appendChild(card);
}

getInfo();