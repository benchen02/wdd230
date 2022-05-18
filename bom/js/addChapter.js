const input = document.querySelector('input');
const btn = document.querySelector('button');
const list = document.querySelector('ul');
var count = 0;

btn.addEventListener('click', () => {
    
    const chapter = input.value;

    if (chapter != "" && count < 25) {
        const span = document.createElement("span");
        const chapterList = document.createElement("li");
        const deletebtn = document.createElement("button");
    
        chapterList.appendChild(span);
        span.textContent = chapter;
        chapterList.appendChild(deletebtn);
        deletebtn.textContent = '❌';
        list.prepend(chapterList);
    
        deletebtn.addEventListener("click", () => {
            list.removeChild(chapterList);
            count--;
        })
    count++
    }
});