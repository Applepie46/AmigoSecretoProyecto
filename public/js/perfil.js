// ------ SE SELECCIONAN TODOS LOS ELEMENTOS NECESARIOS PARA HACER EL SORTEO DE EL AMIGO SECRETO ------
const clickBtn = document.querySelector('.button')
const aleatorio1 = document.querySelector('.aleatorio1')
const form = document.querySelector('.form')
// ------ AQUI ESTAMOS TRAYEDO LOS NOMBRES DE LAS PERSONAS QUE HAY EN LA BASE DE DATOS POR CADA ------
const nombres = document.querySelectorAll('.nombres')
// ------ AQUI ESTAMOS TRAYENDO EL NOMBRE DEL USUARIO EN CUESTION ------
const nombreUsuario = document.querySelector('.nombreUsuario')
const amigoSecreto = document.querySelector('.amigoSecreto')
const input = document.querySelector('.inputForm')
const mensaje = document.querySelector('.mensaje')
const pregunta = document.querySelector('.pregunta')
const mensaje2 = document.querySelector('.mensaje2')
// ------ EVENTO QUE SE DA EN EL MOMENTO QUE SE LE DA CLICK AL BOTON CON LA CLASE 'btn' ------
clickBtn.addEventListener('click', () => {
    // ------ OPERACION PARA BUSCAR UN NOMRE ALEATORIO EN LA BASE DE DATOS ------
    const aleatorio = nombres[Math.floor(Math.random() * nombres.length)];
    console.log(aleatorio);
    // ------ SE CAMBIAN LAS CLASES PARA QUE TODO SE VEA DE FORMA DIMANICA APARECIENDO Y DESAPARECIENDO PARA QUE TODO SE VEA MAS LIMPIO Y ORDENADO ------
    amigoSecreto.classList.add('active')
    input.classList.add('active')
    input.classList.remove('inputForm')
    amigoSecreto.innerText = aleatorio.textContent.trim()
    clickBtn.classList.remove('btn')
    clickBtn.classList.add('btnOcultar')
    pregunta.classList.add('btnOcultar')
    mensaje.classList.remove('btnOcultar')
    mensaje.classList.add('resaltado')
    mensaje2.classList.remove('btnOcultar')
    mensaje2.classList.add('resaltado2')
    // ------ SE LE AGREGA AL FORMULARIO EL INPUT CON EL VALOR DEL NOMBRE DEL AMIGO SECRETO QUE VIENE EN LA PRIMERA PALABRA DEL TEXTO DE LA OPERACION DE ALEATORIO ------
    form.innerHTML += `
    
    <input type="text" hidden name="amigoSecreto" value=${aleatorio.textContent}>
    
    `

})