// Produk Sewa
const produkSewa = [
    {
        nama: "Paket Sewa S1",
        deskripsi: "Rp15.000 / Group - Masa aktif 15 Hari.",
        harga: "Rp15.000",
        gambar: "https://files.catbox.moe/7prydh.jpg",
    },
    {
        nama: "Paket Sewa S2",
        deskripsi: "Rp25.000 / Group - Masa aktif 1 Bulan.",
        harga: "Rp25.000",
        gambar: "https://files.catbox.moe/7prydh.jpg",
    },
    {
        nama: "Paket Sewa S3",
        deskripsi: "Rp40.000 / Group - Masa aktif 2 Bulan.",
        harga: "Rp40.000",
        gambar: "https://files.catbox.moe/7prydh.jpg",
    },
    {
        nama: "Paket Sewa S4",
        deskripsi: "Rp50.000 / Group - Masa aktif 3 Bulan.",
        harga: "Rp50.000",
        gambar: "https://files.catbox.moe/7prydh.jpg",
    },
];

// Produk Premium
const produkPremium = [
    {
        nama: "Paket Premium P1",
        deskripsi: "Rp5.000 / 7 Hari - Unlock Fitur Premium.",
        harga: "Rp5.000",
        gambar: "https://files.catbox.moe/7prydh.jpg",
    },
    {
        nama: "Paket Premium P2",
        deskripsi: "Rp10.000 / 15 Hari - Unlock Fitur Premium.",
        harga: "Rp10.000",
        gambar: "https://files.catbox.moe/7prydh.jpg",
    },
    {
        nama: "Paket Premium P3",
        deskripsi: "Rp20.000 / 30 Hari - Perpanjang Rp15.000.",
        harga: "Rp20.000",
        gambar: "https://files.catbox.moe/7prydh.jpg",
    },
    {
        nama: "Paket Premium P4",
        deskripsi: "Rp30.000 / 60 Hari - Perpanjang Rp25.000.",
        harga: "Rp30.000",
        gambar: "https://files.catbox.moe/7prydh.jpg",
    },
];

// Fungsi untuk menampilkan semua produk
const displayAllProducts = () => {
    const produkSewaContainer = document.getElementById("produk-sewa");
    const produkPremiumContainer = document.getElementById("produk-premium");

    // Clear containers sebelum menampilkan produk
    produkSewaContainer.innerHTML = "";
    produkPremiumContainer.innerHTML = "";

    // Menambahkan produk Sewa
    produkSewa.forEach((product) => {
        const produkItem = document.createElement("div");
        produkItem.classList.add("produk-item");
        produkItem.innerHTML = `
            <img src="${product.gambar}" alt="${product.nama}" class="produk-image">
            <h3 class="produk-name">${product.nama}</h3>
            <p class="produk-description">${product.deskripsi}</p>
            <p class="produk-price">${product.harga}</p>
            <button class="button-buy">Beli Sekarang</button>
        `;
        produkSewaContainer.appendChild(produkItem);
    });

    // Menambahkan produk Premium
    produkPremium.forEach((product) => {
        const produkItem = document.createElement("div");
        produkItem.classList.add("produk-item");
        produkItem.innerHTML = `
            <img src="${product.gambar}" alt="${product.nama}" class="produk-image">
            <h3 class="produk-name">${product.nama}</h3>
            <p class="produk-description">${product.deskripsi}</p>
            <p class="produk-price">${product.harga}</p>
            <button class="button-buy">Beli Sekarang</button>
        `;
        produkPremiumContainer.appendChild(produkItem);
    });

    // Menambahkan event listener untuk tombol beli
    addBuyButtonListeners();
};

// Fungsi untuk membeli produk
const buyProduct = (productName, price) => {
    alert(`Anda memilih produk: ${productName} dengan harga: ${price}`);
};

// Menambahkan event listener pada tombol "Beli Sekarang"
const addBuyButtonListeners = () => {
    const buyButtons = document.querySelectorAll(".button-buy");

    buyButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const allProducts = [...produkSewa, ...produkPremium];
            const selectedProduct = allProducts[index];
            buyProduct(selectedProduct.nama, selectedProduct.harga);
        });
    });
};

// Fungsi pencarian produk
const filterProducts = () => {
    const searchQuery = document.getElementById("search-input").value.toLowerCase();
    const allProducts = [...produkSewa, ...produkPremium];
    const filteredProducts = allProducts.filter((product) =>
        product.nama.toLowerCase().includes(searchQuery)
    );

    // Clear containers sebelum menampilkan produk yang dicari
    const produkSewaContainer = document.getElementById("produk-sewa");
    const produkPremiumContainer = document.getElementById("produk-premium");
    produkSewaContainer.innerHTML = "";
    produkPremiumContainer.innerHTML = "";

    // Menampilkan produk yang dicari
    filteredProducts.forEach((product) => {
        const produkItem = document.createElement("div");
        produkItem.classList.add("produk-item");
        produkItem.innerHTML = `
            <img src="${product.gambar}" alt="${product.nama}" class="produk-image">
            <h3 class="produk-name">${product.nama}</h3>
            <p class="produk-description">${product.deskripsi}</p>
            <p class="produk-price">${product.harga}</p>
            <button class="button-buy">Beli Sekarang</button>
        `;

        if (produkSewa.includes(product)) {
            produkSewaContainer.appendChild(produkItem);
        } else {
            produkPremiumContainer.appendChild(produkItem);
        }
    });

    addBuyButtonListeners(); // Tambahkan event listener untuk tombol beli pada produk hasil pencarian
};

// Inisialisasi
displayAllProducts();
