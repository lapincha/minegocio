const productos = [
  // ========== DULCES ==========
  { id: 1, 
   categoria: "dulces", 
   nombre: "Dona Glaseada", 
   imagen: "img/dona.jpg", 
   badge: "Esponjosa y dulce", 
   descripcion: "Dona cubierta con glaseado brillante de fresa y chispas de colores, masa suave y aireada.", 
   precio: "$1.99", 
   moneda: "USD" 
  },
  { 
  id: 2, 
  categoria: "dulces", 
  nombre: "Cupcake de Vainilla y Chispas", 
  imagen: "img/Cupcacke de Vainilla y Chispas.jpeg", 
  badge: "Más vendido", 
  descripcion: "Suave bizcocho de vainilla tradicional con un espectacular copete de crema batida y coloridas chispas de dulce.", 
  precio: "$2.50", 
  moneda: "USD" 
  },
  { 
  id: 3, 
  categoria: "dulces", 
  nombre: "Galletas con Chispas de Chocolate", 
  imagen: "img/Galletas con Chispas de chocolate.jpeg", 
  badge: "Artesanales", 
  descripcion: "Clásicas y deliciosas galletas caseras, horneadas a la perfección con una textura crujiente y cargadas de abundantes chispas de chocolate.", 
  precio: "$4.50", 
  moneda: "USD" 
}
  
  // ========== SAMSUNG ==========
  
  // ========== IPHONE ==========
];

// Función necesaria para render.js
function obtenerTodosLosProductos() {
  return productos;
}
