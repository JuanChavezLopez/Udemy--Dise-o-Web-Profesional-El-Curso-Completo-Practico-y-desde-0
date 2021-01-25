


function suma(){

    /* los datos obtenidos son de tipo text, tenemos que convertirlos a flotantes */
    var numero1 =parseFloat(document.getElementById('numero1').value);
    var numero2 =parseFloat(document.getElementById('numero1').value);


    var resultado = numero1+numero2;


    /* asignamos el valor de la suma a resultado */
    document.getElementById('resultado').value = resultado;
}