document.addEventListener("keydown", keypush)
var posicao = {
    ['x'] : '0',
    ['y'] : '0',
};
var andar_pra = '';
var estava    = '';
function move() {
    estava = andar_pra;
    // converte a posiçao em uma informção que mostra a localização do player
    andar_pra = posicao.y +'-'+ posicao.x
    $(table).find('th#' + andar_pra + '').addClass("player");
    $(table).find('th#' + estava + '').removeClass("player");
    
}
function keypush() {

    var tecla_press = event.keyCode;
    console.log(tecla_press);
    switch (tecla_press) {
        case  65: //left
            posicao.y --;
            move();
            break;

        case  87: // up
            posicao.x --;
            move();
            break;

        case  68 : // right
            posicao.y ++;
            move();
            break;

        case  83: // down
            posicao.x ++;
            move();
            break;
            
        default:

            break;
    }
}
