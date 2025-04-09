
const productos = [
    {
        id: 110,
        marca: "Nox",
        nombre: "Paleta Nox Silhouette 23",
        precio: 187000,
        tipo: "Control",
        materiales: ["Fibra de vidrio", "Goma EVA"],
        rugosidad: "no",
        descripcion: "Diseñada para control y maniobrabilidad con forma redonda y balance bajo.",
        imagenes: [
            "/front/paletas/nox/otros/foto9.webp",
            "/front/paletas/nox/otros/foto10.webp",
            "/front/paletas/nox/otros/foto11.webp"
        ]
    },
    {
        id: 100,
        marca: "Nox",
        nombre: "Nox ML10 Pro Cup Rough Surface 23",
        precio: 200000,
        tipo: "Control",
        materiales: ["Fibra de vidrio", "HR3 Core"],
        descripcion: "Versión con superficie rugosa de la clásica ML10 Pro Cup para mayor efecto en los golpes.",
        rugosidad: "Rough Surface",
        imagenes: [
            "/front/paletas/nox/ml10/foto1.webp",
            "/front/paletas/nox/ml10/foto2.webp",
            "/front/paletas/nox/ml10/foto3.webp"

        ]
    },
    {
        id: 102,
        marca: "Nox",
        nombre: "Nox Equation Advanced Lady 24",
        precio: 215000,
        tipo: "Control",
        materiales: ["Fibra de vidrio", "HR3 Core"],
        descripcion: "Paleta ligera y manejable, ideal para jugadoras avanzadas que buscan precisión.",
        rugosidad: "sin cara especial",
        imagenes: [
            "/front/paletas/nox/equation/foto1.webp",
            "/front/paletas/nox/equation/foto2.webp",
            "/front/paletas/nox/equation/foto3.webp"

        ]
    },
    {
        "id": 103,
        "marca": "Nox",
        "nombre": "Nox AT Pro Cup Coorp 24",
        "precio": 268000,
        "tipo": "Híbrida",
        "materiales": ["Carbono", "HR3 Core"],
        "descripcion": "Una paleta que combina la manejabilidad de la AT10 y la comodidad de la ML10. Su estructura de carbono y goma HR3 ofrecen gran durabilidad y control.",
        "rugosidad": "sin cara especial",
        "imagenes": [
            "/front/paletas/nox/otros/foto5.webp",
            "/front/paletas/nox/otros/foto6.webp",
            "/front/paletas/nox/otros/foto7.webp"

        ]
    },        
     {
        id: 104,  // ID siguiente en la secuencia
        marca: "Nox",
        nombre: "Nox VK10 Future 24",
        precio: 275000,
        tipo: "Control",
        materiales: ["Carbono", "HR3 Core"],
        descripcion: "Paleta versátil con gran control y excelente manejabilidad.",
        rugosidad: "Rugoso 3D",
        imagenes: [
            "/front/paletas/nox/otros/foto1.webp",
            "/front/paletas/nox/otros/foto2.webp",
            "/front/paletas/nox/otros/foto3.webp"

        ]
    },
    {
         id: 107, // Ajusta el ID según tu numeración
         marca: "Nox",
         nombre: "Nox ML10 Pro Cup Luxury 24",
         precio: 350000, // Completa con el precio correcto
         tipo: "Control",
         materiales: ["Carbono", "Eva HR3"],
         rugosidad: "Rough Surface", // Ajusta si es necesario
         descripcion: "Paleta de gran control y salida de bola, con un diseño premium.",
         imagenes: [
             "/front/paletas/nox/ml10/foto5.webp",
             "/front/paletas/nox/ml10/foto6.webp",
             "/front/paletas/nox/ml10/foto7.webp"
         ]
     },
     {
        id: 111,
        marca: "Nox",
        nombre: "Paleta Nox VK10 Luxury Series 23",
        precio: 355000,
        tipo: "Control",
        materiales: ["Carbono", "Goma HR3"],
        rugosidad: "Rough Surface",
        descripcion: "Paleta de control con núcleo HR3 y acabado rugoso para mayor efecto.",
        imagenes: [
            "/front/paletas/nox/otros/foto13.webp",
            "/front/paletas/nox/otros/foto14.webp",
            "/front/paletas/nox/otros/foto15.webp",
        ]
    },
     {
         id: 108, 
         marca: "Nox",
         nombre: "Nox AT10 Genius 18K 24",
         precio: 415000,
         tipo: "Control",
         materiales: ["Carbono 18K", "Eva HR3"],
         rugosidad: "Rough Surface",
         descripcion: "Paleta diseñada en colaboración con Agustín Tapia para máximo control y precisión.",
         imagenes: [
             "/front/paletas/nox/genius/foto9.webp",
             "/front/paletas/nox/genius/foto10.webp",
             "/front/paletas/nox/genius/foto11.webp"
         ]
     },
    {
        id: 109,
        marca: "Nox",
        nombre: "Nox TL10 Quantum Cobalt 12K 25",
        precio: 440000,
        tipo: "Control",
        materiales: ["Carbono 12K", "Núcleo HR3 Black Eva"],
        rugosidad: "Arenosa (Sandpaper Rough Surface)",
        descripcion: "Paleta de formato redondo diseñada en colaboración con Agustín Tapia, ideal para jugadores que buscan control y precisión con excelente salida de bola.",
        imagenes: [
            "/front/paletas/nox/quantum/foto5.webp",
            "/front/paletas/nox/quantum/foto6.webp",
            "/front/paletas/nox/quantum/foto7.webp"
        ]
    },
    {
        id: 105,  // ID siguiente en la secuencia
        marca: "Nox",
        nombre: "Nox LA10 Quantum Carbon 12K 25",
        precio: 460000,
        tipo: "Potencia",
        materiales: ["Carbono 12K", "HR3 Core"],
        descripcion: "Paleta de alto rendimiento con gran potencia y excelente control.",
        rugosidad: "Top Spin",
        imagenes: [
            "/front/paletas/nox/quantum/foto1.webp",
            "/front/paletas/nox/quantum/foto2.webp",
            "/front/paletas/nox/quantum/foto3.webp"

        ]
    },
    {
        id: 101,
        marca: "Nox",
        nombre: "Nox AT10 Genius 12K 25",
        precio: 470000,
        tipo: "Control",
        materiales: ["Carbono 12K", "HR3 Core"],
        descripcion: "Paleta utilizada por Agustín Tapia, con gran equilibrio entre potencia y control.",
        rugosidad: "3D",
        imagenes: [
            "/front/paletas/nox/genius/foto5.webp",
            "/front/paletas/nox/genius/foto7.webp",
            "/front/paletas/nox/genius/foto6.webp"
        ]
    },
    {
        id: 106, // Ajusta el ID según la numeración que estés usando
        marca: "Nox",
        nombre: "Nox AT10 Genius Attack 12K 25",
        precio: 470000, // Completa con el precio correcto
        tipo: "Potencia",
        materiales: ["Carbono 12K", "Eva HR3"],
        rugosidad: "Rough Surface", // Ajusta si es necesario
        descripcion: "Paleta diseñada para jugadores que buscan potencia con una excelente salida de bola.",
        imagenes: [
            "/front/paletas/nox/genius/foto1.webp",
            "/front/paletas/nox/genius/foto2.webp",
            "/front/paletas/nox/genius/foto3.webp"

        ]
    }
];




