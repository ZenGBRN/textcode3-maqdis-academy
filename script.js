// Dummy data produk
const products = [
  { id: 1, name: "Ayat Pilihan", description: "Koleksi ayat pilihan untuk dipelajari.", price: "Rp 0 (Free)" },
  { id: 2, name: "10 Hari Hafal Al-Muzzammil", description: "Program hafalan surah Al-Muzzammil dalam 10 hari.", price: "Rp 50.000" },
  { id: 3, name: "30 Hari Hafal Al-Mulk", description: "Program intensif hafalan surah Al-Mulk selama 30 hari.", price: "Rp 100.000" }
];

// Tampilkan daftar produk
function renderProductList() {
  const container = document.getElementById("product-list");
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.description.substring(0, 50)}...</p>
      <a href="product.html?id=${p.id}">Lihat Detail</a>
    `;
    container.appendChild(card);
  });
}

// Tampilkan detail produk berdasarkan ID
function renderProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const product = products.find(p => p.id === id);

  const container = document.getElementById("product-detail");

  if (!product) {
    container.innerHTML = "<p>Produk tidak ditemukan.</p>";
    return;
  }

  container.innerHTML = `
    <h2>${product.name}</h2>
    <p><strong>Deskripsi:</strong> ${product.description}</p>
    <p><strong>Harga:</strong> ${product.price}</p>
    <a href="index.html" style="color:#ff9800;">← Kembali</a>
  `;
}
