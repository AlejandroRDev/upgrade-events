//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un console log con la información del evento del click
const button$$ = document.createElement('button');
button$$.id = 'btnToClick';
button$$.innerHTML = 'boton';
document.body.appendChild(button$$);

button$$.addEventListener('click', console.log(Event))

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const focusEvent = document.querySelector('.focus');
focusEvent.addEventListener('focus', function(){
    console.log(focusEvent.value);
});

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const inputEvent = document.querySelector('.value');
inputEvent.addEventListener('input', function(){
    console.log(inputEvent.value);
});
