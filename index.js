document.addEventListener("DOMContentLoaded", function () {
    const correoInput = document.getElementById("correo");
    const unsubscribeBtn = document.getElementById("unsubscribeBtn");
    const mainContainer = document.getElementById("mainContainer");
    const successContainer = document.getElementById("successContainer");

    unsubscribeBtn.addEventListener("click", function () {
        cancelarNotificacion();
    });

    function cancelarNotificacion() {
        const correo = correoInput.value.trim();

        if (!correo) {
            alert("Por favor, ingrese un correo válido.");
            return;
        }

        fetch("https://api.crediplus.com.co/api/CorreoExcluidos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ correo })
        })
        .then(response => response.json())
        .then(data => {
            if (data.statusCode === 201) {
                mostrarMensajeExito();
            } else {
                alert("Error: " + (data.message || "Algo salió mal."));
            }
        })
        .catch(error => {
            alert("Error de red. Inténtelo nuevamente más tarde.");
        });
    }

    function mostrarMensajeExito() {
        mainContainer.classList.add("hidden"); // Ocultar la vista principal
        successContainer.classList.remove("hidden"); // Mostrar la tarjeta de éxito
    }
});
