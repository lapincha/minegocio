/**
 * producto.js
 * Muestra la tarjeta de detalle con precio en USD y moneda local (CUP)
 * Tasa de cambio editable fácilmente
 */

const params = new URLSearchParams(window.location.search);
const nombre = params.get('nombre');
let imagen = params.get('imagen');
const badge = params.get('badge');
const descripcion = params.get('descripcion');
const precioUSD = params.get('precio');      // Ej: "$799.99"
const monedaUSD = params.get('moneda');      // "USD"

const container = document.getElementById('productContainer');

// ========== CONFIGURACIÓN EDITABLE ==========
// Cambia este valor según la tasa de cambio actual
const exchangeRate = 655;           // 1 USD = 655 CUP
const localCurrency = "CUP";        // Moneda nacional
// ===========================================

// Convertir precio USD a número (eliminar $ y espacios)
const precioUSDNumerico = parseFloat(precioUSD.replace(/[^0-9.]/g, ''));
const precioLocalNumerico = precioUSDNumerico * exchangeRate;

// Formatear precios (sin decimales si son enteros, o con 2 decimales)
const precioLocalFormateado = precioLocalNumerico.toLocaleString('es-ES', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2
});

// Ajustar ruta de imagen
if (imagen && !imagen.startsWith('http') && !imagen.startsWith('/')) {
  imagen = '../' + imagen;
}

if (nombre && imagen && descripcion && precioUSD) {
  container.innerHTML = `
    <div class="card-image">
      <img src="${imagen}" alt="${nombre}">
    </div>
    <div class="card-content">
      <div class="card-badge">${badge || 'Destacado'}</div>
      <h2 class="card-title">${nombre}</h2>
      <p class="card-description">${descripcion}</p>
      <div class="card-price">
        <span>${precioUSD} ${monedaUSD}</span>
        <span style="display:block; font-size:1.2rem; margin-top:5px; color:#0369a1;">
          ${precioLocalFormateado} ${localCurrency}
        </span>
      </div>
      <button class="card-button" id="buyButton">Comprar ahora →</button>
    </div>
  `;

  const buyButton = document.getElementById('buyButton');
  if (buyButton) {
    buyButton.addEventListener('click', () => {
      const phoneNumber = '5359638868';
      const message = `Hola, me interesa comprar el *${nombre}*.
Precio USD: ${precioUSD} ${monedaUSD}
Precio MN: ${precioLocalFormateado} ${localCurrency}
${badge || 'Producto'}

Gracias.`;
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    });
  }
} else {
  container.innerHTML = `
    <div class="card-image"><span>⚠️</span></div>
    <div class="card-content">
      <h2 class="card-title">Error</h2>
      <p class="card-description">No se recibieron datos del producto.</p>
      <a href="../index.html" class="back-link">← Volver al catálogo</a>
    </div>
  `;
}
