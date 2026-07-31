// ==========================
// ELEMENTS
// ==========================

const grid = document.querySelector(".product-grid");
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

// Show all products initially
displayProducts(products);

// ==========================
// SEARCH
// ==========================

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const keyword = this.value.toLowerCase();

        const filtered = products.filter(product =>

            product.title.toLowerCase().includes(keyword) ||

            product.category.toLowerCase().includes(keyword)

        );

        displayProducts(filtered);

        const productSection = document.querySelector(".products");

        if (productSection) {

            productSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

}

// ==========================
// CATEGORY FILTER
// ==========================

categoryCards.forEach(card => {

    card.addEventListener("click", () => {

        categoryCards.forEach(c => c.classList.remove("active"));

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

        document.querySelector(".products").scrollIntoView({
            behavior: "smooth"
        });

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

        if (document.body.classList.contains("dark")) {

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

}
const thumbnailContainer = document.getElementById("thumbnails");

product.images.forEach((imgPath) => {

    const thumb = document.createElement("img");

    thumb.src = imgPath;

    thumb.addEventListener("click", () => {

        document.getElementById("image").src = imgPath;

    });

    thumbnailContainer.appendChild(thumb);

});