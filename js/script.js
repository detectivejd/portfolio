/*
const nombre = prompt("Cómo te llamas?");

alert("Hola " + nombre + "! Bienvenido a mi portfolio!");
*/
document.addEventListener("DOMContentLoaded", function () {
    // Función para mostrar el modal con el contenido adecuado
    function mostrarModal(id) {
        const modal = document.getElementById('popup');
        const modalTitle = document.getElementById('popupTitle');
        const modalImage = document.getElementById('popupImage');
        const modalText = document.getElementById('popupText');
        const closeModal = document.getElementById('closePopup');

        // Encontrar la tarjeta correspondiente usando el id
        const tarjeta = document.getElementById(id).closest('.tarjeta');

        // Extraer la información de la tarjeta
        const title = tarjeta.querySelector('h3').textContent;
        const imageSrc = tarjeta.querySelector('img').src;
        const text = tarjeta.querySelector('p').textContent;

        // Establecer los valores en el modal
        modalTitle.textContent = title;
        modalImage.src = imageSrc;
        modalText.textContent = text;

        // Mostrar el modal
        modal.style.display = 'flex';

        // Cerrar el modal
        closeModal.addEventListener('click', function () {
            modal.style.display = 'none';
        });

        // Cerrar el modal si se hace clic fuera de él
        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Asociar el evento a cada botón de "Leer más"
    document.getElementById('leerMas1').addEventListener('click', function() {
        mostrarModal('leerMas1');
    });

    document.getElementById('leerMas2').addEventListener('click', function() {
        mostrarModal('leerMas2');
    });

    document.getElementById('leerMas3').addEventListener('click', function() {
        mostrarModal('leerMas3');
    });

    document.getElementById('leerMas4').addEventListener('click', function() {
        mostrarModal('leerMas4');
    });

    document.getElementById('leerMas5').addEventListener('click', function() {
        mostrarModal('leerMas5');
    });

    document.getElementById('leerMas6').addEventListener('click', function() {
        mostrarModal('leerMas6');
    });

    document.getElementById('leerMas7').addEventListener('click', function() {
        mostrarModal('leerMas7');
    });
});