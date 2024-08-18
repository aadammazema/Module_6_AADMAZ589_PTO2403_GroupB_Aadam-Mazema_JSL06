// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
  Starters: ["Garlic Bread", "Bruschetta"],
  MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
  Desserts: ["Tiramisu", "Cheesecake"],
};

const prices = {
  "Garlic Bread": 65.50,
  Bruschetta: 70.0,
  "Margherita Pizza": 119.99,
  "Spaghetti Carbonara": 135.50,
  Tiramisu: 95.99,
  Cheesecake: 75.0,
};

// Function to display menu items by category
function displayMenuItems(menu) {
  // Get the menu container element from the HTML
  const menuContainer = document.getElementById("menu");
  // Loop through each category and its items in the menu object

  for (const category in menu) {
    // Create category element
    const categoryElement = document.createElement("h3");
    categoryElement.textContent = category;
    menuContainer.appendChild(categoryElement);

    // Create list element for items
    const itemList = document.createElement("ul");

    menu[category].forEach((item) => {
      // create list item element
      const listItem = document.createElement("li");
      listItem.textContent = item;

      // Add a click event listner to add item to "your order"
      listItem.addEventListener("click", () => addToOrder(item));
      itemList.appendChild(listItem);
    });

    menuContainer.appendChild(itemList);
  }
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
  const orderItemsList = document.getElementById("order-items");
  const orderTotal = document.getElementById("order-total");

  // create list item for order
  const orderItem = document.createElement("li");
  orderItem.textContent = itemName;
  orderItemsList.appendChild(orderItem);

  // Update tital price
  const itemPrice = prices[itemName] || 0;
  let currentTotal = Number(orderTotal.textContent);
  currentTotal += itemPrice;
  orderTotal.textContent = currentTotal.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
  // Call the function to display menu items
  displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