document.addEventListener("DOMContentLoaded", function () {
    mostrarProductos("Nox");
});

function mostrarProductos(marcaSeleccionada) {
    const contenedor = document.getElementById("productos-container");
    contenedor.innerHTML = "";

    const productosFiltrados = productos
        .filter(p => p.marca === marcaSeleccionada)
        .sort((a, b) => a.precio - b.precio);

    productosFiltrados.forEach((producto, index) => {
        const imagenes = producto.imagenes;
        const id = `carrusel-${index}`;
        const productoHTML = `
            <div class="tarjeta-producto">
                <div class="carrusel" id="${id}">
                    <button class="carrusel-btn prev" data-index="${index}">&#10094;</button>
                    <img src="${imagenes[0]}" class="imagen-carrusel" id="img-${index}" alt="${producto.nombre}">
                    <button class="carrusel-btn next" data-index="${index}">&#10095;</button>
                </div>
                <div class="info-producto">
                    <h3>${producto.nombre}</h3>
                    <p><strong>Descripción: </strong>${producto.descripcion}</p>

                    <p><strong>Precio:</strong> $${producto.precio.toLocaleString()}</p>
                    <p><strong>Tipo:</strong> ${producto.tipo}</p>
                    <p><strong>Materiales:</strong> ${producto.materiales.join(", ")}</p>
                    <p><strong>Tipo de cara:</strong> ${producto.rugosidad}</p>
                </div>
            </div>
        `;

        contenedor.innerHTML += productoHTML;
    });

    inicializarCarruseles(productosFiltrados);
    inicializarModal();
}

function inicializarCarruseles(productos) {
    const estadoCarrusel = productos.map(() => 0);

    document.querySelectorAll('.carrusel-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const index = parseInt(btn.dataset.index);
            const tipo = btn.classList.contains('next') ? 1 : -1;
            const total = productos[index].imagenes.length;

            estadoCarrusel[index] = (estadoCarrusel[index] + tipo + total) % total;

            const img = document.getElementById(`img-${index}`);
            img.src = productos[index].imagenes[estadoCarrusel[index]];
        });
    });
}

function inicializarModal() {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const closeModal = document.querySelector(".close");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    let imagenesActuales = [];
    let imagenIndex = 0;

    document.querySelectorAll("#productos-container .imagen-carrusel").forEach(img => {
        img.style.cursor = "pointer";
        img.addEventListener("click", function () {
            const index = parseInt(this.id.split("-")[1]);
            const producto = productos.filter(p => p.marca === "Nox")[index];

            if (!producto) return;

            imagenesActuales = producto.imagenes;
            imagenIndex = imagenesActuales.findIndex(src => src === this.src);

            // Si no encuentra la imagen, usa la primera por defecto
            if (imagenIndex === -1) {
                imagenIndex = 0;
            }

            mostrarImagen();
        });
    });

    function mostrarImagen() {
        if (imagenesActuales.length > 0) {
            modalImg.src = imagenesActuales[imagenIndex]; // Asignar la imagen correcta
        }
        modal.style.display = "flex"; // Mostrar el modal
    }

    nextBtn.addEventListener("click", function () {
        imagenIndex = (imagenIndex + 1) % imagenesActuales.length;
        mostrarImagen();
    });

    prevBtn.addEventListener("click", function () {
        imagenIndex = (imagenIndex - 1 + imagenesActuales.length) % imagenesActuales.length;
        mostrarImagen();
    });

    document.addEventListener("keydown", function (event) {
        if (modal.style.display === "flex") {
            if (event.key === "ArrowRight") {
                imagenIndex = (imagenIndex + 1) % imagenesActuales.length;
            } else if (event.key === "ArrowLeft") {
                imagenIndex = (imagenIndex - 1 + imagenesActuales.length) % imagenesActuales.length;
            }
            mostrarImagen();
        }
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}
