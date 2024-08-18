// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

const prices = {
    "Garlic Bread": 65.00,
    "Bruschetta": 70.00,
    "Margherita Pizza": 110.00,
    "Spaghetti Carbonara": 120.00,
    "Tiramisu": 90.00,
    "Cheesecake": 75.00
}

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById('menu');
    // Loop through each category and its items in the menu object
    
    for (const category in menu) {
        // Create category element
        const categoryElement = document.createElement('h3');
        categoryElement.textContent = category;
        menuContainer.appendChild(categoryElement);

        // Create list element for items
        const itemList = document.createElement('ul');

        menu[category].forEach(item => {
            // create list item element
            const listItem = document.createElement('li');
            listItem.textContent = item;

            // Add a click event listner to add item to "your order"
            listItem.addEventListener('click', () => addToOrder(item));
            itemList.appendChild(listItem);
        });

        menuContainer.appendChild(itemList);
    }       
}

// temporary function to check that everything is displayed correctly
displayMenuItems(menu);

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML

    // Create a list item for the order

    // Set the text content of the list item to the item name

    // Append the list item to the order items list

    // Calculate and update the total price

    // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);
