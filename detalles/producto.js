const params = new URLSearchParams(window.location.search);
const nombre = params.get('nombre');
let imagen = params.get('imagen');
const badge = params.get('badge');
const descripcion = params.get('descripcion');
const precioUSD = params.get('precio');
const monedaUSD = params.get('moneda');

const container = document.getElementById('productContainer');

const exchangeRate = 655;
const localCurrency = "CUP";

const precioUSDNumerico = parseFloat(precioUSD.replace(/[^0-9.]/g, ''));
const precioLocalNumerico = precioUSDNumerico * exchangeRate;
const precioLocalFormateado = precioLocalNumerico.toLocaleString('es-ES', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2
});

// Ajuste de ruta porque estamos en /detalles/ y las imágenes están en /img/
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
