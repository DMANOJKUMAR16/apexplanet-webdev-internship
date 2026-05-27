const products = [

    {
        name: "Laptop",
        category: "electronics",
        price: 75000
    },

    {
        name: "Smartphone",
        category: "electronics",
        price: 30000
    },

    {
        name: "T-Shirt",
        category: "fashion",
        price: 1200
    },

    {
        name: "Jeans",
        category: "fashion",
        price: 2500
    },

    {
        name: "JavaScript Book",
        category: "books",
        price: 800
    },

    {
        name: "React Guide",
        category: "books",
        price: 1500
    }

];

const productContainer =
    document.getElementById("productContainer");

const categoryFilter =
    document.getElementById("categoryFilter");

const sortPrice =
    document.getElementById("sortPrice");

/* Display Products */

function displayProducts(productList) {

    productContainer.innerHTML = "";

    productList.forEach(product => {

        const productCard =
            document.createElement("div");

        productCard.classList.add("product-card");

        productCard.innerHTML = `

            <h3>${product.name}</h3>

            <p>
                Category:
                ${product.category}
            </p>

            <p>
                Price:
                ₹${product.price}
            </p>

        `;

        productContainer.appendChild(productCard);

    });

}

/* Filter & Sort */

function filterAndSortProducts() {

    let filteredProducts = [...products];

    const selectedCategory =
        categoryFilter.value;

    const selectedSort =
        sortPrice.value;

    /* Filter */

    if (selectedCategory !== "all") {

        filteredProducts =
            filteredProducts.filter(product =>
                product.category === selectedCategory
            );

    }

    /* Sort */

    if (selectedSort === "low-high") {

        filteredProducts.sort(
            (a, b) => a.price - b.price
        );

    }

    if (selectedSort === "high-low") {

        filteredProducts.sort(
            (a, b) => b.price - a.price
        );

    }

    displayProducts(filteredProducts);

}

/* Event Listeners */

categoryFilter.addEventListener(
    "change",
    filterAndSortProducts
);

sortPrice.addEventListener(
    "change",
    filterAndSortProducts
);

/* Initial Render */

displayProducts(products);