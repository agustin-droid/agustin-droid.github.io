const productos = [
    {
        id: 5,
        marca: "Bullpadel",
        nombre: "Bullpadel BP10 Evo 23",
        precio: 190000,
        tipo: "Control",
        materiales: ["Fibra de vidrio", "Eva Soft"],
        rugosidad: "sin cara especial",
        descripcion: "Paleta de gran manejabilidad y control, ideal para jugadores intermedios.",
        imagenes: [
            "/front/paletas/bull/k2 y bp10/foto1.webp",
            "/front/paletas/bull/k2 y bp10/foto2.webp"
        ]
    },
    {
        id: 6,
        marca: "Bullpadel",
        nombre: "Bullpadel K2 Power 23",
        precio: 190000,
        tipo: "Potencia",
        materiales: ["Fibra de vidrio", "Eva Soft"],
        rugosidad: "sin cara especial",
        descripcion: "Paleta con forma de diamante y balance alto para máxima potencia.",
        imagenes: [
            "/front/paletas/bull/k2 y bp10/foto5.webp",
            "/front/paletas/bull/k2 y bp10/foto6.webp"
        ]
    },
    {
        id: 7,
        marca: "Bullpadel",
        nombre: "Bullpadel Ionic Control 23",
        precio: 265000,
        tipo: "Control",
        materiales: ["Carbono", "Eva Soft"],
        rugosidad: "sin cara especial",
        descripcion: "Paleta con gran precisión y excelente salida de bola.",
        imagenes: [
            "/front/paletas/bull/ionic 23/foto5.webp",
            "/front/paletas/bull/ionic 23/foto6.webp"
        ]
    },
    {
        id: 4,
        marca: "Bullpadel",
        nombre: "Bullpadel Ionic Power 23",
        precio: 265000,
        tipo: "Potencia",
        materiales: ["Galphite", "MultiEva"],
        rugosidad: "sin cara especial",
        descripcion: "Modelo diseñado para obtener potencia.",
        imagenes: [
            "/front/paletas/bull/ionic 23/foto1.webp",
            "/front/paletas/bull/ionic 23/foto2.webp"
        ]
    },
    {
        id: 13,
        marca: "Bullpadel",
        nombre: "Bullpadel Axym 23",
        precio: 275000,
        tipo: "Control",
        materiales: ["Fibra de vidrio", "Eva Soft"],
        rugosidad: "3D gain",
        descripcion: "Paleta versátil con gran control y manejabilidad.",
        imagenes: [
            "/front/paletas/bull/otros/foto1.webp",
            "/front/paletas/bull/otros/foto2.webp"
        ]
    },
    {
        id: 12,
        marca: "Bullpadel",
        nombre: "Bullpadel Vertex 04 Comfort Mundial 25",
        precio: 310000,
        tipo: "Comfort",
        materiales: ["Carbono", "Eva Soft"],
        rugosidad: "sin cara especial",
        descripcion: "Paleta diseñada para máximo confort y control en el juego.",
        imagenes: [
            "/front/paletas/bull/vertex 04 24/foto17.webp",
            "/front/paletas/bull/vertex 04 24/foto18.webp"
        ]
    },
    {
        id: 1,
        marca: "Bullpadel",
        nombre: "Bullpadel Vertex 03 23",
        precio: 340000,
        tipo: "Potencia",
        materiales: ["Carbono", "Eva Soft"],
        rugosidad: "Top Spin",
        descripcion: "Paleta de alto rendimiento con balance alto y forma diamante.",
        imagenes: [
            "/front/paletas/bull/vertex0323/foto2.jpg",
            "/front/paletas/bull/vertex0323/foto1.jpg"
        ]
    },{
        id: 11,
        marca: "Bullpadel",
        nombre: "Bullpadel Vertex 04 CMF 24",
        precio: 340000,
        tipo: "Potencia",
        materiales: ["Carbono", "Eva Soft"],
        rugosidad: "Top Spin",
        descripcion: "Paleta con materiales de última tecnología para un mejor rendimiento.",
        imagenes: [
            "/front/paletas/bull/vertex 04 24/foto5.webp",
            "/front/paletas/bull/vertex 04 24/foto6.webp"
        ]
    },
    
    
    {
        id: 2,
        marca: "Bullpadel",
        nombre: "Bullpadel Hack 03 23",
        precio: 340000,
        tipo: "Control",
        materiales: ["Carbono", "MultiEva"],
        rugosidad: "Top Spin",
        descripcion: "Modelo diseñado para control con un balance medio.",
        imagenes: [
            "/front/paletas/bull/hack 03/foto1.jpg",
            "/front/paletas/bull/hack 03/foto2.jpg"
        ]
    },
    {
        id: 9,
        marca: "Bullpadel",
        nombre: "Bullpadel Hack 03 Hybrid 24",
        precio: 360000,
        tipo: "Control",
        materiales: ["Carbono", "MultiEva"],
        rugosidad: "Top Spin",
        descripcion: "Modelo híbrido que ofrece un equilibrio entre potencia y control.",
        imagenes: [
            "/front/paletas/bull/hack 03/foto5.webp",
            "/front/paletas/bull/hack 03/foto6.webp"
        ]
    },
    {
        id: 10,
        marca: "Bullpadel",
        nombre: "Bullpadel Vertex 04 Hybrid 24",
        precio: 360000,
        tipo: "Potencia",
        materiales: ["XT-Carbon 12K", "MultiEva"],
        rugosidad: "Top Spin",
        descripcion: "Modelo híbrido que combina control y potencia en un mismo diseño.",
        imagenes: [
            "/front/paletas/bull/vertex 04 24/foto9.webp",
            "/front/paletas/bull/vertex 04 24/foto10.webp"
        ]
    },
    {
        id: 14,
        marca: "Bullpadel",
        nombre: "Bullpadel Neuron 24",
        precio: 365000,
        tipo: "Potencia",
        materiales: ["Carbono", "MultiEva"],
        rugosidad: "sin cara especial",
        descripcion: "Modelo innovador con tecnología avanzada para mayor potencia y control.",
        imagenes: [
            "/front/paletas/bull/otros/foto5.webp",
            "/front/paletas/bull/otros/foto6.webp"
        ]
    },
    {
        id: 3,
        marca: "Bullpadel",
        nombre: "Bullpadel Vertex 04 2024",
        precio: 490000,
        tipo: "Potencia",
        materiales: ["XT-Carbon 12K", "MultiEva"],
        rugosidad: "Top Spin",
        descripcion: "Modelo diseñado para potencia con una reduccion de vibraciones.",
        imagenes: [
            "/front/paletas/bull/vertex 04 24/foto1.jpeg",
            "/front/paletas/bull/vertex 04 24/foto2.webp"
        ]
    },
    {
        id: 8,
        marca: "Bullpadel",
        nombre: "Bullpadel Vertex 04 2025",
        precio: 530000,
        tipo: "Potencia",
        materiales: ["XT-Carbon 12K", "MultiEva"],
        rugosidad: "Top Spin",
        descripcion: "Modelo de última generación diseñado para máxima potencia y reducción de vibraciones.",
        imagenes: [
            "/front/paletas/bull/vertex 04 24/foto13.webp",
            "/front/paletas/bull/vertex 04 24/foto14.webp"
        ]
    }
];



