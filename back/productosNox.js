document.addEventListener("DOMContentLoaded", function () {
    const productosNox = [
        {
            id: 1,
            marca: "Nox",
            nombre: "Nox AT10 Genius 18K",
            precio: 420000,
            tipo: "Control",
            materiales: ["Carbono 18K", "HR3 Core"],
            descripcion: "Diseñada en colaboración con Agustín Tapia, ideal para jugadores de control.",
            imagenes: [
                "/front/paletas/nox/ml10/foto1.webp",
                "/front/paletas/nox/ml10/foto2.webp"
            ]
        },
        {
            id: 2,
            marca: "Nox",
            nombre: "Nox ML10 Pro Cup",
            precio: 350000,
            tipo: "Versátil",
            materiales: ["Fibra de vidrio", "HR3 Core"],
            descripcion: "Una paleta mítica en la historia de Nox, usada por Miguel Lamperti.",
            imagenes: [
                "../fotos paletas/nox ml10 pro cup/foto1.jpg",
                "../fotos paletas/nox ml10 pro cup/foto2.jpg",
                "../fotos paletas/nox ml10 pro cup/foto3.jpg",
                "../fotos paletas/nox ml10 pro cup/foto4.jpg"
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
                <div class="galeria">${imagenesHTML}</div>
                <h3>${producto.nombre}</h3>
                <p><strong>Precio:</strong> $${producto.precio.toLocaleString()}</p>
                <p><strong>Tipo:</strong> ${producto.tipo}</p>
                <p><strong>Materiales:</strong> ${producto.materiales.join(", ")}</p>
                <p>${producto.descripcion}</p>
            </div>
        `;
        contenedor.innerHTML += productoHTML;
    });
});
