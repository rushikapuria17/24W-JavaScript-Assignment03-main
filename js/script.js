document.addEventListener('DOMContentLoaded', function () {
    // Function that handles the event of the form submission when the submit butten is clicked
    function Submitbtn(event) {
        // Prevents the default behavior of form submission
        event.preventDefault();

        // Geting the form inputs
        const form = document.getElementById('pizzaForm');
        const formData = new FormData(form);

        // Creating the Pizza object for fetching data
        const pizza = new Pizza(
            formData.get('pizzaSize'),
            formData.get('crust'),
            formData.get('quantity') || 1,
            formData.get('sauce'),
            formData.get('cheese'),
            Array.from(formData.getAll('topping')),
            formData.get('garlicDip') || 0,
            formData.get('ranchDip') || 0,
            formData.get('marinaraDip') || 0
        );

        // Calling the function to display the Pizza description
        displayPizza(pizza);
    }

    // Function to display Pizza description
    function displayPizza(pizza) {
        const informationToDisplayed = document.querySelector('.informationToDisplayed');
        const dips = `Garlic Dipping Sauce dip: ${pizza.garlicDip}, Ranch Sauce dip: ${pizza.ranchDip}, Marinara Sauce dip: ${pizza.marinaraDip}`;
        informationToDisplayed.textContent = `You ordered ${pizza.quantity} ${pizza.size} pizza with ${pizza.crust} crust, ${pizza.sauce}, ${pizza.cheese}, and toppings: ${pizza.toppings.join(', ')}. Dips: ${dips}.`;
    }

    // Defining the Pizza Class to create a constructor to pass and set all the values at once
    class Pizza {
        constructor(size, crust, quantity, sauce, cheese, toppings, garlicDip, ranchDip, marinaraDip) {
            this.size = size;
            this.crust = crust;
            this.quantity = quantity;
            this.sauce = sauce;
            this.cheese = cheese;
            this.toppings = toppings;
            this.garlicDip = garlicDip;
            this.ranchDip = ranchDip;
            this.marinaraDip = marinaraDip;
        }
    }

    // Adding the event listener to the submit button of the form
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', Submitbtn);
});