document.addEventListener("DOMContentLoaded", function () {
    mostrarProductos("Bullpadel");
});

function mostrarProductos(marcaSeleccionada) {
    const contenedor = document.getElementById("productos-container");
    contenedor.innerHTML = ""; // Limpia el contenido anterior

    const productosFiltrados = productos.filter(p => p.marca === marcaSeleccionada);

    productosFiltrados.forEach(producto => {
        let imagenesHTML = producto.imagenes.map(img => 
            `<img src="${img}" alt="${producto.nombre}" class="imagen-producto">`
        ).join("");

        const productoHTML = `
            <div class="producto">
    <h3>${producto.nombre}                           ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h3>
    <div class="contenido-producto">
        <div class="galeria">
            ${imagenesHTML}
        </div>
        <div class="detalles">
            <p><strong>Precio:</strong> $${producto.precio.toLocaleString()}</p>
            <p><strong>Tipo:</strong> ${producto.tipo}</p>
            <p><strong>Materiales:</strong> ${producto.materiales.join(", ")}</p>
            <p><strong>Tipo de cara: </strong>${producto.rugosidad}</p>
            <p>* Descripcion: ${producto.descripcion}</p>
        </div>
    </div>
</div>

        `;
        contenedor.innerHTML += productoHTML;
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const closeModal = document.querySelector(".close");

    // Esperar a que se carguen los productos antes de seleccionar imágenes
    setTimeout(() => {
        document.querySelectorAll("#productos-container img").forEach(img => {
            img.style.cursor = "pointer"; // Cambia el cursor para indicar que es clickeable
            img.addEventListener("click", function() {
                modal.style.display = "flex";
                modalImg.src = this.src;
            });
        });
    }, 500); // Esperar un poco para asegurarse de que los productos se cargaron

    // Cerrar el modal al hacer clic en la "X"
    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Cerrar el modal si se hace clic fuera de la imagen
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});


// noxxxxx
