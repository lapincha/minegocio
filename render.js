document.addEventListener('DOMContentLoaded', () => {
  const productsGrid = document.getElementById('productsGrid');
  const searchInput = document.getElementById('searchInput');

  function renderizar(productosFiltrados) {
    const agrupado = {};
    productosFiltrados.forEach(p => {
      if (!agrupado[p.categoria]) agrupado[p.categoria] = [];
      agrupado[p.categoria].push(p);
    });
    for (const cat in agrupado) {
      agrupado[cat].sort((a, b) => a.id - b.id);
    }

    let html = '';
    for (const [categoria, lista] of Object.entries(agrupado)) {
      let titulo = '';
      if (categoria === 'dulces') titulo = 'Dulces';
      else if (categoria === 'samsung') titulo = 'Samsung';
      else if (categoria === 'iphone') titulo = 'iPhone';
      else titulo = categoria.toUpperCase();

      html += `<div class="brand-section">`;
      html += `<h2 class="brand-title">${titulo}</h2>`;
      html += `<div class="brand-grid">`;

      lista.forEach(p => {
        const url = `detalles/producto.html?nombre=${encodeURIComponent(p.nombre)}&imagen=${encodeURIComponent(p.imagen)}&badge=${encodeURIComponent(p.badge)}&descripcion=${encodeURIComponent(p.descripcion)}&precio=${encodeURIComponent(p.precio)}&moneda=${encodeURIComponent(p.moneda)}`;
        html += `
          <div class="product-card" onclick="window.location.href='${url}'">
            <img class="product-card__image" src="${p.imagen}" alt="${p.nombre}" loading="lazy">
            <h3 class="product-card__name">${p.nombre}</h3>
          </div>
        `;
      });
      html += `</div></div>`;
    }
    productsGrid.innerHTML = html || '<p style="text-align:center;">No se encontraron productos.</p>';
  }

  const todos = obtenerTodosLosProductos();
  renderizar(todos);

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const texto = e.target.value.toLowerCase();
      if (texto === '') {
        renderizar(todos);
      } else {
        const filtrados = todos.filter(p => p.nombre.toLowerCase().includes(texto) || (p.badge && p.badge.toLowerCase().includes(texto)));
        renderizar(filtrados);
      }
    });
  }
});
