// ------ SE SELECCIONAN TODOS LOS ELEMENTOS NECESARIOS PARA HACER EL SORTEO DE EL AMIGO SECRETO ------
const clickBtn = document.querySelector('.btn')
const aleatorio1 = document.querySelector('.aleatorio1')
const form = document.querySelector('.form')
const nombre = document.querySelector('.nombre')
// ------ AQUI ESTAMOS TRAYEDO LOS NOMBRES DE LAS PERSONAS QUE HAY EN LA BASE DE DATOS POR CADA ------
const nombres = document.querySelectorAll('.nombres')
// ------ AQUI ESTAMOS TRAYENDO EL NOMBRE DEL USUARIO EN CUESTION ------
const nombreUsuario = document.querySelector('.nombreUsuario')
const amigoSecreto = document.querySelector('.amigoSecreto')
const input = document.querySelector('.inputForm')
// ------ EVENTO QUE SE DA EN EL MOMENTO QUE SE LE DA CLICK AL BOTON CON LA CLASE 'btn' ------
clickBtn.addEventListener('click', () => {
    // ------ VARIABLE EN DONDE SE VA A GUARDAR EL RESULTADO FINAL DEL AMIGO SECRETO ------
    let resultado
    // ------ OPERACION PARA BUSCAR UN NOMRE ALEATORIO EN LA BASE DE DATOS ------
    const aleatorio1 = nombres[Math.floor(Math.random() * nombres.length)];
    // ------ CONDICION PARA POR SI EL RESULTADO DEL AMIGO SECRETO ES EL MISMO NOMBRE DEL USUARIO REGISTRADO ( SE HACE NUEVAMENTE EL SORTEO Y SE GUARDA EN LA VARIABLE RESULTADO) ------
    resultado = aleatorio1.textContent.trim()
    amigoSecreto.classList.add('active')
    console.log(input);
    input.classList.add('active')
    input.classList.remove('inputForm')
    amigoSecreto.innerText = resultado
    clickBtn.classList.remove('btn')
    clickBtn.classList.add('btnOcultar')
    form.innerHTML += `
    
    <input type="text" name="amigoSecreto" value=${nombre.textContent.trim()}>
    
    `

})