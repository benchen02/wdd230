const message = document.querySelector('.message');
const day = new Date().getDay();
if (day <= 2){
    message.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."
} else if(day == 3) {
    message.textContent = "🤝🏼 Come join us for the chamber meet and greet tonight at 7:00 p.m."
} else {
    message.textContent = "👋 We're sorry you missed the weekly chamber meet and greet but feel free to join us next Wednesday at 7:00 p.m."
}