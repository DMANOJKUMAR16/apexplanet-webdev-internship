const products = [
    {
        id: 1,
        name: "MacBook Air M2",
        category: "laptop",
        price: 99999
    },
    {
        id: 2,
        name: "Dell XPS 13",
        category: "laptop",
        price: 89999
    },
    {
        id: 3,
        name: "iPhone 15",
        category: "phone",
        price: 79999
    },
    {
        id: 4,
        name: "Samsung S24",
        category: "phone",
        price: 74999
    },
    {
        id: 5,
        name: "Wireless Mouse",
        category: "accessory",
        price: 1499
    },
    {
        id: 6,
        name: "Mechanical Keyboard",
        category: "accessory",
        price: 3999
    }
];

const productsContainer =
    document.getElementById("productsContainer");

const searchInput =
    document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");

const cartCount =
    document.getElementById("cartCount");

let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

updateCartCount();

function displayProducts(productList) {

    productsContainer.innerHTML = "";

    productList.forEach(product => {

        const card =
            document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `
            <h3>${product.name}</h3>

            <p>
                Category:
                ${product.category}
            </p>

            <p>
                Price:
                ₹${product.price}
            </p>

            <button onclick="addToCart(${product.id})">
                Add To Cart
            </button>
        `;

        productsContainer.appendChild(card);

    });

}

function addToCart(id) {

    const product =
        products.find(item => item.id === id);

    cart.push(product);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();

}

function updateCartCount() {

    cartCount.textContent = cart.length;

}

function filterProducts() {

    let filtered = [...products];

    const searchText =
        searchInput.value.toLowerCase();

    const category =
        categoryFilter.value;

    filtered = filtered.filter(product =>
        product.name
            .toLowerCase()
            .includes(searchText)
    );

    if (category !== "all") {

        filtered = filtered.filter(product =>
            product.category === category
        );

    }

    displayProducts(filtered);

}

searchInput.addEventListener(
    "input",
    filterProducts
);

categoryFilter.addEventListener(
    "change",
    filterProducts
);

displayProducts(products);