// catalogo.js - versión simple con separadores

const productos = [
  {
    id: 1,
    nombre: "RedMagic 11 Pro",
    imagen: "img/rm11.webp",
    badge: "Gaming extremo",
    descripcion: "Snapdragon 8 Gen 3, pantalla AMOLED de 144Hz...",
    precio: "$799.99",
    moneda: "USD"
  },
  {
    id: 2,
    nombre: "Samsung Galaxy S24 Ultra",
    imagen: "img/s24ultra.png",
    badge: "IA y productividad",
    descripcion: "Snapdragon 8 Gen 3, pantalla Dynamic AMOLED...",
    precio: "$1199.99",
    moneda: "USD"
  },
  {
    id: 3,
    nombre: "iPhone 16 Pro Max",
    imagen: "img/iphone17pm.png",
    badge: "Tope de gama",
    descripcion: "Pantalla 6.9″, chip A18 Pro...",
    precio: "$1199.99",
    moneda: "USD"
  }
];

const grid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

function renderizarProductos(productosAMostrar) {
  if (!grid) return;
  grid.innerHTML = '';
  
  if (productosAMostrar.length === 0) {
    grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem;">No se encontraron productos</div>';
    return;
  }
  
  // Variable para saber si ya mostramos el título de RedMagic
  let mostradoRedMagic = false;
  let mostradoSamsung = false;
  let mostradoApple = false;
  
  productosAMostrar.forEach(prod => {
    // Mostrar título "RedMagic" antes de sus productos
    if (prod.nombre.includes('RedMagic') && !mostradoRedMagic) {
      const titulo = document.createElement('h2');
      titulo.className = 'brand-separator';
      titulo.textContent = 'RedMagic';
      grid.appendChild(titulo);
      mostradoRedMagic = true;
    }
    
    // Mostrar título "Samsung" antes de sus productos
    if (prod.nombre.includes('Samsung') && !mostradoSamsung) {
      const titulo = document.createElement('h2');
      titulo.className = 'brand-separator';
      titulo.textContent = 'Samsung';
      grid.appendChild(titulo);
      mostradoSamsung = true;
    }
    
    // Mostrar título "iPhone" o "Apple" antes de sus productos
    if (prod.nombre.includes('iPhone') && !mostradoApple) {
      const titulo = document.createElement('h2');
      titulo.className = 'brand-separator';
      titulo.textContent = 'Apple';
      grid.appendChild(titulo);
      mostradoApple = true;
    }
    
    // Crear la tarjeta
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

// Función para filtrar productos
function filtrarProductos(texto) {
  const textoLower = texto.toLowerCase().trim();
  if (textoLower === '') {
    renderizarProductos(productos);
  } else {
    const filtrados = productos.filter(prod =>
      prod.nombre.toLowerCase().includes(textoLower)
    );
    renderizarProductos(filtrados);
  }
}

// Eventos
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

// Render inicial
renderizarProductos(productos);
