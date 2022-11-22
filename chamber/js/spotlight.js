// Variable for membership array and URL
const memberarray = [];
const URL =
  "https://raw.githubusercontent.com/benchen02/wdd230/master/chamber/json/data.json";

  async function getInfoarray (){
    const response = await fetch (URL);
    const data = await response.json();
    data.business.forEach(business => { membershipInfo(business) });
    
    //Get 3 unique random business
    for (count = 0; count < 3; count++){
    var randomnum = Math.floor(Math.random() * memberarray.length);
    var randomBusiness = memberarray[randomnum];
    console.log(randomBusiness);
    memberarray.splice(randomnum, 1);

    //Create HTML Elements
    let cards = document.querySelector('.spotlight');
    let card = document.createElement("section");
    let h4 = document.createElement("h3");
    let logo = document.createElement("img");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let site = document.createElement("a");
    let phrase = document.createElement("p")

    //Change respective textcontent to contain business name, full address, and phone number
    h4.textContent = `${randomBusiness.name}`;
    address.textContent = `${randomBusiness.street} ${randomBusiness.city} ${randomBusiness.state} ${randomBusiness.zip}`;
    site.innerHTML = randomBusiness.siteURL;
    phone.textContent = `${randomBusiness.phone}`;
    phrase.innerHTML = `"${randomBusiness.phrase}"`;

    //Building attrubutes for img and link
    logo.setAttribute("src", randomBusiness.logoURL);
    logo.setAttribute("alt", `${randomBusiness.name} logo`);
    logo.setAttribute("loading", "lazy");
    site.setAttribute("href", randomBusiness.siteURL);
    card.setAttribute("class", 'card')

    //Append section with information
    card.appendChild(h4);
    card.appendChild(logo);
    card.appendChild(phrase);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(site);

    cards.appendChild(card);


}
    }

function membershipInfo(business){

    if (business.membership == "Silver" || business.membership == "Gold"){
        memberarray.push(business);
    }
}

console.log(memberarray);
getInfoarray();