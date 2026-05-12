document.addEventListener("DOMContentLoaded", async () => {
    const grid = document.getElementById("instagram-grid");

    try {
        // 1. "Pedimos" el archivo JSON
        const respuesta = await fetch('Easy-Peasy-English-web/ejercicios.json');

        // 2. Convertimos el texto del archivo en un Objeto de JS
        const ejercicios = await respuesta.json();

        // 3. El mismo ciclo FOR que ya conoces
        ejercicios.forEach(post => {
            const cardHTML = `
                <div class="col">
                    <div class="card border-0 shadow-sm rounded-4 overflow-hidden h-100 shadow-hover" style="transition: 0.3s;">
                        <div class="position-absolute top-0 start-0 m-3">
                            <span class="badge rounded-pill" style="background-color: ${post.color};">
                                ${post.categoria}
                            </span>
                        </div>
                        <div style="height: 200px; overflow: hidden;">
                            <img src="${post.img}" class="w-100 h-100" style="object-fit: cover;">
                        </div>
                        <div class="card-body text-start d-flex flex-column justify-content-between">
                            <h5 class="fw-bold">${post.tema}</h5>
                            <a href="${post.link}" target="_blank" class="btn btn-sm w-100 mt-3 text-white" style="background-color: #FF1493; border-radius: 50px;">
                                Ver Ejercicio
                            </a>
                        </div>
                    </div>
                </div>
            `;
            grid.innerHTML += cardHTML;
        });

    } catch (error) {
        console.error("¡Ups! No pudimos cargar los ejercicios:", error);
        grid.innerHTML = "<p>Error al cargar el contenido. Inténtalo más tarde.</p>";
    }
});