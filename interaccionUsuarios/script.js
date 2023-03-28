 const title = document.querySelector('h1')
 const input1 = document.querySelector('#calculo1')
 const input2 = document.querySelector('#calculo2')
 const btn = document.querySelector('#btnCalcular')
 const pResult = document.querySelector('#resultado')
 const form = document.querySelector('#form')

 function btnOnClick(event){ //para solucionar los problemas con los formularios se agrega el parametro de event 
    event.preventDefault(); // y se añade esta funcion para que solucionar el error de recarga
    let resultado = 0; 
    resultado = Number(input1.value)  + Number(input2.value); 
    pResult.innerHTML = 'El Resultado es: ' + resultado
}

form.addEventListener('submit', btnOnClick)