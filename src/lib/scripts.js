// Função para preencher com zeros à esquerda até atingir o tamanho desejado
function pad(num, size) {
    var paddedNum = num + "";
    while (paddedNum.length < size) {
        paddedNum = "0" + paddedNum;
    }
    return paddedNum;
}

// Aguarda o documento estar completamente carregado antes de executar o código jQuery
jQuery(document).ready(function($) {
    // Adiciona um evento de teclado ao corpo da página
    $("body").on('keydown', function(e) {
        // Variáveis para elementos do DOM
        var senhaAtual = $("#senhaAtualNumero");
        var senhaNormal = $("#senhaNormal");
        var senhaPrioridade = $("#senhaPrioridade");
        var ultimaSenha = $("#ultimaSenhaNumero");
        var audioChamada = $("#audioChamada");

        console.log('e.keyCode')
        console.log(e.keyCode)
        console.log(e.keyCode)

        // Ações correspondentes a diferentes teclas pressionadas
        if (e.keyCode == 102 ||e.keyCode == 39 || e.keyCode == 34) { // Tecla para a direita
            ultimaSenha.html(senhaAtual.html());
            var senha = parseInt(senhaNormal.val()) + 1;
            senhaAtual.html(pad(senha, 4));
            senhaNormal.val(pad(senha, 4));
            audioChamada.trigger("play");
        }

        if (e.keyCode == 100 ||e.keyCode == 37 || e.keyCode == 33) { // Tecla para a esquerda
            ultimaSenha.html(senhaAtual.html());
            var senha = parseInt(senhaNormal.val()) - 1;
            senhaAtual.html(pad(senha, 4));
            senhaNormal.val(pad(senha, 4));
            audioChamada.trigger("play");
        }
        if (e.keyCode == 104 || e.keyCode == 38 || e.keyCode == 66) { // Tecla seta para cima
            ultimaSenha.html(senhaAtual.html());
            var senha = parseInt(senhaPrioridade.val().replace("P", "")) + 1;
            senhaAtual.html("P" + pad(senha, 3));
            senhaPrioridade.val("P" + pad(senha, 3));
            audioChamada.trigger("play");
        }
        if (e.keyCode == 98 || e.keyCode == 40 || e.keyCode == 27) { // Tecla seta para baixo
            ultimaSenha.html(senhaAtual.html());
            var senha = parseInt(senhaPrioridade.val().replace("P", "")) - 1;
            senhaAtual.html("P" + pad(senha, 3));
            senhaPrioridade.val("P" + pad(senha, 3));
            audioChamada.trigger("play");
        }
    });
});
