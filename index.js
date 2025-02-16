document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("correo");
    const unsubscribeBtn = document.getElementById("unsubscribeBtn");
    const messageBox = document.getElementById("responseMessage");

    unsubscribeBtn.addEventListener("click", function () {
        unsubscribe();
    });

    function unsubscribe() {
        const correo = emailInput.value.trim();

        if (!correo) {
            showMessage("Please enter a valid email.", "error");
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
            if (data.success) {
                showMessage("You have been unsubscribed successfully.", "success");
            } else {
                showMessage("Error: " + (data.message || "Something went wrong."), "error");
            }
        })
        .catch(error => {
            showMessage("Network error. Please try again later.", "error");
        });
    }

    function showMessage(message, type) {
        messageBox.textContent = message;
        messageBox.className = "message " + type;
        messageBox.style.display = "block";
    }
});
