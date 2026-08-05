// ================================
// PRODUCT PAGE SCRIPT
// ================================

// Get product ID from URL
const params = new URLSearchParams(window.location.search);
const productId = Number(params.get("id"));

// Find the selected product
const product = products.find(p => p.id === productId);

// If product doesn't exist
if (!product) {

    document.body.innerHTML = `
        <div style="
            display:flex;
            justify-content:center;
            align-items:center;
            height:100vh;
            flex-direction:column;
            font-family:Arial;
        ">
            <h1>Product Not Found</h1>

            <a href="index.html">
                Return Home
            </a>
        </div>
    `;

    throw new Error("Product not found");

}
// ======================================
// LOAD PRODUCT INFORMATION
// ======================================

// Main Product Image
const mainImage = document.getElementById("image");

if (product.images && product.images.length > 0) {
    mainImage.src = product.images[0];
}

// Product Title
document.getElementById("title").textContent = product.title;

// Category
document.getElementById("category").textContent = product.category;

// Price
document.getElementById("price").textContent = product.price;

// Rating
document.getElementById("rating").textContent =
    "⭐ " + product.rating + " / 5";

// Reviews Count
document.getElementById("reviews").textContent =
    product.reviews + " Reviews";

// Description
document.getElementById("description").textContent =
    product.description;

// Buy Button
const buyBtn = document.getElementById("buyBtn");

buyBtn.href = product.amazon;
buyBtn.target = "_blank";