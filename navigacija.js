$('document').ready(function(){
    $('#myLinks a').first().css('color', '#42748f');
    
    /*podesavanje navigacije prilikom skrolovanja*/
    
    $(window).scroll(function(){
//        var visina = 250;
        var visina = $('main').height();
        var odVrha = $(window).scrollTop(); 
    
        if (odVrha >= visina) {
            $('main').addClass();
        
        }else {
            $('main').removeClass();
        }
    });
});

    