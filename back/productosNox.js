document.addEventListener("DOMContentLoaded", function () {
    const productosNox = [
        {
            id: 100,
            marca: "Nox",
            nombre: "Nox ML10 Pro Cup Rough Surface 23",
            precio: 200000,
            tipo: "Control",
            materiales: ["Fibra de vidrio", "HR3 Core"],
            descripcion: "Versión con superficie rugosa de la clásica ML10 Pro Cup para mayor efecto en los golpes.",
            rugosidad: "Rough Surface",
            imagenes: [
                "/front/paletas/nox/ml10/foto1.webp",
                "/front/paletas/nox/ml10/foto2.webp",
                "/front/paletas/nox/ml10/foto3.webp"

            ]
        },
        {
            id: 102,
            marca: "Nox",
            nombre: "Nox Equation Advanced Lady 24",
            precio: 215000,
            tipo: "Control",
            materiales: ["Fibra de vidrio", "HR3 Core"],
            descripcion: "Paleta ligera y manejable, ideal para jugadoras avanzadas que buscan precisión.",
            rugosidad: "sin cara especial",
            imagenes: [
                "/front/paletas/nox/equation/foto1.webp",
                "/front/paletas/nox/equation/foto2.webp",
                "/front/paletas/nox/equation/foto3.webp"

            ]
        },
        {
            "id": 103,
            "marca": "Nox",
            "nombre": "Nox AT Pro Cup Coorp 24",
            "precio": 268000,
            "tipo": "Híbrida",
            "materiales": ["Carbono", "HR3 Core"],
            "descripcion": "Una paleta que combina la manejabilidad de la AT10 y la comodidad de la ML10. Su estructura de carbono y goma HR3 ofrecen gran durabilidad y control.",
            "rugosidad": "sin cara especial",
            "imagenes": [
                "/front/paletas/nox/otros/foto5.webp",
                "/front/paletas/nox/otros/foto6.webp",
                "/front/paletas/nox/otros/foto7.webp"

            ]
        }
,        
         {
            id: 104,  // ID siguiente en la secuencia
            marca: "Nox",
            nombre: "Nox VK10 Future 24",
            precio: 275000,
            tipo: "Control",
            materiales: ["Carbono", "HR3 Core"],
            descripcion: "Paleta versátil con gran control y excelente manejabilidad.",
            rugosidad: "Rugoso 3D",
            imagenes: [
                "/front/paletas/nox/otros/foto1.webp",
                "/front/paletas/nox/otros/foto2.webp",
                "/front/paletas/nox/otros/foto3.webp"

            ]
        },
        
        {
             id: 107, // Ajusta el ID según tu numeración
             marca: "Nox",
             nombre: "Nox ML10 Pro Cup Luxury 24",
             precio: 350000, // Completa con el precio correcto
             tipo: "Control",
             materiales: ["Carbono", "Eva HR3"],
             rugosidad: "Rough Surface", // Ajusta si es necesario
             descripcion: "Paleta de gran control y salida de bola, con un diseño premium.",
             imagenes: [
                 "/front/paletas/nox/ml10/foto5.webp",
                 "/front/paletas/nox/ml10/foto6.webp",
                 "/front/paletas/nox/ml10/foto7.webp"
             ]
         },
        {
            id: 105,  // ID siguiente en la secuencia
            marca: "Nox",
            nombre: "Nox LA10 Quantum Carbon 12K 25",
            precio: 460000,
            tipo: "Potencia",
            materiales: ["Carbono 12K", "HR3 Core"],
            descripcion: "Paleta de alto rendimiento con gran potencia y excelente control.",
            rugosidad: "Top Spin",
            imagenes: [
                "/front/paletas/nox/quantum/foto1.webp",
                "/front/paletas/nox/quantum/foto2.webp",
                "/front/paletas/nox/quantum/foto3.webp"

            ]
        }
        ,
        
        {
            id: 101,
            marca: "Nox",
            nombre: "Nox AT10 Genius 12K 25",
            precio: 470000,
            tipo: "Control",
            materiales: ["Carbono 12K", "HR3 Core"],
            descripcion: "Paleta utilizada por Agustín Tapia, con gran equilibrio entre potencia y control.",
            rugosidad: "3D",
            imagenes: [
                "/front/paletas/nox/genius/foto5.webp",
                "/front/paletas/nox/genius/foto7.webp",
                "/front/paletas/nox/genius/foto6.webp"
            ]
        },
        {
            id: 106, // Ajusta el ID según la numeración que estés usando
            marca: "Nox",
            nombre: "Nox AT10 Genius Attack 12K 25",
            precio: 470000, // Completa con el precio correcto
            tipo: "Potencia",
            materiales: ["Carbono 12K", "Eva HR3"],
            rugosidad: "Rough Surface", // Ajusta si es necesario
            descripcion: "Paleta diseñada para jugadores que buscan potencia con una excelente salida de bola.",
            imagenes: [
                "/front/paletas/nox/genius/foto1.webp",
                "/front/paletas/nox/genius/foto2.webp",
                "/front/paletas/nox/genius/foto3.webp"

            ]
        } 
    ];

    const contenedor = document.getElementById("productos-container");

    productosNox.forEach(producto => {
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

