document.addEventListener("DOMContentLoaded", function () {
const productosUrich = [
    {
        id: 306,
        marca: "Urich",
        nombre: "Urich Fusion Soft 25",
        precio: 138000,
        tipo: "Control",
        materiales: ["Carbono", "Eva Soft"],
        rugosidad: "Rough Surface",
        descripcion: "Paleta con excelente balance y control, ideal para jugadores que buscan precisión.",
        imagenes: [
            "/front/paletas/urich/fusion-soft-25/foto1.webp",
            "/front/paletas/urich/fusion-soft-25/foto2.webp"
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
            "/front/paletas/urich/intelligent-3k-tmd-24/foto1.webp",
            "/front/paletas/urich/intelligent-3k-tmd-24/foto2.webp"
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
            "/front/paletas/urich/deep-3k-flex-tech-24/foto1.webp",
            "/front/paletas/urich/deep-3k-flex-tech-24/foto2.webp"
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
            "/front/paletas/urich/dropper-12k-flex-tech-24/foto1.webp",
            "/front/paletas/urich/dropper-12k-flex-tech-24/foto2.webp"
        ]
    },
    {
        id: 309,
        marca: "Urich",
        nombre: "Urich Fusion 3K Flex 25",
        precio: 202000,
        tipo: "Control",
        materiales: ["Carbono 3K", "Eva Soft"],
        rugosidad: "Rough Surface",
        descripcion: "Paleta equilibrada que ofrece un gran control y una excelente salida de bola.",
        imagenes: [
            "/front/paletas/urich/fusion-3k-flex-25/foto1.webp",
            "/front/paletas/urich/fusion-3k-flex-25/foto2.webp"
        ]
    },
    {
        id: 307,
        marca: "Urich",
        nombre: "Urich Iron Hard 25",
        precio: 197000,
        tipo: "Potencia",
        materiales: ["Carbono", "Eva Hard"],
        rugosidad: "Rough Surface",
        descripcion: "Paleta diseñada para jugadores ofensivos que buscan potencia en cada golpe.",
        imagenes: [
            "/front/paletas/urich/iron-hard-25/foto1.webp",
            "/front/paletas/urich/iron-hard-25/foto2.webp"
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
            "/front/paletas/urich/dropper-hard-25/foto1.webp",
            "/front/paletas/urich/dropper-hard-25/foto2.webp"
        ]
    },
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
            "/front/paletas/urich/deep/foto1.webp",
            "/front/paletas/urich/deep/foto2.webp"
        ]
    }
];

const contenedor = document.getElementById("productos-container");

    productosUrich.forEach(producto => {
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
    
});
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

