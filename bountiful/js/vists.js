var submitcnt = document.querySelector('.submitcnt');

let cntnum = Number(window.localStorage.getItem("submits-ls"));

submitcnt.textContent = `You have made ${cntnum} drink(s)`

cntnum = Number(window.localStorage.setItem("submits-ls", cntnum));