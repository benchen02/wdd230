
function output(){

    const date = new Date();

    const section = document.querySelector(".message");
    const info = document.querySelector(".info");
    const instructions = document.querySelector(".desc");
    const currentDate = document.querySelector('.date');

    const fname = document.querySelector("#fname");
    const email = document.querySelector("#email");
    const cell =document.querySelector("#phone");
    const fruit1 = document.querySelector("#fruit1");
    const fruit2 = document.querySelector("#fruit2");
    const fruit3 = document.querySelector("#fruit3");
    const desc = document.querySelector("#description");

    if (fname.value == "" && email.value == "" && cell.value == ""){

        section.textContent = `Please fill in your first name, email, and phone number in the form above`;

    } else {
    
    section.textContent = `Thank you for submitting ${fname.value}. We will contact you through your email at ${email.value}
    and send you a text confirming your order at ${cell.value}.`;
    currentDate.textContent = `You ordered on: ${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;

    if (fruit1.value == '' && fruit2.value == '' && fruit3.value == ''){
        info.textContent = `Please choose at least one fruit`;
    } else if (fruit2.value == '' && fruit3.value == '') {
        info.textContent = `Here's the fruit drink you ordered: ${fruit1.value}`;
    } else if (fruit1.value =='' && fruit3.value == '') {
        info.textContent = `Here's the fruit drink you ordered: ${fruit2.value}`;
    } else if (fruit1.value =='' && fruit2.value == '') {
        info.textContent = `Here's the fruit drink you ordered: ${fruit3.value}`;
    }else if (fruit1.value =='') {
        info.textContent = `Here's the fruit mix you ordered:${fruit2.value}, ${fruit3.value}`;
    } else if (fruit2.value =='') {
        info.textContent = `Here's the fruit mix drink you ordered: ${fruit1.value}, ${fruit3.value}`;
    } else if (fruit3.value =='') {
        info.textContent = `Here's the fruit mix  you ordered: ${fruit1.value}, ${fruit2.value}`;
    } else {
        info.textContent = `Here the fruits mix you ordered: ${fruit1.value}, ${fruit2.value}, ${fruit3.value}`;
    }

    if (desc.value == ''){
        instructions.textContent = `Special Order instructions: N/A`;
    } else{
        instructions.textContent = `Special Order insturctions: ${desc.value}`;
    }


}
    section.setAttribute('class', 'section');
    section.appendChild(currentDate);
}