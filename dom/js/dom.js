const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector("ul");

button.addEventListener('click', addlist);

function addlist() {
    let script = input.value;
    input.value = '';
}

const script = document.createElement('li');
const scriptText = document.createElement('span');
const deleteBtn = document.createElement('button');

script.appendChild(script);
scriptText.textContent = script;
script.appendChild(deleteBtn);
deleteBtn.textContent = '❌';
list.appendChild(scriptList);

deleteBtn.onclick = function(e) {
    list.removeChild(script);
}

input.focus();