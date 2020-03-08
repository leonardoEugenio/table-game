document.addEventListener("keydown", keypush)
var posicao = {
    ['x']: '0',
    ['y']: '0',
};
var andar_pra = '';
var estava = '';
function move() {
    estava = andar_pra;
    // converte a posiçao em uma informção que mostra a localização do player
    andar_pra = posicao.y + '-' + posicao.x
    $(table).find('th#' + andar_pra + '').addClass("player");s
    $(table).find('th#' + estava + '').removeClass("player");
    // pegar o item
    getItem()
}

function keypush() {

    var tecla_press = event.keyCode;
    switch (tecla_press) {
        case 65: //left
            posicao.y--;
            if (posicao.y <= 0) {
                posicao.y = 1
            } else {
                move();
            }

            break;

        case 87: // up
            posicao.x--;
            if (posicao.x < 1) {
                posicao.x = 1
            } else {
                move();
            }


            break;

        case 68: // right
            posicao.y++;
            if (posicao.y > total_coluna) {
                posicao.y = total_coluna
            } else {
                move();
            }
            break;

        case 83: // down
            posicao.x++;
            if (posicao.x > total_linha) {
                posicao.x = total_linha
            } else {
                move();
            }
            break;


        case 65: //left
            posicao.y--;
            if (posicao.y <= 0) {
                posicao.y = 1
            } else {
                move();
            }
            break;

        case 38: // up
            posicao.x -- ;
            if (posicao.x < 1) {
                posicao.x = 1
            } else {
                move();
            }
            break;

        case 39: // right
            posicao.y++;
            if (posicao.y > total_coluna) {
                posicao.y = total_coluna
            } else {
                move();
            }
            break;

        case 40: // down
            posicao.x++;
            if (posicao.x > total_linha) {
                posicao.x = total_linha
            } else {
                move();
            }
            break;
        case 37: //left
            posicao.y--;
            if (posicao.y <= 0) {
                posicao.y = 1
            } else {
                move();
            }
            break;
        default:

            break;
    }
}
