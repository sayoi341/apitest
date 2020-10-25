$.ajax({
    url:"http://127.0.0.1:5000/hello",
    'Access-Control-Allow-Credentials' : true,
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'GET',
    'Access-Control-Allow-Headers':'application/json',
    }).done(function(data) {
        $('#head1').html(data.message);
    }).fail(function(){
        console.log("unchi");
    });