function sendToWhatsApp() {
    const phone = "5218713503367";
    const name = document.getElementById('wa-name').value;
    const info = document.getElementById('wa-info').value;

    // Si no puso nombre, le recordamos (como un validador de código)
    if (name === "") {
        alert("Por favor, dinos tu nombre para saludarte.");
        return;
    }

    const message = `Hola! Mi nombre es ${name}. Me interesa saber más sobre: ${info}.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
}