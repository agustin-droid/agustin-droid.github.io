const productos = [
    {
        id: 204,
        marca: "Dunlop",
        nombre: "Dunlop Inferno Carbon Elite",
        precio: 148000,
        tipo: "Potencia",
        materiales: ["Carbono", "Eva Soft"],
        rugosidad: "sin cara especial",
        descripcion: "Paleta con diseño optimizado para maximizar la potencia sin perder estabilidad.",
        imagenes: [
            "/front/paletas/dunlop/otros/foto1.webp",
            "/front/paletas/dunlop/otros/foto2.webp",
            "/front/paletas/dunlop/otros/foto3.webp",

        ]
    }/*,
    {
        id: 202,
        marca: "Dunlop",
        nombre: "Dunlop Galactica Team",
        precio: 170000,
        tipo: "Control",
        materiales: ["Fibra de vidrio", "Eva pro"],
        rugosidad: "Textura rugosa",
        descripcion: "Paleta versátil con un buen equilibrio entre control y salida de bola.",
        imagenes: [
            "/front/paletas/dunlop/galactica/foto5.webp",
            "/front/paletas/dunlop/galactica/foto6.webp",
            "/front/paletas/dunlop/galactica/foto7.webp"

        ]
    },
    {
        id: 203,
        marca: "Dunlop",
        nombre: "Dunlop Aero Star Team",
        precio: 170000,
        tipo: "Control",
        materiales: ["Carbono", "Eva Soft"],
        rugosidad: "Textura rugosa",
        descripcion: "Paleta diseñada para jugadores que buscan precisión y efecto en cada golpe.",
        imagenes: [
            "/front/paletas/dunlop/star/foto5.webp",
            "/front/paletas/dunlop/star/foto6.webp",
            "/front/paletas/dunlop/star/foto7.webp",

        ]
    },
    {
        id: 201,
        marca: "Dunlop",
        nombre: "Dunlop Aero Star Lite",
        precio: 185000,
        tipo: "Control",
        materiales: ["Carbono", "Eva Soft"],
        rugosidad: "Textura rugosa",
        descripcion: "Paleta con estructura reforzada y superficie rugosa para un mejor control.",
        imagenes: [
            "/front/paletas/dunlop/star/foto1.webp",
            "/front/paletas/dunlop/star/foto2.webp",
            "/front/paletas/dunlop/star/foto3.webp"

        ]
    },
    {
        id: 200,
        marca: "Dunlop",
        nombre: "Dunlop Galactica Lite",
        precio: 190000,
        tipo: "Control",
        materiales: ["Carbono", "Eva Soft"],
        rugosidad: "Textura rugosa",
        descripcion: "Paleta ligera con superficie rugosa para mayor efecto en los golpes.",
        imagenes: [
            "/front/paletas/dunlop/galactica/foto1.webp",
            "/front/paletas/dunlop/galactica/foto2.webp",
            "/front/paletas/dunlop/galactica/foto3.webp"

        ]
    }*/
];



document.addEventListener("DOMContentLoaded", function () {
    mostrarProductos("Dunlop");
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
            const producto = productos.filter(p => p.marca === "Dunlop")[index];

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


