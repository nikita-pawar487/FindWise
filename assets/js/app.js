// ==========================================
// FINDWISE MAIN JAVASCRIPT
// ==========================================

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

                    <img
                        src="${product.images[0]}"
                        alt="${product.title}"
                    >

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

                        <p>
                            ${product.description}
                        </p>

                        <span class="product-btn">
                            Read Full Review →
                        </span>

                    </div>

                </div>

            </a>
        `;

    });

}


// Show products when page loads
if (typeof products !== "undefined") {
    displayProducts(products);
}


// ==========================
// SEARCH BUTTON
// ==========================

if (searchBtn && searchContainer) {

    searchBtn.addEventListener("click", function () {

        searchContainer.classList.toggle("active");

        if (searchContainer.classList.contains("active")) {

            searchInput.focus();

        } else {

            searchInput.value = "";

            if (typeof products !== "undefined") {
                displayProducts(products);
            }

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

        // Automatically scroll to the product results
        if (keyword !== "") {

            const productSection =
                document.getElementById("featured-products");

            if (productSection) {

                productSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }

    });

}


// ==========================
// CATEGORY FILTER
// ==========================

categoryCards.forEach(card => {

    card.addEventListener("click", function () {

        categoryCards.forEach(c =>
            c.classList.remove("active")
        );

        this.classList.add("active");

        const category = this.dataset.category;

        if (typeof products === "undefined") return;


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
                behavior: "smooth"
            });

        }

    });

});


// ==========================
// LIGHT / DARK MODE
// ==========================

function applyTheme(theme) {

    if (theme === "dark") {

        document.body.classList.add("dark");

        if (themeBtn) {

            themeBtn.classList.remove("fa-moon");
            themeBtn.classList.add("fa-sun");

        }

    } else {

        document.body.classList.remove("dark");

        if (themeBtn) {

            themeBtn.classList.remove("fa-sun");
            themeBtn.classList.add("fa-moon");

        }

    }

}


// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    applyTheme("dark");

} else {

    applyTheme("light");

}


// Theme button
if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        const isDark =
            document.body.classList.contains("dark");

        if (isDark) {

            applyTheme("light");

            localStorage.setItem("theme", "light");

        } else {

            applyTheme("dark");

            localStorage.setItem("theme", "dark");

        }

    });

}


// ==========================
// MOBILE MENU
// ==========================

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

}