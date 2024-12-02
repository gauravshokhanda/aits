// Function to fetch the menu data and populate the navbar
async function fetchMenuData() {
    try {
        const response = await fetch('https://associatedincometax.iamdeveloper.in/api/menus/');
        const menus = await response.json();
        console.log(menus)

        const menuContainer = document.getElementById('navbar-menu');

        // Clear any existing menu items before adding new ones
        menuContainer.innerHTML = '';

        // Loop through the fetched data and create menu items
        menus.forEach(menu => {
            const li = document.createElement('li');
            li.classList.add('nav-item');

            const a = document.createElement('a');
            a.classList.add('nav-link');
            a.href = menu.link;
            a.innerText = menu.name;

            li.appendChild(a);
            menuContainer.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching menu data:', error);
    }
}

// Call the function to fetch data and populate the navbar
document.addEventListener('DOMContentLoaded', fetchMenuData);

