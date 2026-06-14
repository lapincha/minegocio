const productos = [
  // ========== GAMING ==========
  { id: 1, categoria: "redmagic", nombre: "RedMagic 11 Pro", imagen: "img/rm11.webp", badge: "Gaming extremo", descripcion: "Snapdragon 8 Gen 3, pantalla AMOLED de 144Hz, batería de 7000mAh con carga de 100W, refrigeración líquida y gatillos táctiles.", precio: "$799.99", moneda: "USD" },
  { id: 2, categoria: "redmagic", nombre: "RedMagic 10 Pro", imagen: "img/rm10.webp", badge: "Gaming rendimiento", descripcion: "Snapdragon 8 Gen 2, pantalla AMOLED de 120Hz, batería de 6500mAh, carga de 80W y gatillos táctiles.", precio: "$699.99", moneda: "USD" },

  // ========== SAMSUNG ==========
  { id: 1, categoria: "samsung", nombre: "Samsung Galaxy S24 Ultra", imagen: "img/s24ultra.png", badge: "IA y productividad", descripcion: "Snapdragon 8 Gen 3, pantalla Dynamic AMOLED 2X de 6.8″ a 120Hz, cámara de 200MP, S Pen y Galaxy AI.", precio: "$1199.99", moneda: "USD" },
  { id: 2, categoria: "samsung", nombre: "Samsung Galaxy S24+", imagen: "img/s24ultra.webp", badge: "Potencia diaria", descripcion: "Snapdragon 8 Gen 3, pantalla de 6.7″ a 120Hz, cámara de 50MP, batería de 4900mAh.", precio: "$999.99", moneda: "USD" },

  // ========== IPHONE ==========
  { id: 1, categoria: "iphone", nombre: "iPhone 16 Pro Max", imagen: "img/iphone16pm.png", badge: "Tope de gama", descripcion: "Pantalla Super Retina XDR de 6.9″, chip A18 Pro, cámara de 48MP con zoom 5x, titanio y batería de larga duración.", precio: "$1199.99", moneda: "USD" },
  { id: 2, categoria: "iphone", nombre: "iPhone 16 Pro", imagen: "img/iphone16pm.webp", badge: "Profesional compacto", descripcion: "Pantalla de 6.3″, chip A18 Pro, cámara de 48MP, zoom 5x y titanio.", precio: "$1099.99", moneda: "USD" }
];

// Función necesaria para render.js
function obtenerTodosLosProductos() {
  return productos;
}
