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
            "/front/paletas/bull/k2 y bp10/foto2.webp",
            "/front/paletas/bull/k2 y bp10/foto3.webp"

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
            "/front/paletas/bull/k2 y bp10/foto6.webp",
            "/front/paletas/bull/k2 y bp10/foto7.webp"
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
            "/front/paletas/bull/ionic 23/foto6.webp",
            "/front/paletas/bull/ionic 23/foto7.webp"
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
            "/front/paletas/bull/ionic 23/foto2.webp",
            "/front/paletas/bull/ionic 23/foto3.webp"

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
            "/front/paletas/bull/otros/foto2.webp",
            "/front/paletas/bull/otros/foto3.webp"

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
            "/front/paletas/bull/vertex 04 24/foto18.webp",
            "/front/paletas/bull/vertex 04 24/foto19.webp"
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
            "/front/paletas/bull/vertex0323/foto1.jpg",
            "/front/paletas/bull/vertex0323/foto3.webp"

        ]
    }
        ,{
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
            "/front/paletas/bull/vertex 04 24/foto6.webp",
            "/front/paletas/bull/vertex 04 24/foto7.webp"
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
            "/front/paletas/bull/hack 03/foto2.jpg",
            "/front/paletas/bull/hack 03/foto3.webp"

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
            "/front/paletas/bull/hack 03/foto6.webp",
            "/front/paletas/bull/hack 03/foto7.webp"
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
            "/front/paletas/bull/vertex 04 24/foto10.webp",
            "/front/paletas/bull/vertex 04 24/foto11.webp"

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
            "/front/paletas/bull/otros/foto6.webp",
            "/front/paletas/bull/otros/foto7.webp"

        ]
    },
    
    {
        id: 16, 
        marca: "Bullpadel",
        nombre: "Bullpadel Vertex 04 Comfort 25",
        precio: 390000,
        tipo: "Comfort",
        materiales: ["Carbono", "Eva Soft"],
        rugosidad: "sin cara especial",
        descripcion: "Paleta diseñada para ofrecer máximo confort y control en el juego.",
        imagenes: [
            "/front/paletas/bull/vertex 04 24/foto21.webp",
            "/front/paletas/bull/vertex 04 24/foto22.webp",
            "/front/paletas/bull/vertex 04 24/foto23.webp"
        ]
    },
    {
        id: 27,
        marca: "Bullpadel",
        nombre: "Bullpadel Ionic Light TF 24",
        precio: 390000,
        tipo: "Control",
        materiales: ["Carbono", "Eva Soft"],
        rugosidad: "Rough Surface",
        descripcion: "Edición limitada del Tour Final. Paleta ligera con gran control y manejabilidad para jugadores que buscan precisión.",
        imagenes: [
            "/front/paletas/bull/tf/foto33.webp",
            "/front/paletas/bull/tf/foto34.webp",
            "/front/paletas/bull/tf/foto35.webp"
        ]
    },
    
    {
        id: 23,
        marca: "Bullpadel",
        nombre: "Bullpadel Pearl TF 24",
        precio: 435000,
        tipo: "Control",
        materiales: ["Fibra de vidrio", "Eva Soft"],
        rugosidad: "sin cara especial",
        descripcion: "Edición limitada del Tour Final. Paleta ideal para jugadoras que buscan control y comodidad.",
        imagenes: [
            "/front/paletas/bull/tf/foto17.webp",
            "/front/paletas/bull/tf/foto18.webp",
            "/front/paletas/bull/tf/foto19.webp"
        ]
    },
    {
        id: 24,
        marca: "Bullpadel",
        nombre: "Bullpadel Vertex 04 Woman TF 24",
        precio: 435000,
        tipo: "Potencia",
        materiales: ["Carbono 12K", "Eva Soft"],
        rugosidad: "Rough Surface",
        descripcion: "Edición limitada del Tour Final. Paleta equilibrada con potencia y maniobrabilidad para jugadoras exigentes.",
        imagenes: [
            "/front/paletas/bull/tf/foto21.webp",
            "/front/paletas/bull/tf/foto22.webp",
            "/front/paletas/bull/tf/foto23.webp"
        ]
    },
    
    {
        id: 25,
        marca: "Bullpadel",
        nombre: "Bullpadel Elite TF 24",
        precio: 435000,
        tipo: "Control",
        materiales: ["Carbono", "Eva Soft"],
        rugosidad: "Rough Surface",
        descripcion: "Edición limitada del Tour Final. Diseñada para jugadoras que buscan control con una gran salida de bola.",
        imagenes: [
            "/front/paletas/bull/tf/foto25.webp",
            "/front/paletas/bull/tf/foto26.webp",
            "/front/paletas/bull/tf/foto27.webp"
        ]
    },
    {
        id: 26,
        marca: "Bullpadel",
        nombre: "Bullpadel Flow TF 24",
        precio: 435000,
        tipo: "Control",
        materiales: ["Carbono", "Eva Soft"],
        rugosidad: "Rough Surface",
        descripcion: "Edición limitada del Tour Final. Paleta equilibrada con un diseño exclusivo para jugadoras avanzadas.",
        imagenes: [
            "/front/paletas/bull/tf/foto29.webp",
            "/front/paletas/bull/tf/foto30.webp",
            "/front/paletas/bull/tf/foto31.webp"
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
            "/front/paletas/bull/vertex 04 24/foto2.webp",
            "/front/paletas/bull/vertex 04 24/foto3.webp"

        ]
    },,
    {
        "id": 15,
        "marca": "Bullpadel",
        "nombre": "Bullpadel XPLO 25",
        "precio": 505000,
        "tipo": "Potencia",
        "materiales": ["Xtend-Carbon 12K", "MultiEva"],
        "rugosidad": "3D grain",
        "descripcion": "Modelo diseñado para jugadores avanzados que buscan máxima potencia y rendimiento.",
        "imagenes": [
            "/front/paletas/bull/xplo/foto1.webp",
            "/front/paletas/bull/xplo/foto2.webp",
            "/front/paletas/bull/xplo/foto4.webp"

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
            "/front/paletas/bull/vertex 04 24/foto14.webp",
            "/front/paletas/bull/vertex 04 24/foto15.webp"

        ]
    },
    {
        id: 19,
        marca: "Bullpadel",
        nombre: "Bullpadel Hack 04 TF 24",
        precio: 535000,
        tipo: "Potencia",
        materiales: ["Carbono 12K", "Eva Hard"],
        rugosidad: "Rough Surface",
        descripcion: "Edición limitada del Tour Final. Paleta diseñada para jugadores ofensivos que buscan potencia.",
        imagenes: [
            "/front/paletas/bull/tf/foto1.webp",
            "/front/paletas/bull/tf/foto2.webp",
            "/front/paletas/bull/tf/foto3.webp"
        ]
    },
    {
        id: 20,
        marca: "Bullpadel",
        nombre: "Bullpadel Vertex 04 TF 24",
        precio: 535000,
        tipo: "Potencia",
        materiales: ["Carbono 12K", "Eva Hard"],
        rugosidad: "Rough Surface",
        descripcion: "Edición limitada del Tour Final. Paleta con balance alto y potencia explosiva.",
        imagenes: [
            "/front/paletas/bull/tf/foto5.webp",
            "/front/paletas/bull/tf/foto6.webp",
            "/front/paletas/bull/tf/foto7.webp"
        ]
    },
    {
        id: 21,
        marca: "Bullpadel",
        nombre: "Bullpadel XPLO TF 24",
        precio: 535000,
        tipo: "Control",
        materiales: ["Fibra de vidrio", "Eva Soft"],
        rugosidad: "sin cara especial",
        descripcion: "Edición limitada del Tour Final. Paleta de gran control para jugadores en evolución.",
        imagenes: [
            "/front/paletas/bull/tf/foto9.webp",
            "/front/paletas/bull/tf/foto10.webp",
            "/front/paletas/bull/tf/foto11.webp"
        ]
    },
    {
        id: 22,
        marca: "Bullpadel",
        nombre: "Bullpadel Neuron TF 24",
        precio: 535000,
        tipo: "Control",
        materiales: ["Carbono", "Eva Soft"],
        rugosidad: "Rough Surface",
        descripcion: "Edición limitada del Tour Final. Paleta innovadora con excelente estabilidad y control.",
        imagenes: [
            "/front/paletas/bull/tf/foto13.webp",
            "/front/paletas/bull/tf/foto14.webp",
            "/front/paletas/bull/tf/foto15.webp"
        ]
    }
    
];


document.addEventListener("DOMContentLoaded", function () {
    mostrarProductos("Bullpadel");
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
            const producto = productos.filter(p => p.marca === "Bullpadel")[index];

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
