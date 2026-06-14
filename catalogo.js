// catalogo.js con búsqueda funcional

// Lista de productos (sin cambios)
const productos = [
{
id: 2,
nombre: "RedMagic 11 Pro",
imagen: "img/rm11.webp",
badge: "Gaming extremo",
descripcion: "Snapdragon 8 Gen 3, pantalla AMOLED de 144Hz, batería de 7000mAh con carga de 100W, refrigeración líquida y gatillos táctiles integrados.",
precio: "$799.99",
moneda: "USD"
}
];

// Referencias al DOM
const grid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

// Función para renderizar las tarjetas según un array de productos
function renderizarProductos(productosAMostrar) {
  grid.innerHTML = ''; // Limpiar grid

  if (productosAMostrar.length === 0) {
    grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem;">No se encontraron productos</div>';
    return;
  }

  productosAMostrar.forEach(prod => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.addEventListener('click', () => {
      const params = new URLSearchParams({
        nombre: prod.nombre,
        imagen: prod.imagen,
        badge: prod.badge,
        descripcion: prod.descripcion,
        precio: prod.precio,
        moneda: prod.moneda
      });
      window.location.href = `detalles/producto.html?${params.toString()}`;
    });
    card.innerHTML = `
      <img class="product-card__image" src="${prod.imagen}" alt="${prod.nombre}">
      <div class="product-card__name">${prod.nombre}</div>
    `;
    grid.appendChild(card);
  });
}

// Función para filtrar productos por texto de búsqueda
function filtrarProductos(texto) {
  const textoLower = texto.toLowerCase().trim();
  if (textoLower === '') {
    // Si la búsqueda está vacía, mostrar todos
    renderizarProductos(productos);
  } else {
    const filtrados = productos.filter(prod =>
      prod.nombre.toLowerCase().includes(textoLower)
    );
    renderizarProductos(filtrados);
  }
}

// Eventos: al escribir en el input o hacer clic en el botón
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    filtrarProductos(e.target.value);
  });
}
if (searchButton) {
  searchButton.addEventListener('click', () => {
    filtrarProductos(searchInput.value);
  });
}

// Render inicial: mostrar todos los productos
renderizarProductos(productos);
