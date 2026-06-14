/**
 * producto.js
 * Lee los parámetros de la URL y construye la tarjeta de detalle
 */

// Leer parámetros de la URL
const params = new URLSearchParams(window.location.search);
const nombre = params.get('nombre');
let imagen = params.get('imagen');
const badge = params.get('badge');
const descripcion = params.get('descripcion');
const precio = params.get('precio');
const moneda = params.get('moneda');

const container = document.getElementById('productContainer');

// ========== CORRECCIÓN DE RUTA DE LA IMAGEN ==========
// Si la imagen viene como "img/iphone16.png" (ruta relativa desde la raíz)
// y estamos en la carpeta "detalles/", hay que subir un nivel: "../img/iphone16.png"
if (imagen && !imagen.startsWith('http') && !imagen.startsWith('https') && !imagen.startsWith('/')) {
  imagen = '../' + imagen;
}

// Depuración: ver en consola la ruta final (útil para encontrar errores)
console.log('Producto:', nombre);
console.log('Ruta de imagen:', imagen);

if (nombre && imagen && descripcion && precio) {
  // Construir la tarjeta completa
  container.innerHTML = `
    <div class="card-image">
      <img src="${imagen}" alt="${nombre}" onerror="this.src='https://placehold.co/400x400?text=Imagen+no+disponible'">
    </div>
    <div class="card-content">
      <div class="card-badge">${badge || 'Destacado'}</div>
      <h2 class="card-title">${nombre}</h2>
      <p class="card-description">${descripcion}</p>
      <div class="card-price">
        ${precio} <small>${moneda || 'USD'}</small>
      </div>
      <button class="card-button" id="buyButton">Comprar ahora →</button>
    </div>
  `;
  
  // Evento del botón comprar
  const buyButton = document.getElementById('buyButton');
  if (buyButton) {
    buyButton.addEventListener('click', () => {
      alert(`✨ Añadiste ${nombre} al carrito`);
    });
  }
} else {
  // Mostrar error si faltan datos
  container.innerHTML = `
    <div class="card-image"><span>⚠️</span></div>
    <div class="card-content">
      <h2 class="card-title">Error al cargar el producto</h2>
      <p class="card-description">No se recibieron todos los datos necesarios.</p>
      <p class="card-description" style="font-size: 0.8rem; color: #666; margin-top: 0.5rem;">
        Parámetros recibidos: ${window.location.search || '(ninguno)'}
      </p>
      <a href="../index.html" class="back-link" style="color: #0f172a; text-decoration: none; font-weight: 600; display: inline-block; margin-top: 1rem;">← Volver al catálogo</a>
    </div>
  `;
}
