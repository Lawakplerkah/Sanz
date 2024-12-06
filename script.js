// Data Produk
const produkSewa = [
  { nama: "Paket S1", harga: "Rp15.000 / Group", deskripsi: "Masa aktif 15 Hari", gambar: "https://files.catbox.moe/7prydh.jpg" },
  { nama: "Paket S2", harga: "Rp25.000 / Group", deskripsi: "Masa aktif 1 Bulan", gambar: "https://files.catbox.moe/7prydh.jpg" },
  { nama: "Paket S3", harga: "Rp40.000 / Group", deskripsi: "Masa aktif 2 Bulan", gambar: "https://files.catbox.moe/7prydh.jpg" },
  { nama: "Paket S4", harga: "Rp50.000 / Group", deskripsi: "Masa aktif 3 Bulan", gambar: "https://files.catbox.moe/7prydh.jpg" },
  { nama: "Paket S5", harga: "Rp60.000 / Group", deskripsi: "Masa aktif 4 Bulan", gambar: "https://files.catbox.moe/7prydh.jpg" },
  { nama: "Paket S6", harga: "Rp75.000 / Group", deskripsi: "Masa aktif 6 Bulan", gambar: "https://files.catbox.moe/7prydh.jpg" },
];

const produkPremium = [
  { nama: "Paket P1", harga: "Rp5.000 / 7 Day", deskripsi: "Unlock Feature Premium", gambar: "https://files.catbox.moe/7prydh.jpg" },
  { nama: "Paket P2", harga: "Rp10.000 / 15 Day", deskripsi: "Unlock Feature Premium", gambar: "https://files.catbox.moe/7prydh.jpg" },
  { nama: "Paket P3", harga: "Rp20.000 / 30 Day", deskripsi: "Perpanjang Rp15.000 (hemat 25%)", gambar: "https://files.catbox.moe/7prydh.jpg" },
  { nama: "Paket P4", harga: "Rp30.000 / 60 Day", deskripsi: "Perpanjang Rp25.000 (hemat 17%)", gambar: "https://files.catbox.moe/7prydh.jpg" },
  { nama: "Paket P5", harga: "Rp40.000 / 90 Day", deskripsi: "Perpanjang Rp35.000 (hemat 10%)", gambar: "https://files.catbox.moe/7prydh.jpg" },
  { nama: "Paket P6", harga: "Rp50.000 / 120 Day", deskripsi: "Unlimited Limit", gambar: "https://files.catbox.moe/7prydh.jpg" },
];

// Variabel Pagination
let currentPage = 1;
const productsPerPage = 6;

// Fungsi untuk menampilkan produk
const displayProducts = (products) => {
  const produkSewaContainer = document.getElementById("produk-sewa");
  const produkPremiumContainer = document.getElementById("produk-premium");

  // Clear containers
  produkS
