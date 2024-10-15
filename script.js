const inventory = {
    apple: { price: 12.0, qty: 0 },
    cherry: { price: 13.5, qty: 0 },
    strawberry: { price: 15.0, qty: 0 },
};

function sum() {
    let total = 0;
    Object.values(inventory).forEach((i) => (total += i.price * i.qty));
    return total;
}

function calculate(box) {
    let qty = 0;

    if (box.value.length > 0) {
        qty = parseInt(box.value);
    }

    inventory[box.id].qty = qty;

    return `\$${sum().toFixed(2)}`;
}

window.addEventListener("DOMContentLoaded", () => {
    const totalContainer = document.querySelector("#total-container");

    const inputBoxes = document.querySelectorAll('#calculator input');

    inputBoxes.forEach(box => {
        box.addEventListener('change', () => {
            totalContainer.textContent = calculate(box);
        });

        box.addEventListener("keyup", () => {
            totalContainer.textContent = calculate(box);
        });

    });
});
