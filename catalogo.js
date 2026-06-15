const productos = [
  // ========== GAMING ==========
  { id: 1, categoria: "dulces", nombre: "Dona Glaseada", imagen: "img/dona.jpg", badge: "Esponjosa y dulce", descripcion: "Dona cubierta con glaseado brillante de fresa y chispas de colores, masa suave y aireada.", precio: "$1.99", moneda: "USD" },
  // ========== SAMSUNG ==========
  { id: 1, categoria: "samsung", nombre: "Samsung Galaxy S24 Ultra", imagen: "img/s24ultra.png", badge: "IA y productividad", descripcion: "Snapdragon 8 Gen 3, pantalla Dynamic AMOLED 2X de 6.8″ a 120Hz, cámara de 200MP, S Pen y Galaxy AI.", precio: "$1199.99", moneda: "USD" },
  { id: 2, categoria: "samsung", nombre: "Samsung Galaxy S24+", imagen: "img/s24ultra.png", badge: "IA y productividad", descripcion: "Snapdragon 8 Gen 3, pantalla de 6.7″ a 120Hz, cámara de 50MP, batería de 4900mAh.", precio: "$999.99", moneda: "USD" },

  // ========== IPHONE ==========
  { id: 1, categoria: "iphone", nombre: "iPhone 17 Pro Max", imagen: "img/iphone17pm.png", badge: "Tope de gama", descripcion: "Pantalla Super Retina XDR de 6.9″, chip A18 Pro, cámara de 48MP con zoom 5x, titanio y batería de larga duración.", precio: "$1199.99", moneda: "USD" },
  { id: 2, categoria: "iphone", nombre: "iPhone 17 Pro", imagen: "img/iphone17pm.png", badge: "Tope de gama", descripcion: "Pantalla de 6.3″, chip A18 Pro, cámara de 48MP, zoom 5x y titanio.", precio: "$1099.99", moneda: "USD" }
];

// Función necesaria para render.js
function obtenerTodosLosProductos() {
  return productos;
}
