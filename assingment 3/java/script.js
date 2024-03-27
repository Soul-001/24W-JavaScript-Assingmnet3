document.addEventListener('DOMContentLoaded', () => {
    // Dynamically add student id and name
    const studentInfo = document.createElement('p');
    studentInfo.textContent = 'Student ID: 200520843, Name: Saharsh Viren Patel';
    document.body.insertBefore(studentInfo, document.body.firstChild);
    
    // Handle form submission
    document.getElementById('orderButton').addEventListener('click', () => {
        const form = document.getElementById('pizzaOrderForm');
        const size = form.size.value;
        const crust = form.crust.value;
        const toppings = Array.from(form.topping).filter(topping => topping.checked).map(topping => topping.value);
        
        const pizza = new Pizza(size, crust, toppings);
        document.getElementById('orderSummary').innerHTML = pizza.describe();
    });
});

class Pizza {
    constructor(size, crust, toppings) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
    }
    
    describe() {
        return `You ordered a ${this.size} pizza with a ${this.crust} crust and toppings: ${this.toppings.join(', ')}.`;
    }
}
