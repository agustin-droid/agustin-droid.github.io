
const productos = [

    {
        id: 7,
        marca: "Bullpadel",
        nombre: "Bullpadel Ionic Control 23",
        precio: 255000,
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
        id: 39,
        marca: "Bullpadel",
        nombre: "Bullpadel Icon Cloud 25",
        precio: 330000,
        tipo: "Polivalente – Potencia",
        materiales: ["ElasticFiber", "Cloud EVA"],
        rugosidad: "Lisa",
        descripcion: "Modelo cómodo y equilibrado con excelente absorción de vibraciones y gran manejabilidad.",
        imagenes: ["/front/paletas/bull/cluod/foto1.webp",
            "/front/paletas/bull/cluod/foto2.webp",
            "/front/paletas/bull/cluod/foto3.webp"]

    },

    {
        id: 9,
        marca: "Bullpadel",
        nombre: "Bullpadel Hack 03 Hybrid 24",
        precio: 365000,
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
        id: 40,
        marca: "Bullpadel",
        nombre: "Bullpadel Vertex 05 Comfort 26",
        precio: 370000,
        tipo: "Potencia – Comfort",
        materiales: ["Fibra de carbono", "MultiEVA"],
        rugosidad: "3D Grain",
        descripcion: "Potencia explosiva con sensación más cómoda y reducción de vibraciones.",
        imagenes: ["/front/paletas/bull/vertex/foto1.webp",
            "/front/paletas/bull/vertex/foto2.webp",
            "/front/paletas/bull/vertex/foto3.webp"
        ]
    },

    {
        id: 41,
        marca: "Bullpadel",
        nombre: "Bullpadel Flow Legend 26",
        precio: 370000,
        tipo: "Potencia",
        materiales: ["Fibrix", "MultiEVA"],
        rugosidad: "3D Grain",
        descripcion: "Modelo ofensivo con gran respuesta en ataque y buena estabilidad en defensa.",
        imagenes: ["/front/paletas/bull/women/foto1.webp",
            "/front/paletas/bull/women/foto2.webp",
            "/front/paletas/bull/women/foto3.webp"
        ]
    },

    {
        id: 42,
        marca: "Bullpadel",
        nombre: "Bullpadel Xplo Comfort 26",
        precio: 370000,
        tipo: "Potencia con confort",
        materiales: ["Carbono", "MultiEVA"],
        rugosidad: "3D Grain",
        descripcion: "Versión más cómoda de la línea XPLO, ideal para jugadores que buscan explosividad sin rigidez excesiva.",
        imagenes: ["/front/paletas/bull/xplo/foto5.webp",
            "/front/paletas/bull/xplo/foto6.webp",
            "/front/paletas/bull/xplo/foto7.webp"
        ]
    },

    {
        id: 43,
        marca: "Bullpadel",
        nombre: "Bullpadel Xplo Premier 25",
        precio: 465000,
        tipo: "Potencia Profesional",
        materiales: ["X-Tend Carbon", "MultiEVA"],
        rugosidad: "3D Grain",
        descripcion: "Versión premium orientada a jugadores avanzados que buscan máxima potencia y precisión.",
        imagenes: ["/front/paletas/bull/xplo/foto9.webp",
            "/front/paletas/bull/xplo/foto11.webp",
            "/front/paletas/bull/xplo/foto12.webp"]
    },

    {
        id: 34,
        marca: "Bullpadel",
        nombre: "Bullpadel Hack 04 Hybrid 25",
        precio: 490000,
        tipo: "Control",
        materiales: ["Fibra de vidrio", "SoftEva"],
        rugosidad: "Lisa",
        descripcion: "Paleta híbrida con buena maniobrabilidad y control.",
        imagenes: [
            "/front/paletas/bull/hack 03/foto13.webp",
            "/front/paletas/bull/hack 03/foto14.webp",
            "/front/paletas/bull/hack 03/foto15.webp"
        ]
    },


    {
        id: 44,
        marca: "Bullpadel",
        nombre: "Bullpadel Neuron 02 Edge 26",
        precio: 515000,
        tipo: "Control – Precisión",
        materiales: ["X-Tend Carbon 3K", "MultiEVA"],
        rugosidad: "3D Grain",
        descripcion: "Modelo orientado al control absoluto con excelente estabilidad estructural.",
        imagenes: ["/front/paletas/bull/neuron/foto1.webp",
            "/front/paletas/bull/neuron/foto2.webp",
            "/front/paletas/bull/neuron/foto3.webp"
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
