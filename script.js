// Fungsi untuk mengubah mode gelap/terang
document.querySelector('.dark-mode-toggle').addEventListener('click', () => {
  // Toggle kelas 'dark-mode' pada body
  document.body.classList.toggle('dark-mode');
});

// Fungsi untuk menampilkan dan menyembunyikan menu navigasi di perangkat kecil
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
  // Menambah atau menghapus kelas 'active' pada menu untuk mengubah visibilitas
  navMenu.classList.toggle('active');
});
