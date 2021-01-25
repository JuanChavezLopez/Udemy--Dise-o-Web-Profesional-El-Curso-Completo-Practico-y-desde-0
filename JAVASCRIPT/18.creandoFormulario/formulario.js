(function(){
    var formulario = document.getElementById('formulario'),
        nombre = formulario.nombre,
        correo = formulario.correo,
        sexo = formulario.sexo,
        terminos = formulario.terminos,
        error = document.getElementById('error');

        function validarNombre(e){
            if(nombre.value == '' || nombre.value == null){
                console.log("Por favor, completa el nombre.");
                error.style.display ='block';
                // error.innerHTML = error.innerHTML+ '<li>Por favor completa el nombre.</li>'
                error.innerHTML +=  '<li>Por favor completa el nombre.</li>'
                e.preventDefault();
            }else{
                error.style.display ='none';
            }
        }

        function validarCorreo(e){
            // condition
            if(correo.value == '' || correo.value == null){
                console.log("Por favor, completa el correo.");
                error.style.display ='block';
                // error.innerHTML = error.innerHTML+ '<li>Por favor completa el nombre.</li>'
                error.innerHTML +=  '<li>Por favor completa el correo.</li>'
                e.preventDefault();
            }else{
                error.style.display ='none';
            }
        }

        function validarSexo(e){
            // condition
            if(sexo.value == '' || sexo.value == null){
                console.log("Por favor, completa el sexo.");
                error.style.display ='block';
                // error.innerHTML = error.innerHTML+ '<li>Por favor completa el nombre.</li>'
                error.innerHTML +=  '<li>Por favor completa el sexo.</li>'
                e.preventDefault();
            }else{
                error.style.display ='none';
            }
        }

        function validarTerminos(e){
            // condition
            if(terminos.checked == false){
                console.log("Por favor, acepta los terminos");
                error.style.display ='block';
                // error.innerHTML = error.innerHTML+ '<li>Por favor completa el nombre.</li>'
                error.innerHTML +=  '<li>Por favor, acepta los terminos.</li>'
                e.preventDefault();
            }else{
                error.style.display ='none';
            }
        }

        function validarFormulario(e){  /* call all functions */
            error.innerHTML =''; /* vaciamos el mensaje de error */
            validarCorreo(e);
            validarNombre(e);
            validarSexo(e);
            validarTerminos(e);
        }


        formulario.addEventListener('submit', validarFormulario);

    


}())