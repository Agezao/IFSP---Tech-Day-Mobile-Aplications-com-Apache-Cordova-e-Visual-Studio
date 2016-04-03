
function GetVisitantes() {
    $("#visitantes").html("");
    ajaxHelper.ApiGet("/visitor", undefined, function (visitantes) {
        $.each(visitantes, function (i, visitante) {
            RenderVisitante(visitante);
        });
    });
}

function RenderVisitante(visitante) {
    var div = document.createElement("div");
    $(div).attr("class", "visitante");
    $(div).attr("id", visitante._id);
    $(div).html(visitante.name);

    $("#visitantes").append(div);
}
function AddVisitante() {
    var visitante = $("#nomeVisitante").val();
    $("#nomeVisitante").val("");

    ajaxHelper.ApiPost("/visitor", { name: visitante }, function () {
        GetVisitantes();
    });
}

$(document).ready(function () {
    GetVisitantes();
    $("#btnAdicionarVisitante").click(function () {
        AddVisitante();
    });
});