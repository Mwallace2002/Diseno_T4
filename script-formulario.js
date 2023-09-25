document.addEventListener('DOMContentLoaded', function () {
    var formulario = document.getElementById('formulario');
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var mail = document.getElementById('mail');
    var asunto = document.getElementById('asunto');

    function mostrarFrase() {
        var frase = "Gracias por contactarnos" + ' ' + nombre.value + ' ' + apellido.value + ' ' + "te llegara un mail a" + ' ' + mail.value + ' ' + "sobre" + ' ' + asunto.value;
        document.getElementById('fraseMostrada').innerHTML = frase;
    }

    formulario.addEventListener('submit', function (e) {
        e.preventDefault(); 
        mostrarFrase(); 
    });
});
