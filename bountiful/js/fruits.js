
const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";

let data;

const dropdown1 = document.querySelector("#fruit1");
const dropdown2 = document.querySelector("#fruit2");
const dropdown3 = document.querySelector("#fruit3");

async function fruitsapi() {
  const response = await fetch(url);
  data = await response.json();
  console.table(data);
  data.forEach((fruit) => {
    displayFruit(fruit);
  });
}

fruitsapi();

function displayFruit(fruit) {
  var options1 = document.createElement("option");
  var options2 = document.createElement("option");
  var options3 = document.createElement("option");

  options1.textContent = `${fruit.name}`;
  options1.setAttribute("value", fruit.name);

  options2.textContent = `${fruit.name}`;
  options2.setAttribute("value", fruit.name);

  options3.textContent = `${fruit.name}`;
  options3.setAttribute("value", fruit.name);

  dropdown1.appendChild(options1);
  dropdown2.appendChild(options2);
  dropdown3.appendChild(options3);
}

function output() {

  const date = new Date();

  const section = document.querySelector(".message");
  const info = document.querySelector(".info");
  const instructions = document.querySelector(".desc");
  const currentDate = document.querySelector(".date");
  const nutrition = document.querySelector(".nutrition");
  const table = document.querySelector("table");

  const fname = document.querySelector("#fname");
  const email = document.querySelector("#email");
  const cell = document.querySelector("#phone");
  const fruit1 = document.querySelector("#fruit1");
  const fruit2 = document.querySelector("#fruit2");
  const fruit3 = document.querySelector("#fruit3");
  const desc = document.querySelector("#description");

  const headrow = document.createElement("TR");
  const carbsrow = document.createElement("TR");
  const proteinrow = document.createElement("TR");
  const fatrow = document.createElement("TR");
  const sugarrow = document.createElement("TR");
  const calrow = document.createElement("TR");
  const tablehead = document.createElement("TH");
  const carbs = document.createElement("TD");
  const protein = document.createElement("TD");
  const fat = document.createElement("TD");
  const sugar = document.createElement("TD");
  const cal = document.createElement("TD");
  const carbsvalue = document.createElement("TD");
  const proteinvalue = document.createElement("TD");
  const fatvalue = document.createElement("TD");
  const sugarvalue = document.createElement("TD");
  const calvalue = document.createElement("TD");

  const find1 = data.find((x) => x.name == fruit1?.value);
  const find2 = data.find((x) => x.name == fruit2?.value);
  const find3 = data.find((x) => x.name == fruit3?.value);

  if (fname.value == "" || email.value == "" || cell.value == "") {
    section.textContent = `Please fill in your first name, email, and phone number in the form above`;
  } else {
    section.textContent = `Thank you for submitting ${fname.value}. We will contact you through your email at ${email.value}
  and send you a text confirming your order at ${cell.value}.`;
    currentDate.textContent = `You ordered on: ${
      date.getMonth() + 1
    }/${date.getDate()}/${date.getFullYear()}`;
  }

  if (fruit1.value == "" && fruit2.value == "" && fruit3.value == "") {
    info.textContent = `Please choose at least one fruit`;
  } else if (fruit2.value == "" && fruit3.value == "") {
    info.textContent = `Here's the fruit drink you ordered: ${fruit1.value}`;
    carbsvalue.textContent = `${Math.round(find1.nutritions?.carbohydrates)} g`;
    proteinvalue.textContent = `${Math.round(find1.nutritions?.protein)} g`;
    fatvalue.textContent = `${Math.round(find1.nutritions?.fat)} g`;
    sugarvalue.textContent = `${Math.round(find1.nutritions?.sugar)} g`;
    calvalue.textContent = `${Math.round(find1.nutritions?.calories)} g`;
  } else if (fruit1.value == "" && fruit3.value == "") {
    info.textContent = `Here's the fruit drink you ordered: ${fruit2.value}`;
    carbsvalue.textContent = `${Math.round(find2.nutritions?.carbohydrates)} g`;
    proteinvalue.textContent = `${Math.round(find2.nutritions?.protein)} g`;
    fatvalue.textContent = `${Math.round(find2.nutritions?.fat)} g`;
    sugarvalue.textContent = `${Math.round(find2.nutritions?.sugar)} g`;
    calvalue.textContent = `${Math.round(find2.nutritions?.calories)} g`;
  } else if (fruit1.value == "" && fruit2.value == "") {
    info.textContent = `Here's the fruit drink you ordered: ${fruit3.value}`;
    carbsvalue.textContent = `${Math.round(find3.nutritions?.carbohydrates)} g`;
    proteinvalue.textContent = `${Math.round(find3.nutritions?.protein)} g`;
    fatvalue.textContent = `${Math.round(find3.nutritions?.fat)} g`;
    sugarvalue.textContent = `${Math.round(find3.nutritions?.sugar)} g`;
    calvalue.textContent = `${Math.round(find3.nutritions?.calories)} g`;
  } else if (fruit1.value == "") {
    info.textContent = `Here's the fruit mix you ordered:${fruit2.value}, ${fruit3.value}`;
    carbsvalue.textContent = `${Math.round(
      find2.nutritions?.carbohydrates + find3.nutritions?.carbohydrates
    )} g`;
    proteinvalue.textContent = `${Math.round(
      find2.nutritions?.protein + find3.nutritions?.protein
    )} g`;
    fatvalue.textContent = `${Math.round(
      find2.nutritions?.fat + find3.nutritions?.fat
    )} g`;
    sugarvalue.textContent = `${Math.round(
      find2.nutritions?.sugar + find3.nutritions?.sugar
    )} g`;
    calvalue.textContent = `${Math.round(
      find2.nutritions?.calories + find3.nutritions?.calories
    )} g`;
  } else if (fruit2.value == "") {
    info.textContent = `Here's the fruit mix drink you ordered: ${fruit1.value}, ${fruit3.value}`;
    carbsvalue.textContent = `${Math.round(
      find1.nutritions?.carbohydrates + find3.nutritions?.carbohydrates
    )} g`;
    proteinvalue.textContent = `${Math.round(
      find1.nutritions?.protein + find3.nutritions?.protein
    )} g`;
    fatvalue.textContent = `${Math.round(
      find1.nutritions?.fat + find3.nutritions?.fat
    )} g`;
    sugarvalue.textContent = `${Math.round(
      find1.nutritions?.sugar + find3.nutritions?.sugar
    )} g`;
    calvalue.textContent = `${Math.round(
      find1.nutritions?.calories + find3.nutritions?.calories
    )} g`;
  } else if (fruit3.value == "") {
    info.textContent = `Here's the fruit mix  you ordered: ${fruit1.value}, ${fruit2.value}`;
    carbsvalue.textContent = `${Math.round(
      find1.nutritions?.carbohydrates + find2.nutritions?.carbohydrates
    )} g`;
    proteinvalue.textContent = `${Math.round(
      find1.nutritions?.protein + find2.nutritions?.protein
    )} g`;
    fatvalue.textContent = `${Math.round(
      find1.nutritions?.fat + find2.nutritions?.fat
    )} g`;
    sugarvalue.textContent = `${Math.round(
      find1.nutritions?.sugar + find2.nutritions?.sugar
    )} g`;
    calvalue.textContent = `${Math.round(
      find1.nutritions?.calories + find2.nutritions?.calories
    )} g`;
  } else {
    info.textContent = `Here the fruits mix you ordered: ${fruit1.value}, ${fruit2.value}, ${fruit3.value}`;
    carbsvalue.textContent = `${Math.round(
      find1.nutritions?.carbohydrates +
        find2.nutritions?.carbohydrates +
        find3.nutritions?.carbohydrates
    )} g`;
    proteinvalue.textContent = `${Math.round(
      find1.nutritions?.protein +
        find2.nutritions?.protein +
        find3.nutritions?.protein
    )} g`;
    fatvalue.textContent = `${Math.round(
      find1.nutritions?.fat + find2.nutritions?.fat + find3.nutritions?.fat
    )} g`;
    sugarvalue.textContent = `${Math.round(
      find1.nutritions?.sugar +
        find2.nutritions?.sugar +
        find3.nutritions?.sugar
    )} g`;
    calvalue.textContent = `${Math.round(
      find1.nutritions?.calories +
        find2.nutritions?.calories +
        find3.nutritions?.calories
    )} g`;
  }

  if (fruit1.value == "" && fruit2.value == "" && fruit3.value == "") {
    instructions.textContent = ``;
    carbsvalue.textContent = `N/A`;
    proteinvalue.textContent = `N/A`;
    fatvalue.textContent = `N/A`;
    sugarvalue.textContent = `N/A`;
    calvalue.textContent = `N/A`;
  } else {
    if (desc.value == "") {
      instructions.textContent = `Special Order instructions: N/A`;
    } else {
      instructions.textContent = `Special Order insturctions: ${desc.value}`;
    }
  }
    tablehead.textContent = `Nutritional Value`;
    carbs.textContent = `Total Carbs`;
    protein.textContent = `Total Protein`;
    fat.textContent = `Total Fat`;
    sugar.textContent = `Total Sugar`;
    cal.textContent = `Total Calories`;

    

  headrow.setAttribute("class", "headrow");
  tablehead.setAttribute("colspan", 2);

  headrow.appendChild(tablehead);
  carbsrow.appendChild(carbs);
  proteinrow.appendChild(protein);
  fatrow.appendChild(fat);
  sugarrow.appendChild(sugar);
  calrow.appendChild(cal);

  carbsrow.appendChild(carbsvalue);
  proteinrow.appendChild(proteinvalue);
  fatrow.appendChild(fatvalue);
  sugarrow.appendChild(sugarvalue);
  calrow.appendChild(calvalue);

  table.appendChild(headrow);
  table.appendChild(carbsrow);
  table.appendChild(proteinrow);
  table.appendChild(fatrow);
  table.appendChild(sugarrow);
  table.appendChild(calrow);

  section.appendChild(currentDate);
}