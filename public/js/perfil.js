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
    // ------ VARIABLE EN DONDE SE VA A GUARDAR EL RESULTADO FINAL DEL AMIGO SECRETO ------
    // ------ OPERACION PARA BUSCAR UN NOMRE ALEATORIO EN LA BASE DE DATOS ------
    const aleatorio1 = nombres[Math.floor(Math.random() * nombres.length)];
    console.log(aleatorio1);
    // ------ CONDICION PARA POR SI EL RESULTADO DEL AMIGO SECRETO ES EL MISMO NOMBRE DEL USUARIO REGISTRADO ( SE HACE NUEVAMENTE EL SORTEO Y SE GUARDA EN LA VARIABLE RESULTADO) ------
    amigoSecreto.classList.add('active')
    input.classList.add('active')
    input.classList.remove('inputForm')
    amigoSecreto.innerText = aleatorio1.textContent.trim()
    clickBtn.classList.remove('btn')
    clickBtn.classList.add('btnOcultar')
    pregunta.classList.add('btnOcultar')
    mensaje.classList.remove('btnOcultar')
    mensaje.classList.add('resaltado')
    mensaje2.classList.remove('btnOcultar')
    mensaje2.classList.add('resaltado2')
    form.innerHTML += `
    
    <input type="text" hidden name="amigoSecreto" value=${aleatorio1.textContent}>
    
    `

})