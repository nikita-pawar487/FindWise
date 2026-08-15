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
const searchSubmit = document.getElementById("searchSubmit");
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

    // If search bar is closed, open it
    if (!searchContainer.classList.contains("active")) {

        searchContainer.classList.add("active");

        searchInput.focus();

        return;
    }

    // If search bar is already open, perform search
    searchProducts();

});

}
// ==========================
// SEARCH PRODUCTS
// ==========================

function searchProducts() {

    if (!searchInput || typeof products === "undefined") return;

    const keyword = searchInput.value.toLowerCase().trim();

    // Empty search
    if (keyword === "") {

        displayProducts(products);

        return;
    }

    const filtered = products.filter(product =>
        product.title.toLowerCase().includes(keyword) ||
        product.category.toLowerCase().includes(keyword) ||
        product.description.toLowerCase().includes(keyword)
    );

    // Display matching products
    displayProducts(filtered);

    // No products found
    if (filtered.length === 0) {

        grid.innerHTML = `
            <div class="no-results">
                <h3>🔍 No products found</h3>
                <p>
                    We couldn't find anything matching
                    "<strong>${searchInput.value}</strong>".
                </p>
                <p>
                    Try another search or browse our categories.
                </p>
            </div>
        `;

        return;
    }

    // Automatically move to the products
    const productSection =
        document.getElementById("featured-products");

    if (productSection) {

        setTimeout(() => {

            productSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 100);

    }

}


// Search while typing
if (searchInput) {

    searchInput.addEventListener("input", function () {

        const keyword = this.value.toLowerCase().trim();

        if (keyword === "") {

            displayProducts(products);

            return;

        }

        const filtered = products.filter(product =>
            product.title.toLowerCase().includes(keyword) ||
            product.category.toLowerCase().includes(keyword) ||
            product.description.toLowerCase().includes(keyword)
        );

        displayProducts(filtered);

    });


    // Search when pressing Enter
    searchInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            event.preventDefault();

            searchProducts();

        }

    });
    if (searchSubmit) {

    searchSubmit.addEventListener("click", function () {

        const keyword = searchInput.value.toLowerCase().trim();

        // Don't do anything for an empty search
        if (keyword === "") {
            return;
        }

        const filtered = products.filter(product =>
            product.title.toLowerCase().includes(keyword) ||
            product.category.toLowerCase().includes(keyword) ||
            product.description.toLowerCase().includes(keyword)
        );

        // ==========================
        // NO PRODUCT FOUND
        // ==========================

        if (filtered.length === 0) {

            grid.innerHTML = `
                <div class="no-results" style="
                    width: 100%;
                    text-align: center;
                    padding: 40px 20px;
                    box-sizing: border-box;
                ">
                    <h2>🔍 No products found</h2>

                    <p>
                        Sorry, we couldn't find anything matching
                        "<strong>${searchInput.value}</strong>".
                    </p>

                    <p>
                        Try another search or browse our categories.
                    </p>
                </div>
            `;

            const productSection =
                document.getElementById("featured-products");

            if (productSection) {

                productSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

            return;
        }

        // ==========================
        // PRODUCTS FOUND
        // ==========================

        displayProducts(filtered);

        const productSection =
            document.getElementById("featured-products");

        if (productSection) {

            productSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

}

displayProducts(filtered);

        const productSection =
            document.getElementById("featured-products");

        if (productSection) {

            productSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
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
}