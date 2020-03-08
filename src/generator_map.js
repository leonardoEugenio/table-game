var total_coluna = 0;
var total_linha = 0;
var mensagem = ''

function verifica_numero() {
    total_coluna = $('#input_colunas').val()
    total_linha = $('#input_linhas').val()
    if (total_coluna > 60) {
        mensagem += ' -/- O numero maximo de colunas é de 60'
    }
    if (total_linha > 40) {
        mensagem +=  ' -/- O numero maximo de linhas é 40';
    }
    
};
function gerar() {
    posicao = {['x'] : '1', ['y']:'1'} 
    verifica_numero();
    $('#table').empty();
    $('#mensagem').empty();
    if (mensagem == '') {
        $('#form').empty();
        var construtor = '';
        var x = 0;
        var y = 0;
        for (y = 0; y < total_linha;) {
            y++
            construtor += '<tr>'
            if (total_coluna != 0) {
                for (x = 0; x < total_coluna;) {
                    x++
                    construtor += '<th id=' + x + '-' + y + '> </th>'
                }
            }
            construtor + '</tr>'
        }
        $('#table').append(construtor);
        spawn_itens();
    }else{
        $('#mensagem').append(mensagem);
        mensagem = '';
    }
}