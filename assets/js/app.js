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

const categoryCards =
    document.querySelectorAll(".category-card");

const regionSelector =
    document.getElementById("regionSelector");


// ==========================
// REGION SYSTEM
// ==========================

let currentRegion =
    localStorage.getItem("findwiseRegion") || "IN";


// ==========================
// GET CURRENT PRODUCT CATALOG
// ==========================

function getCurrentProducts() {

    if (currentRegion === "US") {

        return typeof productsUSA !== "undefined"
            ? productsUSA
            : [];

    }

    return typeof productsIndia !== "undefined"
        ? productsIndia
        : [];

}


// ==========================
// SET REGION SELECTOR
// ==========================

if (regionSelector) {

    regionSelector.value =
        currentRegion;

}


// ==========================
// CHANGE REGION
// ==========================

if (regionSelector) {

    regionSelector.addEventListener(
        "change",
        function () {

            currentRegion =
                this.value;

            // Save region
            localStorage.setItem(
                "findwiseRegion",
                currentRegion
            );

            // Clear search
            if (searchInput) {
                searchInput.value = "";
            }

            // Display new catalog
            displayProducts(
                getCurrentProducts()
            );

        }
    );

}


// ==========================
// DISPLAY PRODUCTS
// ==========================

function displayProducts(productList) {

    if (!grid) {
        return;
    }


    grid.innerHTML = "";


    // ==========================
    // NO PRODUCTS
    // ==========================

    if (
        !productList ||
        productList.length === 0
    ) {

        if (currentRegion === "US") {

            grid.innerHTML = `

                <div
                    style="
                        text-align:center;
                        grid-column:1/-1;
                        padding:40px 20px;
                    "
                >

                    <h2>
                        🇺🇸 USA Amazon Finds Coming Soon
                    </h2>

                    <p>
                        We are currently adding
                        hand-picked Amazon.com products
                        for our USA shoppers.
                    </p>

                </div>

            `;

        } else {

            grid.innerHTML = `

                <p
                    style="
                        text-align:center;
                        grid-column:1/-1;
                    "
                >
                    No products found.
                </p>

            `;

        }

        return;
    }


    // ==========================
    // RENDER PRODUCTS
    // ==========================

    productList.forEach(product => {

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


// ==========================
// INITIAL DISPLAY
// ==========================

if (
    typeof productsIndia !== "undefined" &&
    typeof productsUSA !== "undefined"
) {

    displayProducts(
        getCurrentProducts()
    );

}


// ==========================
// SEARCH BUTTON
// ==========================

if (
    searchBtn &&
    searchContainer
) {

    searchBtn.addEventListener(
        "click",
        function () {

            if (
                !searchContainer.classList.contains(
                    "active"
                )
            ) {

                searchContainer.classList.add(
                    "active"
                );

                if (searchInput) {
                    searchInput.focus();
                }

                return;
            }

            searchProducts();

        }
    );

}


// ==========================
// SEARCH PRODUCTS
// ==========================

function searchProducts() {

    if (
        !searchInput ||
        typeof productsIndia === "undefined"
    ) {
        return;
    }


    const keyword =
        searchInput.value
            .toLowerCase()
            .trim();


    const currentProducts =
        getCurrentProducts();


    // Empty search
    if (keyword === "") {

        displayProducts(
            currentProducts
        );

        return;
    }


    const filtered =
        currentProducts.filter(
            product =>

                product.title
                    .toLowerCase()
                    .includes(keyword)

                ||

                product.category
                    .toLowerCase()
                    .includes(keyword)

                ||

                product.description
                    .toLowerCase()
                    .includes(keyword)

        );


    displayProducts(filtered);


    const productSection =
        document.getElementById(
            "featured-products"
        );


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

    searchInput.addEventListener(
        "input",
        function () {

            const keyword =
                this.value
                    .toLowerCase()
                    .trim();


            const currentProducts =
                getCurrentProducts();


            if (keyword === "") {

                displayProducts(
                    currentProducts
                );

                return;

            }


            const filtered =
                currentProducts.filter(
                    product =>

                        product.title
                            .toLowerCase()
                            .includes(keyword)

                        ||

                        product.category
                            .toLowerCase()
                            .includes(keyword)

                        ||

                        product.description
                            .toLowerCase()
                            .includes(keyword)

                );


            displayProducts(filtered);

        }
    );


    // ==========================
    // ENTER KEY
    // ==========================

    searchInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                searchProducts();

            }

        }
    );

}


// ==========================
// SEARCH SUBMIT
// ==========================

if (searchSubmit) {

    searchSubmit.addEventListener(
        "click",
        function () {

            searchProducts();

        }
    );

}


// ==========================
// CATEGORY FILTER
// ==========================

categoryCards.forEach(card => {

    card.addEventListener(
        "click",
        function () {

            categoryCards.forEach(
                c =>
                    c.classList.remove(
                        "active"
                    )
            );


            this.classList.add("active");


            const category =
                this.dataset.category;


            const currentProducts =
                getCurrentProducts();


            // Show everything
            if (
                category === "All" ||
                category === "All Products"
            ) {

                displayProducts(
                    currentProducts
                );

            } else {

                const filtered =
                    currentProducts.filter(
                        product =>
                            product.category ===
                            category
                    );


                displayProducts(filtered);

            }


            const productSection =
                document.querySelector(
                    ".products"
                );


            if (productSection) {

                productSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

});


// ==========================
// THEME
// ==========================

function applyTheme(theme) {

    if (theme === "dark") {

        document.body.classList.add("dark");

        if (themeBtn) {

            themeBtn.classList.remove(
                "fa-moon"
            );

            themeBtn.classList.add(
                "fa-sun"
            );

        }

    } else {

        document.body.classList.remove(
            "dark"
        );

        if (themeBtn) {

            themeBtn.classList.remove(
                "fa-sun"
            );

            themeBtn.classList.add(
                "fa-moon"
            );

        }

    }

}


// ==========================
// LOAD SAVED THEME
// ==========================

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    applyTheme("dark");

} else {

    applyTheme("light");

}


// ==========================
// THEME BUTTON
// ==========================

if (themeBtn) {

    themeBtn.addEventListener(
        "click",
        function () {

            const isDark =
                document.body.classList.contains(
                    "dark"
                );


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

        }
    );

}


// ==========================
// MOBILE MENU
// ==========================

if (
    menuBtn &&
    navLinks
) {

    menuBtn.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle(
                "active"
            );

        }
    );

}