// Fungsi pencarian untuk menyaring bot berdasarkan nama
function searchScript() {
  const input = document.getElementById('searchInput');
  const filter = input.value.toLowerCase();
  const botCards = document.querySelectorAll('.bot-card');
  
  botCards.forEach(card => {
    const title = card.getAttribute('data-title').toLowerCase();
    card.style.display = title.includes(filter) ? 'block' : 'none';
  });
}

// Event listener pencarian
document.getElementById('searchInput').addEventListener('input', searchScript);

// Notifikasi saat halaman dimuat
window.addEventListener('load', () => {
  console.log('Website Koleksi Bot WhatsApp MD berhasil dimuat!');
});
