$(document).ready(function(){
    var debug = true;
    $(".progress").hide();
    var userAgent = "User-agent header sent: " + screen.height;
    $("#hidden").val(screen.height);
    if (debug) console.log(userAgent);
    $("form").submit(function(event){
        $(".progress").show();
      event.preventDefault();
        var x = $("form").serialize();
        var json = JSON.stringify($("form").serializeArray());
        if (debug) console.log(json);
        $.ajax({
                url: 'php/getData.php', // url where to submit the request
                type : "POST", // type of action POST || GET
                dataType : 'json', // data type
                data : json, // post data || get data
                success : function(result) {
                    // you can see the result from the console
                    // tab of the developer tools
                    if (debug) console.log(result);
                    if (result.error===0) $('form').trigger("reset");
                    else console.error("Ocurrió un error, codigo de error: "+result.error);
                    $(".progress").hide();
                },
                error: function(xhr, resp, text) {
                    console.log("Error en Ajax: "+text);
                    $(".progress").hide();
                }
            })       
        });       
    });