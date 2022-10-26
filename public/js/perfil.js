// ------ SE SELECCIONAN TODOS LOS ELEMENTOS NECESARIOS PARA HACER EL SORTEO DE EL AMIGO SECRETO ------
const clickBtn = document.querySelector('.btn')
const aleatorio1 = document.querySelector('.aleatorio1')
// ------ AQUI ESTAMOS TRAYEDO LOS NOMBRES DE LAS PERSONAS QUE HAY EN LA BASE DE DATOS POR CADA ------
const nombres = document.querySelectorAll('.nombres')
// ------ AQUI ESTAMOS TRAYENDO EL NOMBRE DEL USUARIO EN CUESTION ------
const nombreUsuario = document.querySelector('.nombreUsuario')
const amigoSecreto = document.querySelector('.amigoSecreto')
// ------ EVENTO QUE SE DA EN EL MOMENTO QUE SE LE DA CLICK AL BOTON CON LA CLASE 'btn' ------
clickBtn.addEventListener('click', () => {
    console.log('hjoa');
    // ------ VARIABLE EN DONDE SE VA A GUARDAR EL RESULTADO FINAL DEL AMIGO SECRETO ------
    let resultado
    // ------ OPERACION PARA BUSCAR UN NOMRE ALEATORIO EN LA BASE DE DATOS ------
    const aleatorio1 = nombres[Math.floor(Math.random() * nombres.length)];
    // ------ CONDICION PARA POR SI EL RESULTADO DEL AMIGO SECRETO ES EL MISMO NOMBRE DEL USUARIO REGISTRADO ( SE HACE NUEVAMENTE EL SORTEO Y SE GUARDA EN LA VARIABLE RESULTADO) ------
    if (nombreUsuario.textContent.trim() == aleatorio1.textContent.trim()) {
        const aleatorio2 = nombres[Math.floor(Math.random() * nombres.length)];
        resultado = aleatorio2.textContent.trim()
    } // ------ CONDICION SECUNDARIA EN CASO DE QUE EL NOMBRE DEL AMIGO SECRETO NO SEA EL MISMO DEL USUARIO ( SE GUARDA DIRECTAMENTE EN LA VARIABLE RESULTADO ) ------
    else {
        resultado = aleatorio1.textContent.trim()
    }
    // ------ EN CASO DE QUE EN EL GRUPO HAYAN MUY POCOS PARTICIPANTES SE HACE ESTA VALIDACION PARA QUE SE LE DIGA A LA PERSONA QUE LO INTENTE DE NUEVO OPRIMIENDO EL BOTON EN DONDE NUEVAMENTE SE VA A SORTEAR EL AMIGO SECRETO ------
    if (resultado == nombreUsuario.textContent.trim()) {
        amigoSecreto.classList.add('text-danger')
        amigoSecreto.innerText = 'intentalo de nuevo'
    } else {
        amigoSecreto.classList.remove('text-danger')
        amigoSecreto.innerText = resultado
    }
})