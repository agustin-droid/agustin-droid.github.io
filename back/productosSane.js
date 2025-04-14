const productos = [
    
    {
        id: 604,
        marca: "Sane",
        nombre: "Sane Assassin Classic 3K",
        precio: 137500,
        tipo: "Control",
        materiales: ["Carbono 3K", "Goma EVA Soft"],
        rugosidad: "Lisa",
        descripcion: "Una paleta equilibrada que ofrece buen control y manejabilidad. Su construcción en carbono 3K le da firmeza sin perder comodidad.",
        imagenes: [
            "/front/paletas/sane/assasin/foto1.webp",
            "/front/paletas/sane/assasin/foto2.webp",
            "/front/paletas/sane/assasin/foto3.webp"
        ]
    },
    {
        id: 601,
        marca: "Sane",
        nombre: "Sane Elis 2",
        precio: 170000,
        tipo: "Control",
        materiales: ["Fibra de Vidrio", "Goma EVA Soft"],
        rugosidad: "Lisa",
        descripcion: "Ideal para jugadores que buscan control y manejabilidad, la Elis 2 combina un núcleo blando con materiales flexibles que absorben las vibraciones.",
        imagenes: [
            "/front/paletas/sane/elis/foto1.webp",
            "/front/paletas/sane/elis/foto2.webp",
            "/front/paletas/sane/elis/foto3.webp"
        ]
    },
    {
        id: 600,
        marca: "Sane",
        nombre: "Sane Agressor VII Black",
        precio: 205000,
        tipo: "Potencia",
        materiales: ["Carbono 3K", "Goma EVA Soft"],
        rugosidad: "Lija",
        descripcion: "La Agressor VII Black está diseñada para ofrecer una excelente salida de bola y potencia, con superficie rugosa para mejorar los efectos.",
        imagenes: [
            "/front/paletas/sane/agressor/foto1.webp",
            "/front/paletas/sane/agressor/foto2.webp",
            "/front/paletas/sane/agressor/foto3.webp"
        ]
    },
    {
        id: 602,
        marca: "Sane",
        nombre: "Sane Agressor Evolution Diamond Alpha",
        precio: 360000,
        tipo: "Potencia",
        materiales: ["Carbono 12K", "Goma EVA Black"],
        rugosidad: "Lija",
        descripcion: "Una paleta de alto rendimiento para jugadores ofensivos. Su formato diamante y superficie rugosa la convierten en una aliada ideal para el juego de ataque.",
        imagenes: [
           "/front/paletas/sane/agressor/foto5.webp",
            "/front/paletas/sane/agressor/foto6.webp",
            "/front/paletas/sane/agressor/foto7.webp",
            "/front/paletas/sane/agressor/foto8.webp"
            
        ]
    },
    {
        id: 603,
        marca: "Sane",
        nombre: "Sane Agressor Evolution Diamond Omega",
        precio: 400000,
        tipo: "Potencia",
        materiales: ["Carbono 18K", "Goma EVA Black"],
        rugosidad: "Lija",
        descripcion: "La Omega es la versión más agresiva de la línea Agressor Evolution, con carbono 18K y cara rugosa que maximizan el efecto y la potencia en cada remate.",
        imagenes: [
            "/front/paletas/sane/agressor/foto9.webp",
            "/front/paletas/sane/agressor/foto10.webp",
            "/front/paletas/sane/agressor/foto11.webp",
            "/front/paletas/sane/agressor/foto12.webp"
            
        ]
    },
    {
        id: 605,
        marca: "Sane",
        nombre: "Sane Cinetik 28",
        precio: 400000,
        tipo: "Potencia",
        materiales: ["Carbono 24K", "Goma EVA Black"],
        rugosidad: "Lija",
        descripcion: "La Cinetik 28 está pensada para jugadores exigentes que buscan potencia explosiva. Su carbono 24K y núcleo Black EVA proporcionan máxima respuesta y efectos.",
        imagenes: [
            "/front/paletas/sane/cinetik/foto1.webp",
            "/front/paletas/sane/cinetik/foto2.webp",
            "/front/paletas/sane/cinetik/foto3.webp"
        ]
    }
    
    
];



document.addEventListener("DOMContentLoaded", function () {
    mostrarProductos("Sane");
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
            const producto = productos.filter(p => p.marca === "Sane")[index];

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


