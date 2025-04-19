const productos = [
    {
        id: 500,
        marca: "Adidas",
        nombre: "Adidas RX Series Red",
        precio: 167000,
        tipo: "Control",
        materiales: ["Fibra de vidrio", "Goma EVA Soft"],
        rugosidad: "Sin cara especial",
        descripcion: "Paleta cómoda y manejable para jugadores ocasionales.",
        imagenes: [            
            "/front/paletas/adidas/otros/foto1.webp",
            "/front/paletas/adidas/otros/foto2.webp",
            "/front/paletas/adidas/otros/foto3.webp"

        ]
    },
    {
        id: 508,
        marca: "Adidas",
        nombre: "Adidas Zukur Red 23",
        precio: 185000,
        tipo: "Control",
        materiales: ["Fibra de vidrio", "Eva Soft Performance"],
        rugosidad: "Lisa",
        descripcion: "Modelo liviano y cómodo para principiantes.",
        imagenes: [
            "/front/paletas/adidas/otros/foto5.webp",
            "/front/paletas/adidas/otros/foto6.webp",
            "/front/paletas/adidas/otros/foto7.webp"
        ]
    },
    {
        id: 501,
        marca: "Adidas",
        nombre: "Adidas Metalbone Series Rojo 24",
        precio: 276000,
        tipo: "Potencia",
        materiales: ["Fibra de vidrio", "Eva Soft Performance"],
        rugosidad: "Cara arenosa",
        descripcion: "Potencia y estilo para jugadores agresivos.",
        imagenes: [            
            "/front/paletas/adidas/metalbone/foto1.webp",
            "/front/paletas/adidas/metalbone/foto2.webp",

        ]
    },
    {
        id: 509,
        marca: "Adidas",
        nombre: "Adidas Adipower Carbon Light 3.4",
        precio: 355000,
        tipo: "Control",
        materiales: ["Carbono 6K", "Eva Soft Energy"],
        rugosidad: "Top Spin",
        descripcion: "Excelente control con peso reducido.",
        imagenes: [         
               "/front/paletas/adidas/adipower/foto13.webp",
               "/front/paletas/adidas/adipower/foto14.webp",
               "/front/paletas/adidas/adipower/foto15.webp",

            ]
    },
    {
        id: 502,
        marca: "Adidas",
        nombre: "Adidas Cross It",
        precio: 378500,
        tipo: "Control",
        materiales: ["Carbono", "Eva Soft Energy"],
        rugosidad: "Top Spin",
        descripcion: "Excelente salida de bola y precisión.",
        imagenes: [            
            "/front/paletas/adidas/cross/foto1.webp",
            "/front/paletas/adidas/cross/foto2.webp",
            "/front/paletas/adidas/cross/foto3.webp"

        ]
    },
    {
        id: 503,
        marca: "Adidas",
        nombre: "Adidas Adipower Multiweight CTRL 3.3",
        precio: 380000,
        tipo: "Control",
        materiales: ["Carbono", "Eva High Memory", "Pesas"],
        rugosidad: "Rough Surface",
        descripcion: "Control personalizable con sistema de pesas.",
        imagenes: [            
            "/front/paletas/adidas/adipower/foto9.webp",
            "/front/paletas/adidas/adipower/foto10.webp",
            "/front/paletas/adidas/adipower/foto11.webp"

        ]
    },
    {
        id: 504,
        marca: "Adidas",
        nombre: "Adidas Metalbone HRD 3.3",
        precio: 406000,
        tipo: "Potencia",
        materiales: ["Carbono Aluminizado", "Eva High Memory", "Pesas"],
        rugosidad: "Cara arenosa",
        descripcion: "Potencia extrema con balance ajustable.",
        imagenes: [            
            "/front/paletas/adidas/metalbone/foto5.webp",
            "/front/paletas/adidas/metalbone/foto6.webp",
            "/front/paletas/adidas/metalbone/foto7.webp"

        ]
    },
    {
        id: 505,
        marca: "Adidas",
        nombre: "Adidas Adipower Legend 24",
        precio: 436000,
        tipo: "Potencia",
        materiales: ["Carbono 15K", "Eva Soft Energy"],
        rugosidad: "Top Spin",
        descripcion: "Diseñada con tecnología profesional.",
        imagenes: [            
            "/front/paletas/adidas/adipower/foto5.webp",
            "/front/paletas/adidas/adipower/foto6.webp",
            "/front/paletas/adidas/adipower/foto7.webp"

        ]
    },
    {
        id: 510,
        marca: "Adidas",
        nombre: "Adipower Multiweight CTRL 3.4",
        precio: 455000,
        tipo: "Control",
        materiales: ["Carbono 18K", "Eva High Memory", "Pesas"],
        rugosidad: "Top Spin",
        descripcion: "Control total con balance personalizable.",
        imagenes: [
            "/front/paletas/adidas/adipower/foto17.webp",
            "/front/paletas/adidas/adipower/foto18.webp",
            "/front/paletas/adidas/adipower/foto19.webp",
            "/front/paletas/adidas/adipower/foto20.webp"
        ]
    },
    {
        id: 506,
        marca: "Adidas",
        nombre: "Adidas Adipower Multiweight Master LTD 23",
        precio: 495000,
        tipo: "Potencia",
        materiales: ["Carbono", "Eva High Memory", "Pesas"],
        rugosidad: "Rough Surface",
        descripcion: "Edición limitada con balance ajustable.",
        imagenes: [            
            "/front/paletas/adidas/adipower/foto1.webp",
            "/front/paletas/adidas/adipower/foto2.webp",
            "/front/paletas/adidas/adipower/foto3.webp",
        ]    },{
            id: 511,
            marca: "Adidas",
            nombre: "Adipower CTRL Multiweight Pro EDT 24",
            precio: 573000,
            tipo: "Control",
            materiales: ["Carbono 18K", "Eva High Memory", "Pesas"],
            rugosidad: "Top Spin",
            descripcion: "Edición Pro de máximo control y balance ajustable.",
            imagenes: [
                "/front/paletas/adidas/adipower/foto21.webp",
                "/front/paletas/adidas/adipower/foto22.webp",
                "/front/paletas/adidas/adipower/foto23.webp",
                "/front/paletas/adidas/adipower/foto24.webp"

            ]
        }
    
];




document.addEventListener("DOMContentLoaded", function () {
    mostrarProductos("Adidas");
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
            const producto = productos.filter(p => p.marca === "Adidas")[index];

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


