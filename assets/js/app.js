console.log("App.js loaded!");
// Restore saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}
// ==========================
// DARK MODE
// ==========================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

if (document.body.classList.contains("dark-mode")) {

    localStorage.setItem("theme", "dark");

    themeBtn.classList.replace("fa-moon", "fa-sun");

} else {

    localStorage.setItem("theme", "light");

    themeBtn.classList.replace("fa-sun", "fa-moon");

}

    });
}


// ==========================
// SEARCH BUTTON
// ==========================

const searchBtn = document.getElementById("searchBtn");
const searchContainer = document.getElementById("searchContainer");

if (searchBtn && searchContainer) {

    searchBtn.addEventListener("click", () => {

        searchContainer.classList.toggle("active");

    });

}
// ==========================
// SEARCH PRODUCTS
// ==========================

const searchInput = document.getElementById("searchInput");

if(searchInput){

    searchInput.addEventListener("input",()=>{

        const keyword = searchInput.value.toLowerCase();

        const filtered = products.filter(product=>

            product.title.toLowerCase().includes(keyword) ||

            product.category.toLowerCase().includes(keyword) ||

            product.description.toLowerCase().includes(keyword)

        );

        displayProducts(filtered);

    });

}

                    

// ==========================
// DISPLAY PRODUCTS
// ==========================

function displayProducts(productList){

    const grid = document.getElementById("productGrid");

    if(!grid) return;

    grid.innerHTML = "";

    productList.forEach(product=>{

        grid.innerHTML += `
            <div class="product-card">

                <img src="${product.image}" alt="${product.title}">

                <div class="product-info">

                    <span class="category">${product.category}</span>

                    <h3>${product.title}</h3>

                    <p>${product.description}</p>

<a href="product.html?id=${product.id}" class="product-btn">
    Read Full Review →
</a>

                </div>

            </div>
        `;

    });

}

displayProducts(products);
// ==========================
// CATEGORY FILTER
// ==========================

const categoryCards = document.querySelectorAll(".category-card");

categoryCards.forEach(card => {

    card.addEventListener("click", () => {

        // Remove active class from all cards
        categoryCards.forEach(c => c.classList.remove("active"));

        // Highlight selected card
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

        // Scroll to Featured Products
        document.querySelector(".products").scrollIntoView({
            behavior: "smooth"
        });

    });

});