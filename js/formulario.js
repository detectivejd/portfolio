document.addEventListener('DOMContentLoaded', function() {
    // Obtener el formulario por su ID
    const formulario = document.getElementById('formularioContacto');

    // Expresiones regulares para validar teléfono y celular
    const telefonoPattern = /^(\+598[\s\-]?)?(\(?\d{1,3}\)?[\s\-]?)\d{1,4}[\s\-]?\d{1,4}$/;
    const celularPattern = /^(\+598[\s\-]?)?(09[1-9])[\s\-]?\d{3}[\s\-]?\d{3}$/;

    // Expresión regular para validar solo letras y espacios (nombre y apellido)
    const soloLetras = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

    // Obtener el campo de fecha
    const fechaInput = document.getElementById('fecha');
    
    // Asignar la fecha del sistema al campo de fecha
    const fechaActual = new Date();
    const anio = fechaActual.getFullYear();
    const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // Asegurar que el mes tenga dos dígitos
    const dia = fechaActual.getDate().toString().padStart(2, '0'); // Asegurar que el día tenga dos dígitos
    
    const fechaFormateada = `${anio}-${mes}-${dia}`;
    fechaInput.value = fechaFormateada;

    // Añadir un event listener para el evento submit
    formulario.addEventListener('submit', function(event) {
        // Obtener los valores de los campos
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const telefono = document.getElementById('telefono').value;
        const celular = document.getElementById('celular').value;

        // Validar el campo nombre
        if (!soloLetras.test(nombre)) {
            alert("El nombre solo debe contener letras y espacios.");
            event.preventDefault();
            return;
        }

        // Validar el campo apellido
        if (!soloLetras.test(apellido)) {
            alert("El apellido solo debe contener letras y espacios.");
            event.preventDefault();
            return;
        }

        // Validar el campo teléfono
        if (telefono && !telefonoPattern.test(telefono)) {
            alert("El teléfono no es válido. Ejemplo: 23123456, +598 2312 3456, 2312-3456");
            event.preventDefault();
            return;
        }

        // Validar el campo celular
        if (celular && !celularPattern.test(celular)) {
            alert("El celular no es válido. Ejemplo: 091234567, +598 091 234 567, 091-234-567");
            event.preventDefault();
            return;
        }

        // Si todo está bien, el formulario se enviará
        // No es necesario ningún código adicional aquí
    });
});