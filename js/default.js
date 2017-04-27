var ratio = 16;
var navShown = false;

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
    navShown = false;
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
    navShown = true;
}

function changepage(newpage){
    if(newpage == "pontos"){
        $("#main-container").html("<div class=\"col-md-4\" id=\"pontos-container\"></div>");
        pegaPontosRemotos();
    }
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

    // Adiciona evento de click no menu item
    $(".menu-item").click(function(event){
        var item = event.currentTarget.id;
        changepage(item);
    });
}

window.onpageshow = function(){
    // Esconde o menu lateral
    hideNavBar();

    // Ativa os listeners
    addEventListeners();

    // Carrega os pontos turisticos na inicialização.
    $("#pontos").click();
}