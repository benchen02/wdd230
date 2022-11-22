const requestURL = "https://raw.githubusercontent.com/benchen02/wdd230/master/chamber/json/contact.json"
const cards = document.querySelector("#contactPoints");

async function getInfo (){
    const response = await fetch (requestURL);
    const data = await response.json();
    console.log(data);
    data.contact.forEach(contact => { displayInfo(contact)  });
}

function displayInfo(contact) {
    const card = document.createElement("section");
    const name = document.createElement("p");
    const title = document.createElement("p");
    const phone = document.createElement("p");

    name.textContent = `${contact.name}`;
    title.textContent = `${contact.title}`;
    phone.textContent = `${contact.phone}, ext: ${contact.ext}`;

    name.setAttribute("id", 'name');
    title.setAttribute("id", 'title');
    phone.setAttribute("id", 'phone');
    card.setAttribute("id", 'info');

    card.appendChild(name);
    card.appendChild(title);
    card.appendChild(phone);

    cards.appendChild(card);
}

getInfo();