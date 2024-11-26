// Validación del formulario de contacto
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío inmediato del formulario

    // Obtener los valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const motivo = document.getElementById("motivo").value.trim();
    const email = document.getElementById("email").value.trim();

    // Validar los campos
    if (nombre === "" || motivo === "" || email === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Validación básica del correo electrónico
    if (!email.includes("@") || !email.includes(".")) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }

    // Si todo está correcto, muestra un mensaje de éxito
    alert("Formulario enviado con éxito. ¡Gracias por contactarme!");
    // Restablecer el formulario
    document.getElementById("contactForm").reset();
});
