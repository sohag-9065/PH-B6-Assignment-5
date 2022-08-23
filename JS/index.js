// products-cart-array
const cart = [];

function displayPlayer() {
    const cartContainer = document.getElementById("player-cart");
    cartContainer.textContent = '';

    for (let i = 0; i < cart.length; i++) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th class="p-1">${i + 1}</th>
        <td class="p-1">${cart[i]}</td>
        `;
        cartContainer.appendChild(tr);
    }
}

function addToCart(element) {
    if (cart.length > 4) {
        alert("Already 5 player Added")
    }
    else {
        const playerName = element.parentNode.parentNode.children[0].innerText;       
        cart.push(playerName);
        element.disabled = true;
        displayPlayer();
    }

}

function setValueInTextField(inputId, newText) {
    let getField = document.getElementById(inputId);
    if (isNaN(newText)){
        getField.innerText = '000';
        alert('Wrong Input! Please Check Your Input.')
    }
    else if (newText == 0){
        getField.innerText = '000';
    }
    else{
        getField.innerText = newText;
    }
}

function playerExpenses() {
    const userInput = document.getElementById('perPlayerBudget').value;
    const totalPlayerCost = userInput*cart.length;
    setValueInTextField('showPlayerExpenses', totalPlayerCost);
}
function totalTeamExpenses(displayId) {
    const playerExpense = document.getElementById('showPlayerExpenses').innerText;
    const playerBudget = parseInt(playerExpense);
    const manager = document.getElementById('managerBudget').value;
    const managerBudget = manager*1;
    const coach = document.getElementById('coachBudget').value;
    const coachBudget = coach*1;
    const totalCost = playerBudget + managerBudget + coachBudget;
    setValueInTextField('totalExpenses', totalCost);
}