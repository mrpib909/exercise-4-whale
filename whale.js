jQuery(document).ready(function($){
    function update(){
   var num = parseInt(location.hash.substr(1));
    
    if(isNaN(num)){
     num = 0;   
    }
    console.log(num);
    $.get('/whale/txt/' + num + '.txt' , function(txt){
    $('a').html(txt);
        $('a').attr('href','#'+(num + 1));
   });
    }
    update();
    window.addEventListener('hashchange', update ,false);
});