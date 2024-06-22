// Ocultar Imagen
$(document).ready(function() {
    $('#ocultar-imagen').click(function() {
        $('#imagen').hide();
        $(document).prop('title', '¡No tenemos ninguna imagen! ');
    });
});

// Mostrar Imagen
$(document).ready(function() {
    $('#mostrar-imagen').click(function() {
        $('#imagen').show();
        $(document).prop('title', '¡Mirá la siguiente imagen!');
    });
});