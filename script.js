// Data Produk Sewa dan Premium
const produkSewa = [
    {
        nama: "Paket Sewa S1",
        deskripsi: "Rp15.000 / Group - 15 Hari aktif",
        harga: "Rp15.000",
        gambar: "https://via.placeholder.com/150",
    },
    {
        nama: "Paket Sewa S2",
        deskripsi: "Rp25.000 / Group - 1 Bulan aktif",
        harga: "Rp25.000",
        gambar: "https://via.placeholder.com/150",
    },
    {
        nama: "Paket Sewa S3",
        deskripsi: "Rp40.000 / Group - 2 Bulan aktif",
        harga: "Rp40.000",
        gambar: "https://via.placeholder.com/150",
    },
    {
        nama: "Paket Sewa S4",
        deskripsi: "Rp50.000 / Group - 3 Bulan aktif",
        harga: "Rp50.000",
        gambar: "https://via.placeholder.com/150",
    },
    {
        nama: "Paket Sewa S5",
        deskripsi: "Rp60.000 / Group - 4 Bulan aktif",
        harga: "Rp60.000",
        gambar: "https://via.placeholder.com/150",
    }
];

const produkPremium = [
    {
        nama: "Paket Premium P1",
        deskripsi: "Rp5.000 / 7 Hari - Unlock Feature Premium",
        harga: "Rp5.000",
        gambar: "https://via.placeholder.com/150",
    },
    {
        nama: "Paket Premium P2",
        deskripsi: "Rp10.000 / 15 Hari - Unlock Feature Premium",
        harga: "Rp10.000",
        gambar: "https://via.placeholder.com/150",
    },
    {
        nama: "Paket Premium P3",
        deskripsi: "Rp20.000 / 30 Hari - Perpanjang hemat 25%",
        harga: "Rp20.000",
        gambar: "https://via.placeholder.com/150",
    },
    {
        nama: "Paket Premium P4",
        deskripsi: "Rp30.000 / 60 Hari - Perpanjang hemat 17%",
        harga: "Rp30.000",
        gambar: "https://via.placeholder.com/150",
    }
];

// Variabel untuk pagination
let currentPage = 1;
const productsPerPage = 3;

// Fungsi untuk menampilkan produk
const displayProducts = (products) => {
    const produkSewaContainer = document.getElementById("produk-sewa");
    const produkPremiumContainer = document.getElementById("produk-premium");

    // Clear containers sebelum menampilkan produk baru
    produkSewaContainer.innerHTML = "";
    produkPremiumContainer.innerHTML = "";

    products.forEach(product => {
        const produkItem = document.createElement("div");
        produkItem.classList.add("produk-item");

        produkItem.innerHTML = `
            <img src="${product.gambar}" alt="${product.nama}" class="produk-image">
            <h3 class="produk-name">${product.nama}</h3>
            <p class="produk-description">${product.deskripsi}</p>
            <p class="produk-price">${product.harga}</p>
            <button class="button-buy">Beli Sekarang</button>
        `;

        // Menambahkan produk sesuai kategori
        if (produkSewa.includes(product)) {
            produkSewaContainer.appendChild(produkItem);
        } else {
            produkPremiumContainer.appendChild(produkItem);
        }
    });
};

// Fungsi untuk mengupdate status pagination (Prev, Next)
const updatePagination = () => {
    const allProducts = [...produkSewa, ...produkPremium];
    const totalProducts = allProducts.length;
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    // Update tampilan halaman aktif
    document.getElementById('page-number').textContent = `Page ${currentPage} of ${totalPages}`;

    // Mengatur tombol Prev dan Next berdasarkan halaman aktif
    document.getElementById('prev-page').disabled = currentPage === 1;
    document.getElementById('next-page').disabled = currentPage === totalPages;

    // Menampilkan produk berdasarkan halaman aktif
    const currentProducts = allProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);
    displayProducts(currentProducts);
};

// Fungsi navigasi halaman
document.getElementById('next-page').addEventListener('click', () => {
    currentPage++;
    updatePagination();
});

