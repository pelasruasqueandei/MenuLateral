var ratio = 15;

function hideNavBar(){
    var i = 0;
    var navbarInitialPosition = 0;
    var navbarFinalPosition = -30;

    var hideInterval = setInterval(function(){
        navbarInitialPosition--;
        $("#menu").css("left",navbarInitialPosition+"%");
        if(navbarInitialPosition == navbarFinalPosition){
            clearInterval(hideInterval);
        }
    },ratio);
}

function showNavBar(){
    var i = 0;
    var navbarInitialPosition = -30;
    var navbarFinalPosition = 0;

    var showInterval = setInterval(function(){
        navbarInitialPosition++;
        $("#menu").css("left",navbarInitialPosition+"%");
        if(navbarInitialPosition == navbarFinalPosition){
            clearInterval(showInterval);
        }
    },ratio);
}

function addEventListeners(){
    // Adiciona função de mostrar ou esconder menu no click do botão
    var navtog = "#navbar-toggler";
    $(navtog).click(function(){
        var pos = $("#menu").css("left");
        if(pos != '0px'){
            showNavBar();
        }
        else{
            hideNavBar();
        }
        console.log("triggered click event on "+navtog);
    });

    $("ul").mouseenter(function(event){
        var id = "#"+event.currentTarget.id;
        console.log("triggered mouseover event on "+id);
    });
}

$("document").ready(function(){
    // Esconde o menu lateral
    hideNavBar();

    // Pega os pontos remotamente e carrega na div container de pontos.
    pegaPontosRemotos();

    // Ativa os listeners
    addEventListeners();
});