document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("bullpadel").addEventListener("change", function() {
        if (this.checked) {
            window.location.href = "otras-paginas/bullpadel.html";
        }
    });

    document.getElementById("adidas").addEventListener("change", function() {
        if (this.checked) {
            window.location.href = "otras-paginas/adidas.html";
        }
    });

    document.getElementById("nox").addEventListener("change", function() {
        if (this.checked) {
            window.location.href = "otras-paginas/nox.html";
        }
    });
});
