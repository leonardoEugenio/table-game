var total_coluna = 0;
var total_linha = 0;

function verifica_numero() {
    total_coluna = $('#input_colunas').val()
    total_linha = $('#input_linhas').val()
};
function gerar() {
    $('#table').empty();
    verifica_numero()
    var construtor = '';
    var x = 0;
    var y = 0;
    for (y = 0; y < total_linha;) {
        y++
        construtor += '<tr>'
        if (total_coluna != 0) {
            for (x = 0; x < total_coluna;) {
                x++
                construtor += '<th id=' + x + '-' + y + '>' + x + '</th>'
            }
        }
        construtor + '</tr>'
    }
    $('#table').append(construtor);
    console.log(construtor);
}