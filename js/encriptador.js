//----------- Selección de Elementos ----------//
const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".encriptador-textarea");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta-contenedor");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");

//------------ Botón de Encriptar ------------//
btnEncriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if (texto == "") {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe de estar vacío";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    } else if (texto !== txt) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    } else if (texto !== texto.toLowerCase()) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minúsculas";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    } else {
        texto = texto.replace(/e/g, "enter");
        texto = texto.replace(/i/g, "imes");
        texto = texto.replace(/a/g, "ai");
        texto = texto.replace(/o/g, "ober");
        texto = texto.replace(/u/g, "ufat");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "visible";
        contenido.remove();
    }
});

//------------ Botón de Desencriptar ------------//
btnDesencriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if (texto == "") {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe de estar vacío";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    } else if (texto !== txt) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    } else if (texto !== texto.toLowerCase()) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minúsculas";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    } else {
        texto = texto.replace(/enter/g, "e");
        texto = texto.replace(/imes/g, "i");
        texto = texto.replace(/ai/g, "a");
        texto = texto.replace(/ober/g, "o");
        texto = texto.replace(/ufat/g, "u");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "visible";
        contenido.remove();
    }
});

//------------ Botón de Copiar ------------//
btnCopiar.addEventListener("click", (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(respuesta.innerText)
        .then(() => {
            console.log('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar texto: ', err);
        });
});
