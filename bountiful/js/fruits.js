const url = "https://brotherblazzard.github.io/canvas-content/fruit.json"

const dropdown1 = document.querySelector('#fruit1');
const dropdown2 = document.querySelector('#fruit2');
const dropdown3 = document.querySelector('#fruit3');

async function fruitsapi() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data);
  data.forEach(fruit => { displayFruit(fruit)  });
}

fruitsapi();

function displayFruit(fruit){

  var options1 = document.createElement('option');
  var options2 = document.createElement('option');
  var options3 = document.createElement('option');
  
  options1.textContent = `${fruit.name}`
  options1.setAttribute('value', fruit.name);

  options2.textContent = `${fruit.name}`
  options2.setAttribute('value', fruit.name);

  options3.textContent = `${fruit.name}`
  options3.setAttribute('value', fruit.name);

  dropdown1.appendChild(options1);
  dropdown2.appendChild(options2);
  dropdown3.appendChild(options3);
}