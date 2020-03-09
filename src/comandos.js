document.addEventListener("keydown", keypush)
// posiçao do player
var posicao = {
    ['x']: '0',
    ['y']: '0',
};
// direção para onde vai o tiro
var fire = 'x++'
// dirçao onde o player esta indo
var andar_pra = '';
// direçao one o player estava 
var estava = '';
function move() {
    estava = andar_pra;
    // converte a posiçao em uma informção que mostra a localização do player
    andar_pra = posicao.y + '-' + posicao.x
    $(table).find('th#' + andar_pra + '').addClass("player");
    $(table).find('th#' + estava + '').removeClass("player");
    // pegar o item
    getItem()
}

function keypush() {

    var tecla_press = event.keyCode;

    switch (tecla_press) {
        case 32: //space
            pawer();
                
            break;
        case 65: //left
            posicao.y--;
            fire = 'y--'
            if (posicao.y <= 0) {
                posicao.y = 1
            } else {
                move();
            }

            break;

        case 87: // up
            posicao.x--;
            fire = 'x--'
            if (posicao.x < 1) {
                posicao.x = 1
            } else {
                move();
            }


            break;

        case 68: // right
            posicao.y++;
            fire = 'y++';
            if (posicao.y > total_coluna) {
                posicao.y = total_coluna
            } else {
                move();
            }
            break;

        case 83: // down
            posicao.x++;
            fire = 'x++'
            if (posicao.x > total_linha) {
                posicao.x = total_linha
            } else {
                move();
            }
            break;


        case 65: //left
            posicao.y--;
            fire = 'y--';
            if (posicao.y <= 0) {
                posicao.y = 1
            } else {
                move();
            }
            break;

        case 38: // up
            posicao.x--;
            fire = 'x--';
            if (posicao.x < 1) {
                posicao.x = 1
            } else {
                move();
            }
            break;

        case 39: // right
            posicao.y++;
            fire = 'y++';
            if (posicao.y > total_coluna) {
                posicao.y = total_coluna
            } else {
                move();
            }
            break;

        case 40: // down
            posicao.x++;
            fire = 'x++';
            if (posicao.x > total_linha) {
                posicao.x = total_linha
            } else {
                move();
            }
            break;
        case 37: //left
            posicao.y--;
            fire = 'y--'
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

function pawer() {

    var save_fire = 0
    if (player.itens.length != 0) {
        for (let i = 0; i < player.itens.range; i++) {
            

            setInterval(function () {
                $(table).find('th#' + save_fire + '').removeClass("fire");
            }, 100);

            if (save_fire == 0) {
                save_fire = andar_pra;
            }

            // codenada do tiro
            var coder_fire = save_fire
            //trasnforma em um arrey
            coder_fire = coder_fire.split("-")


            switch (fire) {
                case 'y--':
                    coder_fire[0]--
                    break;

                case 'y++':
                    coder_fire[0]++
                    break;

                case 'x--':
                    coder_fire[1]--
                    break;

                case 'x++':
                    coder_fire[1]++
                    break;

                default:

                    break;
            }


            tiro();
        }
        function tiro() {
            coder_fire = coder_fire[0] + '-' + coder_fire[1]
            save_fire = coder_fire;

            $(table).find('th#' + coder_fire + '').addClass("fire");


        }
    }
}