const productos = [
    {
      id: 700,
      marca: "Siux",
      nombre: "Siux Inspire 4.0",
      precio: 177000,
      tipo: "Polivalente",
      materiales: ["Fibra de vidrio", "Eva Soft High Recovery"],
      rugosidad: "Mate",
      descripcion: "Pala híbrida con buen equilibrio entre potencia y control.",
      imagenes: [
        "/front/paletas/siux/otros/foto1.webp",
        "/front/paletas/siux/otros/foto2.webp",
        "/front/paletas/siux/otros/foto3.webp"
      ]
    },
    {
      id: 701,
      marca: "Siux",
      nombre: "Siux Viking IV",
      precio: 177000,
      tipo: "Polivalente",
      materiales: ["Fibra de vidrio", "Eva Ultra Soft High Recovery"],
      rugosidad: "Brillo",
      descripcion: "Pala versátil con forma híbrida y balance medio.",
      imagenes: [
        "/front/paletas/siux/otros/foto5.webp",
        "/front/paletas/siux/otros/foto6.webp",
        "/front/paletas/siux/otros/foto7.webp"
      ]
    },
    {
      id: 702,
      marca: "Siux",
      nombre: "Siux Beat Hybrid 24",
      precio: 183000,
      tipo: "Polivalente",
      materiales: ["Fibra de vidrio", "Eva Soft"],
      rugosidad: "Brillo",
      descripcion: "Pala híbrida ideal para jugadores en iniciación.",
      imagenes: [
        "/front/paletas/siux/beat/foto1.webp",
        "/front/paletas/siux/beat/foto2.webp",
        "/front/paletas/siux/beat/foto3.webp"
      ]
    },
    {
      id: 703,
      marca: "Siux",
      nombre: "Siux Beat Hybrid Air 24",
      precio: 183000,
      tipo: "Polivalente",
      materiales: ["Fibra de vidrio", "Eva Soft"],
      rugosidad: "Brillo",
      descripcion: "Pala ligera con excelente maniobrabilidad.",
      imagenes: [
        "/front/paletas/siux/beat/foto5.webp",
        "/front/paletas/siux/beat/foto6.webp",
        "/front/paletas/siux/beat/foto7.webp"
      ]
    },
    {
      id: 704,
      marca: "Siux",
      nombre: "Siux Fenix Pro 5 25",
      precio: 481000,
      tipo: "Potencia",
      materiales: ["Carbono 24K", "Eva Hard"],
      rugosidad: "3D",
      descripcion: "Pala de potencia con forma diamante y acabado rugoso.",
      imagenes: [
        "/front/paletas/siux/pro/foto1.webp",
        "/front/paletas/siux/pro/foto2.webp",
        "/front/paletas/siux/pro/foto3.webp",
        "/front/paletas/siux/pro/foto4.webp"

      ]
    },
    {
      id: 705,
      marca: "Siux",
      nombre: "Siux Electra Pro ST4 25",
      precio: 481000,
      tipo: "Potencia",
      materiales: ["Carbono 24K", "Eva Hard"],
      rugosidad: "3D",
      descripcion: "Pala profesional con gran potencia y control.",
      imagenes: [
       "/front/paletas/siux/pro/foto5.webp",
        "/front/paletas/siux/pro/foto6.webp",
        "/front/paletas/siux/pro/foto7.webp",
        "/front/paletas/siux/pro/foto8.webp"

      ]
    }
  ];

  
document.addEventListener("DOMContentLoaded", function () {
    mostrarProductos("Siux");
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
            const producto = productos.filter(p => p.marca === "Siux")[index];

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
