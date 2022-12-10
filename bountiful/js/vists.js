var submitcnt = document.querySelector('.submitcnt');

let cntnum = Number(window.localStorage.getItem("submits-ls"));

submitcnt.textContent = `You have made ${cntnum} drink(s)`

function cnt(){

    const table = document.querySelector('.headrow');

    if (cntnum == 0){
        submitcnt.textContent = `Please make a drink mix on our fresh page`
        cntnum++
    } else if (table.textContent == "Nutritional Value"){
        cntnum++
    }

    cntnum = Number(window.localStorage.setItem("submits-ls", cntnum));
}