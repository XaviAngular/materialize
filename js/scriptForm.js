$(document).ready(function() {
    var debug=false;
    $('select').material_select();
    $("#addEmpresa").submit(function(event){
      event.preventDefault();//Evita el refresh automático que se produce al enviar el form
      if (debug) console.log("Se va a enviar el form");//se muestra por consola este mensaje para verificar que se produce el evento de submit.

      //esta es la forma de obtener los datos de un formulario en formato serializado de texto, cada elemento de formulario está separado por el símbolo "&"
      var serializado = $("#addEmpresa").serialize();
      if (debug) console.log("Formulario serializado:"+serializado);
      
      //esta es la forma para obtener la información del formulario y almacenarlo en una variable de tipo array.
      var serializadoArray=$("#addEmpresa").serializeArray();
      if (debug) console.log("Formulario serializado en array:");
      if (debug) console.log(serializadoArray);

      //esta es la forma de obtener datos del formulario y 
      //convertirlo en formato JSON
      var jsonData= JSON.stringify($("#addEmpresa").serializeArray());
      if (debug) console.log("Datos en Json:");
      if (debug) console.log(jsonData);
      $.ajax({
        url: 'php/recibeJson.php',
        type: 'POST',
        dataType: 'json',
        data: jsonData,
        success : function(result){
          console.log(result.sql);
          
        },
        error: function(result){
          alert("errorrrrrr!!!");
        }
      })
      

    });    
});     