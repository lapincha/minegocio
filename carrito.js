function actualizarContadorCarrito() {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
        const contadorSpan = document.getElementById('cart-count');
        if (contadorSpan) contadorSpan.innerText = totalItems;
    }

    // Llamar a la función cuando se carga la página
    document.addEventListener('DOMContentLoaded', actualizarContadorCarrito);

    // (Opcional) si quieres que se actualice cada vez que cambia el localStorage
    window.addEventListener('storage', actualizarContadorCarrito);