document.getElementById('prev-page').addEventListener('click', () => {
    currentPage--;
    updatePagination();
});

// Fungsi pencarian produk
const filterProducts = () => {
    const searchQuery = document.getElementById("search-input").value.toLowerCase();

    // Menyaring produk sesuai query pencarian
    const filteredSewa = produkSewa.filter(product => product.nama.toLowerCase().includes(searchQuery));
    const filteredPremium = produkPremium.filter(product => product.nama.toLowerCase().includes(searchQuery));

    // Gabungkan produk yang sudah difilter
    const filteredProducts = [...filteredSewa, ...filteredPremium];

    // Update pagination setelah pencarian
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    currentPage = 1; // Reset ke halaman pertama setelah pencarian
    document.getElementById('page-number').textContent = `Page 1 of ${totalPages}`;

    // Menampilkan produk yang sudah difilter
    displayProducts(filteredProducts.slice(0, productsPerPage));
};

// Inisialisasi halaman pertama dengan produk default
updatePagination();

// Fungsi pencarian produk
const filterProducts = () => {
    const searchQuery = document.getElementById("search-input").value.toLowerCase();

    // Menyaring produk sesuai query pencarian
    const filteredSewa = produkSewa.filter(product => product.nama.toLowerCase().includes(searchQuery));
    const filteredPremium = produkPremium.filter(product => product.nama.toLowerCase().includes(searchQuery));

    // Gabungkan produk yang sudah difilter
    const filteredProducts = [...filteredSewa, ...filteredPremium];

    // Update pagination setelah pencarian
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    currentPage = 1; // Reset ke halaman pertama setelah pencarian
    document.getElementById('page-number').textContent = `Page 1 of ${totalPages}`;

    // Menampilkan produk yang sudah difilter
    displayProducts(filteredProducts.slice(0, productsPerPage));
};

// Inisialisasi halaman pertama dengan produk default
updatePagination();
// Fungsi untuk mengupdate status pagination (Prev, Next)
const updatePagination = () => {
    const allProducts = [...produkSewa, ...produkPremium];
    const totalProducts = allProducts.length;
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    // Update tampilan halaman aktif
    document.getElementById('page-number').textContent = `Page ${currentPage} of ${totalPages}`;

    // Mengatur tombol Prev dan Next berdasarkan halaman aktif
    document.getElementById('prev-page').disabled = currentPage === 1;
    document.getElementById('next-page').disabled = currentPage === totalPages;

    // Menampilkan produk berdasarkan halaman aktif
    const currentProducts = allProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);
    displayProducts(currentProducts);
};

// Fungsi navigasi halaman
document.getElementById('next-page').addEventListener('click', () => {
    currentPage++;
    updatePagination();
});

document.getElementById('prev-page').addEventListener('click', () => {
    currentPage--;
    updatePagination();
});

// Fungsi pencarian produk
const filterProducts = () => {
    const searchQuery = document.getElementById("search-input").value.toLowerCase();

    // Menyaring produk sesuai query pencarian
    const filteredSewa = produkSewa.filter(product => product.nama.toLowerCase().includes(searchQuery));
    const filteredPremium = produkPremium.filter(product => product.nama.toLowerCase().includes(searchQuery));

    // Gabungkan produk yang sudah difilter
    const filteredProducts = [...filteredSewa, ...filteredPremium];

    // Update pagination setelah pencarian
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    currentPage = 1; // Reset ke halaman pertama setelah pencarian
    document.getElementById('page-number').textContent = `Page 1 of ${totalPages}`;

    // Menampilkan produk yang sudah difilter
    displayProducts(filteredProducts.slice(0, productsPerPage));
};

