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
                url: 'https://itunes.apple.com/search?term=iron+maiden', // url where to submit the request
                dataType : 'jsonp', // data type
                success : function(result) {
                    // you can see the result from the console
                    // tab of the developer tools
                    if (debug) console.log(result.results);
                    var groupedData = _.groupBy(result.results, function(d){return d.collectionName});
                    console.log(groupedData);
                    $.each(groupedData, function() {                         
                    console.log(this[0].collectionName);                                    
                    })              
                    $(".progress").hide();
                },
                error: function(xhr, resp, text) {
                    console.log("Error en Ajax: "+text);
                    $(".progress").hide();
                }
            })       
        });       
    });