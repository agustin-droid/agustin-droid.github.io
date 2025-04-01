document.addEventListener("DOMContentLoaded", function () {
    const productosUrich = [
        {
            id: 310,
            marca: "Urich",
            nombre: "Urich Iron Carbon Frame Flex Tech Celeste 23",
            precio: 95000,
            tipo: "Control",
            materiales: ["Carbono", "Eva Soft"],
            rugosidad: "Rough Surface",
            descripcion: "Paleta ligera con excelente control y gran salida de bola.",
            imagenes: [
                "/front/paletas/urich/otros/foto 20.webp",
                "/front/paletas/urich/otros/foto 21.webp"
            ]
        },
        {
            id: 311,
            marca: "Urich",
            nombre: "Urich Iron Pro Carbon 3K 23",
            precio: 125000,
            tipo: "Potencia",
            materiales: ["Carbono 3K", "Eva Hard"],
            rugosidad: "Rough Surface",
            descripcion: "Paleta con balance alto para jugadores que buscan potencia y precisión.",
            imagenes: [
                "/front/paletas/urich/otros/foto17.webp",
                "/front/paletas/urich/otros/foto18.webp"
            ]
        },
        {
            id: 400,
            marca: "Adidas",
            nombre: "Adidas Drive 3.4 Negro",
            precio: 165000,
            tipo: "Control",
            materiales: ["Fibra de vidrio", "Eva Soft"],
            rugosidad: "Lisa",
            descripcion: "Paleta ideal para jugadores en desarrollo que buscan un buen equilibrio entre control y potencia.",
            imagenes: [
                "/front/paletas/adidas/3.4/foto1.webp",
                "/front/paletas/adidas/3.4/foto2.webp"
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
    
    