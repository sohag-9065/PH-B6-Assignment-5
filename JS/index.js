const cart = [];
// products-cart

function displayProduct() {
    const cartContainer = document.getElementById("products-cart");
    cartContainer.textContent = '';

    for (let i = 0; i < cart.length; i++) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${cart[i]}</td>
        `;
        cartContainer.appendChild(tr);
    }
    
}

function addToCart(element) {
    console.log(element)
    if (cart.length > 4) {
        alert("Already 5 player Added")
    }
    else {
        const pdName = element.parentNode.parentNode.children[0].innerText;       

        cart.push(pdName);
        element.disabled = true;
        displayProduct();
    }

}

function playerExpenses(inputId,displayId) {
    const userInput = document.getElementById(inputId).value;

    document.getElementById(displayId).innerText= userInput*cart.length;
}
function totalTeamExpenses(playerExpensesId,managerId,coachId,displayId) {
    const playerExpense = document.getElementById(playerExpensesId).innerText;
    const playerCost = parseInt(playerExpense);
    const manager = document.getElementById(managerId).value;
    const managerCost = parseInt(manager);
    const coach = document.getElementById(coachId).value;
    const coachCost = parseInt(coach);
    document.getElementById(displayId).innerText= playerCost + managerCost + coachCost;
}