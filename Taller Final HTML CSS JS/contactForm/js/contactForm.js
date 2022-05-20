const validar = () => {

    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const asunto = document.getElementById("asunto");
    const mensaje = document.getElementById("mensaje");
    const enviar = document.getElementById("enviar");
    const formulario = document.getElementById("formulario");

    const nombreexp = /^[a-zA-ZÀ-ÿ\s]{1,30}$/;
    const asuntoexp = /^[a-zA-ZÀ-ÿ\s]{1,20}$/;
    const correoexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;


    formulario.addEventListener("submit", e => {
        e.preventDefault();

        if (nombre.value.length == 0 && correo.value.length == 0 && asunto.value.length == 0 && mensaje.value.length == 0) {
            document.getElementById("aviso").innerHTML = "Los datos están en blanco, por favor, complétalos";
            formulario.reset();

        } else if (nombre.value.length == 0) {

            document.getElementById("aviso").innerHTML = "No olvides colocar tu nombre";
            nombre.focus();
        } else if (asunto.value.length == 0) {

            document.getElementById("aviso").innerHTML = "No has indicado el asunto";
            asunto.focus();
        } else if (correo.value.length == 0) {

            document.getElementById("aviso").innerHTML = "No olvides colocar el correo";
            correo.focus();
        } else if (mensaje.value.length == 0) {

            document.getElementById("aviso").innerHTML = "No olvides colocar el mensaje";
            mensaje.focus();
        } else if (!nombreexp.test(nombre.value)) {
            document.getElementById("aviso").innerHTML = "No olvides colocar tu nombre";

        } else if (!asuntoexp.test(asunto.value)) {
            document.getElementById("aviso").innerHTML = "No olvides colocar el asunto";
        } else if (!correoexp.test(correo.value)) {
            document.getElementById("aviso").innerHTML = "Tu correo electrónico no se ve bien, por favor, revísalo";
        } else {

            document.getElementById("aviso").style.color = "green";
            document.getElementById("aviso").innerHTML = "¡Tu mensaje ha sido envíado!";
            mostrarDatos();
            formulario.reset();
        }
    });
}



const mostrarDatos = () => {
    console.log("Nombre:", nombre.value);
    console.log("Correo:", correo.value);
    console.log("Asunto:", asunto.value);
    console.log("Mensaje:", mensaje.value);
}