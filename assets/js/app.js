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

const regionSelector = document.getElementById("regionSelector");


// ==========================
// REGION SYSTEM
// ==========================

// Get saved region
let currentRegion = localStorage.getItem("findwiseRegion") || "IN";


// Set selector to saved region
if (regionSelector) {
    regionSelector.value = currentRegion;
}


// ==========================
// GET REGION PRODUCT DATA
// ==========================

function getRegionData(product) {

    if (currentRegion === "US") {

        return product.usa;

    }

    return product.india;

}


// ==========================
// REGION SELECTOR
// ==========================

if (regionSelector) {

    regionSelector.addEventListener("change", function () {

        currentRegion = this.value;

        // Remember user's choice
        localStorage.setItem(
            "findwiseRegion",
            currentRegion
        );

        // Refresh products
        displayProducts(products);

    });

}


// ==========================
// DISPLAY PRODUCTS
// ==========================

function displayProducts(productList) {

    if (!grid) return;

    grid.innerHTML = "";

    const availableProducts = productList.filter(product => {

        const regionData = getRegionData(product);

        return regionData &&
               regionData.price &&
               regionData.amazon;

    });


    if (availableProducts.length === 0) {

        if (currentRegion === "US") {

            grid.innerHTML = `
                <div style="
                    text-align:center;
                    grid-column:1/-1;
                    padding:40px 20px;
                ">

                    <h2>🇺🇸 USA products coming soon</h2>

                    <p>
                        We are currently adding Amazon.com products
                        for our USA shoppers.
                    </p>

                    <p>
                        Please check back soon.
                    </p>

                </div>
            `;

        } else {

            grid.innerHTML = `
                <p style="
                    text-align:center;
                    grid-column:1/-1;
                ">
                    No products found.
                </p>
            `;

        }

        return;
    }


    availableProducts.forEach(product => {

        const regionData = getRegionData(product);

        grid.innerHTML += `

            <a
                href="product.html?id=${product.id}"
                class="product-link"
            >

                <div class="product-card">

                    <img
                        src="${product.images[0]}"
                        alt="${product.title}"
                    >

                    <div class="product-info">

                        <span class="category">
                            ${product.category}
                        </span>

                        <h3>
                            ${product.title}
                        </h3>

                        <div class="product-meta">

                            <span class="rating">
                                ⭐ ${product.rating}
                            </span>

                            <span class="price">
                                ${regionData.price}
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


// ==========================
// INITIAL PRODUCT DISPLAY
// ==========================

if (typeof products !== "undefined") {

    displayProducts(products);

}


// ==========================
// SEARCH BUTTON
// ==========================

if (searchBtn && searchContainer) {

    searchBtn.addEventListener("click", function () {

        if (!searchContainer.classList.contains("active")) {

            searchContainer.classList.add("active");

            if (searchInput) {
                searchInput.focus();
            }

            return;
        }

        searchProducts();

    });

}


// ==========================
// SEARCH PRODUCTS
// ==========================

function searchProducts() {

    if (!searchInput || typeof products === "undefined") {
        return;
    }

    const keyword =
        searchInput.value.toLowerCase().trim();


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


// ==========================
// SEARCH WHILE TYPING
// ==========================

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const keyword =
            this.value.toLowerCase().trim();


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

}


// ==========================
// SEARCH SUBMIT BUTTON
// ==========================

if (searchSubmit) {

    searchSubmit.addEventListener("click", function () {

        searchProducts();

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

        const category =
            this.dataset.category;


        if (typeof products === "undefined") {
            return;
        }


        if (category === "All") {

            displayProducts(products);

        } else {

            const filtered =
                products.filter(product =>
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

const savedTheme =
    localStorage.getItem("theme");


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

            localStorage.setItem(
                "theme",
                "light"
            );

        } else {

            applyTheme("dark");

            localStorage.setItem(
                "theme",
                "dark"
            );

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