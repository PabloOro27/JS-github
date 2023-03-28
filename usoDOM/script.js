const title = document.querySelector('h1');
//el querySelector nos sirve para seleccionar la etiqueeta 
//del HTML
//la seleccion del querySelector es igual a la de CSS 
//se utiliza (.) para Clases y (#) para ID 

const p = document.querySelector('p')
const parrafito = document.querySelector('.parrafito'); 
const pid = document.querySelector('#pid'); 
const input = document.querySelector('input');

console.log({
    title,
    p,
    parrafito,
    pid,
    input,
});

title.innerHTML = "Hola esto es una prueba"; 
//inner html sirver para modificar el html desde js 
title.innerText = 'esta es otra prueba'; 
//inner textr igua lmodifica el texto pero no puede generar etiquetas 


title.getAttribute('pantalla'); 
//el get Attribute nos trae los atributos que tengamos en el html

title.setAttribute('class', 'cambio1');
//el set Attribute sirve para modificar los atributos de las etiquetas

title.classList.add('cambio2'); 
//esta funcion sirve poara agregar una clase a la etiqueta HTML 

title.classList.remove('cambio1'); 
//esta funcion sirve para eliminar una clase de la etiqueta


input.value = 'numeros'; 
//esta funcion sirve para modificar el valor del value

document.createElement('img');
//esta funcion sirve para  generar etiquetas en HTML 