function criaUmPonto(ponto){
    var div = "<div id=\"painel"+ponto.id+"\" class=\"panel\">";
    div += "<div class=\"panel-body center-block\">";
    div += "<h4>Nome: <b>"+ponto.nome+"</b></h4>";
    div += "<h5>Endereço: "+ponto.endereco+"</h5>";
    div += "<h5>Bairro: "+ponto.bairro+"</h5>";
    var foto = ponto.foto.replace('\\','');
    div += "<img src=\"data:image/jpeg;base64,"+foto+"\" class=\"panel-background\"/>";
    div += "</div></div>";
    $("#pontos-container").append(div);
}

function pegaPontosRemotos(){
    var url = "http://www.compliancesoftware.com.br/console/getPontos?ret=json";
    // var url = "http://localhost:8080/console/getPontos?ret=json";
    $.ajax({
        url: url,
        dataType: "json",
        type: "GET",
        success: function(response){
            var lista = response.list.PontoTuristico;
            for(var i = 0;i < lista.length;i++){
                criaUmPonto(lista[i]);
            }
        }
    });
}