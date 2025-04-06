const productos = [
    {
        id: 400,
        marca: "Kelme",
        nombre: "Kelme Cheetah",
        precio: 134500,
        tipo: "Control",
        materiales: ["Carbono", "Eva Soft"],
        rugosidad: "sin cara especial",
        descripcion: "Paleta Kelme Cheetah ideal para jugadores que buscan equilibrio entre control y confort.",
        imagenes: [
            "/front/paletas/Kelme/foto1.webp",
            "/front/paletas/Kelme/foto2.webp"
        ]
    },
    {
        id: 401,
        marca: "Kelme",
        nombre: "Kelme Falcon",
        precio: 145900,
        tipo: "Potencia",
        materiales: ["Carbono", "Eva Soft"],
        rugosidad: "sin cara especial",
        descripcion: "Kelme Falcon combina potencia y maniobrabilidad con un diseño moderno.",
        imagenes: [
            "/front/paletas/Kelme/foto5.webp",
            "/front/paletas/Kelme/foto6.webp"
        ]
    },
    {
        id: 402,
        marca: "Kelme",
        nombre: "Kelme Bear CTRL",
        precio: 178900,
        tipo: "Control",
        materiales: ["Carbono 3K", "Eva Soft"],
        rugosidad: "sin cara especial",
        descripcion: "Modelo Kelme Bear CTRL enfocado en el juego técnico con excelente control.",
        imagenes: [
            "/front/paletas/Kelme/foto9.webp",
            "/front/paletas/Kelme/foto10.webp"
        ]
    },
    {
        id: 403,
        marca: "Kelme",
        nombre: "Kelme Warrior",
        precio: 254000,
        tipo: "Potencia",
        materiales: ["Carbono 12K", "Eva Soft"],
        rugosidad: "sin cara especial",
        descripcion: "Kelme Warrior, potencia y rendimiento para jugadores avanzados.",
        imagenes: [
            "/front/paletas/Kelme/foto13.webp",
            "/front/paletas/Kelme/foto14.webp"
        ]
    },
    {
        id: 404,
        marca: "Kelme",
        nombre: "Kelme Panther",
        precio: 181000,
        tipo: "Control",
        materiales: ["Carbono", "Eva Soft"],
        rugosidad: "sin cara especial",
        descripcion: "Kelme Panther combina control y precisión con una estética elegante.",
        imagenes: [
            "/front/paletas/Kelme/foto17.webp",
            "/front/paletas/Kelme/foto18.webp"
        ]
    }
];




document.addEventListener("DOMContentLoaded", function () {
    mostrarProductos("Kelme");
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
            const producto = productos.filter(p => p.marca === "Kelme")[index];

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


