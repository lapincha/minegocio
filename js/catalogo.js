// catalogo.js con búsqueda funcional

// Lista de productos (sin cambios)
const productos = [
  {
    id: 1,
    nombre: "iPhone 16 Pro Max",
    imagen: "img/rm11.webp",
    badge: "Tope de gama",
    descripcion: "Pantalla Super Retina XDR de 6.9″, chip A18 Pro, cámara de 48MP con zoom óptico 5x, batería para todo el día y titanio de grado aeroespacial.",
    precio: "$1,199.99",
    moneda: "USD"
  },
  {
    id: 2,
    nombre: "Samsung Galaxy S24 Ultra",
    imagen: "",
    badge: "Inteligencia IA",
    descripcion: "Pantalla Dynamic AMOLED 2X de 6.8″, Snapdragon 8 Gen 3, S Pen integrado, cámara de 200MP con zoom 100x y Galaxy AI.",
    precio: "$1,299.99",
    moneda: "USD"
  },
  {
    id: 3,
    nombre: "Xiaomi 14 Ultra",
    imagen: "",
    badge: "Leica Edition",
    descripcion: "Pantalla AMOLED de 6.73″ 120Hz, Snapdragon 8 Gen 3, sistema de cámara Leica de 4x50MP, batería de 5000mAh y carga rápida de 90W.",
    precio: "$1,099.99",
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
