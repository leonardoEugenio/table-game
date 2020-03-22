document.addEventListener("keydown", keypush);

// direçao one o player estava 
var estava = {};

function keypush() {

    var tecla_press = event.keyCode;

    // direção para onde vai o tiro
    var fire_direcao = {
        'cod': {
            'x': player.posicao.x,
            'y': player.posicao.y,
            'toback': '',
        },
        'move': '',
        'save': ''
    };

    const commands = {





        32(posicao) {//fire / space
            var save_fire = ''
            const fire_array = {
                up() {

                    fire_direcao.move = -1;
                    fire_direcao.l = 'y'
                },
                left() {

                    fire_direcao.move = -1;
                    fire_direcao.l = 'x'
                },
                down() {

                    fire_direcao.move = 1;
                    fire_direcao.l = 'y'
                },
                right() {

                    fire_direcao.move = 1
                    fire_direcao.l = 'x'
                }

            }
            var make_fire = fire_array[fire];
            make_fire();
            do_fire(fire_direcao);
        },


        87(posicao) {//up
            fire = 'up'
            player.posicao.y--
            move()

        },

        38(posicao) {//up
            fire = 'up'
            player.posicao.y--
            move()
        },

        68(posicao) {//right
            fire = 'right'
            player.posicao.x++
            move()
        },

        39(posicao) {//right
            fire = 'right'
            player.posicao.x++
            move()
        },

        65(posicao) {//left
            fire = 'left'
            player.posicao.x--
            move()
        },

        37(posicao) {//left
            fire = 'left'
            player.posicao.x--
            move()
        },

        83(posicao) {//down
            fire = 'down'
            player.posicao.y++
            move()
        },
        40(posicao) {//down
            fire = 'down'
            player.posicao.y++
            move()
        },
    }
    direcao = commands[tecla_press];
    if (direcao) {
        direcao(player);
    };
}

function move() {
    // colizao
    if (player.posicao.y <= 0 || player.posicao.x <= 0 || player.posicao.y > total_linha || player.posicao.x > total_coluna || player.move == 'none') {
        player.posicao.x = estava.x;
        player.posicao.y = estava.y;
        estava    = {};
    }

    $(table).find('th#' + player.posicao.y + '-' + player.posicao.x + '').addClass("player");

    if (estava.length != 0) {
        $(table).find('th#' + estava.y + '-' + estava.x + '').removeClass("player");
    }

    estava = {
        'y': player.posicao.y,
        'x': player.posicao.x
    };
    // pegar o item
    getItem()

}

function do_fire(fire_direcao) {
    var save = {};

    for (i = 0; i < player.itens.range; i++) {


        fire_direcao.cod[fire_direcao.l] += fire_direcao.move;


        fire_direcao.cod.id = fire_direcao.cod.y + '-' + fire_direcao.cod.x;

        $(table).find('th#' + fire_direcao.cod.id + '').addClass("fire");
         
        save[i] = fire_direcao.cod.id;
        player.move = 'none';
        setTimeout(function () {
            player.move = 'ative';
            requestAnimationFrame(gerar);
        }, 300);


    }
    fire_direcao.save = save;
}