// Fungsi untuk menampilkan produk
const displayProducts = (products) => {
    const produkSewaContainer = document.getElementById("produk-sewa");
    const produkPremiumContainer = document.getElementById("produk-premium");

    // Clear containers sebelum menampilkan produk baru
    produkSewaContainer.innerHTML = "";
    produkPremiumContainer.innerHTML = "";

    products.forEach(product => {
        const produkItem = document.createElement("div");
        produkItem.classList.add("produk-item");

        produkItem.innerHTML = `
            <img src="${product.gambar}" alt="${product.nama}" class="produk-image">
            <h3 class="produk-name">${product.nama}</h3>
            <p class="produk-description">${product.deskripsi}</p>
            <p class="produk-price">${product.harga}</p>
            <button class="button-buy">Beli Sekarang</button>
        `;

        // Menambahkan produk sesuai kategori
        if (produkSewa.includes(product)) {
            produkSewaContainer.appendChild(produkItem);
        } else {
            produkPremiumContainer.appendChild(produkItem);
        }
    });
};

// Inisialisasi halaman pertama dengan produk default
updatePagination();

// Fungsi untuk membeli produk
const buyProduct = (product) => {
    // Tampilkan modal atau proses pembelian di sini
    alert(`Anda telah memilih produk: ${product.nama} dengan harga: ${product.harga}`);
    // Bisa juga arahkan ke halaman pembayaran atau modal lain yang diperlukan
};

// Menambahkan event listener pada tombol 'Beli Sekarang' untuk setiap produk
const addBuyButtonListeners = () => {
    const buyButtons = document.querySelectorAll('.button-buy');
    
    buyButtons.forEach((button, index) => {
        const product = [...produkSewa, ...produkPremium][index];
        
        button.addEventListener('click', () => {
            buyProduct(product);
        });
    });
};

// Mengupdate halaman setiap kali produk ditampilkan atau setelah pencarian
const updatePageContent = () => {
    updatePagination(); // Update pagination
    addBuyButtonListeners(); // Tambahkan event listener untuk tombol beli
};

// Fungsi untuk menyimpan atau memproses data produk (misalnya dengan API)
const processPayment = (paymentDetails) => {
    // Implementasikan proses pembayaran (misalnya dengan API)
    console.log("Proses pembayaran dengan detail:", paymentDetails);
    // Mengarahkan pengguna ke halaman pembayaran atau melanjutkan transaksi
};

// Fungsi untuk memunculkan informasi lebih lanjut mengenai produk
const showProductDetails = (product) => {
    const productDetailsModal = document.getElementById("product-details-modal");
    
    // Menampilkan detail produk di dalam modal
    productDetailsModal.innerHTML = `
        <div class="modal-content">
            <h3>${product.nama}</h3>
            <img src="${product.gambar}" alt="${product.nama}" class="produk-image">
            <p>${product.deskripsi}</p>
            <p><strong>Harga: ${product.harga}</strong></p>
            <button class="button-close">Tutup</button>
        </div>
    `;

    // Menampilkan modal
    productDetailsModal.style.display = 'block';

    // Menutup modal saat tombol tutup diklik
    document.querySelector('.button-close').addEventListener('click', () => {
        productDetailsModal.style.display = 'none';
    });
};

// Event listener untuk membuka detail produk saat gambar atau nama produk diklik
const addProductDetailListeners = () => {
    const productItems = document.querySelectorAll('.produk-item');

    productItems.forEach((item, index) => {
        const product = [...produkSewa, ...produkPremium][index];
        
        item.addEventListener('click', () => {
            showProductDetails(product);
        });
    });
};

// Menampilkan detail produk di modal
const showProductDetailsModal = (product) => {
    const modal = document.getElementById('product-details-modal');
    const closeButton = modal.querySelector('.close');

    // Mengisi konten modal dengan informasi produk
    modal.querySelector('.modal-body').innerHTML = `
        <h2>${product.nama}</h2>
        <img src="${product.gambar}" alt="${product.nama}" />
        <p>${product.deskripsi}</p>
        <p><strong>Harga: ${product.harga}</strong></p>
    `;

    // Menampilkan modal
    modal.style.display = 'block';

    // Menutup modal saat tombol tutup diklik
    closeButton.onclick = () => {
        modal.style.display = 'none';
    };

    // Menutup modal saat klik di luar modal
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
};

// Memanggil fungsi inisialisasi untuk mendengarkan event pada produk dan tombol beli
updatePageContent();
addProductDetailListeners(); // Menambahkan listener untuk produk detail