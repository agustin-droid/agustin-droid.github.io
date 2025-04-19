
const productos = [
    {
        id: 306,
        marca: "Urich",
        nombre: "Urich Fusion Soft 25",
        precio: 138000,
        tipo: "Control",
        materiales: ["Fibra de vidrio", "Eva Soft"],
        rugosidad: "Rough Surface",
        descripcion: "Paleta con excelente balance y control, ideal para jugadores que buscan precisión.",
        imagenes: [
            "/front/paletas/urich/fusion/foto1.webp",
            "/front/paletas/urich/fusion/foto2.webp",
            "/front/paletas/urich/fusion/foto3.webp"
        ]
    },
    {
        id: 303,
        marca: "Urich",
        nombre: "Urich Intelligent 3K TMD 24",
        precio: 160000,
        tipo: "Control",
        materiales: ["Carbono 3K", "Eva Soft"],
        rugosidad: "Rough Surface",
        descripcion: "Modelo innovador con tecnología TMD para mayor estabilidad y control.",
        imagenes: [
            "/front/paletas/urich/intelligent/foto1.webp",
            "/front/paletas/urich/intelligent/foto2.webp",
            "/front/paletas/urich/intelligent/foto3.webp"

        ]
    },
    
    {
        id: 305,
        marca: "Urich",
        nombre: "Urich Fusion Armor 25",
        precio: 167000,
        tipo: "Control",
        materiales: ["Fibra de vidrio", "Goma EVA Soft"],
        rugosidad: "Lisa",
        descripcion: "Modelo balanceado orientado al control y la manejabilidad. Ideal para jugadores en desarrollo que priorizan precisión y confort en cada golpe.",
        imagenes: [
            "/front/paletas/urich/fusion/foto13.webp",
            "/front/paletas/urich/fusion/foto14.webp",
            "/front/paletas/urich/fusion/foto15.webp",
        ]
    },
    {
        id: 302,
        marca: "Urich",
        nombre: "Urich Deep 3K Flex Tech 24",
        precio: 176000,
        tipo: "Control",
        materiales: ["Carbono 3K", "Eva Soft"],
        rugosidad: "Rough Surface",
        descripcion: "Paleta con materiales de alta calidad para un juego preciso y estable.",
        imagenes: [
            "/front/paletas/urich/otros/foto1.webp",
            "/front/paletas/urich/otros/foto2.webp",
            "/front/paletas/urich/otros/foto3.webp"
        ]
    },
    {
        id: 301,
        marca: "Urich",
        nombre: "Urich Dropper 12K Flex Tech 24",
        precio: 180000,
        tipo: "Potencia",
        materiales: ["Carbono 12K", "Eva Soft"],
        rugosidad: "Rough Surface",
        descripcion: "Paleta con balance alto para jugadores que buscan potencia.",
        imagenes: [
            "/front/paletas/urich/otros/foto5.webp",
            "/front/paletas/urich/otros/foto6.webp",
            "/front/paletas/urich/otros/foto7.webp"
        ]
    }
    ,
    {
        id: 310,
        marca: "Urich",
        nombre: "Paleta Urich Fusion Hard 25",
        precio: 205000,
        tipo: "Potencia",
        materiales: ["Carbono", "EVA Soft Black"],
        rugosidad: "Lija",
        descripcion: "Paleta de potencia con superficie rugosa tipo lija para mayor efecto.",
        imagenes: [
            "/front/paletas/urich/fusion/foto17.webp",
            "/front/paletas/urich/fusion/foto18.webp",
            "/front/paletas/urich/fusion/foto19.webp"
        ]
    },
    {
        id: 304,
        marca: "Urich",
        nombre: "Urich Fusion Hard V 25",
        precio: 205000,
        tipo: "Potencia",
        materiales: ["Carbono 3K", "Goma EVA Hard"],
        rugosidad: "Lisa",
        descripcion: "Paleta pensada para jugadores ofensivos que buscan potencia en cada golpe. Su goma EVA dura y el carbono 3K le otorgan mayor firmeza para remates agresivos.",
        imagenes: [
            "/front/paletas/urich/fusion/foto9.webp",
            "/front/paletas/urich/fusion/foto10.webp",
            "/front/paletas/urich/fusion/foto11.webp",
        ]
    },
    {
        id: 309,
        marca: "Urich",
        nombre: "Urich Fusion 3K Flex 25",
        precio: 205000,
        tipo: "Control",
        materiales: ["Carbono 3K", "Eva Soft"],
        rugosidad: "Rough Surface",
        descripcion: "Paleta equilibrada que ofrece un gran control y una excelente salida de bola.",
        imagenes: [
            "/front/paletas/urich/fusion/foto5.webp",
            "/front/paletas/urich/fusion/foto6.webp",
            "/front/paletas/urich/fusion/foto7.webp"

        ]
    },
    {
        id: 308,
        marca: "Urich",
        nombre: "Urich Dropper Hard 25",
        precio: 230000,
        tipo: "Potencia",
        materiales: ["Carbono", "Eva Hard"],
        rugosidad: "Rough Surface",
        descripcion: "Paleta con estructura reforzada para máxima potencia y resistencia en el juego.",
        imagenes: [
            "/front/paletas/urich/otros/foto9.webp",
            "/front/paletas/urich/otros/foto10.webp",
            "/front/paletas/urich/otros/foto11.webp"

        ]
    }/*,
    {
        id: 300,
        marca: "Urich",
        nombre: "Urich Deep 12K Victor Ruiz Soft",
        precio: 360000,
        tipo: "Control",
        materiales: ["Carbono 12K", "Eva Soft"],
        rugosidad: "Rough Surface",
        descripcion: "Paleta diseñada con tecnología avanzada para un excelente control y salida de bola.",
        imagenes: [
           "/front/paletas/urich/otros/foto13.webp",
            "/front/paletas/urich/otros/foto14.webp",
            "/front/paletas/urich/otros/foto15.webp"
        ]
    }*/
];


document.addEventListener("DOMContentLoaded", function () {
    mostrarProductos("Urich");
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
            const producto = productos.filter(p => p.marca === "Urich")[index];

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
