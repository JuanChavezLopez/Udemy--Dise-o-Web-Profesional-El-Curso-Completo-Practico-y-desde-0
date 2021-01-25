// 1ra forma de modificar

// var cajas = document.getElementsByTagName('div');

// cajas[1].innerHTML = '<h1>Hola</h1>';


// 2da forma de modificar

var cajas = document.getElementsByClassName('caja');
// console.log(cajas);



// 3ra modificar con su id

// var cajas = document.getElementById('primeracaja');
// cajas.textContent ='Hola mundo';
// cajas.innerHTML = '<u>Hola mundo</u>';
// console.log(cajas);


//! ------ CREANDO NODOS ----

var caja = document.createElement('div');
var contenido = document.createTextNode('Hola juan');

caja.appendChild(contenido);
caja.setAttribute('class', 'naranja caja');


// var contenedor = document.getElementById('contenedor');
// contenedor.appendChild(caja);


// !-----MODIFICAR LA CLASE O ID DE UN ELEMENTO-----

caja.id = 'primera';
caja.className = 'caja naranja';

// !----INSERTAR CAJA EN POSICION ESPECIFICA------

var padre = cajas[0].parentNode;
// padre.insertBefore(caja, cajas[2]);
// padre.insertBefore(caja, primeracaja);


padre.replaceChild(caja, cajas[3]);


// !------REMOVE ELEMENTO Child  ---------
padre.removeChild(cajas[0]);
