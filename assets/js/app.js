// ==========================
// ELEMENTS
// ==========================

const grid = document.querySelector(".product-grid");

const searchBtn = document.getElementById("searchBtn");
const searchContainer = document.getElementById("searchContainer");
const searchInput = document.getElementById("searchInput");

const themeBtn = document.getElementById("themeBtn");

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

const categoryCards = document.querySelectorAll(".category-card");


// ==========================
// DISPLAY PRODUCTS
// ==========================

function displayProducts(productList) {

    if (!grid) return;

    grid.innerHTML = "";

    if (productList.length === 0) {

        grid.innerHTML = `
            <p style="text-align:center;grid-column:1/-1;">
                No products found.
            </p>
        `;

        return;
    }

    productList.forEach(product => {

        grid.innerHTML += `
        <a href="product.html?id=${product.id}" class="product-link">

            <div class="product-card">

                <img src="${product.images[0]}" alt="${product.title}">

                <div class="product-info">

                    <span class="category">
                        ${product.category}
                    </span>

                    <h3>${product.title}</h3>

                    <div class="product-meta">

                        <span class="rating">
                            ⭐ ${product.rating}
                        </span>

                        <span class="price">
                            ${product.price}
                        </span>

                    </div>

                    <p>${product.description}</p>

                    <span class="product-btn">
                        Read Full Review →
                    </span>

                </div>

            </div>

        </a>
        `;

    });
}


// Show products
displayProducts(products);


// ==========================
// SEARCH BUTTON
// ==========================

if (searchBtn && searchContainer) {

    searchBtn.addEventListener("click", () => {

        searchContainer.classList.toggle("active");

        if (searchContainer.classList.contains("active")) {

            searchInput.focus();

        } else {

            searchInput.value = "";

            displayProducts(products);

        }

    });

}


// ==========================
// SEARCH PRODUCTS
// ==========================

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const keyword = this.value.toLowerCase().trim();

        const filtered = products.filter(product =>

            product.title.toLowerCase().includes(keyword) ||

            product.category.toLowerCase().includes(keyword) ||

            product.description.toLowerCase().includes(keyword)

        );

        displayProducts(filtered);

    });

}


// ==========================
// CATEGORY FILTER
// ==========================

categoryCards.forEach(card => {

    card.addEventListener("click", () => {

        categoryCards.forEach(c =>
            c.classList.remove("active")
        );

        card.classList.add("active");

        const category = card.dataset.category;

        if (category === "All") {

            displayProducts(products);

        } else {

            const filtered = products.filter(product =>
                product.category === category
            );

            displayProducts(filtered);

        }

        const productSection =
            document.querySelector(".products");

        if (productSection) {

            productSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ==========================
// DARK MODE
// ==========================

if (themeBtn) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        themeBtn.classList.remove("fa-moon");
        themeBtn.classList.add("fa-sun");

    }


    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const isDark =
            document.body.classList.contains("dark");

        if (isDark) {

            localStorage.setItem("theme", "dark");

            themeBtn.classList.remove("fa-moon");
            themeBtn.classList.add("fa-sun");

        } else {

            localStorage.setItem("theme", "light");

            themeBtn.classList.remove("fa-sun");
            themeBtn.classList.add("fa-moon");

        }

    });

}


// ==========================
// MOBILE MENU
// ==========================

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });


    // Close menu after clicking a link

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });

}
const searchBtn = document.getElementById("searchBtn");
const searchContainer = document.querySelector(".search-container");
const searchInput = document.getElementById("searchInput");

if (searchBtn && searchContainer) {
    searchBtn.addEventListener("click", () => {
        searchContainer.classList.toggle("active");

        if (searchContainer.classList.contains("active")) {
            searchInput.focus();
        }
    });
}
// ==========================
// LIGHT / DARK MODE
// ==========================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    // Load saved preference
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeBtn.classList.remove("fa-moon");
        themeBtn.classList.add("fa-sun");
    }


    // Change theme when clicked
    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const isDark = document.body.classList.contains("dark");

        if (isDark) {

            localStorage.setItem("theme", "dark");

            themeBtn.classList.remove("fa-moon");
            themeBtn.classList.add("fa-sun");

        } else {

            localStorage.setItem("theme", "light");

            themeBtn.classList.remove("fa-sun");
            themeBtn.classList.add("fa-moon");

        }

    });
}