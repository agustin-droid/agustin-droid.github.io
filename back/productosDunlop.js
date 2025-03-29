const productos = [
    {
        id: 204,
        marca: "Dunlop",
        nombre: "Dunlop Inferno Carbon Elite",
        precio: 158000,
        tipo: "Potencia",
        materiales: ["Carbono", "Eva Soft"],
        rugosidad: "sin cara especial",
        descripcion: "Paleta con diseño optimizado para maximizar la potencia sin perder estabilidad.",
        imagenes: [
            "/front/paletas/dunlop/otros/foto1.webp",
            "/front/paletas/dunlop/otros/foto2.webp",
            "/front/paletas/dunlop/otros/foto3.webp",

        ]
    },
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
    <h3 class="nombre-separador">${producto.nombre}</h3>
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
