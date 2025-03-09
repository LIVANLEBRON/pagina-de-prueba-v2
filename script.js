// Función para abrir el modal con el juego
function openGameModal(gameTitle, gameUrl) {
    const modal = document.getElementById("gameModal");
    const modalTitle = document.getElementById("modalTitle");
    const gameIframe = document.getElementById("gameIframe");

    // Configurar el título y la URL del iframe
    modalTitle.textContent = gameTitle;
    gameIframe.src = gameUrl;

    // Mostrar el modal
    modal.style.display = "flex";
}

// Función para cerrar el modal
function closeGameModal() {
    const modal = document.getElementById("gameModal");
    const gameIframe = document.getElementById("gameIframe");

    // Ocultar el modal y limpiar el iframe
    modal.style.display = "none";
    gameIframe.src = ""; // Limpiar el src para detener la carga del juego
}

// Cerrar el modal al hacer clic fuera del contenido
window.onclick = function(event) {
    const modal = document.getElementById("gameModal");
    if (event.target === modal) {
        closeGameModal();
    }
};