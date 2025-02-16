document.addEventListener("DOMContentLoaded", function () {
    const correoInput = document.getElementById("correo");
    const unsubscribeBtn = document.getElementById("unsubscribeBtn");
    const mainContainer = document.getElementById("mainContainer");
    const successContainer = document.getElementById("successContainer");

    // Inicialmente el botón debe estar deshabilitado
    unsubscribeBtn.disabled = true;

    // Función para habilitar el botón después de resolver el captcha
    grecaptcha.enterprise.ready(async () => {
        try {
            const token = await grecaptcha.enterprise.execute('6Le53dgqAAAAAMNq3INjmB-rjCg60_c_eeo6DCDF', { action: 'unsubscribe' });
            if (token) {
                unsubscribeBtn.disabled = false; // Habilitar el botón solo si se obtiene un token válido
            }
        } catch (error) {
            console.error("Error obteniendo el token de reCAPTCHA:", error);
        }
    });

    unsubscribeBtn.addEventListener("click", async function (e) {
        e.preventDefault();
        await cancelarNotificacion();
    });

    grecaptcha.enterprise.ready(async () => {
        try {
            const token = await grecaptcha.enterprise.execute('6Le53dgqAAAAAMNq3INjmB-rjCg60_c_eeo6DCDF', { action: 'unsubscribe' });
            if (token) {
                unsubscribeBtn.disabled = false; // Habilitar el botón solo si se obtiene un token válido
            }
        } catch (error) {
            console.error("Error obteniendo el token de reCAPTCHA:", error);
        }
    });

    unsubscribeBtn.addEventListener("click", async function (e) {
        e.preventDefault();
        await cancelarNotificacion();
    });
});
