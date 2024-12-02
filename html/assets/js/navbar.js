const base = "http://localhost:5000/api";
// async function fetchMenuData() {
//     try {
//         const response = await fetch(`${base}/menus`);
//         const menus = await response.json();
//         const menuContainer = document.getElementById('navbar-menu');
//         menuContainer.innerHTML = '';
//         menus.forEach(menu => {
//             const li = document.createElement('li');
//             li.classList.add('nav-item');
//             const a = document.createElement('a');
//             a.classList.add('nav-link');
//             a.href = menu.link;
//             a.innerText = menu.name;
//             li.appendChild(a);
//             menuContainer.appendChild(li);
//         });
//     } catch (error) {
//         console.error('Error fetching menu data:', error);
//     }
// }
// document.addEventListener('DOMContentLoaded', fetchMenuData);

async function updateLogo() {
    try {
<<<<<<< Updated upstream
        const response = await fetch('http://localhost:5000/api/menus/');
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
=======
        const response = await fetch(`${base}/settings`);
        const data = await response.json();
        // Ensure data is an array and has at least one element
        if (Array.isArray(data) && data.length > 0 && data[0].logo) {
            const dynamicLogo = document.querySelectorAll('.logo img');
            dynamicLogo.forEach((img) => {
                img.src = data[0].logo;
            });
        }
>>>>>>> Stashed changes
    } catch (error) {
        console.error('Error fetching logo:', error);
    }
}
updateLogo();

async function updateBlog() {
    try {
        const response = await fetch(`${base}/blogs`);
        const data = await response.json();
        if (data.success && data.data.length > 0) {
            console.log(data.data)
            const blogContainer = document.querySelector('.blogContent');

            blogContainer.innerHTML = '';

            data.data.forEach(blog => {
                const blogDiv = document.createElement('div');
                blogDiv.classList.add('section-title', 'mb-1');

                // Format the createdAt date
                const createdDate = new Date(blog.createdAt);
                const formattedDate = createdDate.toDateString();
                const blogTitle = blog.title;

                blogDiv.innerHTML = `
                    <h6>Latest From Our Blog</h6>
                    <div class="blog-meta">
                        <span>${formattedDate}</span>
                    </div>

                    <h2><a href="#">${blog.title}</a></h2>

                    <p class="mt-0">${blog.content} <a href="#">Click here</a></p>

                    <a href="#" class="details-link">Read More <i class="las la-arrow-right"></i></a>
                `;
                blogContainer.appendChild(blogDiv);
            });

        }
    }
    catch (err) {
        console.error('Error fetching logo:', err);
    }
}
updateBlog()

