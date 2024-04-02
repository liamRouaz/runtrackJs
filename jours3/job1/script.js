//$ pour appelre les document du dom
$(document).ready(function(){
    //bouton pour afficher le text et attacher un gestionaire d'événement
    $("#showText").click(function(){
        //aparaître le text en appelant l'id 
        $("#citation").show();
    });

    //bouton pour cacher le text et attacher un gestionaire d'événement
    //mettre un # pour appeler l'id
    $("#hideText").click(function(){
        //cachez le text
        $("#citation").hide();
    });
});
