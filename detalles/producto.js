// Leer los parámetros de la URL
const params = new URLSearchParams(window.location.search);
const nombre = params.get('nombre');
const imagen = params.get('imagen');
const badge = params.get('badge');
const descripcion = params.get('descripcion');
const precio = params.get('precio');
const moneda = params.get('moneda');

const container = document.getElementById('productContainer');

if (nombre && imagen && descripcion && precio) {
  container.innerHTML = `
    <div class="card-image">
      <img src="${imagen}" alt="${nombre}">
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
  document.getElementById('buyButton')?.addEventListener('click', () => {
    alert(`Añadiste ${nombre} al carrito`);
  });
} else {
  container.innerHTML = `
    <div class="card-image"><span>⚠️</span></div>
    <div class="card-content">
      <h2 class="card-title">Error</h2>
      <p class="card-description">No se recibieron datos del producto.</p>
      <a href="index.html" class="back-link">Volver al catálogo</a>
    </div>
  `;
}
