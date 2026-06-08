document.addEventListener('DOMContentLoaded', function() {
    alert("DOM cargado correctamente");
    
    const botones = document.querySelectorAll('.btn-agregar');
    alert("Botones encontrados: " + botones.length);
    
    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            alert("Botón clickeado");
            const tarjeta = this.closest('.tarjeta');
            if (!tarjeta) {
                alert("No se encontró la tarjeta padre");
                return;
            }
            const id = tarjeta.dataset.id;
            alert("ID del producto: " + id);
        });
    });
    
    const contadorSpan = document.getElementById('cart-count');
    if (contadorSpan) {
        alert("Contador encontrado");
    } else {
        alert("No se encontró el span con id='cart-count'");
    }
});
